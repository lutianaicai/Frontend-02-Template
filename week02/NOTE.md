# 第二周学习总结

## JS语言通识

#### 泛用语言分类：

* 非形式语言
	* 中文、英文
* 形式语言（乔姆斯基谱系） 
	* 0型 无限制文法
	* 1型 上下文相关文法
	* 2型 上下文无关文法
	* 3型 正则文法

#### 产生式（BNF）

* 尖括号括起来的名称表示语法结构名
* 语法结构分为基础结构和需要其他语法结构定义的复合结构（支持递归）
	* 基础结构称终结符
	* 复合结构称非终结符
* 可以有括号
* *表示重复多次 
* ｜表示或
* + 表示至少一次

#### 图灵完备性
所有的可计算的问题都可用来描述的语言就具有图灵完备性

* 命令式--图灵机
  * goto 
  * if 和 while
* 声明式--lambda
  * 递归 

#### 动态与静态

* 动态
  * 用户设备/在线服务器
  * 产品实际运行时
  * Runtime
* 静态
  * 在程序员的设备上
  * 产品开发时
  * Compiletime

#### 类型系统

* 动态类型/静态类型
* 强类型/弱类型
  * String + Number
  * String == Boolean
* 复合类型
  * 结构体
  * 函数签名
* 子类型
* 泛型
  * 逆变/协变

  
#### 一般命令式编程语言

* Program
  * Program
  * Module
  * Package
  * Library
* Structure
  * Function
  * Class
  * Process
  * Namespace
* Statement
  * Expression
  * Keyword
  * Punctuator
* Expression
  * Atom
  * Operator
  * Punctuator
* Atom
  * Identifier
  * Literal


## JS类型

#### Number

* IEEE 743 Double Float
  * Sign (1)
  * Exponent (11)
  * Fraction (52)

tips: 0 .toString();

#### String

* Character
* Code Point
* Encoding

#### 其他

null 是关键词 （有值为空）
undefined 是全局变量 （不曾赋值）

## JS对象

#### 基础

类是一种常见的描述对象的方式。

“归类” 和 “分类” 是两个主要流派。

对于 ”归类“ 方法而言，多继承是非常自然的事情。（CPP）

而采用分类思想的计算机语言，则是单继承结构。并且会有一个基类 Object。

#### 属性

JavaScript 属性是一个 kv 对

##### key
key 可以为 Symbol 或 String。Symbol 只支持变量访问，更安全。

##### value

* 值属性

	描述状态
	如果储存函数，也可以描述行为
	
* 访问器属性

	描述行为

#### 原型链

当我们访问属性时，如果当前对象没有，则会沿着原型找原型对象是否有此名称的属性，而原型对象还可能有原型，因此，会有 “原型链” 这一说法

这一算法保证了，每个对象只需要描述自己和原型的区别即可。

#### Object API/Grammar

* {} . [] Object.defineProperty
* Object.create / Object.setPrototypeOf / Object.getPrototypeOf
* new / class / extends

#### Function Object

除了一般对象的属性和原型，函数对象还有一个行为[[call]]。

js 中 function 关键字，箭头运算符或者 Function 构造器创建的对象，会有 [[call]] 这个行为。

用类似 foo() 这样的语法把对象当函数调用时，会访问到 [[call]] 这个行为。

如果对应对象没有这个行为会报错。

#### host Obejct

由 JavaScript 宿主环境提供的对象，它们的行为完全由宿主环境决定。

