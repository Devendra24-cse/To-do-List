let addBtn = document.getElementById("btn-add");
let userTask = document.getElementById("task-user");
let allTasks= document.getElementById("tasks-all");

let defaultBtn = document.querySelectorAll(".button-default-task");

defaultBtn.forEach(button => {
    button.addEventListener('click',()=>{
        addingTask(button.textContent);
    }) 
    }
)

addBtn.addEventListener('click', ()=>{
    let userInput = document.getElementById("input-user").value;

    if(userInput === ""){
        return;
    }else {
        addingTask(userInput);
    }


})
let userrInput = document.getElementById("input-user");
userrInput.addEventListener('keypress',function(event){
    if(event.key === "Enter"){
            let userInput = document.getElementById("input-user").value;

            if(userInput === ""){
                return;
            }else {
                addingTask(userInput);
            }
    }

})
function addingTask(V){
        let newTask = document.createElement("li");
        let deleteBtn = document.createElement("button");

        newTask.textContent = V;
        deleteBtn.textContent = "✕";

        allTasks.appendChild(newTask);
        newTask.appendChild(deleteBtn);

        document.getElementById("input-user").value = "";    
        deleteBtn.addEventListener('click',()=> {
        newTask.remove();
        })
}