class PriorityQueue {
    constructor() {
      this.queue = [];
    }
  
    // Insert an element with a priority
    enqueue(element, priority) {
      const queueElement = { element, priority };
      let added = false;
  
      // Loop through the queue to find the correct position based on priority
      for (let i = 0; i < this.queue.length; i++) {
        if (queueElement.priority < this.queue[i].priority) {
          this.queue.splice(i, 0, queueElement); // Insert at the correct position
          added = true;
          break;
        }
      }
  
      // If not added, push it to the end
      if (!added) {
        this.queue.push(queueElement);
      }
    }
  
    // Remove and return the highest-priority element
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.queue.shift(); // Remove the first element
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.queue.length === 0;
    }
  
    // Print the queue in a tabular format
    printQueue() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return;
      }
  
      console.log("Priority Queue:");
      console.log("Index\tPriority\tElement");
      console.log("-----\t--------\t-------");
      this.queue.forEach((item, index) => {
        console.log(`${index}\t${item.priority}\t\t${item.element}`);
      });
    }
  }
  
  // Testing the PriorityQueue
  const pq = new PriorityQueue();
  
  // Insert 5 elements
  pq.enqueue('Event 1', 2);
  pq.enqueue('Event 2', 1);
  pq.enqueue('Event 3', 3);
  pq.enqueue('Event 4', 2);
  pq.enqueue('Event 5', 1);
  
  console.log("Queue after enqueueing 5 elements:");
  pq.printQueue();
  
  // Remove the highest-priority element
  console.log("\nDequeued element:");
  console.log(pq.dequeue());
  
  console.log("\nQueue after dequeuing an element:");
  pq.printQueue();
  