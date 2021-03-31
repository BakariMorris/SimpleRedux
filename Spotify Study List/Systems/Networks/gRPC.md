# RPC
    * Remote Procedure Call
    * Invoke another service as if it is a local function
    * Function is describe din an abstract language:
        * IDL - Interface Description Language
    * Generator takes description as input, and creates a stub: implementation in a particular language
        > Stub produces no business logic
    * Takes care of marshalling and un-marshalling


# gRPC
    Language agnostic, base on Protobuf & HTTP2
    
    Pros: Fast, Great for communication between services
    Cons: Cannot use in browsers

    * Developed by Google
    * Uses Protocoll Buffers (Protobuf) as IDL
    * Uses HTTP2 as transport

    > Protobuf
        * Binary protocol, Not human readable
        *  Description is stored in * proto files
        * Messages are smaller & faster than JSON or XML
