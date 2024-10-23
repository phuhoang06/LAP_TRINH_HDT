const battery = new Battery(10);
const flash = new flashLamp(battery);

flash.turnOn();
flash.light(); // Lighting, giảm năng lượng
console.log(flash.getBatteryInfo()); // In ra năng lượng còn lại