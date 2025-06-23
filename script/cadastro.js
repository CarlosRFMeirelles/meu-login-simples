document.getElementById('btnIrParaLogin').onclick = (event) => {
  event.preventDefault();
  window.location.href = "index.html";
};

document.getElementById('btnCadastro').onclick = (event) => {
  event.preventDefault();

  let login = document.getElementById('loginUsuario').value;
  let senha = document.getElementById('senha').value;
  let confirmaSenha = document.getElementById('confirmarSenha').value;

  if (login.trim() === "" || senha.trim() === "" || confirmaSenha.trim() === "") {
    window.alert("Preencha todos os campos");
    return;
  }

  if (senha !== confirmaSenha) {
    window.alert("As senhas não coincidem");
    return;
  }

  if (localStorage.getItem(login)) {
    window.alert("Esse login já está cadastrado");
    return;
  }

  const novoUsuario = {
    login: login,
    senha: senha
  };

  localStorage.setItem(login, JSON.stringify(novoUsuario));
  window.alert("Cadastro realizado com sucesso!");
  window.location.href = "index.html";
};
