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
      getPeeps: () => {return ['peep 1','peep 2']}
    };

    view = new View(mockModel)

    mockModel.addPeep('peep 1');
    mockModel.addPeep('peep 2');

    view.displayPeeps();

    // 3. There should now be 2 div.peep on the page
    expect(document.querySelectorAll('div.peep').length).toEqual(2);
    expect(document.querySelectorAll('div.peep')[0].textContent).toBe('peep 1');
    

  })
})