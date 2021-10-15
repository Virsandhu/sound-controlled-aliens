

function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/iXqwlYCDG/model.json', modelready);
    }
    function modelready(){
        classifier.classify(gotResults);
    }
    function gotResults(error,results){
        if (error){
            console.error(error)
        } else{
        console.log(results)
        
        random_number_r= Math.floor(Math.random()*255)+1;
        random_number_g= Math.floor(Math.random()*255)+1;
        random_number_b= Math.floor(Math.random()*255)+1;
        
        document.getElementById("result label").innerHTML='I can hear- '+results[0].label;
        document.getElementById("result confidence").innerHTML='Accuracy- '+(results[0].confidence*100).toFixed(2)+'%';

        document.getElementById("result label").style.color='rgb('+random_number_r+','+random_number_g+','+random_number_b+')';
        document.getElementById("result confidence").style.color='rgb('+random_number_r+','+random_number_g+','+random_number_b+')';


        clap_alien=document.getElementById("alien_clap");
        page_flip_alien=document.getElementById("alien_page_flip");
        bell_alien=document.getElementById("alien_bell");
        bg_noise_alien=document.getElementById("alien_background_noise");


        if (results[0].label == "bell"){
            bell_alien.src='aliens-03.gif';
            page_flip_alien.src='aliens-02.png';
            bg_noise_alien.src='aliens-04.png';
            clap_alien.src='aliens-01.png';

        } else if (results[0].label == "clap"){
            bell_alien.src='aliens-03.png';
            page_flip_alien.src='aliens-02.png';
            bg_noise_alien.src='aliens-04.png';
            clap_alien.src='aliens-01.gif';

        }else if (results[0].label == "flip page"){
            bell_alien.src='aliens-03.png';
            page_flip_alien.src='aliens-02.gif';
            bg_noise_alien.src='aliens-04.png';
            clap_alien.src='aliens-01.png';
        }
        else{
            bell_alien.src='aliens-03.png';
            page_flip_alien.src='aliens-02.png';
            bg_noise_alien.src='aliens-04.gif';
            clap_alien.src='aliens-01.png';
        }


    }
}