//input a variable here to hold text
var newTextHere;

//input a variable here to hold text history
var oldTextHere;

//input a variable that references linkedList
var ll = linkedListGenerator();

//look up window.onload = function()

function addText() {
  var inputText = document.getElementById('textBox').value;
  // console.log(inputText);
  console.log(ll.insert(inputText, 0));
  return ll.insert(inputText, 0);
}

function showText() {
  var show = '';
  ll.resetHead();
  while(ll.hasNext()) {
    // console.log()
 // document.getElementById('history').innerHTML;
}
}