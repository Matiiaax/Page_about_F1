let myButton  = document.getElementById("ScrollBtn")
window.onscroll = function() {scrollfunction()};
function scrollfunction() {
  if (document.documentElement.scrollTop > 1600) {
    myButton.style.display = "block";
    console.log('xd')
    } else {
      myButton.style.display = "none";
    }
}

function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
} 

