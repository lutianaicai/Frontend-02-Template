# 第六周学习总结

## CSS总论｜CSS语法的研究

### CSS2.1的语法

* [https://www.w3.org/TR/CSS21/grammar.html#q25.0](https://www.w3.org/TR/CSS21/grammar.html#q25.0)
* [https://www.w3.org/TR/css-syntax-3/](https://www.w3.org/TR/css-syntax-3/)

### CSS总体结构

* @charset
* @import
* rules
	* @media
	* @page
	* rule

## CSS总论｜CSS@规则的研究

### At-rules

* @charset: [https://www.w3.org/TR/css-syntax-3/](https://www.w3.org/TR/css-syntax-3/)
* @import: [https://www.w3.org/TR/css-cascade-4/](https://www.w3.org/TR/css-cascade-4/)
* @media: [https://www.w3.org/TR/css3-conditional/](https://www.w3.org/TR/css3-conditional/)
* @page: [https://www.w3.org/TR/css-page-3/](https://www.w3.org/TR/css-page-3/)
* @counter-style: [https://www.w3.org/TR/css-counter-styles-3](https://www.w3.org/TR/css-counter-styles-3)
* @keyframes: [https://www.w3.org/TR/css-animations-1/](https://www.w3.org/TR/css-animations-1/)
* @fontface: [https://www.w3.org/TR/css-fonts-3/](https://www.w3.org/TR/css-fonts-3/)
* @supports: [https://www.w3.org/TR/css3-conditional/](https://www.w3.org/TR/css3-conditional/)
* @namespace: [https://www.w3.org/TR/css-namespaces-3/](https://www.w3.org/TR/css-namespaces-3/)

## CSS总论｜CSS规则的研究

* Selector
  * [https://www.w3.org/TR/selectors-3/](https://www.w3.org/TR/selectors-3/)
  * [https://www.w3.org/TR/selectors-4/](https://www.w3.org/TR/selectors-4/)
* Key
  * Properties
  * Variables:[https://www.w3.org/TR/css-variables/](https://www.w3.org/TR/css-variables/)
* Value
  * [https://www.w3.org/TR/css-values-4/](https://www.w3.org/TR/css-values-4/)
  


## CSS选择器｜选择器语法

### 简单选择器

* *  通用选择器
* div svg|a  type selector 选择 tagNmae 属性
* .cls class 选择器
* #id  id 选择器
* [attr=value]  属性选择器
* :hover  伪类
* ::before 伪元素，双冒号

### 复合选择器

* <简单选择器><简单选择器><简单选择器>
* * 或者 div 必须写在最前面

### 复杂选择器

* <复合选择器><复合选择器> 子孙选择器
* <复合选择器>">"<复合选择器> 父子选择器
* <复合选择器>"~"<复合选择器>
* <复合选择器>"+"<复合选择器>
* <复合选择器>"||"<复合选择器> 选中某一列

## CSS选择器｜选择器的优先级

[https://www.w3.org/TR/selectors/#specificity](https://www.w3.org/TR/selectors/#specificity)

## CSS选择器｜伪类

### 链接/行为

* :any-link  任何超链接
* :link 还没有访问 :visited 已经访问
* :hover  鼠标移入
* :active  激活状态
* :focus  焦点
* :target  链接到当前目标

### 树结构

* :empty  是否有子元素
* :nth-child()  父元素的第几个子元素
* :nth-last-child()  从后往前
* :first-child :last-child :only-child

### 逻辑型

* :not伪类
* :where :has

## CSS选择器｜伪元素

* ::before ::after 元素内容前后插入伪元素
* ::first-line 第一行
* ::first-letter 第一个字母


### 思考：为什么 first-letter 可以设置 float 之类的，而 first-line 不行呢？

设置了float 可能就不是第一行了，与定义冲突了
	

