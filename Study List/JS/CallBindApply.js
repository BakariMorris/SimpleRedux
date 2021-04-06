function printFullName (hometown, state) {
    console.log(this.firstname + " " + this.lastname + ' from ' + hometown + ' , ' + state)
  }
 
 let name = {
     firstname: 'Bakari',
     lastname: 'Morris'
 }
 
 let name2 = {
   firstname: 'Bakari',
   lastname: "Morris"
 }
 
 //function borrowing
 //Calls function immediately
 printFullName.call(name2, 'Queens', 'New York')
 
 //Similar to call but takes parameters as an array
 printFullName.apply(name2, ['Queens', 'New York'])
 
 //Does not execute immediately, returns a reference to the function to be executed later
 let printMyName = printFullName.bind(name2, ['Queens', 'New York'])
 console.log(printMyName)
 printMyName();