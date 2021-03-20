document.addEventListener('DOMContentLoaded',function(){
	
	var myObj = JSON.parse(localStorage.getItem('connectInfo'));
	
	var ProductAdded=myObj;
	
	var len=myObj.length;
	
	for(i=0;i<len;i++){
		
		for(j=i+1;j<len;j++){
			
			if(myObj[i].GlassName==myObj[j].GlassName){
				
				
				myObj[i].Qty = (parseInt(myObj[i].Qty, 10) + parseInt(myObj[j].Qty, 10)).toString();
				myObj.splice(j,1);
				j=j-1;
				len = myObj.length;
			}
		}
	}
	
	
	
	
	
	var tableBody = document.querySelector("table").children[0];
	
	
	for(i=0;i<myObj.length;i++){
		
		var tr = document.createElement('tr');
		var td1 = document.createElement('td');
		var td2 = document.createElement('td');
		var td3 = document.createElement('td');
		var td4 = document.createElement('td');
		var td5 = document.createElement('td');
		var td6 = document.createElement('td');
		var img = document.createElement('img');
		
		td1.setAttribute("colspan","5");
		td1.innerHTML=myObj[i].GlassName;
		tr.appendChild(td1);
		
		td2.setAttribute("colspan","5");
		td2.innerHTML=myObj[i].Price;
		tr.appendChild(td2);
		
		td3.setAttribute("colspan","5");
		td3.innerHTML=myObj[i].Qty;
		tr.appendChild(td3);
		
		td4.setAttribute("colspan","3");
		
		var q=parseInt(myObj[i].Qty, 10);
		
		var p = parseFloat((myObj[i].Price).slice(1));
		var total = p*q;
		total = total.toFixed(2);
		td4.innerHTML= "$"+total.toString();
		tr.appendChild(td4);
		
		
		td5.setAttribute("colspan","1");
		td5.setAttribute("class","edit");
		td5.innerHTML="edit";
		tr.appendChild(td5);
		
		
		
		td6.setAttribute("colspan","1");
		td6.setAttribute("class","delete");
		
		
		img.setAttribute("class","delete");
		img.setAttribute("src","./Icons/delete.png");
		
		td6.appendChild(img);
		
		tr.appendChild(td6);
		tableBody.insertBefore(tr, tableBody.children[tableBody.childElementCount-4]);
		
	}
	
	localStorage.setItem('connectInfo',JSON.stringify(myObj));
	
	
	
});
