import healthHero from "../healthHero";

test('sortHealthHero', () => {
    const people = [
      {name: 'мечник', health: 10},
      {name: 'маг', health: 100},
      {name: 'лучник', health: 80},
    ];
    
    const result = healthHero(people);

    expect(result).toEqual([
      {name: 'маг', health: 100},
      {name: 'лучник', health: 80},
      {name: 'мечник', health: 10},
    ])
})