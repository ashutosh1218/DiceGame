var a=Math.floor(Math.random()*6)+1;
var b=Math.floor(Math.random()*6)+1;

if(a>b)
{
    var i1="images/dice"+a+".png";
    var i2="images/dice"+b+".png";
    document.querySelector("h1").innerText="Player 1 Wins!";
    // document.querySelector(".img1").setAttribute("src", i1);
    // document.querySelector(".img2").setAttribute("src", i2);
    document.querySelector(".img1").src=i1;
    document.querySelector(".img2").src=i2;

}
else if(b>a)
{
    var i1="images/dice"+a+".png";
    var i2="images/dice"+b+".png";
    document.querySelector("h1").innerText="Player 2 Wins!";
    document.querySelector(".img1").setAttribute("src", i1);
    document.querySelector(".img2").setAttribute("src", i2);
}
else 
{
    var i1="images/dice"+a+".png";
    var i2="images/dice"+b+".png";
    document.querySelector("h1").innerText="Match Drawn!";
    document.querySelector(".img1").setAttribute("src", i1);
    document.querySelector(".img2").setAttribute("src", i2);
}