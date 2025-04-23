// Expand all the more buttons on the page
document.addEventListener("DOMContentLoaded", function() {
    var moreButtons = document.querySelectorAll('.show-more-link'); 
    for (var i = 0; i < moreButtons.length; i++) {
        moreButtons[i].click();
    }
});

