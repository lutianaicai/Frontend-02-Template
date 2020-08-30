# 第九周学习总结

## 异步编程

### callBack

```
function go() {
  green()
  setTimeout(function() {
    yellow()
    setTimeout(function() {
      red()
      setTimeout(function() {
        go()
      }, 5000);
    }, 2000)
  }, 10000);
}
```

### Promise

```
function go() {
  green()
  sleep(1000).then(() => {
    yellow();
    return sleep(200);
  }).then(() => {
    red();
    return sleep(500);
  }).then(go)
}
```


### async/await

```
function happen(element, eventName) {
    return new Promise((resolve, reject) => {
      element.addEventListener(eventName, resolve, {once: true});
    })
}
  
async function go() {
    while(true) {
      green();
      await happen(document.getElementById("next"), "click");
      yellow();
      await happen(document.getElementById("next"), "click");
      red();
      await happen(document.getElementById("next"), "click");
    }
}
```

async 表示函数里有异步操作，await 表示紧跟在后面的表达式需要等待结果。

## 广度优先


```
def BFS(graph, start, end):
	queue = []
	queue.append([start])
	visited.add(start)
	
	while queue:
		node = queue.pop()
		visited.add(node)
		
		process(node)
		nodes = generate_related_nodes(node)
		queue.push(nodes)
```

## 启发式搜索

启发式搜索(Heuristically Search)又称为有信息搜索(Informed Search)，它是利用问题拥有的启发信息来引导搜索，达到减少搜索范围、降低问题复杂度的目的，这种利用启发信息的搜索过程称为启发式搜索


