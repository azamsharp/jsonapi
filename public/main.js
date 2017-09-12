
let btnSave = document.querySelector('#btnSave')

console.log(btnSave)

btnSave.addEventListener('click',function(){

  fetch('/task',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title:'Wash the car',
      priority:1
    })
  })

})
