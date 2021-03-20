document.addEventListener('DOMContentLoaded',function(){
	if(sessionStorage.getItem("isloggedin")!="yes"){
		alert('Please login first!');
		window.location.href="./index.php";
	}
	
	var red = document.querySelector(".req");
	
	red.addEventListener("click",(e)=>{
		
		window.location.href = "./index.php";
		
	})
	sessionStorage.setItem("isloggedin","yes")
	
	
	

	
	var monthNames = [ "January", "February", "March", "April", "May", "June",
	"July", "August", "September", "October", "November", "December" ];
	
	var pay = document.querySelector(".button button");
	
	select = document.getElementById('Month');
	
	for (var i = 0; i<=11; i++){
		var opt = document.createElement('option');
		opt.value =i+1;
		opt.innerHTML = monthNames[i];
		select.appendChild(opt);
	}
	
	select2 = document.getElementById("Year");
	
	var i=new Date().getFullYear();
	
	for(j=i;j<i+60;j++){
		var opt = document.createElement('option');
		opt.value = j;
		opt.innerHTML = j;
		select2.appendChild(opt);
	}
	
	pay.addEventListener('click',function(){
		var mn = new Date().getMonth();
		
		inputs.forEach((input)=>{
			
			
			
			
			validate(input, pattern[input.attributes.name.value])
			
		})
		
		
		if(select.selectedIndex==0){
			select.style.borderColor="red"
			select.parentElement.parentElement.nextElementSibling.className="error";
			select.parentElement.parentElement.nextElementSibling.innerHTML="Please enter a valid expiration date.";
		}
		else{
			select.style.borderColor="green";
			select.parentElement.parentElement.nextElementSibling.className="error errorNoShow";
			select.parentElement.parentElement.nextElementSibling.innerHTML="";
		}
		
		if(select2.selectedIndex==0){
			select2.style.borderColor="red"
			select2.parentElement.parentElement.nextElementSibling.className="error";
			select2.parentElement.parentElement.nextElementSibling.innerHTML="Please enter a valid expiration date.";
		}
		else{
			select2.style.borderColor="green";
			select2.parentElement.parentElement.nextElementSibling.className="error errorNoShow";
			select2.parentElement.parentElement.nextElementSibling.innerHTML="";
		}
		
		if(select2.selectedIndex==1&&select.value<=mn){
			
			select.style.borderColor="red"
			select2.style.borderColor="red"
			select2.parentElement.parentElement.nextElementSibling.className="error";
			
			select2.parentElement.parentElement.nextElementSibling.innerHTML="The expiration date you entered is not valid. Please check the expiration date on your credit card and try again";
		}
		
		var err = document.querySelectorAll(".error")
		for(i=0;i<3;i++){
			if(err[i].className=="error"){
				return;
			}
		}
		go();
	})
	
	
	
	var inputs = document.querySelectorAll("input");
	
	var pattern= {
		card:/(^(3[47][0-9]{13})$)|(^(4[0-9]{12}(?:[0-9]{3})?)$)/,
		cvc:/^[\d]{3}$/
	}
	
	function validate(field, regEx){
		
		//console.log(regEx.test(field.value));
		if(regEx.test(field.value)){
			field.style.borderColor="green";
			field.parentElement.parentElement.nextElementSibling.className="error errorNoShow";
			field.parentElement.parentElement.nextElementSibling.innerHTML="";
		}
		else{
			field.style.borderColor="red";
			field.parentElement.parentElement.nextElementSibling.className="error";
			field.parentElement.parentElement.nextElementSibling.innerHTML="Please enter a valid card number";
			
			
			return;
		}
		
	}
	
	
	
	
	
	inputs.forEach((input)=>{
		
		
		input.addEventListener('keyup',(e)=>{
			
			validate(e.target, pattern[e.target.attributes.name.value])
		})
	})
	var myTimerForSpan;
	function go(){
		
		
		// Get the modal
		var modal = document.getElementById("myModal");
		
		// Get the button that opens the modal
		var btn = document.querySelector(".button button");
		
		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];
		
		// When the user clicks the button, open the modal 
		
		modal.style.display = "block";
		
		
		setTimeout(abc, 15000)
		
		
		myTimerForSpan = setInterval(changeSpanSeconds, 1000);
		
		
	}
	
	function changeSpanSeconds(){
		
		var secs = document.getElementById("timer").innerHTML;
		document.getElementById("timer").innerHTML = (secs-1);
		
		
	}
	
	
	function abc(){
		clearInterval(myTimerForSpan);
		window.location.href = "./index.php";
		
	}
});