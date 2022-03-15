//hidden bio
var text = document.getElementById("hidden");
var btnText = document.getElementById("more");

text.style.marginLeft = null;
text.style.opacity = 0;

function toggleText() {
  if (text.style.marginLeft) {
    btnText.innerHTML = "More →";
    text.style.marginLeft = null;
    text.style.opacity = 0;
    window.scrollTo(0, 0);;

  } else {
    btnText.innerHTML = "Less ←";
    text.style.marginLeft = 0 + "px";
    text.style.color = "black";
    text.style.opacity = 1;
    text.scrollIntoView(false);

  }
}

//overlay
function openNav(overlay) {
  document.getElementById(overlay).style.marginLeft = 0 + "px";
}

function closeNav(overlay) {
  document.getElementById(overlay).style.marginLeft = null;
}

function toggleImg(overlay, id) {
var array = document.getElementsByClassName(overlay);
for (i = 0; i < array.length; i++){
  if(id === array[i].id){
    array[i].style.display = "block";
  }else {
    array[i].style.display = "none";
  }
}
}
