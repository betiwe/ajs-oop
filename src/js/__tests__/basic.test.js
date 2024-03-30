import {
  Character,
  Bowman,
  Swordsman,
  Magician,
  Daemon,
  Undead,
  Zombie,
} from "../app";

test("Неверное имя", () => {
  expect(() => new Character("24543523521352352352352323", "Daemon")).toThrow();
});

test("Неверный тип", () => {
  expect(() => new Character("Ernest", "AHAHAHAAHAHAHAHAHAHAHAH")).toThrow();
});

test("Неверно создаётся объект", () => {
  const human = new Character("Ernest", "Bowman");
  const correctHuman = {
    name: "Ernest",
    type: "Bowman",
    health: 100,
    level: 1,
    attack: undefined,
    defence: undefined,
  };
  expect(human).toEqual(correctHuman);
});

test("Неверно создаётся объект Bowman", () => {
  const human = new Bowman("Ernest", "Bowman");
  const correctHuman = {
    name: "Ernest",
    type: "Bowman",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(human).toEqual(correctHuman);
});

test("Неверно создаётся объект Swordsman", () => {
  const human = new Swordsman("Ernest", "Swordsman");
  const correctHuman = {
    name: "Ernest",
    type: "Swordsman",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(human).toEqual(correctHuman);
});

test("Неверно создаётся объект Magician", () => {
  const human = new Magician("Ernest", "Magician");
  const correctHuman = {
    name: "Ernest",
    type: "Magician",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(human).toEqual(correctHuman);
});

test("Неверно создаётся объект Daemon", () => {
  const human = new Daemon("Ernest", "Daemon");
  const correctHuman = {
    name: "Ernest",
    type: "Daemon",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(human).toEqual(correctHuman);
});

test("Неверно создаётся объект Undead", () => {
  const human = new Undead("Ernest", "Undead");
  const correctHuman = {
    name: "Ernest",
    type: "Undead",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(human).toEqual(correctHuman);
});

test("Неверно создаётся объект Zombie", () => {
  const human = new Zombie("Ernest", "Zombie");
  const correctHuman = {
    name: "Ernest",
    type: "Zombie",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(human).toEqual(correctHuman);
});

test("Не увеличивается уровень персонажа", () => {
  const human = new Bowman("Ernest", "Bowman");
  human.levelUp();
  const correctHuman = {
    name: "Ernest",
    type: "Bowman",
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  expect(human).toEqual(correctHuman);
});

test("Персонаж мертвый", () => {
  const human = new Bowman("Ernest", "Bowman");
  human.health = 0;
  human.levelUp();
  const correctHuman = {
    name: "Ernest",
    type: "Bowman",
    health: 0,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(human).toEqual(correctHuman);
});


test('Не уменьшается здоровье при получении урона', () => {
  const human = new Bowman("Ernest", "Bowman");
  human.damage(50);
  const correctHuman = {
    name: "Ernest",
    type: "Bowman",
    health: 62.5,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(human).toEqual(correctHuman);
})

test('У персонажа 0хп', () => {
  const human = new Bowman("Ernest", "Bowman");
  human.health = 0;
  human.damage(50);
  const correctHuman = {
    name: "Ernest",
    type: "Bowman",
    health: 0,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(human).toEqual(correctHuman);
})