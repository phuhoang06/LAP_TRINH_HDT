class Swichbutton {
    status; lamp;
    constructor(status, lamp) {
        this.status = status;
        this.lamp = lamp;
    }
    getLamp(){
        return this.lamp;
    }
    setLamp(lamp){
            this.lamp = lamp;
    }
    connectToLamp(ElectricLamp){
        return this.lamp = ElectricLamp;
    }
    swichOff(){
        this.lamp = false;
        return this.status = false;
    }
    swichOn(){
        this.lamp = true;
        return this.status = true;
    }

}