var n=document.querySelectorAll(".drum").length;

for(var i=0;i<n;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
    
}

//here it will make sound based on button pressed by cursor
function handleClick()
{
    var obj=this.innerHTML;
    makeSound(obj);
    btnAnimation(obj);
}

//here it will make sound based on key pressed by keyboard
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    btnAnimation(event.key);
});

function makeSound(key)
{
    switch(key)
    {
        case "w":
            var ab=new Audio("sounds/tom-1.mp3");
            ab.play();
            break;
        case "a":
            var bc=new Audio("sounds/tom-2.mp3");
            bc.play();
            break;
        case "s":
            var cd=new Audio("sounds/tom-3.mp3");
            cd.play();
            break;
        case "d":
            var df=new Audio("sounds/tom-4.mp3");
            df.play();
            break;
        case "j":
            var fg=new Audio("sounds/crash.mp3");
            fg.play();
            break;
        case "k":
            var gh=new Audio("sounds/kick-bass.mp3");
            gh.play();
            break;
        case "l":
            var hi=new Audio("sounds/snare.mp3");
            hi.play();
            break;
        default:
            console.log("None");
        
    }
}

function btnAnimation(key)
{
    var xyz=document.querySelector("."+key);
    xyz.classList.add("pressed");

    //This is for Removing the Effect after some time
    setTimeout(function(){
        xyz.classList.remove("pressed");
    },100);
}
