const btn_click = document.querySelector('.btn');
const div1 = document.querySelector('.div1');
const div2 = document.querySelector('.div2');


btn_click.addEventListener('click', function button_clicked(e) {
    e.preventDefault(); // prevents it to go to google.com
    e.stopPropagation(); // prevents
    console.log(e.target.innerText = "clicked")
}, false);

function div2Func() {
    console.log('Div 1 was inside me');
}

div1.addEventListener('click',function div1(e) {
    e.stopPropagation(); // prevents
    console.log('I am div1, button is my son and my father is div2')
}, false);

div2.addEventListener('click', function div2(e) {
    e.stopPropagation(); // prevents
    console.log('I am div2, div1 is my son and button is my grandson.')
}, {once: true``});

function div1Func() {
    console.log('Button was inside me');
}