let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let image;
let imageWidth;
let imageHeight;
let originalX;
let originalY;
let cv;

function loadImage() {
    document.getElementById('inputImage').click();
}

document.getElementById('inputImage').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = new Image();
            img.src = e.target.result;

            img.onload = function() {
                const canvasSize = Math.min(canvas.width, canvas.height);
                const aspectRatio = img.width / img.height;
                if (aspectRatio >= 1) {
                    imageWidth = canvasSize;
                    imageHeight = canvasSize / aspectRatio;
                } else {
                    imageWidth = canvasSize * aspectRatio;
                    imageHeight = canvasSize;
                }

                originalX = (canvas.width - imageWidth) / 2;
                originalY = (canvas.height - imageHeight) / 2;

                image = img;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(image, originalX, originalY, imageWidth, imageHeight);
            };
        };
        reader.readAsDataURL(file);
    }
});

function applyTranslation() {
    if (image) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const translationX = 50;
        const translationY = 50;
        ctx.translate(translationX, translationY);

        ctx.drawImage(image, originalX, originalY, imageWidth, imageHeight);
    }
}

function applyRotation() {
    if (image) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const rotationAngle = 45 * (Math.PI / 180);
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        ctx.translate(centerX, centerY);
        ctx.rotate(rotationAngle);
        ctx.drawImage(image, originalX - centerX, originalY - centerY, imageWidth, imageHeight);
        ctx.translate(-centerX, -centerY);
    }
}


function clearImage() {
    if (image) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        image = null;
    }
}

function onOpenCvReady() {
    cv = window.cv;
}