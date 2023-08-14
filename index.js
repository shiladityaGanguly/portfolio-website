var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


function sendEmail(){
    Email.send({
        SecureToken : "79f9fc6b-df44-4aac-8d87-3d2843945499",
        To : "shiladityaganguly66@gmail.com",
        From : "shiladityaganguly66@gmail.com",
        Subject : "from "+document.getElementById("email").value,
        Body : document.getElementById("message").value,
    }).then(
      message => alert(message)
    );
}




