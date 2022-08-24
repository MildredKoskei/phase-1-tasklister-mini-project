document.addEventListener("DOMContentLoaded", () => {
  // your code here
let form = document.querySelector('form')
form.addEventListener('submit', (e)=> {

   e.preventDefault()
   tasksToDo(e.target.new_task_description.value)
   
form.reset()
})

function tasksToDo(task){
    console.log(task)
    let p = document.createElement('p')
    let btn = document.createElement('button')
    btn.addEventListener('click', deleteHandle)
    btn.textContent = 'x'
     p.textContent = `${task}`
     p.appendChild(btn)
    console.log(p)
     document.querySelector('#list').appendChild(p)
}

function deleteHandle(e){
  e.target.parentNode.remove()

  
}
})






