function Mobile() {
    this.battery = 100;
    this.sentMess = [];
    this.receivedMess = [];
    this.currentMess = '';
    this.isOn = false;
    this.checkBattery = function () {
        if (this.battery > 0 && this.isOn) {
            this.battery--;
            return true;
        }
        return false;
    }
    this.turnOn = function () {
        this.isOn = !this.isOn;
    }
    this.charging = function () {
        this.battery += 1;

    }
    this.composingMess = function (message) {
        this.currentMess = message;
    }
    this.receivingMess = function (message) {
        if (this.checkBattery()) {
            this.receivedMess.push(message);
            return true;
        }
        return false;
    }
    this.sendingMess = function (phone) {
        if (this.checkBattery())
            if (phone.receivingMess(this.currentMess)) {
                this.sentMess.push(this.currentMess);
                this.currentMess = '';
            }
    }
    this.seenReceiveMess = function () {
        if (!this.checkBattery()) {
            return '';
        }
        let s = " Received Message List      <br>";
        for (let i = 0; i < this.receivedMess.length; i++) {
            s += `Message ${i}: ${this.receivedMess[i]} <br>`
        }
        return s;
    }


    this.seenSendMess = function () {
        if (!this.checkBattery()) {
            return '';
        }
        let s = "=== Sent Message List === <br>";
        for (let i = 0; i < this.sentMess.length; i++) {
            s += `Message ${i}: ${this.sentMess[i]} <br>`;
        }
        return s;
    }
}
let nokia = new Mobile();
let iphone = new Mobile();
nokia.turnOn();
iphone.turnOn();
nokia.composingMess('Hello');
nokia.sendingMess(iphone);
document.getElementById("result").innerHTML = iphone.seenReceiveMess();


