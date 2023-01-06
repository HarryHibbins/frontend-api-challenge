class View{
  constructor(model, client){
    this.model = model;
    this.client = client;

    this.mainContainerEl = document.querySelector('#main-container');
    this.showPeepsButton = document.querySelector('#show-peeps');

  }

  displayPeeps = () => {
    document.querySelectorAll(".peep").forEach(element => {
      element.remove();
    })
    const peeps = this.model.getPeeps();

    //Add peeps back including new one
    peeps.forEach(peep => {
      const peepEl = document.createElement('div');
      peepEl.textContent = peep;
      peepEl.className = 'peep';
      this.mainContainerEl.append(peepEl);
    })
  }

}

module.exports = View;