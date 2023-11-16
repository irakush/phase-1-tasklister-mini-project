document.addEventListener("DOMContentLoaded", () => {

  const inputTask = document.getElementById("new-task-description")
  console.log(inputTask)
  // your code here

  const form = document.querySelector('form')

  form.addEventListener('submit', (event) => {
    event.preventDefault()

    const inputTask = document.getElementById("new-task-description")
    createToDo(inputTask.value)

    form.reset()
  })
});

function createToDo(todo){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  let pText = document.createElement('snap')

  btn.addEventListener('click', deleteTask)

  btn.textContent = ' X '
  // p.textContent = `${todo}`
  pText.textContent = ` ${todo}`
  p.appendChild(btn)
  p.appendChild(pText)
  
  document.querySelector('#tasks').appendChild(p)
}

function deleteTask(e) {
  e.target.parentNode.remove()
}