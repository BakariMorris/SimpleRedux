# Partitioning
Breaking one large TABLE into smaller TABLES

Pros:
    * Smaller files == faster queries Lookup is faster in smaller files
    * Smaller indexes can fit into memory
    * Dropping partitions is fast

Cons:
    * Complexity of maintenance (The entire system has to change the way it works)
    * Scanning all partitions is expensive
    * Harder to maintain uniqueness (Unique keys work for the table)


Strategies
    1. List of values
        > Place each type of order into a separate system

        Pros:
            Smaller tables
        Cons: 
            Uneven data distribution
            Need to move data between tables
    2. Range of dates
        > Breaking tables up by date
        Pros:
            Smaller tables
            Great if you want to get rid of old data
        Cons: 
            Uneven data distribution
    
    3. Partition by hash of a key
        Pick primary key, determine how many smaller tables we want. Get hash based on key & split
