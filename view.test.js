/**
 * @jest-environment jsdom
 */

const View = require('./view')

const fs = require('fs');
describe(View, () => {
  it('displays a peep', () =>{
    document.body.innerHTML = fs.readFileSync('./index.html');
    const mockClient = {}

    const mockModel = {
      addPeep: (peep) => {
    },
      getPeeps: () => {
       return  [{user_id: 1, body: "peep 1"}, {user_id: 1, body: "peep 2"}]
      }
    };

    view = new View(mockModel)

    mockModel.addPeep('peep 1');
    mockModel.addPeep('peep 2');

    view.displayPeeps();

    // 3. There should now be 2 div.peep on the page
    expect(document.querySelectorAll('div.peep').length).toEqual(2);
    expect(document.querySelectorAll('div.peep')[0].textContent).toBe('peep 1');
    expect(document.querySelectorAll('div.peep')[1].textContent).toBe('peep 2');
  })
  it('loads peeps from an api', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  
  
    const mockClient = {
      loadPeeps: (callback) => callback([{body: 'mocked peep 1'},{body: 'mocked peep 2'}]),
    }
    
    const mockModel = {
      getPeeps: () => {
        return [{body: 'mocked API peep 1'},{body: 'mocked API peep 2'}]
      },
      setPeeps: (pepes) => {}
    }
    const view = new View(mockModel, mockClient)

    view.displayPeepsFromAPI();

    expect(document.querySelectorAll('div.peep').length).toEqual(2);
    expect(document.querySelectorAll('div.peep')[0].textContent).toBe('mocked API peep 1');
    expect(document.querySelectorAll('div.peep')[1].textContent).toBe('mocked API peep 2');
    
  })
  it ('Post peep: Takes the input field and passes it to the model and client class', () =>{
    document.body.innerHTML = fs.readFileSync('./index.html');

    const mockModel = {
      addPeep: (newPeep) => {},
      getPeeps: () => {
        return [{user_id: 1, body: "peep 1"}, {user_id: 1, body: "peep 2"}]
      }
    }
    const mockClient = {
      createPeep: (data) => {}
    }

    const view = new View(mockModel, mockClient)

    const inputEl = document.querySelector("#message-input")
    inputEl.value = 'mocked input peep'

    const postPeepButton = document.querySelector('#post-peep')
    postPeepButton.click()

    expect(document.querySelectorAll('div.peep').length).toEqual(3);
    expect(document.querySelectorAll('div.peep')[2].textContent).toBe('mocked input peep');
    
  })
})