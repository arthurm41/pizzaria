// Alternar visualização entre seções
function mostrarSecao(id) {
  document.querySelectorAll('.secao').forEach(secao => {
    secao.classList.remove('ativa');
  });
  document.getElementById(id).classList.add('ativa');
}

// Elementos do DOM
const formAdicionar = document.getElementById('form-adicionar-pizza');
const listaPizzasUl = document.getElementById('lista-pizzas');

// Carregar pizzas do localStorage
let pizzas = JSON.parse(localStorage.getItem('pizzas')) || [];

// Salvar pizzas no localStorage
function salvarPizzas() {
  localStorage.setItem('pizzas', JSON.stringify(pizzas));
}

// Atualizar lista visual no painel admin
function atualizarListaPizzas() {
  listaPizzasUl.innerHTML = '';
  pizzas.forEach(pizza => {
    const li = document.createElement('li');
    li.textContent = `${pizza.nome} - R$ ${pizza.preco.toFixed(2)}`;
    listaPizzasUl.appendChild(li);
  });
}

// Evento de adicionar pizza
formAdicionar.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = document.getElementById('nome-pizza').value.trim();
  const preco = parseFloat(document.getElementById('preco-pizza').value);

  if (nome && !isNaN(preco)) {
    pizzas.push({ nome, preco });
    salvarPizzas();
    atualizarListaPizzas();
    formAdicionar.reset();
  }
});
function mostrarSecao(secaoId) {
  document.querySelectorAll('.secao').forEach(secao => {
    secao.classList.remove('ativa');
  });
  document.getElementById(secaoId).classList.add('ativa');
}

const listaPagamentos = document.getElementById('lista-pagamentos');

function carregarPagamentos() {
  listaPagamentos.innerHTML = '';
  const pagamentos = JSON.parse(localStorage.getItem('pagamentos')) || [];

  if (pagamentos.length === 0) {
    listaPagamentos.innerHTML = '<li>Nenhum pagamento registrado.</li>';
  } else {
    pagamentos.forEach(pag => {
      const li = document.createElement('li');
      li.textContent = `R$ ${pag.valor.toFixed(2)} - ${pag.forma} - ${pag.data}`;
      listaPagamentos.appendChild(li);
    });
  }
}

// Chamar ao carregar a página
carregarPagamentos();

// Inicializar
atualizarListaPizzas();
