document.getElementById('enviar').onclick = (event) => {
    event.preventDefault();

    let login = document.getElementById('login').value;
    let senha = document.getElementById('senha').value;

    if (login.trim() === "" || senha.trim() === "") {
        window.alert("Preencha todos os campos");
        return;
    }

    const dados = localStorage.getItem(login);

    if (!dados) {
        alert("Usuário não encontrado!");
        return;
    }

    const usuario = JSON.parse(dados);

    if (usuario.senha === senha) {
        window.alert("Sucesso");
        window.location.href = "home.html";
        sessionStorage.setItem("welcome", usuario.login);
    } else {
        window.alert("Senha incorreta");
    }
};

document.getElementById('cadastreAgora').onclick = (event) => {
    event.preventDefault();
    window.location.href = "cadastro.html";
};
