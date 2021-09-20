// displays newer content without moving pages

var g = document.querySelectorAll('h4');
var h = document.querySelectorAll('h1');

function permutation(a,b,c,d){
  h[a].style.display = "grid";
  h[b].style.display = 
  h[c].style.display = "none";
  g[a].style.color ="#fff";
  g[b].style.color = 
  g[c].style.color ="#fff7";
  document.querySelector('header').innerHTML = d;
  g[a].style.animationName="bubble";
  g[b].style.animationName =
  g[c].style.animationName=undefined;
  h[a].style.animationName = "slide";
  h[b].style.animationName =
  h[c].style.animationName = undefined;
  
}

