module.exports = class SpaceShip {
  constructor(name, currentLoad, totalLoad, shield) {
    this.name = name;
    this.currentLoad = currentLoad;
    this.totalLoad = totalLoad;
    this.shield = shield;
  }

  percentageLoad() {
    this.currentPercentageLoad = (this.currentLoad * 100) / this.totalLoad;

    return this.currentPercentageLoad;
  }
};
