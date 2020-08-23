# 第八周学习总结

## 重学HTML｜定义：XML与SGML

### DTD 与 XML namespace

* [http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd](http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd)
* [http://www.w3.org/1999/xhtml](http://www.w3.org/1999/xhtml)

## 重学HTML｜HTML语法

### 合法元素

* Element: <tagnema>...</tagname>
* Text: text
* Comment: <!-- comments -->
* DocumentType: <!Doctype html>
* ProcessingInstruction: <?a 1?>
* CDATA:<![CDATA[]]>

## 浏览器API｜DOM API

### DOM 树

* Node
	* Element: 元素型节点，跟标签相对应
		* HTMLElement
			* HTMLAnchorElement
			* HTMLAppleElement
			* HTMLAreaELEment
			* HTMLAudioElement
			* HTMLBaseElement
			* HTMLBodyElement
		* SVGElement 
	* Document: 文档根节点
	* CharacterData: 字符数据
		* Text: 文本节点
			* CDATASection: CDATA节点
		* Comment: 注释
		* ProcessingInstruction: 处理信息
	* DocumentFragment: 文档片段
	* DocumentType: 文档类型

Element 跟 Node 不要混淆


### 导航类操作


| Node 导航 | Element 导航 |
| --- | --- |
| parentNode | parentElement |
| childNodes | children |
| firstChild | firstElementChild |
| lastChild | lastElementChild |
| nextSibling | nextElementSibling |
| previousSibling | previousElementSibling |

### 修改操作

* appendChild
* insertBefore
* removeChild (必须找到parent，不能remove自身)
* replaceChild

### 高级操作

* compareDocumentPosition 是一个用于比较两个节点中关系的函数
* contains 检查一个节点是否包含另一个节点的函数
* isEqualNode 检查两个节点是否完全相同
* isSameNode 检查两个节点是否是同一个节点，实际上在 JavaScript 中可以用 “===”
* cloneNode 复制一个节点，如果传入参数 true，则会连同子元素做深拷贝

## 浏览器API｜事件 API

### 冒泡与捕获

不论是否监听任何事件都有先捕获再冒泡的过程
处理顺序 先父元素捕获事件 -> 子元素事件（按添加顺序）-> 父元素冒泡事件

## 浏览器API｜Range API

### 把一个元素的所有子元素reverse

通用（没有利用 DOM API）

```
function reverseChildren(element) {
	let children = Array.prototype.slice.call(element.childNodes);
	
	for (let child of children) {
		element.reoveChild(child)
	}
	// element.innerHTML = ""
	
	children.reverse();
	
	for (let child of children) {
		element.appendChild(child);
	}
}
```

了解 DOM API

```
function reverseChildren(element) {
	var l = element.childNodes.length;
	while (l-- > 0) {
		element.appendChild(element.childNodes[l])
	}
}
```

#### Range API

##### 创建

* var range = new Range()
* range.setStart(element, 9)
* range.setEnd(element, 4)
* var range = document.getSelection().getRangeAt(0)

##### 便捷

* range.setStartBefore
* range.setEndBefore
* range.setStartAfter
* range.setStartAfter
* range.setEndAfter
* range.selectNode
* range.selectNodeContents

##### 取出内容

* var fragment = range.extractContents()

##### 插入节点

* range.insertNode(document.creatTextNode("aaaa"))

了解 Range API

```
function reverseChildren(element) {
	let range = new Range();
	range.selectNodeContents(element);
	
	let fragment = range.extractContents();
	var l = fragment.childNodes.length;
	while(l-- > 0) {
		fragment.appendChild(fragment.childNodes[l])
	}
	element.appendChild(fragment);
}
```

## 浏览器API｜CSSOM

对 CSS 文档的抽象

### document.styleSheets

### Rules

* document.styleSheets[0].cssRules
* document.styleSheets[0].insertRule("p { color:pink; }", 0)
* document.styleSheets[0].removeRule(0)

* CSSStyleRule
* CSSCharsetRule
* CSSImportRule
* CSSMediaRule
* CSSFontFaceRule
* CSSPageRule
* CSSNamespaceRule
* CSSKeyframesRule
* CSSKeyframeRule
* CSSSupportsRule

#### CSSStyleRule

* selectorText String
* style K-V 结构 

### getComputedStyle

* window.getComputedStyle(elt, pseudoElt)
	* elt 想要获取的元素
	* pseudoElt 可选，伪元素 

## 浏览器API｜CSSOM View

渲染后的视图 API

### window

* window.innerHeight, window.innerWidth
* window.outerWidth, window.outerHeight
* window.devicePixelRatio
* window.screen
	* window.screen.width
	* window.screen.height
	* window.screen.availWidth
	* window.screen.availHeight

### scroll

* scrollTop
* scrollLeft 
* scrollWidth
* scrollHeight
* scroll(x, y)
* scrollBy(x, y)
* scrollIntoView()

* window
	* scrollX
	* scrollY
	* scroll(x, y)
	* scrollBy(x, y)

### layout

* getClientRects()  获取所有盒
* getBoundingClientRect()
	

## 浏览器API｜其他 API

### API来源

#### 标准化组织

* khronos
	* WebGL

* ECMA
	* ECMAScript

* WHATWG
	* HTML

* W3C
	* webaudio
	* CG/WG   




