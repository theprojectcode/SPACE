var b = document.querySelectorAll('h3');
var h = document.querySelectorAll('h1');

function permutation(a,b,c,d){
  h[a].style.display = "block";
  h[b].style.display = 
  h[c].style.display = "none";
  document.querySelector('header').innerHTML = d;
}
