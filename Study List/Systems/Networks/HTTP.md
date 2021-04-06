# HTTP
Hypertext transfer protocol - Layer 7 Application
Hypertext: text with links to other documents

Based on TCP
Request, Response protocol

    > Response
        > Status
        > Headers
        > Body (Optional)

    > Methods 
        * GET - read (JSON)
        * DELETE - delete
        * POST - create
        * PUT - update
        * PATCH - partial update

    > Status codes
        * 100 - 199 Informational
            > 100 Continue
        * 200 - 299 Successful
            > 200 OK
            > 201 Created
        * 300 - 399 Redirection
            * Moved Permanently
        * 400 - 499 Client Error
            > 401 Unauthorized (Not logged in)
            > 403 Forbidden 
            > 404 Not Found
        * 500 - 599 Server Error
            > 500 Internal Server Error
            > 503 Service Unavailable