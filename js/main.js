const nav=document.getElementById('nav');
const navBar=document.getElementById('navBar');
const toggle=document.getElementById('toggle');


 document.onclick = function (e){
     if(e.target.id!=='nav'&&e.target.id!=='toggle'&&e.target.id!=='navBar'){
        navBar.classList.remove('active');
         toggle.classList.remove('active');
     }{
         console.log('fioh na anfa......, try again')
     }
 }


toggle.onclick= function(){
    toggle.classList.toggle('active');
    navBar.classList.toggle('active');
}