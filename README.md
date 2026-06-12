# Monalisa Interativa - p5.js

Uma interpretação interativa da famosa pintura "Monalisa" de Leonardo da Vinci, criada com a biblioteca p5.js. Os olhos da Monalisa acompanham o movimento do seu cursor do mouse!

## 🎨 Características

- **Olhos interativos**: Os olhos da Monalisa seguem o cursor do mouse em tempo real
- **Cores autênticas**: Utiliza as cores originais da obra-prima
- **Design responsivo**: Se adapta a diferentes tamanhos de tela
- **Visual envolvente**: Recria os elementos principais da pintura (cabelo, olhos, nariz, boca enigmática e corpo)

## 📁 Estrutura do Projeto

```
alura-1/
├── index.html    # Arquivo HTML principal
├── style.css     # Estilos CSS
├── sketch.js     # Lógica p5.js da Monalisa
└── README.md     # Este arquivo
```

## 🚀 Como Usar

1. **Clonar ou baixar o repositório**
   ```bash
   git clone https://github.com/julizantute/alura-1.git
   ```

2. **Abrir no navegador**
   - Abra o arquivo `index.html` diretamente no seu navegador
   - Ou use um servidor local (recomendado):
     ```bash
     # Com Python 3
     python -m http.server 8000
     
     # Com Node.js
     npx http-server
     ```

3. **Interagir**
   - Mova o mouse sobre o canvas
   - Os olhos da Monalisa seguirão seu cursor!

## 🛠️ Tecnologias Utilizadas

- **p5.js v1.7.0**: Biblioteca JavaScript para criação gráfica
- **HTML5**: Estrutura da página
- **CSS3**: Estilização e responsividade

## 🎯 Código Principal

### Lógica dos Olhos Interativos

A função `drawEye()` calcula o ângulo entre a posição do olho e o cursor do mouse:

```javascript
const angle = atan2(mouseY - y, mouseX - x);
const distance = width * 0.025;
const pupilX = x + cos(angle) * distance;
const pupilY = y + sin(angle) * distance;
```

Isso cria o efeito de que a íris/pupila segue suavemente o movimento do mouse.

## 🎨 Paleta de Cores

- **Pele**: `#D4AF8C` (Tom quente terroso)
- **Cabelo**: `#3D2817` (Marrom escuro)
- **Fundo**: `#8B7355` (Terra de Siena)
- **Roupa**: `#2C2414` (Marrom muito escuro)
- **Sombra**: `#A0826D` (Marrom médio)
- **Luz**: `#E8D4C4` (Bege claro)

## 📱 Responsividade

O projeto é totalmente responsivo e se adapta a:
- Computadores desktop
- Tablets
- Smartphones

## 🔧 Customizações Possíveis

Você pode modificar:
- As cores no objeto `CORES` em `sketch.js`
- O tamanho dos elementos (multiplique por width/height)
- A velocidade de seguimento dos olhos (ajuste o valor de `distance`)
- Adicionar mais detalhes ao rosto

## 📖 Referências

- [p5.js Documentation](https://p5js.org/)
- [Monalisa - Wikipedia](https://pt.wikipedia.org/wiki/Mona_Lisa)
- [Leonardo da Vinci](https://pt.wikipedia.org/wiki/Leonardo_da_Vinci)

## 📄 Licença

Este projeto é fornecido como é, para fins educacionais.

---

**Criado com ❤️ usando p5.js**