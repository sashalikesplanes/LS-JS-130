function Pet(name, image) {
  this.name = name;
  this.image = image;
}

class Image {}
var catImage;
var pudding;

Pet.prototype.walk = function () {
  console.log(`${this.name} is walking.`);
};

Image.prototype.constructor = function (file) {
  this.file = file;
};

catImage = new Image("cat.png");
pudding = new Pet("Pudding", catImage);
