class Form {
  constructor() {this.input=createInput("").attribute("placeholder","enter your name")
    this .playbutton=createButton("play")
   this .titleImg =createImg("assets/title.png","gameTitle")
   this. greating=createElement("h2")

  }
setElementposition()
  {
    this.titleImg.position(120,80)
    this.input.position(width/2-110,height/2+80)
    this.playbutton.position(width/2-90,height/2+120)
    this.greating.position (width/2-300,height/2+100)
  

  }
  hide()
  {
    this.greating.hide()
    this.playbutton.hide()
    this.input.hide()
  }
  display()
    {
      this.setElementposition()
       this.handlemousepress()
    }
    handlemousepress()
    {
      this.playbutton.mousePressed(()=>{
        this.input.hide()
   this.playbutton.hide()
        var message=`hello ${this.input.value()} wait for anthor player jion`
        this.greating.html(message)
      })
    }
  }


