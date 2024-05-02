//class

class mypizza{
    constructor(typepizza,sizepizza,crustpizza){
    this.type=typepizza;
    this.size=sizepizza;
    this.crust=crustpizza;
    this.topppings="olives";
}
    bake(){
        return console.log(`Baking a ${this.type} ${this.size} size ${this.crust} pizza with ${this.topppings} toppings`);
    }
    getToppings(){
        return this.topppings;
    }
    setToppings(toppingspizza){
        this.topppings=toppingspizza;
    }
}

//object
const anoterpizza=new mypizza("mirgarita","small","thin");
anoterpizza.setToppings("sassuage");
anoterpizza.bake();
console.log(anoterpizza.getToppings());