window.onload = () => {
    const mensagem = sessionStorage.getItem("welcome");

    if (!mensagem) {
        window.location.href = "login.html";
        return;
    }

    document.getElementById("welcome").innerText = `Seja bem-vindo, ${mensagem}`;

    document.getElementById('sair').onclick = () => {
        sessionStorage.clear();
        window.location.href = "index.html";
    };
};
