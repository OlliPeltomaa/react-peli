class Country {
    constructor(name, popl) {
      this.name = name;
      this.popl = popl;
    }
}

// Eurooppa
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
let por = new Country('Portugali', 10196709);
let swe = new Country('Ruotsi', 10099265);
let hun = new Country('Unkari', 9660351);
let blr = new Country('Valko-Venäjä', 9449323);
let aus = new Country('Itävalta', 9006398);
let srb = new Country('Serbia', 8737371);
let swi = new Country('Sveitsi', 	8654622);
let bul = new Country('Bulgaria', 6948445);
let den = new Country('Tanska', 5792202);
let fin = new Country('Suomi', 5540720);
let svk = new Country('Slovakia', 5459642);
let nor = new Country('Norja', 5421241);
let ire = new Country('Irlanti', 4937786);
let cro = new Country('Kroatia', 4105267);
let mld = new Country('Moldova', 4033963);
let bos = new Country('Bosnia & Herzegovina', 3280819);
let alb = new Country('Albania', 2877797);

// Etelä-Amerikka
let bra = new Country('Brasilia', 212559417);
let col = new Country('Kolumbia', 50882891);
let arg = new Country('Argentiina', 45195774);
let per = new Country('Peru', 32971854);
let ven = new Country('Venezuela', 28435940);
let chi = new Country('Chile', 19116201);
let ecu = new Country('Ecuador', 17643054)
let bol = new Country('Bolivia', 11673021);
let par = new Country('Paraguay', 7132538);
let uru = new Country('Uruguay', 3473730);
let guy = new Country('Guyana', 786552);
let sur = new Country('Surinam', 586632);
let fgu = new Country('Ranskan Guayana', 298682);
let fal = new Country('Falklandin saaret', 3480);

// Aasia 
let chn = new Country('Kiina', 1439323776);
let ind = new Country('Intia', 1380004385);
let indo = new Country('Indonesia', 273523615);
let pak = new Country('Pakistan', 220892340);
let bng = new Country('Bangladesh', 164689383);
let jpn = new Country('Japan', 126476461);
let phi = new Country('Filippiinit', 109581078);
let vtn = new Country('Vietnam', 97338579);
let tur = new Country('Turkki', 84339067);
let irn = new Country('Iran', 83992949);
let tha = new Country('Thaimaa', 69799978);
let mya = new Country('Myanmar', 54409800);
let sko = new Country('Etelä-Korea', 51269185);
let irq = new Country('Irak', 40222493);
let afg = new Country('Afganistan', 38928346);
let sar = new Country('Saudi-Arabia', 34813871);
let uzb = new Country('Uzbekistan', 33469203);
let mal = new Country('Malesia', 32365999);
let yem = new Country('Jemen', 29825964);
let nep = new Country('Nepal', 29136808);
let nko = new Country('Pohjois-Korea', 25778816);
let twn = new Country('Taiwan', 23816775);
let sri = new Country('Sri Lanka', 21413249);
let kaz = new Country('Kazakstan', 18776707);
let syr = new Country('Syyria', 17500658);
let cam = new Country('Kambodza', 16718965);
let jor = new Country('Jordan', 10203134);
let aze = new Country('Azerbaidzan', 10139177);
let uae = new Country('Yhdistyneet arabiemiirikunnat', 9890402);
let taj = new Country('Tadzikistan', 9537645);

let europe = [rus, ger, uk, fra, ita, spa, ukr, pol, rom, net, bel, cze, gre, por, swe, hun, blr, aus,
srb, swi, bul, den, fin, svk, nor, ire, cro, mld, bos, alb];

let southAmerica = [bra, col, arg, per, ven, chi, ecu, bol, par, uru, guy, sur, fgu, fal];

let asia = [chn, ind, indo, pak, bng, jpn, phi, vtn, tur, irn, tha, mya, sko, irq, afg, sar, uzb, mal,
yem, nep, nko, twn, sri, kaz, syr, cam, jor, aze, uae, taj];

let all = europe.concat(southAmerica, asia);

export const Ctrs = [europe, southAmerica, asia, all];
