const listaVendas = document.getElementById('lista-vendas');
const totalGeral = document.getElementById('total-geral');

// Recupera vendas do localStorage
let vendas = JSON.parse(localStorage.getItem('vendas')) || [];

// Atualiza a lista de vendas
function mostrarRelatorio() {
  listaVendas.innerHTML = '';
  let total = 0;

  vendas.forEach((venda, index) => {
    const li = document.createElement('li');
    const data = new Date(venda.data).toLocaleString('pt-BR');
    const itens = venda.itens.map(p => `${p.nome} (R$${p.preco.toFixed(2)})`).join(', ');
    const valor = venda.itens.reduce((acc, p) => acc + p.preco, 0);
    total += valor;

    li.textContent = `${data} - ${itens} → Total: R$${valor.toFixed(2)}`;
    listaVendas.appendChild(li);
  });

  totalGeral.textContent = `Total Geral: R$ ${total.toFixed(2)}`;
}

mostrarRelatorio();
