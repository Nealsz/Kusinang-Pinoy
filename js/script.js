document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
    setTimeout(function() {
        popup.style.display = "none";
    }, 3000); // Adjust the time (in milliseconds) the message remains visible

    function message() {
        var name = document.getElementById('name');
        var email = document.getElementById('email');
        var message = document.getElementById('message');
        const success = document.getElementById('popup'); // Update the ID here
        const danger = document.getElementById('popup'); // Update the ID here

        if (name.value === '' || email.value === '' || message.value === '') { // Update 'msg' to 'message' here
            danger.style.display = 'block';
        } else {
            setTimeout(() => {
                name.value = '';
                email.value = '';
                message.value = '';
            }, 2000);

            success.style.display = 'block';
        }

        setTimeout(() => {
            danger.style.display = 'none';
            success.style.display = 'none';
        }, 4000);
    }

    var contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        message();
        

    });
});
