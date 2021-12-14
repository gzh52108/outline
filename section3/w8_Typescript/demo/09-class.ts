/*
    类：class
        * 必须给实例声明属性，才可以赋值
        * 修饰符
            * readonly  只读属性
            * public    共有属性（默认），可在任意位置访问
            * private   私有属性，只能在当前类中访问，子类或实例中不允许访问
            * protected：受保护的属性，它和 private 类似，区别是它在子类中也是允许被访问的
            * static    静态属性
*/

class Person{
    // 必须给实例声明属性，才可以赋值

    // 共有属性
    public name:string;
    protected readonly age:number;

    // 私有属性：只能在Person内部访问
    private type:string = '人类';

    // 受保护的属性：protected
    protected skill:string = '思考';

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }

    sayHello(){
        return `hello my name is ${this.name}, 是一个${this.type}`
    }
}

const p1 = new Person('laoxie',18)
// p1.type; // 报错：私有属性不能在实例中访问
// p1.skill; //报错：受保护的属性不能在实例中访问


class Man extends Person{
    readonly gender:string = '男'
    private hobby:string[] = []

    setHobby(hobby:string){
        this.hobby = [hobby,...this.hobby]
    }

    // 静态方法、类方法
    static go(){

    }
}
const m1 = new Man('laoxie',18)
m1.sayHello()
// m1.type ;// 报错：私有属性不能在实例中访问
m1.setHobby('写代码')
Man.go()
// Vue.set();// Vue.component() jQuery.ajax(), Array.isArray()

class Girl extends Person{
    readonly gender:string = '女'

    constructor(name:string,age:number){
        super(name,age);
        // this.type ; 报错：私有属性不能再子类中访问
    }

    coding(){
        this.skill;
    }
}
const g1 = new Girl('jingjing',36);
g1.sayHello();
// g1.gender = '男'