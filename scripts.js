function big(d) {   
    d.style.height = "200px";
    d.style.width = "200px";
    d.nextElementSibling.style.fontSize = "175%"
    d.nextElementSibling.style.fontWeight = "bold"
  }
  
  function normal(d) {
    d.style.height = "54px";
    d.style.width = "54px";
    d.nextElementSibling.style.fontSize = "125%"
    d.nextElementSibling.style.fontWeight = "normal"
  }
  function checkPswd() {
    var confirmPassword = "Togatime5";
    var password = document.getElementById("pswd").value;
    if (password == confirmPassword) {
         window.location="mainpage.html";
    }
    else{
        alert("Passwords do not match.");
    }
}