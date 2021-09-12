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
    var resrefri = parseFloat(qnt.value)*200/1000;
    document.querySelector("#refri").innerHTML = String(resrefri);
    document.querySelector("#lt").innerHTML = 'litros';
  })
};
