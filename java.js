document.addEventListener('DOMContentLoaded', function () {
    // Sélectionnez le formulaire
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); 
        const emailInput = document.querySelector('.contact__form-el--email');
        const emailValue = emailInput.value.trim();
        if (!emailValue) {
            alert('Veuillez fournir une adresse e-mail.');
            return;
        }
        alert('Formulaire soumis avec succès!');
    });
});
signupForm.addEventListener("submit",function(e){
    e.preventDefault();
    let {firstName,lastName,Email,yourcomment ,yourquestion} =ConstactForm;
    let credentials = [FirstName,LastName,Email,yourcomment,yourquestion];
    let storedEmail = localStorage.getItem("Email");
    if(storedEmail && (signupEmail == storedEmail)){
        alert("you are already signed up");
    }else{
        credentials.forEach((item,index)=>{
            localStorage.setItem(item.name,item.value);
        })
    }
})