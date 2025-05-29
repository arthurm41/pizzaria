const listaPizzasDiv = document.getElementById('lista-pizzas');
const pedidoUl = document.getElementById('pedido');
const totalP = document.getElementById('total');
const btnPagamento = document.getElementById('btn-pagamento');
const buscaInput = document.getElementById('busca-pizza');

let pedido = [];

// Atualiza a lista do pedido e o total
function atualizarPedido() {
  pedidoUl.innerHTML = '';

  pedido.forEach((pizza) => {
    const li = document.createElement('li');
    li.textContent = `${pizza.nome} - R$ ${pizza.preco.toFixed(2)}`;
    pedidoUl.appendChild(li);
  });

  const total = pedido.reduce((acc, p) => acc + p.preco, 0);
  totalP.textContent = `Total: R$ ${total.toFixed(2)}`;

  btnPagamento.style.display = pedido.length > 0 ? 'inline-block' : 'none';
}

// Adiciona pizza ao pedido
function adicionarAoPedido(pizza) {
  pedido.push(pizza);
  atualizarPedido();
}

// Evento click para botões de pizza
listaPizzasDiv.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const nome = e.target.dataset.nome;
    const preco = parseFloat(e.target.dataset.preco);
    adicionarAoPedido({ nome, preco });
  }
});

// Evento de busca de pizza
buscaInput.addEventListener('input', () => {
  const termo = buscaInput.value.toLowerCase();
  const botoesPizza = listaPizzasDiv.querySelectorAll('button');

  botoesPizza.forEach(btn => {
    const nome = btn.dataset.nome.toLowerCase();
    btn.style.display = nome.includes(termo) ? 'inline-block' : 'none';
  });
});

// Botão pagamento
btnPagamento.addEventListener('click', () => {
  alert('Indo para a página de pagamento...');
  window.location.href = 'pagamento.html';
});

localStorage.setItem('totalPedido', total.toFixed(2));
