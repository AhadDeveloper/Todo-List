const inputBox = document.getElementById('write-todo');
const addBtn = document.getElementById('btn-add');
const deleteBtn = document.getElementById('dlt-btn');
const presentTask = document.querySelector('.task-present');

const createDiv = inputText => {
  const taskContainer = document.createElement('div');
  taskContainer.classList.add('current-task');

  const input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  input.setAttribute('name', 'task');

  const label = document.createElement('label');
  label.textContent = inputText;

  const button = document.createElement('button');
  button.classList.add('remove-btn');
  button.textContent = 'x';

  taskContainer.appendChild(input);
  taskContainer.appendChild(label);
  taskContainer.appendChild(button);

  presentTask.appendChild(taskContainer);
};

addBtn.addEventListener('click', () => {
  const inputValue = inputBox.value;
  createDiv(inputValue);
  inputBox.value = '';

  // Remove Button
  const removeBtns = document.querySelectorAll('.remove-btn');

  removeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.parentElement;
      parent.remove();
    });
  });

  // Delete Button
  const checkboxes = document.getElementsByName('task');

  deleteBtn.addEventListener('click', () => {
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        const selectedParent = checkbox.parentElement;
        selectedParent.remove();
      }
    });
  });
});
