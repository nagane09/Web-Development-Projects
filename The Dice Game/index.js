var randomNumber1 =Math.floor(Math.random()*6)+1;
var image1="dice"+randomNumber1+".png";
img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",image1);

var randomNumber2 =Math.floor(Math.random()*6)+1;
var image2="dice"+randomNumber2+".png";
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",image2);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}
