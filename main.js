//https://teachablemachine.withgoogle.com/models/mR0DMNJVM/

function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/mR0DMNJVM/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}