import { Swordsman } from "../Swordsman";

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
