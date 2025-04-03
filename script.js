function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `<span>${taskInput.value}</span> <span class="close">&times;</span>`;

    li.addEventListener("click", function () {
        this.classList.toggle("checked");
    });

    li.querySelector(".close").addEventListener("click", function (event) {
        event.stopPropagation();
        li.remove();
    });

    taskList.appendChild(li);
    taskInput.value = "";
}
