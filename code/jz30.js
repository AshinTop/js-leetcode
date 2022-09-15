/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.mainStack = []
  this.min_stack = []
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function (x) {
  this.mainStack.push(x)
  if (this.min_stack.length === 0) {
    this.min_stack.push(x)
  } else {
    this.min_stack.push(Math.min(x, this.min_stack[this.min_stack.length - 1]))
  }
};

/**
* @return {void}
*/
MinStack.prototype.pop = function () {
  this.mainStack.pop()
  this.min_stack.pop()

};

/**
* @return {number}
*/
MinStack.prototype.top = function () {
  return this.mainStack[this.mainStack.length - 1]
};

/**
* @return {number}
*/
MinStack.prototype.min = function () {
  return this.min_stack[this.min_stack.length - 1]
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.min()
*/