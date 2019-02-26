const multiplier ={
  numbers: [1,2,3,4,5],
  multiplyBy: 2,
  multiply(){
    return this.numbers.map((number) => this.multiplyBy * number);
  }
};

console.log(multiplier.multiply());
