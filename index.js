class Polygon{
  constructor(sidesArray){
    this.sidesArray = sidesArray;
  }
  
  get countSides(){
    return this.sidesArray.length;
  }
  
  get perimeter(){
    
  }
  
  // get perimeter() {
  //   if (!Array.isArray(this.sides)) return;
  //   let sum = 0;
  //   for (var int of this.sides) {
  //     sum += int
  //   }
  //   return sum
  // }
  
}