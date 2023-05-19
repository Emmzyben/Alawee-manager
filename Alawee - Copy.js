
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

        
        const regis = document.getElementById("regis");
        regis.style.cssText="position:absolute;left:11% ;bottom:7%;"
         
        const add = document.getElementById("add");
        add.style.cssText="position:absolute; left:45%;bottom:7%;"
        
        const confam = document.getElementById("confam");
        confam.style.cssText="position:absolute; right:8%;bottom:7%;"