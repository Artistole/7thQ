var load = document.querySelector("#load");
var text = document.querySelector("#text");

load.addEventListener('click', hide)

function hide()
{
    if(text.style.display === "none")            //added if loop so that once we click the button again it can be shown.
      text.style.display = "block"
    else
       text.style.display = "none"               //this statement alone will work but cant be shown again if required unless reloaded
}