const form = document.getElementById('checkout-form');

if(form) {
	form.addEventListener('submit', (event) => {
		event.preventDefault();
	  
		  var error = 0;
		  var letters = /^[A-Za-z]+$/;
		  var email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		  var lettersNumbers = /^[0-9a-zA-Z]+$/;
		  var numbers = /^[0-9]+$/;
	  
		  var elements = [
			  "fName",
			  "fEmail",
			  "fAddress",
			  "fLastN",
			  "fPassword",
			  "fPhone",
			  "errorName",
			  "errorEmail",
			  "errorAddress",
			  "errorLastN",
			  "errorPassword",
			  "errorPhone"
		  ]
	  
		  elements.forEach(element => {
			  document.getElementById(element);
		  });
	  
		  
		  if (fName.value === "" || fName.value.length <= 2 || !fName.value.match(letters)){
			  error++;
			  errorName.style.display='inline';
		  } else {
			  errorName.style.display='none';
		  }
		  
		  if  (fEmail.value === "" || fEmail.value.length <= 2 || !fEmail.value.match(email)){
			  error++;
			  errorEmail.style.display='inline';
		  } else {
			  errorEmail.style.display='none';
		  }
		  
		  if (fAddress.value === "" || fAddress.value.length <= 2 ){
			  error++;
			  errorAddress.style.display='inline';
		  } else {
			  errorAddress.style.display='none';
		  }
		  
		  if (fLastN.value === "" || fLastN.value.length <= 2 || !fLastN.value.match(letters)){
			  error++;
			  errorLastN.style.display='inline';
		  } else {
			  errorLastN.style.display='none';
		  }
		  
		  if (fPassword.value === "" || fPassword.value.length <= 2 || !fPassword.value.match(lettersNumbers)){
			  error++;
			  errorPassword.style.display='inline';
			  
		  } else {
			  errorPassword.style.display='none';
		  }
		  
		  if (fPhone.value === "" || fPhone.value.length <= 8 || !fPhone.value.match(numbers)){
			  error++;
			  errorPhone.style.display='inline';
			  
		  } else {
			  errorPhone.style.display='none';
		  }
		   
		  if (error>0){
			  return;
		  }else{
			  alert("OK");
		  }
	  
	  });
}