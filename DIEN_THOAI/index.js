class Mobile {
    constructor() {
        this.battery = 100;
        this.sentMessages = [];
        this.receivedMessages = [];
        this.currentMessage = '';
        this.isOn = false;
    }

    checkBattery() {
        if (this.battery > 0 && this.isOn) {
            this.battery--;
            return true;
        }
        return false;
    }

    turnOn() {
        this.isOn = true;
    }

    turnOff() {
        this.isOn = false;
    }

    charge() {
        if (this.battery < 100) {
            this.battery += 1;
        }
    }

    composeMessage(message) {
        this.currentMessage = message;
    }

    receiveMessage(message) {
        if (!this.checkBattery()) return false;

        this.receivedMessages.push(message);
        return true;
    }

    sendMessage(phone) {
        if (!this.checkBattery()) return false;

        if (phone.receiveMessage(this.currentMessage)) {
            this.sentMessages.push(this.currentMessage);
            this.currentMessage = '';
        }
    }

    getReceivedMessages() {
        if (!this.checkBattery()) return '';

        return "Received Message List:<br>" + this.receivedMessages.map((msg, i) => `Message ${i}: ${msg} <br>`).join('');
    }

    getSentMessages() {
        if (!this.checkBattery()) return '';

        return "Sent Message List:<br>" + this.sentMessages.map((msg, i) => `Message ${i}: ${msg} <br>`).join('');
    }
}

const nokia = new Mobile();
const iphone = new Mobile();
nokia.turnOn();
iphone.turnOn();
nokia.composeMessage('Hello');
nokia.sendMessage(iphone);
document.getElementById("result").innerHTML = iphone.getReceivedMessages();