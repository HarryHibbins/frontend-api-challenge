class Client{
  constructor(){
    this.userInfo = {user_id: "", session_key: ""}

  }
  getUserInfo(){
    return this.userInfo
  }
  loadPeeps = (callback) => {
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
    .then(response => response.json())
    .then(data => {
      callback(data)
      console.log('Success:', data);
    })
  }

  startSession = (data) => {
    fetch("https://chitter-backend-api-v2.herokuapp.com/sessions", {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
    this.userInfo.user_id = data.user_id
    this.userInfo.session_key = data.session_key
  })
  };
  createPeep = (data) => {
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps', {
    method: 'POST', // or 'PUT'
    headers: {
     'Content-Type': 'application/json',
     'Authorization': `Token token="${this.userInfo.session_key}"`
    },
    body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

}

module.exports = Client;