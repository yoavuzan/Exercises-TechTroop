class BSNode {
  constructor(value) {
    this.value = value;
    this.leftChild;
    this.rightChild;
  }

  insertNode(newVal) {
    if (!this.value) {
      this.value = newVal;
    } else if (newVal > this.value && this.rightChild) {
      this.rightChild.insertNode(newVal);
    } else if (newVal <= this.value && this.leftChild) {
      this.leftChild.insertNode(newVal);
    } else if (newVal <= this.value) {
      this.leftChild = new BSNode(newVal);
    } else {
      this.rightChild = new BSNode(newVal);
    }
  }

  findNode(val) {
    let v = this.value;
    if (val === this.value) {
      return true;
    } else if (this.rightChild && val >= this.value) {
      return this.rightChild.findNode(val);
    } else if (this.leftChild && val >= this.value) {
      return this.leftChild.findNode(val);
    } else {
      return false;
    }
  }

  findCommonParent(left, right) {
    const min = left < right ? left : right;
    const max = left > right ? left : right;
    if (this.value === left && this.value === right) {
      return this.value;
    }
    if (this.value > min && this.value < max) {
      return this.value;
    } else if (this.value >= max && this.leftChild) {
      return this.leftChild.findCommonParent(left, right);
    } else if (this.value <= min && this.rightChild) {
      return this.rightChild.findCommonParent(left, right);
    }
  }
  
  removeNode(node, val) {
    if (!node) return null;

    if (val < node.value) {
      node.leftChild = this.removeNode(node.leftChild, val);
    } else if (val > node.value) {
      node.rightChild = this.removeNode(node.rightChild, val);
    } else {
      // to remove
      if (!node.leftChild && !node.rightChild) {
        return null;
      }

      if (!node.leftChild) {
        return node.rightChild;
      }

      if (!node.rightChild) {
        return node.leftChild;
      }

      // tow kids
      let minLargerNode = this._findMin(node.rightChild);
      node.value = minLargerNode.value;
      node.rightChild = this.removeNode(node.rightChild, minLargerNode.value);
    }

    return node;
  }

  _findMin(node) {
    while (node.leftChild) {
      node = node.leftChild;
    }
    return node;
  }
}

const numbers = [8, 9, 12, 3, 5, 1, 11, 4];
let nodeWithOneChild = new BSNode();
numbers.forEach((n) => nodeWithOneChild.insertNode(n));
console.log(nodeWithOneChild.removeNode(nodeWithOneChild, 9)); // will return tree like the first image (the 9 will be deletied)

let nodeWithTwoChildren = new BSNode();
numbers.forEach((n) => nodeWithTwoChildren.insertNode(n));
console.log(nodeWithTwoChildren.removeNode(nodeWithTwoChildren, 8)); // will return tree like the second image (the root will be 5)
