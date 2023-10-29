import { Animal } from "./animal";

export class AnimalDumb extends Animal {

    talk(signal: string): string {
        return "meuh";
    }
}