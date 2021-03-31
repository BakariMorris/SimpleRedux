# REST

* Built on HTTP 
* Standard URL structure
* Standard use for HTTP verbs
* HTTP status codes to indicate errors
* JSON body

Used to create clear guidelines on how to structure your API

Methods
    > GET  - read (idempotent, safe)
    > DELETE - delete (safe)
    > POST - create ()
    > PUT - update (idempotent)

Safety: Should not change entity in any way
Idempotency: Can repeat action without changing anything on the system



Structure: METHOD /[resource-name]/[resource-id]
    GET /users/123  NOT /user/123 or /getUser/123
    Always use pagination & sorting abilities in an API

    > Nesting
        METHOD /[resource/id]/[resource/id]
        DELETE /users/123/books/567

    > State
        PUT /[resource/id]/[action]  PUT/users/567/enable