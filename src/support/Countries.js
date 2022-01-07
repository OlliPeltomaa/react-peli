class Country {
    constructor(name, popl) {
      this.name = name;
      this.popl = popl;
    }
}

let rus = new Country('Venäjä', 145934462);
let ger = new Country('Saksa', 83783942);
let uk = new Country('Iso-Britannia', 67886011);
let fra = new Country('Ranska', 65273511);
let ita = new Country('Italia', 60461826);
let spa = new Country('Espanja', 46754778);
let ukr = new Country('Ukraina', 43733762);
let pol = new Country('Puola', 37846611);
let rom = new Country('Romania', 19237691);
let net = new Country('Alankomaat', 17134872);
let bel = new Country('Belgia', 11589623);
let cze = new Country('Tsekki', 10708981);
let gre = new Country('Kreikka', 10423054);

export const Ctrs = [rus, ger, uk, fra, ita, spa, ukr, pol, rom, net, bel, cze, gre];
