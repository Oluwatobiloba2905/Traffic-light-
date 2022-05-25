function myFun () {
    // body... 
    var green=document.getElementsByClassName("green")[0];
    var red=document.getElementsByClassName("red")[0];
    var yellow=document.getElementsByClassName("yellow")[0];

    red.style.opacity=1;
    setTimeout(function () {
        /* body... */
        green.style.opacity=.3;
        red.style.opacity=.3;
        yellow.style.opacity= 1;
    },5000);

    setTimeout(function () {
        /* body... */
        green.style.opacity=1;
        red.style.opacity=.3;
        yellow.style.opacity=.3;
    },9000);

    setTimeout(function () {
        /* body... */
        green.style.opacity=.3;
        red.style.opacity= 1;
        yellow.style.opacity=.3;
    },12000);


}

var timer = setInterval(function () {
    /* body... */
    myFun()
},13000);