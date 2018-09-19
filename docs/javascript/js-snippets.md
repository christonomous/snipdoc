> This is not complete

### Add Input Button

https://jsfiddle.net/bc4x17cg/

HTML
```
<div id="demo">
</div>
<input type="button" id="add" value="Add input"/>
```

JavaScript
```
var num = 1;
document.getElementById('add').addEventListener("click",addInput);
function addInput(){
var newInput = '<input type="text" name="input'+num+'"/><br> <br>';
   document.getElementById('demo').innerHTML += newInput;  
   num++;
}
```

> Here is an alternative

JavaScript
```
(function() {
  var counter = 0;
  var btn = document.getElementById('btn');
  var form = document.getElementById('form');
  var addInput = function() {
    counter++;
    var input = document.createElement("input");
    input.id = 'input-' + counter;
    input.type = 'text';
    input.name = 'name';
    input.placeholder = 'Input number ' + counter;
    form.appendChild(input);
  };
  btn.addEventListener('click', function() {
    addInput();
  }.bind(this));
})();
```

HTML
```
<form id="form" action="">
</form>
<button id="btn" type="button">Click Me!</button>
```

Reference: https://stackoverflow.com/questions/39103510/javascript-generate-new-input-field-on-click


---

### Dates
Reference: https://acdcjunior.github.io/how-bind-date-object-to-input-date-vue.js-v-model.html

## Text Module System
Reference: https://github.com/LogX7/Select7

> Mabe Offtopic

#### Custom HTML Attribute
https://university.webflow.com/article/how-to-add-custom-head-and-body-code-to-a-webflow-site


