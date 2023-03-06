window.onload = function () {

    var clickedButton = document.getElementsByTagName("button")[0]; 

    var alltext = document.getElementsByTagName('textarea');

    clickedButton.onclick = function () {
        alert("Bigger Decoration!")
        for (let i = 0; i < alltext.length; i++) {
            alltext[i].style.fontSize = "24pt";
        }
    }

    var ischecked = document.getElementById('bling');

    ischecked.onchange = function () {
        alert("bling is clicked");
        for (let i = 0; i < alltext.length; i++) {
            alltext[i].style.fontWeight = 'bold';
        }
    }
    const cb = this.document.querySelector('#bling');

    if (cb.checked == false) {
        for (let i = 0; i < alltext.length; i++) {
            alltext[i].style.fontWeight = 'normal';
            alltext[i].style.color = 'green';
            alltext[i].style.textDecoration = 'underline';
        }
    }

    document.getElementById("biggerdec").addEventListener("click", function () {
        
        setInterval(increasefontlater, 500);
    });
    function increasefontlater() {
        "use strict";
        const element = document.getElementById('textarea');
        let style = window.getComputedStyle(element);
        let increasedSize = parseInt(style.fontSize) + 2;
        element.style.fontSize = increasedSize + "px";
    }

    
    document.getElementById("convert").addEventListener("click",  function(){
        const textEl = document.getElementById("mytextarea");
        let textStr = textEl.value;
        let strArr = textStr.split(" ");
        textStr = "";
        for(let i=0;i<strArr.length;i++){
            textStr += convertStr(strArr[i]);
        }
        textEl.value = textStr;      
    });

   
    document.getElementById("btnReplace").addEventListener("click",  function(){
        const textEl = document.getElementById("mytextarea");
        let textStr = textEl.value;   
        let strArr = textStr.split(" ");
        textStr = "";
        for(let i=0;i<strArr.length;i++){
            console.log(strArr[i].length);
            console.log(strArr[i]);
            if(strArr[i].length >= 5){
                textStr += "Malkovich ";
            }else{
                textStr += strArr[i] + " ";
            }
        }
        textEl.value = textStr;       
    });
}