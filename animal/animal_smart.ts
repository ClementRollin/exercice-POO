import { Animal } from "./animal";

export class AnimalSmart extends Animal {
    qi: number = 100;

    talk(signal: string): string {
        if (this.qi > 80)
            return `Hello ${signal} i am ${this.nom}`
        else
            return "groar";
    }
}