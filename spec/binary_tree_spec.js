var BinTree = require("../binary_tree.js")

describe("BinTree", function(){

  describe("hasOwnProperty", function(){
    var binTree = new BinTree();
    it("value", function(){
      expect(binTree.hasOwnProperty("value")).toBe(true);
    });

    it("left", function(){
      expect(binTree.hasOwnProperty("left")).toBe(true);
    });

    it("right", function(){
      expect(binTree.hasOwnProperty("right")).toBe(true);
    });
  });

  describe("has constructor defaults", function(){
    var binTree = new BinTree();

    it("set left to null", function(){
      expect(binTree.left).toBe(null);
    });

    it("set right to null", function(){
      expect(binTree.right).toBe(null);
    })
  });

  describe("prototype has method", function(){
    var binTree = new BinTree();
    var proto = BinTree.prototype;

    it("#insert", function(){
      expect(proto.hasOwnProperty("insert")).toBe(true);
    });

    it("#search", function(){
      expect(proto.hasOwnProperty("search")).toBe(true);
    });

    it("#isLeaf", function(){
      expect(proto.hasOwnProperty("isLeaf")).toBe(true);
    });

  });

  describe("#insert", function(){
    var binTree

    beforeEach(function(){
      binTree = new BinTree(5);
    });

    it("should add BinTree to this.left for newValue less than this.value",function(){
      binTree.insert(4);
      expect(binTree.left).not.toBe(null);
      expect(binTree.left.value).toEqual(4);
    });

    it("should add BinTree to this.right for newValue greater than this.value",function(){
      binTree.insert(6);
      expect(binTree.right).not.toBe(null);
      expect(binTree.right.value).toEqual(6);
    });

    it("should be able to insert multiple nodes recursively to the left of the root", function() {
      [4,1,0,2].forEach(function(v) {
        binTree.insert(v);
      });
      expect(binTree.value).toEqual(5);
      expect(binTree.left.value).toEqual(4);
      expect(binTree.left.left.value).toEqual(1);
      expect(binTree.left.left.left.value).toEqual(0);
      expect(binTree.left.left.right.value).toEqual(2);
    });


    it("should be able to insert multiple nodes recursively to the right of the root", function() {
      [6,10,7,12].forEach(function(v) {
        binTree.insert(v);
      });
      binTree.insert(6);
      binTree.insert(10);
      binTree.insert(7);
      binTree.insert(12);
      expect(binTree.value).toEqual(5);
      expect(binTree.right.value).toEqual(6);
      expect(binTree.right.right.value).toEqual(10);
      expect(binTree.right.right.left.value).toEqual(7);
      expect(binTree.right.right.right.value).toEqual(12);
    });

    it("should return this", function(){
      expect(binTree.insert(2)).toBe(binTree);
    });

  });

  describe("#search", function(){
    var binTree = new BinTree(5);
    [3,1,2,6,7,8,9].forEach(function(v) {
      binTree.insert(v);
    });
    it("should find a value in binTree with many values", function(){
      [3,1,2,6,7,8,9].forEach(function(v) {
        expect(binTree.search(v)).toBe(true);
      });
    });
    it("should return true, when it's found", function() {
      expect(binTree.search(8)).toBe(true);
    });
    it("should return false, when it's not found", function() {
      expect(binTree.search(20)).toBe(false);
    });
  });

  describe("isLeaf", function(){
    var binTree = new BinTree(5);

    [3,1,2,6].forEach(function(v) {
      binTree.insert(v);
    });
    
    it("should check to see if a node is a leaf", function(){
      expect(binTree.left.left.right.isLeaf()).toBe(true);
      expect(binTree.right.isLeaf()).toBe(true);
    });
  });

});