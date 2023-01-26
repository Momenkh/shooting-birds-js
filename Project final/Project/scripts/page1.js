window.addEventListener("load", function(){
    //select button go
    let startbutton=this.document.getElementsByClassName("gobttn")[0];
    let Entername=this.document.querySelector("input[name=player]");
    let nameError=this.document.getElementsByClassName("Error")[0];
    let secondbutton=this.document.getElementsByClassName("hidden")[1];
    let div1=this.document.getElementsByClassName("main")[0];
    let div2=this.document.getElementsByClassName("main")[1];
    let welcome= this.document.getElementsByClassName("welcome")[0];
    
   
    
    //event
    startbutton.onclick=function(){
        if(Entername.value==''){
            nameError.classList.remove('hidden');
            div1.classList.remove('hidden');
            div2.classList.remove('hidden');    
        }
        else{
            secondbutton.classList.remove('hidden');
            welcome.innerHTML="Welcome"+ " " + Entername.value
            div1.classList.add('hidden');
            div2.classList.add('hidden');
            //location.href='../page2.html';
        }
    }

    secondbutton.onclick=function(){
        sessionStorage.setItem("name", Entername.value);
        location.href='../Page2.html';

    }



    


})