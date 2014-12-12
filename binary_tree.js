function BinTree(value){
  this.left = null;
  this.right = null;
  this.value = value;
}


BinTree.prototype.insert = function(value){
  if (value < this.value) {
    if (this.left == null) {
      this.left = new BinTree(value);
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (this.right == null) {
      this.right = new BinTree(value);  
    } else {
      this.right.insert(value);
    }    
  }
  return this;
};

BinTree.prototype.isLeaf = function(){
  return !this.left && !this.right;
};

BinTree.prototype.search = function(value){
  if (value == this.value) {
    return true;
  } else if (this.isLeaf()) {
    return false;
  };

  if (value < this.value) {
    return this.left.search(value);
  }

  if (value > this.value) {
    return this.right.search(value);
  }
};


try{
  module.exports = BinTree;
} catch(e){

}
