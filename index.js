const API_URL = 'http://localhost:3000'

function buscarParaEditar(id){
    input_editar_id.value = id;

  fetch(API_URL+'/contatos/'+id) 
    .then( res => res.json())
    .then( dados =>{
           input_editar_nome.value = dados.nome;
           input_editar_numero.value = dados.numero;
           input_editar_cidade.value = dados.cidade;
    });

}

function editar() {
    event.preventDefault(); //impendindo a pagina de dar refresh

    //recuperando os dados do formulario
    let dados = {
        nome: input_editar_nome.value,
        numero:input_editar_numero.value,
        cidade:input_editar_cidade.value,

    };

    fetch(API_URL+'/contatos/'+input_editar_id.value, {
        method: 'PATCH',
        body: JSON.stringify(dados),
        headers: {
            'content-type':'application/json'
        }
})

         .then(res => res.json())
         .then(() => atualizarLista());

         let x = document.querySelector('[data-bs-dismiss="offcanvas"]');

         x.dispatchEvent(new Event('click')); //disparando um evento (click)
}

function inserir() {
    //para a pagina não ser recarregada
    event.preventDefault();

    let dados = {
        nome: input_nome.value,
        numero: parseInt(input_numero.value),
        cidade: input_cidade.value
    };

    if(dados.nome === "" || dados.numero === "" || dados.cidade === "")  {
        alert('Dados invalidos');
        return;
    }

    fetch(API_URL+'/contatos', {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: {
            'Content-Type': 'application/json'
        }
    })
      .then(resposta => resposta.json()) 
      .then(resposta => atualizarLista());

      form_add.reset();
}

async function excluir (id){
    let resposta = prompt ('digite sim para confirmar');

    if (resposta !== 'sim') {
        return;
    }
   await fetch(API_URL+'/contatos/'+id, {
        method: 'DELETE'
});

    atualizarLista();
}

function atualizarLista(){
    lista_contatos.innerHTML ='';

    fetch(API_URL+'/contatos')
    .then(function (resposta){
        return resposta.json();

    })
    .then(function(lista){
        lista.forEach(function (cadaContato){
              lista_contatos.innerHTML += `
              <tr>
                
                <td>${cadaContato.id}</td>
                <td>${cadaContato.nome}</td>
                <td>${cadaContato.numero}</td>
                <td>${cadaContato.cidade}</td>
                <td>

                <button onclick="buscarParaEditar(${cadaContato.id})" data-bs-toggle="offcanvas" data-bs-target="#offcanvasEditar" class="btn btn-outline-warning"><i class="material-icons">edit</i>
                    Editar
                </button>

                <button onclick= "excluir(${cadaContato.id})" class= "btn btn-outline-danger"><i class="material-icons">delete</i>
                    Excluir
                </button>
            </td>
        </tr>

        `;
    });

 })
}

atualizarLista();

