import { ITalk } from "src/interfaces/i-talk";

export abstract class Staff implements ITalk {
    nom: string;
    salary: number = 0;

    constructor(nom: string) {
        this.nom = nom;
    }
    
    goToWork(): string;
    goToWork(consigne?: string): string {
        return "ok";
    }

    abstract talk(sentence: string): string;
    
    blabla(): string[] {
        return [
            "hello",
            `i am ${this.nom}`,
            `what's your problem ?`
        ]
    }
}