// script.js

let image;
let originalImage;
let canvas;
let ctx;

function initializeOpenCV() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    cv.onRuntimeInitialized = () => {
        console.log('OpenCV.js ready');
    };
}

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
                originalImage = cv.imread(img);
                image = originalImage.clone();
                cv.imshow(canvas, image);
            };
        };
        reader.readAsDataURL(file);
    }
});

function applyTranslation() {
    if (image) {
        const translationMatrix = cv.Mat.eye(2, 3, cv.CV_32F);
        translationMatrix.data32F[2] = 50; // Translação X
        translationMatrix.data32F[5] = 50; // Translação Y
        cv.warpAffine(originalImage, image, translationMatrix, image.size(), cv.INTER_LINEAR, cv.BORDER_CONSTANT, new cv.Scalar());
        cv.imshow(canvas, image);
    }
}

function applyRotation() {
    if (image) {
        const rotationMatrix = cv.getRotationMatrix2D(new cv.Point(image.cols / 2, image.rows / 2), 45, 1);
        cv.warpAffine(originalImage, image, rotationMatrix, image.size(), cv.INTER_LINEAR, cv.BORDER_CONSTANT, new cv.Scalar());
        cv.imshow(canvas, image);
    }
}

function clearImage() {
    if (originalImage) {
        image = originalImage.clone();
        cv.imshow(canvas, image);
    }
}
