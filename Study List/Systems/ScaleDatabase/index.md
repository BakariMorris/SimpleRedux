# Scale Reads
    > Add Replicas: Copying data from one database to another
        Pros: Allows us to load balance the database
        Cons: Replication lag, expensive
    
    > Sharding: Split into different databases by key
        Pros: 
        Cons: 
            > Hard to find a good key to create shards on, 
                * ex: taxi -> Geosharding, chat -> sorted Hash of users