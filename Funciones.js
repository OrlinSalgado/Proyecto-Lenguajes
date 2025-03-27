function calTriangulo (base, altura, ladoA, ladoB) {
  const area = (base*altura)/2;
  const perimetro = parseFloat(base) + parseFloat(ladoA) + parseFloat(ladoB);
  return {area, perimetro};
}

function mostrarFormulario(tipo) {
  if(tipo=='areaCirculo'){
    document.getElementById("formularioAreaCirculo").style.display = "block";
  }
  else if(tipo=='areaRectangulo'){
    document.getElementById("formularioAreaRectangulo").style.display = "block";
  }
  
}

function calcularArea(tipo) {
  if (tipo == 'circulo') {
    let radio = document.getElementById("radio").value;
    let area = Math.PI * Math.pow(radio, 2);
    document.getElementById("resultado").innerHTML = "El Área es: " + area.toFixed(2);
  }
  else if(tipo == 'rectangulo'){
    let altura = document.getElementById("alturaRectangulo").value;
    let ancho = document.getElementById("anchoRectangulo").value;
    let areaRectangulo = altura*ancho;
    document.getElementById("resultadoAreaRectangulo").innerHTML = "El Área es: " + areaRectangulo.toFixed(2);
  }
}
function calcularPerimetro(tipo){
  if (tipo == 'circulo'){
    let radio = document.getElementById("radio").value;
    let perimetro = 2*(Math.PI * radio);
    document.getElementById("resultado1").innerHTML = "El Perimetro es: " + perimetro.toFixed(2);
  }
}
