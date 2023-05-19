
startImageTransition();
 
        function startImageTransition() {
            var images = document.getElementsByClassName("test");
 
            for (var i = 0; i < images.length; ++i) {
                images[i].style.opacity = 1;
            }
 
            var top = 1;
 
            var cur = images.length - 1;
 
            setInterval(changeImage, 5000);
 
            async function changeImage() {
 
                var nextImage = (1 + cur) % images.length;
 
                images[cur].style.zIndex = top + 1;
                images[nextImage].style.zIndex = top;
 
                await transition();
 
                images[cur].style.zIndex = top;
 
                images[nextImage].style.zIndex = top + 1;
 
                top = top + 1;
 
                images[cur].style.opacity = 1;
               
                cur = nextImage;
 
            }
 
            function transition() {
                return new Promise(function(resolve, reject) {
                    var del = 0.01;
 
                    var id = setInterval(changeOpacity, 10);
 
                    function changeOpacity() {
                        images[cur].style.opacity -= del;
                        if (images[cur].style.opacity <= 0) {
                            clearInterval(id);
                            resolve();
                        }
                    }
 
                })
            }
        }
        
        const images = document.getElementById("register");
        images.style.cssText="position:absolute;left:10%"
         
        const addmember = document.getElementById("addmember");
        addmember.style.cssText="position:absolute; left:45%;"
        
        const confirm = document.getElementById("confirm");
        confirm.style.cssText="position:absolute; right:10%;"

        

        function openCity(evt, cityName) {
            // Declare all variables
            var i, tabcontent, tablinks;
          
            // Get all elements with class="tabcontent" and hide them
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
              tabcontent[i].style.display = "none";
            }
          
            // Get all elements with class="tablinks" and remove the class "active"
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
              tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
          
            // Show the current tab, and add an "active" class to the button that opened the tab
            document.getElementById(cityName).style.display = "block";
            evt.currentTarget.className += " active";
          }

          function Show() {
            
          }
          
        const reg = [];
    function register(){
           const companyName = document.getElementById("companyName").value;
           const passWord = document.getElementById("password").value;
           const CompanyLocation = document.getElementById("CompanyLocation").value;
           const wallet = document.getElementById("wallet").value;
           const amount = document.getElementById("amount").value;
    }
    