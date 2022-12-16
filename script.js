let generate_Psw = document.getElementById("g-btn")
let Pass = document.getElementById("placeholder")
let Pass2 = document.getElementById("placeholder2")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


function generatePsw(){
   let rand = Math.floor(Math.random() * characters.length);
   return rand;
}

let newArry = [];
let newArry2 = [];

function gen(){

   if(newArry.length === 0){
      for(let i = 0; i < 15; ++i){
      let rand = generatePsw();
      newArry.push(characters[rand]);
      }
      Pass.textContent = newArry.join("");

   } else {
      newArry = [];
      for(let i = 0; i < 15; ++i){
         let rand = generatePsw();
         newArry.push(characters[rand]);
      }

      Pass.textContent = newArry.join("");
   }

   if(newArry2.length === 0){
      for(let i = 0; i < 15; ++i){
         let rand = generatePsw();
         newArry2.push(characters[rand]);
         
      }
      
      Pass2.textContent = newArry2.join("");
      
   } else {
      newArry2 =[];
      for(let i = 0; i < 15; ++i){
         let rand = generatePsw();
         newArry2.push(characters[rand]);
         
      }
      
      Pass2.textContent = newArry2.join("");
      
   }


   
}


function copyy(){
   navigator.clipboard.writeText(newArry.join(""))
} 


function copy1(){
   navigator.clipboard.writeText(newArry2.join(""))
}
