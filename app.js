// 這段程式負責管理待辦清單的資料與畫面渲染。
const STORAGE_KEY = 'polly-todos';

const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const emptyState = document.getElementById('empty-state');
const todoCount = document.getElementById('todo-count');

// 這裡用 localStorage 儲存待辦資料，讓頁面重新整理後仍可保留。
let todos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

// 這個函式會把待辦資料存回 localStorage。
function saveTodos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

// 這個函式會更新底部的未完成數量，並控制空狀態文字。
function updateSummary() {
  const remainingCount = todos.filter((todo) => !todo.completed).length;
  todoCount.textContent = `未完成: ${remainingCount} 項`;

  if (todos.length === 0) {
    emptyState.hidden = false;
  } else {
    emptyState.hidden = true;
  }
}

// 這個函式會將目前的 todos 重新渲染到畫面上。
function renderTodos() {
  todoList.innerHTML = '';

  todos.forEach((todo) => {
    const listItem = document.createElement('li');
    listItem.className = `todo-item ${todo.completed ? 'completed' : ''}`;

    const mainContent = document.createElement('div');
    mainContent.className = 'todo-main';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'todo-checkbox';
    checkbox.checked = todo.completed;
    checkbox.setAttribute('aria-label', `標記 ${todo.text} 完成`);

    // 勾選後會切換完成狀態，並立即重新渲染。
    checkbox.addEventListener('change', () => {
      todo.completed = checkbox.checked;
      saveTodos();
      renderTodos();
    });

    const text = document.createElement('span');
    text.className = 'todo-text';
    text.textContent = todo.text;

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.className = 'todo-delete';
    deleteButton.textContent = '刪除';

    // 刪除按鈕會移除該筆待辦，然後更新 localStorage。
    deleteButton.addEventListener('click', () => {
      todos = todos.filter((item) => item.id !== todo.id);
      saveTodos();
      renderTodos();
    });

    mainContent.appendChild(checkbox);
    mainContent.appendChild(text);

    listItem.appendChild(mainContent);
    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);
  });

  updateSummary();
}

// 新增待辦事項：若內容為空白字串，則忽略。
todoForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const text = todoInput.value.trim();
  if (!text) {
    todoInput.focus();
    return;
  }

  todos.unshift({
    id: Date.now() + Math.random(),
    text,
    completed: false,
  });

  todoInput.value = '';
  saveTodos();
  renderTodos();
  todoInput.focus();
});

// 初始載入時先把儲存的待辦資料渲染出來。
renderTodos();
