window.onload = function () {
              var imga = document.getElementById("imga");
 
            $(document).ready(function(){
             imga.onmouseover = function () {
				 $("#imga").fadeIn(5000);
                 this.src = "img/2.png";
				 $("#imga").fadeOut(500);
             }
 
             imga.onmouseout = function () 
			 { 
				     $("#imga").fadeIn(1000);
				     this.src = "img/1.png";
					 
         }
		 });
		 }