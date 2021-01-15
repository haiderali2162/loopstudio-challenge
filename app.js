let menuBtn = document.getElementById("menuBtn");

menuBtn.onclick = ()=>{

    if(menuBtn.className === "hamburger-icon"){
        menuBtn.classList.remove("hamburger-icon");
        menuBtn.classList.add("close-icon");
        //displaying nav links list
        document.querySelector("nav ul").style.display = "block";
        //setting up the black color as the background color
        document.querySelector("header").style.backgroundColor = "black";
        //hiding the txtBox
        document.querySelector(".txtBox").style.display = "none";
    }else{
        menuBtn.classList.add("hamburger-icon");
        menuBtn.classList.remove("close-icon");
        document.querySelector("nav ul").style.display = "none";
        //displaying the txtBox
        document.querySelector(".txtBox").style.display = "block";
    }

     //removing the background img
     document.querySelector("header").classList.toggle("bg-img-xl");

}