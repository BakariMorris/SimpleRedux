Here’s a brief reminder of the recommended interview structure:

Name your services
Establish the feature scope and constraints
Describe high-level architecture
Drill Down: design and scale core components
Scaling the design
Tradeoffs and future improvements


- you will sent calculation request to CDN (possible said by error)
- do not name a service 'Service' or backend service
- why retry 3 times? what happens if the calc request is like '3/0' which is arithmetical error, so you don't have to retry
- still do not leave the connection open.

Comm & datamodel
Design, create services first & then expand on what they do

noSQL for scaling
Message queue, if dies, it would be picked up by another service

Lookup:
    NoSQL databases
    Memecached & LRU cache

https://github.com/donnemartin/system-design-primer/tree/master/solutions/system_design/pastebin#design-pastebincom-or-bitly