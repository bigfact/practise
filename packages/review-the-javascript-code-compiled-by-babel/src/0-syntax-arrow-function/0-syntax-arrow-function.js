function ArrowFunc(name) {
  this.name = name
  this.say = () => {
    console.log(this.name)
  }
}

new ArrowFunc('leon').say()
