const reviews = [
    {
        id: 1,
        name: "Susan Smith",
        job: "Web Developer",
        image: "https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg",
        Text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up",
    },
    {
        id: 2,
        name: "Anna Johnson",
        job: "Web Designer",
        image: "https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg",
        Text: "Helvetica artisan kindfolk thundercats. Disrupt glossier gastropub deep v vice frazen.",
    },
    {
        id: 3,
        name: "Peter Jones",
        job: "Intern", 
        image: "https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg",
        Text: "Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa.",
    },
    {
        id: 4,
        name: "Bill Anderson",
        job: "The Boss",
        image: "https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg",
        Text: "Edison bulp put a bird on it humblebrag, marfa pok pok heirloom fashion axe crazy stumptown venmo actually seitan.",
    },
 
];

const  author = document.getElementByInd('author');
const  jpb = document.getElementByInd('job');
const  image = document.getElementByInd('image-profile');
const  information = document.getElementByInd('descripition');

const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const randomButton = document.querySelector('.random-button');


let currentItem = 0;



function showPerson(person) {
    const item = reviews[person]
    image.srcm = item.image
    author.textContent = item.name
    job.textContent = item.job
    information.textContent = item.text

}

nextButton.addEventListener('click', () =>{
    currentItem++

    if(currentItem > reviews.length -1){
        currentItem = 0
    }
    showPerson(currentItem)

})
prevButton.addEventListener('click', ()=>{
    currentItem--
    if(currentItem < 0){
        currentItem = reviews.length - 1
    }

    showPerson(currentItem)
})
randomButton.addEventListener('click', ()=>{
    const randomButton = math.floor(math.randam() * reviews.length)
    showPerson(randomPerson)
})