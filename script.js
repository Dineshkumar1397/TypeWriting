var words = ["A","paragraph","is","a","self","contained","unit","of","discourse","in","writing","dealing","with","a","particular","point","or","idea","a","paragraph","consist","of","one","or","more","sentences","though","not","required","by","the","syntax","of","any","language","paragraph","are","usually","an","expected","part","of","formal","writing","used","to","organise","longer","prose"];

var count =0 ;
var correct = 0;
var incorrect = 0;

$(window).keypress(function(e) {
    if(e.which == 32){
        var word = document.getElementById("containers").value;
        if(words[count].trim()==word.trim()){
            $("#"+count).toggleClass("right");
            correct++;
        }
        else{
            $("#"+count).toggleClass("wrong");
            incorrect++;
        }
        count++;
        document.getElementById("containers").value="";
    }
});
document.getElementById("containers").onclick=function(){
    var timerem=45;
    var wpm;
    var timer=setInterval(function(){
        document.getElementById("countdown").innerHTML=timerem;
        timerem-=1;
        if(timerem<=-2){
            clearInterval(timer);
            document.getElementById("countdown").innerHTML="Time up...";
            if(timerem==-2){
                wpm=correct/0.5;
                document.getElementById("result").innerHTML+="\nCorrectWords:"+correct;
                document.getElementById("result").innerHTML+="\n\nIncorrectWords:"+incorrect;
                document.getElementById("result").innerHTML+="\n\nWordsperMinute:"+wpm;
            }
        }
    },1000);
}
$(".restart").click(function(){
    location.reload();
})