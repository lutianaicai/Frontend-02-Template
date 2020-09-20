# 第十二周学习总结

## 对象与组件

* 对象
	* Properties
	* Methods
	* Inherit
* 组件
	* Properties
	* Methods
	* Inherit
	* Attribute
	* Config & State
	* Event
	* Lifecycle
	* Children

## Attribute vs Property

Attribute 强调描述性
Property 强调从属关系

## 如何设计组件状态


| Markup set | JS set | JS Change | User Input |   |
| :-: | :-: | :-: | :-: | :-: |
| ❌ | ✅ | ✅ | ❓ | property |
| ✅ | ✅ | ✅ | ❓ | attribute |
| ❌ | ❌ | ❌ | ✅ | state |
| ❌ | ✅ | ❌ | ❌ | config |


