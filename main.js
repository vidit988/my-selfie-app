var speechrecognization=window.webkitSpeechRecognition
var recognition=new speechrecognization()
function start(){
    recognition.start()

}
recognition.onresult=function(event){
     var speech=(event.results[0][0].transcript)
    document.getElementById('textbox').innerHTML=speech
    console.log(speech);
    if (speech=='Take my selfie.'){
        texttospeech()
console.log('hi')
    }
    

}
function texttospeech(){
    var synth=window.speechSynthesis
    var textdata='taking your selfie in 5 seconds'
    var utterthis=new SpeechSynthesisUtterance(textdata)
    synth.speak(utterthis)
    Webcam.attach(document.getElementById('camera')) 
    setTimeout(function(){
takephoto()
save()
    },5000)
}
function takephoto(){
    Webcam.snap(function(data_uri){
document.getElementById('selfie').innerHTML='<img src='+data_uri+' id="selfie2">'

    })
}
Webcam.set({
    width:360,height:250,image_format:'jpeg',jpeg_quality:90
})
function save(){
    document.getElementById('image').href=document.getElementById('selfie2').src
    document.getElementById('image').click()
}