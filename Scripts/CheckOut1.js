document.addEventListener('DOMContentLoaded',function(){
	if(sessionStorage.getItem("isloggedin")!="yes"){
		alert('Please login and then access this page');
		window.location.href="./index.php";
	}
	
sessionStorage.setItem("isloggedin","yes");
	
	
	var button = document.querySelector(".button button");
	var count=0;// 40
	var fname = document.querySelector("#name td input");
	var lname = document.querySelector("#name :nth-child(2) input");
	var address = document.querySelector("#address input");
	var zip = document.querySelector("#zipCity :first-child input");
	var city = document.querySelector("#zipCity :nth-child(2) input");
	var state = document.querySelector("#state select");
	var phone = document.querySelector("#phone input");
	var inputs = document.querySelectorAll("input");
	var f=false,l=false,c=false,z=false;
	var pattern = {
		
		phone:/^\(?([0-9]{3})\)?(-|\.|\s)?([0-9]{3})(-|\.|\s)?([0-9]{4})$/,
		fname:/^[a-z\sA-Z]{1,}$/,
		lname:/^[a-z\sA-Z]{1,}$/,
		zip:/^\w\d\w\-?\s?\d\w\d$/,
		city:/^[a-z\sA-Z]{1,}$/,
		address:/^.{3,}$/
	}
	
	inputs.forEach((input)=>{
		
		input.addEventListener('keyup',(e)=>{
			
			validate(input, pattern[input.attributes.name.value])
			
		})
	})
	
	
	button.addEventListener('click',(e)=>{
		
		validate(fname, pattern["fname"]);
		validate(lname, pattern["lname"]);
		validate(zip, pattern["zip"]);
		validate(city, pattern["city"]);
		validate(phone, pattern["phone"]);
		validate(address, pattern["address"]);
		var error = document.querySelectorAll(".noerror");
		console.log(fname.value.length)
		
		var error = document.querySelectorAll(".noerror");
		if(state.selectedIndex==0){
			state.style.borderColor="red";
			error[3].children[0].innerHTML="Please select a state";
			error[3].className ="noerror"
			count++;
		}
		else{
			
			state.style.borderColor="green";
			error[3].children[0].innerHTML="";
			error[3].className ="noerror errorNoShow"
		}
		
		
		if(f||l)
		count++;
		
		if(c||z)
		count++;
		
		
		document.querySelector("#rightWrapper").style.paddingBottom = (500+(count*40)).toString()+"px";
		
		
		
		if(count>0){
			count=0;
			
		}
		else{
			window.location.href = "./CardDetails.php	";
		}
	})
	
	
	
	
	function validate(field, regEx){
		var error = document.querySelectorAll(".noerror");
		
		if(regEx.test(field.value)){
			field.style.borderColor="green";
			
			
			switch(field){
				
				case fname:
				
				error[0].children[0].innerHTML="";
				error[0].className="noerror errorNoShow"
				f=false
				break;
				
				case lname:
				l=false
				error[0].children[1].innerHTML="";
				error[0].className ="noerror errorNoShow"
				break;
				
				case address:
				error[1].children[0].innerHTML="";
				error[1].className ="noerror errorNoShow"
				
				break;
				
				case zip:
				z=false
				error[2].children[0].innerHTML="";
				error[2].className ="noerror errorNoShow"
				break;
				
				case city:
				c=false
				console.log(error[2])
				error[2].children[1].innerHTML="";
				error[2].className ="noerror errorNoShow"
				break;
				case phone:
				error[4].children[0].innerHTML="";
				error[4].className ="noerror errorNoShow"
				break;
			}
		}
		else{
			
			var error = document.querySelectorAll(".noerror");
			field.style.borderColor="red";
			switch(field){
				
				case fname:
				f=true;
				error[0].children[0].innerHTML="Name should only be letters";
				error[0].className ="noerror"
				if(fname.value.length==0){
					f=true;
					error[0].children[0].innerHTML="Name field can not be empty";
					error[0].className ="noerror"
					
				}
				break;
				
				case lname:
				l=true
				error[0].children[1].innerHTML="Last name should only be letters";
				error[0].className ="noerror"
				if(lname.value.length==0){
					l=false
					error[0].children[1].innerHTML="Last name field can not be empty";
					error[0].className ="noerror"
				}
				break;
				
				case address:
				error[1].children[0].innerHTML="The address is too short";
				error[1].className ="noerror"
				count++;
				if(address.value.length==0){
					error[1].children[0].innerHTML="Address field can not be empty";
					error[1].className ="noerror "
					
				}
				break;
				
				case zip:
				z=true
				error[2].children[0].innerHTML="Zip code must be of form- A1A-1A1";
				error[2].className ="noerror"
				if(zip.value.length==0){
					z=false
					error[2].children[0].innerHTML="Zip code field can not be empty";
					error[2].className ="noerror "
				}
				break;
				
				case city:
				c=true
				console.log(error[2])
				error[2].children[1].innerHTML="City can't have numbers in it";
				error[2].className ="noerror"
				if(city.value.length==0){
					c=false
					console.log(error[2])
					error[2].children[1].innerHTML="city field can not be empty";
					error[2].className ="noerror "
				}
				break;
				case phone:
				error[4].children[0].innerHTML="Phone number has to be of the format (999-999-999)";
				error[4].className ="noerror"
				count++;
				if(phone.value.length==0){
					error[4].children[0].innerHTML="Phone field can not be empty";
					error[4].className ="noerror "
				}
				break;
			}
		}
		
		
		
	}
	
	function myfunction(){
		var a = document.querySelectorAll(".noerror");
		for(i=0;i<a.length;i++){
			a[i].className="noerror"
			//		console.log(a);
			
		}
		document.querySelector("#rightWrapper").style.paddingBottom="500px";
	}
	
	
	
	
	
	
	
	
	
	
})