function download(type) {
    var data = "";
    var filename = "Zapis postaci ";//+document.getElementById(tabId[3]).value;
    for(var element = 0; element < 35; element++){       
        //data += document.getElementById(tabId[element]).value;
        data += document.getElementById(element).value;
        data += ";";
    };
    //console.log("Data"+data);

    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
        url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}
var openFile = function(event) {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function(){
        var text = reader.result.split(';');
        var line = 0;
        for(var element = 0; element < 35; element++){       
            //data += document.getElementById(tabId[element]).value;
            document.getElementById(element).value =  text[line];
            line++;
        };
        document.getElementById("load").remove()
    };
    reader.readAsText(input.files[0]);
};

function random(){
    rolldice();

    //console.log(document.getElementById("d1").value);

}
function showMenu(id){
    document.getElementById(id).style.display = "block";
    document.getElementById(id).style.zIndex = 5;   
    document.getElementById(id).style.animationName = "animateIn";
}

function changeColor(){
    document.getElementById('settings').setAttribute('fill','red');
}

function showdice(){
    r1=Math.floor(Math.random()*6+1);
    r2=Math.floor(Math.random()*6+1);
    document.getElementById("dots1").style.backgroundImage = "url('dot"+r1+".svg')";
    document.getElementById("dots2").style.backgroundImage = "url('dot"+r2+".svg')";
    console.log(r1, r2);
    console.log(document.getElementById("dots1").style.backgroundImage);
}
var ctr = 0;
function rolldice(){

    if(ctr<6){
        showdice();
        ctr++;
        setTimeout('rolldice()',150);
    }else{
        ctr=0;
        showdice();
    }
}
/*
var images=new Array();
for(i=0;i<=6;i++){
    images[i]=new Image(); images[i].src='dice'+i+'.png';
}
function roll(){
	playsound();
	rolldice_two();
}


function rolldice_two(){

    if(ctr<6){
        showdice_two();
        ctr++;
        setTimeout('rolldice_two()',150);
    }else{
        ctr=0;
        showdice_two();
        document.f.r1message.value=r1+r2;
    }
}

function showdice_two(){
    r1=Math.floor(Math.random()*6+1);
    r2=Math.floor(Math.random()*6+1);
    document.images['r1'].src='images/dice'+r1+'.png';
    document.images['r2'].src='images/dice'+r2+'.png';
}

function playsound() {
    var audio = new Audio('shake_dice.mp3');
    audio.loop = false;
    audio.play(); 
}
*/