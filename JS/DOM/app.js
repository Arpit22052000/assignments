// DOM Manipulation

// getElementById()

// const title = document.getElementById('main-heading');

// title.textContent = "Arpit Kabra"


//getElementByClassName

// const list1 = document.getElementsByClassName('list-items');

// console.log(list1)

//getElementByTagName

// const list = document.getElementsByTagName('li')

// console.log(list)


//querySelector

// const container = document.querySelector('div');

// console.log(container)

// //querySelectorAll

// const container_all = document.querySelectorAll('li');

// console.log(container_all)



//styling the element

// const items = document.querySelectorAll('li');

// console.log(items)

// items.forEach((li) => {
//     li.style.color = 'blue';
//     li.style.fontSize = '32px';
//     li.style.padding = '5px';
//     li.style.backgroundColor = 'black';
// })


// create an element

// const ul = document.querySelector('ul')
// const li1 = document.createElement('li')

// adding the element
//ul.append(li1)

// modifying the text
//li1.innerText = "X-men"

// modifying through attributes
//li1.setAttribute('id', 'main-heading');

// remove attribute
//li1.removeAttribute('id')


// Parent Node Traversel

//let ul_node = document.querySelector('ul');



// console.log(ul_node.parentNode.parentNode)
// console.log(ul_node.parentElement.parentElement)


// Child Node Traversel
//let ul_node = document.querySelector('ul');

// console.log(ul_node.childNodes)
// console.log(ul_node.firstChild)
// console.log(ul_node.lastChild)

// ul_node.childNodes[3].style.backgroundColor = 'blue';

// console.log(ul_node.firstElementChild)
// console.log(ul_node.lastElementChild)



// let li_node = document.querySelector('li');

// console.log(li_node.parentNode)
// console.log(li_node.parentElement)
// console.log(li_node.childNodes)
// console.log(li_node.childElementCount)

//sibling node traversal
// let ul = document.querySelector('ul')
// const div = document.querySelector('div')


// console.log('ul previous sibling :  ',ul.previousSibling)
// console.log('ul next sibling : ',ul.nextSibling)

// console.log('ul previous element sibling :  ',ul.previousElementSibling)
// console.log('ul next element sibling :  ',ul.nextElementSibling)

// click
// const buttonClick = document.querySelector('.card');

// function clicked() {
//     alert('Something suspicious detected');
// }

// buttonClick.addEventListener('click', clicked);


// mouse over
function changeBgColor() {
    changeColor.
}

const changeColor = document.querySelector('.card').addEventListener("mouseover", changeBgColor);



























