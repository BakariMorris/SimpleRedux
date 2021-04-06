# Algo Interviews

1. Repeat the Question back to the interviewer and ask clarifying questions
    * How big is the size of the input
    * How big is the range of values
    * What kind of values are there? Are there negative numbers? Floating points? Empty inputs?
    * Are there duplicates within the input?
    * What are some extreme cases of the input
    * Can I destroy the original array/graph/data structure
    * How is the input stored? Is it a list of strings? A tree?

2. Explain the high level approach to the interviewer even if it is a naive solution. 
    > If you are stuck consider various approaches and explain out loud why it will not work.
    > Sometimes your interviewer will drop hints

3. Start with the brute force approach, communicate it to the interviewer
    > Explain why the time & space complexity is bad
    > Look for repeated work & try to optimize them by caching, calculated results & reference it later

4. Only start coding after you and your interviewer have agreed on an approach and they have given you the green light.


# How to get unstuck

1. Talk through what you initially thought might work and explain why it doesn't

2. Come up with more test cases and write them down

3. Think about how you would solve it without a program

4. Recall past questions related to the topic, what similar questions in the past have you encountered. How did you solve it?

5. Enumerate through the common data structure and whether they can be applied to the question

6. Look out for repeated work and determine if you can cache those computations. Memory for speed


# While Coding

1. Make sure the interviewer understands every line of your code. Use clear variable names, avoid single letter names.

2. Always be explaining what you are currently writing/typing to the interviewer. This is not about literally reading out what you are typing. Explain on a higher level and what we are trying to do.

3. Break your problems up into high level steps & write them out

4. Try not to copy and paste code DRY. Star things you are unsure about. Psuedocode solutions you are not sure about


# After coding

1. Review your code. Look through your code from start to finish as if it is the first time you are seeing it.

2. Come up with small test cases and step through the code with sample input.

3. Give the time/space complexity of your code and explain why it is such. Explain tradeoffs in your current approach.