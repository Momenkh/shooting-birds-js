window.addEventListener("load",function(){

    let div_container = this.document.querySelector(".birds_container");
    let img_arr = [`/art/bird1.gif`,`/art/bird2.gif`,`/art/bird3.gif`,`/art/bird4.gif`];
    let score = this.document.querySelector(".score-s");
    let pt_score = 0 ;
    let timer = this.document.querySelector(".time-s");
    let timer_sec = 60;
    let count = this.document.querySelector(".killed-s");
    let Bird_counter = 0;
    let high_score = this.localStorage.getItem("highsc");
    this.document.querySelector(".name").innerHTML += sessionStorage.getItem("name");
    this.document.querySelector(".highscore").innerHTML += high_score;


    function updateTimer(){
        timer_sec --;
        
        if (timer_sec == -1){
            clearInterval(start);

            if(pt_score > 50){
                let WorL = document.createElement("div");
                WorL.innerHTML = "You Win !";
                WorL.classList.add("main");
                WorL.style.color = 'green';
                div_container.appendChild(WorL);
                
                
            }
            else{
                let WorL = document.createElement("div");
                WorL.innerHTML = "You Lose !";
                WorL.classList.add("main");
                WorL.style.color = 'red';
                div_container.appendChild(WorL);

            }
            if(high_score < pt_score){  window.localStorage.setItem("highsc",pt_score);}
        }
        else{timer.innerHTML = "Timer: " + timer_sec;}
    }


    function GenerateBird(){
        updateTimer();
        randomSpawnBomb();
        let Bird = document.createElement("img");
        let rInd = Math.floor(Math.random()*(img_arr.length));
        Bird.src = img_arr[rInd];
        Bird.classList.add("imgs");
        Bird.setAttribute("draggable",false);

        let top = 100 + Math.floor(Math.random()*(innerHeight-Bird.height-200));
        Bird.style.left = 0 + "px";
        Bird.style.top = top + "px";
        div_container.appendChild(Bird);
        Bird.onclick = function (){

            switch(rInd){
                case 0: pt_score+=5;
                        break;
                case 1: pt_score+=3;
                        break;
                case 2: pt_score-=4;
                        break;
                case 3: pt_score+=1;
                        break;
            }
            score.innerHTML="Score: "+pt_score;
            Bird_counter+=1;
            count.innerHTML="Birds Killed: "+Bird_counter;
            Bird.classList.add('hidden');
   
        }
        moveBird(Bird,rInd)

    }

    function moveBird(Moving_Bird,rInd){

        let Moving_pos = 0;
        let repeat = 0;

        switch(rInd){
            case 0: repeat=17;
                    break;
            case 1: repeat=35;
                    break;
            case 2: repeat=24;
                    break;
            case 3: repeat=40;
                    break;
        }

        const movingInterval = setInterval(function(){
            Moving_pos+=10;
                if(Moving_pos<parseInt(innerWidth)-150){ Moving_Bird.style.left = Moving_pos + "px"}
                else{   
                        div_container.removeChild(Moving_Bird); 
                        clearInterval(movingInterval);
                    }
                } ,repeat);

    }

    function generateBomb(){
        let Bomb = document.createElement("img");
        Bomb.src = `/art/bomb.gif`;
        Bomb.classList.add("bomb");
        Bomb.setAttribute("draggable",false);

        let Pos = Math.floor(Math.random()*(innerWidth-Bomb.width-150));
        Bomb.style.left = Pos + "px";
        Bomb.style.top = 0 + "px";
        div_container.appendChild(Bomb);
        Pos = 0;

        Bomb.onclick = function(){
                    let AllBirds = document.getElementsByClassName("imgs");
                    let leftCo = Bomb.offsetLeft - 250;
                    let rightCo = leftCo + Bomb.width + 500;
                    let TopCo = parseInt(Bomb.style.top) - 250;
                    let BotCo = TopCo + Bomb.height + 350;

                    

                
                    for(let i = 0; i<AllBirds.length; i++){

                        let LEFT = AllBirds[i].offsetLeft + (0.5*AllBirds[i].width);
                        let TOP = parseInt(AllBirds[i].style.top) + (0.5*AllBirds[i].height);
            
                        if(LEFT > leftCo && LEFT < rightCo && TOP > TopCo && TOP < BotCo ){
                            AllBirds[i].onclick();
                            console.log("left bomb " + leftCo,"right bomb " +rightCo,"top bomb " +TopCo,"bot bomb " +BotCo)
                            console.log(LEFT,TOP)
                        }
            
                    }
                    

                    function hideBomb(){
                        Bomb.classList.add('hidden');
                        clearInterval();
                    }

                    clearInterval(moveDown);
                    Bomb.style.left = parseInt(Bomb.style.left) - 140 + 'px';
                    Bomb.style.top = parseInt(Bomb.style.top) - 140 + 'px';
                    Bomb.src = `/art/bombexplosion.gif`;
                    Bomb.style.maxHeight = '400px';
                    Bomb.style.maxWidth = '400px';
                    setInterval(hideBomb,500)


                
            
                }
        const moveDown = setInterval(function(){
            Pos+=10;
                if(Pos<parseInt(innerHeight)-150){ Bomb.style.top = Pos + "px"}
                else{   
                        div_container.removeChild(Bomb); 
                        clearInterval(moveDown);
                    }
                } ,25);
        
    }
    
    function randomSpawnBomb(){
        let rrrandom = Math.floor(Math.random()*5);
        if(rrrandom == 1){generateBomb();}
    }
        
       const start = setInterval(GenerateBird,750);
});