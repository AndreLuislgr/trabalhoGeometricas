# Projeto - Transformação de Imagem com OpenCV.js

Este projeto tem como objetivo demonstrar a aplicação de transformações geométricas em imagens usando OpenCV.js. As principais transformações abordadas são a translação e a rotação.

## Tecnologias Utilizadas

- HTML
- JavaScript (OpenCV.js)
- CSS

## Funcionalidades

### Carregar Imagem
- O usuário pode carregar uma imagem clicando no botão "Carregar Imagem".
- A imagem é exibida no canvas usando OpenCV.js.

### Translação
- A função `applyTranslation()` realiza a translação da imagem original.
- A matriz de translação é criada e aplicada à imagem.
- A imagem resultante é exibida no canvas.

### Rotação
- A função `applyRotation()` realiza a rotação da imagem original.
- A matriz de rotação é criada e aplicada à imagem.
- A imagem resultante é exibida no canvas.

### Limpar Imagem
- O botão "Limpar Imagem" restaura a imagem original no canvas.

## Estrutura de Arquivos

- **index.html:** Página principal do projeto.
- **styles.css:** Estilo para a página.
- **script.js:** Código JavaScript contendo as operações de transformação.

## OpenCV.js
- A biblioteca OpenCV.js é carregada assincronamente no início da página.
- A inicialização é tratada pela função `initializeOpenCV()`.
- As operações de transformação são realizadas usando as funcionalidades da OpenCV.js.

