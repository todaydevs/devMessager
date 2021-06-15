//devMessager
//Online Editor
//main compilation(Javascript, python)

let setMode = null;

class Editor{
     constructor(input,mode) {
          this.input = input;
          if(!(mode)){
                 this.setMode = setMode;
                }
              }

     run(){
        console log('not yet implemented');
        }
      }

//get source
let source = document.querySelector("#editor");

//Run Source
//
//
let console = document.querySelector("#console")
   ,getSource = new Editor(source.value)
   ,compileSource = getSource.run();
