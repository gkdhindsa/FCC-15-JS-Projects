const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

let items=document.querySelectorAll('.u-text')
  

let futureDate=new Date(2020 ,8, 2, 0,0, 0);
const year=futureDate.getFullYear();
console.log(year)


const futureTime=futureDate.getTime();
console.log(futureTime)
function format(val){
    if (val<10)
    return `0${val}`
    else
    return val
}

function getRemaining(){
    const today=new Date().getTime();
    let t=futureTime-today
    console.log(t<0)
    if(t<0){
        document.querySelector('.exp').innerHTML='expired!'
        t=0
    }


    let Day=24*60*60*1000;
    let Hour=60*60*1000;
    let Min=60*1000;
    let Sec=1000;
    let days=t/Day;
    days=Math.floor(days)
    let hours=(t%Day)/Hour;
    hours=Math.floor(hours)
    let mins=(t%Hour)/Min
    mins=Math.floor(mins)
    let secs=(t%Min)/Sec
    secs=Math.floor(secs)
    

    const values=[days, hours, mins, secs]
    items.forEach(function(item, value){

        item.innerHTML=format(values[value])
    })
}
let countdown=setInterval(getRemaining, 1000)