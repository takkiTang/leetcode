/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.queueIn = []
    this.queueOut = []
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queueIn.push(x)
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    while(this.queueIn.length > 1){
        this.queueOut.push(this.queueIn.shift())
    }
    let res = this.queueIn.shift();
    [this.queueOut,this.queueIn] = [this.queueIn,this.queueOut]
    return res
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    while(this.queueIn.length > 1){
        this.queueOut.push(this.queueIn.shift())
    }
    let res = this.queueIn[0];
    return res
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return !this.queueIn.length && !this.queueOut.length
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */