import { ITalk } from "./interfaces/i-talk";
import { Zoo } from "./zoo";

const myZoo = Zoo.mock();

function talkWith(talker: ITalk) {
    console.log(talker.talk("hi"));
    for (let bla in talker.blabla()) {
        console.log(bla);
    }
}

for (let animal of myZoo.animals) {
    talkWith(animal);
}

for (let staff of myZoo.staffs) {
    talkWith(staff);
}