window.onscroll = function(){
    if(getScrollTop()>240) {
        console.log("NormalMenu", getScrollTop());
    } else {
        console.log("NewMenu", getScrollTop());
    }
}

function getScrollTop() {
    if (window.onscroll) {
        // Most browsers
        return window.pageYOffset;
    }

    var d = document.documentElement;
    if (d.clientHeight) {
        // IE in standards mode
        return d.scrollTop;
    }

    // IE in quirks mode
    return document.body.scrollTop;
}