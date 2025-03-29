document.addEventListener("DOMContentLoaded", function () {
  const footer = document.getElementById("footer");

  const mensajes = ["Ángel Hernández", "Daniel Ortiz", "Nelson González", "Orlin Salgado"];
  let index = 0;

  function actualizarFooter() {
      const year = new Date().getFullYear();
      footer.innerHTML = `
          <footer>
              <p><strong>Grupo E</strong></p>
              <p>Derechos Reservados &copy; ${year}</p>
              <p>${mensajes[index]}</p>
          </footer>
      `;
      index = (index + 1) % mensajes.length;
  }

  actualizarFooter();
  setInterval(actualizarFooter, 3000);
});

function limpiar(formularioId) {
  document.querySelectorAll(`#${formularioId} input`).forEach(input => input.value = "");
  document.querySelectorAll(`#${formularioId} p`).forEach(p => p.textContent = "");
}

function mostrarFormulario(tipo) {
  if(tipo=='area'){
    document.getElementById("formularioArea").style.display = "block";
  }
  else if(tipo=='perimetro'){
    document.getElementById("formularioPerimetro").style.display = "block";
  }
}

function ocultarFormulario(tipo) {
  if(tipo=='area'){
    document.getElementById("formularioArea").style.display = "none";
  }
  else if (tipo=='perimetro') {
    document.getElementById("formularioPerimetro").style.display = "none";
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
    document.getElementById("resultadoAreaCirculo").innerHTML = "El área es: " + area.toFixed(2);
  }
  else if(tipo == 'rombo'){
    let altura = document.getElementById("alturaRombo").value;
    let lado = document.getElementById("ladoRombo").value;
    if (altura <= 0 || lado <= 0) {
      document.getElementById("resultadoAreaRombo").innerHTML = "Ingrese valores válidos.";
      return;
    }
    let areaRombo = altura*lado;
    document.getElementById("resultadoAreaRombo").innerHTML = "El área es: " + areaRombo.toFixed(2);
  }
  else if(tipo == 'rectangulo'){
    let altura = document.getElementById("alturaRectangulo").value;
    let ancho = document.getElementById("anchoRectangulo").value;
    if (altura <= 0 || ancho <= 0) {
      document.getElementById("resultadoAreaRectangulo").innerHTML = "Ingrese valores válidos.";
      return;
    }
    let areaRectangulo = altura*ancho;
    document.getElementById("resultadoAreaRectangulo").innerHTML = "El área es: " + areaRectangulo.toFixed(2);
  }
  else if(tipo=='Trectangulo'){
    let cateto1 = document.getElementById("cateto_1").value;
    let cateto2 = document.getElementById("cateto_2").value;
    
    cateto1 = Number(cateto1);
    cateto2 = Number(cateto2);
    
    if (cateto1 <= 0 || cateto2 <= 0) {
        alert("Por favor, ingresa valores numéricos válidos para los catetos.");
    } else {
        let areaTr = (cateto1*cateto2)/2;
        document.getElementById("AreaTRectangulo").innerHTML = "El área es: " + areaTr.toFixed(2);
    }    
  }
  else if(tipo=='triangulo-Isosceles'){
    let alturaTrianguloIsosceles = document.getElementById("alturaTrianguloIsosceles").value;
    let baseTrianguloIsosceles = document.getElementById("baseTrianguloIsosceles").value;
    
    alturaTrianguloIsosceles = Number(alturaTrianguloIsosceles);
    baseTrianguloIsosceles = Number(baseTrianguloIsosceles);
    
    if (alturaTrianguloIsosceles <= 0 || alturaTrianguloIsosceles <= 0) {
        alert("Por favor, ingresa valores numéricos válidos para los catetos.");
    } else {
        let areaTrianguloIsosceles = (alturaTrianguloIsosceles*baseTrianguloIsosceles)/2;
        document.getElementById("resultadoAreaTrianguloIsosceles").innerHTML = "El área es: " + areaTrianguloIsosceles.toFixed(2);
    }    
  }
  else if(tipo=='triangulo-Equilatero'){
    let lado = document.getElementById("ladoAreaTrianguloEquilatero").value;
    
    lado = Number(lado);
    
    if (lado <= 0) {
        alert("Por favor, ingresa valores numéricos válidos para los lados.");
    }
    else {
        let areaTrianguloEquilatero = (Math.sqrt(3)/4)*Math.pow(lado, 2);
        document.getElementById("resultadoAreaTrianguloEquilatero").innerHTML = "El área es: " + areaTrianguloEquilatero.toFixed(2);
    }  
  }
  else if(tipo=='triangulo-Escaleno'){
    let alturaTrianguloEscaleno = document.getElementById("alturaTrianguloEscaleno").value;
    let baseTrianguloEscaleno = document.getElementById("baseTrianguloEscaleno").value;
    
    alturaTrianguloEscaleno = Number(alturaTrianguloEscaleno);
    baseTrianguloEscaleno = Number(baseTrianguloEscaleno);

    if (alturaTrianguloEscaleno <= 0  || baseTrianguloEscaleno <= 0) {
        alert("Por favor, ingresa valores numéricos válidos para los catetos.");
    } else {
        let areaTrianguloEscaleno = (alturaTrianguloEscaleno*baseTrianguloEscaleno)/2;
        document.getElementById("resultadoAreaTrianguloEscaleno").innerHTML = "El área es: " + areaTrianguloEscaleno.toFixed(2);
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
    document.getElementById("resultadoPerimetroCirculo").innerHTML = "El perímetro es: " + perimetro.toFixed(2);
  }
  else if(tipo == 'rectangulo'){
    let altura = document.getElementById("alturaRectangulo1").value;
    let ancho = document.getElementById("anchoRectangulo1").value;
    altura = Number(altura);
    ancho = Number(ancho);
    if (altura <= 0 || ancho <= 0) {
      document.getElementById("resultadoPerimetroRectangulo").innerHTML = "Ingrese valores válidos.";
      return;
    }
    let perimetroRectangulo = 2*(altura+ancho);
    document.getElementById("resultadoPerimetroRectangulo").innerHTML = "El perímetro es: " + perimetroRectangulo.toFixed(2);
  }
  else if (tipo == 'rombo'){
    let lado = document.getElementById("ladoRombo1").value;
    if (lado <= 0) {
      document.getElementById("resultadoPerimetroRombo").innerHTML = "Ingrese un valor válido.";
      return;
    }
    let perimetro = 4*lado;
    document.getElementById("resultadoPerimetroRombo").innerHTML = "El perímetro es: " + perimetro.toFixed(2);
  }
  else if(tipo=='Trectangulo'){
    let cateto1 = document.getElementById("cateto1").value;
    let cateto2 = document.getElementById("cateto2").value;
    
    cateto1 = Number(cateto1);
    cateto2 = Number(cateto2);
    
    if (cateto1 <= 0 || cateto2 <=0 ) {
        alert("Por favor, ingresa valores numéricos válidos para los catetos.");
    } else {
        let c = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));
        let perimetroTr = cateto1 + cateto2 + c;
        document.getElementById("PerimetroTRectangulo").innerHTML = "El perímetro es: " + perimetroTr.toFixed(2);
    }    
  }
  else if(tipo=='triangulo-Isosceles'){
    let ladoATrianguloIsosceles = document.getElementById("ladoATrianguloIsosceles").value;
    let ladoBTrianguloIsosceles = document.getElementById("ladoBTrianguloIsosceles").value;
    
    ladoATrianguloIsosceles = Number(ladoATrianguloIsosceles);
    ladoBTrianguloIsosceles = Number(ladoBTrianguloIsosceles);
    
    if (ladoATrianguloIsosceles <= 0 || ladoBTrianguloIsosceles <= 0) {
        alert("Por favor, ingresa valores numéricos válidos para los lados.");
    } else {
        let perimetroTrianguloIsosceles = 2*(ladoATrianguloIsosceles) + (ladoBTrianguloIsosceles);
        document.getElementById("resultadoPerimetroTrianguloIsosceles").innerHTML = "El perímetro es: " + perimetroTrianguloIsosceles.toFixed(2);
    }    
  }
  else if(tipo=='triangulo-Equilatero'){
    let lado = document.getElementById("ladoPerimetroTrianguloEquilatero").value;
    
    lado = Number(lado);
    
    if (lado <= 0) {
        alert("Por favor, ingresa valores numéricos válidos para los lados.");
    }
    else {
        let perimetroTrianguloEquilatero = 3*lado;
        document.getElementById("resultadoPerimetroTrianguloEquilatero").innerHTML = "El perímetro es: " + perimetroTrianguloEquilatero.toFixed(2);
    }  
  }
  else if(tipo=='triangulo-Escaleno'){
    let ladoA = document.getElementById("ladoATrianguloEscaleno").value;
    let ladoB = document.getElementById("ladoBTrianguloEscaleno").value;
    let ladoC = document.getElementById("ladoCTrianguloEscaleno").value;
    
    ladoA = Number(ladoA);
    ladoB = Number(ladoB);
    ladoC = Number(ladoC);
    
    if (ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
        alert("Por favor, ingresa valores numéricos válidos para los lados.");
    }
    else {
        let perimetroTrianguloEscaleno = ladoA + ladoB + ladoC;
        document.getElementById("resultadoPerimetroTrianguloEscaleno").innerHTML = "El perímetro es: " + perimetroTrianguloEscaleno.toFixed(2);
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
