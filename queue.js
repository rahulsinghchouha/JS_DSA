class queue{
    constructor(){
        this.items=[];
    }
    enqueue(element)
    {
        this.items.push(element);
    }
    dequeue(){
        if(this.isEmpty())
        {
            return "queue is Empty";
        }
        return this.items.shift();

    }

    isEmpty()
    {
        return this.items.length === 0;
    }
    front(){
        if(this.isEmpty())
        {
            return "No element in the queue"
        }
        return this.items[0];
    }

    size(){
        return this.items.length;
    }
    print()
    {
        let queueString = "";
    
        for(let i=0; i<this.size(); i++)
        {
            queueString += this.items[i]+" ";
        }
    
        console.log("queue--->",queueString);
    }

}

const myQueue = new queue();
myQueue.enqueue(5);
myQueue.enqueue(5);
console.log(myQueue.print());
console.log(myQueue.front());
console.log(myQueue.dequeue());
console.log(myQueue.isEmpty());
console.log(myQueue.size());