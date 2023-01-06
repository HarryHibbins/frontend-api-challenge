class Client{
  loadPeeps = (callback) => {
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
    .then(response => response.json())
    .then(data => {
      callback(data)
      console.log('Success:', data);
    })
  }

}

module.exports = Client;