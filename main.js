const user = document.getElementById('name')
const address = document.getElementById('email')
const pass = document.getElementById('password')
const isButton = document.getElementById('button')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')



form.addEventListener('submit', (e) =>{
	
	let messages =[]
	if(user.value=== ""){
		messages.push('username is blank')
	}

	if(messages.length > 0){
		e.preventDefault()
		errorElement.innerText = messages.join(',')
	}

	
})