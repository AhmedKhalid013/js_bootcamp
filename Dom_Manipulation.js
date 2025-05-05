//DOM manipulation //


//console.log(window); //window is a global object in browser environment
//window.alert('Hello World'); //alert is a method of window object

//it is also fine if u do not write window because window is a top leveol object in browser environment it is not needed to write window. before alert method
//alert('Hello World'); 

//Element selector
//console.log(document.getElementById('my-form')); //get element by id it is my id in index.html file
//console.log(document.querySelector('.container')); //get element by class name it is my class in index.html file
//querySelector is used to selec the classes and id as well as tag name but only that appears first in the document

//console.log(document.querySelectorAll('.item')); //querySelectorAll is used to select all the elements with the same class name or tag

//console.log(document.getElementsByClassName('item')); //getElementsByClassName is used to select all the elements with the same class name or tag but it returns a live HTML collection not a static NodeList like querySelectorAll

//console.log(document.getElementsByTagName('li')); //getElementsByTagName is used to select all the elements with the same tag name


//using forwach loop to iterate over the NodeList or HTML collection
/*
const items=document.querySelectorAll('.item'); 
items.forEach((item)=>{
    console.log(item); //it will log all the items with the class name item
})*/


/*
const ul=document.querySelector('.items'); 
//ul.remove(); //it will remove the ul element from the document
//ul.lastElementChild.remove(); //it will remove the last child of the ul element
ul.firstElementChild.textContent='Ahmed'; //it will change the text content of the first child of the ul element
ul.children[1].innerText='Khalid'; //it will change the inner text of the second child of the ul element
ul.lastElementChild.innerHTML='<h1>Hello</h1>'; //it will change the inner HTML of the last child of the ul element
*/

/*
const btn=document.querySelector('.btn'); //selecting the button element with the class name btn
btn.style.background='green'; //it will change the background color of the button element to green
*/


//Event Listeners
/*
const btn=document.querySelector('.btn'); 
btn.addEventListener('click', (e)=>{ //adding event listener to the button element
    e.preventDefault(); // Prevent form submission or page reload
console.log('Btn is clicked'); //it will log click when the button is clicked
});
*/

/*
const btn=document.querySelector('.btn');
btn.addEventListener('click', (e)=>{ 
    e.preventDefault(); 
    document.querySelector('#my-form').style.background='red'; //it will change the background color of the form to red when the button is clicked
    document.querySelector('body').classList.add('bg-dark'); //it will add the class bg-dark to the body element when the button is clicked
    document.querySelector('.items').lastElementChild.innerHTML='<h1>Hello</h1>'; //it will change the inner HTML of the last child of the ul element to Hello when the button is clicked
});
*/


//Mouseover
/*
const btn=document.querySelector('.btn');
btn.addEventListener('mouseover', (e)=>{ 
    console.log('Hovered!');
    document.querySelector('#my-form').style.background='red'; //it will change the background color of the form to red when the button is clicked
    document.querySelector('body').classList.add('bg-dark'); //it will add the class bg-dark to the body element when the button is clicked
    document.querySelector('.items').lastElementChild.innerHTML='<h1>Hello</h1>'; //it will change the inner HTML of the last child of the ul element to Hello when the button is clicked
});
*/

/*
//Mouseout
const btn=document.querySelector('.btn');
btn.addEventListener('mouseout', (e)=>{ 
    document.querySelector('#my-form').style.background='red'; //it will change the background color of the form to red when the button is clicked
    document.querySelector('body').classList.add('bg-dark'); //it will add the class bg-dark to the body element when the button is clicked
    document.querySelector('.items').lastElementChild.innerHTML='<h1>Hello</h1>'; //it will change the inner HTML of the last child of the ul element to Hello when the button is clicked
});
*/


const myForm=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
//submit event is used to submit the form when the button is clicked
function onSubmit(e){
    e.preventDefault();
//    console.log(nameInput.value)
/*
if(nameInput.value==='' || emailInput.value===''){
    alert('Please enter all fields'); //it will alert the user to enter all fields if any field is empty
}else{
    alert('success'); 
}*/

if(nameInput.value==='' || emailInput.value===''){
msg.classList.add('error'); //it will add the class error to the msg element
msg.innerHTML='Please enter all fields'; //it will change the inner HTML of the msg element to Please enter all fields

setTimeout(()=>msg.remove(), 2000); //it will remove the msg element after 2 seconds
}else{
    const li=document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`)); //it will create a text node with the name and email values
    userList.appendChild(li); //it will append the li element to the userList element

    //Clear Fields
    nameInput.value=''; //it will clear the name input field
    emailInput.value=''; //it will clear the email input field

}

}