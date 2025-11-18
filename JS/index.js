const btn = document.getElementsByTagName("button")[0];
btn.addEventListener("click",()=>{
    alert("Thanks for clicking! Changing the color")

    document.body.style.backgroundColor = "green";
});
