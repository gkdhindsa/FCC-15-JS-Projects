const btns=document.querySelectorAll('.btn');
const h1=document.getElementById('number');
console.log(btns)
let counter=0;

btns.forEach(btn => {
    btn.addEventListener('click', function(e){
        let cl=(e.currentTarget.classList)
        if(cl.contains('increase')){
            counter++;
        }
        else if(cl.contains('decrease')){
            counter--;
        }
        else{
            counter=0;
        }
        h1.innerText=counter;
    })
})