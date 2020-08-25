const btns=document.querySelectorAll('.btn')
const answers=document.querySelectorAll('.answer')
btns.forEach( btn => {
    btn.addEventListener('click', function(){
        let num=btn.id;
        let currAns=document.getElementById('answer-'+num.toString())
        if(currAns.classList.contains('selected'))
            currAns.classList.remove('selected')
        else
        {
            answers.forEach( ans => {
                ans.classList.remove('selected');
            })
            currAns.classList.add('selected')
        }
    })
   
    
})