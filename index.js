const Model = require("./model")
const View = require("./view")
const Client = require("./client");

console.log("The app is running")

model = new Model();
client = new Client();
view = new View(model, client)


model.addPeep("This is an example peep")
const info = {handle: "kay" , password: "mypassword"}
client.startSession(info);
view.displayPeepsFromAPI();
// view.displayPeeps();
