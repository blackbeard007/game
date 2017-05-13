class Kingdom {
    constructor() {
        this.warriors = [new Warrior('Gnome-Grisha'),
                         new Warrior('Ork-Tisha'),
                         new Warrior('Elf-Misha')];
        this.power = getSumOfFeature(this.warriors, 'power');
    }

    attack() {
        //console.log("Power of kingdom %i", this.power);
        enemy.defend(kingdom.power);  
    }

    defend(power) {
        this.warriors.forEach(function (item) {
        item.health -= power;
        });
        console.log("health of warriors is %i", getSumOfFeature(this.warriors, 'health'));
    }
}