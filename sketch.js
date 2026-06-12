// Cores originais da Monalisa
const CORES = {
    pele: '#D4AF8C',
    cabelo: '#3D2817',
    fundo: '#8B7355',
    roupa: '#2C2414',
    sombra: '#A0826D',
    luz: '#E8D4C4'
};

let eyeLeftX, eyeLeftY;
let eyeRightX, eyeRightY;
let mouseDistance = 0;

function setup() {
    const container = document.getElementById('sketch-container');
    const containerWidth = container.offsetWidth;
    const canvasWidth = min(700, containerWidth - 20);
    const canvasHeight = canvasWidth * 1.2;
    
    let canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('sketch-container');
    
    // Posições dos olhos (referência do desenho)
    eyeLeftX = width * 0.35;
    eyeLeftY = height * 0.35;
    eyeRightX = width * 0.65;
    eyeRightY = height * 0.35;
}

function draw() {
    background(CORES.fundo);
    
    // Desenhar a Monalisa
    drawMonalisa();
    
    // Atualizar posição dos olhos baseado no mouse
    updateEyes();
}

function drawMonalisa() {
    // Cabeça (forma geral)
    fill(CORES.pele);
    stroke(CORES.sombra);
    strokeWeight(2);
    ellipse(width / 2, height * 0.35, width * 0.35, height * 0.45);
    
    // Cabelo
    fill(CORES.cabelo);
    noStroke();
    // Parte superior do cabelo
    arc(width / 2, height * 0.25, width * 0.38, height * 0.3, PI, 0, CHORD);
    // Cabelo nas laterais
    arc(width / 2 - width * 0.18, height * 0.38, width * 0.15, height * 0.25, 0, PI, CHORD);
    arc(width / 2 + width * 0.18, height * 0.38, width * 0.15, height * 0.25, 0, PI, CHORD);
    
    // Olho esquerdo
    drawEye(eyeLeftX, eyeLeftY, true);
    
    // Olho direito
    drawEye(eyeRightX, eyeRightY, false);
    
    // Nariz
    drawNose();
    
    // Boca (famoso sorriso)
    drawMouth();
    
    // Ombros e corpo
    drawBody();
}

function drawEye(x, y, isLeft) {
    // Branco do olho
    fill(255);
    stroke(CORES.cabelo);
    strokeWeight(1.5);
    ellipse(x, y, width * 0.08, height * 0.1);
    
    // Íris - acompanha o mouse
    const angle = atan2(mouseY - y, mouseX - x);
    const distance = width * 0.025;
    const pupilX = x + cos(angle) * distance;
    const pupilY = y + sin(angle) * distance;
    
    fill(CORES.cabelo);
    noStroke();
    circle(pupilX, pupilY, width * 0.035);
    
    // Brilho no olho
    fill(255);
    noStroke();
    circle(pupilX - width * 0.01, pupilY - height * 0.01, width * 0.012);
    
    // Cílios (opcional)
    stroke(CORES.cabelo);
    strokeWeight(1.5);
    
    if (isLeft) {
        // Cílios superiores esquerdo
        line(x - width * 0.025, y - height * 0.055, x - width * 0.02, y - height * 0.075);
        line(x, y - height * 0.055, x, y - height * 0.08);
        line(x + width * 0.025, y - height * 0.055, x + width * 0.02, y - height * 0.075);
    } else {
        // Cílios superiores direito
        line(x - width * 0.025, y - height * 0.055, x - width * 0.02, y - height * 0.075);
        line(x, y - height * 0.055, x, y - height * 0.08);
        line(x + width * 0.025, y - height * 0.055, x + width * 0.02, y - height * 0.075);
    }
}

function drawNose() {
    stroke(CORES.sombra);
    strokeWeight(1);
    
    // Ponte do nariz
    line(width / 2, height * 0.35, width / 2, height * 0.5);
    
    // Furinhos do nariz
    fill(CORES.sombra);
    noStroke();
    circle(width / 2 - width * 0.02, height * 0.48, width * 0.01);
    circle(width / 2 + width * 0.02, height * 0.48, width * 0.01);
}

function drawMouth() {
    // O famoso sorriso enigmático
    stroke(CORES.sombra);
    strokeWeight(2);
    noFill();
    
    // Curva superior do lábio
    beginShape();
    for (let i = 0; i <= 1; i += 0.1) {
        const x = width / 2 - width * 0.12 + i * width * 0.24;
        const y = height * 0.58 - sin(i * PI) * height * 0.05;
        curveVertex(x, y);
    }
    endShape();
    
    // Linha central dos lábios
    line(width / 2 - width * 0.12, height * 0.58, width / 2 + width * 0.12, height * 0.58);
    
    // Preenchimento dos lábios
    fill(CORES.sombra);
    fillAlpha = 100;
}

function drawBody() {
    fill(CORES.roupa);
    stroke(CORES.cabelo);
    strokeWeight(2);
    
    // Ombros
    rect(width / 2 - width * 0.25, height * 0.58, width * 0.5, height * 0.35, 10, 10, 0, 0);
    
    // Braço esquerdo
    fill(CORES.pele);
    rect(width / 2 - width * 0.28, height * 0.65, width * 0.08, height * 0.25);
    
    // Braço direito
    rect(width / 2 + width * 0.2, height * 0.65, width * 0.08, height * 0.25);
}

function updateEyes() {
    // Apenas atualiza a posição visual baseado na função draw que redesenha os olhos
    // A lógica de seguir o mouse está em drawEye()
}

function windowResized() {
    const container = document.getElementById('sketch-container');
    if (container) {
        const containerWidth = container.offsetWidth;
        const canvasWidth = min(700, containerWidth - 20);
        const canvasHeight = canvasWidth * 1.2;
        resizeCanvas(canvasWidth, canvasHeight);
    }
}

// Função auxiliar para desenhar com transparência
function fillAlpha(color, alpha) {
    fill(color);
    fill(red(color), green(color), blue(color), alpha);
}