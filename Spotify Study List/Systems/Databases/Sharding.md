# Sharding
Takes a large database and splits it into multiple
Pros:
    * Ability to grow database horizontally

Cons: 
    * Added complexity
    * Cross shard operations are expensive
    * Data still may become unbalanced
    * Distributes keys not the values

    1. Tenant based sharding
        Pros:
            * Easy to understand
            * Easy to add a new shard
        
        Cons:
            * Uneven distribution, shards may still be too big to handle
            * Some types of systems may not have a good way to separate entities

    > Tenant based sharding: Good for systems with clear definitions between entities
        ex: userCountry, can create database for each country 
        Can push users into different databases or pull the user from one db to another

    2. Hash based sharding
        Pros:
            * Even distribution
            * Works well for key-value data
        
        Cons:
            * Adding new shards is difficult, need to change application logic
            * Weaker consistency (no foreign keys)

    3. Shard router
        To locate entities, the shard lookup can route to the correct user

        Pros:
            * Simplifies adding new shards

        Cons:
            * Single point of failure

    4. Custom Areas
        Divide the world into custom polygons
        
        Need a highly scalable location service, areas cannot overlap
