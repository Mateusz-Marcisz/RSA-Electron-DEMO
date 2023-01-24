const $ = require("jquery");
const { ipcRenderer, ipcMain } = require("electron");





$("#save-btn").on("click", () => {


//
const someArgument = document.querySelector("#fname").value;

//
 ipcRenderer.send('asynchronous-message', someArgument)



ipcRenderer.on('asynchronous-reply', (_event, arg, priv, pub, tajne) => {
console.log(priv);
     $("#test2").html("deszyfrowane "+arg);
     $("#test3").html("klucz prywatny "+priv);
     $("#test4").html("klucz publiczny"+pub);
     $("#test5").html("wiadomosc zaszyfrowana"+tajne);

  })
 
  });



  $("#cor").on("click", () => {


   //
   const someArgument = document.querySelector("#ki").value;
   
   //
    ipcRenderer.send('ss', someArgument)
   

     });

     $("#qqq").on("click", () => {


      //
      const someArgument = document.querySelector("#qq").value;
      
      //
       ipcRenderer.send('sa', someArgument)
      
   
        });
   
     
        $("#des").on("click", () => {


         //
         const someArgument = document.querySelector("#desz").value;
         
         //
          ipcRenderer.send('de', someArgument)
         
      
           });





