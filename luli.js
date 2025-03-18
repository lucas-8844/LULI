let index = 0;
const carousel = document.getElementById("carousel");
const images = document.querySelectorAll(".carousel img");
const totalImages = images.length;

function changeImage() {
    index++;

    if (index >= totalImages) {
        index = 0; // Retorna à primeira imagem
    }

    carousel.style.transform = `translateX(${-index * 300}px)`;
}

// Troca de imagem a cada 3 segundos
setInterval(changeImage, 2000);


const dataInicio = new Date("2023-10-22T00:00:00");

function atualizarContador() {
    const agora = new Date();
    
    let anos = agora.getFullYear() - dataInicio.getFullYear();
    let meses = agora.getMonth() - dataInicio.getMonth();
    let dias = agora.getDate() - dataInicio.getDate();
    let horas = agora.getHours() - dataInicio.getHours();
    let minutos = agora.getMinutes() - dataInicio.getMinutes();
    let segundos = agora.getSeconds() - dataInicio.getSeconds();

    // Ajustar valores negativos
    if (segundos < 0) {
        segundos += 60;
        minutos--;
    }
    if (minutos < 0) {
        minutos += 60;
        horas--;
    }
    if (horas < 0) {
        horas += 24;
        dias--;
    }
    if (dias < 0) {
        let ultimoMes = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
        dias += ultimoMes;
        meses--;
    }
    if (meses < 0) {
        meses += 12;
        anos--;
    }

    document.getElementById("tempo").innerHTML = 
        `${anos} anos, ${meses} meses, ${dias} dias, ${horas}h ${minutos}m ${segundos}s`;
}

// Atualiza o contador a cada segundo
setInterval(atualizarContador, 1000);
atualizarContador(); // Chama a função inicialmente para não esperar 1 segundo