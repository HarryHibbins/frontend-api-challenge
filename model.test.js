const Model = require('./model')

describe(Model, () => {
  it('peeps are initailly empty', () =>{
    model = new Model()

    expect(model.getPeeps()).toEqual([])
    
  })
  it('adds a peep', () =>{
    model = new Model()

    model.addPeep('peep 1')
    model.addPeep('peep 2')
    expect(model.getPeeps()).toEqual(['peep 1', 'peep 2'])
    
  })
  it('sets peeps', () =>{
    model = new Model()
    const peeps = ['set peep 1', 'set peep 2']
    model.setPeeps(peeps);
    expect(model.getPeeps()).toEqual(['set peep 1', 'set peep 2'])
  })
})