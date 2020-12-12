function Sub()
		{
			
			localStorage.setItem('animal',document.getElementById('txtAnimal').value);
			localStorage.setItem('another_animal',document.getElementById('txtAnotherAnimal').value);
			localStorage.setItem('more_animal',document.getElementById('txtMoreAnimal').value);
			localStorage.setItem('adjective',document.getElementById('txtAdjective').value);
			localStorage.setItem('verb',document.getElementById('txtVerb').value);
			localStorage.setItem('num',document.getElementById('txtNumber').value);
			localStorage.setItem('yn',document.querySelector("input[name='yn']:checked").value);
			localStorage.setItem('quote',document.getElementById('txtQuote').value);
			localStorage.setItem('speed',document.querySelector("select[name='ddlspeed']").value);
			localStorage.setItem('msg',document.getElementById('txtMsg').value);
		}

		function fillData()
		{
			console.log(localStorage.length);
			if(localStorage.length>0)
			{
				var x,i;
				x = document.querySelectorAll(".animal");
				for (i = 0; i < x.length; i++) {
				x[i].innerHTML = localStorage.getItem('animal');
				}
				x = document.querySelectorAll(".another_animal");
				for (i = 0; i < x.length; i++) {
				x[i].innerHTML = localStorage.getItem('another_animal');
				}
				x = document.querySelectorAll(".verb");
				for (i= 0; i < x.length; i++) {
				x[i].innerHTML = localStorage.getItem('verb');
				}
				document.getElementById('yesno').innerHTML= localStorage.getItem('yn');
				document.getElementById('speed').innerHTML= localStorage.getItem('speed');
				document.getElementById('adjective').innerHTML= localStorage.getItem('adjective');
				document.getElementById('more_animal').innerHTML= localStorage.getItem('more_animal');
				document.getElementById('hours').innerHTML= localStorage.getItem('num');
				document.getElementById('quote').innerHTML= localStorage.getItem('quote');
				document.getElementById('msg').innerHTML= localStorage.getItem('msg');
				localStorage.clear();
			}
		}
	
	
			