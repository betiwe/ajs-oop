import { Undead } from "../Undead";

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
