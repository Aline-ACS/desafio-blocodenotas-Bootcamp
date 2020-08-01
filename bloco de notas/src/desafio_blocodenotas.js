document.getElementById('btnCadastrar').onclick = cadastrarNotas;
document.getElementById('btnMostrarNotas').onclick =  quantidadeNotas; mostrarNotas;

const lista = [];

function cadastrarNotas() {

    const nota = {
        titulo: document.getElementById('titulo').value,
        conteudo: document.getElementById('conteudo').value,
        data: document.getElementById('data').value,
        hora: document.getElementById('hora').value,
    }

    if (!nota.titulo || !nota.conteudo || !nota.data || !nota.hora) {
       alert('Preencha todos os campos!');
    } else {
        lista.push(nota);
        alert('Nota adicionada com sucesso!');
    }

}

//-----------------------------------------------------------------------

function mostrarNotas() {

    document.getElementById('mostrarNotas').innerHTML = '';
   
    for(let novaNota of lista){
        document.getElementById('mostrarNotas').innerHTML += 
        `<div class="notasAdicionadas">
            <div class=" bg-dark border border-light rounded text-white text-weight-bold text-center card mb-3">
                <div class="card-header">Dia: ${novaNota.data} | Hora: ${novaNota.hora}</div>
                <div class="card-body">
                    <h5 class="card-title">${novaNota.titulo} </h5>
                    <p class="card-text">  ${novaNota.conteudo} </p>
                </div>
            </div>
        </div>`; 
    }  
}

//-------------------------------------------------------------------

function quantidadeNotas() {
   
    let contaNotas = 0;

    do {
        for(i=0; i<lista.length;i++){
            contaNotas = contaNotas + 1;
        }
    } while (mostrarNotas());
   
    document.getElementById('quantidadeNotas').innerHTML = `
    <div class="font-weight-bold text-white p-3">
        <label> Notas: ${contaNotas} </label>
    </div>`;
}
