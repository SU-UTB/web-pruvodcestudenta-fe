/*
TODO will be handled differently
Used only because of missing api
*/

import {createContext} from 'react';
import {IContent} from "../interfaces/IContent";


interface ITopic extends IContent {

}

//TODO api - testing purpose
export const ContentsData: ITopic[] = [
    {
        title: 'Studijní systém STAG',
        link: 'stag',
        bgColor: '#C9FBE9',
        description: "- Studijní informační systém IS/STAG (Portál UTB) je zřejmě nejdůležitější webovou aplikací, se kterou budeš během studia pracovat. Najdeš zde téměř vše, co se bude týkat tvého studia. Od povinností, které máš splnit, přes rozvrh, až po např. databázi vysokoškolských prací. Můžeš-li, projdi si jej hned na začátku, ušetříš tím později mnoho času.\n" +
            "\n" +
            "- V Portálu UTB můžeš pracovat v pasivním režimu, tj. bez zadání svých přihlašovacích údajů. Nebude ti tak sice dovoleno měnit data v systému, ale můžeš si procházet rozvrhy vyučujících, místností nebo strukturu studijních programů.\n" +
            "\n" +
            "- U aktivního přístupu, který získáš zadáním svého jména a hesla, dostaneš přístup k nejdůležitější záložce Moje studium. Budeš tak moct kontrolovat svoji studijní úspěšnost, své povinnosti, zažádat si o ubytovací nebo sociální stipendium, hlásit se na zkoušky nebo procházet svůj rozvrh.\n" +
            "\n" +
            "- Hlavně se po každé návštěvě Portálu UTB nezapomeň odhlásit. Zabráníš tak tomu, aby někdo měnil tvé údaje za Tvými zády, zvláště na počítačích ve studovně.\n" +
            "\n" +
            "- Vyskytne-li se někdy technický problém s chodem Portálu UTB, neváhej a napiš nám na helpdeskstag@utb.cz nebo portal@utb.cz. Do zprávy uveď minimálně své osobní číslo (např. A10123), ať Tě můžeme jednoduše dohledat. Do zprávy nikdy neuváděj rodné číslo."
    }, {
        title: 'Studijní systém STAG',
        link: 'stag',
        bgColor: '#C9FBE9',
        description: "- Studijní informační systém IS/STAG (Portál UTB) je zřejmě nejdůležitější webovou aplikací, se kterou budeš během studia pracovat. Najdeš zde téměř vše, co se bude týkat tvého studia. Od povinností, které máš splnit, přes rozvrh, až po např. databázi vysokoškolských prací. Můžeš-li, projdi si jej hned na začátku, ušetříš tím později mnoho času.\n" +
            "\n" +
            "- V Portálu UTB můžeš pracovat v pasivním režimu, tj. bez zadání svých přihlašovacích údajů. Nebude ti tak sice dovoleno měnit data v systému, ale můžeš si procházet rozvrhy vyučujících, místností nebo strukturu studijních programů.\n" +
            "\n" +
            "- U aktivního přístupu, který získáš zadáním svého jména a hesla, dostaneš přístup k nejdůležitější záložce Moje studium. Budeš tak moct kontrolovat svoji studijní úspěšnost, své povinnosti, zažádat si o ubytovací nebo sociální stipendium, hlásit se na zkoušky nebo procházet svůj rozvrh.\n" +
            "\n" +
            "- Hlavně se po každé návštěvě Portálu UTB nezapomeň odhlásit. Zabráníš tak tomu, aby někdo měnil tvé údaje za Tvými zády, zvláště na počítačích ve studovně.\n" +
            "\n" +
            "- Vyskytne-li se někdy technický problém s chodem Portálu UTB, neváhej a napiš nám na helpdeskstag@utb.cz nebo portal@utb.cz. Do zprávy uveď minimálně své osobní číslo (např. A10123), ať Tě můžeme jednoduše dohledat. Do zprávy nikdy neuváděj rodné číslo."
    }, {
        title: 'Studijní systém STAG',
        link: 'stag',
        bgColor: '#C9FBE9',
        description: "- Studijní informační systém IS/STAG (Portál UTB) je zřejmě nejdůležitější webovou aplikací, se kterou budeš během studia pracovat. Najdeš zde téměř vše, co se bude týkat tvého studia. Od povinností, které máš splnit, přes rozvrh, až po např. databázi vysokoškolských prací. Můžeš-li, projdi si jej hned na začátku, ušetříš tím později mnoho času.\n" +
            "\n" +
            "- V Portálu UTB můžeš pracovat v pasivním režimu, tj. bez zadání svých přihlašovacích údajů. Nebude ti tak sice dovoleno měnit data v systému, ale můžeš si procházet rozvrhy vyučujících, místností nebo strukturu studijních programů.\n" +
            "\n" +
            "- U aktivního přístupu, který získáš zadáním svého jména a hesla, dostaneš přístup k nejdůležitější záložce Moje studium. Budeš tak moct kontrolovat svoji studijní úspěšnost, své povinnosti, zažádat si o ubytovací nebo sociální stipendium, hlásit se na zkoušky nebo procházet svůj rozvrh.\n" +
            "\n" +
            "- Hlavně se po každé návštěvě Portálu UTB nezapomeň odhlásit. Zabráníš tak tomu, aby někdo měnil tvé údaje za Tvými zády, zvláště na počítačích ve studovně.\n" +
            "\n" +
            "- Vyskytne-li se někdy technický problém s chodem Portálu UTB, neváhej a napiš nám na helpdeskstag@utb.cz nebo portal@utb.cz. Do zprávy uveď minimálně své osobní číslo (např. A10123), ať Tě můžeme jednoduše dohledat. Do zprávy nikdy neuváděj rodné číslo."
    }
];
const defaultVal: ITopic[] = [];
export const TopicsContext = createContext(defaultVal);