import { Staff } from "./staff";

export class Agent extends Staff {
    
    override goToWork(consigne?: string): string {
        return "yes sir";
    }

    talk(sentence: string): string {
        return "yep";
    }
}