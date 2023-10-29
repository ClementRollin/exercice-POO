import { EVetSpeciality } from "src/enums/e-vet-speciality";
import { Staff } from "./staff";

export class Vet extends Staff {
    
    speciality: EVetSpeciality;

    constructor(nom: string, speciality: EVetSpeciality) {
        super(nom);
        this.speciality = speciality;
    }

    override goToWork(consigne?: string): string {
        let response = super.goToWork();
        return `${response}, but do you talk to me ?`;
    }

    talk(sentence: string): string {
        return "hi";
    }
}