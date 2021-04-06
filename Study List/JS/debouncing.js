let counter = 0;
const getdata = () => {
    //Calls API and gets data
    console.log("Fetching Data ..". counter++);
}

const debounce = function (fn, d) {
    let timer;

    return function () {
        let context = this;

            clearTimeout(timer);
            timer = setTimeout(() => {
                getdata.apply(context, arguments)
            }, d)
    }
}

const betterFunciton = debounce(getData, 300);