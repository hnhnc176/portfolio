(function() {
    emailjs.init({
        publicKey: "TCZrWhwkFLgGSpnQG",
    });
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Show sending status
        const btn = this.querySelector('.contact-form__btn');
        const originalText = btn.value;
        btn.value = 'Sending...';

        // Get form data
        const formData = {
            from_name: document.getElementById('from_name').value,
            from_email: document.getElementById('from_email').value,
            message: document.getElementById('message').value,
        };
        
        emailjs.send('service_5yt5p2f', 'template_el35tda', formData)
            .then(() => {
                alert('Message sent successfully!');
                this.reset();
                btn.value = originalText;
            }, (error) => {
                alert('Failed to send message. Please try again.');
                console.log('FAILED...', error);
                btn.value = originalText;
            });
    });
}