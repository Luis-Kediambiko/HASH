var modal=document.getElementById("myModal1"),btn=document.getElementById("openModal1"),span=document.getElementsByClassName("close")[0],submitBtn=document.getElementById("submitReservar");btn.onclick=function(){modal.style.display="block"},span.onclick=function(){modal.style.display="none"},window.onclick=function(a){a.target===modal&&(modal.style.display="none")},submitBtn.onclick=function(){var a=document.getElementById("nameF").value,b=document.getElementById("emailF").value,c=document.getElementById("telefoneF").value;console.log(a),modal.style.display="none"};var modal2=document.getElementById("myModal2"),btn2=document.getElementById("openModal2"),span2=document.getElementsByClassName("close")[0],submitBtn2=document.getElementById("submitTestimonial");btn2.onclick=function(){modal2.style.display="block"},span2.onclick=function(){modal2.style.display="none"},window.onclick=function(a){a.target===modal2&&(modal2.style.display="none")},submitBtn2.onclick=function(){var a=document.getElementById("name").value,b=document.getElementById("email").value,c=document.getElementById("message").value;modal2.style.display="none"};