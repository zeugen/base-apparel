let validateForm = ()=>{
    let email = document.forms["comingSoonEmailForm"]["userEmail"].value;

    if(email.length<1){
        document.getElementById("error-email").innerHTML = "Please enter your Email address *";
        return false
    }
   
}