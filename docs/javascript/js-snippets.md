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
