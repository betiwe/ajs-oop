import { Magician } from "../Magician";

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
