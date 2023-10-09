const toDoContainer = document.getElementsByClassName('to-do-preview')[0];
const inputBox = document.getElementById('toDoInput');
const addButton = document.getElementById('addButton');
let toDoArray = [];
let completeArray = [];
let activeArray = [];
const completedBtn = document.getElementById('completedButton');
const allBtn = document.getElementById('allButton');
const activeBtn = document.getElementById('activeButton');
const clearBtn = document.getElementById('clearButton');

addButton.addEventListener("click", () => {
    addTask();
});

inputBox.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});




function addTask() {
    const inputVal = inputBox.value.trim();
    if (check(inputVal, toDoArray)) {
        toDoArray.push({
            title: inputVal,
            completed: false,
        });
        showElements();
        inputBox.value = "";
    }
}

function showElements() {
    toDoContainer.innerHTML = "";
    for (let i = 0; i < toDoArray.length; i++) {
        toDoContainer.innerHTML += `<div class="d-flex justify-content-between box">
                                        <h3 class="text-center  w-xl-100 ${toDoArray[i].completed ? "line-through" : ""}"> ${toDoArray[i].title}</h3>
                                        <div class="d-flex flex-row gap-4 justify-content-end flex" >
                                            <div class="border border-1 border-dark py-1 px-2 rounded-1 check-btn" onclick="completeTask('${i}')" > 
                                                <i class="fa-solid fa-check"></i>
                                            </div>
                                            <div class="border border-1 border-dark py-1 px-2 rounded-1 remove-element" onclick="delTask('${i}')">
                                                <i class="fa-solid fa-trash-can"></i>
                                            </div>
                                        </div>
                                    </div>`;
    }
    inputBox.value ="";
}




function check(inputVal, array) {
    if (inputVal === "") {
        inputBox.value = "";
        return false;
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i].title === inputVal) {
            alert("Same task....");
            inputBox.value = "";
            return false;
        }
    }
    return true;
}

function delTask(i) {
    toDoArray.splice(i, 1)
    showElements();
}

function completeTask(i) {
    toDoArray[i].completed = !toDoArray[i].completed;
    showElements();
}

completedBtn.addEventListener("click", ()=>{
    completeArray=[];
    for(let i=0; i<toDoArray.length; i++) {
        if(toDoArray[i].completed){
            completeArray.push( toDoArray[i]);
        }   
    }
    // console.log(completeArray);
    showCompletedTasks();
});

function showCompletedTasks() {
    toDoContainer.innerHTML="";
    for(let i=0; i<completeArray.length; i++) {
        toDoContainer.innerHTML += `<div class="d-flex justify-content-between box">
        <h3 class="text-center  w-xl-100 ${completeArray[i].completed ? "line-through" : ""}"> ${completeArray[i].title}</h3>
        <div class="d-flex flex-row gap-4 justify-content-end flex" >
            <div class="border border-1 border-dark py-1 px-2 rounded-1 check-btn" onclick="completeTask('${i}')" > 
                <i class="fa-solid fa-check"></i>
            </div>
            <div class="border border-1 border-dark py-1 px-2 rounded-1 remove-element" onclick="delTask('${i}')">
                <i class="fa-solid fa-trash-can"></i>
            </div>
        </div>
    </div>`;
    }
}

allBtn.addEventListener("click", ()=>{
        showElements();
});

activeBtn.addEventListener("click", ()=>{
    activeArray=[];
    for(let i=0; i<toDoArray.length; i++) {
        if(!toDoArray[i].completed){
            activeArray.push( toDoArray[i]);
        }   
    }
    showActiveTask();
});

function showActiveTask() {
    toDoContainer.innerHTML="";
    for(let i=0; i<activeArray.length; i++) {
        toDoContainer.innerHTML += `<div class="d-flex justify-content-between box">
        <h3 class="text-center  w-xl-100 ${activeArray[i].completed ? "line-through" : ""}"> ${activeArray[i].title}</h3>
        <div class="d-flex flex-row gap-4 justify-content-end flex" >
            <div class="border border-1 border-dark py-1 px-2 rounded-1 check-btn" onclick="completeTask('${i}')" > 
                <i class="fa-solid fa-check"></i>
            </div>
            <div class="border border-1 border-dark py-1 px-2 rounded-1 remove-element" onclick="delTask('${i}')">
                <i class="fa-solid fa-trash-can"></i>
            </div>
        </div>
    </div>`;
    }
}

clearBtn.addEventListener("click",()=>{
    toDoArray=[];
    showElements();
});