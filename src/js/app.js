// TODO: write your code here
class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 0;
    this.defence = 0;
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
  }
  levelUp() {
    if (this.health != 0) {
      this.level++;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    }
  }
  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}

class Bowman extends Character {
  constructor(name) {
    super(name, "Bowman");
    this.attack = 25;
    this.defence = 25;
  }
}

class Swordsman extends Character {
  constructor(name) {
    super(name, "Swordsman");
    this.attack = 40;
    this.defence = 10;
  }
}

class Magician extends Character {
  constructor(name) {
    super(name, "Magician");
    this.attack = 10;
    this.defence = 40;
  }
}

class Undead extends Character {
  constructor(name) {
    super(name, "Undead");
    this.attack = 25;
    this.defence = 25;
  }
}

class Zombie extends Character {
  constructor(name) {
    super(name, "Zombie");
    this.attack = 40;
    this.defence = 10;
  }
}

class Daemon extends Character {
  constructor(name) {
    super(name, "Daemon");
    this.attack = 10;
    this.defence = 40;
  }
}

const bowman = new Bowman("Jasper", "Bowman");
const swordsman = new Swordsman("Gerald", "Swordsman");
const magician = new Magician("Magnus", "Magician");
const undead = new Undead("William", "Undead");
const zombie = new Zombie("Dexter", "Zombie");
const daemon = new Daemon("Henry", "Daemon");
