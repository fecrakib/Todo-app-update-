let mas=document.getElementById('mas'),
 dateInput=document.getElementById('date'),
 descriptionInput=document.getElementById('description'),
 add=document.getElementById('add')
let form= document.getElementById('form').addEventListener('submit',(e)=>{
    e.preventDefault();
    formValidation();
    
})
const textInput=document.getElementById('textInput');

// task section
const taskContainer = document.getElementById('tasks')
// task section end
let formValidation=()=>{
    if(textInput.value===""){
        console.log('write something');
        mas.innerText="Input can not be blanck"
        mas.style.color="red"; return
    }
    acceptData();
    mas.innerText=""
    add.setAttribute("data-bs-dismiss","modal")
    add.click();
    function abc(){
        abc()
        (()=>{
            add.setAttribute("data-bs-dismiss","")
        })()
    }
}
let data=[];
let acceptData=()=>{
    data.push({
text:textInput.value,
date:dateInput.value,
decription:descriptionInput.value

    });
    localStorage.setItem("data",JSON.stringify(data))
    
   console.log(data);
   
    const task= document.createElement('div')
    
    task.innerHTML = `
    <span class="text-center">${data.text}</span>

    <span>${data.date}</span>
    <span>${data.description}</span>
    <span class="options">
      <i data-bs-toggle="modal" data-bs-target="#form" onClick="editeTask(this)" class="fa-solid fa-pen-to-square"></i>
      <i onClick="deleteTask(this)" class="fa-solid fa-trash"></i>
    </span>
    `
    taskContainer.appendChild(task)
    resetForm();
}
let deletepost=(e)=>{
    e.parentElement.parentElement.remove();
}
let resetForm=()=>{
    textInput.value="";
    dateInput.value='';
    descriptionInput.value='';
}
let deleteTask=(e)=>{
    e.parentElement.parentElement. remove();
    console.log("task delet");
}
let editeTask=(e)=>{
let selectedTask= e.parentElement.parentElement;
textInput.value=selectedTask.children[0].innerHTML;
dateInput.value=selectedTask.children[1].innerHTML;
descriptionInput.value=selectedTask.children[2].innerHTML;
selectedTask.remove();
}
(()=>{
    data=JSON.parse(localStorage.getItem("data"));
    console.log(data)
})()