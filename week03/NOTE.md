# 第三周学习总结

## JS表达式

#### Member
* a.b
* a[b]
* foo\`string\`
* super.b
* super[ 'b' ]
* new.target
* new Foo()

运算符表达式优先级最高

a.b 取出的是引用（reference）包含（object， key）

#### Call
* foo()
* super()
* foo()['b']
* foo().b
* foo()\`abc\`

次一级优先级

#### Left Handside & Right Handside

所有不能放在等号左边的表达式都是Right Handside

特殊：** （右结合）
3 ** 2 ** 3 === 3 ** (2 ** 3)

#### Equality

类型不确定情况下不使用‘==’

#### Logical && Conditional

都有短路逻辑，不保证表达式中逻辑都能被执行

### 类型转换

== 历史包袱，尽量使用 ===

#### Unboxing

把一个 Object 转换成基本类型

* ToPremitive
* toString vs valueOf
* Symbol.toPrimitive

如果定义了 Symbol.toPrimitive 就会忽略 toString 和 valueOf，否则根据提示自动判断 toString valueOf 的调用顺序。

#### Boxing

除了 Undefined 和 Null 以外的基础类型，都提供了包装成 Object 的方法。

Number(1) 返回 值 1
new Number(1) 返回 对象 1
对象和这个值 1 存在一个装箱关系

特例：Symbol 不能由 new 调用
new Object(Symbol("a"))


## JS语句

### 运行时

#### Completion Record

语句执行结果记录
描述了执行结果是否返回，返回值是啥等等......

* [[type]]: normal, break, cotinue, return, or throw
* [[value]]: 基本类型
* [[target]]: label

#### Lexical Environment

作用域

### 简单语句

* ExpressionStatement
* EmptyStatement
* DebuggerStatement
* ThrowStatement
* CotinueStatement
* BreakStatement
* ReturnStatement

### 复合语句

* BlockStatement
* IfStatement
* SwitchStatement (js中没有性能优势，建议ifelse)
* IterationStatement
* WithStatement（一般不用）
* LabelledStatement
* TryStatement

特例：try catch finally 不能被 return 打断

### 声明

* FunctionDeclaration
* GeneratorDeclaration
* AsyncFunctionDeclaration
* AsyncGeneratorDeclaration
* VariableStatement

作用范围只认 Function Body
特例：var a = 1 a 已经是一个函数级局部变量，但是赋值并没有发生

* ClassDeclaration(class)
* LexicalDeclaration(const let)

当在声明之前使用就会报错

#### 预处理机制(pre-process)

```js

var a = 2;
void function () {
	a = 1;
	return;
	var a;
}();
console.log(a);

2

```

var a 不论写在什么位置都会被预处理提升到函数作用级别

```js

var a = 2;
void function () {
	a = 1;
	return;
	const a;
}();
console.log(a);

2

```

所有声明都有预处理机制，只不过 const 之前调用会报错

#### 作用域

```js

var a = 2;
void function () {
	a = 1;
	{
		var a;
	}
}();
console.log(a);

2

```

```js

var a = 2;
void function () {
	a = 1;
	{
		const a;
	}
}();
console.log(a);

"Uncaught SyntaxError: Missing initializer in const declaration"

```

利用 {} 把大函数分隔是趋势

## JS结构化

### JS执行粒度（运行时）

* 宏任务
* 微任务（Promise）
* 函数调用（Execution Context）
* 语句/声明（Completion Record）
* 表达式（Reference）
* 直接量/变量/this......

#### 宏任务与微任务

```JS
var x = 1;
var p = new Promise(resolve => resolve());
p.then(() => x = 3);
x = 2;
```

执行这段代码给 JavaScript Engine
会生成两个异步任务，分别是两个 MicroTask(Job),整个过程叫做 MacroTask

#### 事件循环（类似 Runloop）

wait -> get code -> execute -> wait

### JS函数调用

Execution Context Stack 中包含 n 个 Execution Context，其中栈顶元素 叫做 Running Execution Context 包含代码需要的变量。

#### Closure

JS 中每个函数都会生成一个闭包。
包含 Environment Record, Code。Environment 会保存内部的 Environment。 2018 以前的标准叫做 Scope chain。所以 => 函数后可以访问所有变量。

#### Realm

为了获取函数表达式或对象直接量的对象的原型，
在一个 JS 引擎的实例里面，所有的内置对象会被放进一个 Realm 里。不同 Realm 实例之间相互独立。

