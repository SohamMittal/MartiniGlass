var interval;
var timeout;
document.addEventListener('DOMContentLoaded',function(){
	
	var buttons = document.querySelectorAll("button:not(#searchbutton)");
	var messagediv  = document.querySelector("#AddedMessage");
	var i=0;
	for(i=0;i<buttons.length;i++){
		buttons[i].addEventListener("click",buttonClicked);
	}
	
	function buttonClicked(e){
		var name = e.target.parentElement.parentElement.children[0].innerHTML;
		var qty = e.target.parentElement.children[0].value;
		messagediv.children[1].innerHTML=qty+" x "+name+" added to cart!";
		
		
		if(messagediv.className=="visibileMessage"){
			clearTimeout(timeout);
			clearInterval(interval);
		}
		
		messagediv.className="visibileMessage";
		messagediv.children[2].innerHTML="Closing in 5s";
		interval = setInterval(function (e){
			
			var temp = messagediv.children[2].innerHTML.slice(11, 12);
			var time = parseInt(temp, 10);
			time =time-1;
			messagediv.children[2].innerHTML="Closing in "+time.toString()+"s";
			
			
			},1000)
			
		timeout = setTimeout(function(e){
			messagediv.className="invisibleMessage";
			clearInterval(interval);
		},5000)
		
	}
	var closeBtn = document.querySelector("#AddedMessage img");
	
	closeBtn.addEventListener("click",(e)=>{
		messagediv.className="invisibleMessage";
		clearTimeout(timeout);
		clearInterval(interval);
	})
});