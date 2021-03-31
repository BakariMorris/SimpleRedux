# Main topics:
    > Marketplace
    > Geolocation
    > Geosharding


# Steps
    1. How we expect the system to work on a user level
        Check with your interviewer after making assumptions

    2. Marketplace
        * How many users we need to support, how many are active
            > This affects storage requirements
            Requests per second stresses our system the most
            ex: 
                * 100M Riders
                * 10M active Riders
                * 10 rides per month on average
        * Ask about the different users
            ex:
                * 1M Drivers in total
                * 500k active Drivers
                * Average shift: 6 hours
        * What type of users are there and how are their characteristics different

    3. Matching
        * Once a user makes a request does it go to one driver or multiple

    4. Look at the most complicated part first
        > How often should I look for location updates?
            * Drivers send them 5 seconds, the user needs a steady flow of updates

    5. Create the data model
        > Getting location
            * latitude: float
            * longitude: float
            * direction: float
            * driver_id: uuid

    6. Throughput: Drivers
        Requests per second
        How many requests during the peak x2 or x4 or x10
        The peak depends on the system, be realistic

        > 500k Active drivers
        > Average shift: 6 hours

        > Calc 24hours / 6 hour shift ->  4 shifts a day
        > (500k / 4) -> 125k drivers at every moment on average
        > 125k drivers / 5 seconds -> 25k requests per second

    7. Sharding
        To scale read: Read replicas
        To scale writes: Sharding

        ex: store 50k inserts we need 10 shards with similar amounts of data
        Shard the data based on GeoSharding, Ubers h3 or Google's s2
    
    8. Throughput: Users
        * 10M active riders
        * 5 app opens per day per user
        * Session time is 1 minute = 12 refreshes
        * 10 Rides per month

        * 10M * 5 = If everyone was on 50M User requests per second
        * Session time is 60 secs / 5 requests/sec = 12 refreshes
        * 50M * 12 = 600M requests per day
        * 600M / 24 = 25M requests per hour
        * 25M / 60 = 400k requests per minute
        * 400k / 60 = 6666 > 7k requests / minute


        requests per second
        requests every 5 seconds
        session time is 60 seconds / 5 rq/sec => 12 requests / session
        5 sessions / day  & 12 requests / session => 60 requests / day
        10M users / day * 60 requests / day
        600M usr requests/day  /  24 hours/day  /  60 minutes/hour  /  60 seconds/minute

        7k requests / second


    9. Getting driver positions
        The user will 
            > Use a REST API to make requests
            > Use the shard locator to ge the general location of the user
        
        Create GeoSpatial search in the DB
            > This returns the 10 closest drivers to the passed in x and y
                > PostGRE SQL, MongoDB
                    > Query a replica to scale the reads
                    > Indexing worker process for shard that will query the database once in a while & create a build in memory index
                    > Use kd3 to create geoSpatial memory in index
    

    10. Matching
        > Create a matching service which will talk to the drivers closest to the user
        > This pulls from the sharded storage

        * What is the strategy?
            > Sequential
                * Give the request to each driver, if it times out or is rejected, show to the next driver. Slow for the user
                Pros: Allows drivers to focus on driving Cons: Bad for the user because they have to wait
            > Concurrent
                * Give the request to all of the drivers, the first to accept wins the ride.
                Pros: Faster for users Cons: Safety risks in practice, annoying for the drivers
        
        * Create a Driver Gateway to communicate with the driver
            > Create a WebSocket to the driver
                * Use this to Match with the users & interface with the Driver Location service
        
        * Create Rider Gateway to create single point of entry for the mobile application
            > Uses simple polling,to check if we have a ride matched 