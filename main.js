
function carregarRegistros() {
    fetch('api.php?endpoint=registro')
        .then(response => response.json())
        .then(registros => {
            let registrosHtml = '';

            for (let i = 0; i < registros.length; i++) {

                const dateString = registros[i].data;
                const splitDate = dateString.split('-');
                const formatDate = splitDate[2] + '/' + splitDate[1] + '/' + splitDate[0];
                
                registrosHtml += '<li>ID: ' + registros[i].id + ' || Nome: ' + registros[i].name + ' || Email: ' + registros[i].email + ' || Senha: ' + registros[i].senha + ' || Data de Modifição: ' + formatDate + '<div><button onclick="excluirRegistro(' + registros[i].id + ')"><i class="bx bx-message-square-x"></i></button></div>' + '</li>';
                
            }

            document.getElementById('registros').innerHTML = registrosHtml;

        })
        .catch(error => {
            console.error('Erro ao carregar os registros:', error);
        });
}


function adicionarRegistro() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name && email && password) {
    fetch('api.php?endpoint=registro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'name=' + encodeURIComponent(name) + '&email=' + encodeURIComponent(email) + '&password=' + encodeURIComponent(password)
    })
        .then(response => {
            if (response.ok) {
                carregarRegistros();
            } else {
                console.error('Erro ao adicionar o registro:', response.status);
            }
        })
        .catch(error => {
            console.error('Error ao adicionar o registro:', error);
        });
    } else {
        console.error('Por favor, preencha todos os campos.');
    }
}

function cadastrarAtivado() {
    document.getElementById('container-update').style.display = 'none';
    document.getElementById('container-add').style.display = 'grid';
}

function editarAtivado() {
    document.getElementById('container-update').style.display = 'grid';
    document.getElementById('container-add').style.display = 'none';
}


function atualizarRegistro() {
    const id = document.getElementById('id').value;
    const novoNome = document.getElementById('newName').value;
    const novoEmail = document.getElementById('newEmail').value;
    const novaSenha = document.getElementById('newPassword').value;

    if (id && novoNome && novoEmail && novaSenha) {
    fetch('api.php?endpoint=registros&id=' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'novoNome=' + encodeURIComponent(novoNome) + '&novoEmail=' + encodeURIComponent(novoEmail) + '&novaSenha=' + encodeURIComponent(novaSenha)
     })
        .then(response => {
            if (response.ok) {
                carregarRegistros();
            } else {
                console.error('Erro ao atualizar o registro:', response.status);
            }
        })
        .catch(error => {
            console.error('Erro ao atualizar o registro:', error);
        });
    } else {
        console.error('Por favor, preencha todos os campos.');
    }
}


function excluirRegistro(id) {
         
    fetch('api.php?endpoint=registros&id=' + id, {
        method: 'DELETE'
    })
        .then(response => {
            if (response.ok) {
                carregarRegistros();
            } else {
                console.error('Erro ao excluir o registro:', response.status);
            }
        })
        .catch(error => {
            console.error('Erro ao excluir o registro:', error);
        });

}


window.onload = function () {
    carregarRegistros();
};
