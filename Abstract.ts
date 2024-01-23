interface IBase{
    fun1(): void;
    fun2(): void;
}

abstract class Base implements IBase {

    public abstract fun1(): void;

    public abstract fun2(): void;

    // Error: Method 'fun3' cannot have an implementation because it is marked abstract.
    // public abstract fun3(): void {
    //     console.log(3)
    // }

    // Will not raise any error
    fun4(): void{
        console.log(4)
    }

}

// If fun3 is declared in Base class and not if child class.
// Non-abstract class 'Component' does not implement all abstract members of 'Base'
class Component extends Base {
    public fun2(){
        console.log(2);
    }

    public fun1(){
        console.log(1);
    }
}

// Error: Cannot create an instance of an abstract class.
// const b = new Base();

const c = new Component();

c.fun4()
