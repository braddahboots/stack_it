  // var addText, showText;
  var ll = linkedListGenerator();

function addText() {
  var inputText = document.getElementById('textBox').value;
  // console.log(inputText);
  console.log(inputText);
  ll.insert(inputText, 0);
};

function showText() {
  var show = '';
  ll.resetHead();
  while(ll.hasNext()) {
    show += ('<div>' + ll.next() + '</div>');
  }
  document.getElementById('history').innerHTML = show;
};