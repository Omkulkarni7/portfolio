
addEventListener("DOMContentLoaded",()=>{
   
    const name = "OMKAR RAJU KULKARNI";
    const nameElement = document.getElementById('name');
    let index=0;

    let displayNext = () =>{
        if(index < name.length){
            nameElement.innerHTML += name[index];
            index++;
            setTimeout(displayNext, 100);
        }
    }
    displayNext();
});

addEventListener("DOMContentLoaded",()=>{
    const name = "To pursue a challenging career and be a part of progressive organization that gives scope to enhance knowledge & to obtain a position where my skills and knowledge are valued and utilize for organizational and company's growth.";
    const nameElement = document.getElementById('obj');
    let index=0;

    let displayNext = () =>{
        if(index < name.length){
            nameElement.innerHTML += name[index];
            index++;
            setTimeout(displayNext, 100);
        }
    }
    displayNext();
})


function myfunction(){
    
    var x = document.getElementById("myintern")
    if(x.style.visibility==='hidden'){
        x.style.visibility='visible'
    }else{
        x.style.visibility='hidden'
    }
}
function my(){
    
    var x = document.getElementById("myintern")
    if(x.style.visibility==='visible'){
        x.style.visibility='hidden'
    }
}
setTimeout(myfunction, 3000);
setTimeout(my, 3000);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//cDYxQDljhkzts6L