document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Carregar o arquivo JSON com as credenciais
    fetch('assets/data/users.json')
        .then(response => response.json())
        .then(data => {
            // Verificar se o usuário e a senha correspondem
            const user = data.users.find(user => user.username === username && user.password === password);

            if (user) {
                // Redireciona para a página home.html se o login for bem-sucedido
                window.location.href = 'home.html';
            } else {
                // Exibe mensagem de erro
                document.getElementById('error-message').textContent = 'Usuário ou senha incorretos!';
            }
        })
        .catch(error => console.error('Erro ao carregar os dados de login:', error));
});
