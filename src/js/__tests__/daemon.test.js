import { Daemon } from "../Daemon";

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
