class Temperature{
    celsius ;
    constructor(celsius){
        this.celsius = celsius;
    }
    fahrenheit(){
        return this.celsius * 9/5 + 32;
    }
    kelvins(){
        return this.celsius + 273.15
    }
}
let temperature = new Temperature(25);
let my_fahrenheit = temperature.fahrenheit();
let my_kelvins = temperature.kelvins();
document.write("nhiet do f : "+my_fahrenheit+"<br/>"+ "nhiet do k : "+my_kelvins);