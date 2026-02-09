const addBtn = document.getElementById("add-btn");
const inputTask = document.getElementById("input-list");
const itemList = document.getElementById("list");



addBtn.addEventListener('click', addItem);
inputTask.addEventListener('keypress', function(e) {
    if(e.key === "Enter") {
        addItem();
    }
});
function addItem() {
    const itemText = inputTask.value.trim();
    if (itemText === '') {
        return;
    }
    const li = document.createElement('li');
    
    const left = document.createElement('div');

    left.className = 'task-left';

    const checkbox = document.createElement('input');

    checkbox.type = 'checkbox';

    checkbox.addEventListener('change', () => {
        left.classList.toggle('done');
    });

    const span = document.createElement('span');

    span.textContent = itemText;

    left.appendChild(checkbox);
    left.appendChild(span);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'del-btn';

    deleteBtn.textContent = '🗑️';
    
    deleteBtn.addEventListener('click', () => {
        li.remove();
    })
    li.appendChild(left);
    li.appendChild(deleteBtn);

    itemList.appendChild(li);
    inputTask.value = '';
    inputTask.focus();

}