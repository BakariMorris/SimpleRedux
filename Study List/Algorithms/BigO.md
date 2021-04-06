# Big O

1. If you have two different steps in your algorithm, add them up
    > doStep1(); // O(a)
    > doStep2(); // O(b)
    > = O(a + b)

2. Drop constant operations
    > funciton minMax1(array) {
        min, max <= NULL
        foreach (e in array) {
            min = min(e, min)
        }
        foreach (e in arrray ) {
            max = max(e, max)
        }
    }

    > function minMax2(array) {
        min, max <= NULL

        foreach (e in array);
            min = min(e, min)
            max = max(e, max)
    }

    **THESE ARE THE SAME O(2N) => O(N)**

3. Different inputs mean different variables
    function intersectionSize(arrayA, arrayB){
        int count = 0;

        for a in arrayA {
            forb b in arrayB {
                if a == b {
                    count = count + 1
                }
            }
        }
        return count;
    }

    **NOT O(N^2) it is O(a * b)**


4. Drop non-dominate terms
    Find the fastest growing term & focus on that
    Take out the coefficient