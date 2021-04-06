# Load Balancer 
Ex: NGINX, HAPPROXY, traefik
    A machine that runs reverse proxy software
    The goal is to distribute requests between multiple servers that host the application

    One server to catch requests and route them to the correct server

    Pros: Resilience(Only uses valid servers), Scalability(Add more servers)

    Distribution Strategies
        - Round Robin   (Common)
        - Least connections (Keeps track of # of connections)
        - Resource based (CPU of the server)
        - Weighted variants of the above
        - Random

    Types
        Level 4
            Transport Layer (TCP, UDP, IP, Port)

        Level 7
            Application layer
            Access to level 4
            Has HTTP header, cookies & payload
            