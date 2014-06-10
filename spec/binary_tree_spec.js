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
    })
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
    var proto = BinTree.prototype;

    it("#insert", function(){
      expect(proto.hasOwnProperty("insert")).toBe(true);
    });

    it("#search", function(){
      expect(binTree.hasOwnProperty("search")).toBe(true);
    });

    it("#max", function(){
      expect(binTree.hasOwnProperty("max")).toBe(true);
    });

    it("#min", function(){
      expect(binTree.hasOwnProperty("min")).toBe(true);
    });

    it("#toArray", function(){
      expect(binTree.hasOwnProperty("toArray")).toBe(true);
    });

    it("#sortedArray", function(){
      expect(binTree.hasOwnProperty("sortedArray")).toBe(true);
    });

    it("#isLeaf", function(){
      expect(binTree.hasOwnProperty("isLeaf")).toBe(true);
    });    

  });
})