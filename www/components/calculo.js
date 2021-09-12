// This is a JavaScript file
window.onload = function()
{
  const qnt = document.querySelector('#pessoas');
  const Calc = document.querySelector("#calc");
  const refripp= 200;
  const bolopp = 100;
  const docepp = 3;
  const salgpp = 10;


  //calculo e apresentação dos resultados

  Calc.addEventListener("click", function()
  {
    //atribuindo o resultado:

    //Refri
    var resrefri = parseFloat(qnt.value)*refripp/1000;
    document.querySelector("#refri").innerHTML = String(resrefri);
    document.querySelector("#lt").innerHTML = 'litros';

    //Bolo
    var resbolo = parseFloat(qnt.value)*bolopp/1000;
    document.querySelector("#bolo").innerHTML = String(resbolo);
    document.querySelector("#kg").innerHTML = 'kg';

    //Doces
    var resdoce = parseFloat(qnt.value)*docepp;
    document.querySelector('#doce').innerHTML = String(resdoce);
    document.querySelector('#und').innerHTML = 'unidades';

  //Salgadinhos
    var ressalg = parseFloat(qnt.value)*salgpp;
    document.querySelector("#salgados").innerHTML = String(ressalg);
    document.querySelector("#uns").innerHTML = 'unidades';
  })
};
