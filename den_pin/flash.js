class flashLamp {
    constructor(battery = null) {
        this.battery = battery;
        this.status = false;
    }

    setBattery(battery) {
        this.battery = battery;
    }

    getBatteryInfo() {
        return this.battery ? this.battery.getEnergy() : 0;
    }

    light() {
        if (this.status && this.battery && this.battery.getEnergy() > 0) {
            console.log("Lighting");
            this.battery.decreaseEnergy();
        } else {
            console.log("Not lighting");
        }
    }

    turnOn() {
        this.status = true;
    }

    turnOff() {
        this.status = false;
    }
}