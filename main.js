//https://teachablemachine.withgoogle.com/models/zNphWvT2o/

Webcam.set({
    height: 350,
    width: 400,
    image_format : 'png',
    png_quality: 90
})

camera = document.getElementById("camera");

Webcam.attach("#camera");

function captureIMG() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='snap_img' src='" + data_uri + "'>"
    })
}

console.log("ml5 version:", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/zNphWvT2o/model.json", modelLoaded);
function modelLoaded() {
    console.log("model loaded!")
}
function check() {
    img = document.getElementById("snap_img");
    classifier.classify(img, gotResult);
}

function gotResult(error, result) {
    if (error) {
console.error(error);
    }
    else {
        console.log(result);
        document.getElementById("objectSpanTag").innerHTML = result[0].label;
        document.getElementById("AccuracySpanTag").innerHTML = result[0].confidence.toFixed(3);
    }
}
