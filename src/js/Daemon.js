import { Character } from "./app";

export class Daemon extends Character {
  constructor(name) {
    super(name, "Daemon");
    this.attack = 10;
    this.defence = 40;
  }
}
