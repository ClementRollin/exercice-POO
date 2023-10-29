import { Agent } from "./staff/agent";
import { Animal } from "./animal/animal";
import { AnimalDumb } from "./animal/animal_dumb";
import { AnimalSmart } from "./animal/animal_smart";
import { Shop } from "./shop";
import { Staff } from "./staff/staff";
import { Vet } from "./staff/vet";
import { EVetSpeciality } from "./enums/e-vet-speciality";

export class Zoo {

    shops: Shop[] = [];
    staffs: Staff[] = [];
    animals: Animal[] = [];

    static mock(): Zoo {
        let zoo = new Zoo();
        zoo.shops.push(new Shop("kiosk", 3000));

        zoo.animals.push(new AnimalDumb("Tortue"));
        zoo.animals.push(new AnimalDumb("Lapin1"));
        zoo.animals.push(new AnimalDumb("Lapin2"));
        zoo.animals.push(new AnimalSmart("Kangourou"));

        zoo.staffs.push(new Agent("Robert"));
        zoo.staffs.push(new Agent("Bernadette"));
        zoo.staffs.push(new Vet("Juju", EVetSpeciality.Felins));
        return zoo;
    }
}
