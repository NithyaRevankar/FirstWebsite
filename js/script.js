function validatelogin(){
    var name = document.getElementById("name").value;
    var pwd = document.getElementById("pwd").value;
    if(name == "äbcd" && pwd=="1234"){
        alert("Login successfull");
        window.location = "aboutUs.html" ;
    }
    else{
        alert("Invalid username or password")
    }
}