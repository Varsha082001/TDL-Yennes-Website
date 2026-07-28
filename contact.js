emailjs.init({
    publicKey: "t8ux-6ETSNUvbQvQ4",
});
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    emailjs.send(
        "service_29qhw9b",
        "template_48rs9rf",
        {
            from_name: document.getElementById("name").value,
            from_email: document.getElementById("email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value
        }
    )
    .then(function () {
        document.getElementById("status").innerHTML =
        "✅ Thank you! Your enquiry has been sent.";
        document.getElementById("contactForm").reset();
    })
    .catch(function (error) {
        console.log(error);
        document.getElementById("status").innerHTML =
        "❌ Failed to send.";
    });
});


console.log("Contact JS Loaded");
(function () {
    emailjs.init({
        publicKey: "MEpvQomj9q0oxkVGx"
    });
    const form = document.getElementById("demoForm");
    console.log("Form Found:", form);
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const params = {
            from_name: document.getElementById("name").value,
            company: document.getElementById("company").value,
            from_email: document.getElementById("email").value,
            mobile: document.getElementById("mobile").value,
            city: document.getElementById("city").value,
            product: document.getElementById("product").value,
            demo_date: document.getElementById("date").value,
            demo_time: document.getElementById("time").value,
            message: document.getElementById("message").value
        };
        console.log(params);
        emailjs.send(
            "service_ifz9maq",
            "template_i65ch3l",
            params
        )
        .then(function(response){
            console.log("SUCCESS", response);
            document.getElementById("status").innerHTML =
            "Demo Request Sent Successfully";
            form.reset();
        })
        .catch(function(error){
            console.log("FULL ERROR");
            console.log(error);
            alert(JSON.stringify(error));
        });
    });
})();





// OUR CLIENT JS
function openTab(evt, tabName) {
    // Hide all tab contents
    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
        tabContents[i].classList.remove("active");
    }

    // Remove active class from all buttons
    var tabButtons = document.getElementsByClassName("tab-btn");
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // Show selected tab
    var selected = document.getElementById(tabName);

    if (selected) {
        selected.style.display = "block";
        selected.classList.add("active");
    }
    // Highlight selected button
    evt.currentTarget.classList.add("active");
}


// SHOW FIRST TAB WHEN PAGE LOADS
window.onload = function () {
    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
        tabContents[i].classList.remove("active");
    }
    // Default tab
    document.getElementById("club").style.display = "block";
    document.getElementById("club").classList.add("active");
};






function openPopup(image){
    document.getElementById("popup").style.display="flex";
    document.getElementById("popupImage").src=image;
}

function closePopup(){
    document.getElementById("popup").style.display="none";
}
 

window.onclick=function(event){
    let popup=document.getElementById("popup");
    if(event.target==popup){
        popup.style.display="none";
    }
}







