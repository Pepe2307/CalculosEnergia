button.addEventListener('click', (e) => {
    e.preventDefault()

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username=="pepe" && password==123 ) {
        location.href = "../Index.html";
    }
    else{
        alert("Invalid user name and/or password!");
    }
})
