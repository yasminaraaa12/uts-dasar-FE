const form = document.querySelector('#register-form');  
const usernameInput = document.querySelector('#username'); 
const emailInput = document.querySelector('#email');  
  
 // Helper fungsi menampilkan pesan error pada field  
const setError = (inputElement, message) => {  
    const formGroup = inputElement.parentElement;  
    const errorDisplay = formGroup.querySelector('.error-text');  
    formGroup.classList.add('has-error'); 
    formGroup.classList.remove('has-success'); 
    errorDisplay.textContent = message; 
};   
 // Helper fungsi menetapkan status sukses 
const setSuccess = (inputElement) => { 
    const formGroup = inputElement.parentElement; 
    const errorDisplay = formGroup.querySelector('.error-text'); 
    formGroup.classList.add('has-success'); 
    formGroup.classList.remove('has-error'); 
    errorDisplay.textContent = '';
};   
 // Logika validasi data field 
const validateInputs = () => { 
    let isValid = true; 
    const usernameVal = usernameInput.value.trim(); 
    const emailVal = emailInput.value.trim(); 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;   
    // Validasi Username (Min 4 Karakter) 
    if (usernameVal.length < 4) { 
        setError(usernameInput, 'Username minimal terdiri dari 4 karakter!'); 
        isValid = false; 
    } else { 
        setSuccess(usernameInput); 
    } 
  
    // Validasi Format Email 
    if (!emailRegex.test(emailVal)) { 
        setError(emailInput, 'Format alamat email tidak valid (contoh: user@stikom.ac.id)!'); 
        isValid = false; 
    } else { 
        setSuccess(emailInput); 
    }   

    return isValid; 
}; 


const registerForm = document.getElementById('register-form');
registerForm.addEventListener('submit', function(event) {

    event.preventDefault(); 
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    let isValid = true;
    if (username === "" || email === "") {
        alert("Harap isi semua kolom!");
        isValid = false;
    }
    if (isValid) {
        localStorage.setItem("userLoggedIn", username);
        window.location.href = "index.html"; 
    }
});
form.addEventListener('submit', (e) => { 
    e.preventDefault(); 
    if (validateInputs()) { 
        console.log("Payload data valid, siap dikirim ke Backend POST /api/v1/auth/register"); 
    } 
}); 