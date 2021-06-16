//devMessager
//Online Javascript/Evaluator Editor

let setMode = null,Result,Console,Mode,Code

class Editor{
   constructor(input, mode){
      this.input = input;

      if(!(mode)){
          this.mode = setMode;
          }
      this.mode = mode;
    }

  run(){
       if(!(this.mode)){
         throw  new Error('mode not set');
        }

      if(this.mode =="JavaScript"){
         Result = new String(eval(this.input));
       }
     }

//get code
Code = document.getElementById("code").value;

//get mode
Mode = document.getElementById("mode").value;

//initialize && run Editor
new Editor(Code,Mode).run()


Btn = document.getElementById("btn");
Console = document.getElementById("console");

Btn.onclick = function(){
     Console.textContent = Result;
    }
