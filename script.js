function SendMessage() {
    var params = {
        from_name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }
    emailjs.send("service_rt4a938","template_wjtofm1", params).then(function (res) {
        alert("Succes" + res.status);
    })
}
