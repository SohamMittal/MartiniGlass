document.addEventListener('DOMContentLoaded',function(){
	var searchbutton = document.querySelector("#searchbutton");
	var searchtext = document.querySelector("#searchbar");
	var hide = document.querySelectorAll("table:not(#search)");
	var countr=0;
	var countd=0;

	var deleted = false;
	var found = false;
	// searchbutton.addEventListener('click',(e)=>
		// {
			// // var text = searchtext.value;
			
			// // for(i=0;i<hide.length;i++)
			// // {
				// // var tb = hide[i].children[0]; // in the table body
				
				// // for(j=0;j<tb.childElementCount;j++)
				// // {
					
					// // var td = tb.children[j];
					// // for(k=0;k<td.childElementCount;k++)
					// // {
						
						// // var tar = td.children[k].children[0].children[0].innerHTML.toLowerCase();
						// // if(tar.indexOf(text)!=-1)
						// // {//found!!!!!!!!!!
							// // found = true;
							// // hide.forEach((hi)=>{
								// // hi.style.display="none";
							// // })
							// // var ttotadd = document.querySelector("#search").children[0];
							
							
							// // td.children[k] // node to insert
							
							
							
							// // countr = ttotadd.childElementCount;
							// // countd = ttotadd.children[countr-1].childElementCount;
							
							// // if(countd==3){
								
								// // var newTr = document.createElement('tr');
								// // newTr.appendChild(td.children[k]);
								// // ttotadd.appendChild(newTr);
								
							// // }
							// // else{
								
								// // ttotadd.children[countr-1].appendChild(td.children[k]);
							// // }
							// // if(countr==1&&countd==1&&!deleted){
								// // ttotadd.children[0].removeChild(ttotadd.children[0].children[0]);
								// // deleted = true;
							// // }
							// // document.querySelector("#search").style.display="block"
						// // }						
					// // }
				// // }
			// // }
			
			// // if(!found){
				// // alert('There is no item in the store corresponding to the keywords you entered')
			// // }
		// });
		
		
});