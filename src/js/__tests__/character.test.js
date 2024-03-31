import { Character } from "../app";
import { Bowman } from "../Bowman";

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

test("Не уменьшается здоровье при получении урона", () => {
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
});

test("У персонажа 0хп", () => {
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
});
