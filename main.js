
const todos = [
    {  
       id: 1,
       text: 'Take out Trash',
       isCompleted :true
    },
    {  
       id: 2,
       text: 'Meeting with boss',
       isCompleted: true
    },

    {  
       id: 3,
       text: 'Dentist Appointment',
       isCompleted: false
    }
];


// For

// for(let i=0; i<todos.length; i++){
//    console.log(todos[i].id);
// }

// for(let todo of todos){
//        console.log(todo.text);
// }

//foreach map filter

// todos.forEach(function(todo){
//    console.log(todo.isCompleted);
// });

// const todoText = todos.map(function(todo){
//    return console.log(todo.isCompleted);
// });



// const todoCompleted = todos.filter(function(todo){
//    return todo.isCompleted === true;
// }).map(function(todo){
//    return todo.text;
// })

// console.log(todoCompleted);

// Get modal element
var modal = document.getElementById('simpleModal');

// Get open modal button
var modalBtn = document.getElementById('modalBtn');

// Get close modal button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for outside click
window.addEventListener('click', outsideClick)

// Listen for open click
modalBtn.addEventListener('click', openModal);

// Listen for close click
closeBtn.addEventListener('click', closeModal);

// Function to open modal
function openModal(){
   modal.style.display = 'block';
}

// Function to open modal
function closeModal(){
   modal.style.display = 'none';
}

// Function to close modal otside click
function outsideClick(e){
   if(e.target == modal){
      modal.style.display = 'none';
   }
   
}

function addNum(a,b){
   return a + b;
}

const sum = addnum(2,5)

console.log()