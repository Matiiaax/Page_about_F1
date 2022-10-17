let mybtn = document.getElementById("scrollTop")
window.onscroll = function() {scrollfunction()} ;

function scrollfunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 1900) {
            mybtn.style.display = "block";
        } else {
                mybtn.style.display = "none";
                }
    }

function ScrollToTop() {
    window.scrollTo(0,0);
}
