export class Character {
  constructor(name, type) {
    if (typeof name != "string" || name.length < 2 || name.length > 10) {
      throw new Error("Введено неверное название!");
    }
    let characterClasses = [
      "Bowman",
      "Swordsman",
      "Magician",
      "Daemon",
      "Undead",
      "Zombie",
    ];
    if (!characterClasses.includes(type)) {
      throw new Error("Введен неверный класс персонажа!");
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }
  levelUp() {
    if (this.health > 0) {
      this.level++;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    }
  }
  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}