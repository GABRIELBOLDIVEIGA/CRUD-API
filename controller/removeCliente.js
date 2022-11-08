import { clienteService } from "../service/cliente-service.js";

const tabela = document.querySelector("[data-tabela]");
tabela.addEventListener("click", async (evento) => {
  let ehBotaoDelete = evento.target.className === "botao-simples botao-simples--excluir";
  if (ehBotaoDelete) {
    try {
      const linhaCliente = evento.target.closest("[data-id]");
      let id = linhaCliente.dataset.id;
      await clienteService.removeCliente(id);
      linhaCliente.remove();
    } catch (error) {
      console.log(error)
      window.location.href = '../telas/erro.html'
    }
  }
});
