const point =document.getElementsByClassName('point')[0];
const btnNav=document.querySelector('#btnNav');
    
    btnNav.addEventListener('click',function(){
        point.classList.toggle('side_nevbar')   
    });