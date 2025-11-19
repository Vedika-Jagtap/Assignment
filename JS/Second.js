alert("Connection successful");
const btn = document.createElement("button");     //element created
btn.innerText = "Change color to green";
const body = document.body;  //element captured
body.append(btn);   //inside body element we have added

btn.addEventListener("click",()=>{  //click event name string
    alert("Thanks for clicking! Changing the color")

    body.style.backgroundColor = "green";
});

const btn1 = document.createElement("button");     //element created
btn1.innerHTML = "Change color back to white";
body.append(btn1);   //inside body element we have added

btn1.addEventListener("click",()=>{  //click event name string
    alert("Thanks for clicking! Changing the color")

    body.style.backgroundColor = "white";
});