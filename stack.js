class stack{

    constructor() {
        this.stack = []; 
    }
    push(element)
    {
        this.stack.push(element);
    }
    pop(){
        if(this.isEmpty())
        {
            return "stack is empty";
        }
        return this.stack.pop();
    }
    peack(){
        if(this.isEmpty())
        {
            return "stack is empty";
        }

        return this.stack[this.stack.length-1];
    }

    isEmpty(){
        return this.stack.length === 0;
    }
    size(){
        return this.stack.length;
    }
    print(stack)
    {
        if(this.isEmpty())
        {
            return;
        }
        let top= this.stack.pop();
        console.log(top);
       // stack.pop();
       this.print(stack);
        stack.push(top);
    }
}

const s = new stack()
s.push(23);s.push(24);
s.push(25);s.push(26);s.push(27);s.push(28);s.push(29);
//console.log(s.pop());
//console.log(s.size());
//s.print(s);
console.log(s.peack());