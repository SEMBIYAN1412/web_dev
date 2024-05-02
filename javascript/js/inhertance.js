//simple perent class
class mypizza{
    constructor(sizepizza){
    this.size=sizepizza;
    this.crust="original";
    
}
    getcrust(){
        return this.crust;
    }
    setcrust(crustpizza){
        this.crust=crustpizza;
    }
}

class specialpizza extends mypizza{
    constructor(sizepizza){
        super(sizepizza) ;   // link parent class property
        this.type="margarita"
    }
    slice(){
        console.log(`our ${this.type} ${this.size} ${this.crust} pizza has 8 slices`);
    }
}

const myspecialpizza=new specialpizza("mideum");
myspecialpizza.slice();