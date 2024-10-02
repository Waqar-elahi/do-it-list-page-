document.getElementById(`add-task-btn`).addEventListener(`click`, function() {
    const tasktext = document.getElementById(`new-task`).value;
    if(tasktext === '') {
        alert(`please enter a task`);
        return;
    }
    const li = document.createElement(`li`);
    li.textContent = tasktext;
    const deleteBtn = document.createElement(`button`);
    deleteBtn.textContent = `Delete`;
    deleteBtn.classList.add(`delete-btn`);
    deleteBtn.addEventListener(`click`, function(){
        li.remove();
    });
    li.appendChild(deleteBtn);
    document.getElementById(`todo-list`).appendChild(li);
    document.getElementById(`new-task`).value = '';
})