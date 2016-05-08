TDP.tile_components.player_actions = function () {

  this.moveToTile = function (tile) {
    if (tile) {
      if (tile.hasInteraction) {
        tile.interaction(tile, this);
        TDP.new_turn();
      } else if (tile.passable) {
        this.moveToPosition(tile.position());
        TDP.new_turn();
      } else {
        TDP.console.log("You can't go there!", "It's a wall.")
      }
    } else {
      TDP.console.log("You can't go there!", 'Edge of the map.')
    }
  };

  this.moveUp = function () {
    this.moveToTile(this.neighbourUp());
  };

  this.moveDown = function () {
    this.moveToTile(this.neighbourDown());
  };

  this.moveLeft = function () {
    this.moveToTile(this.neighbourLeft());
  };

  this.moveRight = function () {
    this.moveToTile(this.neighbourRight());
  };

  this.specialAttack = function () {
    TDP.console.log("What special attack?", '')
  };

  this.isDead = function () {
    return TDP.health <= 0
  };
  
  this.isAlive = function () {
    return TDP.health > 0
  };


};