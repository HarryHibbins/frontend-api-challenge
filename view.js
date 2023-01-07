class View{
  constructor(model, client){
    this.model = model;
    this.client = client;

    this.mainContainerEl = document.querySelector('#main-container');
    this.postPeepButton = document.querySelector('#post-peep');

    this.postPeepButton.addEventListener('click', () => {
      const newPeep = document.querySelector("#message-input").value;
      this.postNewPeep(newPeep);
      document.querySelector("#message-input").value = "";
    });

  }

  displayPeeps = () => {
    document.querySelectorAll(".peep").forEach(element => {
      element.remove();
    })
    const peeps = this.model.getPeeps();

    //Add peeps back including new one
    peeps.forEach(peep => {
      const peepEl = document.createElement('div');
      peepEl.textContent = peep.body;
      peepEl.className = 'peep';
      this.mainContainerEl.append(peepEl);
    })
  }

  displayPeepsFromAPI(){
    this.client.loadPeeps(peeps => {
      this.model.setPeeps(peeps);
      this.displayPeeps();
    });

  }

  postNewPeep = (newPeep) => {
    this.model.addPeep(newPeep);
    this.displayPeeps();
    const data = {user_id: this.client.getUserInfo().user_id, body: newPeep };
    this.client.createPeep(data)
  }

}

module.exports = View;