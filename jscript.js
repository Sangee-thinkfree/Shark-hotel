function  content(page){

    let navigation=document.getElementById("main");

    //to remove active from already assigned button
    document.querySelectorAll("nav button").forEach(btn=> btn.classList.remove("active"));
    //to add active to the selected button
    document.getElementById(page+"btn").classList.add("active");

    //this one hides all the divs  (display="none"  -> hide)
    document.querySelectorAll(".page").forEach(div=>div.style.display="none");
    //show the clicked one  (display="block"  -> show)
    document.getElementById(page).style.display="block";
    
    
    
}