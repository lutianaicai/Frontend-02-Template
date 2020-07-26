# 第四周学习总结

## 浏览器总论

URL == (HTTP) ==> HTML == (parse) ==> DOM == (css computing) ==> DOM with CSS == (layout) ==> DOM with position == (render) ==> Bitmap

## 有限状态机

* 每一个状态都是一个机器
  * 每一个机器里可以计算、存储、输出...
  * 所有机器接受的输入一致
  * 每一个机器本身无状态，如果用函数表示应为纯函数 
* 每一个机器知道下一个状态
  * 每个机器都有确定的下一个状态（Moore）
  * 每个机器根据输入决定下一个状态（Mealy） 

### JS中的有限状态机（Mealy）

```js
// 每个函数是一个状态
function state(input) // 参数就是输入
{
	// 函数中自由处理状态逻辑
	return next; // 返回值作为下一个状态
}

// 调用
while (input) {
	// 获取输入
	state = state(input); // 把状态机的返回值作为下一个状态
}

```

## HTTP请求

### 协议解析

* HTTP (require("http"))
	* 应用
	* 表示
	* 会话
* TCP  (require("net"))
	* 传输
* Internet
	* 网络
* 4G/5G/Wi-Fi
	* 数据链路
	* 物理层 

### HTTP实现请求

* 设计一个 HTTP 请求类
* content type 是一个必要的字段，要有默认值
* body 是 KV 格式
* 不同的 content-type 影响 body 的格式

### send 函数

* 在 Request 构造器中收集必要信息
* 设计 send 函数，把请求真实发送到服务器
* send 函数应为异步，返回 Promise

### 发送请求

* 设计支持已有的 connection 或者自建
* 收到数据传给 parser
* 根据 parser 的状态 resolve Promise

### response 解析

* Response 必须分段构造，所以我们要用一个 ResponseParser 来 “装配”
* ResponseParser 分段处理 ResponseText，我们用状态机来分析文本的结构

### response body 解析

* Response 的 body 可能根据 Content-Type 有不同的结构，因此采用子 Parser 的结构来解决问题
* 以 TrunkedBodyParser 为例，我们同样用状态机来处理 body 的格式

## HTML 解析

### 解析标签

* 主要标签：开始标签，结束标签和自封闭标签

### 创建元素

* 在状态机中，除了状态迁移，还加入业务逻辑
* 在标签结束状态提交标签 token

### 处理属性

* 属性值分为单引号、双引号、无引号三种写法，需多状态处理
* 处理属性的方式跟标签类似
* 属性结束时，把属性加到标签 Token 上

### 处理文本

* 文本节点与自封闭标签处理类似
* 多个文本节点需要合并

### 用 Token 构建 DOM 树

* 从标签构建 DOM 树的基本技巧是使用栈
* 遇到开始标签时创建元素并入栈，遇到结束标签时出栈
* 自封闭节点可视为入栈后立刻出栈
* 任何元素的父元素是它入栈前的栈顶

