# Web Socket
Once a connection is established the client & server can send messages simultaneously
Built on TCP, Duplex (two way) Protocol, Persistent connection, More efficient than polling with HTTP.

Great for a chat service

Pros: 
    * Create TCP connection only once
    * Real time message delivery to the client

Cons:
    * More complicated to implement than HTTP
    * May not have the best support in some languages
    * Load balancer may have some issues
    * Unlike REST, need to reinvent the 'protocol' every time


Polling: HTTP requests asking for data every setInterval
    * The application takes time opening and closing connections

Alternative:
    Long Polling: We wait until we get a new message to close the request
        Pros: 
            Real time message delivery
            Good to use if WebSockets are not available

        Cons: 
            May be hard to implement in some languages & frameworks e.g Ruby on Rails, Thread & Process based execution

