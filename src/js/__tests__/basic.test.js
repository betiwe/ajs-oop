import Character from "../app";

test("Неверное имя", () => {
  expect(() => new Character("24543523521352352352352323", "Deamon")).toThrow();
});

test("Неверный тип", () => {
  expect(() => new Character("Ernest", "AHAHAHAAHAHAHAHAHAHAHAH")).toThrow();
});

test("Неверно создаётся объект", () => {
  let human = new Character("Ernest", "Deamon");
  let correctHuman = {
    name: "Erenest",
    type: "Deamon",
    health: 100,
    level: 1,
    attack: 0,
    defence: 0,
  };
  expect(human).toEqual(correctHuman);
});
