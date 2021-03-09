'use strict'
let allStudent = [];

// creat a construtor function 
function Students(id, email, mobile, tuition) {
    this.id = id;
    this.email = email;
    this.mobile = mobile;
    this.tuition = tuition;

    this.age = randomNumber(18, 24);

    allStudent.push(this);


}

// function to calcualte age randomly : 
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


//make object from the local by re-ins

if (localStorage.getItem('student')) {
    let dataOfLocal = JSON.parse(localStorage.getItem('student'));
    // re-inst
    for (let i = 0; i < dataOfLocal.length; i++) {
        new Students(dataOfLocal[i].email, dataOfLocal[i].mobile, dataOfLocal[i].tuition);
    }
}

// creat table 
// get element by id :- 
let parent = document.getElementById('parent');
let table = document.createElement('table');
parent.appendChild(table)
// create 

//header Row
let header = ['id', 'Name', 'Email', 'Mobile', 'Age', 'Tuition ']; // array for the header 

let row = document.createElement('tr');
table.appendChild(row);

for (let i = 0; i < header.length; i++) {
    let theData = document.createElement('th')
    row.appendChild(theData);
    theData.textContent = header[i];

}


//let td1 = document.createElement('td') ;
Students.prototype.render = function () {
    let tableRow = document.createElement('tr');
    table.appendChild(tableRow);

    let td1 = document.createElement('td');
    td1.textContent = this.id;
    tableRow.appendChild(td1);

    let td2 = document.createElement('td');
    td2.textContent = this.email;
    tableRow.appendChild(td2);

}






// add eventListner for form
let form = document.getElementById("addForm");
form.addEventListener('submit' , submit);

function submit(event) {
    event.praventDefault();

    let studentEmail = event.target.email.value;
    let studentMobile = event.target.mobileNumber.value;
    let studentTutiton = event.target.Tuition.value;

    console.log(event);

}


// in order to make total 

function total(){
    for(let j=0 ; j<allStudent.length ; i++){
        allStudent[j]
    }
}


