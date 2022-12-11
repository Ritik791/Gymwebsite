function validate(){
    var username=document.getElementById("name").value;
    var password=document.getElementById("password").value;
    var email=document.getElementById("email").value;
    if(username==null || username=="") 
    {
        alert("Username can't be blank");
        return false;
    }
    else if(password.length<6){
        alert("Password must be atleast 6 digits");
        return false;
    }
else if(email==null || email==""){
    alert("Email can't be blank");
}
    var form = document.getElementById("formpage");
    alert("Registration Successful");
    form.style.display = "none";
}
var button = document.getElementById("login");
button.addEventListener("click",()=>{
validate();
})
