phina.define('MainScene', {
  superClass: 'DisplayScene',
  init: function() {
    this.superInit();
    const label = Label('Hello, phina.js!')
      .addChildTo(this)
      .setPosition(this.gridX.center(), this.gridY.center());
    this.label = label;
  }
});

phina.main(function() {
  const app = GameApp({
    startLabel: 'main'
  });
  app.run();
});
