function mostrarFormulario(tipo) {
  if(tipo=='areaCirculo'){
    document.getElementById("formularioAreaCirculo").style.display = "block";
  }
  else if(tipo=='perimetroCirculo'){
    document.getElementById("formularioPerimetroCirculo").style.display = "block";
  }
  else if(tipo=='areaRectangulo'){
    document.getElementById("formularioAreaRectangulo").style.display = "block";
  }
  else if(tipo=='perimetroRectangulo'){
    document.getElementById("formularioPerimetroRectangulo").style.display = "block";
  }
  else if(tipo=='areaRombo'){
    document.getElementById("formularioAreaRombo").style.display = "block";
  } 
  else if(tipo=='perimetroRombo'){
    document.getElementById("formularioPerimetroRombo").style.display = "block";
  } 
  else if(tipo=='areaTRectangulo'){
    document.getElementById("formularioAreaTRectangulo").style.display = "block";
  }
  else if(tipo=='perimetroTRectangulo'){
    document.getElementById("formularioPerimetroTRectangulo").style.display = "block";
  }
  else if(tipo=='areaTrianguloIsosceles'){
    document.getElementById("formularioAreaTrianguloIsosceles").style.display = "block";
  }
  else if(tipo=='perimetroTrianguloIsosceles'){
    document.getElementById("formularioPerimetroTrianguloIsosceles").style.display = "block";
  }
  else if(tipo=='areaTrianguloEquilatero'){
    document.getElementById("formularioAreaTrianguloEquilatero").style.display = "block";
  }
  else if(tipo=='perimetroTrianguloEquilatero'){
    document.getElementById("formularioPerimetroTrianguloEquilatero").style.display = "block";
  }
  else if(tipo=='areaTrianguloEscaleno'){
    document.getElementById("formularioAreaTrianguloEscaleno").style.display = "block";
  }
  else if(tipo=='perimetroTrianguloEscaleno'){
    document.getElementById("formularioPerimetroTrianguloEscaleno").style.display = "block";
  }
}


function ocultarFormulario(tipo) {
  if(tipo=='areaCirculo'){
    document.getElementById("formularioAreaCirculo").style.display = "none";
  }
  else if (tipo=='perimetroCirculo') {
    document.getElementById("formularioPerimetroCirculo").style.display = "none";
  }
  else if (tipo=='areaTRectangulo') {
    document.getElementById("formularioAreaTRectangulo").style.display = "none";
  }
  else if (tipo=='perimetroTRectangulo') {
    document.getElementById("formularioPerimetroTRectangulo").style.display = "none";
  }
  else if (tipo=='areaRectangulo') {
    document.getElementById("formularioAreaRectangulo").style.display = "none";
  }
  else if (tipo=='perimetroRectangulo') {
    document.getElementById("formularioPerimetroRectangulo").style.display = "none";
  }
  else if (tipo=='areaRombo') {
    document.getElementById("formularioAreaRombo").style.display = "none";
  }
  else if (tipo=='perimetroRombo') {
    document.getElementById("formularioPerimetroRombo").style.display = "none";
  }
  else if (tipo=='areaTrianguloIsosceles') {
    document.getElementById("formularioAreaTrianguloIsosceles").style.display = "none";
  }
  else if (tipo=='perimetroTrianguloIsosceles') {
    document.getElementById("formularioPerimetroTrianguloIsosceles").style.display = "none";
  }
  else if (tipo=='areaTrianguloEquilatero') {
    document.getElementById("formularioAreaTrianguloEquilatero").style.display = "none";
  }
  else if (tipo=='perimetroTrianguloEquilatero') {
    document.getElementById("formularioPerimetroTrianguloEquilatero").style.display = "none";
  }
  else if (tipo=='areaTrianguloEscaleno') {
    document.getElementById("formularioAreaTrianguloEscaleno").style.display = "none";
  }
  else if (tipo=='perimetroTrianguloEscaleno') {
    document.getElementById("formularioPerimetroTrianguloEscaleno").style.display = "none";
  }
}

function calcularArea(tipo) {
  if (tipo == 'circulo') {
    let radio = document.getElementById("radioArea").value;
    if (radio <= 0) {
      document.getElementById("resultadoAreaCirculo").innerHTML = "Ingrese un radio válido.";
      return;
    }
    let area = Math.PI * Math.pow(radio, 2);
    document.getElementById("resultadoAreaCirculo").innerHTML = "El Área es: " + area.toFixed(2);
  }
  else if(tipo == 'rombo'){
    let altura = document.getElementById("alturaRombo").value;
    let lado = document.getElementById("ladoRombo").value;
    let areaRombo = altura*lado;
    document.getElementById("resultado").innerHTML = "El Área es: " + areaRombo.toFixed(2);
  }
  else if(tipo == 'rectangulo'){
    let altura = document.getElementById("alturaRectangulo").value;
    let ancho = document.getElementById("anchoRectangulo").value;
    let areaRectangulo = altura*ancho;
    document.getElementById("resultadoAreaRectangulo").innerHTML = "El Área es: " + areaRectangulo.toFixed(2);
  }
  else if(tipo=='Trectangulo'){
    let cateto1 = document.getElementById("cateto_1").value;
    let cateto2 = document.getElementById("cateto_2").value;
    
    cateto1 = Number(cateto1);
    cateto2 = Number(cateto2);
    
    if (isNaN(cateto1) || isNaN(cateto2)) {
        alert("Por favor, ingresa valores numéricos válidos para los catetos.");
    } else {
        let areaTr = (cateto1*cateto2)/2;
        document.getElementById("AreaTRectangulo").innerHTML = "El Area es: " + areaTr.toFixed(2);
    }    
  }
  else if(tipo=='triangulo-Isosceles'){
    let alturaTrianguloIsosceles = document.getElementById("alturaTrianguloIsosceles").value;
    let baseTrianguloIsosceles = document.getElementById("baseTrianguloIsosceles").value;
    
    alturaTrianguloIsosceles = Number(alturaTrianguloIsosceles);
    baseTrianguloIsosceles = Number(baseTrianguloIsosceles);
    
    if (isNaN(alturaTrianguloIsosceles) || isNaN(alturaTrianguloIsosceles)) {
        alert("Por favor, ingresa valores numéricos válidos para los catetos.");
    } else {
        let areaTrianguloIsosceles = (alturaTrianguloIsosceles*baseTrianguloIsosceles)/2;
        document.getElementById("resultadoAreaTrianguloIsosceles").innerHTML = "El Area es: " + areaTrianguloIsosceles.toFixed(2);
    }    
  }
  else if(tipo=='triangulo-Equilatero'){
    let lado = document.getElementById("ladoAreaTrianguloEquilatero").value;
    
    lado = Number(lado);
    
    if (isNaN(lado)) {
        alert("Por favor, ingresa valores numéricos válidos para los lados.");
    }
    else {
        let areaTrianguloEquilatero = (Math.sqrt(3)/4)*Math.pow(lado, 2);
        document.getElementById("resultadoAreaTrianguloEquilatero").innerHTML = "El Area es: " + areaTrianguloEquilatero.toFixed(2);
    }  
  }
  else if(tipo=='triangulo-Escaleno'){
    let alturaTrianguloEscaleno = document.getElementById("alturaTrianguloEscaleno").value;
    let baseTrianguloEscaleno = document.getElementById("baseTrianguloEscaleno").value;
    
    alturaTrianguloEscaleno = Number(alturaTrianguloEscaleno);
    baseTrianguloEscaleno = Number(baseTrianguloEscaleno);

    if (isNaN(alturaTrianguloEscaleno) || isNaN(baseTrianguloEscaleno)) {
        alert("Por favor, ingresa valores numéricos válidos para los catetos.");
    } else {
        let areaTrianguloEscaleno = (alturaTrianguloEscaleno*baseTrianguloEscaleno)/2;
        document.getElementById("resultadoAreaTrianguloEscaleno").innerHTML = "El Area es: " + areaTrianguloEscaleno.toFixed(2);
    }
  }
}

function calcularPerimetro(tipo){
  if (tipo == 'circulo') {
    let radio = document.getElementById("radioPerimetro").value;
    if (radio <= 0) {
        document.getElementById("resultadoPerimetroCirculo").innerHTML = "Ingrese un radio válido.";
        return;
    }
    let perimetro = 2 * Math.PI * radio;
    document.getElementById("resultadoPerimetroCirculo").innerHTML = "El Perímetro es: " + perimetro.toFixed(2);
  }
  else if(tipo == 'rectangulo'){
    let altura = document.getElementById("alturaRectangulo1").value;
    let ancho = document.getElementById("anchoRectangulo1").value;
    altura = Number(altura);
    ancho = Number(ancho);
    let perimetroRectangulo = 2*(altura+ancho);
    document.getElementById("resultadoPerimetroRectangulo").innerHTML = "El Perimetro es: " + perimetroRectangulo.toFixed(2);
  }
  else if (tipo == 'rombo'){
    let lado = document.getElementById("ladoRombo1").value;
    let perimetro = 4*lado;
    document.getElementById("resultado1").innerHTML = "El Perimetro es: " + perimetro.toFixed(2);
  }
  else if(tipo=='Trectangulo'){
    let cateto1 = document.getElementById("cateto1").value;
    let cateto2 = document.getElementById("cateto2").value;
    
    cateto1 = Number(cateto1);
    cateto2 = Number(cateto2);
    
    if (isNaN(cateto1) || isNaN(cateto2)) {
        alert("Por favor, ingresa valores numéricos válidos para los catetos.");
    } else {
        let c = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));
        let perimetroTr = cateto1 + cateto2 + c;
        document.getElementById("PerimetroTRectangulo").innerHTML = "El Perímetro es: " + perimetroTr.toFixed(2);
    }    
  }
  else if(tipo=='triangulo-Isosceles'){
    let ladoATrianguloIsosceles = document.getElementById("ladoATrianguloIsosceles").value;
    let ladoBTrianguloIsosceles = document.getElementById("ladoBTrianguloIsosceles").value;
    
    ladoATrianguloIsosceles = Number(ladoATrianguloIsosceles);
    ladoBTrianguloIsosceles = Number(ladoBTrianguloIsosceles);
    
    if (isNaN(ladoATrianguloIsosceles) || isNaN(ladoBTrianguloIsosceles)) {
        alert("Por favor, ingresa valores numéricos válidos para los lados.");
    } else {
        let perimetroTrianguloIsosceles = 2*(ladoATrianguloIsosceles) + (ladoBTrianguloIsosceles);
        document.getElementById("resultadoPerimetroTrianguloIsosceles").innerHTML = "El Perimetro es: " + perimetroTrianguloIsosceles.toFixed(2);
    }    
  }
  else if(tipo=='triangulo-Equilatero'){
    let lado = document.getElementById("ladoPerimetroTrianguloEquilatero").value;
    
    lado = Number(lado);
    
    if (isNaN(lado)) {
        alert("Por favor, ingresa valores numéricos válidos para los lados.");
    }
    else {
        let perimetroTrianguloEquilatero = 3*lado;
        document.getElementById("resultadoPerimetroTrianguloEquilatero").innerHTML = "El Perimetro es: " + perimetroTrianguloEquilatero.toFixed(2);
    }  
  }
  else if(tipo=='triangulo-Escaleno'){
    let ladoA = document.getElementById("ladoATrianguloEscaleno").value;
    let ladoB = document.getElementById("ladoBTrianguloEscaleno").value;
    let ladoC = document.getElementById("ladoCTrianguloEscaleno").value;
    
    ladoA = Number(ladoA);
    ladoB = Number(ladoB);
    ladoC = Number(ladoC);
    
    if (isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC)) {
        alert("Por favor, ingresa valores numéricos válidos para los lados.");
    }
    else {
        let perimetroTrianguloEscaleno = ladoA + ladoB + ladoC;
        document.getElementById("resultadoPerimetroTrianguloEscaleno").innerHTML = "El Perimetro es: " + perimetroTrianguloEscaleno.toFixed(2);
    }  
  }
}

function crearBotonesNavegacion() {
  if (!window.location.pathname.includes('Index.html')) {
      const contenedor = document.createElement('div');
      contenedor.className = 'contenedor-flechas';
      
      // Botón "Atrás"
      const flechaAtras = document.createElement('div');
      flechaAtras.className = 'flecha-atras';
      flechaAtras.title = 'Volver atrás';
      flechaAtras.innerHTML = '<i class="fas fa-arrow-left"></i>';
      flechaAtras.onclick = () => history.back();
      
      // Botón "Inicio"
      const flechaInicio = document.createElement('a');
      flechaInicio.className = 'flecha-inicio';
      flechaInicio.href = 'Index.html';
      flechaInicio.title = 'Volver al inicio';
      flechaInicio.innerHTML = '<i class="fas fa-home"></i>';
      
      contenedor.append(flechaAtras, flechaInicio);
      document.body.prepend(contenedor);
  }
}

document.addEventListener('DOMContentLoaded', crearBotonesNavegacion);
