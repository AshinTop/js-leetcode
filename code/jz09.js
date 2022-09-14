var CQueue = function () {
  this.addQueue = []
  this.deleteQueue = []
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.addQueue.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {

  if (this.deleteQueue.length > 0) {
    return this.deleteQueue.pop()
  } else {
    while (this.addQueue.length > 0) {
      this.deleteQueue.push(this.addQueue.pop())
    }
    return this.deleteQueue.pop() || -1
  }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */