function Boat(a, b, c, d) {
  this.typeOfBoat= a;
  this.size= b;
  this.price= c;
  this.img = d;
};


var b1 = new Boat("Speed Boat", "34ft", "$250,000", "http://i.imgur.com/V4xc2bR.jpg");
var b2 = new Boat("Swamp Boat", "30ft", "Free", "http://i.imgur.com/Q2rPpqM.jpg");
var b3 = new Boat("Row Boat", "20ft", "$1,000,000,000", "http://i.imgur.com/NqsyIte.jpg");
var b4 = new Boat("Land Boat", "20ft", "$25,000,000,000", "http://i.imgur.com/F4cIMZ3.jpg");
var b5 = new Boat("War Boat", "5,000ft", "$50", "http://i.imgur.com/f3PQlq7.jpg");


var boats = [b1, b2, b3, b4, b5];

var app = new Vue ({
  'el': '#app',
  data: {
    boats: boats
  }
});
