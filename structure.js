/*
 **实现列表结构
 * listSize:列表长度
 * pos：列表当前位置
 * insert：列表中插入
 * remove：删除列表元素
 * clear：清空列表
 * find：查找元素
**/
var List = (function () {
  var _list = function () {
    //安全方法，防止漏写new关键字
    if (this instanceof _list) {
      this.dataStore = []
      this.pos = 0
      this.listSize = 0
    } else {
      return new _list()
    }
  }
  _list.prototype = {
    /**
     * @summary 指定位置插入元素
     * @author 天羽蔚灵 1026430269
     * @param {number} after 要将元素插入到那个元素的后面
     * @param {any}    o     待插入的元素
     */
    insert: function (o, after) {
      var afterPos = this.find(after)
      if (afterPos > -1) {
        this.dataStore.splice(after, 0, o)
        this.listSize++
      }
    },
    /**
     * @summary 向末尾添加元素
     * @param {any} o 待添加的元素
     */
    append: function (o) {
      this.dataStore[this.listSize++] = o
    },
    /**
     * @summary 查找元素
     * @param {any}     o 待查找的元素
     * @return {number}
     */
    find: function (o) {
      for (var i = 0; i < this.listSize; i++) {
        if (this.dataStore[i] === o)
          return i
      }
      return -1
    },
    /**
     * @summary 删除元素
     * @param {any} o 待删除的元素
     */
    remove: function (o) {
      var delPos = this.find(o)
      if (delPos > -1) {
        this.dataStore.splice(delPos, 1)
        this.listSize--
        return true
      }
      return false
    },
    clear: function () {
      delete this.dataStore
      this.listSize = 0
      this.dataStore = []
      this.pos = 0
    },
    pre: function () {
      if (this.hasPre()) {
        this.pos--
      }
    },
    next: function () {
      if (this.hasNext()) {
        this.pos++
      }
    },
    moveTo: function (pos) {
      this.pos = pos
    },
    hasNext: function () {
      if (this.pos < this.listSize) {
        return true
      }
      return false
    },
    hasPre: function () {
      if (this.pos > -1) {
        return true
      }
      return false
    },
    length: function () {
      return this.listSize
    },
    toString: function () {
      return this.dataStore
    },
    front: function () {
      this.pos = 0
    },
    end: function () {
      this.pos = this.listSize - 1
    },
    getElement: function () {
      return this.dataStore[this.pos]
    },
    /**
     * 检测某元素是否存在于列表
     */
    contain: function (o) {
      if (this.find(o) > -1) {
        return true
      }
      return false
    }
  }
  return _list
})()

//测试代码
var a = new List()
var b = List()
a.append(1)
a.append(2)
a.append(3)
b.append(4)
for (a.front(); a.hasNext(); a.next()) {
  console.log(a.getElement())
}
for (a.end(); a.hasPre(); a.pre()) {
  console.log(a.getElement())
}
//测试代码

/**
 * 实现一个栈结构
 * push：压入元素
 * pop：弹出元素
 * peek：返回栈顶元素但不删除
 */
var Stark = (function () {
  var _stark = function () {
    if (this instanceof _stark) {
      this.dataStore = []
      this.top = 0
    } else {
      return new _stark()
    }
  }
  _stark.prototype = {
    push: function (o) {
      this.dataStore[this.top++] = o
    },
    pop: function () {
      return this.dataStore[--this.top]
    },
    peek: function () {
      return this.dataStore[this.top]
    },
    clear: function () {
      this.top = 0
    },
    length: function () {
      return this.top
    }
  }
  return _stark
})()

/**
 * 队列
 */
var Quenu = (function () {
  var _quenu = function () {
    if (this instanceof Quenu) {
      this.dataStore = []
    } else {
      return new Quenu()
    }
  }
  _quenu.prototype = {
    enquenu: function (o) {
      this.dataStore.push(o)
    },
    dequenu: function () {
      return this.dataStore.shift()
    },
    clear: function () {
      this.dataStore = []
    },
    front: function () {
      return this.dataStore[0]
    },
    back: function () {
      return this.dataStore[this.dataStore.length - 1]
    },
    empty: function () {
      if (this.dataStore.length === 0) {
        return true
      }
      return false
    },
    toString: function () {
      return this.dataStore.join(",")
    }
  }
  return _quenu
})()
/**
 * 舞伴类
 * 
 * @param {any} name 
 * @param {any} sex 
 */
function Dancer(name, sex) {
  this.name = name
  this.sex = sex
}

var dancers = `F Allison McMillan
M Frank Opitz
M Mason McMillan
M Clayton Ruff
F Cheryl Ferenback
M Raymond Willams
F Jennifer Ingram
M Bryan Frazer
M David Durr
M Danny Martin
F Aurora Adney`
/**
 * 读取文件中的数据
 * @param {any} males 
 * @param {any} fmales 
 */
function getDuncer(males, fmales) {
  var names = dancers.split('\n')
  for (var i = 0; i < names.length; i++) {
    names[i] = names[i].trim()
  }
  for (var j = 0; j < names.length; j++) {
    var dancer = names[j].split(' ')
    var sex = dancer[0]
    var name = dancer[1]
    if (sex === 'F') {
      fmales.enquenu(new Dancer(name, sex))
    } else {
      males.enquenu(new Dancer(name, sex))
    }
  }
}

function dance(males, fmales) {
  console.log('下面是舞伴分配情况：')
  while (!males.empty() && !fmales.empty()) {
    var man = males.dequenu()
    var woman = fmales.dequenu()
    console.log("fmale duncer is:" + man.name + " and male duncer is:" + woman.name)
  }
}

// var males = new Quenu()
// var fmale = new Quenu()
// getDuncer(males, fmale)
// dance(males, fmale)

function createBin () {
  var quenus = []
  for (var i = 0; i< 10; i++) {
    quenus[i] = new Quenu()
  }
  return quenus
}

function distribute (arr, bins, flag) {
  var len = arr.length
  if (flag === 1) {
    for (var i = 0; i < len; i++) {
      bins[arr[i] % 10].enquenu(arr[i])
    }
  } else {
    for (var i = 0; i < len; i++) {
      bins[Math.floor(arr[i] / 10)].enquenu(arr[i])
    }
  }
}

function collect (bins) {
  var arr = []
  for (var i = 0; i < 10; i++) {
    if (!bins[i].empty()) {
      arr.push(bins[i].dequenu())
    }
  }
  return arr
}
// var bins = createBin()
// var arr = [22,33,11,7,99,56]
// distribute(arr, bins, 1)
// arr = collect(bins)
// distribute(arr, bins, 2)
// arr = collect(bins)
// console.log(arr)

/**
 * 优先队列
 */
var Patient = function (name, code) {
  this.name = name
  this.code = code
}
/**
 * 原型式继承
 * @param {object} o 
 */
var inheritObject = function (o) {
  var F = function () {}
  F.prototype = o
  return new F()
}
/**
 * 寄生式继承
 * @param {object} Parent 
 * @param {object} Child 
 */
var inheritPrototype = function (Parent, Child) {
  var p = inheritObject(Parent.prototype)
  p.constructor = Child
  Child.prototype = p
}
/**
 * 终极继承，寄生+构造函数式继承
 */
var PriorQuenu = function () {
  Quenu.call(this)
  this.type = '优先队列'
}
inheritPrototype(Quenu, PriorQuenu)
//为子类添加新方法
PriorQuenu.prototype.dequenu = function () {
  var entry = 0
  var len = this.dataStore.length
  for (var i = 0; i < len; i++) {
    if (this.dataStore[i].code < this.dataStore[entry].code) {
      entry = i
    }
  }
  return this.dataStore.splice(entry, 1)
}
// //优先队列实例化
// var test = new PriorQuenu()
// test.enquenu(new Patient('a', 1))
// test.enquenu(new Patient('b', 10))
// test.enquenu(new Patient('c', 0))
// test.enquenu(new Patient('d', 5))
// console.log(test.dequenu())