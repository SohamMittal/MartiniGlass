document.addEventListener('DOMContentLoaded',function(){
	
	
	var test = document.querySelector("#headerRibbon ul");
	
	var cart=document.querySelector("#cart")
	
	var temp="High_ball";
	var isloggedin = false;
	
	
	cart.addEventListener('click',(e)=>{
		
		if(isloggedin)
		window.location.href='./cart.php';
		else
		alert('You have to login to access the cart\nUsername: soham123\nPassword: abc');
	})
	
	test.addEventListener('click',(e)=>{
		
		if(e.target !=test){
			var i=0
			for(i=0;i<test.childElementCount;i++){
				
				
				test.children[i].id="";
			}
			
			e.target.id="selected";
			temp=e.target.innerHTML.replace(/\s/,'_');
			
			var showtable =document.querySelector("#"+temp);
		
			var tables = document.querySelectorAll("table")
				for(k=0;k<tables.length;k++){
					tables[k].style.display = "none";
					}
					showtable.style.display="block";
			backgroundSet();	
		}
	})
	
	
	//-------------------------------------------------
	
	backgroundSet();
	
	
	
	//-------------------------------------------------
	
	function backgroundSet(){
		var tableBody = document.querySelector("#"+temp).children[0];
		var getSelected = document.querySelector("#selected");
		var path = getSelected.innerHTML.replace(/\s/g,'_');
		
		//var imgv =0;
		var i=0;
		var j=0;
		
		
		for(i=0;i<tableBody.childElementCount;i++){
			var tr = tableBody.children[i];
			
			
			for(j=0;j<tr.childElementCount;j++){
				
				imgv = tr.children[j].getAttribute("name")
				
				var img = "url('./Images/"+path+"/"+imgv+".jpg')";
				tr.children[j].style.backgroundImage=img;
				
				
				tr.children[j].children[0].style.display="none";
			}
			
		}
	}
	
	// Get the modal
	var modal = document.getElementById("myModal");
	
	// Get the button that opens the modal
	var btn = document.getElementById("login");
	
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];
	
	// When the user clicks the button, open the modal 
	btn.onclick = function() {
		if(btn.children[1].innerHTML=="Login / Sign up"){
			
			modal.style.display = "block";
		}
		else{
			btn.children[1].innerHTML="Login / Sign up"
			btn.children[0].attributes.src.value="./Icons/login.png";
			isloggedin=false;
			localStorage.clear();
			sessionStorage.setItem("isloggedin", "no");
		}
	}
	if(sessionStorage.getItem("isloggedin")=="yes"){
		
		btn.children[0].attributes.src.value="./Icons/logout.png";
			btn.children[1].innerHTML="Logout";
			isloggedin=true;
			
			
	}else{
		isloggedin=false;
		sessionStorage.setItem("isloggedin", "no");
	}
	
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal.style.display = "none";
	}
	
	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
	
	
	
	var submit1 = document.querySelector("#submit")
	
	
	
	submit1.addEventListener('click',(e)=>{
		
		
		
		var user  = document.querySelector("#user").value
		var pass  = document.querySelector("#pass").value
		
		if(user=="soham123"&&pass=="abc"){
			
			alert('Welcome back, Soham Mittal')
			span.click();
			
			var changeTag= document.querySelector("#login");
			
			changeTag.children[0].attributes.src.value="./Icons/logout.png";
			changeTag.children[1].innerHTML="Logout";
			isloggedin=true;
			sessionStorage.setItem("isloggedin", "yes");
			
		}
		else{
			var user  = document.querySelector("#user")
			var pass  = document.querySelector("#pass")
			var error = document.querySelector(".modal-content p");
			error.style.display="block";
			user.style.borderColor="red";
			pass.style.borderColor="red";
			sessionStorage.setItem("isloggedin", "no");
		}
	})
	
	document.querySelector("#selected").click();
	
});


function buttonClick(e){
}	