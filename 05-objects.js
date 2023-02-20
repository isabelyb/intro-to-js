//Create object literaly

const cookie = {
    name: "Chocolate chip",
    isGlutenFree: false,
    eatCookie: function () {
        console.log("I am eating " + this.name);
    }
//    "+Yummy": true
};


cookie.name = "Chip Chocolate";

//console.log(cookie);
//console.log(cookie["+Yummy"]);
//cookie.eatCookie();


//Create object using classes

class Cookie {
    constructor(name, isGlutenFree) {
        this.name = name;
        this.isGlutenFree = isGlutenFree;
    }

    eatCookie() {
        console.log("I am eating " + this.name);
    }
}
const myCookie = new Cookie("Iced Oatmeal", false);

//console.log(myCookie);
myCookie.eatCookie();