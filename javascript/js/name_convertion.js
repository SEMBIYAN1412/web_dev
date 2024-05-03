//simple perent class
class mypizza{
    crust="original";
    #sause="Tomato";    // private property use inside only class can't change value
    constructor(sizepizza){
    this.size=sizepizza;  
}
    getcrust(){
        return this.crust;
    }
    setcrust(crustpizza){
        this.crust=crustpizza;
    }
    bake(){
        return console.log(`baking a ${this.size} ${this.crust} ${this.#sause} pizza`);
    }
}

const pizza=new mypizza("medium");
pizza.bake();