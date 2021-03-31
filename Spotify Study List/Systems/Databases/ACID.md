# ACID
A set of requirements for data
A - Atomicity
C - Consistency
I - Isolation
D - Durability

Pros:
Cons:
    Complex, need to store data in memory
    Database needs to do checks to keep the database ACID
    Durability needs to write to disk & can be slow

> Atomicity
    If an operation fails, it does not mutate data
    Everything succeeds or everything fails

> Consistency
    If you try to enter something that is wrong, your transaction will fail
    All of the validations are executed

> Isolation
    Nothing is seen by the users until we commit
    Until the resource exists the other users cannot see the result of that operation

> Durability
    Everything is saved to disk on commit
    If the physical location of the data is lost, the data will still be safe

