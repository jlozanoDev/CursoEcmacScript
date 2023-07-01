const button = document.getElementById('btn');
button.addEventListener("click", async ()=>{
    const module = await import('./module.js');
    console.log(module);
    module.hello();
})

$(document).ready(function() {
    // Aquí puedes utilizar las funciones de jQuery 1.9
    // Por ejemplo:
    const button2 = document.getElementById('btn2');
    button2.addEventListener("click", async ()=>{
        const module = await import('./module.js');
        console.log(module);
        module.hello();
    })
  });