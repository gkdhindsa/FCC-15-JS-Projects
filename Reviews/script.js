const items=[
    {
        img: "../img/person-1.jpg",
        name: "Susan Smith",
        designation: "WEB DEVELOPER",
        review:" I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
    },
    {
        img: "img/person-2.jpg",
        name: "Peter Jones",
        designation: "INTERN",
        review: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."

    },
    {
        img: "img/person-3.jpg",
        name: "Bill Anderson",
        designation: "THE BOSS",
        review:"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. "

    },
    {
        img: "img/person-4.jpg",
        name: "Anna Johnson",
        designation: "WEB DESIGNER",
        review:"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal. "

    }
];


let img=document.getElementById('image');
let name=document.getElementById('name');
let designation=document.getElementById('designation');
let review=document.getElementById('review');
let prev=document.getElementById('left');
let next=document.getElementById('right');
let random=document.getElementById('btn');

console.log(review)

let counter=0;

function setContent(counter){
    const item=items[counter];
    img.src=item.img;
    name.innerText=item.name;
    designation.innerText=item.designation;
    review.innerText=item.review;
}
window.addEventListener('load', setContent(counter))
prev.addEventListener('click', function(){
    console.log('clicked prev');
    if(counter==0){
        counter=3;
    }
    else
        counter--;

    setContent(counter);
})
next.addEventListener('click', function(){
    console.log('clicked prev');
    if(counter==3){
        counter=0;
    }
    else
        counter++;

    setContent(counter);
})

random.addEventListener('click', function(){
    let ran=-1;
    while(ran==counter || ran==-1){
        ran=Math.floor(Math.random()*4)
    }
    counter=ran;
    setContent(counter);
})

