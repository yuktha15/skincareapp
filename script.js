var col = document.querySelectorAll("a")
console.log(col);
for(var i=0;i<col.length;i++){
 col[i].style.color=changeColor();
}
setInterval("changeColor()",300);
function getRandomColor(){
    var letters='9876543210ABCDEF';
    var color="#";
    for(var i=0;i<=5;i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}
function changeColor(){
    input=getRandomColor();
    for(var i=0;i<col.length;i++){
        col[i].style.color=input;
    }
}
var text = document.getElementById("c1");
var strText = text.textContent;
var splitText = strText.split("");
text.textContent = "";
for(var i=0; i< splitText.length; i++){
  text.innerHTML += "<span>"+ splitText[i] + "</span>";
}

var char = 0;
var timer = setInterval(onTick, 600);
function onTick(){
  var span = text.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++
  if(char === splitText.length){
    complete();
    return;
   }
  }

  function complete(){
    clearTimeout(timer);
    timer = null;
  }