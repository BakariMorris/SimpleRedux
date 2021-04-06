# CAP
C - Consistency
A - Availability
P - Partition tolerance

Mostly about NoSQL
Mostly about writes

All nodes see the same data but may not be able to write

We can choose Consistency or Availability
    Consistency: If we don't have access to every place the data is set, we cannot return the data. The data may have two different versions with different values

    Availability: If we have access to any nodes return the result regardless if it is consistent across databases

    Conflict Resolution
        Majority based - The more databases with the same value is determined as the truth
        Timestamp based - The latest value is determined as the truth