const nav=document.getElementById('nav');
const navBar=document.getElementById('navBar');
const toggle=document.getElementById('toggle');

document.onclink =function(e){
    if(e.target.id!='nav'&& e.target.id!='toggle'&&e.target.id!='navbar'){
        toggle.classList.remove('active');
        navBar.classList.remove('active');
    }
}
toggle.onclick= function(){
    toggle.classList.toggle('active');
    navBar.classList.toggle('active');
}