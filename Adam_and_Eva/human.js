class Human {
    constructor(name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;
    }
    getName(){
        return this.name;
}
setName(name){
        this.name = name;
}
getWeight(){
        return this.weight;
}
setWeight(weight){
        this.weight = weight;
}
isMale(){
        if(this.gender==1){
            return true;
        }
        else {
            return false;
        }
}
getGender(){
        if(this.gender){
            return 'male'
        }
        else {
            return 'female'
        }
}
say(string){
        console.log(string)
}
checkApple(apple){
        return apple.isEmpty
}
eat(apple) {
    if (apple.getWeight() > 0) {
        apple.decreaseApple(); //1
        this.weight++; //66
    } else {
        alert("Táo đã hết");
    }
}
    getInfo(human){
        alert(human.name + " " +human.weight + " " +human.getGender());
    }

}