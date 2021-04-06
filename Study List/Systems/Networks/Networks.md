 -TCP (WebSockets, HTTP, REST, gRPC, GraphQL) Russian doll
        Pros: Reliable, ordered, error-checked
        Cons: Slower than other protocols

        -Reliable
            Both sides confirm connection
            Breaks up payload in pieces
            If it thinks the sender did not get a piece, it sends it again
            TCP order keeps track of the order the pieces are in
            
            Checksum allows the sender & reciever to resend packets it thinks are corrupted
    
    -UDP
        Pros: Sends local data quickly
        Cons: Can lose data (Can you afford to?)

        Used for:
            Monitoring metrics, Stocks
            Video streaming
            Gaming

        Faster than TCP because of no error checking
        Doesn't number the packets & doesn't error check
        The data could be malformed or in the wrong order