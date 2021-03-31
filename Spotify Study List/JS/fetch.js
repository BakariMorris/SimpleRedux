const getData = () => {
    fetch('http://api.weatherapi.com/v1/current.json?key=d4d1a8e49cef408cb9130516211903&q=New York&aqi=no')
      .then(data => showData(data))
     .catch(e => console.log("That didn't work", e))
   }
   
   const showData = data => {
     console.log(data, 'test');
   }
   
   getData()