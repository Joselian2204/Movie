export default class Display{
    constructor(moviesInfo, template, container){
        this.moviesInfo = moviesInfo;
        this.template = template;
        this.container = container;
        this.fragment = new DocumentFragment();
        this.clone = this.template.cloneNode(true);
        this.card = this.template.querySelector(".card");
    }

    displayDefaultCards(){
        
    }

}