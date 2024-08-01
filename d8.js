class Stack {
    constructor() {
      this.stack = [];
    }
  
    // Agrego un elemento al final del stack
    push(element) {
      this.stack.push(element);
    }
  
    // Remuevo y retorno el ultimo elemento del stack
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.stack.pop();
    }
  
    // Retorno el ultimo elemento sin removerlo
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.stack[this.stack.length - 1];
    }
  
    // Checkeo si el stack esta vacio
    isEmpty() {
      return this.stack.length === 0;
    }
  

    printStack() {
      if (this.isEmpty()) {
        console.log("Stack is empty");
        return;
      }
  
      console.log("Stack:");
      console.log(this.stack.join(" -> "));
    }
  }
  
  
  const stack = new Stack();
  
  
  stack.push('Element 1');
  stack.push('Element 2');
  stack.push('Element 3');
  stack.push('Element 4');
  stack.push('Element 5');
  
  console.log("Stack after pushing 5 elements:");
  stack.printStack();
  
  
  console.log("\nPopped element:");
  console.log(stack.pop());
  
  console.log("\nStack after popping an element:");
  stack.printStack();

  
  class Queue {
    constructor() {
      this.queue = [];
    }
  
    
    enqueue(element) {
      this.queue.push(element);
    }
  
    
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.queue.shift();
    }
  
    
    front() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.queue[0];
    }
  
    
    isEmpty() {
      return this.queue.length === 0;
    }
  
    
    printQueue() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return;
      }
  
      console.log("Queue:");
      console.log(this.queue.join(" -> "));
    }
  }
  
  
  const queue = new Queue();
  
 
  queue.enqueue('Element 1');
  queue.enqueue('Element 2');
  queue.enqueue('Element 3');
  queue.enqueue('Element 4');
  queue.enqueue('Element 5');
  
  console.log("Queue after enqueueing 5 elements:");
  queue.printQueue();
  
  console.log("\nDequeued element:");
  console.log(queue.dequeue());
  
  console.log("\nQueue after dequeuing an element:");
  queue.printQueue();
  