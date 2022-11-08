import { clienteService } from "../service/cliente-service.js";

const criaNovaLinha = (nome, email, id) => {
  const linhaNovoCliente = document.createElement("tr");
  const conteudo = `
    <td class="td">${nome}</td>
    <td>${email}</td>
    <td>
      <ul class="tabela__botoes-controle">
        <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
        <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
      </ul>
    </td>
  `;
  linhaNovoCliente.dataset.id = id;
  linhaNovoCliente.innerHTML = conteudo;
  return linhaNovoCliente;
};

const tabela = document.querySelector("[data-tabela]");

const render = async () => {
  try {
    const listaCliente = await clienteService.listaClientes();

    listaCliente.forEach((elemento) => {
      tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email, elemento.id));
    });
  } catch (error) {
    console.log(error);
    window.location.href = "../telas/erro.html";
  }
};

render();
