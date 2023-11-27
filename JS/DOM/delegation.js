
// document.querySelector('#football').addEventListener('click', function changeCol(e) {
//     console.log("football was clicked.");
//     const target = e.target;
//     if (target.matches('li')) {
//         target.style.backgroundColor = 'red'
//     }
// });

// document.querySelector('#cricket').addEventListener('click', function changeCol(e) {
//     console.log("cricket was clicked.");
//     const target = e.target;
//     if (target.matches('li')) {
//         target.style.backgroundColor = 'red'
//     }
// });

// document.querySelector('#tennis').addEventListener('click', function changeCol(e) {
//     console.log("tennis was clicked.");
//     const target = e.target;
//     if (target.matches('li')) {
//         target.style.backgroundColor = 'red'
//     }
// });

// document.querySelector('#boxing').addEventListener('click', function changeCol(e) {
//     console.log("boxing was clicked.");
//     const target = e.target;
//     if (target.matches('li')) {
//         target.style.backgroundColor = 'red'
//     }
// });

// document.querySelector('#golf').addEventListener('click', function changeCol(e) {
//     console.log("golf was clicked.");
//     const target = e.target;
//     if (target.matches('li')) {
//         target.style.backgroundColor = 'red'
//     }
// });


// This is event delagation in event listening, this is then only code we need to write instead of the above.
document.querySelector('#sports').addEventListener('click', function (e) {
    console.log(e.target.getAttribute('id') + " is " + "clicked")
    const target = e.target;
    if (target.matches('li')) {
        target.style.background = 'red'
    } else {
        target.style.background = 'blue'
    }
});


const sports = document.querySelector('#sports');
const newSport = document.createElement('li');

newSport.innerText = "rugby"
newSport.setAttribute('id', 'rugby')

sports.appendChild(newSport);