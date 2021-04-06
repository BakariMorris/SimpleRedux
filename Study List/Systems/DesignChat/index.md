# Chat
1. Ask clarifying questions
    > How many active users
        > 100M Active users
    > How many chats we need to support at the same time
        > 1M chats
    > How many messages per day
        > 1 Billion
    > What platforms do we need to support
        > Mobile & Web
    > Do we need to support group chats
        > No

2. Explain the application in the Users' perspective
    > Look for the visual representation of how this is going to work

3. Put scalability design aside & start design on the first 100 users
    > Design the data structure
    > Look at how we are going to query the data
    > Create a test query

4. Identify bottlenecks

5. Get throughput
    messages / second
    1 Billion messages/day  /  24 hours/day / 60 minutes/hour  /  60 seconds/minute
    12k messages/second 
    Not terrible
    
    1M chats at a time 
    Refresh every 5 seconds
    1M chats * .2 refreshes/second
    200,000 chat refreshes / second
    Pretty terrible


6. Scale reads
    > Look to push messages instead of polling
    > Use web sockets to increase scalability

    *  XScale the database by adding replicasX
        > Use a load balancer to properly route the requests
        > The reads should 
    > Shard the database
        * Figure out which key works best for your data
            > Create key by hashing the sorted users => ([Neo, Trinity])


7. Reduce the reads by adding a queue
    > Only connect to the database to get the chat history
    > Handle messages via a message queue
    > In order ot do this in teh real world, we utilize a Message Multiplexer
        -> Picks one of the outbound queues based on the sharding key
        -> Uses that queue to return user data