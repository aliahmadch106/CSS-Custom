const NavOpenIcon = document.getElementById('openNav');
const NavCloseIcon = document.getElementById('closeNav');
const NavIcons = document.getElementById('menuIcons');
const NavBar = document.querySelector('Nav');
const Main = document.querySelector('main');



  
NavOpenIcon.addEventListener('click', (event) => {
    NavIcons.style.animation = 'rotation 0.5s linear';
    
      NavOpenIcon.style.display = 'none';
      NavCloseIcon.style.display = 'flex';
      NavCloseIcon.style.fill = 'red';
  });
  
NavCloseIcon.addEventListener('click', (event) => {

    NavIcons.style.animation = 'rotationNag 0.5s linear';

            NavOpenIcon.style.display='flex';
            NavCloseIcon.style.display='none';
    });



      
      

    function loadPage(pageName) {
        const iframe = `<iframe src="${pageName}" frameborder="0" width="100%" height="100%"></iframe>`;
        document.getElementById("main").innerHTML = iframe;
    }
    

    // setTimeout(() => {
    // }, 500); 








window.addEventListener("load", function() {
            checkScreenOrientation();
            });
window.addEventListener("orientationchange", function() {
            checkScreenOrientation();
            });
    
    function checkScreenOrientation() {
        if (window.matchMedia("(orientation: portrait)").matches) {
                console.log("You are in portrait mode");

                NavOpenIcon.addEventListener('click', (event) => {
                    NavIcons.style.animation = 'rotation 0.5s linear';
                    
                    // setTimeout(() => {
                      NavOpenIcon.style.display = 'none';
                      NavCloseIcon.style.display = 'flex';
                      NavCloseIcon.style.fill = 'red';
                      NavBar.style.top = "0";
                  });
                  
                  
                NavCloseIcon.addEventListener('click', (event) => {
                
                    NavIcons.style.animation = 'rotationNag 0.5s linear';
                
                            NavOpenIcon.style.display='flex';
                            NavCloseIcon.style.display='none';
                            NavBar.style.top="-70vh";
                
                    });
    









} else {
        console.log("You are in landscape mode");

        NavOpenIcon.addEventListener('click', (event) => {
            NavIcons.style.animation = 'rotation 0.5s linear';
            
            // setTimeout(() => {
              NavOpenIcon.style.display = 'none';
              NavCloseIcon.style.display = 'flex';
              NavCloseIcon.style.fill = 'red';
              Main.style.transform= 'perspective(1000px) rotateY(-10deg) translateX(-5vw)  scale(0.8, 0.9)';
          });


          Main.addEventListener('click', (event) => {
        
            NavIcons.style.animation = 'rotationNag 0.5s linear';
        
                    NavOpenIcon.style.display='flex';
                    NavCloseIcon.style.display='none';
                    Main.style.transform= 'none';

        
            });
          
          
        NavCloseIcon.addEventListener('click', (event) => {
        
            NavIcons.style.animation = 'rotationNag 0.5s linear';
        
                    NavOpenIcon.style.display='flex';
                    NavCloseIcon.style.display='none';
                    Main.style.transform= 'none';
            });
            NavLinks.addEventListener('click', (event) => {
                    
                NavOpenIcon.style.display='flex';
                NavCloseIcon.style.display='none';
                Main.style.transform= 'none';
        });
    
                    
    
            
        }
    }




