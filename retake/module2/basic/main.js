// document.getElementById - Single Node
// document.getElementsByClassName - HTMLCollection
// document.getElementsByTagName - HTMLCollection
// document.querySelector - First match Single Node
// document.querySelectorAll - All match (NodeList Collection)
// children - get child element node type (HTMLCollection)
// childNodes - get child node (every node type) (NodeList) 

// Array Like - NodeList implementforEach
// Array Like - HTMLCollection does not implement forEach, using Array.from(HTMLCollection) when use forEach
// 1.query <div><p>...</p></div>
const divElement1 = document.getElementsByTagName('div')
console.log(divElement1);
console.log(divElement1[1]);

const divV1Children = divElement1[1].children
console.log(divV1Children);

Array.from(divV1Children).forEach(
    (element) => { console.log(element) }
)

const divElement2 = document.querySelectorAll('div')
console.log(divElement2);
console.log(divElement2[1].children);

Array.from(divElement2[1].children).forEach(
    (element) => {
        console.log(element)
    })

const divElement3 = document.querySelector('div.faculty')
console.log(divElement3);

const divElement4 = document.querySelector('div#div-faculty')
console.log(divElement4);

Array.from(divElement4.children).forEach(
    (element) => {
        console.log(element);
    })

//2. query <p> under <div class="faculty" id="div-faculty">
const pElements = document.querySelectorAll('div.faculty>p')
console.log(pElements);

pElements.forEach((element) => {
    console.log(element);
})

//  3. query element with id "courses"
const coursesElement = document.getElementById('courses')
console.log(coursesElement);

//  4. query element with classname "lecturer"
const lecturerElement = document.getElementsByClassName('lecturer')
console.log(lecturerElement);

// 5. query all <button> elements (collection)
const buttonElement = document.getElementsByTagName('button')
console.log(buttonElement);
// 6. query <li> elements under <ul id="courses" (Collection)
const liElement = document.getElementById('courses').children
console.log(liElement);
// 7. query firt <li> element under <ul id="courses" (Single Node)
const firstLiElement = document.querySelector('ul#courses>li')
console.log(firstLiElement);
