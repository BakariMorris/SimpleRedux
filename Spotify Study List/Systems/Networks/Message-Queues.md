# Message Queue

A queue of messages sent between applications, it includes a sequence of work objects that are waiting to be processed.

* Provides temporrary message storage when the destination program is busy or not connected.
* FIFO, MEssage is the data between the sender & receiver. A byte array with headers at the top. 

They contain:
    > Producers that create messages and deliver them to the message queue
    > Consumer connects to the queue and gets the messages to be processed.
    > Messages on the queue are stored until the consumer retrieves them