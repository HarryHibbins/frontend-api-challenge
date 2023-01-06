const Client = require('./Client');

// This makes `fetch` available to our test
// (it is not by default, as normally `fetch` is only
// available within the browser)
require('jest-fetch-mock').enableMocks()

describe(Client, () => {
  it('calls fetch and loads data', (done) => {
    // 1. Instantiate the class
    const client = new Client();

    // 2. We mock the response from `fetch`
    // The mocked result will depend on what your API
    // normally returns — you want your mocked response
    // to "look like" as the real response as closely as
    // possible (it should have the same fields).
    fetch.mockResponseOnce(JSON.stringify({
      id: 3,
      body: "my first peep :)",
      created_at: "2018-06-23T13:21:23.317Z"
    }));

    // 3. We call the method, giving a callback function.
    // When the HTTP response is received, the callback will be called.
    // We then use `expect` to assert the data from the server contain
    // what it should.
    client.loadPeeps((returnedDataFromApi) => {
      expect(returnedDataFromApi.id).toBe(3);
      expect(returnedDataFromApi.body).toBe("my first peep :)");
      expect(returnedDataFromApi.created_at).toBe("2018-06-23T13:21:23.317Z");

      // 4. Tell Jest our test can now end.
      done();
    });
  });
});