 // check if theres local Storage coor option
 let minColor = localStorage.getItem("color_option");

 if(minColor != null){
 document.documentElement.style.setProperty('--main--color', minColor);

 document.querySelectorAll(".color-list li").forEach((element) => {
    	element.classList.remove("active");

    		if (element.dataset.color === minColor) {
    			element.classList.add("active");
    		}
     });
  
 }

 // Random Background Option 

let backgroundOption = true;

// Variable to control Interval

let backgroundInterval ;

let backgroundLocalItem = localStorage.getItem("background-option");

//check if Random Background On Loacl Storage is not Empty
if(backgroundLocalItem !== null){

   if (backgroundLocalItem === 'true') {

         	backgroundOption = true;
         	
   }else{
            	backgroundOption = false;
            	document.querySelector(".random-background .no").
            	classList.add("active");
   }

   // Remove Class Active From All Span 

   document.querySelectorAll(".random-background span").forEach((element) => {
   	  element.classList.remove("active");
   });
   if (backgroundLocalItem === 'true' ) {
   	document.querySelector(".random-background .yes").
         	classList.add("active");

   }else{
            	document.querySelector(".random-background .no").
            	classList.add("active");
   }
}
//Toggel  Class On Icon and Settings Box

document.querySelector(".toggle-settings .fa-gear").onclick = 
  function () {
  	//Toggel Spin  Class On Icon
  	  this.classList.toggle("fa-spin");

  	  //Toggel open  Class On Settings Box
  	   document.querySelector(".settings-box").classList.toggle("open");
  };

//Switch Colors
 const colorsLi = document.querySelectorAll(".color-list li");
 
 // loop in all list colors
 colorsLi.forEach(li => {

 // Click on Every List Items
li.addEventListener("click", (e) =>{

//Set Color in Root

    document.documentElement.style.setProperty('--main--color', e.target.dataset.color);

    // Set Color On Local Storage
    localStorage.setItem("color_option",e.target.dataset.color);

    // Remove Active Class From All Childrens
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
    	element.classList.remove("active");
            });

    // Add Active On Self
    e.target.classList.add("active");
    });

 });



 //Switch Random Background Option
 const randomBackEl = document.querySelectorAll(".random-background span");
 
 // loop in all list colors
 randomBackEl.forEach(span => {

 // Click on Every List span
span.addEventListener("click", (e) =>{

    // Remove Active Class From All Childrens
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
    	element.classList.remove("active");
            });

    // Add Active On Self
    e.target.classList.add("active");
   if(e.target.dataset.background === "yes"){
          backgroundOption=true;
          randomizeImga();
          localStorage.setItem("background-option",true);
   }else{
   	backgroundOption=false;
   	clearInterval(backgroundInterval);
   	 localStorage.setItem("background-option",false);
   }
    });

 });

// select landing page Element 
let landingPage = document.querySelector(".landing-page");

// Get Array of Image 
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];


 // function to Random Imges
 function randomizeImga(){
 	  if (backgroundOption === true) {
 	  	backgroundInterval=  setInterval(() => {

			    //Get Random Number
			   let randomNumber = Math.floor(Math.random() * imgsArray.length);

			    // Change background image Url
			    landingPage.style.backgroundImage = 'url("imgs/'+imgsArray[randomNumber]+'")';
		    },3000);

 	  }
 }

 window.onload=function (){
 	randomizeImga();
 }

 let ourSkills = document.querySelector(".skills");

 window.onscroll = function (){
 	// skills offset Top

 	let skillsOffsetTop = ourSkills.offsetTop;

 	// skills outer Height 
 	let skillsOuterHeight = ourSkills.offsetHeight;

 	// window Height 
 	let windowHeight = this.innerHeight;

 	// Scroll Top

 	let windoScrollTop = this.pageYOffset;

 	if (windoScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight ))  {

             let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

           allSkills.forEach((skill) => {
           	skill.style.width = skill.dataset.progress;
           });
    }
};


// Create Popup With The Image


let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach((img) => {
	img.addEventListener("click", (e) =>{
		// Create Ovrlay Element
		let overlay = document.createElement("div");


        // Add Class To Overlay 

        overlay.className = "popup-overlay";

        //Append Overlay To The Body

        document.body.appendChild(overlay); 

        // Create Popup Box

        let popupBox = document.createElement("div");

        //Add Class To Popup 

        popupBox.className = "popup-box";

        // Add Alt img To Titel To Imge 

         //create Close POpup Box

         let closePopupBox = document.createElement("h2");


          //create text Node for  Close POpup Box

        closeText = document.createTextNode("X");

          // add Text Node To Close POPup box 

       closePopupBox.appendChild(closeText);

       // Add Close Popup Box to  popup Box

        popupBox.appendChild(closePopupBox);
        
        // add class to close popup box 
           closePopupBox.className = "closePopupBox";
         
         closePopupBox.style.textAlign="center"
        

        if (img.alt !== null) {

        	 // Create Heading 
        	 let imageHeading = document.createElement("h3");
        	     imageHeading.style.display="block";
                 imageHeading.style.textAlign="center";
                 imageHeading.style.color=minColor;
              // Create Text For Heading 

              let imgText = document.createTextNode(img.alt);

              // append The Text To Heading 

              imageHeading.appendChild(imgText);

              // Append The Heading To The Popup Box 
                
                popupBox.appendChild(imageHeading);

         }

         

         // Create The Image 
             let popupImage = document.createElement("img");
          // Set Image Source 
         
             popupImage.src = img.src;

           // Add Image To Popup Box 
           popupBox.appendChild(popupImage);

        // Append Popup To The Body 

           document.body.appendChild(popupBox);
           
	 });
});


document.addEventListener("click", function(e) {
	if (e.target.className == "closePopupBox") {
          
          e.target.parentNode.remove();
         // document.querySelector(".popup-overlay").style.display="none";
         document.querySelector(".popup-overlay").remove();

	}
});

// Select All Bullets

const allBullets = document.querySelectorAll(".nav-bullets .bullet");

// Select All Linke

const allLinke = document.querySelectorAll(".links a ");

function scrollToSomeWhere(element){

    element.forEach((ele) => {
	
	 ele.addEventListener("click", (e) =>{

	 	e.preventDefault();

	 	 document.querySelector(`.${e.target.dataset.section}`).scrollIntoView({
	 	 	behavior: 'smooth'
	 	 });
	 });
});

}

scrollToSomeWhere(allBullets);
scrollToSomeWhere(allLinke);

let bulletsSpan =document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets_option");

if (bulletLocalItem !== null) {
   bulletsSpan.forEach((span) =>{
     span.classList.remove("active");
   });

   if (bulletLocalItem === "block") {
   	  bulletsContainer.style.display="block";
   	  document.querySelector(".bullets-option .yes").classList.add("active");

   }else{
   	   bulletsContainer.style.display="none";
   	   document.querySelector(".bullets-option .no").classList.add("active");

   }
}
bulletsSpan.forEach((span) => {
	span.addEventListener("click" , (e) => {
        if(span.dataset.display === "show"){
        	bulletsContainer.style.display="block";
        	localStorage.setItem("bullets_option", "block" );
        }else{
        	bulletsContainer.style.display="none";
        	localStorage.setItem("bullets_option", "none" );
        }

        e.target.parentElement.querySelectorAll(".active").forEach((element) => {
    	element.classList.remove("active");
            });

    // Add Active On Self
    e.target.classList.add("active");
	});
})

// Reset Option 

document.querySelector(".reset-option").onclick=function (){
	localStorage.removeItem("color_option");
	localStorage.removeItem("background-option");
	localStorage.removeItem("bullets_option");

	// Reload Window
	window.location.reload();
}


// 0969928885  Ali Habshe

// Toggle Menu 

let toggleBtn = document.querySelector(".toggle-menu");

let tLinks = document.querySelector(" .header-area .links");

toggleBtn.addEventListener("click", function(e){
   
   // Stop Propagation 
   e.stopPropagation();

	// Toggle Class Open On Links
    tLinks.classList.toggle("open");
});

// Click Any Where OutSite Mneu And Toggle Button 

document.addEventListener("click", (e) =>{
	//
     if (e.target !== toggleBtn && e.target !== tLinks) {

     	//Check If Open Menu

     	if (tLinks.classList.contains("open")) {
     		 tLinks.classList.remove("open");
     	}

    }
});

// Stop Propagation 
tLinks.onclick = function(e){
	e.stopPropagation();
 }
