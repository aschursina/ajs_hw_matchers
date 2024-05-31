export default function healthHero(people) {
    return people.sort((person1, person2) => person2.health - person1.health);
}