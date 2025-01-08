function sendEmail() {
    const fromName = document.getElementById("fromName").value;
    const suggestion = document.getElementById("filmSuggestion").value;

    if (!fromName || !suggestion) {
        alert("Lütfen tüm alanları doldurduğunuzdan emin olun!");
        return;
    }

    const templateParams = {
        from_name: fromName,
        message: suggestion,
        to_email: "osmanaltunn18@gmail.com", 
    };

    emailjs.send('service_d0b5gyq', 'template_n24svgm', templateParams)
        .then(function(response) {
            alert('Mesajınız başarıyla gönderildi!');
        }, function(error) {
            alert('Mesaj gönderilemedi. Hata: ' + error.text);
        });
}
