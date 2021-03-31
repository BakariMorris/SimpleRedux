function makeRequest(location) {
    return new Promise((resolve, reject) => {
      console.log(`Making Request to ${location}`);
      if(location === 'Google') {
        resolve('Google says hi');
      } else {
        reject('We can only talk to google');
      }
    })
  }
  
  function processRequest(response) {
    return new Promise((resolve, reject) => {
      console.log('Processing response')
      reject('testtest')
      resolve(`Extra Information + ${response}`)
    })
  }
  
  const display = message => console.log(message);
  
  
  const doWork = async () => {
    try {
      
    const response = await makeRequest('Google');
    display(response);
    const processedResponse = await processRequest(response);
    display(processedResponse);
    } catch (err) {
      display(err);
    } finally {
      display('finally');
    }
  }
  
  doWork();