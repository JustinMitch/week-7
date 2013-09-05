

		var xhr = new XMLHttpRequest();
		var content = document.getElementById('content');
		var url = "http://localhost/javascript/demo.php?page=";
		
		var pageNumber = 1;
	
	function call() {
		var response = xhr.responseText;
		content.innerHTML += response;
	}
	
	xhr.onreadystatechange = function() {
		if (xhr.readyState==4 && xhr.status==200) {
			call();
		} 
	};	

	function makeAJAXCall(){

		xhr.open('GET', url+pageNumber, true);
		xhr.send();
		pageNumber++;
		
	}
		window.addEventListener('load', makeAJAXCall);
		document.getElementById('showResults').addEventListener("click", makeAJAXCall);
		
	
	
