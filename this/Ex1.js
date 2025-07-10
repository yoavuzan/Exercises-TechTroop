const person = {
  hungry: true,

  feed: function () {
    if (this.hungry) { //the error in here you have to use this.hungry
      this.hungry = false; //the error in here you have to use this.hungry
      console.log('Im no longer hungry!')
    }
  }
}  

person.feed() //should log "I'm no longer hungry"