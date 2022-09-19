let icon=document.querySelector('.icon')
icon.addEventListener('click',()=>{
    document.querySelector('.spantwo').classList.toggle('icontoglle')
    document.querySelector('.side').classList.toggle('show')
    document.querySelector('.page2').classList.toggle('none')
    document.querySelector('.page3').classList.toggle('none')
    document.querySelector('.page4').classList.toggle('none')
    document.querySelector('.licence').classList.toggle('none')
})
window.onscroll=()=>{
        if(scrollY>300){
            document.querySelector('.otherside').style.right='20px';
        }else{
            document.querySelector('.otherside').style.right='-70px';
        }    
}
document.querySelector('.otherside').onclick=()=>{
    window.scrollTo({
        top:0,
    })
}
var imgs=document.querySelectorAll('.picsone >img')
var bigimg=document.querySelector('.picone')
imgs.forEach(e=>{
    e.addEventListener('click',()=>{
        bigimg.src=e.src
    })
})
var imgs2=document.querySelectorAll('.picstwo >img')
var bigimg2=document.querySelector('.pictwo')
imgs2.forEach(e=>{
    e.addEventListener('click',()=>{
        bigimg2.src=e.src
    })
})
var minus=document.querySelector('.fa-plus')
var para=document.querySelector('.clientpara')

minus.addEventListener('click',()=>{
    minus.classList.toggle('fa-plus')
    para.classList.toggle('undispear')
})