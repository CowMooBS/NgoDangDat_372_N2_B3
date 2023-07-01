var skip = document.getElementById('skip');
var score = document.getElementById('score');
var totalScore = document.getElementById('totalScore');
var countdown = document.getElementById('countdown');
var count = 0;
var scoreCount = 0;
var duration = 0;
var qaSet = document.querySelectorAll('.qa_set');
var qaAnsRow = document.querySelectorAll('.qa_set .qa_ans input');

skip.addEventListener('click',function(){
    step();
    duration = 0;
})
qaAnsRow.forEach(function(qaAnsRowSingle){
    qaAnsRowSingle.addEventListener('click',function(){
        setTimeout(function(){
            step();
            duration = 0;

        },500)
        
        var valid = this.getAttribute("valid")
        if( valid == "valid"){
        scoreCount +=20;
        score.innerHTML = scoreCount;
        totalScore.innerHTML = scoreCount;
        }else {
            scoreCount +=0;
        score.innerHTML = scoreCount;
        totalScore.innerHTML = scoreCount;

        }
    })

});

function step() {
     count +=1;
    for (var i = 0; i < qaSet.length; i++ ){
        qaSet[i].className= 'qa_set';
    }
    qaSet[count].className= 'qa.set active';
    if (count ==5) {
        skip.style.display= 'none';
        clearInterval(durationTime);
        countdown.innerHTML = 0;
    }
}

var durationTime = setInterval(function(){
    if(duration == 15){
        duration =0;
    }
    duration +=1;
    countdown.innerHTML=duration;
    if(countdown.innerHTML=="15"){
        step()
    }
},1000);