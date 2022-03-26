const inputCep = document.querySelector("#cep");
const inputRua = document.querySelector("#rua");
const inputComplemento = document.querySelector("#complemento");
const inputBairro = document.querySelector("#bairro");
const inputUF = document.querySelector("#UF");
const BASE_URL = 'https://brasilapi.com.br/api'

// verificando se cumpriu 8 digitos do cep
inputCep.onkeyup = async (evento) => {
   if (inputCep.value.length < 8) {
       return;
   }
// criando e configurando como será feita a requisição
   const resposta = await fetch(`${BASE_URL}/cep/v1/${inputCep.value}`, {
       method: "GET",
   });
// extraindo o json da resposta
   const conteudoResposta = await resposta.json();

   
   inputBairro.value = conteudoResposta.neighborhood
   inputComplemento.value = conteudoResposta.city;
   inputRua.value = conteudoResposta.street;
   inputUF.value = conteudoResposta.state;

   inputRua.value = conteudoResposta.street;

   console.log(conteudoResposta);
  // alert ("Cep completo: "+ inputCep.value);
}