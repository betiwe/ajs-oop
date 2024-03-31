import { Zombie } from "../Zombie";

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
