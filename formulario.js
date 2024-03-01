const form = document.getElementById(myForm);
form.addEventListener("submit", function (event){
    eve.preventDefault();
    const name = document.querySelector("#name").value;
    const email  = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;

    console.log(`Name: ${name} Email:${email}, Phone:${phone}`);
    
});