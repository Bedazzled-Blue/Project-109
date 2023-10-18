function startClassification() 
{ 
    
    navigator.mediaDevices.getUserMedia({ audio: true}); 

classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/xqgpeLOEM/model.json',
modelReady);  

function modelReady(){ classifier.classify( gotResults); }
}

function gotResults(error, results){
    if (error) {
        console.error(error);
    } else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I Can Hear - '+
        results[0].label;
       
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+" %";
        
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";

        document.getElementById("result_condifidence").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";


        img = document.getElementById('alien1');
        img = document.getElementById('alien2');
        img = document.getElementById('alien3');
        img = document.getElementById('alien4');

        if(results[0].label == "Cat") {
            img.src = 'https://www.bing.com/images/search?view=detailV2&ccid=kwkc%2f7Yo&id=C4B1B74180BB05B4AD541E5D1C9204B9B338B6D3&thid=OIP.kwkc_7Yosj69YWbWlDQ-oAHaEo&mediaurl=https%3a%2f%2fukmadcat.com%2fwp-content%2fuploads%2f2019%2f04%2fsleepy-cat.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.93091cffb628b23ebd6166d694343ea0%3frik%3d07Y4s7kEkhxdHg%26pid%3dImgRaw%26r%3d0&exph=1600&expw=2560&q=cat+img&simid=608038112624118970&FORM=IRPRST&ck=10F716DECF1E20B7B8C6FF9FEB3EC058&selectedIndex=6&adlt=strict';
            img.src = 'https://th.bing.com/th/id/OIP.fqmo4l7j2UR8-WorpH1MOgHaFj?w=254&h=191&c=7&r=0&o=5&pid=1.7';
            img.src = 'https://th.bing.com/th/id/OIP.zPwbsr1tp4vsr89orBQHHgHaFj?w=271&h=203&c=7&r=0&o=5&pid=1.7';
            img.src = 'https://th.bing.com/th/id/OIP.WnEwcHYyei4qDAP6Vyc5XwHaEK?w=309&h=180&c=7&r=0&o=5&pid=1.7';
        } else if (results[0].label == "Dog") {
            img.src = 'https://th.bing.com/th/id/OIP.mWXccyE8-ldV29asX08SQgHaEo?w=259&h=180&c=7&r=0&o=5&pid=1.7';
            img.src = 'https://www.bing.com/images/search?view=detailV2&ccid=ITEIPYAR&id=25E458CEC3A78EC73959076A50031A4E134CF2B1&thid=OIP.ITEIPYARVZvxKCPCc9-c0wHaFj&mediaurl=https%3a%2f%2fwww.federationcouncil.nsw.gov.au%2ffiles%2fassets%2fpublic%2fimage-library%2fgeneral-pages%2fanimals%2fdog-puppy-on-garden.jpg%3fw%3d1200&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.2131083d8011559bf12823c273df9cd3%3frik%3dsfJME04aA1BqBw%26pid%3dImgRaw%26r%3d0&exph=899&expw=1200&q=dog+img&simid=608030794053264861&FORM=IRPRST&ck=958CCA94FC0FB3CF9979E13F72B9A2CE&selectedIndex=17&adlt=strict';
            img.src = 'https://th.bing.com/th/id/OIP.zPwbsr1tp4vsr89orBQHHgHaFj?w=271&h=203&c=7&r=0&o=5&pid=1.7';
            img.src = 'https://th.bing.com/th/id/OIP.WnEwcHYyei4qDAP6Vyc5XwHaEK?w=309&h=180&c=7&r=0&o=5&pid=1.7';
        } else if (results[0].label == "Bird") {
            img.src = 'https://th.bing.com/th/id/OIP.mWXccyE8-ldV29asX08SQgHaEo?w=259&h=180&c=7&r=0&o=5&pid=1.7';
            img.src = 'https://th.bing.com/th/id/OIP.fqmo4l7j2UR8-WorpH1MOgHaFj?w=254&h=191&c=7&r=0&o=5&pid=1.7';
            img.src = 'https://www.bing.com/images/search?view=detailV2&ccid=6FKs7Ws1&id=043A2B1D8CB47EBBB57719710BE3834A3F703BC5&thid=OIP.6FKs7Ws1jsZaoj-MReUbegHaEK&mediaurl=https%3a%2f%2fwww.hdwallpapers.in%2fdownload%2fbig_sharp_nose_multicolor_birds_on_tree_branch_in_green_background_hd_birds-HD.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.e852aced6b358ec65aa23f8c45e51b7a%3frik%3dxTtwP0qD4wtxGQ%26pid%3dImgRaw%26r%3d0&exph=1080&expw=1920&q=bird+img&simid=608050404866552392&FORM=IRPRST&ck=FBA987CE7FFD8F234F822F5A4EF1CF5E&selectedIndex=10&adlt=strict';
            img.src = 'https://th.bing.com/th/id/OIP.WnEwcHYyei4qDAP6Vyc5XwHaEK?w=309&h=180&c=7&r=0&o=5&pid=1.7';
        } else {
            img.src = 'https://th.bing.com/th/id/OIP.mWXccyE8-ldV29asX08SQgHaEo?w=259&h=180&c=7&r=0&o=5&pid=1.7';
            img.src = 'https://th.bing.com/th/id/OIP.fqmo4l7j2UR8-WorpH1MOgHaFj?w=254&h=191&c=7&r=0&o=5&pid=1.7';
            img.src = 'https://th.bing.com/th/id/OIP.zPwbsr1tp4vsr89orBQHHgHaFj?w=271&h=203&c=7&r=0&o=5&pid=1.7';
            img.src = 'https://www.bing.com/images/search?view=detailV2&ccid=B1r2M9BZ&id=507353767C8999E18837FF3D293ED40370E901F8&thid=OIP.B1r2M9BZzC-xzB3IWbwbjAHaE8&mediaurl=https%3a%2f%2fi.pinimg.com%2foriginals%2f04%2fee%2faf%2f04eeaf47b1a541051f40707000dfef11.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.075af633d059cc2fb1cc1dc859bc1b8c%3frik%3d%252bAHpcAPUPik9%252fw%26pid%3dImgRaw%26r%3d0&exph=1000&expw=1500&q=cute+frog&simid=608020937106005546&FORM=IRPRST&ck=21FD01A78AECA512E8DD7AE9E4538A0F&selectedIndex=60&adlt=strict';
        }


    }
}