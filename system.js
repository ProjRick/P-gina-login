var nome = [];
var senha = [];

        function saveData() {
            if (localStorage.myName) {
                nome = JSON.parse(localStorage.getItem('myName'));
            }
            if (localStorage.myPass) {
                senha = JSON.parse(localStorage.getItem('myPass'));
            }

            let newName = document.getElementById('nome').value;
            let newPass = document.getElementById('senha').value;

            nome.push(newName);
            senha.push(newPass);

            document.getElementById('nome').value = "";
            document.getElementById('senha').value = "";

            localStorage.myName = JSON.stringify(nome);
            localStorage.myPass = JSON.stringify(senha);
        }

        function clearOldData() {
            // Remove as senhas antigas
            localStorage.removeItem("myName");
            localStorage.removeItem("myPass");

            // Limpa as variáveis locais
            nome = [];
            senha = [];

            // Atualiza a exibição
            let resultDiv = document.getElementById("result");
            resultDiv.innerHTML = "Senhas antigas foram limpas.";
        }

        function show() {
            let resultDiv = document.getElementById("result");
            resultDiv.innerHTML = "";

            if (localStorage.myName && localStorage.myPass) {
                let nomes = JSON.parse(localStorage.getItem("myName"));
                let senhas = JSON.parse(localStorage.getItem("myPass"));

                for (let i = 0; i < nomes.length; i++) {
                    let itemDiv = document.createElement("div");
                    itemDiv.textContent = "Nome: " + nomes[i] + " - Senha: " + senhas[i];
                    resultDiv.appendChild(itemDiv);
                }
            }
        }

        function login() {
            let loginNome = document.getElementById('loginNome').value;
            let loginSenha = document.getElementById('loginSenha').value;

            if (localStorage.myName && localStorage.myPass) {
                let nomes = JSON.parse(localStorage.getItem("myName"));
                let senhas = JSON.parse(localStorage.getItem("myPass"));

                for (let i = 0; i < nomes.length; i++) {
                    if (nomes[i] === loginNome && senhas[i] === loginSenha) {
                        window.location.href = "index2.html";
                        return;
                    }
                }
            }
            alert("Credenciais incorretas. Tente novamente.");
        }

        function clearAdd(){
            localStorage.removeItem("myName");
            localStorage.removeItem("myPass");
       
            nome = [];
            senha = [];

            let resultDiv = document.getElementById("result");
            resultDiv.innerHTML = "Senhas antigas foram limpas.";

            if (localStorage.myName) {
                nome = JSON.parse(localStorage.getItem('myName'));
            }
            if (localStorage.myPass) {
                senha = JSON.parse(localStorage.getItem('myPass'));
            }

            let newName = document.getElementById('nome').value;
            let newPass = document.getElementById('senha').value;

            nome.push(newName);
            senha.push(newPass);

            document.getElementById('nome').value = "";
            document.getElementById('senha').value = "";

            localStorage.myName = JSON.stringify(nome);
            localStorage.myPass = JSON.stringify(senha);
            
            window.location.href = "index.html";

        }