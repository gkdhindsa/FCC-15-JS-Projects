const slides=document.querySelectorAll('.slide');
const nextBtn=document.querySelector('.nextBtn')
const prevBtn=document.querySelector('.prevBtn')
console.log(prevBtn)
prevBtn.style.display='none'

slides.forEach(function(slide, index){
    slide.style.left=`${index*100}%`
})

let counter=0;


nextBtn.addEventListener('click', function(){
    counter++;
   
    abc();
    
})

prevBtn.addEventListener('click', function(){
    counter--;
    console.log(counter)
    abc();
})

function abc(){
    if(counter===slides.length){
        counter=0
    }
    if(counter==-1){
        counter=slides.length-1
    }

    if(counter<slides.length-1){
        nextBtn.style.display='block'
    }
    else{
        nextBtn.style.display='none'
    }
    if(counter>0){
        prevBtn.style.display='block'
    }
    else{
        prevBtn.style.display='none'
    }
    
    nextBtn.style.display
    slides.forEach(function(slide){
        slide.style.transform=`translateX(-${counter*100}%)`
    })
}
