
$(" .uno ").css("color","red")

$(".dos").css("background","blue")

$(" .tres ").click(
    function(){ 
       $(".tres").css("font-size", "30px").css("color", "green")
       
    }

)

$(".cuatro").mouseover(
    function(){
        $(".cuatro").css("background", "red")
    }
)

$(".cinco").mouseout(
    function(){
        $(".cinco").css("background", "white")
    }
)

$(".seis").css("background","green") .css ("color", "white");

$( "[title=link1] ").css("background","yellow");

function changeIn(){
    $(this).css("background", "white").css("color", "black");

} 

function changeOut(){
    $(this).css("background", "black").css("color", "white");

} 


$(".siete").hover(changeIn, changeOut);

$(" .ocho ").dblclick(
    function(){ 
       $(".ocho").css("font-size", "10px").css("color", "red")
       
    }

)

$(" .nueve ").click(
    function(){ 
       $(".nueve").css("font-family", "cursive").css("color", "blue")
       
    }

)


$(".diez").hover(changeIn, changeOut);
