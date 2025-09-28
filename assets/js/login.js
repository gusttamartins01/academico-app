document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const nomeInput = document.getElementById("nome");
            const emailInput = document.getElementById("email");

            const usuario = {
                nome: nomeInput.value.trim(),
                email: emailInput.value.trim()
            };

            localStorage.setItem("usuario", JSON.stringify(usuario));
            window.location.href = "dashboard.html"; 
        });
    }
    
    const usuarioLogado = localStorage.getItem("usuario");
    if (usuarioLogado && window.location.pathname.includes('login.html')) {
        window.location.href = "dashboard.html"; 
    }
});