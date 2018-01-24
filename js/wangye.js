var daohang = document.getElementsByClassName("navStyle");//获取导航得class
var ulStyle = document.getElementsByClassName("ulStyle");//获取所有子菜单的ul
var li = document.getElementById("ulS").getElementsByTagName("li");
window.onscroll = function () {
    for (var j = 0; j < ulStyle.length; j++) {
        if (document.body.scrollTop < 600) {
            daohang[0].style = " ";
            ulStyle[j].style.marginTop = "-490px";
            if (ulStyle[j] == ulStyle[1] || ulStyle[j] == ulStyle[3]) {
                ulStyle[j].style.marginTop = "-250px";
            }
            if (ulStyle[j] == ulStyle[2] || ulStyle[j] == ulStyle[4]) {
                ulStyle[j].style.marginTop = "-210px";
            }
            if (ulStyle[j] == ulStyle[5]) {
                ulStyle[j].style.marginTop = "-250px";
            }
            ulStyle[j].style.webkitTransform = "rotateX(180deg)";
            var lilist = ulStyle[j].getElementsByTagName("li");
            for (var i = 0; i < lilist.length; i++) {
                lilist[i].style.webkitTransform = "rotateX(180deg)"
            }
        } else {
            daohang[0].style.marginLeft = "-1349px";
            daohang[0].style.position = "fixed";
            daohang[0].style.top = "0px";
            daohang[0].style.left = "0px";
            daohang[0].style.zIndex = "999";
            li[0].style.display = "block";
            li[30].style.display = "none";
            ulStyle[j].style.webkitTransform = "rotateX(0deg)";
            ulStyle[j].style.marginTop = "0px";
            var lilist = ulStyle[j].getElementsByTagName("li");
            for (var i = 0; i < lilist.length; i++) {
                lilist[i].style.webkitTransform = "rotateX(0deg)"
            }
        }
    }
};

function tanchu() {
    daohang[0].style.marginLeft = "0px";
    daohang[0].style.position = "fixed";
    daohang[0].style.top = "0px";
    daohang[0].style.left = "0px";
    li[0].style.display = "none";
    li[30].style.backgroundColor = "#2191b3";
    li[30].style.color = "#fff";
    li[30].style.display = "block";
}

/*====================这是最后一个点击切换图片的轮播==========================*/
function buttonS(a) {
    var bth = document.getElementsByClassName("bth")[0];
    var butDiv = bth.getElementsByTagName("div");
    var imgobj = document.getElementsByClassName("imgS")[0];
    var nnn = imgobj.children;
    for (var i = 0; i < nnn.length; i++) {
        nnn[i].style.opacity = "0";
        butDiv[i].style.backgroundColor = "#2191b3";
        butDiv[i].style.color = "#ffffff";
        butDiv[i].style.transition = "all .3s linear"
    }
    nnn[a - 1].style.opacity = "1";
    butDiv[a - 1].style.backgroundColor = "#fff";
    butDiv[a - 1].style.color = "#888888";
    butDiv[a - 1].style.transition = "all .3s linear"
}

/*====================这是两张图片的轮播==========================*/
var mainD = document.getElementById("mainDiv");//获取img的父亲
var imgOBJ = document.getElementsByClassName("luobo");//在获取装照片的那两个div的class名字
function lefta() {
    mainD.insertBefore(imgOBJ[1], mainD.firstChild);
    imgOBJ[0].style.marginLeft = "-728px";
    setTimeout(function () {
    }, 500)
}

function righta() {
    imgOBJ[0].style.marginLeft = "-728px";
    setTimeout(function () {
        imgOBJ[0].style.marginLeft = "0px";
        mainD.appendChild(imgOBJ[0]);
    }, 2500)
}

var mytime = setInterval(righta, 3000);
mainD.onmouseover = function () {
    clearInterval(mytime)
};
mainD.onmouseout = function () {
    mytime = setInterval(righta, 3500);
};
// ===================这是六张图片的轮播==========================*/

var e = 0;
var divobj = document.getElementsByClassName("da")[0];
var imgbox = document.getElementsByClassName("imgbox");

function luoboLeft() {
    for (var p = 0; p < imgbox.length; p++) {
        imgbox[p].style.opacity = "0";
    }
    e++;
    imgbox[e].style.opacity = "1";
    if (e == 5) {
        e = 0;
    }
}

var g = 5;

function luoboright() {
    for (var p = 0; p < imgbox.length; p++) {
        imgbox[p].style.opacity = "0";
    }
    g--;
    imgbox[g].style.opacity = "1";
    if (g == 0) {
        g = 5;
    }
}

var eee = setInterval(luoboright,2000);   //
divobj.onmouseover = function () {
    clearInterval(eee)//当鼠标移入dadiv时  轮播停止
};
divobj.onmouseout = function () {
    eee = setInterval(luoboright, 2500);//当鼠标移出dadiv时  轮播继续执行
};









