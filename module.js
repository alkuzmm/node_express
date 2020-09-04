class Module {
  constructor(msg) {
    this.message = msg;
  }
  showMessage() {
    console.log(this.message);
  }
}

module.exports = (m) => new Module(m);
