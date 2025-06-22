document.getElementById('enviar').onclick = (event) => {
    event.preventDefault();

    let login = document.getElementById('login').value;
    let senha = document.getElementById('senha').value;

    const users = [
        { login: "admin", senha: "admin" },
        { login: "user", senha: "1234" }
    ];

    if (login.trim() === "" || senha.trim() === "") {
        window.alert("Preencha todos os campos");
        return;
    }

    const usuario = users.find(user => user.login === login && user.senha === senha);

    if (usuario) {
        sessionStorage.setItem("welcome", usuario.login);
        window.alert("Sucesso");
        window.location.href = "home.html";
    } else {
        window.alert("Usuário ou senha incorretos");
    }
};
