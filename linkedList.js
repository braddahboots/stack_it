/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
// var eyes = require('eyes')

function linkedListGenerator() {
  var head = null;
  var tail = null;
  var length = 0;
  var currentNode = null;

  //creates a new node
  function _createNode(x) {
    return {
      value : x,
      next : null
    };
  }

  //points to our head
  function _getHead() {
    return head;
  }

  //points to our tail
  function _getTail() {
    return tail;
  }

  //takes a new node and adds it to our linked list
  function _add(x) {
    var node = _createNode(x);
    if (_getTail() === null) {
      head = node;
    } else {
      _getTail().next = node;
    }
    tail = node;
    length++;
    // consoel.log(node);
    return node;
  }


  //reads through our list and returns the node we are looking for
  function _get(find) {
    var curNode = this.getHead();
    var counter = 0;

    while ( counter < find) {
      if (curNode === tail) {
        return false;
      }
      curNode = curNode.next;
      counter++;
    }
    return curNode;
  }

  //reads through our list and removes desired node
  function _remove(num) {
    var curNode = this.get(num);
    var preNode = this.get(num - 1);
    if (num >= length) {
      return false;
    }
    if (num === 0 && length === 1 ) {
      head = null;
      tail = null;
    } else {
      if ( num === 0) {
        head = curNode.next;
      } else if ( num === length - 1) {
        tail = preNode;
        preNode.next = null;
      } else {
        preNode.next = curNode.next;
      }
    }
    length--;
  }

  //reads through our list and adds a new node in desired index
  function _insert(val, num) {
    // console.log(val);
    var next = this.get( num );
    var prev = this.get( num - 1);
    var node = _createNode( val );
    if ( num === 0 ) {
      node.next = head;
      head = node;
      if(length === 0){
        tail = node;
      }
    } else if ( num > length - 1 || num < 0) {
        return false;
    } else {
      prev.next = node;
      node.next = next;
    }
    length++;
  }

  /* function is looking if the current node has an object attached to it's next property.
  if it does it moves onto the next node. If it equals null it designates that node as the new tail node. */
  function _resetHead() {
    currentNode = head;
  }

  function _hasNext() {
    // console.log(currentNode);
    return currentNode !== null && (currentNode.next !== null || currentNode === tail);
  }

  /* function is looking to see what node the next value is equal to */
  function _next() {
   var curNode = currentNode;
    currentNode = currentNode.next;
    // console.log();
    return curNode.value;
  }

  function _length() {
    return this.length;
  }

  return {
    getHead : _getHead,
    getTail : _getTail,
    add : _add,
    get : _get,
    remove : _remove,
    insert : _insert,
    hasNext : _hasNext,
    next : _next,
    resetHead : _resetHead,
    length: _length
  };
}

// var ll = linkedListGenerator();
// ll.insert('ant', 0);
// ll.insert('bat', 0);
// ll.insert('cat', 0);
// ll.insert('dog', 0);
// ll.insert('elephant', 0);
// ll.insert('fish', 0);
// ll.insert('giraffe', 0);
// ll.insert('hippo', 0);
// // console.log('ll',ll);
// // console.log('ll.hasNext', ll.hasNext());

// ll.resetHead();
// while(ll.hasNext()){
//   console.log(ll.next());
// }


// var urlList = linkedListGenerator();
// console.log('testbody');
// urlList.add(1);
// urlList.add(2);
// urlList.add(3);
// urlList.remove(1);
// var testbody = urlList.insert;
// console.log(testbody);
// for (var propName in testbody) {
//   console.log(propName, testbody[propName]);
// }
// var movies = linkedListGenerator();
// eyes.inspect(movies.add('star wars'));
// eyes.inspect(movies.add('batman'));
// eyes.inspect(movies.getHead());
// eyes.inspect(movies.getTail());