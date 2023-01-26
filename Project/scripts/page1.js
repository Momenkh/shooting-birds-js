window.addEventListener("load", function(){

    let startbutton=this.document.getElementsByClassName("gobttn")[0];
    let Entername=this.document.querySelector("input[name=player]");
    let levelError=this.document.getElementsByClassName("Error")[0];
    let nameError=this.document.getElementsByClassName("Error")[1];
    let secondbutton=this.document.getElementsByClassName("hidden")[2];
    let div1=this.document.getElementsByClassName("main")[0];
    let div2=this.document.getElementsByClassName("main")[1];
    let welcome= this.document.getElementsByClassName("welcome")[0];
    
   
    
    //event
    startbutton.onclick=function(){
        if(Entername.value==''){
            nameError.classList.remove('hidden');
        }
        else{
            let val = document.querySelector("select").value;
            if(val == "D"){
                levelError.classList.remove('hidden');
            }
            else{
            secondbutton.classList.remove('hidden');
            welcome.innerHTML="Welcome"+ " " + Entername.value
            div1.classList.add('hidden');
            div2.classList.add('hidden');
            }
        }
    }

    secondbutton.onclick=function(){
        sessionStorage.setItem("name", Entername.value);
        location.href='../Page2.html';

    }



    


})