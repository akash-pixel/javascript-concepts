
class Base{
    private num!: number;
    private str!: string;

    public setValues(num: number, str: string){
        this.num = num;
        this.str = str; 

        // Output: "value of this key word: {"num":789,"str":"abc"}" 
        console.log(`value of this key word: ${JSON.stringify(this)}`);
    }

    public getValues(){
        return {num: this.num || null, str: this.str|| null};
    }

}

class Component extends Base {

    private obj: Object = {};

    constructor(){
        super();
    }

    public method(num: number, str: string ){

        this.setValues.apply( this.obj, [num, str]);
    }

    public getObj(){
        //  Output: "Value of object: {"num":789,"str":"abc"}"
        console.log(`Value of object: ${JSON.stringify(this.obj)}`);
        return;
    }

}

const c = new Component();
c.method(789,"abc");

// Output: Value from get values {"num":null,"str":null}"
console.log(`\n Value from get values ${JSON.stringify(c.getValues())}`);


c.getObj();
