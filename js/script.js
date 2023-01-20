var nav = document.getElementById('nav');
var menu = document.getElementById('menu');
var close1 = document.getElementById('close1');

nav.style.right = '-260px';
menu.onclick = function(){
    if(nav.style.right == '-260px'){
        nav.style.right = '0px';
    }
}
close1.onclick = function(){
    if(nav.style.right == '0px'){
        nav.style.right = '-260px';
    }
}