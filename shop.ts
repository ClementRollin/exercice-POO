export class Shop {
    readonly nom: string;
    ca: number;

    constructor(nom: string, ca: number=0) {
        this.nom = nom;
        this.ca = ca;
    }
}