 document.querySelector('.subscribe form').addEventListener('submit', function(event) {
        event.preventDefault(); 
        const email = document.querySelector('input[type="email"]').value;
        console.log(email);
            localStorage.setItem("Subscribed_Email",email);
        alert('Thanks for Subscribing!');
    });
