import { Bowman } from "../Bowman";

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
