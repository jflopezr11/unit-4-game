var Random =Math.floor(Math.random() * 101+19)

$("#target").text(Random);

var cry1= Math.floor(Math.random() * 11) + 1;
var cry2= Math.floor(Math.random() * 11) + 1;
var cry3= Math.floor(Math.random() * 11) + 1;
var cry4= Math.floor(Math.random() * 11) + 1;

var userTotal= 0;
var  wins= 0;
var losses= 0;

$("#winCount").text(wins);
$("#lossCount").text(losses)

function reset(){
    Random = Math.floor(Math.random() * 101 + 19)
    console.log(Random);
    $('#target').text(Random);
    var cry1= Math.floor(Math.random()*11+1)
    var cry2= Math.floor(Math.random()*11+1)
    var cry3= Math.floor(Math.random()*11+1)
    var cry4= Math.floor(Math.random()*11+1)
    userTotal = 0
    $('#score').text(userTotal);
};

function hooray(){
    alert ("You won!");
    wins++;
    $('winCount').text(wins);
    reset();
}

function sorry(){
    alert ("Sorry buddy!");
    losses++;
    $('#lossCount').text(losses);
    reset();
}

$('#gemOne').on('click', function(){
    userTotal = userTotal + cry1;
    console.log("New userTotal=" + userTotal);
    $('#score').text(userTotal);

    if( userTotal == Random){
        hooray();
    }
    else if (userTotal > Random){
        sorry();
    }
});

$('#gemTwo').on('click', function(){
    userTotal = userTotal + cry1;
    console.log("New userTotal=" + userTotal);
    $('#score').text(userTotal);

    if( userTotal == Random){
        hooray();
    }
    else if (userTotal > Random){
        sorry();
    }
});

$('#gemThree').on('click', function(){
    userTotal = userTotal + cry1;
    console.log("New userTotal=" + userTotal);
    $('#score').text(userTotal);

    if( userTotal == Random){
        hooray();
    }
    else if (userTotal > Random){
        sorry();
    }
});

$('#gemFour').on('click', function(){
    userTotal = userTotal + cry1;
    console.log("New userTotal=" + userTotal);
    $('#score').text(userTotal);

    if( userTotal == Random){
        hooray();
    }
    else if (userTotal > Random){
        sorry();
    }
});