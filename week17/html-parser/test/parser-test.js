var assert = require('assert');

import {parseHTML} from "../src/parser.js";

describe("parse html:", function() {
  it('<a></a>', function() {
    let tree = parseHTML('<a></a>');
    assert.equal(tree.children[0].tagName, "a");
    assert.equal(tree.children[0].children.length, 0);
  });
  it('<a href="//time.geekbang.org"></a>', function() {
    let tree = parseHTML('<a href="//time.geekbang.org"></a>');
    assert.equal(tree.children.length, 1);
    assert.equal(tree.children[0].children.length, 0);
  });
  it('<a href></a>', function() {
    let tree = parseHTML('<a href></a>');
    assert.equal(tree.children.length, 1);
    assert.equal(tree.children[0].children.length, 0);
  });
  it('<a href id></a>', function() {
    let tree = parseHTML('<a href id></a>');
    assert.equal(tree.children.length, 1);
    assert.equal(tree.children[0].children.length, 0);
  });
  it('<a href="abc" id></a>', function() {
    let tree = parseHTML('<a href="abc" id></a>');
    assert.equal(tree.children.length, 1);
    assert.equal(tree.children[0].children.length, 0);
  });
  it('<a id=abc></a>', function() {
    let tree = parseHTML('<a id=abc></a>');
    assert.equal(tree.children.length, 1);
    assert.equal(tree.children[0].children.length, 0);
  });
  it('<a id=abc/>', function() {
    let tree = parseHTML('<a id=abc/>');
    assert.equal(tree.children.length, 1);
    assert.equal(tree.children[0].children.length, 0);
  });
  it('<a id=\'abc\'/>', function() {
    let tree = parseHTML('<a id=\'abc\'/>');
    assert.equal(tree.children.length, 1);
    assert.equal(tree.children[0].children.length, 0);
  });
  it('<a />', function() {
    let tree = parseHTML('<a />');
    assert.equal(tree.children.length, 1);
    assert.equal(tree.children[0].children.length, 0);
  });
  it('<A /> upper case', function() {
    let tree = parseHTML('<A />');
    assert.equal(tree.children.length, 1);
    assert.equal(tree.children[0].children.length, 0);
  });
  it('<>', function() {
    let tree = parseHTML('<>');
    assert.equal(tree.children.length, 1);
    assert.equal(tree.children[0].type, "text");
  });
  it('< >', function() {
    let tree = parseHTML('< >');
    assert.equal(tree.children.length, 1);
    assert.equal(tree.children[0].type, "text");
  });
  it(`<html maaa=a >
  <head>
      <style>
  #container {
      width:500px;
      height:300px;
      display:flex;
      background-color:rgb(255,255,255);
  }
  #container #myid {
      width:200px;
      height:100px;
      background-color:rgb(255,0,0);
  }
  #container .c1 {
    flex:1;
    background-color:rgb(0,255,0);
  }
  #container p {
    color:rgb(0,255,0);
  }
      </style>
  </head>
  <body>
      <div id="container">
          <div id="myid"/>
            <p>a</p>
          <div class="c1" id="myid" />
      </div>
  </body>
  </html>`, function() {
    let tree = parseHTML(`<html maaa=a >
    <head>
        <style>
    #container {
        width:500px;
        height:300px;
        display:flex;
        background-color:rgb(255,255,255);
    }
    #container #myid {
        width:200px;
        height:100px;
        background-color:rgb(255,0,0);
    }
    #container .c1 {
      flex:1;
      background-color:rgb(0,255,0);
    }
    #container p {
      color:rgb(0,255,0);
    }
        </style>
    </head>
    <body>
        <div id="container">
            <div id="myid"/>
              <p>a</p>
            <div class="c1" id="myid" />
        </div>
    </body>
    </html>`);
    assert.equal(tree.children.length, 1);
    assert.equal(tree.children[0].children.length, 5);
  });
  
})
