function adicionarContato() {
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;

    if (!nome || !telefone || !email) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const listaContatos = document.getElementById('listaContatos');
    const contatoItem = document.createElement('li');
    contatoItem.textContent = `Nome: ${nome}, Telefone: ${telefone}, Email: ${email}`;
    listaContatos.appendChild(contatoItem);

    document.getElementById('contactForm').reset();
}
