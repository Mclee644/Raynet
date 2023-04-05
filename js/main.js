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
//blurred popup workout
 function blurPop(){
     const blur=document.getElementById('blur');
     blur.classList.toggle('blurred');

     const popUp=document.getElementById('popUp');
     popUp.classList.toggle('active');
 }
 
 function popsRem(){
	 const blur=document.getElementById('blur');
     const popUp=document.getElementById('popUp');

	 blur.classList.remove("blurred");
	 popUp.classList.remove("active");
	 
 }
 //date for the copyright text
 let copyright = document.getElementById('Text');
 let currentDate = new Date;
 let updateDate = ` ${currentDate.getFullYear()} Raynet onlice service center all rights reserved`;
copyright.innerText += updateDate;
 
 console.log(currentDate.getFullYear(), copyright,updateDate);
