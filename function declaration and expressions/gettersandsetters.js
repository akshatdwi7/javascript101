// getter = special method that make a property readable
// setters = special method that makes a properety writaable

// validate and modify the value when reading a property

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth;
    } else {
      console.error("width must be a postitive number");
    }
  }

  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight;
    } else {
      console.error("height must be postive number ");
    }
  }
  get width() {
    return `${this._width.toFixed(1)}cm`;
  }
  get height() {
    return `${this._height.toFixed(1)}cm`;
  }
  get area() {
    return this._width * this._height;
  }
}

rectangle = new Rectangle(1, 90);
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);
