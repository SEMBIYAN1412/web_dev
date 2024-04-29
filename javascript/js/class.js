//class

class mypizza{
    constructor(typepizza,sizepizza,crustpizza,pizzatoppigs){
    this.type=typepizza;
    this.size=sizepizza;
    this.crust=crustpizza;
    this.topppings=pizzatoppigs
}
bake(){
    return console.log(`Baking a ${this.type} ${this.size} size ${this.crust} pizza with ${this.topppings} toppings`);
}
}

//object
const anoterpizza=new mypizza("mirgarita","small","thin","olives");
anoterpizza.bake();