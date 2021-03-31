# CDN 
    Content Delivery Network (Cloudflare)
    Places static content on distributed servers

    Static content: Images, CSS, HTML, Javascript

    Pros: Reduces costs, Decreases latency for users far from origin
    Cons: Increases complexity

    Types: 
        Push: 
            > Ask the CDN to push the content to all of the nodes
                > Possibly more expensive
                
        Pull (Lazy): 
            > Looks for the cached data from the request
                If not there, then request the data from the origin server & cache
                Contains eviction timer: If the cache has not been refreshed for 24 hours, then pull from the server