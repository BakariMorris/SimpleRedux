let name = {
    firstname: "Bakari",
    lastname: "Morris"
  }
  
  let printName = function (hometown, city) {
    console.log(this.firstname + " " + this.lastname +  " " + hometown +  " " + city );
  }
  
  let printMyName = printName.bind(name, "New York", 'Boston');
  printMyName();
  
  //Bind is a variadic function, accepting infinite params
  Function.prototype.mybind  = function (...args) {
    let self = this;
      return function () {
        self.call(...args)
    }
  }
  
  
  let printMyName2 = printName.mybind(name, "New York", 'Boston');
  printMyName2();
  
  
  //Akshay Implementation
  // Function.prototype.mybind  = function (...args) {
  //   let self = this,
  //       params = args.slice(1);
    
  //     return function (...args2) {
  //       self.apply(args[0], [...params, ...args2]);
  //   }
  // }