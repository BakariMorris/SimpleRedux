# Threads
Every process creates a thread
> e.g Javascript has the Main thread, Network thread & garbage collection thread

Every Thread has a Stack
The Stack stores:
    * Local variables
    * Method parameters
    * The call chain

Heap:
    > Contains all Memory for a process
    > Is shared between all threads (Problem multithreading)

Threads overhead (Shoul dbe limited):
    > Creating new threads are slow
    > OS limits the number of threads
    > Each thread consumes memory
    > Contention
        * Locks: Threads can write memory ot the same location. For multi-threading we lock the memory
        * CPU time: More threads need more power
        * Shared resources