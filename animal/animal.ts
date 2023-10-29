import { ITalk } from "src/interfaces/i-talk";

export abstract class Animal implements ITalk {

    readonly nom: string;
    poids: number = 0;

    constructor(nom: string) {
        this.nom = nom;
    }

    abstract talk(signal: string): string;

    blabla(): string[] {
        return [
            "bla",
            "bla"
        ]
    }
}