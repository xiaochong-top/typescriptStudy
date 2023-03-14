let a:number
let b:string
let c:boolean
let d:10
let e:"男" | "女"

function sum(a:number,b:number):number{
    return a+b
}

// 不建议使用,因为 any 可以被间接赋值给 任意类型变量
let f:any 
// 危险实例
b=f

// 将unknown 类型赋值给其他类型变量时会报错，相当于一个安全的 any
let g:unknown
// 安全示例，解开注释会报错
// b=g

// 如果确实需要赋值
if(typeof g=="string"){b=g}
// 或者使用类型断言
b=g as string
b=<string>g 

// 返回为空
function test1():void{
    // return;
    // return null;
    // return undefined;
}

// 没有返回
function test2():never{
    throw new Error('函数不会执行完成')
}


// 不太常用
let h:object;
// 常用，可以定义属性
let i:{name:string}
// 错误示例，与定义的属性不符会报错
// i={};i={name:'张三'，age:18}

// 可选属性
let j:{name:string,age?:number}

// 任意属性,必须要有一个 name 属性，其他的无所谓
let k:{name:string,[xxx:string]:unknown}

// 定义函数结构：两个number类型参数,string类型返回值
let l:(xxx1:number,xxx2:number)=>string

// 字符串数组
let m:string[];
let n:Array<number>

// 元组相当于是数量固定的数组
let o:[string,number]

// 枚举
enum Gender{male,Female}
// 使用示例：
let p:{name:string,gender:Gender}
p={
    name:"孙悟空",
    gender:Gender.Female
}

// 这个就相当于{name:string，age:number}
let q:{name:string}&{age:number}


// 类型别名
type myType=1|2|3|4|5
let r:myType


// 编译某个文件
// tsc filename 

// 监视编译某个文件
// tsc filename -w

// 根据 tscconfig.json，编辑项目下的文件
// tsc
// tsc -w





























