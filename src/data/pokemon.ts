import type { PokemonEntry } from '../lib/types.ts'

export const POKEMON_ENTRIES = [
  {
    "id": 1,
    "slug": "bulbasaur",
    "speciesKey": "bulbasaur",
    "nameJa": "フシギダネ",
    "nameEn": "Bulbasaur",
    "imagePath": "pokemon-icons/bulbasaur.png",
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 49,
      "defense": 49,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 45,
      "total": 318
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 2,
    "slug": "ivysaur",
    "speciesKey": "ivysaur",
    "nameJa": "フシギソウ",
    "nameEn": "Ivysaur",
    "imagePath": "pokemon-icons/ivysaur.png",
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 62,
      "defense": 63,
      "specialAttack": 80,
      "specialDefense": 80,
      "speed": 60,
      "total": 405
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 3,
    "slug": "venusaur",
    "speciesKey": "venusaur",
    "nameJa": "フシギバナ",
    "nameEn": "Venusaur",
    "imagePath": "pokemon-icons/venusaur.png",
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 82,
      "defense": 83,
      "specialAttack": 100,
      "specialDefense": 100,
      "speed": 80,
      "total": 525
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10033,
    "slug": "venusaur-mega",
    "speciesKey": "venusaur",
    "nameJa": "メガフシギバナ",
    "nameEn": "Mega Venusaur",
    "imagePath": "pokemon-icons/venusaur-mega.png",
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 100,
      "defense": 123,
      "specialAttack": 122,
      "specialDefense": 120,
      "speed": 80,
      "total": 625
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": false
  },
  {
    "id": 10195,
    "slug": "venusaur-gmax",
    "speciesKey": "venusaur",
    "nameJa": "フシギバナ（キョダイマックスのすがた）",
    "nameEn": "Gigantamax Venusaur",
    "imagePath": "pokemon-icons/venusaur-gmax.png",
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 82,
      "defense": 83,
      "specialAttack": 100,
      "specialDefense": 100,
      "speed": 80,
      "total": 525
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 4,
    "slug": "charmander",
    "speciesKey": "charmander",
    "nameJa": "ヒトカゲ",
    "nameEn": "Charmander",
    "imagePath": "pokemon-icons/charmander.png",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 39,
      "attack": 52,
      "defense": 43,
      "specialAttack": 60,
      "specialDefense": 50,
      "speed": 65,
      "total": 309
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 5,
    "slug": "charmeleon",
    "speciesKey": "charmeleon",
    "nameJa": "リザード",
    "nameEn": "Charmeleon",
    "imagePath": "pokemon-icons/charmeleon.png",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 58,
      "attack": 64,
      "defense": 58,
      "specialAttack": 80,
      "specialDefense": 65,
      "speed": 80,
      "total": 405
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 6,
    "slug": "charizard",
    "speciesKey": "charizard",
    "nameJa": "リザードン",
    "nameEn": "Charizard",
    "imagePath": "pokemon-icons/charizard.png",
    "types": [
      "fire",
      "flying"
    ],
    "baseStats": {
      "hp": 78,
      "attack": 84,
      "defense": 78,
      "specialAttack": 109,
      "specialDefense": 85,
      "speed": 100,
      "total": 534
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10034,
    "slug": "charizard-mega-x",
    "speciesKey": "charizard",
    "nameJa": "メガリザードンＸ",
    "nameEn": "Mega Charizard X",
    "imagePath": "pokemon-icons/charizard-mega-x.png",
    "types": [
      "fire",
      "dragon"
    ],
    "baseStats": {
      "hp": 78,
      "attack": 130,
      "defense": 111,
      "specialAttack": 130,
      "specialDefense": 85,
      "speed": 100,
      "total": 634
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": false
  },
  {
    "id": 10035,
    "slug": "charizard-mega-y",
    "speciesKey": "charizard",
    "nameJa": "メガリザードンＹ",
    "nameEn": "Mega Charizard Y",
    "imagePath": "pokemon-icons/charizard-mega-y.png",
    "types": [
      "fire",
      "flying"
    ],
    "baseStats": {
      "hp": 78,
      "attack": 104,
      "defense": 78,
      "specialAttack": 159,
      "specialDefense": 115,
      "speed": 100,
      "total": 634
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": false
  },
  {
    "id": 10196,
    "slug": "charizard-gmax",
    "speciesKey": "charizard",
    "nameJa": "リザードン（キョダイマックスのすがた）",
    "nameEn": "Gigantamax Charizard",
    "imagePath": "pokemon-icons/charizard-gmax.png",
    "types": [
      "fire",
      "flying"
    ],
    "baseStats": {
      "hp": 78,
      "attack": 84,
      "defense": 78,
      "specialAttack": 109,
      "specialDefense": 85,
      "speed": 100,
      "total": 534
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 7,
    "slug": "squirtle",
    "speciesKey": "squirtle",
    "nameJa": "ゼニガメ",
    "nameEn": "Squirtle",
    "imagePath": "pokemon-icons/squirtle.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 44,
      "attack": 48,
      "defense": 65,
      "specialAttack": 50,
      "specialDefense": 64,
      "speed": 43,
      "total": 314
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 8,
    "slug": "wartortle",
    "speciesKey": "wartortle",
    "nameJa": "カメール",
    "nameEn": "Wartortle",
    "imagePath": "pokemon-icons/wartortle.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 59,
      "attack": 63,
      "defense": 80,
      "specialAttack": 65,
      "specialDefense": 80,
      "speed": 58,
      "total": 405
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 9,
    "slug": "blastoise",
    "speciesKey": "blastoise",
    "nameJa": "カメックス",
    "nameEn": "Blastoise",
    "imagePath": "pokemon-icons/blastoise.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 79,
      "attack": 83,
      "defense": 100,
      "specialAttack": 85,
      "specialDefense": 105,
      "speed": 78,
      "total": 530
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10036,
    "slug": "blastoise-mega",
    "speciesKey": "blastoise",
    "nameJa": "メガカメックス",
    "nameEn": "Mega Blastoise",
    "imagePath": "pokemon-icons/blastoise-mega.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 79,
      "attack": 103,
      "defense": 120,
      "specialAttack": 135,
      "specialDefense": 115,
      "speed": 78,
      "total": 630
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": false
  },
  {
    "id": 10197,
    "slug": "blastoise-gmax",
    "speciesKey": "blastoise",
    "nameJa": "カメックス（キョダイマックスのすがた）",
    "nameEn": "Gigantamax Blastoise",
    "imagePath": "pokemon-icons/blastoise-gmax.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 79,
      "attack": 83,
      "defense": 100,
      "specialAttack": 85,
      "specialDefense": 105,
      "speed": 78,
      "total": 530
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 10,
    "slug": "caterpie",
    "speciesKey": "caterpie",
    "nameJa": "キャタピー",
    "nameEn": "Caterpie",
    "imagePath": "pokemon-icons/caterpie.png",
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 30,
      "defense": 35,
      "specialAttack": 20,
      "specialDefense": 20,
      "speed": 45,
      "total": 195
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 11,
    "slug": "metapod",
    "speciesKey": "metapod",
    "nameJa": "トランセル",
    "nameEn": "Metapod",
    "imagePath": "pokemon-icons/metapod.png",
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 20,
      "defense": 55,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 30,
      "total": 205
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 12,
    "slug": "butterfree",
    "speciesKey": "butterfree",
    "nameJa": "バタフリー",
    "nameEn": "Butterfree",
    "imagePath": "pokemon-icons/butterfree.png",
    "types": [
      "bug",
      "flying"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 45,
      "defense": 50,
      "specialAttack": 90,
      "specialDefense": 80,
      "speed": 70,
      "total": 395
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10198,
    "slug": "butterfree-gmax",
    "speciesKey": "butterfree",
    "nameJa": "バタフリー（キョダイマックスのすがた）",
    "nameEn": "Gigantamax Butterfree",
    "imagePath": "pokemon-icons/butterfree-gmax.png",
    "types": [
      "bug",
      "flying"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 45,
      "defense": 50,
      "specialAttack": 90,
      "specialDefense": 80,
      "speed": 70,
      "total": 395
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 13,
    "slug": "weedle",
    "speciesKey": "weedle",
    "nameJa": "ビードル",
    "nameEn": "Weedle",
    "imagePath": "pokemon-icons/weedle.png",
    "types": [
      "bug",
      "poison"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 35,
      "defense": 30,
      "specialAttack": 20,
      "specialDefense": 20,
      "speed": 50,
      "total": 195
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 14,
    "slug": "kakuna",
    "speciesKey": "kakuna",
    "nameJa": "コクーン",
    "nameEn": "Kakuna",
    "imagePath": "pokemon-icons/kakuna.png",
    "types": [
      "bug",
      "poison"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 25,
      "defense": 50,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 35,
      "total": 205
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 15,
    "slug": "beedrill",
    "speciesKey": "beedrill",
    "nameJa": "スピアー",
    "nameEn": "Beedrill",
    "imagePath": "pokemon-icons/beedrill.png",
    "types": [
      "bug",
      "poison"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 90,
      "defense": 40,
      "specialAttack": 45,
      "specialDefense": 80,
      "speed": 75,
      "total": 395
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10090,
    "slug": "beedrill-mega",
    "speciesKey": "beedrill",
    "nameJa": "メガスピアー",
    "nameEn": "Mega Beedrill",
    "imagePath": "pokemon-icons/beedrill-mega.png",
    "types": [
      "bug",
      "poison"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 150,
      "defense": 40,
      "specialAttack": 15,
      "specialDefense": 80,
      "speed": 145,
      "total": 495
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター オメガルビー・アルファサファイア",
    "isDefault": false
  },
  {
    "id": 16,
    "slug": "pidgey",
    "speciesKey": "pidgey",
    "nameJa": "ポッポ",
    "nameEn": "Pidgey",
    "imagePath": "pokemon-icons/pidgey.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 45,
      "defense": 40,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 56,
      "total": 251
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 17,
    "slug": "pidgeotto",
    "speciesKey": "pidgeotto",
    "nameJa": "ピジョン",
    "nameEn": "Pidgeotto",
    "imagePath": "pokemon-icons/pidgeotto.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 63,
      "attack": 60,
      "defense": 55,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 71,
      "total": 349
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 18,
    "slug": "pidgeot",
    "speciesKey": "pidgeot",
    "nameJa": "ピジョット",
    "nameEn": "Pidgeot",
    "imagePath": "pokemon-icons/pidgeot.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 83,
      "attack": 80,
      "defense": 75,
      "specialAttack": 70,
      "specialDefense": 70,
      "speed": 101,
      "total": 479
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10073,
    "slug": "pidgeot-mega",
    "speciesKey": "pidgeot",
    "nameJa": "メガピジョット",
    "nameEn": "Mega Pidgeot",
    "imagePath": "pokemon-icons/pidgeot-mega.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 83,
      "attack": 80,
      "defense": 80,
      "specialAttack": 135,
      "specialDefense": 80,
      "speed": 121,
      "total": 579
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター オメガルビー・アルファサファイア",
    "isDefault": false
  },
  {
    "id": 19,
    "slug": "rattata",
    "speciesKey": "rattata",
    "nameJa": "コラッタ",
    "nameEn": "Rattata",
    "imagePath": "pokemon-icons/rattata.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 30,
      "attack": 56,
      "defense": 35,
      "specialAttack": 25,
      "specialDefense": 35,
      "speed": 72,
      "total": 253
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10091,
    "slug": "rattata-alola",
    "speciesKey": "rattata",
    "nameJa": "コラッタ（アローラのすがた）",
    "nameEn": "Alolan Rattata",
    "imagePath": "pokemon-icons/rattata-alola.png",
    "types": [
      "dark",
      "normal"
    ],
    "baseStats": {
      "hp": 30,
      "attack": 56,
      "defense": 35,
      "specialAttack": 25,
      "specialDefense": 35,
      "speed": 72,
      "total": 253
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 20,
    "slug": "raticate",
    "speciesKey": "raticate",
    "nameJa": "ラッタ",
    "nameEn": "Raticate",
    "imagePath": "pokemon-icons/raticate.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 81,
      "defense": 60,
      "specialAttack": 50,
      "specialDefense": 70,
      "speed": 97,
      "total": 413
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10092,
    "slug": "raticate-alola",
    "speciesKey": "raticate",
    "nameJa": "ラッタ（アローラのすがた）",
    "nameEn": "Alolan Raticate",
    "imagePath": "pokemon-icons/raticate-alola.png",
    "types": [
      "dark",
      "normal"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 71,
      "defense": 70,
      "specialAttack": 40,
      "specialDefense": 80,
      "speed": 77,
      "total": 413
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 10093,
    "slug": "raticate-totem-alola",
    "speciesKey": "raticate",
    "nameJa": "ラッタ",
    "nameEn": "Totem Alolan Raticate",
    "imagePath": "pokemon-icons/raticate-totem-alola.png",
    "types": [
      "dark",
      "normal"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 71,
      "defense": 70,
      "specialAttack": 40,
      "specialDefense": 80,
      "speed": 77,
      "total": 413
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 21,
    "slug": "spearow",
    "speciesKey": "spearow",
    "nameJa": "オニスズメ",
    "nameEn": "Spearow",
    "imagePath": "pokemon-icons/spearow.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 60,
      "defense": 30,
      "specialAttack": 31,
      "specialDefense": 31,
      "speed": 70,
      "total": 262
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 22,
    "slug": "fearow",
    "speciesKey": "fearow",
    "nameJa": "オニドリル",
    "nameEn": "Fearow",
    "imagePath": "pokemon-icons/fearow.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 90,
      "defense": 65,
      "specialAttack": 61,
      "specialDefense": 61,
      "speed": 100,
      "total": 442
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 23,
    "slug": "ekans",
    "speciesKey": "ekans",
    "nameJa": "アーボ",
    "nameEn": "Ekans",
    "imagePath": "pokemon-icons/ekans.png",
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 60,
      "defense": 44,
      "specialAttack": 40,
      "specialDefense": 54,
      "speed": 55,
      "total": 288
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 24,
    "slug": "arbok",
    "speciesKey": "arbok",
    "nameJa": "アーボック",
    "nameEn": "Arbok",
    "imagePath": "pokemon-icons/arbok.png",
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 95,
      "defense": 69,
      "specialAttack": 65,
      "specialDefense": 79,
      "speed": 80,
      "total": 448
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 25,
    "slug": "pikachu",
    "speciesKey": "pikachu",
    "nameJa": "ピカチュウ",
    "nameEn": "Pikachu",
    "imagePath": "pokemon-icons/pikachu.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 90,
      "total": 320
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10080,
    "slug": "pikachu-rock-star",
    "speciesKey": "pikachu",
    "nameJa": "ハードロック・ピカチュウ",
    "nameEn": "Pikachu Rock Star",
    "imagePath": "pokemon-icons/pikachu-rock-star.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 90,
      "total": 320
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター オメガルビー・アルファサファイア",
    "isDefault": false
  },
  {
    "id": 10081,
    "slug": "pikachu-belle",
    "speciesKey": "pikachu",
    "nameJa": "マダム・ピカチュウ",
    "nameEn": "Pikachu Belle",
    "imagePath": "pokemon-icons/pikachu-belle.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 90,
      "total": 320
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター オメガルビー・アルファサファイア",
    "isDefault": false
  },
  {
    "id": 10082,
    "slug": "pikachu-pop-star",
    "speciesKey": "pikachu",
    "nameJa": "アイドル・ピカチュウ",
    "nameEn": "Pikachu Pop Star",
    "imagePath": "pokemon-icons/pikachu-pop-star.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 90,
      "total": 320
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター オメガルビー・アルファサファイア",
    "isDefault": false
  },
  {
    "id": 10083,
    "slug": "pikachu-phd",
    "speciesKey": "pikachu",
    "nameJa": "ドクター・ピカチュウ",
    "nameEn": "Pikachu Ph.D.",
    "imagePath": "pokemon-icons/pikachu-phd.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 90,
      "total": 320
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター オメガルビー・アルファサファイア",
    "isDefault": false
  },
  {
    "id": 10084,
    "slug": "pikachu-libre",
    "speciesKey": "pikachu",
    "nameJa": "マスクド・ピカチュウ",
    "nameEn": "Pikachu Libre",
    "imagePath": "pokemon-icons/pikachu-libre.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 90,
      "total": 320
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター オメガルビー・アルファサファイア",
    "isDefault": false
  },
  {
    "id": 10085,
    "slug": "pikachu-cosplay",
    "speciesKey": "pikachu",
    "nameJa": "おきがえピカチュウ",
    "nameEn": "Cosplay Pikachu",
    "imagePath": "pokemon-icons/pikachu-cosplay.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 90,
      "total": 320
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター オメガルビー・アルファサファイア",
    "isDefault": false
  },
  {
    "id": 10094,
    "slug": "pikachu-original-cap",
    "speciesKey": "pikachu",
    "nameJa": "ピカチュウ（オリジナルキャップ）",
    "nameEn": "Original Cap Pikachu",
    "imagePath": "pokemon-icons/pikachu-original-cap.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 90,
      "total": 320
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 10095,
    "slug": "pikachu-hoenn-cap",
    "speciesKey": "pikachu",
    "nameJa": "ピカチュウ（ホウエンキャップ）",
    "nameEn": "Hoenn Cap Pikachu",
    "imagePath": "pokemon-icons/pikachu-hoenn-cap.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 90,
      "total": 320
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 10096,
    "slug": "pikachu-sinnoh-cap",
    "speciesKey": "pikachu",
    "nameJa": "ピカチュウ（シンオウキャップ）",
    "nameEn": "Sinnoh Cap Pikachu",
    "imagePath": "pokemon-icons/pikachu-sinnoh-cap.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 90,
      "total": 320
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 10097,
    "slug": "pikachu-unova-cap",
    "speciesKey": "pikachu",
    "nameJa": "ピカチュウ（イッシュキャップ）",
    "nameEn": "Unova Cap Pikachu",
    "imagePath": "pokemon-icons/pikachu-unova-cap.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 90,
      "total": 320
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 10098,
    "slug": "pikachu-kalos-cap",
    "speciesKey": "pikachu",
    "nameJa": "ピカチュウ（カロスキャップ）",
    "nameEn": "Kalos Cap Pikachu",
    "imagePath": "pokemon-icons/pikachu-kalos-cap.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 90,
      "total": 320
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 10099,
    "slug": "pikachu-alola-cap",
    "speciesKey": "pikachu",
    "nameJa": "ピカチュウ（アローラキャップ）",
    "nameEn": "Alola Cap Pikachu",
    "imagePath": "pokemon-icons/pikachu-alola-cap.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 90,
      "total": 320
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 10148,
    "slug": "pikachu-partner-cap",
    "speciesKey": "pikachu",
    "nameJa": "ピカチュウ（キミにきめたキャップ）",
    "nameEn": "Partner Cap Pikachu",
    "imagePath": "pokemon-icons/pikachu-partner-cap.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 90,
      "total": 320
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター ウルトラサン・ウルトラムーン",
    "isDefault": false
  },
  {
    "id": 10158,
    "slug": "pikachu-starter",
    "speciesKey": "pikachu",
    "nameJa": "ピカチュウ",
    "nameEn": "Partner Pikachu",
    "imagePath": "pokemon-icons/pikachu-starter.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 80,
      "defense": 50,
      "specialAttack": 75,
      "specialDefense": 60,
      "speed": 120,
      "total": 430
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター Let's Go! ピカチュウ・イーブイ",
    "isDefault": false
  },
  {
    "id": 10160,
    "slug": "pikachu-world-cap",
    "speciesKey": "pikachu",
    "nameJa": "ピカチュウ（ワールドキャップ）",
    "nameEn": "World Cap Pikachu",
    "imagePath": "pokemon-icons/pikachu-world-cap.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 90,
      "total": 320
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 10199,
    "slug": "pikachu-gmax",
    "speciesKey": "pikachu",
    "nameJa": "ピカチュウ（キョダイマックスのすがた）",
    "nameEn": "Gigantamax Pikachu",
    "imagePath": "pokemon-icons/pikachu-gmax.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 90,
      "total": 320
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 26,
    "slug": "raichu",
    "speciesKey": "raichu",
    "nameJa": "ライチュウ",
    "nameEn": "Raichu",
    "imagePath": "pokemon-icons/raichu.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 90,
      "defense": 55,
      "specialAttack": 90,
      "specialDefense": 80,
      "speed": 110,
      "total": 485
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10100,
    "slug": "raichu-alola",
    "speciesKey": "raichu",
    "nameJa": "ライチュウ（アローラのすがた）",
    "nameEn": "Alolan Raichu",
    "imagePath": "pokemon-icons/raichu-alola.png",
    "types": [
      "electric",
      "psychic"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 85,
      "defense": 50,
      "specialAttack": 95,
      "specialDefense": 85,
      "speed": 110,
      "total": 485
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 10304,
    "slug": "raichu-mega-x",
    "speciesKey": "raichu",
    "nameJa": "メガライチュウX",
    "nameEn": "Mega Raichu X",
    "imagePath": "pokemon-icons/raichu-mega-x.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 135,
      "defense": 95,
      "specialAttack": 90,
      "specialDefense": 95,
      "speed": 110,
      "total": 585
    },
    "generation": 1,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 10305,
    "slug": "raichu-mega-y",
    "speciesKey": "raichu",
    "nameJa": "メガライチュウY",
    "nameEn": "Mega Raichu Y",
    "imagePath": "pokemon-icons/raichu-mega-y.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 100,
      "defense": 55,
      "specialAttack": 160,
      "specialDefense": 80,
      "speed": 130,
      "total": 585
    },
    "generation": 1,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 27,
    "slug": "sandshrew",
    "speciesKey": "sandshrew",
    "nameJa": "サンド",
    "nameEn": "Sandshrew",
    "imagePath": "pokemon-icons/sandshrew.png",
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 75,
      "defense": 85,
      "specialAttack": 20,
      "specialDefense": 30,
      "speed": 40,
      "total": 300
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10101,
    "slug": "sandshrew-alola",
    "speciesKey": "sandshrew",
    "nameJa": "サンド（アローラのすがた）",
    "nameEn": "Alolan Sandshrew",
    "imagePath": "pokemon-icons/sandshrew-alola.png",
    "types": [
      "ice",
      "steel"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 75,
      "defense": 90,
      "specialAttack": 10,
      "specialDefense": 35,
      "speed": 40,
      "total": 300
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 28,
    "slug": "sandslash",
    "speciesKey": "sandslash",
    "nameJa": "サンドパン",
    "nameEn": "Sandslash",
    "imagePath": "pokemon-icons/sandslash.png",
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 100,
      "defense": 110,
      "specialAttack": 45,
      "specialDefense": 55,
      "speed": 65,
      "total": 450
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10102,
    "slug": "sandslash-alola",
    "speciesKey": "sandslash",
    "nameJa": "サンドパン（アローラのすがた）",
    "nameEn": "Alolan Sandslash",
    "imagePath": "pokemon-icons/sandslash-alola.png",
    "types": [
      "ice",
      "steel"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 100,
      "defense": 120,
      "specialAttack": 25,
      "specialDefense": 65,
      "speed": 65,
      "total": 450
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 29,
    "slug": "nidoran-f",
    "speciesKey": "nidoran-f",
    "nameJa": "ニドラン♀",
    "nameEn": "Nidoran♀",
    "imagePath": "pokemon-icons/nidoran-f.png",
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 47,
      "defense": 52,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 41,
      "total": 275
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 30,
    "slug": "nidorina",
    "speciesKey": "nidorina",
    "nameJa": "ニドリーナ",
    "nameEn": "Nidorina",
    "imagePath": "pokemon-icons/nidorina.png",
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 62,
      "defense": 67,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 56,
      "total": 365
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 31,
    "slug": "nidoqueen",
    "speciesKey": "nidoqueen",
    "nameJa": "ニドクイン",
    "nameEn": "Nidoqueen",
    "imagePath": "pokemon-icons/nidoqueen.png",
    "types": [
      "poison",
      "ground"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 92,
      "defense": 87,
      "specialAttack": 75,
      "specialDefense": 85,
      "speed": 76,
      "total": 505
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 32,
    "slug": "nidoran-m",
    "speciesKey": "nidoran-m",
    "nameJa": "ニドラン♂",
    "nameEn": "Nidoran♂",
    "imagePath": "pokemon-icons/nidoran-m.png",
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 46,
      "attack": 57,
      "defense": 40,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 50,
      "total": 273
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 33,
    "slug": "nidorino",
    "speciesKey": "nidorino",
    "nameJa": "ニドリーノ",
    "nameEn": "Nidorino",
    "imagePath": "pokemon-icons/nidorino.png",
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 61,
      "attack": 72,
      "defense": 57,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 65,
      "total": 365
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 34,
    "slug": "nidoking",
    "speciesKey": "nidoking",
    "nameJa": "ニドキング",
    "nameEn": "Nidoking",
    "imagePath": "pokemon-icons/nidoking.png",
    "types": [
      "poison",
      "ground"
    ],
    "baseStats": {
      "hp": 81,
      "attack": 102,
      "defense": 77,
      "specialAttack": 85,
      "specialDefense": 75,
      "speed": 85,
      "total": 505
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 35,
    "slug": "clefairy",
    "speciesKey": "clefairy",
    "nameJa": "ピッピ",
    "nameEn": "Clefairy",
    "imagePath": "pokemon-icons/clefairy.png",
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 45,
      "defense": 48,
      "specialAttack": 60,
      "specialDefense": 65,
      "speed": 35,
      "total": 323
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 36,
    "slug": "clefable",
    "speciesKey": "clefable",
    "nameJa": "ピクシー",
    "nameEn": "Clefable",
    "imagePath": "pokemon-icons/clefable.png",
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 70,
      "defense": 73,
      "specialAttack": 95,
      "specialDefense": 90,
      "speed": 60,
      "total": 483
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10278,
    "slug": "clefable-mega",
    "speciesKey": "clefable",
    "nameJa": "メガピクシー",
    "nameEn": "Mega Clefable",
    "imagePath": "pokemon-icons/clefable-mega.png",
    "types": [
      "fairy",
      "flying"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 80,
      "defense": 93,
      "specialAttack": 135,
      "specialDefense": 110,
      "speed": 70,
      "total": 583
    },
    "generation": 1,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 37,
    "slug": "vulpix",
    "speciesKey": "vulpix",
    "nameJa": "ロコン",
    "nameEn": "Vulpix",
    "imagePath": "pokemon-icons/vulpix.png",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 38,
      "attack": 41,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 65,
      "speed": 65,
      "total": 299
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10103,
    "slug": "vulpix-alola",
    "speciesKey": "vulpix",
    "nameJa": "ロコン（アローラのすがた）",
    "nameEn": "Alolan Vulpix",
    "imagePath": "pokemon-icons/vulpix-alola.png",
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 38,
      "attack": 41,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 65,
      "speed": 65,
      "total": 299
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 38,
    "slug": "ninetales",
    "speciesKey": "ninetales",
    "nameJa": "キュウコン",
    "nameEn": "Ninetales",
    "imagePath": "pokemon-icons/ninetales.png",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 73,
      "attack": 76,
      "defense": 75,
      "specialAttack": 81,
      "specialDefense": 100,
      "speed": 100,
      "total": 505
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10104,
    "slug": "ninetales-alola",
    "speciesKey": "ninetales",
    "nameJa": "キュウコン（アローラのすがた）",
    "nameEn": "Alolan Ninetales",
    "imagePath": "pokemon-icons/ninetales-alola.png",
    "types": [
      "ice",
      "fairy"
    ],
    "baseStats": {
      "hp": 73,
      "attack": 67,
      "defense": 75,
      "specialAttack": 81,
      "specialDefense": 100,
      "speed": 109,
      "total": 505
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 39,
    "slug": "jigglypuff",
    "speciesKey": "jigglypuff",
    "nameJa": "プリン",
    "nameEn": "Jigglypuff",
    "imagePath": "pokemon-icons/jigglypuff.png",
    "types": [
      "normal",
      "fairy"
    ],
    "baseStats": {
      "hp": 115,
      "attack": 45,
      "defense": 20,
      "specialAttack": 45,
      "specialDefense": 25,
      "speed": 20,
      "total": 270
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 40,
    "slug": "wigglytuff",
    "speciesKey": "wigglytuff",
    "nameJa": "プクリン",
    "nameEn": "Wigglytuff",
    "imagePath": "pokemon-icons/wigglytuff.png",
    "types": [
      "normal",
      "fairy"
    ],
    "baseStats": {
      "hp": 140,
      "attack": 70,
      "defense": 45,
      "specialAttack": 85,
      "specialDefense": 50,
      "speed": 45,
      "total": 435
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 41,
    "slug": "zubat",
    "speciesKey": "zubat",
    "nameJa": "ズバット",
    "nameEn": "Zubat",
    "imagePath": "pokemon-icons/zubat.png",
    "types": [
      "poison",
      "flying"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 45,
      "defense": 35,
      "specialAttack": 30,
      "specialDefense": 40,
      "speed": 55,
      "total": 245
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 42,
    "slug": "golbat",
    "speciesKey": "golbat",
    "nameJa": "ゴルバット",
    "nameEn": "Golbat",
    "imagePath": "pokemon-icons/golbat.png",
    "types": [
      "poison",
      "flying"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 80,
      "defense": 70,
      "specialAttack": 65,
      "specialDefense": 75,
      "speed": 90,
      "total": 455
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 43,
    "slug": "oddish",
    "speciesKey": "oddish",
    "nameJa": "ナゾノクサ",
    "nameEn": "Oddish",
    "imagePath": "pokemon-icons/oddish.png",
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 50,
      "defense": 55,
      "specialAttack": 75,
      "specialDefense": 65,
      "speed": 30,
      "total": 320
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 44,
    "slug": "gloom",
    "speciesKey": "gloom",
    "nameJa": "クサイハナ",
    "nameEn": "Gloom",
    "imagePath": "pokemon-icons/gloom.png",
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 65,
      "defense": 70,
      "specialAttack": 85,
      "specialDefense": 75,
      "speed": 40,
      "total": 395
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 45,
    "slug": "vileplume",
    "speciesKey": "vileplume",
    "nameJa": "ラフレシア",
    "nameEn": "Vileplume",
    "imagePath": "pokemon-icons/vileplume.png",
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 80,
      "defense": 85,
      "specialAttack": 110,
      "specialDefense": 90,
      "speed": 50,
      "total": 490
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 46,
    "slug": "paras",
    "speciesKey": "paras",
    "nameJa": "パラス",
    "nameEn": "Paras",
    "imagePath": "pokemon-icons/paras.png",
    "types": [
      "bug",
      "grass"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 70,
      "defense": 55,
      "specialAttack": 45,
      "specialDefense": 55,
      "speed": 25,
      "total": 285
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 47,
    "slug": "parasect",
    "speciesKey": "parasect",
    "nameJa": "パラセクト",
    "nameEn": "Parasect",
    "imagePath": "pokemon-icons/parasect.png",
    "types": [
      "bug",
      "grass"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 95,
      "defense": 80,
      "specialAttack": 60,
      "specialDefense": 80,
      "speed": 30,
      "total": 405
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 48,
    "slug": "venonat",
    "speciesKey": "venonat",
    "nameJa": "コンパン",
    "nameEn": "Venonat",
    "imagePath": "pokemon-icons/venonat.png",
    "types": [
      "bug",
      "poison"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 55,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 55,
      "speed": 45,
      "total": 305
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 49,
    "slug": "venomoth",
    "speciesKey": "venomoth",
    "nameJa": "モルフォン",
    "nameEn": "Venomoth",
    "imagePath": "pokemon-icons/venomoth.png",
    "types": [
      "bug",
      "poison"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 65,
      "defense": 60,
      "specialAttack": 90,
      "specialDefense": 75,
      "speed": 90,
      "total": 450
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 50,
    "slug": "diglett",
    "speciesKey": "diglett",
    "nameJa": "ディグダ",
    "nameEn": "Diglett",
    "imagePath": "pokemon-icons/diglett.png",
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 10,
      "attack": 55,
      "defense": 25,
      "specialAttack": 35,
      "specialDefense": 45,
      "speed": 95,
      "total": 265
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10105,
    "slug": "diglett-alola",
    "speciesKey": "diglett",
    "nameJa": "ディグダ（アローラのすがた）",
    "nameEn": "Alolan Diglett",
    "imagePath": "pokemon-icons/diglett-alola.png",
    "types": [
      "ground",
      "steel"
    ],
    "baseStats": {
      "hp": 10,
      "attack": 55,
      "defense": 30,
      "specialAttack": 35,
      "specialDefense": 45,
      "speed": 90,
      "total": 265
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 51,
    "slug": "dugtrio",
    "speciesKey": "dugtrio",
    "nameJa": "ダグトリオ",
    "nameEn": "Dugtrio",
    "imagePath": "pokemon-icons/dugtrio.png",
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 100,
      "defense": 50,
      "specialAttack": 50,
      "specialDefense": 70,
      "speed": 120,
      "total": 425
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10106,
    "slug": "dugtrio-alola",
    "speciesKey": "dugtrio",
    "nameJa": "ダグトリオ（アローラのすがた）",
    "nameEn": "Alolan Dugtrio",
    "imagePath": "pokemon-icons/dugtrio-alola.png",
    "types": [
      "ground",
      "steel"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 100,
      "defense": 60,
      "specialAttack": 50,
      "specialDefense": 70,
      "speed": 110,
      "total": 425
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 52,
    "slug": "meowth",
    "speciesKey": "meowth",
    "nameJa": "ニャース",
    "nameEn": "Meowth",
    "imagePath": "pokemon-icons/meowth.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 45,
      "defense": 35,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 90,
      "total": 290
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10107,
    "slug": "meowth-alola",
    "speciesKey": "meowth",
    "nameJa": "ニャース（アローラのすがた）",
    "nameEn": "Alolan Meowth",
    "imagePath": "pokemon-icons/meowth-alola.png",
    "types": [
      "dark"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 35,
      "defense": 35,
      "specialAttack": 50,
      "specialDefense": 40,
      "speed": 90,
      "total": 290
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 10161,
    "slug": "meowth-galar",
    "speciesKey": "meowth",
    "nameJa": "ニャース（ガラルのすがた）",
    "nameEn": "Galarian Meowth",
    "imagePath": "pokemon-icons/meowth-galar.png",
    "types": [
      "steel"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 65,
      "defense": 55,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 40,
      "total": 290
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 10200,
    "slug": "meowth-gmax",
    "speciesKey": "meowth",
    "nameJa": "ニャース（キョダイマックスのすがた）",
    "nameEn": "Gigantamax Meowth",
    "imagePath": "pokemon-icons/meowth-gmax.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 45,
      "defense": 35,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 90,
      "total": 290
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 53,
    "slug": "persian",
    "speciesKey": "persian",
    "nameJa": "ペルシアン",
    "nameEn": "Persian",
    "imagePath": "pokemon-icons/persian.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 70,
      "defense": 60,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 115,
      "total": 440
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10108,
    "slug": "persian-alola",
    "speciesKey": "persian",
    "nameJa": "ペルシアン（アローラのすがた）",
    "nameEn": "Alolan Persian",
    "imagePath": "pokemon-icons/persian-alola.png",
    "types": [
      "dark"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 60,
      "defense": 60,
      "specialAttack": 75,
      "specialDefense": 65,
      "speed": 115,
      "total": 440
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 54,
    "slug": "psyduck",
    "speciesKey": "psyduck",
    "nameJa": "コダック",
    "nameEn": "Psyduck",
    "imagePath": "pokemon-icons/psyduck.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 52,
      "defense": 48,
      "specialAttack": 65,
      "specialDefense": 50,
      "speed": 55,
      "total": 320
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 55,
    "slug": "golduck",
    "speciesKey": "golduck",
    "nameJa": "ゴルダック",
    "nameEn": "Golduck",
    "imagePath": "pokemon-icons/golduck.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 82,
      "defense": 78,
      "specialAttack": 95,
      "specialDefense": 80,
      "speed": 85,
      "total": 500
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 56,
    "slug": "mankey",
    "speciesKey": "mankey",
    "nameJa": "マンキー",
    "nameEn": "Mankey",
    "imagePath": "pokemon-icons/mankey.png",
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 80,
      "defense": 35,
      "specialAttack": 35,
      "specialDefense": 45,
      "speed": 70,
      "total": 305
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 57,
    "slug": "primeape",
    "speciesKey": "primeape",
    "nameJa": "オコリザル",
    "nameEn": "Primeape",
    "imagePath": "pokemon-icons/primeape.png",
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 105,
      "defense": 60,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 95,
      "total": 455
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 58,
    "slug": "growlithe",
    "speciesKey": "growlithe",
    "nameJa": "ガーディ",
    "nameEn": "Growlithe",
    "imagePath": "pokemon-icons/growlithe.png",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 70,
      "defense": 45,
      "specialAttack": 70,
      "specialDefense": 50,
      "speed": 60,
      "total": 350
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10229,
    "slug": "growlithe-hisui",
    "speciesKey": "growlithe",
    "nameJa": "ガーディ（ヒスイのすがた）",
    "nameEn": "Hisuian Growlithe",
    "imagePath": "pokemon-icons/growlithe-hisui.png",
    "types": [
      "fire",
      "rock"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 75,
      "defense": 45,
      "specialAttack": 65,
      "specialDefense": 50,
      "speed": 55,
      "total": 350
    },
    "generation": 1,
    "debutTitle": "Pokemon LEGENDS アルセウス",
    "isDefault": false
  },
  {
    "id": 59,
    "slug": "arcanine",
    "speciesKey": "arcanine",
    "nameJa": "ウインディ",
    "nameEn": "Arcanine",
    "imagePath": "pokemon-icons/arcanine.png",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 110,
      "defense": 80,
      "specialAttack": 100,
      "specialDefense": 80,
      "speed": 95,
      "total": 555
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10230,
    "slug": "arcanine-hisui",
    "speciesKey": "arcanine",
    "nameJa": "ウインディ（ヒスイのすがた）",
    "nameEn": "Hisuian Arcanine",
    "imagePath": "pokemon-icons/arcanine-hisui.png",
    "types": [
      "fire",
      "rock"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 115,
      "defense": 80,
      "specialAttack": 95,
      "specialDefense": 80,
      "speed": 90,
      "total": 555
    },
    "generation": 1,
    "debutTitle": "Pokemon LEGENDS アルセウス",
    "isDefault": false
  },
  {
    "id": 60,
    "slug": "poliwag",
    "speciesKey": "poliwag",
    "nameJa": "ニョロモ",
    "nameEn": "Poliwag",
    "imagePath": "pokemon-icons/poliwag.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 50,
      "defense": 40,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 90,
      "total": 300
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 61,
    "slug": "poliwhirl",
    "speciesKey": "poliwhirl",
    "nameJa": "ニョロゾ",
    "nameEn": "Poliwhirl",
    "imagePath": "pokemon-icons/poliwhirl.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 65,
      "defense": 65,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 90,
      "total": 385
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 62,
    "slug": "poliwrath",
    "speciesKey": "poliwrath",
    "nameJa": "ニョロボン",
    "nameEn": "Poliwrath",
    "imagePath": "pokemon-icons/poliwrath.png",
    "types": [
      "water",
      "fighting"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 95,
      "defense": 95,
      "specialAttack": 70,
      "specialDefense": 90,
      "speed": 70,
      "total": 510
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 63,
    "slug": "abra",
    "speciesKey": "abra",
    "nameJa": "ケーシィ",
    "nameEn": "Abra",
    "imagePath": "pokemon-icons/abra.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 25,
      "attack": 20,
      "defense": 15,
      "specialAttack": 105,
      "specialDefense": 55,
      "speed": 90,
      "total": 310
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 64,
    "slug": "kadabra",
    "speciesKey": "kadabra",
    "nameJa": "ユンゲラー",
    "nameEn": "Kadabra",
    "imagePath": "pokemon-icons/kadabra.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 35,
      "defense": 30,
      "specialAttack": 120,
      "specialDefense": 70,
      "speed": 105,
      "total": 400
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 65,
    "slug": "alakazam",
    "speciesKey": "alakazam",
    "nameJa": "フーディン",
    "nameEn": "Alakazam",
    "imagePath": "pokemon-icons/alakazam.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 50,
      "defense": 45,
      "specialAttack": 135,
      "specialDefense": 95,
      "speed": 120,
      "total": 500
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10037,
    "slug": "alakazam-mega",
    "speciesKey": "alakazam",
    "nameJa": "メガフーディン",
    "nameEn": "Mega Alakazam",
    "imagePath": "pokemon-icons/alakazam-mega.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 50,
      "defense": 65,
      "specialAttack": 175,
      "specialDefense": 105,
      "speed": 150,
      "total": 600
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": false
  },
  {
    "id": 66,
    "slug": "machop",
    "speciesKey": "machop",
    "nameJa": "ワンリキー",
    "nameEn": "Machop",
    "imagePath": "pokemon-icons/machop.png",
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 80,
      "defense": 50,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 35,
      "total": 305
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 67,
    "slug": "machoke",
    "speciesKey": "machoke",
    "nameJa": "ゴーリキー",
    "nameEn": "Machoke",
    "imagePath": "pokemon-icons/machoke.png",
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 100,
      "defense": 70,
      "specialAttack": 50,
      "specialDefense": 60,
      "speed": 45,
      "total": 405
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 68,
    "slug": "machamp",
    "speciesKey": "machamp",
    "nameJa": "カイリキー",
    "nameEn": "Machamp",
    "imagePath": "pokemon-icons/machamp.png",
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 130,
      "defense": 80,
      "specialAttack": 65,
      "specialDefense": 85,
      "speed": 55,
      "total": 505
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10201,
    "slug": "machamp-gmax",
    "speciesKey": "machamp",
    "nameJa": "カイリキー（キョダイマックスのすがた）",
    "nameEn": "Gigantamax Machamp",
    "imagePath": "pokemon-icons/machamp-gmax.png",
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 130,
      "defense": 80,
      "specialAttack": 65,
      "specialDefense": 85,
      "speed": 55,
      "total": 505
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 69,
    "slug": "bellsprout",
    "speciesKey": "bellsprout",
    "nameJa": "マダツボミ",
    "nameEn": "Bellsprout",
    "imagePath": "pokemon-icons/bellsprout.png",
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 75,
      "defense": 35,
      "specialAttack": 70,
      "specialDefense": 30,
      "speed": 40,
      "total": 300
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 70,
    "slug": "weepinbell",
    "speciesKey": "weepinbell",
    "nameJa": "ウツドン",
    "nameEn": "Weepinbell",
    "imagePath": "pokemon-icons/weepinbell.png",
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 90,
      "defense": 50,
      "specialAttack": 85,
      "specialDefense": 45,
      "speed": 55,
      "total": 390
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 71,
    "slug": "victreebel",
    "speciesKey": "victreebel",
    "nameJa": "ウツボット",
    "nameEn": "Victreebel",
    "imagePath": "pokemon-icons/victreebel.png",
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 105,
      "defense": 65,
      "specialAttack": 100,
      "specialDefense": 70,
      "speed": 70,
      "total": 490
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10279,
    "slug": "victreebel-mega",
    "speciesKey": "victreebel",
    "nameJa": "メガウツボット",
    "nameEn": "Mega Victreebel",
    "imagePath": "pokemon-icons/victreebel-mega.png",
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 125,
      "defense": 85,
      "specialAttack": 135,
      "specialDefense": 95,
      "speed": 70,
      "total": 590
    },
    "generation": 1,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 72,
    "slug": "tentacool",
    "speciesKey": "tentacool",
    "nameJa": "メノクラゲ",
    "nameEn": "Tentacool",
    "imagePath": "pokemon-icons/tentacool.png",
    "types": [
      "water",
      "poison"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 40,
      "defense": 35,
      "specialAttack": 50,
      "specialDefense": 100,
      "speed": 70,
      "total": 335
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 73,
    "slug": "tentacruel",
    "speciesKey": "tentacruel",
    "nameJa": "ドククラゲ",
    "nameEn": "Tentacruel",
    "imagePath": "pokemon-icons/tentacruel.png",
    "types": [
      "water",
      "poison"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 70,
      "defense": 65,
      "specialAttack": 80,
      "specialDefense": 120,
      "speed": 100,
      "total": 515
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 74,
    "slug": "geodude",
    "speciesKey": "geodude",
    "nameJa": "イシツブテ",
    "nameEn": "Geodude",
    "imagePath": "pokemon-icons/geodude.png",
    "types": [
      "rock",
      "ground"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 80,
      "defense": 100,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 20,
      "total": 300
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10109,
    "slug": "geodude-alola",
    "speciesKey": "geodude",
    "nameJa": "イシツブテ（アローラのすがた）",
    "nameEn": "Alolan Geodude",
    "imagePath": "pokemon-icons/geodude-alola.png",
    "types": [
      "rock",
      "electric"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 80,
      "defense": 100,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 20,
      "total": 300
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 75,
    "slug": "graveler",
    "speciesKey": "graveler",
    "nameJa": "ゴローン",
    "nameEn": "Graveler",
    "imagePath": "pokemon-icons/graveler.png",
    "types": [
      "rock",
      "ground"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 95,
      "defense": 115,
      "specialAttack": 45,
      "specialDefense": 45,
      "speed": 35,
      "total": 390
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10110,
    "slug": "graveler-alola",
    "speciesKey": "graveler",
    "nameJa": "ゴローン（アローラのすがた）",
    "nameEn": "Alolan Graveler",
    "imagePath": "pokemon-icons/graveler-alola.png",
    "types": [
      "rock",
      "electric"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 95,
      "defense": 115,
      "specialAttack": 45,
      "specialDefense": 45,
      "speed": 35,
      "total": 390
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 76,
    "slug": "golem",
    "speciesKey": "golem",
    "nameJa": "ゴローニャ",
    "nameEn": "Golem",
    "imagePath": "pokemon-icons/golem.png",
    "types": [
      "rock",
      "ground"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 120,
      "defense": 130,
      "specialAttack": 55,
      "specialDefense": 65,
      "speed": 45,
      "total": 495
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10111,
    "slug": "golem-alola",
    "speciesKey": "golem",
    "nameJa": "ゴローニャ（アローラのすがた）",
    "nameEn": "Alolan Golem",
    "imagePath": "pokemon-icons/golem-alola.png",
    "types": [
      "rock",
      "electric"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 120,
      "defense": 130,
      "specialAttack": 55,
      "specialDefense": 65,
      "speed": 45,
      "total": 495
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 77,
    "slug": "ponyta",
    "speciesKey": "ponyta",
    "nameJa": "ポニータ",
    "nameEn": "Ponyta",
    "imagePath": "pokemon-icons/ponyta.png",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 85,
      "defense": 55,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 90,
      "total": 410
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10162,
    "slug": "ponyta-galar",
    "speciesKey": "ponyta",
    "nameJa": "ポニータ（ガラルのすがた）",
    "nameEn": "Galarian Ponyta",
    "imagePath": "pokemon-icons/ponyta-galar.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 85,
      "defense": 55,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 90,
      "total": 410
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 78,
    "slug": "rapidash",
    "speciesKey": "rapidash",
    "nameJa": "ギャロップ",
    "nameEn": "Rapidash",
    "imagePath": "pokemon-icons/rapidash.png",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 100,
      "defense": 70,
      "specialAttack": 80,
      "specialDefense": 80,
      "speed": 105,
      "total": 500
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10163,
    "slug": "rapidash-galar",
    "speciesKey": "rapidash",
    "nameJa": "ギャロップ（ガラルのすがた）",
    "nameEn": "Galarian Rapidash",
    "imagePath": "pokemon-icons/rapidash-galar.png",
    "types": [
      "psychic",
      "fairy"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 100,
      "defense": 70,
      "specialAttack": 80,
      "specialDefense": 80,
      "speed": 105,
      "total": 500
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 79,
    "slug": "slowpoke",
    "speciesKey": "slowpoke",
    "nameJa": "ヤドン",
    "nameEn": "Slowpoke",
    "imagePath": "pokemon-icons/slowpoke.png",
    "types": [
      "water",
      "psychic"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 65,
      "defense": 65,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 15,
      "total": 315
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10164,
    "slug": "slowpoke-galar",
    "speciesKey": "slowpoke",
    "nameJa": "ヤドン（ガラルのすがた）",
    "nameEn": "Galarian Slowpoke",
    "imagePath": "pokemon-icons/slowpoke-galar.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 65,
      "defense": 65,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 15,
      "total": 315
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 80,
    "slug": "slowbro",
    "speciesKey": "slowbro",
    "nameJa": "ヤドラン",
    "nameEn": "Slowbro",
    "imagePath": "pokemon-icons/slowbro.png",
    "types": [
      "water",
      "psychic"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 75,
      "defense": 110,
      "specialAttack": 100,
      "specialDefense": 80,
      "speed": 30,
      "total": 490
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10071,
    "slug": "slowbro-mega",
    "speciesKey": "slowbro",
    "nameJa": "メガヤドラン",
    "nameEn": "Mega Slowbro",
    "imagePath": "pokemon-icons/slowbro-mega.png",
    "types": [
      "water",
      "psychic"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 75,
      "defense": 180,
      "specialAttack": 130,
      "specialDefense": 80,
      "speed": 30,
      "total": 590
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター オメガルビー・アルファサファイア",
    "isDefault": false
  },
  {
    "id": 10165,
    "slug": "slowbro-galar",
    "speciesKey": "slowbro",
    "nameJa": "ヤドラン（ガラルのすがた）",
    "nameEn": "Galarian Slowbro",
    "imagePath": "pokemon-icons/slowbro-galar.png",
    "types": [
      "poison",
      "psychic"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 100,
      "defense": 95,
      "specialAttack": 100,
      "specialDefense": 70,
      "speed": 30,
      "total": 490
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 81,
    "slug": "magnemite",
    "speciesKey": "magnemite",
    "nameJa": "コイル",
    "nameEn": "Magnemite",
    "imagePath": "pokemon-icons/magnemite.png",
    "types": [
      "electric",
      "steel"
    ],
    "baseStats": {
      "hp": 25,
      "attack": 35,
      "defense": 70,
      "specialAttack": 95,
      "specialDefense": 55,
      "speed": 45,
      "total": 325
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 82,
    "slug": "magneton",
    "speciesKey": "magneton",
    "nameJa": "レアコイル",
    "nameEn": "Magneton",
    "imagePath": "pokemon-icons/magneton.png",
    "types": [
      "electric",
      "steel"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 60,
      "defense": 95,
      "specialAttack": 120,
      "specialDefense": 70,
      "speed": 70,
      "total": 465
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 83,
    "slug": "farfetchd",
    "speciesKey": "farfetchd",
    "nameJa": "カモネギ",
    "nameEn": "Farfetch’d",
    "imagePath": "pokemon-icons/farfetchd.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 52,
      "attack": 90,
      "defense": 55,
      "specialAttack": 58,
      "specialDefense": 62,
      "speed": 60,
      "total": 377
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10166,
    "slug": "farfetchd-galar",
    "speciesKey": "farfetchd",
    "nameJa": "カモネギ（ガラルのすがた）",
    "nameEn": "Galarian Farfetch’d",
    "imagePath": "pokemon-icons/farfetchd-galar.png",
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 52,
      "attack": 95,
      "defense": 55,
      "specialAttack": 58,
      "specialDefense": 62,
      "speed": 55,
      "total": 377
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 84,
    "slug": "doduo",
    "speciesKey": "doduo",
    "nameJa": "ドードー",
    "nameEn": "Doduo",
    "imagePath": "pokemon-icons/doduo.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 85,
      "defense": 45,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 75,
      "total": 310
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 85,
    "slug": "dodrio",
    "speciesKey": "dodrio",
    "nameJa": "ドードリオ",
    "nameEn": "Dodrio",
    "imagePath": "pokemon-icons/dodrio.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 110,
      "defense": 70,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 110,
      "total": 470
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 86,
    "slug": "seel",
    "speciesKey": "seel",
    "nameJa": "パウワウ",
    "nameEn": "Seel",
    "imagePath": "pokemon-icons/seel.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 45,
      "defense": 55,
      "specialAttack": 45,
      "specialDefense": 70,
      "speed": 45,
      "total": 325
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 87,
    "slug": "dewgong",
    "speciesKey": "dewgong",
    "nameJa": "ジュゴン",
    "nameEn": "Dewgong",
    "imagePath": "pokemon-icons/dewgong.png",
    "types": [
      "water",
      "ice"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 70,
      "defense": 80,
      "specialAttack": 70,
      "specialDefense": 95,
      "speed": 70,
      "total": 475
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 88,
    "slug": "grimer",
    "speciesKey": "grimer",
    "nameJa": "ベトベター",
    "nameEn": "Grimer",
    "imagePath": "pokemon-icons/grimer.png",
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 80,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 25,
      "total": 325
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10112,
    "slug": "grimer-alola",
    "speciesKey": "grimer",
    "nameJa": "ベトベター（アローラのすがた）",
    "nameEn": "Alolan Grimer",
    "imagePath": "pokemon-icons/grimer-alola.png",
    "types": [
      "poison",
      "dark"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 80,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 25,
      "total": 325
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 89,
    "slug": "muk",
    "speciesKey": "muk",
    "nameJa": "ベトベトン",
    "nameEn": "Muk",
    "imagePath": "pokemon-icons/muk.png",
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 105,
      "attack": 105,
      "defense": 75,
      "specialAttack": 65,
      "specialDefense": 100,
      "speed": 50,
      "total": 500
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10113,
    "slug": "muk-alola",
    "speciesKey": "muk",
    "nameJa": "ベトベトン（アローラのすがた）",
    "nameEn": "Alolan Muk",
    "imagePath": "pokemon-icons/muk-alola.png",
    "types": [
      "poison",
      "dark"
    ],
    "baseStats": {
      "hp": 105,
      "attack": 105,
      "defense": 75,
      "specialAttack": 65,
      "specialDefense": 100,
      "speed": 50,
      "total": 500
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 90,
    "slug": "shellder",
    "speciesKey": "shellder",
    "nameJa": "シェルダー",
    "nameEn": "Shellder",
    "imagePath": "pokemon-icons/shellder.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 30,
      "attack": 65,
      "defense": 100,
      "specialAttack": 45,
      "specialDefense": 25,
      "speed": 40,
      "total": 305
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 91,
    "slug": "cloyster",
    "speciesKey": "cloyster",
    "nameJa": "パルシェン",
    "nameEn": "Cloyster",
    "imagePath": "pokemon-icons/cloyster.png",
    "types": [
      "water",
      "ice"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 95,
      "defense": 180,
      "specialAttack": 85,
      "specialDefense": 45,
      "speed": 70,
      "total": 525
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 92,
    "slug": "gastly",
    "speciesKey": "gastly",
    "nameJa": "ゴース",
    "nameEn": "Gastly",
    "imagePath": "pokemon-icons/gastly.png",
    "types": [
      "ghost",
      "poison"
    ],
    "baseStats": {
      "hp": 30,
      "attack": 35,
      "defense": 30,
      "specialAttack": 100,
      "specialDefense": 35,
      "speed": 80,
      "total": 310
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 93,
    "slug": "haunter",
    "speciesKey": "haunter",
    "nameJa": "ゴースト",
    "nameEn": "Haunter",
    "imagePath": "pokemon-icons/haunter.png",
    "types": [
      "ghost",
      "poison"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 50,
      "defense": 45,
      "specialAttack": 115,
      "specialDefense": 55,
      "speed": 95,
      "total": 405
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 94,
    "slug": "gengar",
    "speciesKey": "gengar",
    "nameJa": "ゲンガー",
    "nameEn": "Gengar",
    "imagePath": "pokemon-icons/gengar.png",
    "types": [
      "ghost",
      "poison"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 65,
      "defense": 60,
      "specialAttack": 130,
      "specialDefense": 75,
      "speed": 110,
      "total": 500
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10038,
    "slug": "gengar-mega",
    "speciesKey": "gengar",
    "nameJa": "メガゲンガー",
    "nameEn": "Mega Gengar",
    "imagePath": "pokemon-icons/gengar-mega.png",
    "types": [
      "ghost",
      "poison"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 65,
      "defense": 80,
      "specialAttack": 170,
      "specialDefense": 95,
      "speed": 130,
      "total": 600
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": false
  },
  {
    "id": 10202,
    "slug": "gengar-gmax",
    "speciesKey": "gengar",
    "nameJa": "ゲンガー（キョダイマックスのすがた）",
    "nameEn": "Gigantamax Gengar",
    "imagePath": "pokemon-icons/gengar-gmax.png",
    "types": [
      "ghost",
      "poison"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 65,
      "defense": 60,
      "specialAttack": 130,
      "specialDefense": 75,
      "speed": 110,
      "total": 500
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 95,
    "slug": "onix",
    "speciesKey": "onix",
    "nameJa": "イワーク",
    "nameEn": "Onix",
    "imagePath": "pokemon-icons/onix.png",
    "types": [
      "rock",
      "ground"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 45,
      "defense": 160,
      "specialAttack": 30,
      "specialDefense": 45,
      "speed": 70,
      "total": 385
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 96,
    "slug": "drowzee",
    "speciesKey": "drowzee",
    "nameJa": "スリープ",
    "nameEn": "Drowzee",
    "imagePath": "pokemon-icons/drowzee.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 48,
      "defense": 45,
      "specialAttack": 43,
      "specialDefense": 90,
      "speed": 42,
      "total": 328
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 97,
    "slug": "hypno",
    "speciesKey": "hypno",
    "nameJa": "スリーパー",
    "nameEn": "Hypno",
    "imagePath": "pokemon-icons/hypno.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 73,
      "defense": 70,
      "specialAttack": 73,
      "specialDefense": 115,
      "speed": 67,
      "total": 483
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 98,
    "slug": "krabby",
    "speciesKey": "krabby",
    "nameJa": "クラブ",
    "nameEn": "Krabby",
    "imagePath": "pokemon-icons/krabby.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 30,
      "attack": 105,
      "defense": 90,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 50,
      "total": 325
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 99,
    "slug": "kingler",
    "speciesKey": "kingler",
    "nameJa": "キングラー",
    "nameEn": "Kingler",
    "imagePath": "pokemon-icons/kingler.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 130,
      "defense": 115,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 75,
      "total": 475
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10203,
    "slug": "kingler-gmax",
    "speciesKey": "kingler",
    "nameJa": "キングラー（キョダイマックスのすがた）",
    "nameEn": "Gigantamax Kingler",
    "imagePath": "pokemon-icons/kingler-gmax.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 130,
      "defense": 115,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 75,
      "total": 475
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 100,
    "slug": "voltorb",
    "speciesKey": "voltorb",
    "nameJa": "ビリリダマ",
    "nameEn": "Voltorb",
    "imagePath": "pokemon-icons/voltorb.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 30,
      "defense": 50,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 100,
      "total": 330
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10231,
    "slug": "voltorb-hisui",
    "speciesKey": "voltorb",
    "nameJa": "ビリリダマ（ヒスイのすがた）",
    "nameEn": "Hisuian Voltorb",
    "imagePath": "pokemon-icons/voltorb-hisui.png",
    "types": [
      "electric",
      "grass"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 30,
      "defense": 50,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 100,
      "total": 330
    },
    "generation": 1,
    "debutTitle": "Pokemon LEGENDS アルセウス",
    "isDefault": false
  },
  {
    "id": 101,
    "slug": "electrode",
    "speciesKey": "electrode",
    "nameJa": "マルマイン",
    "nameEn": "Electrode",
    "imagePath": "pokemon-icons/electrode.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 50,
      "defense": 70,
      "specialAttack": 80,
      "specialDefense": 80,
      "speed": 150,
      "total": 490
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10232,
    "slug": "electrode-hisui",
    "speciesKey": "electrode",
    "nameJa": "マルマイン（ヒスイのすがた）",
    "nameEn": "Hisuian Electrode",
    "imagePath": "pokemon-icons/electrode-hisui.png",
    "types": [
      "electric",
      "grass"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 50,
      "defense": 70,
      "specialAttack": 80,
      "specialDefense": 80,
      "speed": 150,
      "total": 490
    },
    "generation": 1,
    "debutTitle": "Pokemon LEGENDS アルセウス",
    "isDefault": false
  },
  {
    "id": 102,
    "slug": "exeggcute",
    "speciesKey": "exeggcute",
    "nameJa": "タマタマ",
    "nameEn": "Exeggcute",
    "imagePath": "pokemon-icons/exeggcute.png",
    "types": [
      "grass",
      "psychic"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 40,
      "defense": 80,
      "specialAttack": 60,
      "specialDefense": 45,
      "speed": 40,
      "total": 325
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 103,
    "slug": "exeggutor",
    "speciesKey": "exeggutor",
    "nameJa": "ナッシー",
    "nameEn": "Exeggutor",
    "imagePath": "pokemon-icons/exeggutor.png",
    "types": [
      "grass",
      "psychic"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 95,
      "defense": 85,
      "specialAttack": 125,
      "specialDefense": 75,
      "speed": 55,
      "total": 530
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10114,
    "slug": "exeggutor-alola",
    "speciesKey": "exeggutor",
    "nameJa": "ナッシー（アローラのすがた）",
    "nameEn": "Alolan Exeggutor",
    "imagePath": "pokemon-icons/exeggutor-alola.png",
    "types": [
      "grass",
      "dragon"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 105,
      "defense": 85,
      "specialAttack": 125,
      "specialDefense": 75,
      "speed": 45,
      "total": 530
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 104,
    "slug": "cubone",
    "speciesKey": "cubone",
    "nameJa": "カラカラ",
    "nameEn": "Cubone",
    "imagePath": "pokemon-icons/cubone.png",
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 50,
      "defense": 95,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 35,
      "total": 320
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 105,
    "slug": "marowak",
    "speciesKey": "marowak",
    "nameJa": "ガラガラ",
    "nameEn": "Marowak",
    "imagePath": "pokemon-icons/marowak.png",
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 80,
      "defense": 110,
      "specialAttack": 50,
      "specialDefense": 80,
      "speed": 45,
      "total": 425
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10115,
    "slug": "marowak-alola",
    "speciesKey": "marowak",
    "nameJa": "ガラガラ（アローラのすがた）",
    "nameEn": "Alolan Marowak",
    "imagePath": "pokemon-icons/marowak-alola.png",
    "types": [
      "fire",
      "ghost"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 80,
      "defense": 110,
      "specialAttack": 50,
      "specialDefense": 80,
      "speed": 45,
      "total": 425
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 10149,
    "slug": "marowak-totem",
    "speciesKey": "marowak",
    "nameJa": "ガラガラ",
    "nameEn": "Totem Alolan Marowak",
    "imagePath": "pokemon-icons/marowak-totem.png",
    "types": [
      "fire",
      "ghost"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 80,
      "defense": 110,
      "specialAttack": 50,
      "specialDefense": 80,
      "speed": 45,
      "total": 425
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター ウルトラサン・ウルトラムーン",
    "isDefault": false
  },
  {
    "id": 106,
    "slug": "hitmonlee",
    "speciesKey": "hitmonlee",
    "nameJa": "サワムラー",
    "nameEn": "Hitmonlee",
    "imagePath": "pokemon-icons/hitmonlee.png",
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 120,
      "defense": 53,
      "specialAttack": 35,
      "specialDefense": 110,
      "speed": 87,
      "total": 455
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 107,
    "slug": "hitmonchan",
    "speciesKey": "hitmonchan",
    "nameJa": "エビワラー",
    "nameEn": "Hitmonchan",
    "imagePath": "pokemon-icons/hitmonchan.png",
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 105,
      "defense": 79,
      "specialAttack": 35,
      "specialDefense": 110,
      "speed": 76,
      "total": 455
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 108,
    "slug": "lickitung",
    "speciesKey": "lickitung",
    "nameJa": "ベロリンガ",
    "nameEn": "Lickitung",
    "imagePath": "pokemon-icons/lickitung.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 55,
      "defense": 75,
      "specialAttack": 60,
      "specialDefense": 75,
      "speed": 30,
      "total": 385
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 109,
    "slug": "koffing",
    "speciesKey": "koffing",
    "nameJa": "ドガース",
    "nameEn": "Koffing",
    "imagePath": "pokemon-icons/koffing.png",
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 65,
      "defense": 95,
      "specialAttack": 60,
      "specialDefense": 45,
      "speed": 35,
      "total": 340
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 110,
    "slug": "weezing",
    "speciesKey": "weezing",
    "nameJa": "マタドガス",
    "nameEn": "Weezing",
    "imagePath": "pokemon-icons/weezing.png",
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 90,
      "defense": 120,
      "specialAttack": 85,
      "specialDefense": 70,
      "speed": 60,
      "total": 490
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10167,
    "slug": "weezing-galar",
    "speciesKey": "weezing",
    "nameJa": "マタドガス（ガラルのすがた）",
    "nameEn": "Galarian Weezing",
    "imagePath": "pokemon-icons/weezing-galar.png",
    "types": [
      "poison",
      "fairy"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 90,
      "defense": 120,
      "specialAttack": 85,
      "specialDefense": 70,
      "speed": 60,
      "total": 490
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 111,
    "slug": "rhyhorn",
    "speciesKey": "rhyhorn",
    "nameJa": "サイホーン",
    "nameEn": "Rhyhorn",
    "imagePath": "pokemon-icons/rhyhorn.png",
    "types": [
      "ground",
      "rock"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 85,
      "defense": 95,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 25,
      "total": 345
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 112,
    "slug": "rhydon",
    "speciesKey": "rhydon",
    "nameJa": "サイドン",
    "nameEn": "Rhydon",
    "imagePath": "pokemon-icons/rhydon.png",
    "types": [
      "ground",
      "rock"
    ],
    "baseStats": {
      "hp": 105,
      "attack": 130,
      "defense": 120,
      "specialAttack": 45,
      "specialDefense": 45,
      "speed": 40,
      "total": 485
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 113,
    "slug": "chansey",
    "speciesKey": "chansey",
    "nameJa": "ラッキー",
    "nameEn": "Chansey",
    "imagePath": "pokemon-icons/chansey.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 250,
      "attack": 5,
      "defense": 5,
      "specialAttack": 35,
      "specialDefense": 105,
      "speed": 50,
      "total": 450
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 114,
    "slug": "tangela",
    "speciesKey": "tangela",
    "nameJa": "モンジャラ",
    "nameEn": "Tangela",
    "imagePath": "pokemon-icons/tangela.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 55,
      "defense": 115,
      "specialAttack": 100,
      "specialDefense": 40,
      "speed": 60,
      "total": 435
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 115,
    "slug": "kangaskhan",
    "speciesKey": "kangaskhan",
    "nameJa": "ガルーラ",
    "nameEn": "Kangaskhan",
    "imagePath": "pokemon-icons/kangaskhan.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 105,
      "attack": 95,
      "defense": 80,
      "specialAttack": 40,
      "specialDefense": 80,
      "speed": 90,
      "total": 490
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10039,
    "slug": "kangaskhan-mega",
    "speciesKey": "kangaskhan",
    "nameJa": "メガガルーラ",
    "nameEn": "Mega Kangaskhan",
    "imagePath": "pokemon-icons/kangaskhan-mega.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 105,
      "attack": 125,
      "defense": 100,
      "specialAttack": 60,
      "specialDefense": 100,
      "speed": 100,
      "total": 590
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": false
  },
  {
    "id": 116,
    "slug": "horsea",
    "speciesKey": "horsea",
    "nameJa": "タッツー",
    "nameEn": "Horsea",
    "imagePath": "pokemon-icons/horsea.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 30,
      "attack": 40,
      "defense": 70,
      "specialAttack": 70,
      "specialDefense": 25,
      "speed": 60,
      "total": 295
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 117,
    "slug": "seadra",
    "speciesKey": "seadra",
    "nameJa": "シードラ",
    "nameEn": "Seadra",
    "imagePath": "pokemon-icons/seadra.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 65,
      "defense": 95,
      "specialAttack": 95,
      "specialDefense": 45,
      "speed": 85,
      "total": 440
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 118,
    "slug": "goldeen",
    "speciesKey": "goldeen",
    "nameJa": "トサキント",
    "nameEn": "Goldeen",
    "imagePath": "pokemon-icons/goldeen.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 67,
      "defense": 60,
      "specialAttack": 35,
      "specialDefense": 50,
      "speed": 63,
      "total": 320
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 119,
    "slug": "seaking",
    "speciesKey": "seaking",
    "nameJa": "アズマオウ",
    "nameEn": "Seaking",
    "imagePath": "pokemon-icons/seaking.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 92,
      "defense": 65,
      "specialAttack": 65,
      "specialDefense": 80,
      "speed": 68,
      "total": 450
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 120,
    "slug": "staryu",
    "speciesKey": "staryu",
    "nameJa": "ヒトデマン",
    "nameEn": "Staryu",
    "imagePath": "pokemon-icons/staryu.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 30,
      "attack": 45,
      "defense": 55,
      "specialAttack": 70,
      "specialDefense": 55,
      "speed": 85,
      "total": 340
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 121,
    "slug": "starmie",
    "speciesKey": "starmie",
    "nameJa": "スターミー",
    "nameEn": "Starmie",
    "imagePath": "pokemon-icons/starmie.png",
    "types": [
      "water",
      "psychic"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 75,
      "defense": 85,
      "specialAttack": 100,
      "specialDefense": 85,
      "speed": 115,
      "total": 520
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10280,
    "slug": "starmie-mega",
    "speciesKey": "starmie",
    "nameJa": "メガスターミー",
    "nameEn": "Mega Starmie",
    "imagePath": "pokemon-icons/starmie-mega.png",
    "types": [
      "water",
      "psychic"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 100,
      "defense": 105,
      "specialAttack": 130,
      "specialDefense": 105,
      "speed": 120,
      "total": 620
    },
    "generation": 1,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 122,
    "slug": "mr-mime",
    "speciesKey": "mr-mime",
    "nameJa": "バリヤード",
    "nameEn": "Mr. Mime",
    "imagePath": "pokemon-icons/mr-mime.png",
    "types": [
      "psychic",
      "fairy"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 45,
      "defense": 65,
      "specialAttack": 100,
      "specialDefense": 120,
      "speed": 90,
      "total": 460
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10168,
    "slug": "mr-mime-galar",
    "speciesKey": "mr-mime",
    "nameJa": "バリヤード（ガラルのすがた）",
    "nameEn": "Galarian Mr. Mime",
    "imagePath": "pokemon-icons/mr-mime-galar.png",
    "types": [
      "ice",
      "psychic"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 65,
      "defense": 65,
      "specialAttack": 90,
      "specialDefense": 90,
      "speed": 100,
      "total": 460
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 123,
    "slug": "scyther",
    "speciesKey": "scyther",
    "nameJa": "ストライク",
    "nameEn": "Scyther",
    "imagePath": "pokemon-icons/scyther.png",
    "types": [
      "bug",
      "flying"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 110,
      "defense": 80,
      "specialAttack": 55,
      "specialDefense": 80,
      "speed": 105,
      "total": 500
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 124,
    "slug": "jynx",
    "speciesKey": "jynx",
    "nameJa": "ルージュラ",
    "nameEn": "Jynx",
    "imagePath": "pokemon-icons/jynx.png",
    "types": [
      "ice",
      "psychic"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 50,
      "defense": 35,
      "specialAttack": 115,
      "specialDefense": 95,
      "speed": 95,
      "total": 455
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 125,
    "slug": "electabuzz",
    "speciesKey": "electabuzz",
    "nameJa": "エレブー",
    "nameEn": "Electabuzz",
    "imagePath": "pokemon-icons/electabuzz.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 83,
      "defense": 57,
      "specialAttack": 95,
      "specialDefense": 85,
      "speed": 105,
      "total": 490
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 126,
    "slug": "magmar",
    "speciesKey": "magmar",
    "nameJa": "ブーバー",
    "nameEn": "Magmar",
    "imagePath": "pokemon-icons/magmar.png",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 95,
      "defense": 57,
      "specialAttack": 100,
      "specialDefense": 85,
      "speed": 93,
      "total": 495
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 127,
    "slug": "pinsir",
    "speciesKey": "pinsir",
    "nameJa": "カイロス",
    "nameEn": "Pinsir",
    "imagePath": "pokemon-icons/pinsir.png",
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 125,
      "defense": 100,
      "specialAttack": 55,
      "specialDefense": 70,
      "speed": 85,
      "total": 500
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10040,
    "slug": "pinsir-mega",
    "speciesKey": "pinsir",
    "nameJa": "メガカイロス",
    "nameEn": "Mega Pinsir",
    "imagePath": "pokemon-icons/pinsir-mega.png",
    "types": [
      "bug",
      "flying"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 155,
      "defense": 120,
      "specialAttack": 65,
      "specialDefense": 90,
      "speed": 105,
      "total": 600
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": false
  },
  {
    "id": 128,
    "slug": "tauros",
    "speciesKey": "tauros",
    "nameJa": "ケンタロス",
    "nameEn": "Tauros",
    "imagePath": "pokemon-icons/tauros.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 100,
      "defense": 95,
      "specialAttack": 40,
      "specialDefense": 70,
      "speed": 110,
      "total": 490
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10250,
    "slug": "tauros-paldea-combat-breed",
    "speciesKey": "tauros",
    "nameJa": "ケンタロス（パルデアのすがた）",
    "nameEn": "Paldean Tauros (Combat Breed)",
    "imagePath": "pokemon-icons/tauros-paldea-combat-breed.png",
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 110,
      "defense": 105,
      "specialAttack": 30,
      "specialDefense": 70,
      "speed": 100,
      "total": 490
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": false
  },
  {
    "id": 10251,
    "slug": "tauros-paldea-blaze-breed",
    "speciesKey": "tauros",
    "nameJa": "ケンタロス（パルデアのすがた）",
    "nameEn": "Paldean Tauros (Blaze Breed)",
    "imagePath": "pokemon-icons/tauros-paldea-blaze-breed.png",
    "types": [
      "fighting",
      "fire"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 110,
      "defense": 105,
      "specialAttack": 30,
      "specialDefense": 70,
      "speed": 100,
      "total": 490
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": false
  },
  {
    "id": 10252,
    "slug": "tauros-paldea-aqua-breed",
    "speciesKey": "tauros",
    "nameJa": "ケンタロス（パルデアのすがた）",
    "nameEn": "Paldean Tauros (Aqua Breed)",
    "imagePath": "pokemon-icons/tauros-paldea-aqua-breed.png",
    "types": [
      "fighting",
      "water"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 110,
      "defense": 105,
      "specialAttack": 30,
      "specialDefense": 70,
      "speed": 100,
      "total": 490
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": false
  },
  {
    "id": 129,
    "slug": "magikarp",
    "speciesKey": "magikarp",
    "nameJa": "コイキング",
    "nameEn": "Magikarp",
    "imagePath": "pokemon-icons/magikarp.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 20,
      "attack": 10,
      "defense": 55,
      "specialAttack": 15,
      "specialDefense": 20,
      "speed": 80,
      "total": 200
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 130,
    "slug": "gyarados",
    "speciesKey": "gyarados",
    "nameJa": "ギャラドス",
    "nameEn": "Gyarados",
    "imagePath": "pokemon-icons/gyarados.png",
    "types": [
      "water",
      "flying"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 125,
      "defense": 79,
      "specialAttack": 60,
      "specialDefense": 100,
      "speed": 81,
      "total": 540
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10041,
    "slug": "gyarados-mega",
    "speciesKey": "gyarados",
    "nameJa": "メガギャラドス",
    "nameEn": "Mega Gyarados",
    "imagePath": "pokemon-icons/gyarados-mega.png",
    "types": [
      "water",
      "dark"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 155,
      "defense": 109,
      "specialAttack": 70,
      "specialDefense": 130,
      "speed": 81,
      "total": 640
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": false
  },
  {
    "id": 131,
    "slug": "lapras",
    "speciesKey": "lapras",
    "nameJa": "ラプラス",
    "nameEn": "Lapras",
    "imagePath": "pokemon-icons/lapras.png",
    "types": [
      "water",
      "ice"
    ],
    "baseStats": {
      "hp": 130,
      "attack": 85,
      "defense": 80,
      "specialAttack": 85,
      "specialDefense": 95,
      "speed": 60,
      "total": 535
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10204,
    "slug": "lapras-gmax",
    "speciesKey": "lapras",
    "nameJa": "ラプラス（キョダイマックスのすがた）",
    "nameEn": "Gigantamax Lapras",
    "imagePath": "pokemon-icons/lapras-gmax.png",
    "types": [
      "water",
      "ice"
    ],
    "baseStats": {
      "hp": 130,
      "attack": 85,
      "defense": 80,
      "specialAttack": 85,
      "specialDefense": 95,
      "speed": 60,
      "total": 535
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 132,
    "slug": "ditto",
    "speciesKey": "ditto",
    "nameJa": "メタモン",
    "nameEn": "Ditto",
    "imagePath": "pokemon-icons/ditto.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 48,
      "attack": 48,
      "defense": 48,
      "specialAttack": 48,
      "specialDefense": 48,
      "speed": 48,
      "total": 288
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 133,
    "slug": "eevee",
    "speciesKey": "eevee",
    "nameJa": "イーブイ",
    "nameEn": "Eevee",
    "imagePath": "pokemon-icons/eevee.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 55,
      "defense": 50,
      "specialAttack": 45,
      "specialDefense": 65,
      "speed": 55,
      "total": 325
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10159,
    "slug": "eevee-starter",
    "speciesKey": "eevee",
    "nameJa": "イーブイ",
    "nameEn": "Partner Eevee",
    "imagePath": "pokemon-icons/eevee-starter.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 75,
      "defense": 70,
      "specialAttack": 65,
      "specialDefense": 85,
      "speed": 75,
      "total": 435
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター Let's Go! ピカチュウ・イーブイ",
    "isDefault": false
  },
  {
    "id": 10205,
    "slug": "eevee-gmax",
    "speciesKey": "eevee",
    "nameJa": "イーブイ（キョダイマックスのすがた）",
    "nameEn": "Gigantamax Eevee",
    "imagePath": "pokemon-icons/eevee-gmax.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 55,
      "defense": 50,
      "specialAttack": 45,
      "specialDefense": 65,
      "speed": 55,
      "total": 325
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 134,
    "slug": "vaporeon",
    "speciesKey": "vaporeon",
    "nameJa": "シャワーズ",
    "nameEn": "Vaporeon",
    "imagePath": "pokemon-icons/vaporeon.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 130,
      "attack": 65,
      "defense": 60,
      "specialAttack": 110,
      "specialDefense": 95,
      "speed": 65,
      "total": 525
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 135,
    "slug": "jolteon",
    "speciesKey": "jolteon",
    "nameJa": "サンダース",
    "nameEn": "Jolteon",
    "imagePath": "pokemon-icons/jolteon.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 65,
      "defense": 60,
      "specialAttack": 110,
      "specialDefense": 95,
      "speed": 130,
      "total": 525
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 136,
    "slug": "flareon",
    "speciesKey": "flareon",
    "nameJa": "ブースター",
    "nameEn": "Flareon",
    "imagePath": "pokemon-icons/flareon.png",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 130,
      "defense": 60,
      "specialAttack": 95,
      "specialDefense": 110,
      "speed": 65,
      "total": 525
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 137,
    "slug": "porygon",
    "speciesKey": "porygon",
    "nameJa": "ポリゴン",
    "nameEn": "Porygon",
    "imagePath": "pokemon-icons/porygon.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 60,
      "defense": 70,
      "specialAttack": 85,
      "specialDefense": 75,
      "speed": 40,
      "total": 395
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 138,
    "slug": "omanyte",
    "speciesKey": "omanyte",
    "nameJa": "オムナイト",
    "nameEn": "Omanyte",
    "imagePath": "pokemon-icons/omanyte.png",
    "types": [
      "rock",
      "water"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 40,
      "defense": 100,
      "specialAttack": 90,
      "specialDefense": 55,
      "speed": 35,
      "total": 355
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 139,
    "slug": "omastar",
    "speciesKey": "omastar",
    "nameJa": "オムスター",
    "nameEn": "Omastar",
    "imagePath": "pokemon-icons/omastar.png",
    "types": [
      "rock",
      "water"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 60,
      "defense": 125,
      "specialAttack": 115,
      "specialDefense": 70,
      "speed": 55,
      "total": 495
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 140,
    "slug": "kabuto",
    "speciesKey": "kabuto",
    "nameJa": "カブト",
    "nameEn": "Kabuto",
    "imagePath": "pokemon-icons/kabuto.png",
    "types": [
      "rock",
      "water"
    ],
    "baseStats": {
      "hp": 30,
      "attack": 80,
      "defense": 90,
      "specialAttack": 55,
      "specialDefense": 45,
      "speed": 55,
      "total": 355
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 141,
    "slug": "kabutops",
    "speciesKey": "kabutops",
    "nameJa": "カブトプス",
    "nameEn": "Kabutops",
    "imagePath": "pokemon-icons/kabutops.png",
    "types": [
      "rock",
      "water"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 115,
      "defense": 105,
      "specialAttack": 65,
      "specialDefense": 70,
      "speed": 80,
      "total": 495
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 142,
    "slug": "aerodactyl",
    "speciesKey": "aerodactyl",
    "nameJa": "プテラ",
    "nameEn": "Aerodactyl",
    "imagePath": "pokemon-icons/aerodactyl.png",
    "types": [
      "rock",
      "flying"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 105,
      "defense": 65,
      "specialAttack": 60,
      "specialDefense": 75,
      "speed": 130,
      "total": 515
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10042,
    "slug": "aerodactyl-mega",
    "speciesKey": "aerodactyl",
    "nameJa": "メガプテラ",
    "nameEn": "Mega Aerodactyl",
    "imagePath": "pokemon-icons/aerodactyl-mega.png",
    "types": [
      "rock",
      "flying"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 135,
      "defense": 85,
      "specialAttack": 70,
      "specialDefense": 95,
      "speed": 150,
      "total": 615
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": false
  },
  {
    "id": 143,
    "slug": "snorlax",
    "speciesKey": "snorlax",
    "nameJa": "カビゴン",
    "nameEn": "Snorlax",
    "imagePath": "pokemon-icons/snorlax.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 160,
      "attack": 110,
      "defense": 65,
      "specialAttack": 65,
      "specialDefense": 110,
      "speed": 30,
      "total": 540
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10206,
    "slug": "snorlax-gmax",
    "speciesKey": "snorlax",
    "nameJa": "カビゴン（キョダイマックスのすがた）",
    "nameEn": "Gigantamax Snorlax",
    "imagePath": "pokemon-icons/snorlax-gmax.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 160,
      "attack": 110,
      "defense": 65,
      "specialAttack": 65,
      "specialDefense": 110,
      "speed": 30,
      "total": 540
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 144,
    "slug": "articuno",
    "speciesKey": "articuno",
    "nameJa": "フリーザー",
    "nameEn": "Articuno",
    "imagePath": "pokemon-icons/articuno.png",
    "types": [
      "ice",
      "flying"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 85,
      "defense": 100,
      "specialAttack": 95,
      "specialDefense": 125,
      "speed": 85,
      "total": 580
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10169,
    "slug": "articuno-galar",
    "speciesKey": "articuno",
    "nameJa": "フリーザー（ガラルのすがた）",
    "nameEn": "Galarian Articuno",
    "imagePath": "pokemon-icons/articuno-galar.png",
    "types": [
      "psychic",
      "flying"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 85,
      "defense": 85,
      "specialAttack": 125,
      "specialDefense": 100,
      "speed": 95,
      "total": 580
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 145,
    "slug": "zapdos",
    "speciesKey": "zapdos",
    "nameJa": "サンダー",
    "nameEn": "Zapdos",
    "imagePath": "pokemon-icons/zapdos.png",
    "types": [
      "electric",
      "flying"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 90,
      "defense": 85,
      "specialAttack": 125,
      "specialDefense": 90,
      "speed": 100,
      "total": 580
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10170,
    "slug": "zapdos-galar",
    "speciesKey": "zapdos",
    "nameJa": "サンダー（ガラルのすがた）",
    "nameEn": "Galarian Zapdos",
    "imagePath": "pokemon-icons/zapdos-galar.png",
    "types": [
      "fighting",
      "flying"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 125,
      "defense": 90,
      "specialAttack": 85,
      "specialDefense": 90,
      "speed": 100,
      "total": 580
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 146,
    "slug": "moltres",
    "speciesKey": "moltres",
    "nameJa": "ファイヤー",
    "nameEn": "Moltres",
    "imagePath": "pokemon-icons/moltres.png",
    "types": [
      "fire",
      "flying"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 100,
      "defense": 90,
      "specialAttack": 125,
      "specialDefense": 85,
      "speed": 90,
      "total": 580
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10171,
    "slug": "moltres-galar",
    "speciesKey": "moltres",
    "nameJa": "ファイヤー（ガラルのすがた）",
    "nameEn": "Galarian Moltres",
    "imagePath": "pokemon-icons/moltres-galar.png",
    "types": [
      "dark",
      "flying"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 85,
      "defense": 90,
      "specialAttack": 100,
      "specialDefense": 125,
      "speed": 90,
      "total": 580
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 147,
    "slug": "dratini",
    "speciesKey": "dratini",
    "nameJa": "ミニリュウ",
    "nameEn": "Dratini",
    "imagePath": "pokemon-icons/dratini.png",
    "types": [
      "dragon"
    ],
    "baseStats": {
      "hp": 41,
      "attack": 64,
      "defense": 45,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 50,
      "total": 300
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 148,
    "slug": "dragonair",
    "speciesKey": "dragonair",
    "nameJa": "ハクリュー",
    "nameEn": "Dragonair",
    "imagePath": "pokemon-icons/dragonair.png",
    "types": [
      "dragon"
    ],
    "baseStats": {
      "hp": 61,
      "attack": 84,
      "defense": 65,
      "specialAttack": 70,
      "specialDefense": 70,
      "speed": 70,
      "total": 420
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 149,
    "slug": "dragonite",
    "speciesKey": "dragonite",
    "nameJa": "カイリュー",
    "nameEn": "Dragonite",
    "imagePath": "pokemon-icons/dragonite.png",
    "types": [
      "dragon",
      "flying"
    ],
    "baseStats": {
      "hp": 91,
      "attack": 134,
      "defense": 95,
      "specialAttack": 100,
      "specialDefense": 100,
      "speed": 80,
      "total": 600
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10281,
    "slug": "dragonite-mega",
    "speciesKey": "dragonite",
    "nameJa": "メガカイリュー",
    "nameEn": "Mega Dragonite",
    "imagePath": "pokemon-icons/dragonite-mega.png",
    "types": [
      "dragon",
      "flying"
    ],
    "baseStats": {
      "hp": 91,
      "attack": 124,
      "defense": 115,
      "specialAttack": 145,
      "specialDefense": 125,
      "speed": 100,
      "total": 700
    },
    "generation": 1,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 150,
    "slug": "mewtwo",
    "speciesKey": "mewtwo",
    "nameJa": "ミュウツー",
    "nameEn": "Mewtwo",
    "imagePath": "pokemon-icons/mewtwo.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 106,
      "attack": 110,
      "defense": 90,
      "specialAttack": 154,
      "specialDefense": 90,
      "speed": 130,
      "total": 680
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 10043,
    "slug": "mewtwo-mega-x",
    "speciesKey": "mewtwo",
    "nameJa": "メガミュウツーＸ",
    "nameEn": "Mega Mewtwo X",
    "imagePath": "pokemon-icons/mewtwo-mega-x.png",
    "types": [
      "psychic",
      "fighting"
    ],
    "baseStats": {
      "hp": 106,
      "attack": 190,
      "defense": 100,
      "specialAttack": 154,
      "specialDefense": 100,
      "speed": 130,
      "total": 780
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": false
  },
  {
    "id": 10044,
    "slug": "mewtwo-mega-y",
    "speciesKey": "mewtwo",
    "nameJa": "メガミュウツーＹ",
    "nameEn": "Mega Mewtwo Y",
    "imagePath": "pokemon-icons/mewtwo-mega-y.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 106,
      "attack": 150,
      "defense": 70,
      "specialAttack": 194,
      "specialDefense": 120,
      "speed": 140,
      "total": 780
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": false
  },
  {
    "id": 151,
    "slug": "mew",
    "speciesKey": "mew",
    "nameJa": "ミュウ",
    "nameEn": "Mew",
    "imagePath": "pokemon-icons/mew.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "specialAttack": 100,
      "specialDefense": 100,
      "speed": 100,
      "total": 600
    },
    "generation": 1,
    "debutTitle": "ポケットモンスター 赤・緑",
    "isDefault": true
  },
  {
    "id": 152,
    "slug": "chikorita",
    "speciesKey": "chikorita",
    "nameJa": "チコリータ",
    "nameEn": "Chikorita",
    "imagePath": "pokemon-icons/chikorita.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 49,
      "defense": 65,
      "specialAttack": 49,
      "specialDefense": 65,
      "speed": 45,
      "total": 318
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 153,
    "slug": "bayleef",
    "speciesKey": "bayleef",
    "nameJa": "ベイリーフ",
    "nameEn": "Bayleef",
    "imagePath": "pokemon-icons/bayleef.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 62,
      "defense": 80,
      "specialAttack": 63,
      "specialDefense": 80,
      "speed": 60,
      "total": 405
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 154,
    "slug": "meganium",
    "speciesKey": "meganium",
    "nameJa": "メガニウム",
    "nameEn": "Meganium",
    "imagePath": "pokemon-icons/meganium.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 82,
      "defense": 100,
      "specialAttack": 83,
      "specialDefense": 100,
      "speed": 80,
      "total": 525
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 10282,
    "slug": "meganium-mega",
    "speciesKey": "meganium",
    "nameJa": "メガメガニウム",
    "nameEn": "Mega Meganium",
    "imagePath": "pokemon-icons/meganium-mega.png",
    "types": [
      "grass",
      "fairy"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 92,
      "defense": 115,
      "specialAttack": 143,
      "specialDefense": 115,
      "speed": 80,
      "total": 625
    },
    "generation": 2,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 155,
    "slug": "cyndaquil",
    "speciesKey": "cyndaquil",
    "nameJa": "ヒノアラシ",
    "nameEn": "Cyndaquil",
    "imagePath": "pokemon-icons/cyndaquil.png",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 39,
      "attack": 52,
      "defense": 43,
      "specialAttack": 60,
      "specialDefense": 50,
      "speed": 65,
      "total": 309
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 156,
    "slug": "quilava",
    "speciesKey": "quilava",
    "nameJa": "マグマラシ",
    "nameEn": "Quilava",
    "imagePath": "pokemon-icons/quilava.png",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 58,
      "attack": 64,
      "defense": 58,
      "specialAttack": 80,
      "specialDefense": 65,
      "speed": 80,
      "total": 405
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 157,
    "slug": "typhlosion",
    "speciesKey": "typhlosion",
    "nameJa": "バクフーン",
    "nameEn": "Typhlosion",
    "imagePath": "pokemon-icons/typhlosion.png",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 78,
      "attack": 84,
      "defense": 78,
      "specialAttack": 109,
      "specialDefense": 85,
      "speed": 100,
      "total": 534
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 10233,
    "slug": "typhlosion-hisui",
    "speciesKey": "typhlosion",
    "nameJa": "バクフーン（ヒスイのすがた）",
    "nameEn": "Hisuian Typhlosion",
    "imagePath": "pokemon-icons/typhlosion-hisui.png",
    "types": [
      "fire",
      "ghost"
    ],
    "baseStats": {
      "hp": 73,
      "attack": 84,
      "defense": 78,
      "specialAttack": 119,
      "specialDefense": 85,
      "speed": 95,
      "total": 534
    },
    "generation": 2,
    "debutTitle": "Pokemon LEGENDS アルセウス",
    "isDefault": false
  },
  {
    "id": 158,
    "slug": "totodile",
    "speciesKey": "totodile",
    "nameJa": "ワニノコ",
    "nameEn": "Totodile",
    "imagePath": "pokemon-icons/totodile.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 65,
      "defense": 64,
      "specialAttack": 44,
      "specialDefense": 48,
      "speed": 43,
      "total": 314
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 159,
    "slug": "croconaw",
    "speciesKey": "croconaw",
    "nameJa": "アリゲイツ",
    "nameEn": "Croconaw",
    "imagePath": "pokemon-icons/croconaw.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 80,
      "defense": 80,
      "specialAttack": 59,
      "specialDefense": 63,
      "speed": 58,
      "total": 405
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 160,
    "slug": "feraligatr",
    "speciesKey": "feraligatr",
    "nameJa": "オーダイル",
    "nameEn": "Feraligatr",
    "imagePath": "pokemon-icons/feraligatr.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 105,
      "defense": 100,
      "specialAttack": 79,
      "specialDefense": 83,
      "speed": 78,
      "total": 530
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 10283,
    "slug": "feraligatr-mega",
    "speciesKey": "feraligatr",
    "nameJa": "メガオーダイル",
    "nameEn": "Mega Feraligatr",
    "imagePath": "pokemon-icons/feraligatr-mega.png",
    "types": [
      "water",
      "dragon"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 160,
      "defense": 125,
      "specialAttack": 89,
      "specialDefense": 93,
      "speed": 78,
      "total": 630
    },
    "generation": 2,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 161,
    "slug": "sentret",
    "speciesKey": "sentret",
    "nameJa": "オタチ",
    "nameEn": "Sentret",
    "imagePath": "pokemon-icons/sentret.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 46,
      "defense": 34,
      "specialAttack": 35,
      "specialDefense": 45,
      "speed": 20,
      "total": 215
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 162,
    "slug": "furret",
    "speciesKey": "furret",
    "nameJa": "オオタチ",
    "nameEn": "Furret",
    "imagePath": "pokemon-icons/furret.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 76,
      "defense": 64,
      "specialAttack": 45,
      "specialDefense": 55,
      "speed": 90,
      "total": 415
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 163,
    "slug": "hoothoot",
    "speciesKey": "hoothoot",
    "nameJa": "ホーホー",
    "nameEn": "Hoothoot",
    "imagePath": "pokemon-icons/hoothoot.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 30,
      "defense": 30,
      "specialAttack": 36,
      "specialDefense": 56,
      "speed": 50,
      "total": 262
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 164,
    "slug": "noctowl",
    "speciesKey": "noctowl",
    "nameJa": "ヨルノズク",
    "nameEn": "Noctowl",
    "imagePath": "pokemon-icons/noctowl.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 50,
      "defense": 50,
      "specialAttack": 86,
      "specialDefense": 96,
      "speed": 70,
      "total": 452
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 165,
    "slug": "ledyba",
    "speciesKey": "ledyba",
    "nameJa": "レディバ",
    "nameEn": "Ledyba",
    "imagePath": "pokemon-icons/ledyba.png",
    "types": [
      "bug",
      "flying"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 20,
      "defense": 30,
      "specialAttack": 40,
      "specialDefense": 80,
      "speed": 55,
      "total": 265
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 166,
    "slug": "ledian",
    "speciesKey": "ledian",
    "nameJa": "レディアン",
    "nameEn": "Ledian",
    "imagePath": "pokemon-icons/ledian.png",
    "types": [
      "bug",
      "flying"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 35,
      "defense": 50,
      "specialAttack": 55,
      "specialDefense": 110,
      "speed": 85,
      "total": 390
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 167,
    "slug": "spinarak",
    "speciesKey": "spinarak",
    "nameJa": "イトマル",
    "nameEn": "Spinarak",
    "imagePath": "pokemon-icons/spinarak.png",
    "types": [
      "bug",
      "poison"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 60,
      "defense": 40,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 30,
      "total": 250
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 168,
    "slug": "ariados",
    "speciesKey": "ariados",
    "nameJa": "アリアドス",
    "nameEn": "Ariados",
    "imagePath": "pokemon-icons/ariados.png",
    "types": [
      "bug",
      "poison"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 90,
      "defense": 70,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 40,
      "total": 400
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 169,
    "slug": "crobat",
    "speciesKey": "crobat",
    "nameJa": "クロバット",
    "nameEn": "Crobat",
    "imagePath": "pokemon-icons/crobat.png",
    "types": [
      "poison",
      "flying"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 90,
      "defense": 80,
      "specialAttack": 70,
      "specialDefense": 80,
      "speed": 130,
      "total": 535
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 170,
    "slug": "chinchou",
    "speciesKey": "chinchou",
    "nameJa": "チョンチー",
    "nameEn": "Chinchou",
    "imagePath": "pokemon-icons/chinchou.png",
    "types": [
      "water",
      "electric"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 38,
      "defense": 38,
      "specialAttack": 56,
      "specialDefense": 56,
      "speed": 67,
      "total": 330
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 171,
    "slug": "lanturn",
    "speciesKey": "lanturn",
    "nameJa": "ランターン",
    "nameEn": "Lanturn",
    "imagePath": "pokemon-icons/lanturn.png",
    "types": [
      "water",
      "electric"
    ],
    "baseStats": {
      "hp": 125,
      "attack": 58,
      "defense": 58,
      "specialAttack": 76,
      "specialDefense": 76,
      "speed": 67,
      "total": 460
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 172,
    "slug": "pichu",
    "speciesKey": "pichu",
    "nameJa": "ピチュー",
    "nameEn": "Pichu",
    "imagePath": "pokemon-icons/pichu.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 20,
      "attack": 40,
      "defense": 15,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 60,
      "total": 205
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 173,
    "slug": "cleffa",
    "speciesKey": "cleffa",
    "nameJa": "ピィ",
    "nameEn": "Cleffa",
    "imagePath": "pokemon-icons/cleffa.png",
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 25,
      "defense": 28,
      "specialAttack": 45,
      "specialDefense": 55,
      "speed": 15,
      "total": 218
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 174,
    "slug": "igglybuff",
    "speciesKey": "igglybuff",
    "nameJa": "ププリン",
    "nameEn": "Igglybuff",
    "imagePath": "pokemon-icons/igglybuff.png",
    "types": [
      "normal",
      "fairy"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 30,
      "defense": 15,
      "specialAttack": 40,
      "specialDefense": 20,
      "speed": 15,
      "total": 210
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 175,
    "slug": "togepi",
    "speciesKey": "togepi",
    "nameJa": "トゲピー",
    "nameEn": "Togepi",
    "imagePath": "pokemon-icons/togepi.png",
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 20,
      "defense": 65,
      "specialAttack": 40,
      "specialDefense": 65,
      "speed": 20,
      "total": 245
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 176,
    "slug": "togetic",
    "speciesKey": "togetic",
    "nameJa": "トゲチック",
    "nameEn": "Togetic",
    "imagePath": "pokemon-icons/togetic.png",
    "types": [
      "fairy",
      "flying"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 40,
      "defense": 85,
      "specialAttack": 80,
      "specialDefense": 105,
      "speed": 40,
      "total": 405
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 177,
    "slug": "natu",
    "speciesKey": "natu",
    "nameJa": "ネイティ",
    "nameEn": "Natu",
    "imagePath": "pokemon-icons/natu.png",
    "types": [
      "psychic",
      "flying"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 50,
      "defense": 45,
      "specialAttack": 70,
      "specialDefense": 45,
      "speed": 70,
      "total": 320
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 178,
    "slug": "xatu",
    "speciesKey": "xatu",
    "nameJa": "ネイティオ",
    "nameEn": "Xatu",
    "imagePath": "pokemon-icons/xatu.png",
    "types": [
      "psychic",
      "flying"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 75,
      "defense": 70,
      "specialAttack": 95,
      "specialDefense": 70,
      "speed": 95,
      "total": 470
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 179,
    "slug": "mareep",
    "speciesKey": "mareep",
    "nameJa": "メリープ",
    "nameEn": "Mareep",
    "imagePath": "pokemon-icons/mareep.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 40,
      "defense": 40,
      "specialAttack": 65,
      "specialDefense": 45,
      "speed": 35,
      "total": 280
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 180,
    "slug": "flaaffy",
    "speciesKey": "flaaffy",
    "nameJa": "モココ",
    "nameEn": "Flaaffy",
    "imagePath": "pokemon-icons/flaaffy.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 55,
      "defense": 55,
      "specialAttack": 80,
      "specialDefense": 60,
      "speed": 45,
      "total": 365
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 181,
    "slug": "ampharos",
    "speciesKey": "ampharos",
    "nameJa": "デンリュウ",
    "nameEn": "Ampharos",
    "imagePath": "pokemon-icons/ampharos.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 75,
      "defense": 85,
      "specialAttack": 115,
      "specialDefense": 90,
      "speed": 55,
      "total": 510
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 10045,
    "slug": "ampharos-mega",
    "speciesKey": "ampharos",
    "nameJa": "メガデンリュウ",
    "nameEn": "Mega Ampharos",
    "imagePath": "pokemon-icons/ampharos-mega.png",
    "types": [
      "electric",
      "dragon"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 95,
      "defense": 105,
      "specialAttack": 165,
      "specialDefense": 110,
      "speed": 45,
      "total": 610
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": false
  },
  {
    "id": 182,
    "slug": "bellossom",
    "speciesKey": "bellossom",
    "nameJa": "キレイハナ",
    "nameEn": "Bellossom",
    "imagePath": "pokemon-icons/bellossom.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 80,
      "defense": 95,
      "specialAttack": 90,
      "specialDefense": 100,
      "speed": 50,
      "total": 490
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 183,
    "slug": "marill",
    "speciesKey": "marill",
    "nameJa": "マリル",
    "nameEn": "Marill",
    "imagePath": "pokemon-icons/marill.png",
    "types": [
      "water",
      "fairy"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 20,
      "defense": 50,
      "specialAttack": 20,
      "specialDefense": 50,
      "speed": 40,
      "total": 250
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 184,
    "slug": "azumarill",
    "speciesKey": "azumarill",
    "nameJa": "マリルリ",
    "nameEn": "Azumarill",
    "imagePath": "pokemon-icons/azumarill.png",
    "types": [
      "water",
      "fairy"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 50,
      "defense": 80,
      "specialAttack": 60,
      "specialDefense": 80,
      "speed": 50,
      "total": 420
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 185,
    "slug": "sudowoodo",
    "speciesKey": "sudowoodo",
    "nameJa": "ウソッキー",
    "nameEn": "Sudowoodo",
    "imagePath": "pokemon-icons/sudowoodo.png",
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 100,
      "defense": 115,
      "specialAttack": 30,
      "specialDefense": 65,
      "speed": 30,
      "total": 410
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 186,
    "slug": "politoed",
    "speciesKey": "politoed",
    "nameJa": "ニョロトノ",
    "nameEn": "Politoed",
    "imagePath": "pokemon-icons/politoed.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 75,
      "defense": 75,
      "specialAttack": 90,
      "specialDefense": 100,
      "speed": 70,
      "total": 500
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 187,
    "slug": "hoppip",
    "speciesKey": "hoppip",
    "nameJa": "ハネッコ",
    "nameEn": "Hoppip",
    "imagePath": "pokemon-icons/hoppip.png",
    "types": [
      "grass",
      "flying"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 35,
      "defense": 40,
      "specialAttack": 35,
      "specialDefense": 55,
      "speed": 50,
      "total": 250
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 188,
    "slug": "skiploom",
    "speciesKey": "skiploom",
    "nameJa": "ポポッコ",
    "nameEn": "Skiploom",
    "imagePath": "pokemon-icons/skiploom.png",
    "types": [
      "grass",
      "flying"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 45,
      "defense": 50,
      "specialAttack": 45,
      "specialDefense": 65,
      "speed": 80,
      "total": 340
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 189,
    "slug": "jumpluff",
    "speciesKey": "jumpluff",
    "nameJa": "ワタッコ",
    "nameEn": "Jumpluff",
    "imagePath": "pokemon-icons/jumpluff.png",
    "types": [
      "grass",
      "flying"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 55,
      "defense": 70,
      "specialAttack": 55,
      "specialDefense": 95,
      "speed": 110,
      "total": 460
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 190,
    "slug": "aipom",
    "speciesKey": "aipom",
    "nameJa": "エイパム",
    "nameEn": "Aipom",
    "imagePath": "pokemon-icons/aipom.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 70,
      "defense": 55,
      "specialAttack": 40,
      "specialDefense": 55,
      "speed": 85,
      "total": 360
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 191,
    "slug": "sunkern",
    "speciesKey": "sunkern",
    "nameJa": "ヒマナッツ",
    "nameEn": "Sunkern",
    "imagePath": "pokemon-icons/sunkern.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 30,
      "attack": 30,
      "defense": 30,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 30,
      "total": 180
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 192,
    "slug": "sunflora",
    "speciesKey": "sunflora",
    "nameJa": "キマワリ",
    "nameEn": "Sunflora",
    "imagePath": "pokemon-icons/sunflora.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 75,
      "defense": 55,
      "specialAttack": 105,
      "specialDefense": 85,
      "speed": 30,
      "total": 425
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 193,
    "slug": "yanma",
    "speciesKey": "yanma",
    "nameJa": "ヤンヤンマ",
    "nameEn": "Yanma",
    "imagePath": "pokemon-icons/yanma.png",
    "types": [
      "bug",
      "flying"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 65,
      "defense": 45,
      "specialAttack": 75,
      "specialDefense": 45,
      "speed": 95,
      "total": 390
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 194,
    "slug": "wooper",
    "speciesKey": "wooper",
    "nameJa": "ウパー",
    "nameEn": "Wooper",
    "imagePath": "pokemon-icons/wooper.png",
    "types": [
      "water",
      "ground"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 45,
      "defense": 45,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 15,
      "total": 210
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 10253,
    "slug": "wooper-paldea",
    "speciesKey": "wooper",
    "nameJa": "ウパー（パルデアのすがた）",
    "nameEn": "Paldean Wooper",
    "imagePath": "pokemon-icons/wooper-paldea.png",
    "types": [
      "poison",
      "ground"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 45,
      "defense": 45,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 15,
      "total": 210
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": false
  },
  {
    "id": 195,
    "slug": "quagsire",
    "speciesKey": "quagsire",
    "nameJa": "ヌオー",
    "nameEn": "Quagsire",
    "imagePath": "pokemon-icons/quagsire.png",
    "types": [
      "water",
      "ground"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 85,
      "defense": 85,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 35,
      "total": 430
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 196,
    "slug": "espeon",
    "speciesKey": "espeon",
    "nameJa": "エーフィ",
    "nameEn": "Espeon",
    "imagePath": "pokemon-icons/espeon.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 65,
      "defense": 60,
      "specialAttack": 130,
      "specialDefense": 95,
      "speed": 110,
      "total": 525
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 197,
    "slug": "umbreon",
    "speciesKey": "umbreon",
    "nameJa": "ブラッキー",
    "nameEn": "Umbreon",
    "imagePath": "pokemon-icons/umbreon.png",
    "types": [
      "dark"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 65,
      "defense": 110,
      "specialAttack": 60,
      "specialDefense": 130,
      "speed": 65,
      "total": 525
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 198,
    "slug": "murkrow",
    "speciesKey": "murkrow",
    "nameJa": "ヤミカラス",
    "nameEn": "Murkrow",
    "imagePath": "pokemon-icons/murkrow.png",
    "types": [
      "dark",
      "flying"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 85,
      "defense": 42,
      "specialAttack": 85,
      "specialDefense": 42,
      "speed": 91,
      "total": 405
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 199,
    "slug": "slowking",
    "speciesKey": "slowking",
    "nameJa": "ヤドキング",
    "nameEn": "Slowking",
    "imagePath": "pokemon-icons/slowking.png",
    "types": [
      "water",
      "psychic"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 75,
      "defense": 80,
      "specialAttack": 100,
      "specialDefense": 110,
      "speed": 30,
      "total": 490
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 10172,
    "slug": "slowking-galar",
    "speciesKey": "slowking",
    "nameJa": "ヤドキング（ガラルのすがた）",
    "nameEn": "Galarian Slowking",
    "imagePath": "pokemon-icons/slowking-galar.png",
    "types": [
      "poison",
      "psychic"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 65,
      "defense": 80,
      "specialAttack": 110,
      "specialDefense": 110,
      "speed": 30,
      "total": 490
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 200,
    "slug": "misdreavus",
    "speciesKey": "misdreavus",
    "nameJa": "ムウマ",
    "nameEn": "Misdreavus",
    "imagePath": "pokemon-icons/misdreavus.png",
    "types": [
      "ghost"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 60,
      "defense": 60,
      "specialAttack": 85,
      "specialDefense": 85,
      "speed": 85,
      "total": 435
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 201,
    "slug": "unown",
    "speciesKey": "unown",
    "nameJa": "アンノーン（Ａ）",
    "nameEn": "Unown A",
    "imagePath": "pokemon-icons/unown.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 48,
      "attack": 72,
      "defense": 48,
      "specialAttack": 72,
      "specialDefense": 48,
      "speed": 48,
      "total": 336
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 202,
    "slug": "wobbuffet",
    "speciesKey": "wobbuffet",
    "nameJa": "ソーナンス",
    "nameEn": "Wobbuffet",
    "imagePath": "pokemon-icons/wobbuffet.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 190,
      "attack": 33,
      "defense": 58,
      "specialAttack": 33,
      "specialDefense": 58,
      "speed": 33,
      "total": 405
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 203,
    "slug": "girafarig",
    "speciesKey": "girafarig",
    "nameJa": "キリンリキ",
    "nameEn": "Girafarig",
    "imagePath": "pokemon-icons/girafarig.png",
    "types": [
      "normal",
      "psychic"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 80,
      "defense": 65,
      "specialAttack": 90,
      "specialDefense": 65,
      "speed": 85,
      "total": 455
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 204,
    "slug": "pineco",
    "speciesKey": "pineco",
    "nameJa": "クヌギダマ",
    "nameEn": "Pineco",
    "imagePath": "pokemon-icons/pineco.png",
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 65,
      "defense": 90,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 15,
      "total": 290
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 205,
    "slug": "forretress",
    "speciesKey": "forretress",
    "nameJa": "フォレトス",
    "nameEn": "Forretress",
    "imagePath": "pokemon-icons/forretress.png",
    "types": [
      "bug",
      "steel"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 90,
      "defense": 140,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 40,
      "total": 465
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 206,
    "slug": "dunsparce",
    "speciesKey": "dunsparce",
    "nameJa": "ノコッチ",
    "nameEn": "Dunsparce",
    "imagePath": "pokemon-icons/dunsparce.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 70,
      "defense": 70,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 45,
      "total": 415
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 207,
    "slug": "gligar",
    "speciesKey": "gligar",
    "nameJa": "グライガー",
    "nameEn": "Gligar",
    "imagePath": "pokemon-icons/gligar.png",
    "types": [
      "ground",
      "flying"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 75,
      "defense": 105,
      "specialAttack": 35,
      "specialDefense": 65,
      "speed": 85,
      "total": 430
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 208,
    "slug": "steelix",
    "speciesKey": "steelix",
    "nameJa": "ハガネール",
    "nameEn": "Steelix",
    "imagePath": "pokemon-icons/steelix.png",
    "types": [
      "steel",
      "ground"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 85,
      "defense": 200,
      "specialAttack": 55,
      "specialDefense": 65,
      "speed": 30,
      "total": 510
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 10072,
    "slug": "steelix-mega",
    "speciesKey": "steelix",
    "nameJa": "メガハガネール",
    "nameEn": "Mega Steelix",
    "imagePath": "pokemon-icons/steelix-mega.png",
    "types": [
      "steel",
      "ground"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 125,
      "defense": 230,
      "specialAttack": 55,
      "specialDefense": 95,
      "speed": 30,
      "total": 610
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター オメガルビー・アルファサファイア",
    "isDefault": false
  },
  {
    "id": 209,
    "slug": "snubbull",
    "speciesKey": "snubbull",
    "nameJa": "ブルー",
    "nameEn": "Snubbull",
    "imagePath": "pokemon-icons/snubbull.png",
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 80,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 30,
      "total": 300
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 210,
    "slug": "granbull",
    "speciesKey": "granbull",
    "nameJa": "グランブル",
    "nameEn": "Granbull",
    "imagePath": "pokemon-icons/granbull.png",
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 120,
      "defense": 75,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 45,
      "total": 450
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 211,
    "slug": "qwilfish",
    "speciesKey": "qwilfish",
    "nameJa": "ハリーセン",
    "nameEn": "Qwilfish",
    "imagePath": "pokemon-icons/qwilfish.png",
    "types": [
      "water",
      "poison"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 95,
      "defense": 85,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 85,
      "total": 440
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 10234,
    "slug": "qwilfish-hisui",
    "speciesKey": "qwilfish",
    "nameJa": "ハリーセン（ヒスイのすがた）",
    "nameEn": "Hisuian Qwilfish",
    "imagePath": "pokemon-icons/qwilfish-hisui.png",
    "types": [
      "dark",
      "poison"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 95,
      "defense": 85,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 85,
      "total": 440
    },
    "generation": 2,
    "debutTitle": "Pokemon LEGENDS アルセウス",
    "isDefault": false
  },
  {
    "id": 212,
    "slug": "scizor",
    "speciesKey": "scizor",
    "nameJa": "ハッサム",
    "nameEn": "Scizor",
    "imagePath": "pokemon-icons/scizor.png",
    "types": [
      "bug",
      "steel"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 130,
      "defense": 100,
      "specialAttack": 55,
      "specialDefense": 80,
      "speed": 65,
      "total": 500
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 10046,
    "slug": "scizor-mega",
    "speciesKey": "scizor",
    "nameJa": "メガハッサム",
    "nameEn": "Mega Scizor",
    "imagePath": "pokemon-icons/scizor-mega.png",
    "types": [
      "bug",
      "steel"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 150,
      "defense": 140,
      "specialAttack": 65,
      "specialDefense": 100,
      "speed": 75,
      "total": 600
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": false
  },
  {
    "id": 213,
    "slug": "shuckle",
    "speciesKey": "shuckle",
    "nameJa": "ツボツボ",
    "nameEn": "Shuckle",
    "imagePath": "pokemon-icons/shuckle.png",
    "types": [
      "bug",
      "rock"
    ],
    "baseStats": {
      "hp": 20,
      "attack": 10,
      "defense": 230,
      "specialAttack": 10,
      "specialDefense": 230,
      "speed": 5,
      "total": 505
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 214,
    "slug": "heracross",
    "speciesKey": "heracross",
    "nameJa": "ヘラクロス",
    "nameEn": "Heracross",
    "imagePath": "pokemon-icons/heracross.png",
    "types": [
      "bug",
      "fighting"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 125,
      "defense": 75,
      "specialAttack": 40,
      "specialDefense": 95,
      "speed": 85,
      "total": 500
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 10047,
    "slug": "heracross-mega",
    "speciesKey": "heracross",
    "nameJa": "メガヘラクロス",
    "nameEn": "Mega Heracross",
    "imagePath": "pokemon-icons/heracross-mega.png",
    "types": [
      "bug",
      "fighting"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 185,
      "defense": 115,
      "specialAttack": 40,
      "specialDefense": 105,
      "speed": 75,
      "total": 600
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": false
  },
  {
    "id": 215,
    "slug": "sneasel",
    "speciesKey": "sneasel",
    "nameJa": "ニューラ",
    "nameEn": "Sneasel",
    "imagePath": "pokemon-icons/sneasel.png",
    "types": [
      "dark",
      "ice"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 95,
      "defense": 55,
      "specialAttack": 35,
      "specialDefense": 75,
      "speed": 115,
      "total": 430
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 10235,
    "slug": "sneasel-hisui",
    "speciesKey": "sneasel",
    "nameJa": "ニューラ（ヒスイのすがた）",
    "nameEn": "Hisuian Sneasel",
    "imagePath": "pokemon-icons/sneasel-hisui.png",
    "types": [
      "fighting",
      "poison"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 95,
      "defense": 55,
      "specialAttack": 35,
      "specialDefense": 75,
      "speed": 115,
      "total": 430
    },
    "generation": 2,
    "debutTitle": "Pokemon LEGENDS アルセウス",
    "isDefault": false
  },
  {
    "id": 216,
    "slug": "teddiursa",
    "speciesKey": "teddiursa",
    "nameJa": "ヒメグマ",
    "nameEn": "Teddiursa",
    "imagePath": "pokemon-icons/teddiursa.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 80,
      "defense": 50,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 40,
      "total": 330
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 217,
    "slug": "ursaring",
    "speciesKey": "ursaring",
    "nameJa": "リングマ",
    "nameEn": "Ursaring",
    "imagePath": "pokemon-icons/ursaring.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 130,
      "defense": 75,
      "specialAttack": 75,
      "specialDefense": 75,
      "speed": 55,
      "total": 500
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 218,
    "slug": "slugma",
    "speciesKey": "slugma",
    "nameJa": "マグマッグ",
    "nameEn": "Slugma",
    "imagePath": "pokemon-icons/slugma.png",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 40,
      "defense": 40,
      "specialAttack": 70,
      "specialDefense": 40,
      "speed": 20,
      "total": 250
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 219,
    "slug": "magcargo",
    "speciesKey": "magcargo",
    "nameJa": "マグカルゴ",
    "nameEn": "Magcargo",
    "imagePath": "pokemon-icons/magcargo.png",
    "types": [
      "fire",
      "rock"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 50,
      "defense": 120,
      "specialAttack": 90,
      "specialDefense": 80,
      "speed": 30,
      "total": 430
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 220,
    "slug": "swinub",
    "speciesKey": "swinub",
    "nameJa": "ウリムー",
    "nameEn": "Swinub",
    "imagePath": "pokemon-icons/swinub.png",
    "types": [
      "ice",
      "ground"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 50,
      "defense": 40,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 50,
      "total": 250
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 221,
    "slug": "piloswine",
    "speciesKey": "piloswine",
    "nameJa": "イノムー",
    "nameEn": "Piloswine",
    "imagePath": "pokemon-icons/piloswine.png",
    "types": [
      "ice",
      "ground"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 100,
      "defense": 80,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 50,
      "total": 450
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 222,
    "slug": "corsola",
    "speciesKey": "corsola",
    "nameJa": "サニーゴ",
    "nameEn": "Corsola",
    "imagePath": "pokemon-icons/corsola.png",
    "types": [
      "water",
      "rock"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 55,
      "defense": 95,
      "specialAttack": 65,
      "specialDefense": 95,
      "speed": 35,
      "total": 410
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 10173,
    "slug": "corsola-galar",
    "speciesKey": "corsola",
    "nameJa": "サニーゴ（ガラルのすがた）",
    "nameEn": "Galarian Corsola",
    "imagePath": "pokemon-icons/corsola-galar.png",
    "types": [
      "ghost"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 55,
      "defense": 100,
      "specialAttack": 65,
      "specialDefense": 100,
      "speed": 30,
      "total": 410
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 223,
    "slug": "remoraid",
    "speciesKey": "remoraid",
    "nameJa": "テッポウオ",
    "nameEn": "Remoraid",
    "imagePath": "pokemon-icons/remoraid.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 65,
      "defense": 35,
      "specialAttack": 65,
      "specialDefense": 35,
      "speed": 65,
      "total": 300
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 224,
    "slug": "octillery",
    "speciesKey": "octillery",
    "nameJa": "オクタン",
    "nameEn": "Octillery",
    "imagePath": "pokemon-icons/octillery.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 105,
      "defense": 75,
      "specialAttack": 105,
      "specialDefense": 75,
      "speed": 45,
      "total": 480
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 225,
    "slug": "delibird",
    "speciesKey": "delibird",
    "nameJa": "デリバード",
    "nameEn": "Delibird",
    "imagePath": "pokemon-icons/delibird.png",
    "types": [
      "ice",
      "flying"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 55,
      "defense": 45,
      "specialAttack": 65,
      "specialDefense": 45,
      "speed": 75,
      "total": 330
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 226,
    "slug": "mantine",
    "speciesKey": "mantine",
    "nameJa": "マンタイン",
    "nameEn": "Mantine",
    "imagePath": "pokemon-icons/mantine.png",
    "types": [
      "water",
      "flying"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 40,
      "defense": 70,
      "specialAttack": 80,
      "specialDefense": 140,
      "speed": 70,
      "total": 485
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 227,
    "slug": "skarmory",
    "speciesKey": "skarmory",
    "nameJa": "エアームド",
    "nameEn": "Skarmory",
    "imagePath": "pokemon-icons/skarmory.png",
    "types": [
      "steel",
      "flying"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 80,
      "defense": 140,
      "specialAttack": 40,
      "specialDefense": 70,
      "speed": 70,
      "total": 465
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 10284,
    "slug": "skarmory-mega",
    "speciesKey": "skarmory",
    "nameJa": "メガエアームド",
    "nameEn": "Mega Skarmory",
    "imagePath": "pokemon-icons/skarmory-mega.png",
    "types": [
      "steel",
      "flying"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 140,
      "defense": 110,
      "specialAttack": 40,
      "specialDefense": 100,
      "speed": 110,
      "total": 565
    },
    "generation": 2,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 228,
    "slug": "houndour",
    "speciesKey": "houndour",
    "nameJa": "デルビル",
    "nameEn": "Houndour",
    "imagePath": "pokemon-icons/houndour.png",
    "types": [
      "dark",
      "fire"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 60,
      "defense": 30,
      "specialAttack": 80,
      "specialDefense": 50,
      "speed": 65,
      "total": 330
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 229,
    "slug": "houndoom",
    "speciesKey": "houndoom",
    "nameJa": "ヘルガー",
    "nameEn": "Houndoom",
    "imagePath": "pokemon-icons/houndoom.png",
    "types": [
      "dark",
      "fire"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 90,
      "defense": 50,
      "specialAttack": 110,
      "specialDefense": 80,
      "speed": 95,
      "total": 500
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 10048,
    "slug": "houndoom-mega",
    "speciesKey": "houndoom",
    "nameJa": "メガヘルガー",
    "nameEn": "Mega Houndoom",
    "imagePath": "pokemon-icons/houndoom-mega.png",
    "types": [
      "dark",
      "fire"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 90,
      "defense": 90,
      "specialAttack": 140,
      "specialDefense": 90,
      "speed": 115,
      "total": 600
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": false
  },
  {
    "id": 230,
    "slug": "kingdra",
    "speciesKey": "kingdra",
    "nameJa": "キングドラ",
    "nameEn": "Kingdra",
    "imagePath": "pokemon-icons/kingdra.png",
    "types": [
      "water",
      "dragon"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 95,
      "defense": 95,
      "specialAttack": 95,
      "specialDefense": 95,
      "speed": 85,
      "total": 540
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 231,
    "slug": "phanpy",
    "speciesKey": "phanpy",
    "nameJa": "ゴマゾウ",
    "nameEn": "Phanpy",
    "imagePath": "pokemon-icons/phanpy.png",
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 60,
      "defense": 60,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 40,
      "total": 330
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 232,
    "slug": "donphan",
    "speciesKey": "donphan",
    "nameJa": "ドンファン",
    "nameEn": "Donphan",
    "imagePath": "pokemon-icons/donphan.png",
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 120,
      "defense": 120,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 50,
      "total": 500
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 233,
    "slug": "porygon2",
    "speciesKey": "porygon2",
    "nameJa": "ポリゴン２",
    "nameEn": "Porygon2",
    "imagePath": "pokemon-icons/porygon2.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 80,
      "defense": 90,
      "specialAttack": 105,
      "specialDefense": 95,
      "speed": 60,
      "total": 515
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 234,
    "slug": "stantler",
    "speciesKey": "stantler",
    "nameJa": "オドシシ",
    "nameEn": "Stantler",
    "imagePath": "pokemon-icons/stantler.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 73,
      "attack": 95,
      "defense": 62,
      "specialAttack": 85,
      "specialDefense": 65,
      "speed": 85,
      "total": 465
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 235,
    "slug": "smeargle",
    "speciesKey": "smeargle",
    "nameJa": "ドーブル",
    "nameEn": "Smeargle",
    "imagePath": "pokemon-icons/smeargle.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 20,
      "defense": 35,
      "specialAttack": 20,
      "specialDefense": 45,
      "speed": 75,
      "total": 250
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 236,
    "slug": "tyrogue",
    "speciesKey": "tyrogue",
    "nameJa": "バルキー",
    "nameEn": "Tyrogue",
    "imagePath": "pokemon-icons/tyrogue.png",
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 35,
      "defense": 35,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 35,
      "total": 210
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 237,
    "slug": "hitmontop",
    "speciesKey": "hitmontop",
    "nameJa": "カポエラー",
    "nameEn": "Hitmontop",
    "imagePath": "pokemon-icons/hitmontop.png",
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 95,
      "defense": 95,
      "specialAttack": 35,
      "specialDefense": 110,
      "speed": 70,
      "total": 455
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 238,
    "slug": "smoochum",
    "speciesKey": "smoochum",
    "nameJa": "ムチュール",
    "nameEn": "Smoochum",
    "imagePath": "pokemon-icons/smoochum.png",
    "types": [
      "ice",
      "psychic"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 30,
      "defense": 15,
      "specialAttack": 85,
      "specialDefense": 65,
      "speed": 65,
      "total": 305
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 239,
    "slug": "elekid",
    "speciesKey": "elekid",
    "nameJa": "エレキッド",
    "nameEn": "Elekid",
    "imagePath": "pokemon-icons/elekid.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 63,
      "defense": 37,
      "specialAttack": 65,
      "specialDefense": 55,
      "speed": 95,
      "total": 360
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 240,
    "slug": "magby",
    "speciesKey": "magby",
    "nameJa": "ブビィ",
    "nameEn": "Magby",
    "imagePath": "pokemon-icons/magby.png",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 75,
      "defense": 37,
      "specialAttack": 70,
      "specialDefense": 55,
      "speed": 83,
      "total": 365
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 241,
    "slug": "miltank",
    "speciesKey": "miltank",
    "nameJa": "ミルタンク",
    "nameEn": "Miltank",
    "imagePath": "pokemon-icons/miltank.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 80,
      "defense": 105,
      "specialAttack": 40,
      "specialDefense": 70,
      "speed": 100,
      "total": 490
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 242,
    "slug": "blissey",
    "speciesKey": "blissey",
    "nameJa": "ハピナス",
    "nameEn": "Blissey",
    "imagePath": "pokemon-icons/blissey.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 255,
      "attack": 10,
      "defense": 10,
      "specialAttack": 75,
      "specialDefense": 135,
      "speed": 55,
      "total": 540
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 243,
    "slug": "raikou",
    "speciesKey": "raikou",
    "nameJa": "ライコウ",
    "nameEn": "Raikou",
    "imagePath": "pokemon-icons/raikou.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 85,
      "defense": 75,
      "specialAttack": 115,
      "specialDefense": 100,
      "speed": 115,
      "total": 580
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 244,
    "slug": "entei",
    "speciesKey": "entei",
    "nameJa": "エンテイ",
    "nameEn": "Entei",
    "imagePath": "pokemon-icons/entei.png",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 115,
      "attack": 115,
      "defense": 85,
      "specialAttack": 90,
      "specialDefense": 75,
      "speed": 100,
      "total": 580
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 245,
    "slug": "suicune",
    "speciesKey": "suicune",
    "nameJa": "スイクン",
    "nameEn": "Suicune",
    "imagePath": "pokemon-icons/suicune.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 75,
      "defense": 115,
      "specialAttack": 90,
      "specialDefense": 115,
      "speed": 85,
      "total": 580
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 246,
    "slug": "larvitar",
    "speciesKey": "larvitar",
    "nameJa": "ヨーギラス",
    "nameEn": "Larvitar",
    "imagePath": "pokemon-icons/larvitar.png",
    "types": [
      "rock",
      "ground"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 64,
      "defense": 50,
      "specialAttack": 45,
      "specialDefense": 50,
      "speed": 41,
      "total": 300
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 247,
    "slug": "pupitar",
    "speciesKey": "pupitar",
    "nameJa": "サナギラス",
    "nameEn": "Pupitar",
    "imagePath": "pokemon-icons/pupitar.png",
    "types": [
      "rock",
      "ground"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 84,
      "defense": 70,
      "specialAttack": 65,
      "specialDefense": 70,
      "speed": 51,
      "total": 410
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 248,
    "slug": "tyranitar",
    "speciesKey": "tyranitar",
    "nameJa": "バンギラス",
    "nameEn": "Tyranitar",
    "imagePath": "pokemon-icons/tyranitar.png",
    "types": [
      "rock",
      "dark"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 134,
      "defense": 110,
      "specialAttack": 95,
      "specialDefense": 100,
      "speed": 61,
      "total": 600
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 10049,
    "slug": "tyranitar-mega",
    "speciesKey": "tyranitar",
    "nameJa": "メガバンギラス",
    "nameEn": "Mega Tyranitar",
    "imagePath": "pokemon-icons/tyranitar-mega.png",
    "types": [
      "rock",
      "dark"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 164,
      "defense": 150,
      "specialAttack": 95,
      "specialDefense": 120,
      "speed": 71,
      "total": 700
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": false
  },
  {
    "id": 249,
    "slug": "lugia",
    "speciesKey": "lugia",
    "nameJa": "ルギア",
    "nameEn": "Lugia",
    "imagePath": "pokemon-icons/lugia.png",
    "types": [
      "psychic",
      "flying"
    ],
    "baseStats": {
      "hp": 106,
      "attack": 90,
      "defense": 130,
      "specialAttack": 90,
      "specialDefense": 154,
      "speed": 110,
      "total": 680
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 250,
    "slug": "ho-oh",
    "speciesKey": "ho-oh",
    "nameJa": "ホウオウ",
    "nameEn": "Ho-Oh",
    "imagePath": "pokemon-icons/ho-oh.png",
    "types": [
      "fire",
      "flying"
    ],
    "baseStats": {
      "hp": 106,
      "attack": 130,
      "defense": 90,
      "specialAttack": 110,
      "specialDefense": 154,
      "speed": 90,
      "total": 680
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 251,
    "slug": "celebi",
    "speciesKey": "celebi",
    "nameJa": "セレビィ",
    "nameEn": "Celebi",
    "imagePath": "pokemon-icons/celebi.png",
    "types": [
      "psychic",
      "grass"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "specialAttack": 100,
      "specialDefense": 100,
      "speed": 100,
      "total": 600
    },
    "generation": 2,
    "debutTitle": "ポケットモンスター 金・銀",
    "isDefault": true
  },
  {
    "id": 252,
    "slug": "treecko",
    "speciesKey": "treecko",
    "nameJa": "キモリ",
    "nameEn": "Treecko",
    "imagePath": "pokemon-icons/treecko.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 45,
      "defense": 35,
      "specialAttack": 65,
      "specialDefense": 55,
      "speed": 70,
      "total": 310
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 253,
    "slug": "grovyle",
    "speciesKey": "grovyle",
    "nameJa": "ジュプトル",
    "nameEn": "Grovyle",
    "imagePath": "pokemon-icons/grovyle.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 65,
      "defense": 45,
      "specialAttack": 85,
      "specialDefense": 65,
      "speed": 95,
      "total": 405
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 254,
    "slug": "sceptile",
    "speciesKey": "sceptile",
    "nameJa": "ジュカイン",
    "nameEn": "Sceptile",
    "imagePath": "pokemon-icons/sceptile.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 85,
      "defense": 65,
      "specialAttack": 105,
      "specialDefense": 85,
      "speed": 120,
      "total": 530
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 10065,
    "slug": "sceptile-mega",
    "speciesKey": "sceptile",
    "nameJa": "メガジュカイン",
    "nameEn": "Mega Sceptile",
    "imagePath": "pokemon-icons/sceptile-mega.png",
    "types": [
      "grass",
      "dragon"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 110,
      "defense": 75,
      "specialAttack": 145,
      "specialDefense": 85,
      "speed": 145,
      "total": 630
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター オメガルビー・アルファサファイア",
    "isDefault": false
  },
  {
    "id": 255,
    "slug": "torchic",
    "speciesKey": "torchic",
    "nameJa": "アチャモ",
    "nameEn": "Torchic",
    "imagePath": "pokemon-icons/torchic.png",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 60,
      "defense": 40,
      "specialAttack": 70,
      "specialDefense": 50,
      "speed": 45,
      "total": 310
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 256,
    "slug": "combusken",
    "speciesKey": "combusken",
    "nameJa": "ワカシャモ",
    "nameEn": "Combusken",
    "imagePath": "pokemon-icons/combusken.png",
    "types": [
      "fire",
      "fighting"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 85,
      "defense": 60,
      "specialAttack": 85,
      "specialDefense": 60,
      "speed": 55,
      "total": 405
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 257,
    "slug": "blaziken",
    "speciesKey": "blaziken",
    "nameJa": "バシャーモ",
    "nameEn": "Blaziken",
    "imagePath": "pokemon-icons/blaziken.png",
    "types": [
      "fire",
      "fighting"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 120,
      "defense": 70,
      "specialAttack": 110,
      "specialDefense": 70,
      "speed": 80,
      "total": 530
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 10050,
    "slug": "blaziken-mega",
    "speciesKey": "blaziken",
    "nameJa": "メガバシャーモ",
    "nameEn": "Mega Blaziken",
    "imagePath": "pokemon-icons/blaziken-mega.png",
    "types": [
      "fire",
      "fighting"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 160,
      "defense": 80,
      "specialAttack": 130,
      "specialDefense": 80,
      "speed": 100,
      "total": 630
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": false
  },
  {
    "id": 258,
    "slug": "mudkip",
    "speciesKey": "mudkip",
    "nameJa": "ミズゴロウ",
    "nameEn": "Mudkip",
    "imagePath": "pokemon-icons/mudkip.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 70,
      "defense": 50,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 40,
      "total": 310
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 259,
    "slug": "marshtomp",
    "speciesKey": "marshtomp",
    "nameJa": "ヌマクロー",
    "nameEn": "Marshtomp",
    "imagePath": "pokemon-icons/marshtomp.png",
    "types": [
      "water",
      "ground"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 85,
      "defense": 70,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 50,
      "total": 405
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 260,
    "slug": "swampert",
    "speciesKey": "swampert",
    "nameJa": "ラグラージ",
    "nameEn": "Swampert",
    "imagePath": "pokemon-icons/swampert.png",
    "types": [
      "water",
      "ground"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 110,
      "defense": 90,
      "specialAttack": 85,
      "specialDefense": 90,
      "speed": 60,
      "total": 535
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 10064,
    "slug": "swampert-mega",
    "speciesKey": "swampert",
    "nameJa": "メガラグラージ",
    "nameEn": "Mega Swampert",
    "imagePath": "pokemon-icons/swampert-mega.png",
    "types": [
      "water",
      "ground"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 150,
      "defense": 110,
      "specialAttack": 95,
      "specialDefense": 110,
      "speed": 70,
      "total": 635
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター オメガルビー・アルファサファイア",
    "isDefault": false
  },
  {
    "id": 261,
    "slug": "poochyena",
    "speciesKey": "poochyena",
    "nameJa": "ポチエナ",
    "nameEn": "Poochyena",
    "imagePath": "pokemon-icons/poochyena.png",
    "types": [
      "dark"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 55,
      "defense": 35,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 35,
      "total": 220
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 262,
    "slug": "mightyena",
    "speciesKey": "mightyena",
    "nameJa": "グラエナ",
    "nameEn": "Mightyena",
    "imagePath": "pokemon-icons/mightyena.png",
    "types": [
      "dark"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 90,
      "defense": 70,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 70,
      "total": 420
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 263,
    "slug": "zigzagoon",
    "speciesKey": "zigzagoon",
    "nameJa": "ジグザグマ",
    "nameEn": "Zigzagoon",
    "imagePath": "pokemon-icons/zigzagoon.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 38,
      "attack": 30,
      "defense": 41,
      "specialAttack": 30,
      "specialDefense": 41,
      "speed": 60,
      "total": 240
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 10174,
    "slug": "zigzagoon-galar",
    "speciesKey": "zigzagoon",
    "nameJa": "ジグザグマ（ガラルのすがた）",
    "nameEn": "Galarian Zigzagoon",
    "imagePath": "pokemon-icons/zigzagoon-galar.png",
    "types": [
      "dark",
      "normal"
    ],
    "baseStats": {
      "hp": 38,
      "attack": 30,
      "defense": 41,
      "specialAttack": 30,
      "specialDefense": 41,
      "speed": 60,
      "total": 240
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 264,
    "slug": "linoone",
    "speciesKey": "linoone",
    "nameJa": "マッスグマ",
    "nameEn": "Linoone",
    "imagePath": "pokemon-icons/linoone.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 78,
      "attack": 70,
      "defense": 61,
      "specialAttack": 50,
      "specialDefense": 61,
      "speed": 100,
      "total": 420
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 10175,
    "slug": "linoone-galar",
    "speciesKey": "linoone",
    "nameJa": "マッスグマ（ガラルのすがた）",
    "nameEn": "Galarian Linoone",
    "imagePath": "pokemon-icons/linoone-galar.png",
    "types": [
      "dark",
      "normal"
    ],
    "baseStats": {
      "hp": 78,
      "attack": 70,
      "defense": 61,
      "specialAttack": 50,
      "specialDefense": 61,
      "speed": 100,
      "total": 420
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 265,
    "slug": "wurmple",
    "speciesKey": "wurmple",
    "nameJa": "ケムッソ",
    "nameEn": "Wurmple",
    "imagePath": "pokemon-icons/wurmple.png",
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 45,
      "defense": 35,
      "specialAttack": 20,
      "specialDefense": 30,
      "speed": 20,
      "total": 195
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 266,
    "slug": "silcoon",
    "speciesKey": "silcoon",
    "nameJa": "カラサリス",
    "nameEn": "Silcoon",
    "imagePath": "pokemon-icons/silcoon.png",
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 35,
      "defense": 55,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 15,
      "total": 205
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 267,
    "slug": "beautifly",
    "speciesKey": "beautifly",
    "nameJa": "アゲハント",
    "nameEn": "Beautifly",
    "imagePath": "pokemon-icons/beautifly.png",
    "types": [
      "bug",
      "flying"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 70,
      "defense": 50,
      "specialAttack": 100,
      "specialDefense": 50,
      "speed": 65,
      "total": 395
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 268,
    "slug": "cascoon",
    "speciesKey": "cascoon",
    "nameJa": "マユルド",
    "nameEn": "Cascoon",
    "imagePath": "pokemon-icons/cascoon.png",
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 35,
      "defense": 55,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 15,
      "total": 205
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 269,
    "slug": "dustox",
    "speciesKey": "dustox",
    "nameJa": "ドクケイル",
    "nameEn": "Dustox",
    "imagePath": "pokemon-icons/dustox.png",
    "types": [
      "bug",
      "poison"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 50,
      "defense": 70,
      "specialAttack": 50,
      "specialDefense": 90,
      "speed": 65,
      "total": 385
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 270,
    "slug": "lotad",
    "speciesKey": "lotad",
    "nameJa": "ハスボー",
    "nameEn": "Lotad",
    "imagePath": "pokemon-icons/lotad.png",
    "types": [
      "water",
      "grass"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 30,
      "defense": 30,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 30,
      "total": 220
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 271,
    "slug": "lombre",
    "speciesKey": "lombre",
    "nameJa": "ハスブレロ",
    "nameEn": "Lombre",
    "imagePath": "pokemon-icons/lombre.png",
    "types": [
      "water",
      "grass"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 50,
      "defense": 50,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 50,
      "total": 340
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 272,
    "slug": "ludicolo",
    "speciesKey": "ludicolo",
    "nameJa": "ルンパッパ",
    "nameEn": "Ludicolo",
    "imagePath": "pokemon-icons/ludicolo.png",
    "types": [
      "water",
      "grass"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 70,
      "defense": 70,
      "specialAttack": 90,
      "specialDefense": 100,
      "speed": 70,
      "total": 480
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 273,
    "slug": "seedot",
    "speciesKey": "seedot",
    "nameJa": "タネボー",
    "nameEn": "Seedot",
    "imagePath": "pokemon-icons/seedot.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 40,
      "defense": 50,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 30,
      "total": 220
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 274,
    "slug": "nuzleaf",
    "speciesKey": "nuzleaf",
    "nameJa": "コノハナ",
    "nameEn": "Nuzleaf",
    "imagePath": "pokemon-icons/nuzleaf.png",
    "types": [
      "grass",
      "dark"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 70,
      "defense": 40,
      "specialAttack": 60,
      "specialDefense": 40,
      "speed": 60,
      "total": 340
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 275,
    "slug": "shiftry",
    "speciesKey": "shiftry",
    "nameJa": "ダーテング",
    "nameEn": "Shiftry",
    "imagePath": "pokemon-icons/shiftry.png",
    "types": [
      "grass",
      "dark"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 100,
      "defense": 60,
      "specialAttack": 90,
      "specialDefense": 60,
      "speed": 80,
      "total": 480
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 276,
    "slug": "taillow",
    "speciesKey": "taillow",
    "nameJa": "スバメ",
    "nameEn": "Taillow",
    "imagePath": "pokemon-icons/taillow.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 55,
      "defense": 30,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 85,
      "total": 270
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 277,
    "slug": "swellow",
    "speciesKey": "swellow",
    "nameJa": "オオスバメ",
    "nameEn": "Swellow",
    "imagePath": "pokemon-icons/swellow.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 85,
      "defense": 60,
      "specialAttack": 75,
      "specialDefense": 50,
      "speed": 125,
      "total": 455
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 278,
    "slug": "wingull",
    "speciesKey": "wingull",
    "nameJa": "キャモメ",
    "nameEn": "Wingull",
    "imagePath": "pokemon-icons/wingull.png",
    "types": [
      "water",
      "flying"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 30,
      "defense": 30,
      "specialAttack": 55,
      "specialDefense": 30,
      "speed": 85,
      "total": 270
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 279,
    "slug": "pelipper",
    "speciesKey": "pelipper",
    "nameJa": "ペリッパー",
    "nameEn": "Pelipper",
    "imagePath": "pokemon-icons/pelipper.png",
    "types": [
      "water",
      "flying"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 50,
      "defense": 100,
      "specialAttack": 95,
      "specialDefense": 70,
      "speed": 65,
      "total": 440
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 280,
    "slug": "ralts",
    "speciesKey": "ralts",
    "nameJa": "ラルトス",
    "nameEn": "Ralts",
    "imagePath": "pokemon-icons/ralts.png",
    "types": [
      "psychic",
      "fairy"
    ],
    "baseStats": {
      "hp": 28,
      "attack": 25,
      "defense": 25,
      "specialAttack": 45,
      "specialDefense": 35,
      "speed": 40,
      "total": 198
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 281,
    "slug": "kirlia",
    "speciesKey": "kirlia",
    "nameJa": "キルリア",
    "nameEn": "Kirlia",
    "imagePath": "pokemon-icons/kirlia.png",
    "types": [
      "psychic",
      "fairy"
    ],
    "baseStats": {
      "hp": 38,
      "attack": 35,
      "defense": 35,
      "specialAttack": 65,
      "specialDefense": 55,
      "speed": 50,
      "total": 278
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 282,
    "slug": "gardevoir",
    "speciesKey": "gardevoir",
    "nameJa": "サーナイト",
    "nameEn": "Gardevoir",
    "imagePath": "pokemon-icons/gardevoir.png",
    "types": [
      "psychic",
      "fairy"
    ],
    "baseStats": {
      "hp": 68,
      "attack": 65,
      "defense": 65,
      "specialAttack": 125,
      "specialDefense": 115,
      "speed": 80,
      "total": 518
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 10051,
    "slug": "gardevoir-mega",
    "speciesKey": "gardevoir",
    "nameJa": "メガサーナイト",
    "nameEn": "Mega Gardevoir",
    "imagePath": "pokemon-icons/gardevoir-mega.png",
    "types": [
      "psychic",
      "fairy"
    ],
    "baseStats": {
      "hp": 68,
      "attack": 85,
      "defense": 65,
      "specialAttack": 165,
      "specialDefense": 135,
      "speed": 100,
      "total": 618
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": false
  },
  {
    "id": 283,
    "slug": "surskit",
    "speciesKey": "surskit",
    "nameJa": "アメタマ",
    "nameEn": "Surskit",
    "imagePath": "pokemon-icons/surskit.png",
    "types": [
      "bug",
      "water"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 30,
      "defense": 32,
      "specialAttack": 50,
      "specialDefense": 52,
      "speed": 65,
      "total": 269
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 284,
    "slug": "masquerain",
    "speciesKey": "masquerain",
    "nameJa": "アメモース",
    "nameEn": "Masquerain",
    "imagePath": "pokemon-icons/masquerain.png",
    "types": [
      "bug",
      "flying"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 60,
      "defense": 62,
      "specialAttack": 100,
      "specialDefense": 82,
      "speed": 80,
      "total": 454
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 285,
    "slug": "shroomish",
    "speciesKey": "shroomish",
    "nameJa": "キノココ",
    "nameEn": "Shroomish",
    "imagePath": "pokemon-icons/shroomish.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 40,
      "defense": 60,
      "specialAttack": 40,
      "specialDefense": 60,
      "speed": 35,
      "total": 295
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 286,
    "slug": "breloom",
    "speciesKey": "breloom",
    "nameJa": "キノガッサ",
    "nameEn": "Breloom",
    "imagePath": "pokemon-icons/breloom.png",
    "types": [
      "grass",
      "fighting"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 130,
      "defense": 80,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 70,
      "total": 460
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 287,
    "slug": "slakoth",
    "speciesKey": "slakoth",
    "nameJa": "ナマケロ",
    "nameEn": "Slakoth",
    "imagePath": "pokemon-icons/slakoth.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 60,
      "defense": 60,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 30,
      "total": 280
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 288,
    "slug": "vigoroth",
    "speciesKey": "vigoroth",
    "nameJa": "ヤルキモノ",
    "nameEn": "Vigoroth",
    "imagePath": "pokemon-icons/vigoroth.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 80,
      "defense": 80,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 90,
      "total": 440
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 289,
    "slug": "slaking",
    "speciesKey": "slaking",
    "nameJa": "ケッキング",
    "nameEn": "Slaking",
    "imagePath": "pokemon-icons/slaking.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 150,
      "attack": 160,
      "defense": 100,
      "specialAttack": 95,
      "specialDefense": 65,
      "speed": 100,
      "total": 670
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 290,
    "slug": "nincada",
    "speciesKey": "nincada",
    "nameJa": "ツチニン",
    "nameEn": "Nincada",
    "imagePath": "pokemon-icons/nincada.png",
    "types": [
      "bug",
      "ground"
    ],
    "baseStats": {
      "hp": 31,
      "attack": 45,
      "defense": 90,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 40,
      "total": 266
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 291,
    "slug": "ninjask",
    "speciesKey": "ninjask",
    "nameJa": "テッカニン",
    "nameEn": "Ninjask",
    "imagePath": "pokemon-icons/ninjask.png",
    "types": [
      "bug",
      "flying"
    ],
    "baseStats": {
      "hp": 61,
      "attack": 90,
      "defense": 45,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 160,
      "total": 456
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 292,
    "slug": "shedinja",
    "speciesKey": "shedinja",
    "nameJa": "ヌケニン",
    "nameEn": "Shedinja",
    "imagePath": "pokemon-icons/shedinja.png",
    "types": [
      "bug",
      "ghost"
    ],
    "baseStats": {
      "hp": 1,
      "attack": 90,
      "defense": 45,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 40,
      "total": 236
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 293,
    "slug": "whismur",
    "speciesKey": "whismur",
    "nameJa": "ゴニョニョ",
    "nameEn": "Whismur",
    "imagePath": "pokemon-icons/whismur.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 64,
      "attack": 51,
      "defense": 23,
      "specialAttack": 51,
      "specialDefense": 23,
      "speed": 28,
      "total": 240
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 294,
    "slug": "loudred",
    "speciesKey": "loudred",
    "nameJa": "ドゴーム",
    "nameEn": "Loudred",
    "imagePath": "pokemon-icons/loudred.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 84,
      "attack": 71,
      "defense": 43,
      "specialAttack": 71,
      "specialDefense": 43,
      "speed": 48,
      "total": 360
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 295,
    "slug": "exploud",
    "speciesKey": "exploud",
    "nameJa": "バクオング",
    "nameEn": "Exploud",
    "imagePath": "pokemon-icons/exploud.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 104,
      "attack": 91,
      "defense": 63,
      "specialAttack": 91,
      "specialDefense": 73,
      "speed": 68,
      "total": 490
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 296,
    "slug": "makuhita",
    "speciesKey": "makuhita",
    "nameJa": "マクノシタ",
    "nameEn": "Makuhita",
    "imagePath": "pokemon-icons/makuhita.png",
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 72,
      "attack": 60,
      "defense": 30,
      "specialAttack": 20,
      "specialDefense": 30,
      "speed": 25,
      "total": 237
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 297,
    "slug": "hariyama",
    "speciesKey": "hariyama",
    "nameJa": "ハリテヤマ",
    "nameEn": "Hariyama",
    "imagePath": "pokemon-icons/hariyama.png",
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 144,
      "attack": 120,
      "defense": 60,
      "specialAttack": 40,
      "specialDefense": 60,
      "speed": 50,
      "total": 474
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 298,
    "slug": "azurill",
    "speciesKey": "azurill",
    "nameJa": "ルリリ",
    "nameEn": "Azurill",
    "imagePath": "pokemon-icons/azurill.png",
    "types": [
      "normal",
      "fairy"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 20,
      "defense": 40,
      "specialAttack": 20,
      "specialDefense": 40,
      "speed": 20,
      "total": 190
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 299,
    "slug": "nosepass",
    "speciesKey": "nosepass",
    "nameJa": "ノズパス",
    "nameEn": "Nosepass",
    "imagePath": "pokemon-icons/nosepass.png",
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 30,
      "attack": 45,
      "defense": 135,
      "specialAttack": 45,
      "specialDefense": 90,
      "speed": 30,
      "total": 375
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 300,
    "slug": "skitty",
    "speciesKey": "skitty",
    "nameJa": "エネコ",
    "nameEn": "Skitty",
    "imagePath": "pokemon-icons/skitty.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 45,
      "defense": 45,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 50,
      "total": 260
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 301,
    "slug": "delcatty",
    "speciesKey": "delcatty",
    "nameJa": "エネコロロ",
    "nameEn": "Delcatty",
    "imagePath": "pokemon-icons/delcatty.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 65,
      "defense": 65,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 90,
      "total": 400
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 302,
    "slug": "sableye",
    "speciesKey": "sableye",
    "nameJa": "ヤミラミ",
    "nameEn": "Sableye",
    "imagePath": "pokemon-icons/sableye.png",
    "types": [
      "dark",
      "ghost"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 75,
      "defense": 75,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 50,
      "total": 380
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 10066,
    "slug": "sableye-mega",
    "speciesKey": "sableye",
    "nameJa": "メガヤミラミ",
    "nameEn": "Mega Sableye",
    "imagePath": "pokemon-icons/sableye-mega.png",
    "types": [
      "dark",
      "ghost"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 85,
      "defense": 125,
      "specialAttack": 85,
      "specialDefense": 115,
      "speed": 20,
      "total": 480
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター オメガルビー・アルファサファイア",
    "isDefault": false
  },
  {
    "id": 303,
    "slug": "mawile",
    "speciesKey": "mawile",
    "nameJa": "クチート",
    "nameEn": "Mawile",
    "imagePath": "pokemon-icons/mawile.png",
    "types": [
      "steel",
      "fairy"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 85,
      "defense": 85,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 50,
      "total": 380
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 10052,
    "slug": "mawile-mega",
    "speciesKey": "mawile",
    "nameJa": "メガクチート",
    "nameEn": "Mega Mawile",
    "imagePath": "pokemon-icons/mawile-mega.png",
    "types": [
      "steel",
      "fairy"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 105,
      "defense": 125,
      "specialAttack": 55,
      "specialDefense": 95,
      "speed": 50,
      "total": 480
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": false
  },
  {
    "id": 304,
    "slug": "aron",
    "speciesKey": "aron",
    "nameJa": "ココドラ",
    "nameEn": "Aron",
    "imagePath": "pokemon-icons/aron.png",
    "types": [
      "steel",
      "rock"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 70,
      "defense": 100,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 30,
      "total": 330
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 305,
    "slug": "lairon",
    "speciesKey": "lairon",
    "nameJa": "コドラ",
    "nameEn": "Lairon",
    "imagePath": "pokemon-icons/lairon.png",
    "types": [
      "steel",
      "rock"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 90,
      "defense": 140,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 40,
      "total": 430
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 306,
    "slug": "aggron",
    "speciesKey": "aggron",
    "nameJa": "ボスゴドラ",
    "nameEn": "Aggron",
    "imagePath": "pokemon-icons/aggron.png",
    "types": [
      "steel",
      "rock"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 110,
      "defense": 180,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 50,
      "total": 530
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 10053,
    "slug": "aggron-mega",
    "speciesKey": "aggron",
    "nameJa": "メガボスゴドラ",
    "nameEn": "Mega Aggron",
    "imagePath": "pokemon-icons/aggron-mega.png",
    "types": [
      "steel"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 140,
      "defense": 230,
      "specialAttack": 60,
      "specialDefense": 80,
      "speed": 50,
      "total": 630
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": false
  },
  {
    "id": 307,
    "slug": "meditite",
    "speciesKey": "meditite",
    "nameJa": "アサナン",
    "nameEn": "Meditite",
    "imagePath": "pokemon-icons/meditite.png",
    "types": [
      "fighting",
      "psychic"
    ],
    "baseStats": {
      "hp": 30,
      "attack": 40,
      "defense": 55,
      "specialAttack": 40,
      "specialDefense": 55,
      "speed": 60,
      "total": 280
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 308,
    "slug": "medicham",
    "speciesKey": "medicham",
    "nameJa": "チャーレム",
    "nameEn": "Medicham",
    "imagePath": "pokemon-icons/medicham.png",
    "types": [
      "fighting",
      "psychic"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 60,
      "defense": 75,
      "specialAttack": 60,
      "specialDefense": 75,
      "speed": 80,
      "total": 410
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 10054,
    "slug": "medicham-mega",
    "speciesKey": "medicham",
    "nameJa": "メガチャーレム",
    "nameEn": "Mega Medicham",
    "imagePath": "pokemon-icons/medicham-mega.png",
    "types": [
      "fighting",
      "psychic"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 100,
      "defense": 85,
      "specialAttack": 80,
      "specialDefense": 85,
      "speed": 100,
      "total": 510
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": false
  },
  {
    "id": 309,
    "slug": "electrike",
    "speciesKey": "electrike",
    "nameJa": "ラクライ",
    "nameEn": "Electrike",
    "imagePath": "pokemon-icons/electrike.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 45,
      "defense": 40,
      "specialAttack": 65,
      "specialDefense": 40,
      "speed": 65,
      "total": 295
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 310,
    "slug": "manectric",
    "speciesKey": "manectric",
    "nameJa": "ライボルト",
    "nameEn": "Manectric",
    "imagePath": "pokemon-icons/manectric.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 75,
      "defense": 60,
      "specialAttack": 105,
      "specialDefense": 60,
      "speed": 105,
      "total": 475
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 10055,
    "slug": "manectric-mega",
    "speciesKey": "manectric",
    "nameJa": "メガライボルト",
    "nameEn": "Mega Manectric",
    "imagePath": "pokemon-icons/manectric-mega.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 75,
      "defense": 80,
      "specialAttack": 135,
      "specialDefense": 80,
      "speed": 135,
      "total": 575
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": false
  },
  {
    "id": 311,
    "slug": "plusle",
    "speciesKey": "plusle",
    "nameJa": "プラスル",
    "nameEn": "Plusle",
    "imagePath": "pokemon-icons/plusle.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 50,
      "defense": 40,
      "specialAttack": 85,
      "specialDefense": 75,
      "speed": 95,
      "total": 405
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 312,
    "slug": "minun",
    "speciesKey": "minun",
    "nameJa": "マイナン",
    "nameEn": "Minun",
    "imagePath": "pokemon-icons/minun.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 40,
      "defense": 50,
      "specialAttack": 75,
      "specialDefense": 85,
      "speed": 95,
      "total": 405
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 313,
    "slug": "volbeat",
    "speciesKey": "volbeat",
    "nameJa": "バルビート",
    "nameEn": "Volbeat",
    "imagePath": "pokemon-icons/volbeat.png",
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 73,
      "defense": 75,
      "specialAttack": 47,
      "specialDefense": 85,
      "speed": 85,
      "total": 430
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 314,
    "slug": "illumise",
    "speciesKey": "illumise",
    "nameJa": "イルミーゼ",
    "nameEn": "Illumise",
    "imagePath": "pokemon-icons/illumise.png",
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 47,
      "defense": 75,
      "specialAttack": 73,
      "specialDefense": 85,
      "speed": 85,
      "total": 430
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 315,
    "slug": "roselia",
    "speciesKey": "roselia",
    "nameJa": "ロゼリア",
    "nameEn": "Roselia",
    "imagePath": "pokemon-icons/roselia.png",
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 60,
      "defense": 45,
      "specialAttack": 100,
      "specialDefense": 80,
      "speed": 65,
      "total": 400
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 316,
    "slug": "gulpin",
    "speciesKey": "gulpin",
    "nameJa": "ゴクリン",
    "nameEn": "Gulpin",
    "imagePath": "pokemon-icons/gulpin.png",
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 43,
      "defense": 53,
      "specialAttack": 43,
      "specialDefense": 53,
      "speed": 40,
      "total": 302
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 317,
    "slug": "swalot",
    "speciesKey": "swalot",
    "nameJa": "マルノーム",
    "nameEn": "Swalot",
    "imagePath": "pokemon-icons/swalot.png",
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 73,
      "defense": 83,
      "specialAttack": 73,
      "specialDefense": 83,
      "speed": 55,
      "total": 467
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 318,
    "slug": "carvanha",
    "speciesKey": "carvanha",
    "nameJa": "キバニア",
    "nameEn": "Carvanha",
    "imagePath": "pokemon-icons/carvanha.png",
    "types": [
      "water",
      "dark"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 90,
      "defense": 20,
      "specialAttack": 65,
      "specialDefense": 20,
      "speed": 65,
      "total": 305
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 319,
    "slug": "sharpedo",
    "speciesKey": "sharpedo",
    "nameJa": "サメハダー",
    "nameEn": "Sharpedo",
    "imagePath": "pokemon-icons/sharpedo.png",
    "types": [
      "water",
      "dark"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 120,
      "defense": 40,
      "specialAttack": 95,
      "specialDefense": 40,
      "speed": 95,
      "total": 460
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 10070,
    "slug": "sharpedo-mega",
    "speciesKey": "sharpedo",
    "nameJa": "メガサメハダー",
    "nameEn": "Mega Sharpedo",
    "imagePath": "pokemon-icons/sharpedo-mega.png",
    "types": [
      "water",
      "dark"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 140,
      "defense": 70,
      "specialAttack": 110,
      "specialDefense": 65,
      "speed": 105,
      "total": 560
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター オメガルビー・アルファサファイア",
    "isDefault": false
  },
  {
    "id": 320,
    "slug": "wailmer",
    "speciesKey": "wailmer",
    "nameJa": "ホエルコ",
    "nameEn": "Wailmer",
    "imagePath": "pokemon-icons/wailmer.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 130,
      "attack": 70,
      "defense": 35,
      "specialAttack": 70,
      "specialDefense": 35,
      "speed": 60,
      "total": 400
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 321,
    "slug": "wailord",
    "speciesKey": "wailord",
    "nameJa": "ホエルオー",
    "nameEn": "Wailord",
    "imagePath": "pokemon-icons/wailord.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 170,
      "attack": 90,
      "defense": 45,
      "specialAttack": 90,
      "specialDefense": 45,
      "speed": 60,
      "total": 500
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 322,
    "slug": "numel",
    "speciesKey": "numel",
    "nameJa": "ドンメル",
    "nameEn": "Numel",
    "imagePath": "pokemon-icons/numel.png",
    "types": [
      "fire",
      "ground"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 60,
      "defense": 40,
      "specialAttack": 65,
      "specialDefense": 45,
      "speed": 35,
      "total": 305
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 323,
    "slug": "camerupt",
    "speciesKey": "camerupt",
    "nameJa": "バクーダ",
    "nameEn": "Camerupt",
    "imagePath": "pokemon-icons/camerupt.png",
    "types": [
      "fire",
      "ground"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 100,
      "defense": 70,
      "specialAttack": 105,
      "specialDefense": 75,
      "speed": 40,
      "total": 460
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 10087,
    "slug": "camerupt-mega",
    "speciesKey": "camerupt",
    "nameJa": "メガバクーダ",
    "nameEn": "Mega Camerupt",
    "imagePath": "pokemon-icons/camerupt-mega.png",
    "types": [
      "fire",
      "ground"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 120,
      "defense": 100,
      "specialAttack": 145,
      "specialDefense": 105,
      "speed": 20,
      "total": 560
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター オメガルビー・アルファサファイア",
    "isDefault": false
  },
  {
    "id": 324,
    "slug": "torkoal",
    "speciesKey": "torkoal",
    "nameJa": "コータス",
    "nameEn": "Torkoal",
    "imagePath": "pokemon-icons/torkoal.png",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 85,
      "defense": 140,
      "specialAttack": 85,
      "specialDefense": 70,
      "speed": 20,
      "total": 470
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 325,
    "slug": "spoink",
    "speciesKey": "spoink",
    "nameJa": "バネブー",
    "nameEn": "Spoink",
    "imagePath": "pokemon-icons/spoink.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 25,
      "defense": 35,
      "specialAttack": 70,
      "specialDefense": 80,
      "speed": 60,
      "total": 330
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 326,
    "slug": "grumpig",
    "speciesKey": "grumpig",
    "nameJa": "ブーピッグ",
    "nameEn": "Grumpig",
    "imagePath": "pokemon-icons/grumpig.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 45,
      "defense": 65,
      "specialAttack": 90,
      "specialDefense": 110,
      "speed": 80,
      "total": 470
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 327,
    "slug": "spinda",
    "speciesKey": "spinda",
    "nameJa": "パッチール",
    "nameEn": "Spinda",
    "imagePath": "pokemon-icons/spinda.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 60,
      "defense": 60,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 60,
      "total": 360
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 328,
    "slug": "trapinch",
    "speciesKey": "trapinch",
    "nameJa": "ナックラー",
    "nameEn": "Trapinch",
    "imagePath": "pokemon-icons/trapinch.png",
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 100,
      "defense": 45,
      "specialAttack": 45,
      "specialDefense": 45,
      "speed": 10,
      "total": 290
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 329,
    "slug": "vibrava",
    "speciesKey": "vibrava",
    "nameJa": "ビブラーバ",
    "nameEn": "Vibrava",
    "imagePath": "pokemon-icons/vibrava.png",
    "types": [
      "ground",
      "dragon"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 70,
      "defense": 50,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 70,
      "total": 340
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 330,
    "slug": "flygon",
    "speciesKey": "flygon",
    "nameJa": "フライゴン",
    "nameEn": "Flygon",
    "imagePath": "pokemon-icons/flygon.png",
    "types": [
      "ground",
      "dragon"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 100,
      "defense": 80,
      "specialAttack": 80,
      "specialDefense": 80,
      "speed": 100,
      "total": 520
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 331,
    "slug": "cacnea",
    "speciesKey": "cacnea",
    "nameJa": "サボネア",
    "nameEn": "Cacnea",
    "imagePath": "pokemon-icons/cacnea.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 85,
      "defense": 40,
      "specialAttack": 85,
      "specialDefense": 40,
      "speed": 35,
      "total": 335
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 332,
    "slug": "cacturne",
    "speciesKey": "cacturne",
    "nameJa": "ノクタス",
    "nameEn": "Cacturne",
    "imagePath": "pokemon-icons/cacturne.png",
    "types": [
      "grass",
      "dark"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 115,
      "defense": 60,
      "specialAttack": 115,
      "specialDefense": 60,
      "speed": 55,
      "total": 475
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 333,
    "slug": "swablu",
    "speciesKey": "swablu",
    "nameJa": "チルット",
    "nameEn": "Swablu",
    "imagePath": "pokemon-icons/swablu.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 40,
      "defense": 60,
      "specialAttack": 40,
      "specialDefense": 75,
      "speed": 50,
      "total": 310
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 334,
    "slug": "altaria",
    "speciesKey": "altaria",
    "nameJa": "チルタリス",
    "nameEn": "Altaria",
    "imagePath": "pokemon-icons/altaria.png",
    "types": [
      "dragon",
      "flying"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 70,
      "defense": 90,
      "specialAttack": 70,
      "specialDefense": 105,
      "speed": 80,
      "total": 490
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 10067,
    "slug": "altaria-mega",
    "speciesKey": "altaria",
    "nameJa": "メガチルタリス",
    "nameEn": "Mega Altaria",
    "imagePath": "pokemon-icons/altaria-mega.png",
    "types": [
      "dragon",
      "fairy"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 110,
      "defense": 110,
      "specialAttack": 110,
      "specialDefense": 105,
      "speed": 80,
      "total": 590
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター オメガルビー・アルファサファイア",
    "isDefault": false
  },
  {
    "id": 335,
    "slug": "zangoose",
    "speciesKey": "zangoose",
    "nameJa": "ザングース",
    "nameEn": "Zangoose",
    "imagePath": "pokemon-icons/zangoose.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 73,
      "attack": 115,
      "defense": 60,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 90,
      "total": 458
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 336,
    "slug": "seviper",
    "speciesKey": "seviper",
    "nameJa": "ハブネーク",
    "nameEn": "Seviper",
    "imagePath": "pokemon-icons/seviper.png",
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 73,
      "attack": 100,
      "defense": 60,
      "specialAttack": 100,
      "specialDefense": 60,
      "speed": 65,
      "total": 458
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 337,
    "slug": "lunatone",
    "speciesKey": "lunatone",
    "nameJa": "ルナトーン",
    "nameEn": "Lunatone",
    "imagePath": "pokemon-icons/lunatone.png",
    "types": [
      "rock",
      "psychic"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 55,
      "defense": 65,
      "specialAttack": 95,
      "specialDefense": 85,
      "speed": 70,
      "total": 460
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 338,
    "slug": "solrock",
    "speciesKey": "solrock",
    "nameJa": "ソルロック",
    "nameEn": "Solrock",
    "imagePath": "pokemon-icons/solrock.png",
    "types": [
      "rock",
      "psychic"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 95,
      "defense": 85,
      "specialAttack": 55,
      "specialDefense": 65,
      "speed": 70,
      "total": 460
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 339,
    "slug": "barboach",
    "speciesKey": "barboach",
    "nameJa": "ドジョッチ",
    "nameEn": "Barboach",
    "imagePath": "pokemon-icons/barboach.png",
    "types": [
      "water",
      "ground"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 48,
      "defense": 43,
      "specialAttack": 46,
      "specialDefense": 41,
      "speed": 60,
      "total": 288
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 340,
    "slug": "whiscash",
    "speciesKey": "whiscash",
    "nameJa": "ナマズン",
    "nameEn": "Whiscash",
    "imagePath": "pokemon-icons/whiscash.png",
    "types": [
      "water",
      "ground"
    ],
    "baseStats": {
      "hp": 110,
      "attack": 78,
      "defense": 73,
      "specialAttack": 76,
      "specialDefense": 71,
      "speed": 60,
      "total": 468
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 341,
    "slug": "corphish",
    "speciesKey": "corphish",
    "nameJa": "ヘイガニ",
    "nameEn": "Corphish",
    "imagePath": "pokemon-icons/corphish.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 43,
      "attack": 80,
      "defense": 65,
      "specialAttack": 50,
      "specialDefense": 35,
      "speed": 35,
      "total": 308
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 342,
    "slug": "crawdaunt",
    "speciesKey": "crawdaunt",
    "nameJa": "シザリガー",
    "nameEn": "Crawdaunt",
    "imagePath": "pokemon-icons/crawdaunt.png",
    "types": [
      "water",
      "dark"
    ],
    "baseStats": {
      "hp": 63,
      "attack": 120,
      "defense": 85,
      "specialAttack": 90,
      "specialDefense": 55,
      "speed": 55,
      "total": 468
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 343,
    "slug": "baltoy",
    "speciesKey": "baltoy",
    "nameJa": "ヤジロン",
    "nameEn": "Baltoy",
    "imagePath": "pokemon-icons/baltoy.png",
    "types": [
      "ground",
      "psychic"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 40,
      "defense": 55,
      "specialAttack": 40,
      "specialDefense": 70,
      "speed": 55,
      "total": 300
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 344,
    "slug": "claydol",
    "speciesKey": "claydol",
    "nameJa": "ネンドール",
    "nameEn": "Claydol",
    "imagePath": "pokemon-icons/claydol.png",
    "types": [
      "ground",
      "psychic"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 70,
      "defense": 105,
      "specialAttack": 70,
      "specialDefense": 120,
      "speed": 75,
      "total": 500
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 345,
    "slug": "lileep",
    "speciesKey": "lileep",
    "nameJa": "リリーラ",
    "nameEn": "Lileep",
    "imagePath": "pokemon-icons/lileep.png",
    "types": [
      "rock",
      "grass"
    ],
    "baseStats": {
      "hp": 66,
      "attack": 41,
      "defense": 77,
      "specialAttack": 61,
      "specialDefense": 87,
      "speed": 23,
      "total": 355
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 346,
    "slug": "cradily",
    "speciesKey": "cradily",
    "nameJa": "ユレイドル",
    "nameEn": "Cradily",
    "imagePath": "pokemon-icons/cradily.png",
    "types": [
      "rock",
      "grass"
    ],
    "baseStats": {
      "hp": 86,
      "attack": 81,
      "defense": 97,
      "specialAttack": 81,
      "specialDefense": 107,
      "speed": 43,
      "total": 495
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 347,
    "slug": "anorith",
    "speciesKey": "anorith",
    "nameJa": "アノプス",
    "nameEn": "Anorith",
    "imagePath": "pokemon-icons/anorith.png",
    "types": [
      "rock",
      "bug"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 95,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 75,
      "total": 355
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 348,
    "slug": "armaldo",
    "speciesKey": "armaldo",
    "nameJa": "アーマルド",
    "nameEn": "Armaldo",
    "imagePath": "pokemon-icons/armaldo.png",
    "types": [
      "rock",
      "bug"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 125,
      "defense": 100,
      "specialAttack": 70,
      "specialDefense": 80,
      "speed": 45,
      "total": 495
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 349,
    "slug": "feebas",
    "speciesKey": "feebas",
    "nameJa": "ヒンバス",
    "nameEn": "Feebas",
    "imagePath": "pokemon-icons/feebas.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 20,
      "attack": 15,
      "defense": 20,
      "specialAttack": 10,
      "specialDefense": 55,
      "speed": 80,
      "total": 200
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 350,
    "slug": "milotic",
    "speciesKey": "milotic",
    "nameJa": "ミロカロス",
    "nameEn": "Milotic",
    "imagePath": "pokemon-icons/milotic.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 60,
      "defense": 79,
      "specialAttack": 100,
      "specialDefense": 125,
      "speed": 81,
      "total": 540
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 351,
    "slug": "castform",
    "speciesKey": "castform",
    "nameJa": "ポワルン",
    "nameEn": "Castform",
    "imagePath": "pokemon-icons/castform.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 70,
      "defense": 70,
      "specialAttack": 70,
      "specialDefense": 70,
      "speed": 70,
      "total": 420
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 10013,
    "slug": "castform-sunny",
    "speciesKey": "castform",
    "nameJa": "ポワルン（たいようのすがた）",
    "nameEn": "Sunny Castform",
    "imagePath": "pokemon-icons/castform-sunny.png",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 70,
      "defense": 70,
      "specialAttack": 70,
      "specialDefense": 70,
      "speed": 70,
      "total": 420
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": false
  },
  {
    "id": 10014,
    "slug": "castform-rainy",
    "speciesKey": "castform",
    "nameJa": "ポワルン（あまみずのすがた）",
    "nameEn": "Rainy Castform",
    "imagePath": "pokemon-icons/castform-rainy.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 70,
      "defense": 70,
      "specialAttack": 70,
      "specialDefense": 70,
      "speed": 70,
      "total": 420
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": false
  },
  {
    "id": 10015,
    "slug": "castform-snowy",
    "speciesKey": "castform",
    "nameJa": "ポワルン（ゆきぐものすがた）",
    "nameEn": "Snowy Castform",
    "imagePath": "pokemon-icons/castform-snowy.png",
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 70,
      "defense": 70,
      "specialAttack": 70,
      "specialDefense": 70,
      "speed": 70,
      "total": 420
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": false
  },
  {
    "id": 352,
    "slug": "kecleon",
    "speciesKey": "kecleon",
    "nameJa": "カクレオン",
    "nameEn": "Kecleon",
    "imagePath": "pokemon-icons/kecleon.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 90,
      "defense": 70,
      "specialAttack": 60,
      "specialDefense": 120,
      "speed": 40,
      "total": 440
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 353,
    "slug": "shuppet",
    "speciesKey": "shuppet",
    "nameJa": "カゲボウズ",
    "nameEn": "Shuppet",
    "imagePath": "pokemon-icons/shuppet.png",
    "types": [
      "ghost"
    ],
    "baseStats": {
      "hp": 44,
      "attack": 75,
      "defense": 35,
      "specialAttack": 63,
      "specialDefense": 33,
      "speed": 45,
      "total": 295
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 354,
    "slug": "banette",
    "speciesKey": "banette",
    "nameJa": "ジュペッタ",
    "nameEn": "Banette",
    "imagePath": "pokemon-icons/banette.png",
    "types": [
      "ghost"
    ],
    "baseStats": {
      "hp": 64,
      "attack": 115,
      "defense": 65,
      "specialAttack": 83,
      "specialDefense": 63,
      "speed": 65,
      "total": 455
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 10056,
    "slug": "banette-mega",
    "speciesKey": "banette",
    "nameJa": "メガジュペッタ",
    "nameEn": "Mega Banette",
    "imagePath": "pokemon-icons/banette-mega.png",
    "types": [
      "ghost"
    ],
    "baseStats": {
      "hp": 64,
      "attack": 165,
      "defense": 75,
      "specialAttack": 93,
      "specialDefense": 83,
      "speed": 75,
      "total": 555
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": false
  },
  {
    "id": 355,
    "slug": "duskull",
    "speciesKey": "duskull",
    "nameJa": "ヨマワル",
    "nameEn": "Duskull",
    "imagePath": "pokemon-icons/duskull.png",
    "types": [
      "ghost"
    ],
    "baseStats": {
      "hp": 20,
      "attack": 40,
      "defense": 90,
      "specialAttack": 30,
      "specialDefense": 90,
      "speed": 25,
      "total": 295
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 356,
    "slug": "dusclops",
    "speciesKey": "dusclops",
    "nameJa": "サマヨール",
    "nameEn": "Dusclops",
    "imagePath": "pokemon-icons/dusclops.png",
    "types": [
      "ghost"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 70,
      "defense": 130,
      "specialAttack": 60,
      "specialDefense": 130,
      "speed": 25,
      "total": 455
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 357,
    "slug": "tropius",
    "speciesKey": "tropius",
    "nameJa": "トロピウス",
    "nameEn": "Tropius",
    "imagePath": "pokemon-icons/tropius.png",
    "types": [
      "grass",
      "flying"
    ],
    "baseStats": {
      "hp": 99,
      "attack": 68,
      "defense": 83,
      "specialAttack": 72,
      "specialDefense": 87,
      "speed": 51,
      "total": 460
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 358,
    "slug": "chimecho",
    "speciesKey": "chimecho",
    "nameJa": "チリーン",
    "nameEn": "Chimecho",
    "imagePath": "pokemon-icons/chimecho.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 50,
      "defense": 80,
      "specialAttack": 95,
      "specialDefense": 90,
      "speed": 65,
      "total": 455
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 10306,
    "slug": "chimecho-mega",
    "speciesKey": "chimecho",
    "nameJa": "メガチリーン",
    "nameEn": "Mega Chimecho",
    "imagePath": "pokemon-icons/chimecho-mega.png",
    "types": [
      "psychic",
      "steel"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 50,
      "defense": 110,
      "specialAttack": 135,
      "specialDefense": 120,
      "speed": 65,
      "total": 555
    },
    "generation": 3,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 359,
    "slug": "absol",
    "speciesKey": "absol",
    "nameJa": "アブソル",
    "nameEn": "Absol",
    "imagePath": "pokemon-icons/absol.png",
    "types": [
      "dark"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 130,
      "defense": 60,
      "specialAttack": 75,
      "specialDefense": 60,
      "speed": 75,
      "total": 465
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 10057,
    "slug": "absol-mega",
    "speciesKey": "absol",
    "nameJa": "メガアブソル",
    "nameEn": "Mega Absol",
    "imagePath": "pokemon-icons/absol-mega.png",
    "types": [
      "dark"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 150,
      "defense": 60,
      "specialAttack": 115,
      "specialDefense": 60,
      "speed": 115,
      "total": 565
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": false
  },
  {
    "id": 10307,
    "slug": "absol-mega-z",
    "speciesKey": "absol",
    "nameJa": "メガアブソルZ",
    "nameEn": "Mega Absol Z",
    "imagePath": "pokemon-icons/absol-mega-z.png",
    "types": [
      "dark",
      "ghost"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 154,
      "defense": 60,
      "specialAttack": 75,
      "specialDefense": 60,
      "speed": 151,
      "total": 565
    },
    "generation": 3,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 360,
    "slug": "wynaut",
    "speciesKey": "wynaut",
    "nameJa": "ソーナノ",
    "nameEn": "Wynaut",
    "imagePath": "pokemon-icons/wynaut.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 23,
      "defense": 48,
      "specialAttack": 23,
      "specialDefense": 48,
      "speed": 23,
      "total": 260
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 361,
    "slug": "snorunt",
    "speciesKey": "snorunt",
    "nameJa": "ユキワラシ",
    "nameEn": "Snorunt",
    "imagePath": "pokemon-icons/snorunt.png",
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 50,
      "defense": 50,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 50,
      "total": 300
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 362,
    "slug": "glalie",
    "speciesKey": "glalie",
    "nameJa": "オニゴーリ",
    "nameEn": "Glalie",
    "imagePath": "pokemon-icons/glalie.png",
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 80,
      "defense": 80,
      "specialAttack": 80,
      "specialDefense": 80,
      "speed": 80,
      "total": 480
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 10074,
    "slug": "glalie-mega",
    "speciesKey": "glalie",
    "nameJa": "メガオニゴーリ",
    "nameEn": "Mega Glalie",
    "imagePath": "pokemon-icons/glalie-mega.png",
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 120,
      "defense": 80,
      "specialAttack": 120,
      "specialDefense": 80,
      "speed": 100,
      "total": 580
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター オメガルビー・アルファサファイア",
    "isDefault": false
  },
  {
    "id": 363,
    "slug": "spheal",
    "speciesKey": "spheal",
    "nameJa": "タマザラシ",
    "nameEn": "Spheal",
    "imagePath": "pokemon-icons/spheal.png",
    "types": [
      "ice",
      "water"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 40,
      "defense": 50,
      "specialAttack": 55,
      "specialDefense": 50,
      "speed": 25,
      "total": 290
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 364,
    "slug": "sealeo",
    "speciesKey": "sealeo",
    "nameJa": "トドグラー",
    "nameEn": "Sealeo",
    "imagePath": "pokemon-icons/sealeo.png",
    "types": [
      "ice",
      "water"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 60,
      "defense": 70,
      "specialAttack": 75,
      "specialDefense": 70,
      "speed": 45,
      "total": 410
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 365,
    "slug": "walrein",
    "speciesKey": "walrein",
    "nameJa": "トドゼルガ",
    "nameEn": "Walrein",
    "imagePath": "pokemon-icons/walrein.png",
    "types": [
      "ice",
      "water"
    ],
    "baseStats": {
      "hp": 110,
      "attack": 80,
      "defense": 90,
      "specialAttack": 95,
      "specialDefense": 90,
      "speed": 65,
      "total": 530
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 366,
    "slug": "clamperl",
    "speciesKey": "clamperl",
    "nameJa": "パールル",
    "nameEn": "Clamperl",
    "imagePath": "pokemon-icons/clamperl.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 64,
      "defense": 85,
      "specialAttack": 74,
      "specialDefense": 55,
      "speed": 32,
      "total": 345
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 367,
    "slug": "huntail",
    "speciesKey": "huntail",
    "nameJa": "ハンテール",
    "nameEn": "Huntail",
    "imagePath": "pokemon-icons/huntail.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 104,
      "defense": 105,
      "specialAttack": 94,
      "specialDefense": 75,
      "speed": 52,
      "total": 485
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 368,
    "slug": "gorebyss",
    "speciesKey": "gorebyss",
    "nameJa": "サクラビス",
    "nameEn": "Gorebyss",
    "imagePath": "pokemon-icons/gorebyss.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 84,
      "defense": 105,
      "specialAttack": 114,
      "specialDefense": 75,
      "speed": 52,
      "total": 485
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 369,
    "slug": "relicanth",
    "speciesKey": "relicanth",
    "nameJa": "ジーランス",
    "nameEn": "Relicanth",
    "imagePath": "pokemon-icons/relicanth.png",
    "types": [
      "water",
      "rock"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 90,
      "defense": 130,
      "specialAttack": 45,
      "specialDefense": 65,
      "speed": 55,
      "total": 485
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 370,
    "slug": "luvdisc",
    "speciesKey": "luvdisc",
    "nameJa": "ラブカス",
    "nameEn": "Luvdisc",
    "imagePath": "pokemon-icons/luvdisc.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 43,
      "attack": 30,
      "defense": 55,
      "specialAttack": 40,
      "specialDefense": 65,
      "speed": 97,
      "total": 330
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 371,
    "slug": "bagon",
    "speciesKey": "bagon",
    "nameJa": "タツベイ",
    "nameEn": "Bagon",
    "imagePath": "pokemon-icons/bagon.png",
    "types": [
      "dragon"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 75,
      "defense": 60,
      "specialAttack": 40,
      "specialDefense": 30,
      "speed": 50,
      "total": 300
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 372,
    "slug": "shelgon",
    "speciesKey": "shelgon",
    "nameJa": "コモルー",
    "nameEn": "Shelgon",
    "imagePath": "pokemon-icons/shelgon.png",
    "types": [
      "dragon"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 95,
      "defense": 100,
      "specialAttack": 60,
      "specialDefense": 50,
      "speed": 50,
      "total": 420
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 373,
    "slug": "salamence",
    "speciesKey": "salamence",
    "nameJa": "ボーマンダ",
    "nameEn": "Salamence",
    "imagePath": "pokemon-icons/salamence.png",
    "types": [
      "dragon",
      "flying"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 135,
      "defense": 80,
      "specialAttack": 110,
      "specialDefense": 80,
      "speed": 100,
      "total": 600
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 10089,
    "slug": "salamence-mega",
    "speciesKey": "salamence",
    "nameJa": "メガボーマンダ",
    "nameEn": "Mega Salamence",
    "imagePath": "pokemon-icons/salamence-mega.png",
    "types": [
      "dragon",
      "flying"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 145,
      "defense": 130,
      "specialAttack": 120,
      "specialDefense": 90,
      "speed": 120,
      "total": 700
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター オメガルビー・アルファサファイア",
    "isDefault": false
  },
  {
    "id": 374,
    "slug": "beldum",
    "speciesKey": "beldum",
    "nameJa": "ダンバル",
    "nameEn": "Beldum",
    "imagePath": "pokemon-icons/beldum.png",
    "types": [
      "steel",
      "psychic"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 55,
      "defense": 80,
      "specialAttack": 35,
      "specialDefense": 60,
      "speed": 30,
      "total": 300
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 375,
    "slug": "metang",
    "speciesKey": "metang",
    "nameJa": "メタング",
    "nameEn": "Metang",
    "imagePath": "pokemon-icons/metang.png",
    "types": [
      "steel",
      "psychic"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 75,
      "defense": 100,
      "specialAttack": 55,
      "specialDefense": 80,
      "speed": 50,
      "total": 420
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 376,
    "slug": "metagross",
    "speciesKey": "metagross",
    "nameJa": "メタグロス",
    "nameEn": "Metagross",
    "imagePath": "pokemon-icons/metagross.png",
    "types": [
      "steel",
      "psychic"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 135,
      "defense": 130,
      "specialAttack": 95,
      "specialDefense": 90,
      "speed": 70,
      "total": 600
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 10076,
    "slug": "metagross-mega",
    "speciesKey": "metagross",
    "nameJa": "メガメタグロス",
    "nameEn": "Mega Metagross",
    "imagePath": "pokemon-icons/metagross-mega.png",
    "types": [
      "steel",
      "psychic"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 145,
      "defense": 150,
      "specialAttack": 105,
      "specialDefense": 110,
      "speed": 110,
      "total": 700
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター オメガルビー・アルファサファイア",
    "isDefault": false
  },
  {
    "id": 377,
    "slug": "regirock",
    "speciesKey": "regirock",
    "nameJa": "レジロック",
    "nameEn": "Regirock",
    "imagePath": "pokemon-icons/regirock.png",
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 100,
      "defense": 200,
      "specialAttack": 50,
      "specialDefense": 100,
      "speed": 50,
      "total": 580
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 378,
    "slug": "regice",
    "speciesKey": "regice",
    "nameJa": "レジアイス",
    "nameEn": "Regice",
    "imagePath": "pokemon-icons/regice.png",
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 50,
      "defense": 100,
      "specialAttack": 100,
      "specialDefense": 200,
      "speed": 50,
      "total": 580
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 379,
    "slug": "registeel",
    "speciesKey": "registeel",
    "nameJa": "レジスチル",
    "nameEn": "Registeel",
    "imagePath": "pokemon-icons/registeel.png",
    "types": [
      "steel"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 75,
      "defense": 150,
      "specialAttack": 75,
      "specialDefense": 150,
      "speed": 50,
      "total": 580
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 380,
    "slug": "latias",
    "speciesKey": "latias",
    "nameJa": "ラティアス",
    "nameEn": "Latias",
    "imagePath": "pokemon-icons/latias.png",
    "types": [
      "dragon",
      "psychic"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 80,
      "defense": 90,
      "specialAttack": 110,
      "specialDefense": 130,
      "speed": 110,
      "total": 600
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 10062,
    "slug": "latias-mega",
    "speciesKey": "latias",
    "nameJa": "メガラティアス",
    "nameEn": "Mega Latias",
    "imagePath": "pokemon-icons/latias-mega.png",
    "types": [
      "dragon",
      "psychic"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 100,
      "defense": 120,
      "specialAttack": 140,
      "specialDefense": 150,
      "speed": 110,
      "total": 700
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": false
  },
  {
    "id": 381,
    "slug": "latios",
    "speciesKey": "latios",
    "nameJa": "ラティオス",
    "nameEn": "Latios",
    "imagePath": "pokemon-icons/latios.png",
    "types": [
      "dragon",
      "psychic"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 90,
      "defense": 80,
      "specialAttack": 130,
      "specialDefense": 110,
      "speed": 110,
      "total": 600
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 10063,
    "slug": "latios-mega",
    "speciesKey": "latios",
    "nameJa": "メガラティオス",
    "nameEn": "Mega Latios",
    "imagePath": "pokemon-icons/latios-mega.png",
    "types": [
      "dragon",
      "psychic"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 130,
      "defense": 100,
      "specialAttack": 160,
      "specialDefense": 120,
      "speed": 110,
      "total": 700
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": false
  },
  {
    "id": 382,
    "slug": "kyogre",
    "speciesKey": "kyogre",
    "nameJa": "カイオーガ",
    "nameEn": "Kyogre",
    "imagePath": "pokemon-icons/kyogre.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 100,
      "defense": 90,
      "specialAttack": 150,
      "specialDefense": 140,
      "speed": 90,
      "total": 670
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 10077,
    "slug": "kyogre-primal",
    "speciesKey": "kyogre",
    "nameJa": "カイオーガ（ゲンシカイキのすがた）",
    "nameEn": "Primal Kyogre",
    "imagePath": "pokemon-icons/kyogre-primal.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 150,
      "defense": 90,
      "specialAttack": 180,
      "specialDefense": 160,
      "speed": 90,
      "total": 770
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター オメガルビー・アルファサファイア",
    "isDefault": false
  },
  {
    "id": 383,
    "slug": "groudon",
    "speciesKey": "groudon",
    "nameJa": "グラードン",
    "nameEn": "Groudon",
    "imagePath": "pokemon-icons/groudon.png",
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 150,
      "defense": 140,
      "specialAttack": 100,
      "specialDefense": 90,
      "speed": 90,
      "total": 670
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 10078,
    "slug": "groudon-primal",
    "speciesKey": "groudon",
    "nameJa": "グラードン（ゲンシカイキのすがた）",
    "nameEn": "Primal Groudon",
    "imagePath": "pokemon-icons/groudon-primal.png",
    "types": [
      "ground",
      "fire"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 180,
      "defense": 160,
      "specialAttack": 150,
      "specialDefense": 90,
      "speed": 90,
      "total": 770
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター オメガルビー・アルファサファイア",
    "isDefault": false
  },
  {
    "id": 384,
    "slug": "rayquaza",
    "speciesKey": "rayquaza",
    "nameJa": "レックウザ",
    "nameEn": "Rayquaza",
    "imagePath": "pokemon-icons/rayquaza.png",
    "types": [
      "dragon",
      "flying"
    ],
    "baseStats": {
      "hp": 105,
      "attack": 150,
      "defense": 90,
      "specialAttack": 150,
      "specialDefense": 90,
      "speed": 95,
      "total": 680
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 10079,
    "slug": "rayquaza-mega",
    "speciesKey": "rayquaza",
    "nameJa": "メガレックウザ",
    "nameEn": "Mega Rayquaza",
    "imagePath": "pokemon-icons/rayquaza-mega.png",
    "types": [
      "dragon",
      "flying"
    ],
    "baseStats": {
      "hp": 105,
      "attack": 180,
      "defense": 100,
      "specialAttack": 180,
      "specialDefense": 100,
      "speed": 115,
      "total": 780
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター オメガルビー・アルファサファイア",
    "isDefault": false
  },
  {
    "id": 385,
    "slug": "jirachi",
    "speciesKey": "jirachi",
    "nameJa": "ジラーチ",
    "nameEn": "Jirachi",
    "imagePath": "pokemon-icons/jirachi.png",
    "types": [
      "steel",
      "psychic"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "specialAttack": 100,
      "specialDefense": 100,
      "speed": 100,
      "total": 600
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 386,
    "slug": "deoxys-normal",
    "speciesKey": "deoxys",
    "nameJa": "デオキシス（ノーマルフォルム）",
    "nameEn": "Normal Deoxys",
    "imagePath": "pokemon-icons/deoxys-normal.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 150,
      "defense": 50,
      "specialAttack": 150,
      "specialDefense": 50,
      "speed": 150,
      "total": 600
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ルビー・サファイア",
    "isDefault": true
  },
  {
    "id": 10001,
    "slug": "deoxys-attack",
    "speciesKey": "deoxys",
    "nameJa": "デオキシス（アタックフォルム）",
    "nameEn": "Attack Deoxys",
    "imagePath": "pokemon-icons/deoxys-attack.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 180,
      "defense": 20,
      "specialAttack": 180,
      "specialDefense": 20,
      "speed": 150,
      "total": 600
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ファイアレッド・リーフグリーン",
    "isDefault": false
  },
  {
    "id": 10002,
    "slug": "deoxys-defense",
    "speciesKey": "deoxys",
    "nameJa": "デオキシス（ディフェンスフォルム）",
    "nameEn": "Defense Deoxys",
    "imagePath": "pokemon-icons/deoxys-defense.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 70,
      "defense": 160,
      "specialAttack": 70,
      "specialDefense": 160,
      "speed": 90,
      "total": 600
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター ファイアレッド・リーフグリーン",
    "isDefault": false
  },
  {
    "id": 10003,
    "slug": "deoxys-speed",
    "speciesKey": "deoxys",
    "nameJa": "デオキシス（スピードフォルム）",
    "nameEn": "Speed Deoxys",
    "imagePath": "pokemon-icons/deoxys-speed.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 95,
      "defense": 90,
      "specialAttack": 95,
      "specialDefense": 90,
      "speed": 180,
      "total": 600
    },
    "generation": 3,
    "debutTitle": "ポケットモンスター エメラルド",
    "isDefault": false
  },
  {
    "id": 387,
    "slug": "turtwig",
    "speciesKey": "turtwig",
    "nameJa": "ナエトル",
    "nameEn": "Turtwig",
    "imagePath": "pokemon-icons/turtwig.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 68,
      "defense": 64,
      "specialAttack": 45,
      "specialDefense": 55,
      "speed": 31,
      "total": 318
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 388,
    "slug": "grotle",
    "speciesKey": "grotle",
    "nameJa": "ハヤシガメ",
    "nameEn": "Grotle",
    "imagePath": "pokemon-icons/grotle.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 89,
      "defense": 85,
      "specialAttack": 55,
      "specialDefense": 65,
      "speed": 36,
      "total": 405
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 389,
    "slug": "torterra",
    "speciesKey": "torterra",
    "nameJa": "ドダイトス",
    "nameEn": "Torterra",
    "imagePath": "pokemon-icons/torterra.png",
    "types": [
      "grass",
      "ground"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 109,
      "defense": 105,
      "specialAttack": 75,
      "specialDefense": 85,
      "speed": 56,
      "total": 525
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 390,
    "slug": "chimchar",
    "speciesKey": "chimchar",
    "nameJa": "ヒコザル",
    "nameEn": "Chimchar",
    "imagePath": "pokemon-icons/chimchar.png",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 44,
      "attack": 58,
      "defense": 44,
      "specialAttack": 58,
      "specialDefense": 44,
      "speed": 61,
      "total": 309
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 391,
    "slug": "monferno",
    "speciesKey": "monferno",
    "nameJa": "モウカザル",
    "nameEn": "Monferno",
    "imagePath": "pokemon-icons/monferno.png",
    "types": [
      "fire",
      "fighting"
    ],
    "baseStats": {
      "hp": 64,
      "attack": 78,
      "defense": 52,
      "specialAttack": 78,
      "specialDefense": 52,
      "speed": 81,
      "total": 405
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 392,
    "slug": "infernape",
    "speciesKey": "infernape",
    "nameJa": "ゴウカザル",
    "nameEn": "Infernape",
    "imagePath": "pokemon-icons/infernape.png",
    "types": [
      "fire",
      "fighting"
    ],
    "baseStats": {
      "hp": 76,
      "attack": 104,
      "defense": 71,
      "specialAttack": 104,
      "specialDefense": 71,
      "speed": 108,
      "total": 534
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 393,
    "slug": "piplup",
    "speciesKey": "piplup",
    "nameJa": "ポッチャマ",
    "nameEn": "Piplup",
    "imagePath": "pokemon-icons/piplup.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 53,
      "attack": 51,
      "defense": 53,
      "specialAttack": 61,
      "specialDefense": 56,
      "speed": 40,
      "total": 314
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 394,
    "slug": "prinplup",
    "speciesKey": "prinplup",
    "nameJa": "ポッタイシ",
    "nameEn": "Prinplup",
    "imagePath": "pokemon-icons/prinplup.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 64,
      "attack": 66,
      "defense": 68,
      "specialAttack": 81,
      "specialDefense": 76,
      "speed": 50,
      "total": 405
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 395,
    "slug": "empoleon",
    "speciesKey": "empoleon",
    "nameJa": "エンペルト",
    "nameEn": "Empoleon",
    "imagePath": "pokemon-icons/empoleon.png",
    "types": [
      "water",
      "steel"
    ],
    "baseStats": {
      "hp": 84,
      "attack": 86,
      "defense": 88,
      "specialAttack": 111,
      "specialDefense": 101,
      "speed": 60,
      "total": 530
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 396,
    "slug": "starly",
    "speciesKey": "starly",
    "nameJa": "ムックル",
    "nameEn": "Starly",
    "imagePath": "pokemon-icons/starly.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 55,
      "defense": 30,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 60,
      "total": 245
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 397,
    "slug": "staravia",
    "speciesKey": "staravia",
    "nameJa": "ムクバード",
    "nameEn": "Staravia",
    "imagePath": "pokemon-icons/staravia.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 75,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 80,
      "total": 340
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 398,
    "slug": "staraptor",
    "speciesKey": "staraptor",
    "nameJa": "ムクホーク",
    "nameEn": "Staraptor",
    "imagePath": "pokemon-icons/staraptor.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 120,
      "defense": 70,
      "specialAttack": 50,
      "specialDefense": 60,
      "speed": 100,
      "total": 485
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 10308,
    "slug": "staraptor-mega",
    "speciesKey": "staraptor",
    "nameJa": "メガムクホーク",
    "nameEn": "Mega Staraptor",
    "imagePath": "pokemon-icons/staraptor-mega.png",
    "types": [
      "fighting",
      "flying"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 140,
      "defense": 100,
      "specialAttack": 60,
      "specialDefense": 90,
      "speed": 110,
      "total": 585
    },
    "generation": 4,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 399,
    "slug": "bidoof",
    "speciesKey": "bidoof",
    "nameJa": "ビッパ",
    "nameEn": "Bidoof",
    "imagePath": "pokemon-icons/bidoof.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 59,
      "attack": 45,
      "defense": 40,
      "specialAttack": 35,
      "specialDefense": 40,
      "speed": 31,
      "total": 250
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 400,
    "slug": "bibarel",
    "speciesKey": "bibarel",
    "nameJa": "ビーダル",
    "nameEn": "Bibarel",
    "imagePath": "pokemon-icons/bibarel.png",
    "types": [
      "normal",
      "water"
    ],
    "baseStats": {
      "hp": 79,
      "attack": 85,
      "defense": 60,
      "specialAttack": 55,
      "specialDefense": 60,
      "speed": 71,
      "total": 410
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 401,
    "slug": "kricketot",
    "speciesKey": "kricketot",
    "nameJa": "コロボーシ",
    "nameEn": "Kricketot",
    "imagePath": "pokemon-icons/kricketot.png",
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 37,
      "attack": 25,
      "defense": 41,
      "specialAttack": 25,
      "specialDefense": 41,
      "speed": 25,
      "total": 194
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 402,
    "slug": "kricketune",
    "speciesKey": "kricketune",
    "nameJa": "コロトック",
    "nameEn": "Kricketune",
    "imagePath": "pokemon-icons/kricketune.png",
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 77,
      "attack": 85,
      "defense": 51,
      "specialAttack": 55,
      "specialDefense": 51,
      "speed": 65,
      "total": 384
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 403,
    "slug": "shinx",
    "speciesKey": "shinx",
    "nameJa": "コリンク",
    "nameEn": "Shinx",
    "imagePath": "pokemon-icons/shinx.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 65,
      "defense": 34,
      "specialAttack": 40,
      "specialDefense": 34,
      "speed": 45,
      "total": 263
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 404,
    "slug": "luxio",
    "speciesKey": "luxio",
    "nameJa": "ルクシオ",
    "nameEn": "Luxio",
    "imagePath": "pokemon-icons/luxio.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 85,
      "defense": 49,
      "specialAttack": 60,
      "specialDefense": 49,
      "speed": 60,
      "total": 363
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 405,
    "slug": "luxray",
    "speciesKey": "luxray",
    "nameJa": "レントラー",
    "nameEn": "Luxray",
    "imagePath": "pokemon-icons/luxray.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 120,
      "defense": 79,
      "specialAttack": 95,
      "specialDefense": 79,
      "speed": 70,
      "total": 523
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 406,
    "slug": "budew",
    "speciesKey": "budew",
    "nameJa": "スボミー",
    "nameEn": "Budew",
    "imagePath": "pokemon-icons/budew.png",
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 30,
      "defense": 35,
      "specialAttack": 50,
      "specialDefense": 70,
      "speed": 55,
      "total": 280
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 407,
    "slug": "roserade",
    "speciesKey": "roserade",
    "nameJa": "ロズレイド",
    "nameEn": "Roserade",
    "imagePath": "pokemon-icons/roserade.png",
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 70,
      "defense": 65,
      "specialAttack": 125,
      "specialDefense": 105,
      "speed": 90,
      "total": 515
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 408,
    "slug": "cranidos",
    "speciesKey": "cranidos",
    "nameJa": "ズガイドス",
    "nameEn": "Cranidos",
    "imagePath": "pokemon-icons/cranidos.png",
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 67,
      "attack": 125,
      "defense": 40,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 58,
      "total": 350
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 409,
    "slug": "rampardos",
    "speciesKey": "rampardos",
    "nameJa": "ラムパルド",
    "nameEn": "Rampardos",
    "imagePath": "pokemon-icons/rampardos.png",
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 97,
      "attack": 165,
      "defense": 60,
      "specialAttack": 65,
      "specialDefense": 50,
      "speed": 58,
      "total": 495
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 410,
    "slug": "shieldon",
    "speciesKey": "shieldon",
    "nameJa": "タテトプス",
    "nameEn": "Shieldon",
    "imagePath": "pokemon-icons/shieldon.png",
    "types": [
      "rock",
      "steel"
    ],
    "baseStats": {
      "hp": 30,
      "attack": 42,
      "defense": 118,
      "specialAttack": 42,
      "specialDefense": 88,
      "speed": 30,
      "total": 350
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 411,
    "slug": "bastiodon",
    "speciesKey": "bastiodon",
    "nameJa": "トリデプス",
    "nameEn": "Bastiodon",
    "imagePath": "pokemon-icons/bastiodon.png",
    "types": [
      "rock",
      "steel"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 52,
      "defense": 168,
      "specialAttack": 47,
      "specialDefense": 138,
      "speed": 30,
      "total": 495
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 412,
    "slug": "burmy",
    "speciesKey": "burmy",
    "nameJa": "ミノムッチ（くさきのミノ）",
    "nameEn": "Plant Burmy",
    "imagePath": "pokemon-icons/burmy.png",
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 29,
      "defense": 45,
      "specialAttack": 29,
      "specialDefense": 45,
      "speed": 36,
      "total": 224
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 413,
    "slug": "wormadam-plant",
    "speciesKey": "wormadam",
    "nameJa": "ミノマダム（くさきのミノ）",
    "nameEn": "Plant Wormadam",
    "imagePath": "pokemon-icons/wormadam-plant.png",
    "types": [
      "bug",
      "grass"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 59,
      "defense": 85,
      "specialAttack": 79,
      "specialDefense": 105,
      "speed": 36,
      "total": 424
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 10004,
    "slug": "wormadam-sandy",
    "speciesKey": "wormadam",
    "nameJa": "ミノマダム（すなちのミノ）",
    "nameEn": "Sandy Wormadam",
    "imagePath": "pokemon-icons/wormadam-sandy.png",
    "types": [
      "bug",
      "ground"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 79,
      "defense": 105,
      "specialAttack": 59,
      "specialDefense": 85,
      "speed": 36,
      "total": 424
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": false
  },
  {
    "id": 10005,
    "slug": "wormadam-trash",
    "speciesKey": "wormadam",
    "nameJa": "ミノマダム（ゴミのミノ）",
    "nameEn": "Trash Wormadam",
    "imagePath": "pokemon-icons/wormadam-trash.png",
    "types": [
      "bug",
      "steel"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 69,
      "defense": 95,
      "specialAttack": 69,
      "specialDefense": 95,
      "speed": 36,
      "total": 424
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": false
  },
  {
    "id": 414,
    "slug": "mothim",
    "speciesKey": "mothim",
    "nameJa": "ガーメイル",
    "nameEn": "Mothim",
    "imagePath": "pokemon-icons/mothim.png",
    "types": [
      "bug",
      "flying"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 94,
      "defense": 50,
      "specialAttack": 94,
      "specialDefense": 50,
      "speed": 66,
      "total": 424
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 415,
    "slug": "combee",
    "speciesKey": "combee",
    "nameJa": "ミツハニー",
    "nameEn": "Combee",
    "imagePath": "pokemon-icons/combee.png",
    "types": [
      "bug",
      "flying"
    ],
    "baseStats": {
      "hp": 30,
      "attack": 30,
      "defense": 42,
      "specialAttack": 30,
      "specialDefense": 42,
      "speed": 70,
      "total": 244
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 416,
    "slug": "vespiquen",
    "speciesKey": "vespiquen",
    "nameJa": "ビークイン",
    "nameEn": "Vespiquen",
    "imagePath": "pokemon-icons/vespiquen.png",
    "types": [
      "bug",
      "flying"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 80,
      "defense": 102,
      "specialAttack": 80,
      "specialDefense": 102,
      "speed": 40,
      "total": 474
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 417,
    "slug": "pachirisu",
    "speciesKey": "pachirisu",
    "nameJa": "パチリス",
    "nameEn": "Pachirisu",
    "imagePath": "pokemon-icons/pachirisu.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 45,
      "defense": 70,
      "specialAttack": 45,
      "specialDefense": 90,
      "speed": 95,
      "total": 405
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 418,
    "slug": "buizel",
    "speciesKey": "buizel",
    "nameJa": "ブイゼル",
    "nameEn": "Buizel",
    "imagePath": "pokemon-icons/buizel.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 65,
      "defense": 35,
      "specialAttack": 60,
      "specialDefense": 30,
      "speed": 85,
      "total": 330
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 419,
    "slug": "floatzel",
    "speciesKey": "floatzel",
    "nameJa": "フローゼル",
    "nameEn": "Floatzel",
    "imagePath": "pokemon-icons/floatzel.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 105,
      "defense": 55,
      "specialAttack": 85,
      "specialDefense": 50,
      "speed": 115,
      "total": 495
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 420,
    "slug": "cherubi",
    "speciesKey": "cherubi",
    "nameJa": "チェリンボ",
    "nameEn": "Cherubi",
    "imagePath": "pokemon-icons/cherubi.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 35,
      "defense": 45,
      "specialAttack": 62,
      "specialDefense": 53,
      "speed": 35,
      "total": 275
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 421,
    "slug": "cherrim",
    "speciesKey": "cherrim",
    "nameJa": "チェリム（ネガフォルム）",
    "nameEn": "Overcast Cherrim",
    "imagePath": "pokemon-icons/cherrim.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 60,
      "defense": 70,
      "specialAttack": 87,
      "specialDefense": 78,
      "speed": 85,
      "total": 450
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 422,
    "slug": "shellos",
    "speciesKey": "shellos",
    "nameJa": "カラナクシ（にしのうみ）",
    "nameEn": "West Shellos",
    "imagePath": "pokemon-icons/shellos.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 76,
      "attack": 48,
      "defense": 48,
      "specialAttack": 57,
      "specialDefense": 62,
      "speed": 34,
      "total": 325
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 423,
    "slug": "gastrodon",
    "speciesKey": "gastrodon",
    "nameJa": "トリトドン（にしのうみ）",
    "nameEn": "West Gastrodon",
    "imagePath": "pokemon-icons/gastrodon.png",
    "types": [
      "water",
      "ground"
    ],
    "baseStats": {
      "hp": 111,
      "attack": 83,
      "defense": 68,
      "specialAttack": 92,
      "specialDefense": 82,
      "speed": 39,
      "total": 475
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 424,
    "slug": "ambipom",
    "speciesKey": "ambipom",
    "nameJa": "エテボース",
    "nameEn": "Ambipom",
    "imagePath": "pokemon-icons/ambipom.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 100,
      "defense": 66,
      "specialAttack": 60,
      "specialDefense": 66,
      "speed": 115,
      "total": 482
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 425,
    "slug": "drifloon",
    "speciesKey": "drifloon",
    "nameJa": "フワンテ",
    "nameEn": "Drifloon",
    "imagePath": "pokemon-icons/drifloon.png",
    "types": [
      "ghost",
      "flying"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 50,
      "defense": 34,
      "specialAttack": 60,
      "specialDefense": 44,
      "speed": 70,
      "total": 348
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 426,
    "slug": "drifblim",
    "speciesKey": "drifblim",
    "nameJa": "フワライド",
    "nameEn": "Drifblim",
    "imagePath": "pokemon-icons/drifblim.png",
    "types": [
      "ghost",
      "flying"
    ],
    "baseStats": {
      "hp": 150,
      "attack": 80,
      "defense": 44,
      "specialAttack": 90,
      "specialDefense": 54,
      "speed": 80,
      "total": 498
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 427,
    "slug": "buneary",
    "speciesKey": "buneary",
    "nameJa": "ミミロル",
    "nameEn": "Buneary",
    "imagePath": "pokemon-icons/buneary.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 66,
      "defense": 44,
      "specialAttack": 44,
      "specialDefense": 56,
      "speed": 85,
      "total": 350
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 428,
    "slug": "lopunny",
    "speciesKey": "lopunny",
    "nameJa": "ミミロップ",
    "nameEn": "Lopunny",
    "imagePath": "pokemon-icons/lopunny.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 76,
      "defense": 84,
      "specialAttack": 54,
      "specialDefense": 96,
      "speed": 105,
      "total": 480
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 10088,
    "slug": "lopunny-mega",
    "speciesKey": "lopunny",
    "nameJa": "メガミミロップ",
    "nameEn": "Mega Lopunny",
    "imagePath": "pokemon-icons/lopunny-mega.png",
    "types": [
      "normal",
      "fighting"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 136,
      "defense": 94,
      "specialAttack": 54,
      "specialDefense": 96,
      "speed": 135,
      "total": 580
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター オメガルビー・アルファサファイア",
    "isDefault": false
  },
  {
    "id": 429,
    "slug": "mismagius",
    "speciesKey": "mismagius",
    "nameJa": "ムウマージ",
    "nameEn": "Mismagius",
    "imagePath": "pokemon-icons/mismagius.png",
    "types": [
      "ghost"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 60,
      "defense": 60,
      "specialAttack": 105,
      "specialDefense": 105,
      "speed": 105,
      "total": 495
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 430,
    "slug": "honchkrow",
    "speciesKey": "honchkrow",
    "nameJa": "ドンカラス",
    "nameEn": "Honchkrow",
    "imagePath": "pokemon-icons/honchkrow.png",
    "types": [
      "dark",
      "flying"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 125,
      "defense": 52,
      "specialAttack": 105,
      "specialDefense": 52,
      "speed": 71,
      "total": 505
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 431,
    "slug": "glameow",
    "speciesKey": "glameow",
    "nameJa": "ニャルマー",
    "nameEn": "Glameow",
    "imagePath": "pokemon-icons/glameow.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 49,
      "attack": 55,
      "defense": 42,
      "specialAttack": 42,
      "specialDefense": 37,
      "speed": 85,
      "total": 310
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 432,
    "slug": "purugly",
    "speciesKey": "purugly",
    "nameJa": "ブニャット",
    "nameEn": "Purugly",
    "imagePath": "pokemon-icons/purugly.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 71,
      "attack": 82,
      "defense": 64,
      "specialAttack": 64,
      "specialDefense": 59,
      "speed": 112,
      "total": 452
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 433,
    "slug": "chingling",
    "speciesKey": "chingling",
    "nameJa": "リーシャン",
    "nameEn": "Chingling",
    "imagePath": "pokemon-icons/chingling.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 30,
      "defense": 50,
      "specialAttack": 65,
      "specialDefense": 50,
      "speed": 45,
      "total": 285
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 434,
    "slug": "stunky",
    "speciesKey": "stunky",
    "nameJa": "スカンプー",
    "nameEn": "Stunky",
    "imagePath": "pokemon-icons/stunky.png",
    "types": [
      "poison",
      "dark"
    ],
    "baseStats": {
      "hp": 63,
      "attack": 63,
      "defense": 47,
      "specialAttack": 41,
      "specialDefense": 41,
      "speed": 74,
      "total": 329
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 435,
    "slug": "skuntank",
    "speciesKey": "skuntank",
    "nameJa": "スカタンク",
    "nameEn": "Skuntank",
    "imagePath": "pokemon-icons/skuntank.png",
    "types": [
      "poison",
      "dark"
    ],
    "baseStats": {
      "hp": 103,
      "attack": 93,
      "defense": 67,
      "specialAttack": 71,
      "specialDefense": 61,
      "speed": 84,
      "total": 479
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 436,
    "slug": "bronzor",
    "speciesKey": "bronzor",
    "nameJa": "ドーミラー",
    "nameEn": "Bronzor",
    "imagePath": "pokemon-icons/bronzor.png",
    "types": [
      "steel",
      "psychic"
    ],
    "baseStats": {
      "hp": 57,
      "attack": 24,
      "defense": 86,
      "specialAttack": 24,
      "specialDefense": 86,
      "speed": 23,
      "total": 300
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 437,
    "slug": "bronzong",
    "speciesKey": "bronzong",
    "nameJa": "ドータクン",
    "nameEn": "Bronzong",
    "imagePath": "pokemon-icons/bronzong.png",
    "types": [
      "steel",
      "psychic"
    ],
    "baseStats": {
      "hp": 67,
      "attack": 89,
      "defense": 116,
      "specialAttack": 79,
      "specialDefense": 116,
      "speed": 33,
      "total": 500
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 438,
    "slug": "bonsly",
    "speciesKey": "bonsly",
    "nameJa": "ウソハチ",
    "nameEn": "Bonsly",
    "imagePath": "pokemon-icons/bonsly.png",
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 80,
      "defense": 95,
      "specialAttack": 10,
      "specialDefense": 45,
      "speed": 10,
      "total": 290
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 439,
    "slug": "mime-jr",
    "speciesKey": "mime-jr",
    "nameJa": "マネネ",
    "nameEn": "Mime Jr.",
    "imagePath": "pokemon-icons/mime-jr.png",
    "types": [
      "psychic",
      "fairy"
    ],
    "baseStats": {
      "hp": 20,
      "attack": 25,
      "defense": 45,
      "specialAttack": 70,
      "specialDefense": 90,
      "speed": 60,
      "total": 310
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 440,
    "slug": "happiny",
    "speciesKey": "happiny",
    "nameJa": "ピンプク",
    "nameEn": "Happiny",
    "imagePath": "pokemon-icons/happiny.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 5,
      "defense": 5,
      "specialAttack": 15,
      "specialDefense": 65,
      "speed": 30,
      "total": 220
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 441,
    "slug": "chatot",
    "speciesKey": "chatot",
    "nameJa": "ペラップ",
    "nameEn": "Chatot",
    "imagePath": "pokemon-icons/chatot.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 76,
      "attack": 65,
      "defense": 45,
      "specialAttack": 92,
      "specialDefense": 42,
      "speed": 91,
      "total": 411
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 442,
    "slug": "spiritomb",
    "speciesKey": "spiritomb",
    "nameJa": "ミカルゲ",
    "nameEn": "Spiritomb",
    "imagePath": "pokemon-icons/spiritomb.png",
    "types": [
      "ghost",
      "dark"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 92,
      "defense": 108,
      "specialAttack": 92,
      "specialDefense": 108,
      "speed": 35,
      "total": 485
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 443,
    "slug": "gible",
    "speciesKey": "gible",
    "nameJa": "フカマル",
    "nameEn": "Gible",
    "imagePath": "pokemon-icons/gible.png",
    "types": [
      "dragon",
      "ground"
    ],
    "baseStats": {
      "hp": 58,
      "attack": 70,
      "defense": 45,
      "specialAttack": 40,
      "specialDefense": 45,
      "speed": 42,
      "total": 300
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 444,
    "slug": "gabite",
    "speciesKey": "gabite",
    "nameJa": "ガバイト",
    "nameEn": "Gabite",
    "imagePath": "pokemon-icons/gabite.png",
    "types": [
      "dragon",
      "ground"
    ],
    "baseStats": {
      "hp": 68,
      "attack": 90,
      "defense": 65,
      "specialAttack": 50,
      "specialDefense": 55,
      "speed": 82,
      "total": 410
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 445,
    "slug": "garchomp",
    "speciesKey": "garchomp",
    "nameJa": "ガブリアス",
    "nameEn": "Garchomp",
    "imagePath": "pokemon-icons/garchomp.png",
    "types": [
      "dragon",
      "ground"
    ],
    "baseStats": {
      "hp": 108,
      "attack": 130,
      "defense": 95,
      "specialAttack": 80,
      "specialDefense": 85,
      "speed": 102,
      "total": 600
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 10058,
    "slug": "garchomp-mega",
    "speciesKey": "garchomp",
    "nameJa": "メガガブリアス",
    "nameEn": "Mega Garchomp",
    "imagePath": "pokemon-icons/garchomp-mega.png",
    "types": [
      "dragon",
      "ground"
    ],
    "baseStats": {
      "hp": 108,
      "attack": 170,
      "defense": 115,
      "specialAttack": 120,
      "specialDefense": 95,
      "speed": 92,
      "total": 700
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": false
  },
  {
    "id": 10309,
    "slug": "garchomp-mega-z",
    "speciesKey": "garchomp",
    "nameJa": "メガガブリアスZ",
    "nameEn": "Mega Garchomp Z",
    "imagePath": "pokemon-icons/garchomp-mega-z.png",
    "types": [
      "dragon"
    ],
    "baseStats": {
      "hp": 108,
      "attack": 130,
      "defense": 85,
      "specialAttack": 141,
      "specialDefense": 85,
      "speed": 151,
      "total": 700
    },
    "generation": 4,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 446,
    "slug": "munchlax",
    "speciesKey": "munchlax",
    "nameJa": "ゴンベ",
    "nameEn": "Munchlax",
    "imagePath": "pokemon-icons/munchlax.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 135,
      "attack": 85,
      "defense": 40,
      "specialAttack": 40,
      "specialDefense": 85,
      "speed": 5,
      "total": 390
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 447,
    "slug": "riolu",
    "speciesKey": "riolu",
    "nameJa": "リオル",
    "nameEn": "Riolu",
    "imagePath": "pokemon-icons/riolu.png",
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 70,
      "defense": 40,
      "specialAttack": 35,
      "specialDefense": 40,
      "speed": 60,
      "total": 285
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 448,
    "slug": "lucario",
    "speciesKey": "lucario",
    "nameJa": "ルカリオ",
    "nameEn": "Lucario",
    "imagePath": "pokemon-icons/lucario.png",
    "types": [
      "fighting",
      "steel"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 110,
      "defense": 70,
      "specialAttack": 115,
      "specialDefense": 70,
      "speed": 90,
      "total": 525
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 10059,
    "slug": "lucario-mega",
    "speciesKey": "lucario",
    "nameJa": "メガルカリオ",
    "nameEn": "Mega Lucario",
    "imagePath": "pokemon-icons/lucario-mega.png",
    "types": [
      "fighting",
      "steel"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 145,
      "defense": 88,
      "specialAttack": 140,
      "specialDefense": 70,
      "speed": 112,
      "total": 625
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": false
  },
  {
    "id": 10310,
    "slug": "lucario-mega-z",
    "speciesKey": "lucario",
    "nameJa": "メガルカリオZ",
    "nameEn": "Mega Lucario Z",
    "imagePath": "pokemon-icons/lucario-mega-z.png",
    "types": [
      "fighting",
      "steel"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 100,
      "defense": 70,
      "specialAttack": 164,
      "specialDefense": 70,
      "speed": 151,
      "total": 625
    },
    "generation": 4,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 449,
    "slug": "hippopotas",
    "speciesKey": "hippopotas",
    "nameJa": "ヒポポタス",
    "nameEn": "Hippopotas",
    "imagePath": "pokemon-icons/hippopotas.png",
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 68,
      "attack": 72,
      "defense": 78,
      "specialAttack": 38,
      "specialDefense": 42,
      "speed": 32,
      "total": 330
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 450,
    "slug": "hippowdon",
    "speciesKey": "hippowdon",
    "nameJa": "カバルドン",
    "nameEn": "Hippowdon",
    "imagePath": "pokemon-icons/hippowdon.png",
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 108,
      "attack": 112,
      "defense": 118,
      "specialAttack": 68,
      "specialDefense": 72,
      "speed": 47,
      "total": 525
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 451,
    "slug": "skorupi",
    "speciesKey": "skorupi",
    "nameJa": "スコルピ",
    "nameEn": "Skorupi",
    "imagePath": "pokemon-icons/skorupi.png",
    "types": [
      "poison",
      "bug"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 50,
      "defense": 90,
      "specialAttack": 30,
      "specialDefense": 55,
      "speed": 65,
      "total": 330
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 452,
    "slug": "drapion",
    "speciesKey": "drapion",
    "nameJa": "ドラピオン",
    "nameEn": "Drapion",
    "imagePath": "pokemon-icons/drapion.png",
    "types": [
      "poison",
      "dark"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 90,
      "defense": 110,
      "specialAttack": 60,
      "specialDefense": 75,
      "speed": 95,
      "total": 500
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 453,
    "slug": "croagunk",
    "speciesKey": "croagunk",
    "nameJa": "グレッグル",
    "nameEn": "Croagunk",
    "imagePath": "pokemon-icons/croagunk.png",
    "types": [
      "poison",
      "fighting"
    ],
    "baseStats": {
      "hp": 48,
      "attack": 61,
      "defense": 40,
      "specialAttack": 61,
      "specialDefense": 40,
      "speed": 50,
      "total": 300
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 454,
    "slug": "toxicroak",
    "speciesKey": "toxicroak",
    "nameJa": "ドクロッグ",
    "nameEn": "Toxicroak",
    "imagePath": "pokemon-icons/toxicroak.png",
    "types": [
      "poison",
      "fighting"
    ],
    "baseStats": {
      "hp": 83,
      "attack": 106,
      "defense": 65,
      "specialAttack": 86,
      "specialDefense": 65,
      "speed": 85,
      "total": 490
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 455,
    "slug": "carnivine",
    "speciesKey": "carnivine",
    "nameJa": "マスキッパ",
    "nameEn": "Carnivine",
    "imagePath": "pokemon-icons/carnivine.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 74,
      "attack": 100,
      "defense": 72,
      "specialAttack": 90,
      "specialDefense": 72,
      "speed": 46,
      "total": 454
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 456,
    "slug": "finneon",
    "speciesKey": "finneon",
    "nameJa": "ケイコウオ",
    "nameEn": "Finneon",
    "imagePath": "pokemon-icons/finneon.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 49,
      "attack": 49,
      "defense": 56,
      "specialAttack": 49,
      "specialDefense": 61,
      "speed": 66,
      "total": 330
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 457,
    "slug": "lumineon",
    "speciesKey": "lumineon",
    "nameJa": "ネオラント",
    "nameEn": "Lumineon",
    "imagePath": "pokemon-icons/lumineon.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 69,
      "attack": 69,
      "defense": 76,
      "specialAttack": 69,
      "specialDefense": 86,
      "speed": 91,
      "total": 460
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 458,
    "slug": "mantyke",
    "speciesKey": "mantyke",
    "nameJa": "タマンタ",
    "nameEn": "Mantyke",
    "imagePath": "pokemon-icons/mantyke.png",
    "types": [
      "water",
      "flying"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 20,
      "defense": 50,
      "specialAttack": 60,
      "specialDefense": 120,
      "speed": 50,
      "total": 345
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 459,
    "slug": "snover",
    "speciesKey": "snover",
    "nameJa": "ユキカブリ",
    "nameEn": "Snover",
    "imagePath": "pokemon-icons/snover.png",
    "types": [
      "grass",
      "ice"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 62,
      "defense": 50,
      "specialAttack": 62,
      "specialDefense": 60,
      "speed": 40,
      "total": 334
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 460,
    "slug": "abomasnow",
    "speciesKey": "abomasnow",
    "nameJa": "ユキノオー",
    "nameEn": "Abomasnow",
    "imagePath": "pokemon-icons/abomasnow.png",
    "types": [
      "grass",
      "ice"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 92,
      "defense": 75,
      "specialAttack": 92,
      "specialDefense": 85,
      "speed": 60,
      "total": 494
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 10060,
    "slug": "abomasnow-mega",
    "speciesKey": "abomasnow",
    "nameJa": "メガユキノオー",
    "nameEn": "Mega Abomasnow",
    "imagePath": "pokemon-icons/abomasnow-mega.png",
    "types": [
      "grass",
      "ice"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 132,
      "defense": 105,
      "specialAttack": 132,
      "specialDefense": 105,
      "speed": 30,
      "total": 594
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": false
  },
  {
    "id": 461,
    "slug": "weavile",
    "speciesKey": "weavile",
    "nameJa": "マニューラ",
    "nameEn": "Weavile",
    "imagePath": "pokemon-icons/weavile.png",
    "types": [
      "dark",
      "ice"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 120,
      "defense": 65,
      "specialAttack": 45,
      "specialDefense": 85,
      "speed": 125,
      "total": 510
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 462,
    "slug": "magnezone",
    "speciesKey": "magnezone",
    "nameJa": "ジバコイル",
    "nameEn": "Magnezone",
    "imagePath": "pokemon-icons/magnezone.png",
    "types": [
      "electric",
      "steel"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 70,
      "defense": 115,
      "specialAttack": 130,
      "specialDefense": 90,
      "speed": 60,
      "total": 535
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 463,
    "slug": "lickilicky",
    "speciesKey": "lickilicky",
    "nameJa": "ベロベルト",
    "nameEn": "Lickilicky",
    "imagePath": "pokemon-icons/lickilicky.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 110,
      "attack": 85,
      "defense": 95,
      "specialAttack": 80,
      "specialDefense": 95,
      "speed": 50,
      "total": 515
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 464,
    "slug": "rhyperior",
    "speciesKey": "rhyperior",
    "nameJa": "ドサイドン",
    "nameEn": "Rhyperior",
    "imagePath": "pokemon-icons/rhyperior.png",
    "types": [
      "ground",
      "rock"
    ],
    "baseStats": {
      "hp": 115,
      "attack": 140,
      "defense": 130,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 40,
      "total": 535
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 465,
    "slug": "tangrowth",
    "speciesKey": "tangrowth",
    "nameJa": "モジャンボ",
    "nameEn": "Tangrowth",
    "imagePath": "pokemon-icons/tangrowth.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 100,
      "defense": 125,
      "specialAttack": 110,
      "specialDefense": 50,
      "speed": 50,
      "total": 535
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 466,
    "slug": "electivire",
    "speciesKey": "electivire",
    "nameJa": "エレキブル",
    "nameEn": "Electivire",
    "imagePath": "pokemon-icons/electivire.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 123,
      "defense": 67,
      "specialAttack": 95,
      "specialDefense": 85,
      "speed": 95,
      "total": 540
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 467,
    "slug": "magmortar",
    "speciesKey": "magmortar",
    "nameJa": "ブーバーン",
    "nameEn": "Magmortar",
    "imagePath": "pokemon-icons/magmortar.png",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 95,
      "defense": 67,
      "specialAttack": 125,
      "specialDefense": 95,
      "speed": 83,
      "total": 540
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 468,
    "slug": "togekiss",
    "speciesKey": "togekiss",
    "nameJa": "トゲキッス",
    "nameEn": "Togekiss",
    "imagePath": "pokemon-icons/togekiss.png",
    "types": [
      "fairy",
      "flying"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 50,
      "defense": 95,
      "specialAttack": 120,
      "specialDefense": 115,
      "speed": 80,
      "total": 545
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 469,
    "slug": "yanmega",
    "speciesKey": "yanmega",
    "nameJa": "メガヤンマ",
    "nameEn": "Yanmega",
    "imagePath": "pokemon-icons/yanmega.png",
    "types": [
      "bug",
      "flying"
    ],
    "baseStats": {
      "hp": 86,
      "attack": 76,
      "defense": 86,
      "specialAttack": 116,
      "specialDefense": 56,
      "speed": 95,
      "total": 515
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 470,
    "slug": "leafeon",
    "speciesKey": "leafeon",
    "nameJa": "リーフィア",
    "nameEn": "Leafeon",
    "imagePath": "pokemon-icons/leafeon.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 110,
      "defense": 130,
      "specialAttack": 60,
      "specialDefense": 65,
      "speed": 95,
      "total": 525
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 471,
    "slug": "glaceon",
    "speciesKey": "glaceon",
    "nameJa": "グレイシア",
    "nameEn": "Glaceon",
    "imagePath": "pokemon-icons/glaceon.png",
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 60,
      "defense": 110,
      "specialAttack": 130,
      "specialDefense": 95,
      "speed": 65,
      "total": 525
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 472,
    "slug": "gliscor",
    "speciesKey": "gliscor",
    "nameJa": "グライオン",
    "nameEn": "Gliscor",
    "imagePath": "pokemon-icons/gliscor.png",
    "types": [
      "ground",
      "flying"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 95,
      "defense": 125,
      "specialAttack": 45,
      "specialDefense": 75,
      "speed": 95,
      "total": 510
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 473,
    "slug": "mamoswine",
    "speciesKey": "mamoswine",
    "nameJa": "マンムー",
    "nameEn": "Mamoswine",
    "imagePath": "pokemon-icons/mamoswine.png",
    "types": [
      "ice",
      "ground"
    ],
    "baseStats": {
      "hp": 110,
      "attack": 130,
      "defense": 80,
      "specialAttack": 70,
      "specialDefense": 60,
      "speed": 80,
      "total": 530
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 474,
    "slug": "porygon-z",
    "speciesKey": "porygon-z",
    "nameJa": "ポリゴンＺ",
    "nameEn": "Porygon-Z",
    "imagePath": "pokemon-icons/porygon-z.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 80,
      "defense": 70,
      "specialAttack": 135,
      "specialDefense": 75,
      "speed": 90,
      "total": 535
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 475,
    "slug": "gallade",
    "speciesKey": "gallade",
    "nameJa": "エルレイド",
    "nameEn": "Gallade",
    "imagePath": "pokemon-icons/gallade.png",
    "types": [
      "psychic",
      "fighting"
    ],
    "baseStats": {
      "hp": 68,
      "attack": 125,
      "defense": 65,
      "specialAttack": 65,
      "specialDefense": 115,
      "speed": 80,
      "total": 518
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 10068,
    "slug": "gallade-mega",
    "speciesKey": "gallade",
    "nameJa": "メガエルレイド",
    "nameEn": "Mega Gallade",
    "imagePath": "pokemon-icons/gallade-mega.png",
    "types": [
      "psychic",
      "fighting"
    ],
    "baseStats": {
      "hp": 68,
      "attack": 165,
      "defense": 95,
      "specialAttack": 65,
      "specialDefense": 115,
      "speed": 110,
      "total": 618
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター オメガルビー・アルファサファイア",
    "isDefault": false
  },
  {
    "id": 476,
    "slug": "probopass",
    "speciesKey": "probopass",
    "nameJa": "ダイノーズ",
    "nameEn": "Probopass",
    "imagePath": "pokemon-icons/probopass.png",
    "types": [
      "rock",
      "steel"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 55,
      "defense": 145,
      "specialAttack": 75,
      "specialDefense": 150,
      "speed": 40,
      "total": 525
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 477,
    "slug": "dusknoir",
    "speciesKey": "dusknoir",
    "nameJa": "ヨノワール",
    "nameEn": "Dusknoir",
    "imagePath": "pokemon-icons/dusknoir.png",
    "types": [
      "ghost"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 100,
      "defense": 135,
      "specialAttack": 65,
      "specialDefense": 135,
      "speed": 45,
      "total": 525
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 478,
    "slug": "froslass",
    "speciesKey": "froslass",
    "nameJa": "ユキメノコ",
    "nameEn": "Froslass",
    "imagePath": "pokemon-icons/froslass.png",
    "types": [
      "ice",
      "ghost"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 80,
      "defense": 70,
      "specialAttack": 80,
      "specialDefense": 70,
      "speed": 110,
      "total": 480
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 10285,
    "slug": "froslass-mega",
    "speciesKey": "froslass",
    "nameJa": "メガユキメノコ",
    "nameEn": "Mega Froslass",
    "imagePath": "pokemon-icons/froslass-mega.png",
    "types": [
      "ice",
      "ghost"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 80,
      "defense": 70,
      "specialAttack": 140,
      "specialDefense": 100,
      "speed": 120,
      "total": 580
    },
    "generation": 4,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 479,
    "slug": "rotom",
    "speciesKey": "rotom",
    "nameJa": "ロトム",
    "nameEn": "Rotom",
    "imagePath": "pokemon-icons/rotom.png",
    "types": [
      "electric",
      "ghost"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 50,
      "defense": 77,
      "specialAttack": 95,
      "specialDefense": 77,
      "speed": 91,
      "total": 440
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 10008,
    "slug": "rotom-heat",
    "speciesKey": "rotom",
    "nameJa": "ヒートロトム",
    "nameEn": "Heat Rotom",
    "imagePath": "pokemon-icons/rotom-heat.png",
    "types": [
      "electric",
      "fire"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 65,
      "defense": 107,
      "specialAttack": 105,
      "specialDefense": 107,
      "speed": 86,
      "total": 520
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター プラチナ",
    "isDefault": false
  },
  {
    "id": 10009,
    "slug": "rotom-wash",
    "speciesKey": "rotom",
    "nameJa": "ウォッシュロトム",
    "nameEn": "Wash Rotom",
    "imagePath": "pokemon-icons/rotom-wash.png",
    "types": [
      "electric",
      "water"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 65,
      "defense": 107,
      "specialAttack": 105,
      "specialDefense": 107,
      "speed": 86,
      "total": 520
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター プラチナ",
    "isDefault": false
  },
  {
    "id": 10010,
    "slug": "rotom-frost",
    "speciesKey": "rotom",
    "nameJa": "フロストロトム",
    "nameEn": "Frost Rotom",
    "imagePath": "pokemon-icons/rotom-frost.png",
    "types": [
      "electric",
      "ice"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 65,
      "defense": 107,
      "specialAttack": 105,
      "specialDefense": 107,
      "speed": 86,
      "total": 520
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター プラチナ",
    "isDefault": false
  },
  {
    "id": 10011,
    "slug": "rotom-fan",
    "speciesKey": "rotom",
    "nameJa": "スピンロトム",
    "nameEn": "Fan Rotom",
    "imagePath": "pokemon-icons/rotom-fan.png",
    "types": [
      "electric",
      "flying"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 65,
      "defense": 107,
      "specialAttack": 105,
      "specialDefense": 107,
      "speed": 86,
      "total": 520
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター プラチナ",
    "isDefault": false
  },
  {
    "id": 10012,
    "slug": "rotom-mow",
    "speciesKey": "rotom",
    "nameJa": "カットロトム",
    "nameEn": "Mow Rotom",
    "imagePath": "pokemon-icons/rotom-mow.png",
    "types": [
      "electric",
      "grass"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 65,
      "defense": 107,
      "specialAttack": 105,
      "specialDefense": 107,
      "speed": 86,
      "total": 520
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター プラチナ",
    "isDefault": false
  },
  {
    "id": 480,
    "slug": "uxie",
    "speciesKey": "uxie",
    "nameJa": "ユクシー",
    "nameEn": "Uxie",
    "imagePath": "pokemon-icons/uxie.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 75,
      "defense": 130,
      "specialAttack": 75,
      "specialDefense": 130,
      "speed": 95,
      "total": 580
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 481,
    "slug": "mesprit",
    "speciesKey": "mesprit",
    "nameJa": "エムリット",
    "nameEn": "Mesprit",
    "imagePath": "pokemon-icons/mesprit.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 105,
      "defense": 105,
      "specialAttack": 105,
      "specialDefense": 105,
      "speed": 80,
      "total": 580
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 482,
    "slug": "azelf",
    "speciesKey": "azelf",
    "nameJa": "アグノム",
    "nameEn": "Azelf",
    "imagePath": "pokemon-icons/azelf.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 125,
      "defense": 70,
      "specialAttack": 125,
      "specialDefense": 70,
      "speed": 115,
      "total": 580
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 483,
    "slug": "dialga",
    "speciesKey": "dialga",
    "nameJa": "ディアルガ",
    "nameEn": "Dialga",
    "imagePath": "pokemon-icons/dialga.png",
    "types": [
      "steel",
      "dragon"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 120,
      "defense": 120,
      "specialAttack": 150,
      "specialDefense": 100,
      "speed": 90,
      "total": 680
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 10245,
    "slug": "dialga-origin",
    "speciesKey": "dialga",
    "nameJa": "ディアルガ（オリジンフォルム）",
    "nameEn": "Origin Dialga",
    "imagePath": "pokemon-icons/dialga-origin.png",
    "types": [
      "steel",
      "dragon"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 100,
      "defense": 120,
      "specialAttack": 150,
      "specialDefense": 120,
      "speed": 90,
      "total": 680
    },
    "generation": 4,
    "debutTitle": "Pokemon LEGENDS アルセウス",
    "isDefault": false
  },
  {
    "id": 484,
    "slug": "palkia",
    "speciesKey": "palkia",
    "nameJa": "パルキア",
    "nameEn": "Palkia",
    "imagePath": "pokemon-icons/palkia.png",
    "types": [
      "water",
      "dragon"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 120,
      "defense": 100,
      "specialAttack": 150,
      "specialDefense": 120,
      "speed": 100,
      "total": 680
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 10246,
    "slug": "palkia-origin",
    "speciesKey": "palkia",
    "nameJa": "パルキア（オリジンフォルム）",
    "nameEn": "Origin Palkia",
    "imagePath": "pokemon-icons/palkia-origin.png",
    "types": [
      "water",
      "dragon"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 100,
      "defense": 100,
      "specialAttack": 150,
      "specialDefense": 120,
      "speed": 120,
      "total": 680
    },
    "generation": 4,
    "debutTitle": "Pokemon LEGENDS アルセウス",
    "isDefault": false
  },
  {
    "id": 485,
    "slug": "heatran",
    "speciesKey": "heatran",
    "nameJa": "ヒードラン",
    "nameEn": "Heatran",
    "imagePath": "pokemon-icons/heatran.png",
    "types": [
      "fire",
      "steel"
    ],
    "baseStats": {
      "hp": 91,
      "attack": 90,
      "defense": 106,
      "specialAttack": 130,
      "specialDefense": 106,
      "speed": 77,
      "total": 600
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 10311,
    "slug": "heatran-mega",
    "speciesKey": "heatran",
    "nameJa": "メガヒードラン",
    "nameEn": "Mega Heatran",
    "imagePath": "pokemon-icons/heatran-mega.png",
    "types": [
      "fire",
      "steel"
    ],
    "baseStats": {
      "hp": 91,
      "attack": 120,
      "defense": 106,
      "specialAttack": 175,
      "specialDefense": 141,
      "speed": 67,
      "total": 700
    },
    "generation": 4,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 486,
    "slug": "regigigas",
    "speciesKey": "regigigas",
    "nameJa": "レジギガス",
    "nameEn": "Regigigas",
    "imagePath": "pokemon-icons/regigigas.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 110,
      "attack": 160,
      "defense": 110,
      "specialAttack": 80,
      "specialDefense": 110,
      "speed": 100,
      "total": 670
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 487,
    "slug": "giratina-altered",
    "speciesKey": "giratina",
    "nameJa": "ギラティナ（アナザーフォルム）",
    "nameEn": "Altered Giratina",
    "imagePath": "pokemon-icons/giratina-altered.png",
    "types": [
      "ghost",
      "dragon"
    ],
    "baseStats": {
      "hp": 150,
      "attack": 100,
      "defense": 120,
      "specialAttack": 100,
      "specialDefense": 120,
      "speed": 90,
      "total": 680
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 10007,
    "slug": "giratina-origin",
    "speciesKey": "giratina",
    "nameJa": "ギラティナ（オリジンフォルム）",
    "nameEn": "Origin Giratina",
    "imagePath": "pokemon-icons/giratina-origin.png",
    "types": [
      "ghost",
      "dragon"
    ],
    "baseStats": {
      "hp": 150,
      "attack": 120,
      "defense": 100,
      "specialAttack": 120,
      "specialDefense": 100,
      "speed": 90,
      "total": 680
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター プラチナ",
    "isDefault": false
  },
  {
    "id": 488,
    "slug": "cresselia",
    "speciesKey": "cresselia",
    "nameJa": "クレセリア",
    "nameEn": "Cresselia",
    "imagePath": "pokemon-icons/cresselia.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 120,
      "attack": 70,
      "defense": 110,
      "specialAttack": 75,
      "specialDefense": 120,
      "speed": 85,
      "total": 580
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 489,
    "slug": "phione",
    "speciesKey": "phione",
    "nameJa": "フィオネ",
    "nameEn": "Phione",
    "imagePath": "pokemon-icons/phione.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 80,
      "defense": 80,
      "specialAttack": 80,
      "specialDefense": 80,
      "speed": 80,
      "total": 480
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 490,
    "slug": "manaphy",
    "speciesKey": "manaphy",
    "nameJa": "マナフィ",
    "nameEn": "Manaphy",
    "imagePath": "pokemon-icons/manaphy.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "specialAttack": 100,
      "specialDefense": 100,
      "speed": 100,
      "total": 600
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 491,
    "slug": "darkrai",
    "speciesKey": "darkrai",
    "nameJa": "ダークライ",
    "nameEn": "Darkrai",
    "imagePath": "pokemon-icons/darkrai.png",
    "types": [
      "dark"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 90,
      "defense": 90,
      "specialAttack": 135,
      "specialDefense": 90,
      "speed": 125,
      "total": 600
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 10312,
    "slug": "darkrai-mega",
    "speciesKey": "darkrai",
    "nameJa": "メガダークライ",
    "nameEn": "Mega Darkrai",
    "imagePath": "pokemon-icons/darkrai-mega.png",
    "types": [
      "dark"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 120,
      "defense": 130,
      "specialAttack": 165,
      "specialDefense": 130,
      "speed": 85,
      "total": 700
    },
    "generation": 4,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 492,
    "slug": "shaymin-land",
    "speciesKey": "shaymin",
    "nameJa": "シェイミ（ランドフォルム）",
    "nameEn": "Land Shaymin",
    "imagePath": "pokemon-icons/shaymin-land.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "specialAttack": 100,
      "specialDefense": 100,
      "speed": 100,
      "total": 600
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 10006,
    "slug": "shaymin-sky",
    "speciesKey": "shaymin",
    "nameJa": "シェイミ（スカイフォルム）",
    "nameEn": "Sky Shaymin",
    "imagePath": "pokemon-icons/shaymin-sky.png",
    "types": [
      "grass",
      "flying"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 103,
      "defense": 75,
      "specialAttack": 120,
      "specialDefense": 75,
      "speed": 127,
      "total": 600
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター プラチナ",
    "isDefault": false
  },
  {
    "id": 493,
    "slug": "arceus",
    "speciesKey": "arceus",
    "nameJa": "アルセウス（ノーマルタイプ）",
    "nameEn": "Normal Arceus",
    "imagePath": "pokemon-icons/arceus.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 120,
      "attack": 120,
      "defense": 120,
      "specialAttack": 120,
      "specialDefense": 120,
      "speed": 120,
      "total": 720
    },
    "generation": 4,
    "debutTitle": "ポケットモンスター ダイヤモンド・パール",
    "isDefault": true
  },
  {
    "id": 494,
    "slug": "victini",
    "speciesKey": "victini",
    "nameJa": "ビクティニ",
    "nameEn": "Victini",
    "imagePath": "pokemon-icons/victini.png",
    "types": [
      "psychic",
      "fire"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "specialAttack": 100,
      "specialDefense": 100,
      "speed": 100,
      "total": 600
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 495,
    "slug": "snivy",
    "speciesKey": "snivy",
    "nameJa": "ツタージャ",
    "nameEn": "Snivy",
    "imagePath": "pokemon-icons/snivy.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 45,
      "defense": 55,
      "specialAttack": 45,
      "specialDefense": 55,
      "speed": 63,
      "total": 308
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 496,
    "slug": "servine",
    "speciesKey": "servine",
    "nameJa": "ジャノビー",
    "nameEn": "Servine",
    "imagePath": "pokemon-icons/servine.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 60,
      "defense": 75,
      "specialAttack": 60,
      "specialDefense": 75,
      "speed": 83,
      "total": 413
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 497,
    "slug": "serperior",
    "speciesKey": "serperior",
    "nameJa": "ジャローダ",
    "nameEn": "Serperior",
    "imagePath": "pokemon-icons/serperior.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 75,
      "defense": 95,
      "specialAttack": 75,
      "specialDefense": 95,
      "speed": 113,
      "total": 528
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 498,
    "slug": "tepig",
    "speciesKey": "tepig",
    "nameJa": "ポカブ",
    "nameEn": "Tepig",
    "imagePath": "pokemon-icons/tepig.png",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 63,
      "defense": 45,
      "specialAttack": 45,
      "specialDefense": 45,
      "speed": 45,
      "total": 308
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 499,
    "slug": "pignite",
    "speciesKey": "pignite",
    "nameJa": "チャオブー",
    "nameEn": "Pignite",
    "imagePath": "pokemon-icons/pignite.png",
    "types": [
      "fire",
      "fighting"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 93,
      "defense": 55,
      "specialAttack": 70,
      "specialDefense": 55,
      "speed": 55,
      "total": 418
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 500,
    "slug": "emboar",
    "speciesKey": "emboar",
    "nameJa": "エンブオー",
    "nameEn": "Emboar",
    "imagePath": "pokemon-icons/emboar.png",
    "types": [
      "fire",
      "fighting"
    ],
    "baseStats": {
      "hp": 110,
      "attack": 123,
      "defense": 65,
      "specialAttack": 100,
      "specialDefense": 65,
      "speed": 65,
      "total": 528
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 10286,
    "slug": "emboar-mega",
    "speciesKey": "emboar",
    "nameJa": "メガエンブオー",
    "nameEn": "Mega Emboar",
    "imagePath": "pokemon-icons/emboar-mega.png",
    "types": [
      "fire",
      "fighting"
    ],
    "baseStats": {
      "hp": 110,
      "attack": 148,
      "defense": 75,
      "specialAttack": 110,
      "specialDefense": 110,
      "speed": 75,
      "total": 628
    },
    "generation": 5,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 501,
    "slug": "oshawott",
    "speciesKey": "oshawott",
    "nameJa": "ミジュマル",
    "nameEn": "Oshawott",
    "imagePath": "pokemon-icons/oshawott.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 55,
      "defense": 45,
      "specialAttack": 63,
      "specialDefense": 45,
      "speed": 45,
      "total": 308
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 502,
    "slug": "dewott",
    "speciesKey": "dewott",
    "nameJa": "フタチマル",
    "nameEn": "Dewott",
    "imagePath": "pokemon-icons/dewott.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 75,
      "defense": 60,
      "specialAttack": 83,
      "specialDefense": 60,
      "speed": 60,
      "total": 413
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 503,
    "slug": "samurott",
    "speciesKey": "samurott",
    "nameJa": "ダイケンキ",
    "nameEn": "Samurott",
    "imagePath": "pokemon-icons/samurott.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 100,
      "defense": 85,
      "specialAttack": 108,
      "specialDefense": 70,
      "speed": 70,
      "total": 528
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 10236,
    "slug": "samurott-hisui",
    "speciesKey": "samurott",
    "nameJa": "ダイケンキ（ヒスイのすがた）",
    "nameEn": "Hisuian Samurott",
    "imagePath": "pokemon-icons/samurott-hisui.png",
    "types": [
      "water",
      "dark"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 108,
      "defense": 80,
      "specialAttack": 100,
      "specialDefense": 65,
      "speed": 85,
      "total": 528
    },
    "generation": 5,
    "debutTitle": "Pokemon LEGENDS アルセウス",
    "isDefault": false
  },
  {
    "id": 504,
    "slug": "patrat",
    "speciesKey": "patrat",
    "nameJa": "ミネズミ",
    "nameEn": "Patrat",
    "imagePath": "pokemon-icons/patrat.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 55,
      "defense": 39,
      "specialAttack": 35,
      "specialDefense": 39,
      "speed": 42,
      "total": 255
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 505,
    "slug": "watchog",
    "speciesKey": "watchog",
    "nameJa": "ミルホッグ",
    "nameEn": "Watchog",
    "imagePath": "pokemon-icons/watchog.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 85,
      "defense": 69,
      "specialAttack": 60,
      "specialDefense": 69,
      "speed": 77,
      "total": 420
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 506,
    "slug": "lillipup",
    "speciesKey": "lillipup",
    "nameJa": "ヨーテリー",
    "nameEn": "Lillipup",
    "imagePath": "pokemon-icons/lillipup.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 60,
      "defense": 45,
      "specialAttack": 25,
      "specialDefense": 45,
      "speed": 55,
      "total": 275
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 507,
    "slug": "herdier",
    "speciesKey": "herdier",
    "nameJa": "ハーデリア",
    "nameEn": "Herdier",
    "imagePath": "pokemon-icons/herdier.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 80,
      "defense": 65,
      "specialAttack": 35,
      "specialDefense": 65,
      "speed": 60,
      "total": 370
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 508,
    "slug": "stoutland",
    "speciesKey": "stoutland",
    "nameJa": "ムーランド",
    "nameEn": "Stoutland",
    "imagePath": "pokemon-icons/stoutland.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 110,
      "defense": 90,
      "specialAttack": 45,
      "specialDefense": 90,
      "speed": 80,
      "total": 500
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 509,
    "slug": "purrloin",
    "speciesKey": "purrloin",
    "nameJa": "チョロネコ",
    "nameEn": "Purrloin",
    "imagePath": "pokemon-icons/purrloin.png",
    "types": [
      "dark"
    ],
    "baseStats": {
      "hp": 41,
      "attack": 50,
      "defense": 37,
      "specialAttack": 50,
      "specialDefense": 37,
      "speed": 66,
      "total": 281
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 510,
    "slug": "liepard",
    "speciesKey": "liepard",
    "nameJa": "レパルダス",
    "nameEn": "Liepard",
    "imagePath": "pokemon-icons/liepard.png",
    "types": [
      "dark"
    ],
    "baseStats": {
      "hp": 64,
      "attack": 88,
      "defense": 50,
      "specialAttack": 88,
      "specialDefense": 50,
      "speed": 106,
      "total": 446
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 511,
    "slug": "pansage",
    "speciesKey": "pansage",
    "nameJa": "ヤナップ",
    "nameEn": "Pansage",
    "imagePath": "pokemon-icons/pansage.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 53,
      "defense": 48,
      "specialAttack": 53,
      "specialDefense": 48,
      "speed": 64,
      "total": 316
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 512,
    "slug": "simisage",
    "speciesKey": "simisage",
    "nameJa": "ヤナッキー",
    "nameEn": "Simisage",
    "imagePath": "pokemon-icons/simisage.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 98,
      "defense": 63,
      "specialAttack": 98,
      "specialDefense": 63,
      "speed": 101,
      "total": 498
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 513,
    "slug": "pansear",
    "speciesKey": "pansear",
    "nameJa": "バオップ",
    "nameEn": "Pansear",
    "imagePath": "pokemon-icons/pansear.png",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 53,
      "defense": 48,
      "specialAttack": 53,
      "specialDefense": 48,
      "speed": 64,
      "total": 316
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 514,
    "slug": "simisear",
    "speciesKey": "simisear",
    "nameJa": "バオッキー",
    "nameEn": "Simisear",
    "imagePath": "pokemon-icons/simisear.png",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 98,
      "defense": 63,
      "specialAttack": 98,
      "specialDefense": 63,
      "speed": 101,
      "total": 498
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 515,
    "slug": "panpour",
    "speciesKey": "panpour",
    "nameJa": "ヒヤップ",
    "nameEn": "Panpour",
    "imagePath": "pokemon-icons/panpour.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 53,
      "defense": 48,
      "specialAttack": 53,
      "specialDefense": 48,
      "speed": 64,
      "total": 316
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 516,
    "slug": "simipour",
    "speciesKey": "simipour",
    "nameJa": "ヒヤッキー",
    "nameEn": "Simipour",
    "imagePath": "pokemon-icons/simipour.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 98,
      "defense": 63,
      "specialAttack": 98,
      "specialDefense": 63,
      "speed": 101,
      "total": 498
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 517,
    "slug": "munna",
    "speciesKey": "munna",
    "nameJa": "ムンナ",
    "nameEn": "Munna",
    "imagePath": "pokemon-icons/munna.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 76,
      "attack": 25,
      "defense": 45,
      "specialAttack": 67,
      "specialDefense": 55,
      "speed": 24,
      "total": 292
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 518,
    "slug": "musharna",
    "speciesKey": "musharna",
    "nameJa": "ムシャーナ",
    "nameEn": "Musharna",
    "imagePath": "pokemon-icons/musharna.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 116,
      "attack": 55,
      "defense": 85,
      "specialAttack": 107,
      "specialDefense": 95,
      "speed": 29,
      "total": 487
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 519,
    "slug": "pidove",
    "speciesKey": "pidove",
    "nameJa": "マメパト",
    "nameEn": "Pidove",
    "imagePath": "pokemon-icons/pidove.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 55,
      "defense": 50,
      "specialAttack": 36,
      "specialDefense": 30,
      "speed": 43,
      "total": 264
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 520,
    "slug": "tranquill",
    "speciesKey": "tranquill",
    "nameJa": "ハトーボー",
    "nameEn": "Tranquill",
    "imagePath": "pokemon-icons/tranquill.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 62,
      "attack": 77,
      "defense": 62,
      "specialAttack": 50,
      "specialDefense": 42,
      "speed": 65,
      "total": 358
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 521,
    "slug": "unfezant",
    "speciesKey": "unfezant",
    "nameJa": "ケンホロウ",
    "nameEn": "Unfezant",
    "imagePath": "pokemon-icons/unfezant.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 115,
      "defense": 80,
      "specialAttack": 65,
      "specialDefense": 55,
      "speed": 93,
      "total": 488
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 522,
    "slug": "blitzle",
    "speciesKey": "blitzle",
    "nameJa": "シママ",
    "nameEn": "Blitzle",
    "imagePath": "pokemon-icons/blitzle.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 60,
      "defense": 32,
      "specialAttack": 50,
      "specialDefense": 32,
      "speed": 76,
      "total": 295
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 523,
    "slug": "zebstrika",
    "speciesKey": "zebstrika",
    "nameJa": "ゼブライカ",
    "nameEn": "Zebstrika",
    "imagePath": "pokemon-icons/zebstrika.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 100,
      "defense": 63,
      "specialAttack": 80,
      "specialDefense": 63,
      "speed": 116,
      "total": 497
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 524,
    "slug": "roggenrola",
    "speciesKey": "roggenrola",
    "nameJa": "ダンゴロ",
    "nameEn": "Roggenrola",
    "imagePath": "pokemon-icons/roggenrola.png",
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 75,
      "defense": 85,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 15,
      "total": 280
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 525,
    "slug": "boldore",
    "speciesKey": "boldore",
    "nameJa": "ガントル",
    "nameEn": "Boldore",
    "imagePath": "pokemon-icons/boldore.png",
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 105,
      "defense": 105,
      "specialAttack": 50,
      "specialDefense": 40,
      "speed": 20,
      "total": 390
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 526,
    "slug": "gigalith",
    "speciesKey": "gigalith",
    "nameJa": "ギガイアス",
    "nameEn": "Gigalith",
    "imagePath": "pokemon-icons/gigalith.png",
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 135,
      "defense": 130,
      "specialAttack": 60,
      "specialDefense": 80,
      "speed": 25,
      "total": 515
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 527,
    "slug": "woobat",
    "speciesKey": "woobat",
    "nameJa": "コロモリ",
    "nameEn": "Woobat",
    "imagePath": "pokemon-icons/woobat.png",
    "types": [
      "psychic",
      "flying"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 45,
      "defense": 43,
      "specialAttack": 55,
      "specialDefense": 43,
      "speed": 72,
      "total": 323
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 528,
    "slug": "swoobat",
    "speciesKey": "swoobat",
    "nameJa": "ココロモリ",
    "nameEn": "Swoobat",
    "imagePath": "pokemon-icons/swoobat.png",
    "types": [
      "psychic",
      "flying"
    ],
    "baseStats": {
      "hp": 67,
      "attack": 57,
      "defense": 55,
      "specialAttack": 77,
      "specialDefense": 55,
      "speed": 114,
      "total": 425
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 529,
    "slug": "drilbur",
    "speciesKey": "drilbur",
    "nameJa": "モグリュー",
    "nameEn": "Drilbur",
    "imagePath": "pokemon-icons/drilbur.png",
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 85,
      "defense": 40,
      "specialAttack": 30,
      "specialDefense": 45,
      "speed": 68,
      "total": 328
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 530,
    "slug": "excadrill",
    "speciesKey": "excadrill",
    "nameJa": "ドリュウズ",
    "nameEn": "Excadrill",
    "imagePath": "pokemon-icons/excadrill.png",
    "types": [
      "ground",
      "steel"
    ],
    "baseStats": {
      "hp": 110,
      "attack": 135,
      "defense": 60,
      "specialAttack": 50,
      "specialDefense": 65,
      "speed": 88,
      "total": 508
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 10287,
    "slug": "excadrill-mega",
    "speciesKey": "excadrill",
    "nameJa": "メガドリュウズ",
    "nameEn": "Mega Excadrill",
    "imagePath": "pokemon-icons/excadrill-mega.png",
    "types": [
      "ground",
      "steel"
    ],
    "baseStats": {
      "hp": 110,
      "attack": 165,
      "defense": 100,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 103,
      "total": 608
    },
    "generation": 5,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 531,
    "slug": "audino",
    "speciesKey": "audino",
    "nameJa": "タブンネ",
    "nameEn": "Audino",
    "imagePath": "pokemon-icons/audino.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 103,
      "attack": 60,
      "defense": 86,
      "specialAttack": 60,
      "specialDefense": 86,
      "speed": 50,
      "total": 445
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 10069,
    "slug": "audino-mega",
    "speciesKey": "audino",
    "nameJa": "メガタブンネ",
    "nameEn": "Mega Audino",
    "imagePath": "pokemon-icons/audino-mega.png",
    "types": [
      "normal",
      "fairy"
    ],
    "baseStats": {
      "hp": 103,
      "attack": 60,
      "defense": 126,
      "specialAttack": 80,
      "specialDefense": 126,
      "speed": 50,
      "total": 545
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター オメガルビー・アルファサファイア",
    "isDefault": false
  },
  {
    "id": 532,
    "slug": "timburr",
    "speciesKey": "timburr",
    "nameJa": "ドッコラー",
    "nameEn": "Timburr",
    "imagePath": "pokemon-icons/timburr.png",
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 80,
      "defense": 55,
      "specialAttack": 25,
      "specialDefense": 35,
      "speed": 35,
      "total": 305
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 533,
    "slug": "gurdurr",
    "speciesKey": "gurdurr",
    "nameJa": "ドテッコツ",
    "nameEn": "Gurdurr",
    "imagePath": "pokemon-icons/gurdurr.png",
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 105,
      "defense": 85,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 40,
      "total": 405
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 534,
    "slug": "conkeldurr",
    "speciesKey": "conkeldurr",
    "nameJa": "ローブシン",
    "nameEn": "Conkeldurr",
    "imagePath": "pokemon-icons/conkeldurr.png",
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 105,
      "attack": 140,
      "defense": 95,
      "specialAttack": 55,
      "specialDefense": 65,
      "speed": 45,
      "total": 505
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 535,
    "slug": "tympole",
    "speciesKey": "tympole",
    "nameJa": "オタマロ",
    "nameEn": "Tympole",
    "imagePath": "pokemon-icons/tympole.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 50,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 40,
      "speed": 64,
      "total": 294
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 536,
    "slug": "palpitoad",
    "speciesKey": "palpitoad",
    "nameJa": "ガマガル",
    "nameEn": "Palpitoad",
    "imagePath": "pokemon-icons/palpitoad.png",
    "types": [
      "water",
      "ground"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 65,
      "defense": 55,
      "specialAttack": 65,
      "specialDefense": 55,
      "speed": 69,
      "total": 384
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 537,
    "slug": "seismitoad",
    "speciesKey": "seismitoad",
    "nameJa": "ガマゲロゲ",
    "nameEn": "Seismitoad",
    "imagePath": "pokemon-icons/seismitoad.png",
    "types": [
      "water",
      "ground"
    ],
    "baseStats": {
      "hp": 105,
      "attack": 95,
      "defense": 75,
      "specialAttack": 85,
      "specialDefense": 75,
      "speed": 74,
      "total": 509
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 538,
    "slug": "throh",
    "speciesKey": "throh",
    "nameJa": "ナゲキ",
    "nameEn": "Throh",
    "imagePath": "pokemon-icons/throh.png",
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 120,
      "attack": 100,
      "defense": 85,
      "specialAttack": 30,
      "specialDefense": 85,
      "speed": 45,
      "total": 465
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 539,
    "slug": "sawk",
    "speciesKey": "sawk",
    "nameJa": "ダゲキ",
    "nameEn": "Sawk",
    "imagePath": "pokemon-icons/sawk.png",
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 125,
      "defense": 75,
      "specialAttack": 30,
      "specialDefense": 75,
      "speed": 85,
      "total": 465
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 540,
    "slug": "sewaddle",
    "speciesKey": "sewaddle",
    "nameJa": "クルミル",
    "nameEn": "Sewaddle",
    "imagePath": "pokemon-icons/sewaddle.png",
    "types": [
      "bug",
      "grass"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 53,
      "defense": 70,
      "specialAttack": 40,
      "specialDefense": 60,
      "speed": 42,
      "total": 310
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 541,
    "slug": "swadloon",
    "speciesKey": "swadloon",
    "nameJa": "クルマユ",
    "nameEn": "Swadloon",
    "imagePath": "pokemon-icons/swadloon.png",
    "types": [
      "bug",
      "grass"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 63,
      "defense": 90,
      "specialAttack": 50,
      "specialDefense": 80,
      "speed": 42,
      "total": 380
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 542,
    "slug": "leavanny",
    "speciesKey": "leavanny",
    "nameJa": "ハハコモリ",
    "nameEn": "Leavanny",
    "imagePath": "pokemon-icons/leavanny.png",
    "types": [
      "bug",
      "grass"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 103,
      "defense": 80,
      "specialAttack": 70,
      "specialDefense": 80,
      "speed": 92,
      "total": 500
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 543,
    "slug": "venipede",
    "speciesKey": "venipede",
    "nameJa": "フシデ",
    "nameEn": "Venipede",
    "imagePath": "pokemon-icons/venipede.png",
    "types": [
      "bug",
      "poison"
    ],
    "baseStats": {
      "hp": 30,
      "attack": 45,
      "defense": 59,
      "specialAttack": 30,
      "specialDefense": 39,
      "speed": 57,
      "total": 260
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 544,
    "slug": "whirlipede",
    "speciesKey": "whirlipede",
    "nameJa": "ホイーガ",
    "nameEn": "Whirlipede",
    "imagePath": "pokemon-icons/whirlipede.png",
    "types": [
      "bug",
      "poison"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 55,
      "defense": 99,
      "specialAttack": 40,
      "specialDefense": 79,
      "speed": 47,
      "total": 360
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 545,
    "slug": "scolipede",
    "speciesKey": "scolipede",
    "nameJa": "ペンドラー",
    "nameEn": "Scolipede",
    "imagePath": "pokemon-icons/scolipede.png",
    "types": [
      "bug",
      "poison"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 100,
      "defense": 89,
      "specialAttack": 55,
      "specialDefense": 69,
      "speed": 112,
      "total": 485
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 10288,
    "slug": "scolipede-mega",
    "speciesKey": "scolipede",
    "nameJa": "メガペンドラー",
    "nameEn": "Mega Scolipede",
    "imagePath": "pokemon-icons/scolipede-mega.png",
    "types": [
      "bug",
      "poison"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 140,
      "defense": 149,
      "specialAttack": 75,
      "specialDefense": 99,
      "speed": 62,
      "total": 585
    },
    "generation": 5,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 546,
    "slug": "cottonee",
    "speciesKey": "cottonee",
    "nameJa": "モンメン",
    "nameEn": "Cottonee",
    "imagePath": "pokemon-icons/cottonee.png",
    "types": [
      "grass",
      "fairy"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 27,
      "defense": 60,
      "specialAttack": 37,
      "specialDefense": 50,
      "speed": 66,
      "total": 280
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 547,
    "slug": "whimsicott",
    "speciesKey": "whimsicott",
    "nameJa": "エルフーン",
    "nameEn": "Whimsicott",
    "imagePath": "pokemon-icons/whimsicott.png",
    "types": [
      "grass",
      "fairy"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 67,
      "defense": 85,
      "specialAttack": 77,
      "specialDefense": 75,
      "speed": 116,
      "total": 480
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 548,
    "slug": "petilil",
    "speciesKey": "petilil",
    "nameJa": "チュリネ",
    "nameEn": "Petilil",
    "imagePath": "pokemon-icons/petilil.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 35,
      "defense": 50,
      "specialAttack": 70,
      "specialDefense": 50,
      "speed": 30,
      "total": 280
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 549,
    "slug": "lilligant",
    "speciesKey": "lilligant",
    "nameJa": "ドレディア",
    "nameEn": "Lilligant",
    "imagePath": "pokemon-icons/lilligant.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 60,
      "defense": 75,
      "specialAttack": 110,
      "specialDefense": 75,
      "speed": 90,
      "total": 480
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 10237,
    "slug": "lilligant-hisui",
    "speciesKey": "lilligant",
    "nameJa": "ドレディア（ヒスイのすがた）",
    "nameEn": "Hisuian Lilligant",
    "imagePath": "pokemon-icons/lilligant-hisui.png",
    "types": [
      "grass",
      "fighting"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 105,
      "defense": 75,
      "specialAttack": 50,
      "specialDefense": 75,
      "speed": 105,
      "total": 480
    },
    "generation": 5,
    "debutTitle": "Pokemon LEGENDS アルセウス",
    "isDefault": false
  },
  {
    "id": 550,
    "slug": "basculin-red-striped",
    "speciesKey": "basculin",
    "nameJa": "バスラオ（あかすじのすがた）",
    "nameEn": "Red-Striped Basculin",
    "imagePath": "pokemon-icons/basculin-red-striped.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 92,
      "defense": 65,
      "specialAttack": 80,
      "specialDefense": 55,
      "speed": 98,
      "total": 460
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 10016,
    "slug": "basculin-blue-striped",
    "speciesKey": "basculin",
    "nameJa": "バスラオ（あおすじのすがた）",
    "nameEn": "Blue-Striped Basculin",
    "imagePath": "pokemon-icons/basculin-blue-striped.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 92,
      "defense": 65,
      "specialAttack": 80,
      "specialDefense": 55,
      "speed": 98,
      "total": 460
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": false
  },
  {
    "id": 10247,
    "slug": "basculin-white-striped",
    "speciesKey": "basculin",
    "nameJa": "バスラオ（しろすじのすがた）",
    "nameEn": "White-Striped Basculin",
    "imagePath": "pokemon-icons/basculin-white-striped.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 92,
      "defense": 65,
      "specialAttack": 80,
      "specialDefense": 55,
      "speed": 98,
      "total": 460
    },
    "generation": 5,
    "debutTitle": "Pokemon LEGENDS アルセウス",
    "isDefault": false
  },
  {
    "id": 551,
    "slug": "sandile",
    "speciesKey": "sandile",
    "nameJa": "メグロコ",
    "nameEn": "Sandile",
    "imagePath": "pokemon-icons/sandile.png",
    "types": [
      "ground",
      "dark"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 72,
      "defense": 35,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 65,
      "total": 292
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 552,
    "slug": "krokorok",
    "speciesKey": "krokorok",
    "nameJa": "ワルビル",
    "nameEn": "Krokorok",
    "imagePath": "pokemon-icons/krokorok.png",
    "types": [
      "ground",
      "dark"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 82,
      "defense": 45,
      "specialAttack": 45,
      "specialDefense": 45,
      "speed": 74,
      "total": 351
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 553,
    "slug": "krookodile",
    "speciesKey": "krookodile",
    "nameJa": "ワルビアル",
    "nameEn": "Krookodile",
    "imagePath": "pokemon-icons/krookodile.png",
    "types": [
      "ground",
      "dark"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 117,
      "defense": 80,
      "specialAttack": 65,
      "specialDefense": 70,
      "speed": 92,
      "total": 519
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 554,
    "slug": "darumaka",
    "speciesKey": "darumaka",
    "nameJa": "ダルマッカ",
    "nameEn": "Darumaka",
    "imagePath": "pokemon-icons/darumaka.png",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 90,
      "defense": 45,
      "specialAttack": 15,
      "specialDefense": 45,
      "speed": 50,
      "total": 315
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 10176,
    "slug": "darumaka-galar",
    "speciesKey": "darumaka",
    "nameJa": "ダルマッカ（ガラルのすがた）",
    "nameEn": "Galarian Darumaka",
    "imagePath": "pokemon-icons/darumaka-galar.png",
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 90,
      "defense": 45,
      "specialAttack": 15,
      "specialDefense": 45,
      "speed": 50,
      "total": 315
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 555,
    "slug": "darmanitan-standard",
    "speciesKey": "darmanitan",
    "nameJa": "ヒヒダルマ（ノーマルモード）",
    "nameEn": "Standard Darmanitan",
    "imagePath": "pokemon-icons/darmanitan-standard.png",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 105,
      "attack": 140,
      "defense": 55,
      "specialAttack": 30,
      "specialDefense": 55,
      "speed": 95,
      "total": 480
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 10017,
    "slug": "darmanitan-zen",
    "speciesKey": "darmanitan",
    "nameJa": "ヒヒダルマ（ダルマモード）",
    "nameEn": "Zen Darmanitan",
    "imagePath": "pokemon-icons/darmanitan-zen.png",
    "types": [
      "fire",
      "psychic"
    ],
    "baseStats": {
      "hp": 105,
      "attack": 30,
      "defense": 105,
      "specialAttack": 140,
      "specialDefense": 105,
      "speed": 55,
      "total": 540
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": false
  },
  {
    "id": 10177,
    "slug": "darmanitan-galar-standard",
    "speciesKey": "darmanitan",
    "nameJa": "ヒヒダルマ（ガラルのすがた）",
    "nameEn": "Standard Galarian Darmanitan",
    "imagePath": "pokemon-icons/darmanitan-galar-standard.png",
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 105,
      "attack": 140,
      "defense": 55,
      "specialAttack": 30,
      "specialDefense": 55,
      "speed": 95,
      "total": 480
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 10178,
    "slug": "darmanitan-galar-zen",
    "speciesKey": "darmanitan",
    "nameJa": "ヒヒダルマ（ダルマモード）",
    "nameEn": "Zen Galarian Darmanitan",
    "imagePath": "pokemon-icons/darmanitan-galar-zen.png",
    "types": [
      "ice",
      "fire"
    ],
    "baseStats": {
      "hp": 105,
      "attack": 160,
      "defense": 55,
      "specialAttack": 30,
      "specialDefense": 55,
      "speed": 135,
      "total": 540
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 556,
    "slug": "maractus",
    "speciesKey": "maractus",
    "nameJa": "マラカッチ",
    "nameEn": "Maractus",
    "imagePath": "pokemon-icons/maractus.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 86,
      "defense": 67,
      "specialAttack": 106,
      "specialDefense": 67,
      "speed": 60,
      "total": 461
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 557,
    "slug": "dwebble",
    "speciesKey": "dwebble",
    "nameJa": "イシズマイ",
    "nameEn": "Dwebble",
    "imagePath": "pokemon-icons/dwebble.png",
    "types": [
      "bug",
      "rock"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 65,
      "defense": 85,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 55,
      "total": 325
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 558,
    "slug": "crustle",
    "speciesKey": "crustle",
    "nameJa": "イワパレス",
    "nameEn": "Crustle",
    "imagePath": "pokemon-icons/crustle.png",
    "types": [
      "bug",
      "rock"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 105,
      "defense": 125,
      "specialAttack": 65,
      "specialDefense": 75,
      "speed": 45,
      "total": 485
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 559,
    "slug": "scraggy",
    "speciesKey": "scraggy",
    "nameJa": "ズルッグ",
    "nameEn": "Scraggy",
    "imagePath": "pokemon-icons/scraggy.png",
    "types": [
      "dark",
      "fighting"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 75,
      "defense": 70,
      "specialAttack": 35,
      "specialDefense": 70,
      "speed": 48,
      "total": 348
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 560,
    "slug": "scrafty",
    "speciesKey": "scrafty",
    "nameJa": "ズルズキン",
    "nameEn": "Scrafty",
    "imagePath": "pokemon-icons/scrafty.png",
    "types": [
      "dark",
      "fighting"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 90,
      "defense": 115,
      "specialAttack": 45,
      "specialDefense": 115,
      "speed": 58,
      "total": 488
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 10289,
    "slug": "scrafty-mega",
    "speciesKey": "scrafty",
    "nameJa": "メガズルズキン",
    "nameEn": "Mega Scrafty",
    "imagePath": "pokemon-icons/scrafty-mega.png",
    "types": [
      "dark",
      "fighting"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 130,
      "defense": 135,
      "specialAttack": 55,
      "specialDefense": 135,
      "speed": 68,
      "total": 588
    },
    "generation": 5,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 561,
    "slug": "sigilyph",
    "speciesKey": "sigilyph",
    "nameJa": "シンボラー",
    "nameEn": "Sigilyph",
    "imagePath": "pokemon-icons/sigilyph.png",
    "types": [
      "psychic",
      "flying"
    ],
    "baseStats": {
      "hp": 72,
      "attack": 58,
      "defense": 80,
      "specialAttack": 103,
      "specialDefense": 80,
      "speed": 97,
      "total": 490
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 562,
    "slug": "yamask",
    "speciesKey": "yamask",
    "nameJa": "デスマス",
    "nameEn": "Yamask",
    "imagePath": "pokemon-icons/yamask.png",
    "types": [
      "ghost"
    ],
    "baseStats": {
      "hp": 38,
      "attack": 30,
      "defense": 85,
      "specialAttack": 55,
      "specialDefense": 65,
      "speed": 30,
      "total": 303
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 10179,
    "slug": "yamask-galar",
    "speciesKey": "yamask",
    "nameJa": "デスマス（ガラルのすがた）",
    "nameEn": "Galarian Yamask",
    "imagePath": "pokemon-icons/yamask-galar.png",
    "types": [
      "ground",
      "ghost"
    ],
    "baseStats": {
      "hp": 38,
      "attack": 55,
      "defense": 85,
      "specialAttack": 30,
      "specialDefense": 65,
      "speed": 30,
      "total": 303
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 563,
    "slug": "cofagrigus",
    "speciesKey": "cofagrigus",
    "nameJa": "デスカーン",
    "nameEn": "Cofagrigus",
    "imagePath": "pokemon-icons/cofagrigus.png",
    "types": [
      "ghost"
    ],
    "baseStats": {
      "hp": 58,
      "attack": 50,
      "defense": 145,
      "specialAttack": 95,
      "specialDefense": 105,
      "speed": 30,
      "total": 483
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 564,
    "slug": "tirtouga",
    "speciesKey": "tirtouga",
    "nameJa": "プロトーガ",
    "nameEn": "Tirtouga",
    "imagePath": "pokemon-icons/tirtouga.png",
    "types": [
      "water",
      "rock"
    ],
    "baseStats": {
      "hp": 54,
      "attack": 78,
      "defense": 103,
      "specialAttack": 53,
      "specialDefense": 45,
      "speed": 22,
      "total": 355
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 565,
    "slug": "carracosta",
    "speciesKey": "carracosta",
    "nameJa": "アバゴーラ",
    "nameEn": "Carracosta",
    "imagePath": "pokemon-icons/carracosta.png",
    "types": [
      "water",
      "rock"
    ],
    "baseStats": {
      "hp": 74,
      "attack": 108,
      "defense": 133,
      "specialAttack": 83,
      "specialDefense": 65,
      "speed": 32,
      "total": 495
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 566,
    "slug": "archen",
    "speciesKey": "archen",
    "nameJa": "アーケン",
    "nameEn": "Archen",
    "imagePath": "pokemon-icons/archen.png",
    "types": [
      "rock",
      "flying"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 112,
      "defense": 45,
      "specialAttack": 74,
      "specialDefense": 45,
      "speed": 70,
      "total": 401
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 567,
    "slug": "archeops",
    "speciesKey": "archeops",
    "nameJa": "アーケオス",
    "nameEn": "Archeops",
    "imagePath": "pokemon-icons/archeops.png",
    "types": [
      "rock",
      "flying"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 140,
      "defense": 65,
      "specialAttack": 112,
      "specialDefense": 65,
      "speed": 110,
      "total": 567
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 568,
    "slug": "trubbish",
    "speciesKey": "trubbish",
    "nameJa": "ヤブクロン",
    "nameEn": "Trubbish",
    "imagePath": "pokemon-icons/trubbish.png",
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 50,
      "defense": 62,
      "specialAttack": 40,
      "specialDefense": 62,
      "speed": 65,
      "total": 329
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 569,
    "slug": "garbodor",
    "speciesKey": "garbodor",
    "nameJa": "ダストダス",
    "nameEn": "Garbodor",
    "imagePath": "pokemon-icons/garbodor.png",
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 95,
      "defense": 82,
      "specialAttack": 60,
      "specialDefense": 82,
      "speed": 75,
      "total": 474
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 10207,
    "slug": "garbodor-gmax",
    "speciesKey": "garbodor",
    "nameJa": "ダストダス（キョダイマックスのすがた）",
    "nameEn": "Gigantamax Garbodor",
    "imagePath": "pokemon-icons/garbodor-gmax.png",
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 95,
      "defense": 82,
      "specialAttack": 60,
      "specialDefense": 82,
      "speed": 75,
      "total": 474
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 570,
    "slug": "zorua",
    "speciesKey": "zorua",
    "nameJa": "ゾロア",
    "nameEn": "Zorua",
    "imagePath": "pokemon-icons/zorua.png",
    "types": [
      "dark"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 65,
      "defense": 40,
      "specialAttack": 80,
      "specialDefense": 40,
      "speed": 65,
      "total": 330
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 10238,
    "slug": "zorua-hisui",
    "speciesKey": "zorua",
    "nameJa": "ゾロア（ヒスイのすがた）",
    "nameEn": "Hisuian Zorua",
    "imagePath": "pokemon-icons/zorua-hisui.png",
    "types": [
      "normal",
      "ghost"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 60,
      "defense": 40,
      "specialAttack": 85,
      "specialDefense": 40,
      "speed": 70,
      "total": 330
    },
    "generation": 5,
    "debutTitle": "Pokemon LEGENDS アルセウス",
    "isDefault": false
  },
  {
    "id": 571,
    "slug": "zoroark",
    "speciesKey": "zoroark",
    "nameJa": "ゾロアーク",
    "nameEn": "Zoroark",
    "imagePath": "pokemon-icons/zoroark.png",
    "types": [
      "dark"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 105,
      "defense": 60,
      "specialAttack": 120,
      "specialDefense": 60,
      "speed": 105,
      "total": 510
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 10239,
    "slug": "zoroark-hisui",
    "speciesKey": "zoroark",
    "nameJa": "ゾロアーク（ヒスイのすがた）",
    "nameEn": "Hisuian Zoroark",
    "imagePath": "pokemon-icons/zoroark-hisui.png",
    "types": [
      "normal",
      "ghost"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 100,
      "defense": 60,
      "specialAttack": 125,
      "specialDefense": 60,
      "speed": 110,
      "total": 510
    },
    "generation": 5,
    "debutTitle": "Pokemon LEGENDS アルセウス",
    "isDefault": false
  },
  {
    "id": 572,
    "slug": "minccino",
    "speciesKey": "minccino",
    "nameJa": "チラーミィ",
    "nameEn": "Minccino",
    "imagePath": "pokemon-icons/minccino.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 50,
      "defense": 40,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 75,
      "total": 300
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 573,
    "slug": "cinccino",
    "speciesKey": "cinccino",
    "nameJa": "チラチーノ",
    "nameEn": "Cinccino",
    "imagePath": "pokemon-icons/cinccino.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 95,
      "defense": 60,
      "specialAttack": 65,
      "specialDefense": 60,
      "speed": 115,
      "total": 470
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 574,
    "slug": "gothita",
    "speciesKey": "gothita",
    "nameJa": "ゴチム",
    "nameEn": "Gothita",
    "imagePath": "pokemon-icons/gothita.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 30,
      "defense": 50,
      "specialAttack": 55,
      "specialDefense": 65,
      "speed": 45,
      "total": 290
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 575,
    "slug": "gothorita",
    "speciesKey": "gothorita",
    "nameJa": "ゴチミル",
    "nameEn": "Gothorita",
    "imagePath": "pokemon-icons/gothorita.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 45,
      "defense": 70,
      "specialAttack": 75,
      "specialDefense": 85,
      "speed": 55,
      "total": 390
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 576,
    "slug": "gothitelle",
    "speciesKey": "gothitelle",
    "nameJa": "ゴチルゼル",
    "nameEn": "Gothitelle",
    "imagePath": "pokemon-icons/gothitelle.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 55,
      "defense": 95,
      "specialAttack": 95,
      "specialDefense": 110,
      "speed": 65,
      "total": 490
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 577,
    "slug": "solosis",
    "speciesKey": "solosis",
    "nameJa": "ユニラン",
    "nameEn": "Solosis",
    "imagePath": "pokemon-icons/solosis.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 30,
      "defense": 40,
      "specialAttack": 105,
      "specialDefense": 50,
      "speed": 20,
      "total": 290
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 578,
    "slug": "duosion",
    "speciesKey": "duosion",
    "nameJa": "ダブラン",
    "nameEn": "Duosion",
    "imagePath": "pokemon-icons/duosion.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 40,
      "defense": 50,
      "specialAttack": 125,
      "specialDefense": 60,
      "speed": 30,
      "total": 370
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 579,
    "slug": "reuniclus",
    "speciesKey": "reuniclus",
    "nameJa": "ランクルス",
    "nameEn": "Reuniclus",
    "imagePath": "pokemon-icons/reuniclus.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 110,
      "attack": 65,
      "defense": 75,
      "specialAttack": 125,
      "specialDefense": 85,
      "speed": 30,
      "total": 490
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 580,
    "slug": "ducklett",
    "speciesKey": "ducklett",
    "nameJa": "コアルヒー",
    "nameEn": "Ducklett",
    "imagePath": "pokemon-icons/ducklett.png",
    "types": [
      "water",
      "flying"
    ],
    "baseStats": {
      "hp": 62,
      "attack": 44,
      "defense": 50,
      "specialAttack": 44,
      "specialDefense": 50,
      "speed": 55,
      "total": 305
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 581,
    "slug": "swanna",
    "speciesKey": "swanna",
    "nameJa": "スワンナ",
    "nameEn": "Swanna",
    "imagePath": "pokemon-icons/swanna.png",
    "types": [
      "water",
      "flying"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 87,
      "defense": 63,
      "specialAttack": 87,
      "specialDefense": 63,
      "speed": 98,
      "total": 473
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 582,
    "slug": "vanillite",
    "speciesKey": "vanillite",
    "nameJa": "バニプッチ",
    "nameEn": "Vanillite",
    "imagePath": "pokemon-icons/vanillite.png",
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 36,
      "attack": 50,
      "defense": 50,
      "specialAttack": 65,
      "specialDefense": 60,
      "speed": 44,
      "total": 305
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 583,
    "slug": "vanillish",
    "speciesKey": "vanillish",
    "nameJa": "バニリッチ",
    "nameEn": "Vanillish",
    "imagePath": "pokemon-icons/vanillish.png",
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 51,
      "attack": 65,
      "defense": 65,
      "specialAttack": 80,
      "specialDefense": 75,
      "speed": 59,
      "total": 395
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 584,
    "slug": "vanilluxe",
    "speciesKey": "vanilluxe",
    "nameJa": "バイバニラ",
    "nameEn": "Vanilluxe",
    "imagePath": "pokemon-icons/vanilluxe.png",
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 71,
      "attack": 95,
      "defense": 85,
      "specialAttack": 110,
      "specialDefense": 95,
      "speed": 79,
      "total": 535
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 585,
    "slug": "deerling",
    "speciesKey": "deerling",
    "nameJa": "シキジカ（はるのすがた）",
    "nameEn": "Spring Deerling",
    "imagePath": "pokemon-icons/deerling.png",
    "types": [
      "normal",
      "grass"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 60,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 75,
      "total": 335
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 586,
    "slug": "sawsbuck",
    "speciesKey": "sawsbuck",
    "nameJa": "メブキジカ（はるのすがた）",
    "nameEn": "Spring Sawsbuck",
    "imagePath": "pokemon-icons/sawsbuck.png",
    "types": [
      "normal",
      "grass"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 100,
      "defense": 70,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 95,
      "total": 475
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 587,
    "slug": "emolga",
    "speciesKey": "emolga",
    "nameJa": "エモンガ",
    "nameEn": "Emolga",
    "imagePath": "pokemon-icons/emolga.png",
    "types": [
      "electric",
      "flying"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 75,
      "defense": 60,
      "specialAttack": 75,
      "specialDefense": 60,
      "speed": 103,
      "total": 428
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 588,
    "slug": "karrablast",
    "speciesKey": "karrablast",
    "nameJa": "カブルモ",
    "nameEn": "Karrablast",
    "imagePath": "pokemon-icons/karrablast.png",
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 75,
      "defense": 45,
      "specialAttack": 40,
      "specialDefense": 45,
      "speed": 60,
      "total": 315
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 589,
    "slug": "escavalier",
    "speciesKey": "escavalier",
    "nameJa": "シュバルゴ",
    "nameEn": "Escavalier",
    "imagePath": "pokemon-icons/escavalier.png",
    "types": [
      "bug",
      "steel"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 135,
      "defense": 105,
      "specialAttack": 60,
      "specialDefense": 105,
      "speed": 20,
      "total": 495
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 590,
    "slug": "foongus",
    "speciesKey": "foongus",
    "nameJa": "タマゲタケ",
    "nameEn": "Foongus",
    "imagePath": "pokemon-icons/foongus.png",
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 69,
      "attack": 55,
      "defense": 45,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 15,
      "total": 294
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 591,
    "slug": "amoonguss",
    "speciesKey": "amoonguss",
    "nameJa": "モロバレル",
    "nameEn": "Amoonguss",
    "imagePath": "pokemon-icons/amoonguss.png",
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 114,
      "attack": 85,
      "defense": 70,
      "specialAttack": 85,
      "specialDefense": 80,
      "speed": 30,
      "total": 464
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 592,
    "slug": "frillish-male",
    "speciesKey": "frillish",
    "nameJa": "プルリル（オスのすがた）",
    "nameEn": "Male Frillish",
    "imagePath": "pokemon-icons/frillish-male.png",
    "types": [
      "water",
      "ghost"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 40,
      "defense": 50,
      "specialAttack": 65,
      "specialDefense": 85,
      "speed": 40,
      "total": 335
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 593,
    "slug": "jellicent-male",
    "speciesKey": "jellicent",
    "nameJa": "ブルンゲル（オスのすがた）",
    "nameEn": "Male Jellicent",
    "imagePath": "pokemon-icons/jellicent-male.png",
    "types": [
      "water",
      "ghost"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 60,
      "defense": 70,
      "specialAttack": 85,
      "specialDefense": 105,
      "speed": 60,
      "total": 480
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 594,
    "slug": "alomomola",
    "speciesKey": "alomomola",
    "nameJa": "ママンボウ",
    "nameEn": "Alomomola",
    "imagePath": "pokemon-icons/alomomola.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 165,
      "attack": 75,
      "defense": 80,
      "specialAttack": 40,
      "specialDefense": 45,
      "speed": 65,
      "total": 470
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 595,
    "slug": "joltik",
    "speciesKey": "joltik",
    "nameJa": "バチュル",
    "nameEn": "Joltik",
    "imagePath": "pokemon-icons/joltik.png",
    "types": [
      "bug",
      "electric"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 47,
      "defense": 50,
      "specialAttack": 57,
      "specialDefense": 50,
      "speed": 65,
      "total": 319
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 596,
    "slug": "galvantula",
    "speciesKey": "galvantula",
    "nameJa": "デンチュラ",
    "nameEn": "Galvantula",
    "imagePath": "pokemon-icons/galvantula.png",
    "types": [
      "bug",
      "electric"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 77,
      "defense": 60,
      "specialAttack": 97,
      "specialDefense": 60,
      "speed": 108,
      "total": 472
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 597,
    "slug": "ferroseed",
    "speciesKey": "ferroseed",
    "nameJa": "テッシード",
    "nameEn": "Ferroseed",
    "imagePath": "pokemon-icons/ferroseed.png",
    "types": [
      "grass",
      "steel"
    ],
    "baseStats": {
      "hp": 44,
      "attack": 50,
      "defense": 91,
      "specialAttack": 24,
      "specialDefense": 86,
      "speed": 10,
      "total": 305
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 598,
    "slug": "ferrothorn",
    "speciesKey": "ferrothorn",
    "nameJa": "ナットレイ",
    "nameEn": "Ferrothorn",
    "imagePath": "pokemon-icons/ferrothorn.png",
    "types": [
      "grass",
      "steel"
    ],
    "baseStats": {
      "hp": 74,
      "attack": 94,
      "defense": 131,
      "specialAttack": 54,
      "specialDefense": 116,
      "speed": 20,
      "total": 489
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 599,
    "slug": "klink",
    "speciesKey": "klink",
    "nameJa": "ギアル",
    "nameEn": "Klink",
    "imagePath": "pokemon-icons/klink.png",
    "types": [
      "steel"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 55,
      "defense": 70,
      "specialAttack": 45,
      "specialDefense": 60,
      "speed": 30,
      "total": 300
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 600,
    "slug": "klang",
    "speciesKey": "klang",
    "nameJa": "ギギアル",
    "nameEn": "Klang",
    "imagePath": "pokemon-icons/klang.png",
    "types": [
      "steel"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 80,
      "defense": 95,
      "specialAttack": 70,
      "specialDefense": 85,
      "speed": 50,
      "total": 440
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 601,
    "slug": "klinklang",
    "speciesKey": "klinklang",
    "nameJa": "ギギギアル",
    "nameEn": "Klinklang",
    "imagePath": "pokemon-icons/klinklang.png",
    "types": [
      "steel"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 100,
      "defense": 115,
      "specialAttack": 70,
      "specialDefense": 85,
      "speed": 90,
      "total": 520
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 602,
    "slug": "tynamo",
    "speciesKey": "tynamo",
    "nameJa": "シビシラス",
    "nameEn": "Tynamo",
    "imagePath": "pokemon-icons/tynamo.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "specialAttack": 45,
      "specialDefense": 40,
      "speed": 60,
      "total": 275
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 603,
    "slug": "eelektrik",
    "speciesKey": "eelektrik",
    "nameJa": "シビビール",
    "nameEn": "Eelektrik",
    "imagePath": "pokemon-icons/eelektrik.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 85,
      "defense": 70,
      "specialAttack": 75,
      "specialDefense": 70,
      "speed": 40,
      "total": 405
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 604,
    "slug": "eelektross",
    "speciesKey": "eelektross",
    "nameJa": "シビルドン",
    "nameEn": "Eelektross",
    "imagePath": "pokemon-icons/eelektross.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 115,
      "defense": 80,
      "specialAttack": 105,
      "specialDefense": 80,
      "speed": 50,
      "total": 515
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 10290,
    "slug": "eelektross-mega",
    "speciesKey": "eelektross",
    "nameJa": "メガシビルドン",
    "nameEn": "Mega Eelektross",
    "imagePath": "pokemon-icons/eelektross-mega.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 145,
      "defense": 80,
      "specialAttack": 135,
      "specialDefense": 90,
      "speed": 80,
      "total": 615
    },
    "generation": 5,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 605,
    "slug": "elgyem",
    "speciesKey": "elgyem",
    "nameJa": "リグレー",
    "nameEn": "Elgyem",
    "imagePath": "pokemon-icons/elgyem.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 55,
      "defense": 55,
      "specialAttack": 85,
      "specialDefense": 55,
      "speed": 30,
      "total": 335
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 606,
    "slug": "beheeyem",
    "speciesKey": "beheeyem",
    "nameJa": "オーベム",
    "nameEn": "Beheeyem",
    "imagePath": "pokemon-icons/beheeyem.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 75,
      "defense": 75,
      "specialAttack": 125,
      "specialDefense": 95,
      "speed": 40,
      "total": 485
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 607,
    "slug": "litwick",
    "speciesKey": "litwick",
    "nameJa": "ヒトモシ",
    "nameEn": "Litwick",
    "imagePath": "pokemon-icons/litwick.png",
    "types": [
      "ghost",
      "fire"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 30,
      "defense": 55,
      "specialAttack": 65,
      "specialDefense": 55,
      "speed": 20,
      "total": 275
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 608,
    "slug": "lampent",
    "speciesKey": "lampent",
    "nameJa": "ランプラー",
    "nameEn": "Lampent",
    "imagePath": "pokemon-icons/lampent.png",
    "types": [
      "ghost",
      "fire"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 40,
      "defense": 60,
      "specialAttack": 95,
      "specialDefense": 60,
      "speed": 55,
      "total": 370
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 609,
    "slug": "chandelure",
    "speciesKey": "chandelure",
    "nameJa": "シャンデラ",
    "nameEn": "Chandelure",
    "imagePath": "pokemon-icons/chandelure.png",
    "types": [
      "ghost",
      "fire"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 55,
      "defense": 90,
      "specialAttack": 145,
      "specialDefense": 90,
      "speed": 80,
      "total": 520
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 10291,
    "slug": "chandelure-mega",
    "speciesKey": "chandelure",
    "nameJa": "メガシャンデラ",
    "nameEn": "Mega Chandelure",
    "imagePath": "pokemon-icons/chandelure-mega.png",
    "types": [
      "ghost",
      "fire"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 75,
      "defense": 110,
      "specialAttack": 175,
      "specialDefense": 110,
      "speed": 90,
      "total": 620
    },
    "generation": 5,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 610,
    "slug": "axew",
    "speciesKey": "axew",
    "nameJa": "キバゴ",
    "nameEn": "Axew",
    "imagePath": "pokemon-icons/axew.png",
    "types": [
      "dragon"
    ],
    "baseStats": {
      "hp": 46,
      "attack": 87,
      "defense": 60,
      "specialAttack": 30,
      "specialDefense": 40,
      "speed": 57,
      "total": 320
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 611,
    "slug": "fraxure",
    "speciesKey": "fraxure",
    "nameJa": "オノンド",
    "nameEn": "Fraxure",
    "imagePath": "pokemon-icons/fraxure.png",
    "types": [
      "dragon"
    ],
    "baseStats": {
      "hp": 66,
      "attack": 117,
      "defense": 70,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 67,
      "total": 410
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 612,
    "slug": "haxorus",
    "speciesKey": "haxorus",
    "nameJa": "オノノクス",
    "nameEn": "Haxorus",
    "imagePath": "pokemon-icons/haxorus.png",
    "types": [
      "dragon"
    ],
    "baseStats": {
      "hp": 76,
      "attack": 147,
      "defense": 90,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 97,
      "total": 540
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 613,
    "slug": "cubchoo",
    "speciesKey": "cubchoo",
    "nameJa": "クマシュン",
    "nameEn": "Cubchoo",
    "imagePath": "pokemon-icons/cubchoo.png",
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 70,
      "defense": 40,
      "specialAttack": 60,
      "specialDefense": 40,
      "speed": 40,
      "total": 305
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 614,
    "slug": "beartic",
    "speciesKey": "beartic",
    "nameJa": "ツンベアー",
    "nameEn": "Beartic",
    "imagePath": "pokemon-icons/beartic.png",
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 130,
      "defense": 80,
      "specialAttack": 70,
      "specialDefense": 80,
      "speed": 50,
      "total": 505
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 615,
    "slug": "cryogonal",
    "speciesKey": "cryogonal",
    "nameJa": "フリージオ",
    "nameEn": "Cryogonal",
    "imagePath": "pokemon-icons/cryogonal.png",
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 50,
      "defense": 50,
      "specialAttack": 95,
      "specialDefense": 135,
      "speed": 105,
      "total": 515
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 616,
    "slug": "shelmet",
    "speciesKey": "shelmet",
    "nameJa": "チョボマキ",
    "nameEn": "Shelmet",
    "imagePath": "pokemon-icons/shelmet.png",
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 40,
      "defense": 85,
      "specialAttack": 40,
      "specialDefense": 65,
      "speed": 25,
      "total": 305
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 617,
    "slug": "accelgor",
    "speciesKey": "accelgor",
    "nameJa": "アギルダー",
    "nameEn": "Accelgor",
    "imagePath": "pokemon-icons/accelgor.png",
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 70,
      "defense": 40,
      "specialAttack": 100,
      "specialDefense": 60,
      "speed": 145,
      "total": 495
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 618,
    "slug": "stunfisk",
    "speciesKey": "stunfisk",
    "nameJa": "マッギョ",
    "nameEn": "Stunfisk",
    "imagePath": "pokemon-icons/stunfisk.png",
    "types": [
      "ground",
      "electric"
    ],
    "baseStats": {
      "hp": 109,
      "attack": 66,
      "defense": 84,
      "specialAttack": 81,
      "specialDefense": 99,
      "speed": 32,
      "total": 471
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 10180,
    "slug": "stunfisk-galar",
    "speciesKey": "stunfisk",
    "nameJa": "マッギョ（ガラルのすがた）",
    "nameEn": "Galarian Stunfisk",
    "imagePath": "pokemon-icons/stunfisk-galar.png",
    "types": [
      "ground",
      "steel"
    ],
    "baseStats": {
      "hp": 109,
      "attack": 81,
      "defense": 99,
      "specialAttack": 66,
      "specialDefense": 84,
      "speed": 32,
      "total": 471
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 619,
    "slug": "mienfoo",
    "speciesKey": "mienfoo",
    "nameJa": "コジョフー",
    "nameEn": "Mienfoo",
    "imagePath": "pokemon-icons/mienfoo.png",
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 85,
      "defense": 50,
      "specialAttack": 55,
      "specialDefense": 50,
      "speed": 65,
      "total": 350
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 620,
    "slug": "mienshao",
    "speciesKey": "mienshao",
    "nameJa": "コジョンド",
    "nameEn": "Mienshao",
    "imagePath": "pokemon-icons/mienshao.png",
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 125,
      "defense": 60,
      "specialAttack": 95,
      "specialDefense": 60,
      "speed": 105,
      "total": 510
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 621,
    "slug": "druddigon",
    "speciesKey": "druddigon",
    "nameJa": "クリムガン",
    "nameEn": "Druddigon",
    "imagePath": "pokemon-icons/druddigon.png",
    "types": [
      "dragon"
    ],
    "baseStats": {
      "hp": 77,
      "attack": 120,
      "defense": 90,
      "specialAttack": 60,
      "specialDefense": 90,
      "speed": 48,
      "total": 485
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 622,
    "slug": "golett",
    "speciesKey": "golett",
    "nameJa": "ゴビット",
    "nameEn": "Golett",
    "imagePath": "pokemon-icons/golett.png",
    "types": [
      "ground",
      "ghost"
    ],
    "baseStats": {
      "hp": 59,
      "attack": 74,
      "defense": 50,
      "specialAttack": 35,
      "specialDefense": 50,
      "speed": 35,
      "total": 303
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 623,
    "slug": "golurk",
    "speciesKey": "golurk",
    "nameJa": "ゴルーグ",
    "nameEn": "Golurk",
    "imagePath": "pokemon-icons/golurk.png",
    "types": [
      "ground",
      "ghost"
    ],
    "baseStats": {
      "hp": 89,
      "attack": 124,
      "defense": 80,
      "specialAttack": 55,
      "specialDefense": 80,
      "speed": 55,
      "total": 483
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 10313,
    "slug": "golurk-mega",
    "speciesKey": "golurk",
    "nameJa": "メガゴルーグ",
    "nameEn": "Mega Golurk",
    "imagePath": "pokemon-icons/golurk-mega.png",
    "types": [
      "ground",
      "ghost"
    ],
    "baseStats": {
      "hp": 89,
      "attack": 159,
      "defense": 105,
      "specialAttack": 70,
      "specialDefense": 105,
      "speed": 55,
      "total": 583
    },
    "generation": 5,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 624,
    "slug": "pawniard",
    "speciesKey": "pawniard",
    "nameJa": "コマタナ",
    "nameEn": "Pawniard",
    "imagePath": "pokemon-icons/pawniard.png",
    "types": [
      "dark",
      "steel"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 85,
      "defense": 70,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 60,
      "total": 340
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 625,
    "slug": "bisharp",
    "speciesKey": "bisharp",
    "nameJa": "キリキザン",
    "nameEn": "Bisharp",
    "imagePath": "pokemon-icons/bisharp.png",
    "types": [
      "dark",
      "steel"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 125,
      "defense": 100,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 70,
      "total": 490
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 626,
    "slug": "bouffalant",
    "speciesKey": "bouffalant",
    "nameJa": "バッフロン",
    "nameEn": "Bouffalant",
    "imagePath": "pokemon-icons/bouffalant.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 110,
      "defense": 95,
      "specialAttack": 40,
      "specialDefense": 95,
      "speed": 55,
      "total": 490
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 627,
    "slug": "rufflet",
    "speciesKey": "rufflet",
    "nameJa": "ワシボン",
    "nameEn": "Rufflet",
    "imagePath": "pokemon-icons/rufflet.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 83,
      "defense": 50,
      "specialAttack": 37,
      "specialDefense": 50,
      "speed": 60,
      "total": 350
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 628,
    "slug": "braviary",
    "speciesKey": "braviary",
    "nameJa": "ウォーグル",
    "nameEn": "Braviary",
    "imagePath": "pokemon-icons/braviary.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 123,
      "defense": 75,
      "specialAttack": 57,
      "specialDefense": 75,
      "speed": 80,
      "total": 510
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 10240,
    "slug": "braviary-hisui",
    "speciesKey": "braviary",
    "nameJa": "ウォーグル（ヒスイのすがた）",
    "nameEn": "Hisuian Braviary",
    "imagePath": "pokemon-icons/braviary-hisui.png",
    "types": [
      "psychic",
      "flying"
    ],
    "baseStats": {
      "hp": 110,
      "attack": 83,
      "defense": 70,
      "specialAttack": 112,
      "specialDefense": 70,
      "speed": 65,
      "total": 510
    },
    "generation": 5,
    "debutTitle": "Pokemon LEGENDS アルセウス",
    "isDefault": false
  },
  {
    "id": 629,
    "slug": "vullaby",
    "speciesKey": "vullaby",
    "nameJa": "バルチャイ",
    "nameEn": "Vullaby",
    "imagePath": "pokemon-icons/vullaby.png",
    "types": [
      "dark",
      "flying"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 55,
      "defense": 75,
      "specialAttack": 45,
      "specialDefense": 65,
      "speed": 60,
      "total": 370
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 630,
    "slug": "mandibuzz",
    "speciesKey": "mandibuzz",
    "nameJa": "バルジーナ",
    "nameEn": "Mandibuzz",
    "imagePath": "pokemon-icons/mandibuzz.png",
    "types": [
      "dark",
      "flying"
    ],
    "baseStats": {
      "hp": 110,
      "attack": 65,
      "defense": 105,
      "specialAttack": 55,
      "specialDefense": 95,
      "speed": 80,
      "total": 510
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 631,
    "slug": "heatmor",
    "speciesKey": "heatmor",
    "nameJa": "クイタラン",
    "nameEn": "Heatmor",
    "imagePath": "pokemon-icons/heatmor.png",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 97,
      "defense": 66,
      "specialAttack": 105,
      "specialDefense": 66,
      "speed": 65,
      "total": 484
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 632,
    "slug": "durant",
    "speciesKey": "durant",
    "nameJa": "アイアント",
    "nameEn": "Durant",
    "imagePath": "pokemon-icons/durant.png",
    "types": [
      "bug",
      "steel"
    ],
    "baseStats": {
      "hp": 58,
      "attack": 109,
      "defense": 112,
      "specialAttack": 48,
      "specialDefense": 48,
      "speed": 109,
      "total": 484
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 633,
    "slug": "deino",
    "speciesKey": "deino",
    "nameJa": "モノズ",
    "nameEn": "Deino",
    "imagePath": "pokemon-icons/deino.png",
    "types": [
      "dark",
      "dragon"
    ],
    "baseStats": {
      "hp": 52,
      "attack": 65,
      "defense": 50,
      "specialAttack": 45,
      "specialDefense": 50,
      "speed": 38,
      "total": 300
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 634,
    "slug": "zweilous",
    "speciesKey": "zweilous",
    "nameJa": "ジヘッド",
    "nameEn": "Zweilous",
    "imagePath": "pokemon-icons/zweilous.png",
    "types": [
      "dark",
      "dragon"
    ],
    "baseStats": {
      "hp": 72,
      "attack": 85,
      "defense": 70,
      "specialAttack": 65,
      "specialDefense": 70,
      "speed": 58,
      "total": 420
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 635,
    "slug": "hydreigon",
    "speciesKey": "hydreigon",
    "nameJa": "サザンドラ",
    "nameEn": "Hydreigon",
    "imagePath": "pokemon-icons/hydreigon.png",
    "types": [
      "dark",
      "dragon"
    ],
    "baseStats": {
      "hp": 92,
      "attack": 105,
      "defense": 90,
      "specialAttack": 125,
      "specialDefense": 90,
      "speed": 98,
      "total": 600
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 636,
    "slug": "larvesta",
    "speciesKey": "larvesta",
    "nameJa": "メラルバ",
    "nameEn": "Larvesta",
    "imagePath": "pokemon-icons/larvesta.png",
    "types": [
      "bug",
      "fire"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 85,
      "defense": 55,
      "specialAttack": 50,
      "specialDefense": 55,
      "speed": 60,
      "total": 360
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 637,
    "slug": "volcarona",
    "speciesKey": "volcarona",
    "nameJa": "ウルガモス",
    "nameEn": "Volcarona",
    "imagePath": "pokemon-icons/volcarona.png",
    "types": [
      "bug",
      "fire"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 60,
      "defense": 65,
      "specialAttack": 135,
      "specialDefense": 105,
      "speed": 100,
      "total": 550
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 638,
    "slug": "cobalion",
    "speciesKey": "cobalion",
    "nameJa": "コバルオン",
    "nameEn": "Cobalion",
    "imagePath": "pokemon-icons/cobalion.png",
    "types": [
      "steel",
      "fighting"
    ],
    "baseStats": {
      "hp": 91,
      "attack": 90,
      "defense": 129,
      "specialAttack": 90,
      "specialDefense": 72,
      "speed": 108,
      "total": 580
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 639,
    "slug": "terrakion",
    "speciesKey": "terrakion",
    "nameJa": "テラキオン",
    "nameEn": "Terrakion",
    "imagePath": "pokemon-icons/terrakion.png",
    "types": [
      "rock",
      "fighting"
    ],
    "baseStats": {
      "hp": 91,
      "attack": 129,
      "defense": 90,
      "specialAttack": 72,
      "specialDefense": 90,
      "speed": 108,
      "total": 580
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 640,
    "slug": "virizion",
    "speciesKey": "virizion",
    "nameJa": "ビリジオン",
    "nameEn": "Virizion",
    "imagePath": "pokemon-icons/virizion.png",
    "types": [
      "grass",
      "fighting"
    ],
    "baseStats": {
      "hp": 91,
      "attack": 90,
      "defense": 72,
      "specialAttack": 90,
      "specialDefense": 129,
      "speed": 108,
      "total": 580
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 641,
    "slug": "tornadus-incarnate",
    "speciesKey": "tornadus",
    "nameJa": "トルネロス（けしんフォルム）",
    "nameEn": "Incarnate Tornadus",
    "imagePath": "pokemon-icons/tornadus-incarnate.png",
    "types": [
      "flying"
    ],
    "baseStats": {
      "hp": 79,
      "attack": 115,
      "defense": 70,
      "specialAttack": 125,
      "specialDefense": 80,
      "speed": 111,
      "total": 580
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 10019,
    "slug": "tornadus-therian",
    "speciesKey": "tornadus",
    "nameJa": "トルネロス（れいじゅうフォルム）",
    "nameEn": "Therian Tornadus",
    "imagePath": "pokemon-icons/tornadus-therian.png",
    "types": [
      "flying"
    ],
    "baseStats": {
      "hp": 79,
      "attack": 100,
      "defense": 80,
      "specialAttack": 110,
      "specialDefense": 90,
      "speed": 121,
      "total": 580
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック2・ホワイト2",
    "isDefault": false
  },
  {
    "id": 642,
    "slug": "thundurus-incarnate",
    "speciesKey": "thundurus",
    "nameJa": "ボルトロス（けしんフォルム）",
    "nameEn": "Incarnate Thundurus",
    "imagePath": "pokemon-icons/thundurus-incarnate.png",
    "types": [
      "electric",
      "flying"
    ],
    "baseStats": {
      "hp": 79,
      "attack": 115,
      "defense": 70,
      "specialAttack": 125,
      "specialDefense": 80,
      "speed": 111,
      "total": 580
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 10020,
    "slug": "thundurus-therian",
    "speciesKey": "thundurus",
    "nameJa": "ボルトロス（れいじゅうフォルム）",
    "nameEn": "Therian Thundurus",
    "imagePath": "pokemon-icons/thundurus-therian.png",
    "types": [
      "electric",
      "flying"
    ],
    "baseStats": {
      "hp": 79,
      "attack": 105,
      "defense": 70,
      "specialAttack": 145,
      "specialDefense": 80,
      "speed": 101,
      "total": 580
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック2・ホワイト2",
    "isDefault": false
  },
  {
    "id": 643,
    "slug": "reshiram",
    "speciesKey": "reshiram",
    "nameJa": "レシラム",
    "nameEn": "Reshiram",
    "imagePath": "pokemon-icons/reshiram.png",
    "types": [
      "dragon",
      "fire"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 120,
      "defense": 100,
      "specialAttack": 150,
      "specialDefense": 120,
      "speed": 90,
      "total": 680
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 644,
    "slug": "zekrom",
    "speciesKey": "zekrom",
    "nameJa": "ゼクロム",
    "nameEn": "Zekrom",
    "imagePath": "pokemon-icons/zekrom.png",
    "types": [
      "dragon",
      "electric"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 150,
      "defense": 120,
      "specialAttack": 120,
      "specialDefense": 100,
      "speed": 90,
      "total": 680
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 645,
    "slug": "landorus-incarnate",
    "speciesKey": "landorus",
    "nameJa": "ランドロス（けしんフォルム）",
    "nameEn": "Incarnate Landorus",
    "imagePath": "pokemon-icons/landorus-incarnate.png",
    "types": [
      "ground",
      "flying"
    ],
    "baseStats": {
      "hp": 89,
      "attack": 125,
      "defense": 90,
      "specialAttack": 115,
      "specialDefense": 80,
      "speed": 101,
      "total": 600
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 10021,
    "slug": "landorus-therian",
    "speciesKey": "landorus",
    "nameJa": "ランドロス（れいじゅうフォルム）",
    "nameEn": "Therian Landorus",
    "imagePath": "pokemon-icons/landorus-therian.png",
    "types": [
      "ground",
      "flying"
    ],
    "baseStats": {
      "hp": 89,
      "attack": 145,
      "defense": 90,
      "specialAttack": 105,
      "specialDefense": 80,
      "speed": 91,
      "total": 600
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック2・ホワイト2",
    "isDefault": false
  },
  {
    "id": 646,
    "slug": "kyurem",
    "speciesKey": "kyurem",
    "nameJa": "キュレム",
    "nameEn": "Kyurem",
    "imagePath": "pokemon-icons/kyurem.png",
    "types": [
      "dragon",
      "ice"
    ],
    "baseStats": {
      "hp": 125,
      "attack": 130,
      "defense": 90,
      "specialAttack": 130,
      "specialDefense": 90,
      "speed": 95,
      "total": 660
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 10022,
    "slug": "kyurem-black",
    "speciesKey": "kyurem",
    "nameJa": "ブラックキュレム",
    "nameEn": "Black Kyurem",
    "imagePath": "pokemon-icons/kyurem-black.png",
    "types": [
      "dragon",
      "ice"
    ],
    "baseStats": {
      "hp": 125,
      "attack": 170,
      "defense": 100,
      "specialAttack": 120,
      "specialDefense": 90,
      "speed": 95,
      "total": 700
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック2・ホワイト2",
    "isDefault": false
  },
  {
    "id": 10023,
    "slug": "kyurem-white",
    "speciesKey": "kyurem",
    "nameJa": "ホワイトキュレム",
    "nameEn": "White Kyurem",
    "imagePath": "pokemon-icons/kyurem-white.png",
    "types": [
      "dragon",
      "ice"
    ],
    "baseStats": {
      "hp": 125,
      "attack": 120,
      "defense": 90,
      "specialAttack": 170,
      "specialDefense": 100,
      "speed": 95,
      "total": 700
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック2・ホワイト2",
    "isDefault": false
  },
  {
    "id": 647,
    "slug": "keldeo-ordinary",
    "speciesKey": "keldeo",
    "nameJa": "ケルディオ（いつものすがた）",
    "nameEn": "Ordinary Keldeo",
    "imagePath": "pokemon-icons/keldeo-ordinary.png",
    "types": [
      "water",
      "fighting"
    ],
    "baseStats": {
      "hp": 91,
      "attack": 72,
      "defense": 90,
      "specialAttack": 129,
      "specialDefense": 90,
      "speed": 108,
      "total": 580
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 648,
    "slug": "meloetta-aria",
    "speciesKey": "meloetta",
    "nameJa": "メロエッタ（ボイスフォルム）",
    "nameEn": "Aria Meloetta",
    "imagePath": "pokemon-icons/meloetta-aria.png",
    "types": [
      "normal",
      "psychic"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 77,
      "defense": 77,
      "specialAttack": 128,
      "specialDefense": 128,
      "speed": 90,
      "total": 600
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 10018,
    "slug": "meloetta-pirouette",
    "speciesKey": "meloetta",
    "nameJa": "メロエッタ（ステップフォルム）",
    "nameEn": "Pirouette Meloetta",
    "imagePath": "pokemon-icons/meloetta-pirouette.png",
    "types": [
      "normal",
      "fighting"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 128,
      "defense": 90,
      "specialAttack": 77,
      "specialDefense": 77,
      "speed": 128,
      "total": 600
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": false
  },
  {
    "id": 649,
    "slug": "genesect",
    "speciesKey": "genesect",
    "nameJa": "ゲノセクト",
    "nameEn": "Genesect",
    "imagePath": "pokemon-icons/genesect.png",
    "types": [
      "bug",
      "steel"
    ],
    "baseStats": {
      "hp": 71,
      "attack": 120,
      "defense": 95,
      "specialAttack": 120,
      "specialDefense": 95,
      "speed": 99,
      "total": 600
    },
    "generation": 5,
    "debutTitle": "ポケットモンスター ブラック・ホワイト",
    "isDefault": true
  },
  {
    "id": 650,
    "slug": "chespin",
    "speciesKey": "chespin",
    "nameJa": "ハリマロン",
    "nameEn": "Chespin",
    "imagePath": "pokemon-icons/chespin.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 56,
      "attack": 61,
      "defense": 65,
      "specialAttack": 48,
      "specialDefense": 45,
      "speed": 38,
      "total": 313
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 651,
    "slug": "quilladin",
    "speciesKey": "quilladin",
    "nameJa": "ハリボーグ",
    "nameEn": "Quilladin",
    "imagePath": "pokemon-icons/quilladin.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 61,
      "attack": 78,
      "defense": 95,
      "specialAttack": 56,
      "specialDefense": 58,
      "speed": 57,
      "total": 405
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 652,
    "slug": "chesnaught",
    "speciesKey": "chesnaught",
    "nameJa": "ブリガロン",
    "nameEn": "Chesnaught",
    "imagePath": "pokemon-icons/chesnaught.png",
    "types": [
      "grass",
      "fighting"
    ],
    "baseStats": {
      "hp": 88,
      "attack": 107,
      "defense": 122,
      "specialAttack": 74,
      "specialDefense": 75,
      "speed": 64,
      "total": 530
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 10292,
    "slug": "chesnaught-mega",
    "speciesKey": "chesnaught",
    "nameJa": "メガブリガロン",
    "nameEn": "Mega Chesnaught",
    "imagePath": "pokemon-icons/chesnaught-mega.png",
    "types": [
      "grass",
      "fighting"
    ],
    "baseStats": {
      "hp": 88,
      "attack": 137,
      "defense": 172,
      "specialAttack": 74,
      "specialDefense": 115,
      "speed": 44,
      "total": 630
    },
    "generation": 6,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 653,
    "slug": "fennekin",
    "speciesKey": "fennekin",
    "nameJa": "フォッコ",
    "nameEn": "Fennekin",
    "imagePath": "pokemon-icons/fennekin.png",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 45,
      "defense": 40,
      "specialAttack": 62,
      "specialDefense": 60,
      "speed": 60,
      "total": 307
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 654,
    "slug": "braixen",
    "speciesKey": "braixen",
    "nameJa": "テールナー",
    "nameEn": "Braixen",
    "imagePath": "pokemon-icons/braixen.png",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 59,
      "attack": 59,
      "defense": 58,
      "specialAttack": 90,
      "specialDefense": 70,
      "speed": 73,
      "total": 409
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 655,
    "slug": "delphox",
    "speciesKey": "delphox",
    "nameJa": "マフォクシー",
    "nameEn": "Delphox",
    "imagePath": "pokemon-icons/delphox.png",
    "types": [
      "fire",
      "psychic"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 69,
      "defense": 72,
      "specialAttack": 114,
      "specialDefense": 100,
      "speed": 104,
      "total": 534
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 10293,
    "slug": "delphox-mega",
    "speciesKey": "delphox",
    "nameJa": "メガマフォクシー",
    "nameEn": "Mega Delphox",
    "imagePath": "pokemon-icons/delphox-mega.png",
    "types": [
      "fire",
      "psychic"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 69,
      "defense": 72,
      "specialAttack": 159,
      "specialDefense": 125,
      "speed": 134,
      "total": 634
    },
    "generation": 6,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 656,
    "slug": "froakie",
    "speciesKey": "froakie",
    "nameJa": "ケロマツ",
    "nameEn": "Froakie",
    "imagePath": "pokemon-icons/froakie.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 41,
      "attack": 56,
      "defense": 40,
      "specialAttack": 62,
      "specialDefense": 44,
      "speed": 71,
      "total": 314
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 657,
    "slug": "frogadier",
    "speciesKey": "frogadier",
    "nameJa": "ゲコガシラ",
    "nameEn": "Frogadier",
    "imagePath": "pokemon-icons/frogadier.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 54,
      "attack": 63,
      "defense": 52,
      "specialAttack": 83,
      "specialDefense": 56,
      "speed": 97,
      "total": 405
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 658,
    "slug": "greninja",
    "speciesKey": "greninja",
    "nameJa": "ゲッコウガ",
    "nameEn": "Greninja",
    "imagePath": "pokemon-icons/greninja.png",
    "types": [
      "water",
      "dark"
    ],
    "baseStats": {
      "hp": 72,
      "attack": 95,
      "defense": 67,
      "specialAttack": 103,
      "specialDefense": 71,
      "speed": 122,
      "total": 530
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 10116,
    "slug": "greninja-battle-bond",
    "speciesKey": "greninja",
    "nameJa": "ゲッコウガ",
    "nameEn": "Battle Bond Greninja",
    "imagePath": "pokemon-icons/greninja-battle-bond.png",
    "types": [
      "water",
      "dark"
    ],
    "baseStats": {
      "hp": 72,
      "attack": 95,
      "defense": 67,
      "specialAttack": 103,
      "specialDefense": 71,
      "speed": 122,
      "total": 530
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 10117,
    "slug": "greninja-ash",
    "speciesKey": "greninja",
    "nameJa": "サトシゲッコウガ",
    "nameEn": "Ash’s Greninja",
    "imagePath": "pokemon-icons/greninja-ash.png",
    "types": [
      "water",
      "dark"
    ],
    "baseStats": {
      "hp": 72,
      "attack": 145,
      "defense": 67,
      "specialAttack": 153,
      "specialDefense": 71,
      "speed": 132,
      "total": 640
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 10294,
    "slug": "greninja-mega",
    "speciesKey": "greninja",
    "nameJa": "メガゲッコウガ",
    "nameEn": "Mega Greninja",
    "imagePath": "pokemon-icons/greninja-mega.png",
    "types": [
      "water",
      "dark"
    ],
    "baseStats": {
      "hp": 72,
      "attack": 125,
      "defense": 77,
      "specialAttack": 133,
      "specialDefense": 81,
      "speed": 142,
      "total": 630
    },
    "generation": 6,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 659,
    "slug": "bunnelby",
    "speciesKey": "bunnelby",
    "nameJa": "ホルビー",
    "nameEn": "Bunnelby",
    "imagePath": "pokemon-icons/bunnelby.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 38,
      "attack": 36,
      "defense": 38,
      "specialAttack": 32,
      "specialDefense": 36,
      "speed": 57,
      "total": 237
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 660,
    "slug": "diggersby",
    "speciesKey": "diggersby",
    "nameJa": "ホルード",
    "nameEn": "Diggersby",
    "imagePath": "pokemon-icons/diggersby.png",
    "types": [
      "normal",
      "ground"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 56,
      "defense": 77,
      "specialAttack": 50,
      "specialDefense": 77,
      "speed": 78,
      "total": 423
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 661,
    "slug": "fletchling",
    "speciesKey": "fletchling",
    "nameJa": "ヤヤコマ",
    "nameEn": "Fletchling",
    "imagePath": "pokemon-icons/fletchling.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 50,
      "defense": 43,
      "specialAttack": 40,
      "specialDefense": 38,
      "speed": 62,
      "total": 278
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 662,
    "slug": "fletchinder",
    "speciesKey": "fletchinder",
    "nameJa": "ヒノヤコマ",
    "nameEn": "Fletchinder",
    "imagePath": "pokemon-icons/fletchinder.png",
    "types": [
      "fire",
      "flying"
    ],
    "baseStats": {
      "hp": 62,
      "attack": 73,
      "defense": 55,
      "specialAttack": 56,
      "specialDefense": 52,
      "speed": 84,
      "total": 382
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 663,
    "slug": "talonflame",
    "speciesKey": "talonflame",
    "nameJa": "ファイアロー",
    "nameEn": "Talonflame",
    "imagePath": "pokemon-icons/talonflame.png",
    "types": [
      "fire",
      "flying"
    ],
    "baseStats": {
      "hp": 78,
      "attack": 81,
      "defense": 71,
      "specialAttack": 74,
      "specialDefense": 69,
      "speed": 126,
      "total": 499
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 664,
    "slug": "scatterbug",
    "speciesKey": "scatterbug",
    "nameJa": "コフキムシ",
    "nameEn": "Scatterbug",
    "imagePath": "pokemon-icons/scatterbug.png",
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 38,
      "attack": 35,
      "defense": 40,
      "specialAttack": 27,
      "specialDefense": 25,
      "speed": 35,
      "total": 200
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 665,
    "slug": "spewpa",
    "speciesKey": "spewpa",
    "nameJa": "コフーライ",
    "nameEn": "Spewpa",
    "imagePath": "pokemon-icons/spewpa.png",
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 22,
      "defense": 60,
      "specialAttack": 27,
      "specialDefense": 30,
      "speed": 29,
      "total": 213
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 666,
    "slug": "vivillon",
    "speciesKey": "vivillon",
    "nameJa": "ビビヨン（はなぞののもよう）",
    "nameEn": "Meadow Vivillon",
    "imagePath": "pokemon-icons/vivillon.png",
    "types": [
      "bug",
      "flying"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 52,
      "defense": 50,
      "specialAttack": 90,
      "specialDefense": 50,
      "speed": 89,
      "total": 411
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 667,
    "slug": "litleo",
    "speciesKey": "litleo",
    "nameJa": "シシコ",
    "nameEn": "Litleo",
    "imagePath": "pokemon-icons/litleo.png",
    "types": [
      "fire",
      "normal"
    ],
    "baseStats": {
      "hp": 62,
      "attack": 50,
      "defense": 58,
      "specialAttack": 73,
      "specialDefense": 54,
      "speed": 72,
      "total": 369
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 668,
    "slug": "pyroar-male",
    "speciesKey": "pyroar",
    "nameJa": "カエンジシ（オスのすがた）",
    "nameEn": "Male Pyroar",
    "imagePath": "pokemon-icons/pyroar-male.png",
    "types": [
      "fire",
      "normal"
    ],
    "baseStats": {
      "hp": 86,
      "attack": 68,
      "defense": 72,
      "specialAttack": 109,
      "specialDefense": 66,
      "speed": 106,
      "total": 507
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 10295,
    "slug": "pyroar-mega",
    "speciesKey": "pyroar",
    "nameJa": "メガカエンジシ",
    "nameEn": "Mega Pyroar",
    "imagePath": "pokemon-icons/pyroar-mega.png",
    "types": [
      "fire",
      "normal"
    ],
    "baseStats": {
      "hp": 86,
      "attack": 88,
      "defense": 92,
      "specialAttack": 129,
      "specialDefense": 86,
      "speed": 126,
      "total": 607
    },
    "generation": 6,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 669,
    "slug": "flabebe",
    "speciesKey": "flabebe",
    "nameJa": "フラベベ（あかいはな）",
    "nameEn": "Red Flabébé",
    "imagePath": "pokemon-icons/flabebe.png",
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 44,
      "attack": 38,
      "defense": 39,
      "specialAttack": 61,
      "specialDefense": 79,
      "speed": 42,
      "total": 303
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 670,
    "slug": "floette",
    "speciesKey": "floette",
    "nameJa": "フラエッテ（あかいはな）",
    "nameEn": "Red Floette",
    "imagePath": "pokemon-icons/floette.png",
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 54,
      "attack": 45,
      "defense": 47,
      "specialAttack": 75,
      "specialDefense": 98,
      "speed": 52,
      "total": 371
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 10061,
    "slug": "floette-eternal",
    "speciesKey": "floette",
    "nameJa": "フラエッテ（えいえんのはな）",
    "nameEn": "Eternal Floette",
    "imagePath": "pokemon-icons/floette-eternal.png",
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 74,
      "attack": 65,
      "defense": 67,
      "specialAttack": 125,
      "specialDefense": 128,
      "speed": 92,
      "total": 551
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": false
  },
  {
    "id": 10296,
    "slug": "floette-mega",
    "speciesKey": "floette",
    "nameJa": "メガフラエッテ",
    "nameEn": "Mega Floette",
    "imagePath": "pokemon-icons/floette-mega.png",
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 74,
      "attack": 85,
      "defense": 87,
      "specialAttack": 155,
      "specialDefense": 148,
      "speed": 102,
      "total": 651
    },
    "generation": 6,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 671,
    "slug": "florges",
    "speciesKey": "florges",
    "nameJa": "フラージェス（あかいはな）",
    "nameEn": "Red Florges",
    "imagePath": "pokemon-icons/florges.png",
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 78,
      "attack": 65,
      "defense": 68,
      "specialAttack": 112,
      "specialDefense": 154,
      "speed": 75,
      "total": 552
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 672,
    "slug": "skiddo",
    "speciesKey": "skiddo",
    "nameJa": "メェークル",
    "nameEn": "Skiddo",
    "imagePath": "pokemon-icons/skiddo.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 66,
      "attack": 65,
      "defense": 48,
      "specialAttack": 62,
      "specialDefense": 57,
      "speed": 52,
      "total": 350
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 673,
    "slug": "gogoat",
    "speciesKey": "gogoat",
    "nameJa": "ゴーゴート",
    "nameEn": "Gogoat",
    "imagePath": "pokemon-icons/gogoat.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 123,
      "attack": 100,
      "defense": 62,
      "specialAttack": 97,
      "specialDefense": 81,
      "speed": 68,
      "total": 531
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 674,
    "slug": "pancham",
    "speciesKey": "pancham",
    "nameJa": "ヤンチャム",
    "nameEn": "Pancham",
    "imagePath": "pokemon-icons/pancham.png",
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 67,
      "attack": 82,
      "defense": 62,
      "specialAttack": 46,
      "specialDefense": 48,
      "speed": 43,
      "total": 348
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 675,
    "slug": "pangoro",
    "speciesKey": "pangoro",
    "nameJa": "ゴロンダ",
    "nameEn": "Pangoro",
    "imagePath": "pokemon-icons/pangoro.png",
    "types": [
      "fighting",
      "dark"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 124,
      "defense": 78,
      "specialAttack": 69,
      "specialDefense": 71,
      "speed": 58,
      "total": 495
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 676,
    "slug": "furfrou",
    "speciesKey": "furfrou",
    "nameJa": "トリミアン（やせいのすがた）",
    "nameEn": "Natural Furfrou",
    "imagePath": "pokemon-icons/furfrou.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 80,
      "defense": 60,
      "specialAttack": 65,
      "specialDefense": 90,
      "speed": 102,
      "total": 472
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 677,
    "slug": "espurr",
    "speciesKey": "espurr",
    "nameJa": "ニャスパー",
    "nameEn": "Espurr",
    "imagePath": "pokemon-icons/espurr.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 62,
      "attack": 48,
      "defense": 54,
      "specialAttack": 63,
      "specialDefense": 60,
      "speed": 68,
      "total": 355
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 678,
    "slug": "meowstic-male",
    "speciesKey": "meowstic",
    "nameJa": "ニャオニクス（オスのすがた）",
    "nameEn": "Male Meowstic",
    "imagePath": "pokemon-icons/meowstic-male.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 74,
      "attack": 48,
      "defense": 76,
      "specialAttack": 83,
      "specialDefense": 81,
      "speed": 104,
      "total": 466
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 10025,
    "slug": "meowstic-female",
    "speciesKey": "meowstic",
    "nameJa": "ニャオニクス（メスのすがた）",
    "nameEn": "Female Meowstic",
    "imagePath": "pokemon-icons/meowstic-female.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 74,
      "attack": 48,
      "defense": 76,
      "specialAttack": 83,
      "specialDefense": 81,
      "speed": 104,
      "total": 466
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": false
  },
  {
    "id": 10314,
    "slug": "meowstic-mega",
    "speciesKey": "meowstic",
    "nameJa": "メガニャオニクス",
    "nameEn": "Mega Meowstic",
    "imagePath": "pokemon-icons/meowstic-mega.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 74,
      "attack": 48,
      "defense": 76,
      "specialAttack": 143,
      "specialDefense": 101,
      "speed": 124,
      "total": 566
    },
    "generation": 6,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 679,
    "slug": "honedge",
    "speciesKey": "honedge",
    "nameJa": "ヒトツキ",
    "nameEn": "Honedge",
    "imagePath": "pokemon-icons/honedge.png",
    "types": [
      "steel",
      "ghost"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 80,
      "defense": 100,
      "specialAttack": 35,
      "specialDefense": 37,
      "speed": 28,
      "total": 325
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 680,
    "slug": "doublade",
    "speciesKey": "doublade",
    "nameJa": "ニダンギル",
    "nameEn": "Doublade",
    "imagePath": "pokemon-icons/doublade.png",
    "types": [
      "steel",
      "ghost"
    ],
    "baseStats": {
      "hp": 59,
      "attack": 110,
      "defense": 150,
      "specialAttack": 45,
      "specialDefense": 49,
      "speed": 35,
      "total": 448
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 681,
    "slug": "aegislash-shield",
    "speciesKey": "aegislash",
    "nameJa": "ギルガルド（シールドフォルム）",
    "nameEn": "Shield Aegislash",
    "imagePath": "pokemon-icons/aegislash-shield.png",
    "types": [
      "steel",
      "ghost"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 50,
      "defense": 140,
      "specialAttack": 50,
      "specialDefense": 140,
      "speed": 60,
      "total": 500
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 10026,
    "slug": "aegislash-blade",
    "speciesKey": "aegislash",
    "nameJa": "ギルガルド（ブレードフォルム）",
    "nameEn": "Blade Aegislash",
    "imagePath": "pokemon-icons/aegislash-blade.png",
    "types": [
      "steel",
      "ghost"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 140,
      "defense": 50,
      "specialAttack": 140,
      "specialDefense": 50,
      "speed": 60,
      "total": 500
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": false
  },
  {
    "id": 682,
    "slug": "spritzee",
    "speciesKey": "spritzee",
    "nameJa": "シュシュプ",
    "nameEn": "Spritzee",
    "imagePath": "pokemon-icons/spritzee.png",
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 78,
      "attack": 52,
      "defense": 60,
      "specialAttack": 63,
      "specialDefense": 65,
      "speed": 23,
      "total": 341
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 683,
    "slug": "aromatisse",
    "speciesKey": "aromatisse",
    "nameJa": "フレフワン",
    "nameEn": "Aromatisse",
    "imagePath": "pokemon-icons/aromatisse.png",
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 101,
      "attack": 72,
      "defense": 72,
      "specialAttack": 99,
      "specialDefense": 89,
      "speed": 29,
      "total": 462
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 684,
    "slug": "swirlix",
    "speciesKey": "swirlix",
    "nameJa": "ペロッパフ",
    "nameEn": "Swirlix",
    "imagePath": "pokemon-icons/swirlix.png",
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 62,
      "attack": 48,
      "defense": 66,
      "specialAttack": 59,
      "specialDefense": 57,
      "speed": 49,
      "total": 341
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 685,
    "slug": "slurpuff",
    "speciesKey": "slurpuff",
    "nameJa": "ペロリーム",
    "nameEn": "Slurpuff",
    "imagePath": "pokemon-icons/slurpuff.png",
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 82,
      "attack": 80,
      "defense": 86,
      "specialAttack": 85,
      "specialDefense": 75,
      "speed": 72,
      "total": 480
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 686,
    "slug": "inkay",
    "speciesKey": "inkay",
    "nameJa": "マーイーカ",
    "nameEn": "Inkay",
    "imagePath": "pokemon-icons/inkay.png",
    "types": [
      "dark",
      "psychic"
    ],
    "baseStats": {
      "hp": 53,
      "attack": 54,
      "defense": 53,
      "specialAttack": 37,
      "specialDefense": 46,
      "speed": 45,
      "total": 288
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 687,
    "slug": "malamar",
    "speciesKey": "malamar",
    "nameJa": "カラマネロ",
    "nameEn": "Malamar",
    "imagePath": "pokemon-icons/malamar.png",
    "types": [
      "dark",
      "psychic"
    ],
    "baseStats": {
      "hp": 86,
      "attack": 92,
      "defense": 88,
      "specialAttack": 68,
      "specialDefense": 75,
      "speed": 73,
      "total": 482
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 10297,
    "slug": "malamar-mega",
    "speciesKey": "malamar",
    "nameJa": "メガカラマネロ",
    "nameEn": "Mega Malamar",
    "imagePath": "pokemon-icons/malamar-mega.png",
    "types": [
      "dark",
      "psychic"
    ],
    "baseStats": {
      "hp": 86,
      "attack": 102,
      "defense": 88,
      "specialAttack": 98,
      "specialDefense": 120,
      "speed": 88,
      "total": 582
    },
    "generation": 6,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 688,
    "slug": "binacle",
    "speciesKey": "binacle",
    "nameJa": "カメテテ",
    "nameEn": "Binacle",
    "imagePath": "pokemon-icons/binacle.png",
    "types": [
      "rock",
      "water"
    ],
    "baseStats": {
      "hp": 42,
      "attack": 52,
      "defense": 67,
      "specialAttack": 39,
      "specialDefense": 56,
      "speed": 50,
      "total": 306
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 689,
    "slug": "barbaracle",
    "speciesKey": "barbaracle",
    "nameJa": "ガメノデス",
    "nameEn": "Barbaracle",
    "imagePath": "pokemon-icons/barbaracle.png",
    "types": [
      "rock",
      "water"
    ],
    "baseStats": {
      "hp": 72,
      "attack": 105,
      "defense": 115,
      "specialAttack": 54,
      "specialDefense": 86,
      "speed": 68,
      "total": 500
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 10298,
    "slug": "barbaracle-mega",
    "speciesKey": "barbaracle",
    "nameJa": "メガガメノデス",
    "nameEn": "Mega Barbaracle",
    "imagePath": "pokemon-icons/barbaracle-mega.png",
    "types": [
      "rock",
      "fighting"
    ],
    "baseStats": {
      "hp": 72,
      "attack": 140,
      "defense": 130,
      "specialAttack": 64,
      "specialDefense": 106,
      "speed": 88,
      "total": 600
    },
    "generation": 6,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 690,
    "slug": "skrelp",
    "speciesKey": "skrelp",
    "nameJa": "クズモー",
    "nameEn": "Skrelp",
    "imagePath": "pokemon-icons/skrelp.png",
    "types": [
      "poison",
      "water"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 60,
      "defense": 60,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 30,
      "total": 320
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 691,
    "slug": "dragalge",
    "speciesKey": "dragalge",
    "nameJa": "ドラミドロ",
    "nameEn": "Dragalge",
    "imagePath": "pokemon-icons/dragalge.png",
    "types": [
      "poison",
      "dragon"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 75,
      "defense": 90,
      "specialAttack": 97,
      "specialDefense": 123,
      "speed": 44,
      "total": 494
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 10299,
    "slug": "dragalge-mega",
    "speciesKey": "dragalge",
    "nameJa": "メガドラミドロ",
    "nameEn": "Mega Dragalge",
    "imagePath": "pokemon-icons/dragalge-mega.png",
    "types": [
      "poison",
      "dragon"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 85,
      "defense": 105,
      "specialAttack": 132,
      "specialDefense": 163,
      "speed": 44,
      "total": 594
    },
    "generation": 6,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 692,
    "slug": "clauncher",
    "speciesKey": "clauncher",
    "nameJa": "ウデッポウ",
    "nameEn": "Clauncher",
    "imagePath": "pokemon-icons/clauncher.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 53,
      "defense": 62,
      "specialAttack": 58,
      "specialDefense": 63,
      "speed": 44,
      "total": 330
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 693,
    "slug": "clawitzer",
    "speciesKey": "clawitzer",
    "nameJa": "ブロスター",
    "nameEn": "Clawitzer",
    "imagePath": "pokemon-icons/clawitzer.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 71,
      "attack": 73,
      "defense": 88,
      "specialAttack": 120,
      "specialDefense": 89,
      "speed": 59,
      "total": 500
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 694,
    "slug": "helioptile",
    "speciesKey": "helioptile",
    "nameJa": "エリキテル",
    "nameEn": "Helioptile",
    "imagePath": "pokemon-icons/helioptile.png",
    "types": [
      "electric",
      "normal"
    ],
    "baseStats": {
      "hp": 44,
      "attack": 38,
      "defense": 33,
      "specialAttack": 61,
      "specialDefense": 43,
      "speed": 70,
      "total": 289
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 695,
    "slug": "heliolisk",
    "speciesKey": "heliolisk",
    "nameJa": "エレザード",
    "nameEn": "Heliolisk",
    "imagePath": "pokemon-icons/heliolisk.png",
    "types": [
      "electric",
      "normal"
    ],
    "baseStats": {
      "hp": 62,
      "attack": 55,
      "defense": 52,
      "specialAttack": 109,
      "specialDefense": 94,
      "speed": 109,
      "total": 481
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 696,
    "slug": "tyrunt",
    "speciesKey": "tyrunt",
    "nameJa": "チゴラス",
    "nameEn": "Tyrunt",
    "imagePath": "pokemon-icons/tyrunt.png",
    "types": [
      "rock",
      "dragon"
    ],
    "baseStats": {
      "hp": 58,
      "attack": 89,
      "defense": 77,
      "specialAttack": 45,
      "specialDefense": 45,
      "speed": 48,
      "total": 362
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 697,
    "slug": "tyrantrum",
    "speciesKey": "tyrantrum",
    "nameJa": "ガチゴラス",
    "nameEn": "Tyrantrum",
    "imagePath": "pokemon-icons/tyrantrum.png",
    "types": [
      "rock",
      "dragon"
    ],
    "baseStats": {
      "hp": 82,
      "attack": 121,
      "defense": 119,
      "specialAttack": 69,
      "specialDefense": 59,
      "speed": 71,
      "total": 521
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 698,
    "slug": "amaura",
    "speciesKey": "amaura",
    "nameJa": "アマルス",
    "nameEn": "Amaura",
    "imagePath": "pokemon-icons/amaura.png",
    "types": [
      "rock",
      "ice"
    ],
    "baseStats": {
      "hp": 77,
      "attack": 59,
      "defense": 50,
      "specialAttack": 67,
      "specialDefense": 63,
      "speed": 46,
      "total": 362
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 699,
    "slug": "aurorus",
    "speciesKey": "aurorus",
    "nameJa": "アマルルガ",
    "nameEn": "Aurorus",
    "imagePath": "pokemon-icons/aurorus.png",
    "types": [
      "rock",
      "ice"
    ],
    "baseStats": {
      "hp": 123,
      "attack": 77,
      "defense": 72,
      "specialAttack": 99,
      "specialDefense": 92,
      "speed": 58,
      "total": 521
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 700,
    "slug": "sylveon",
    "speciesKey": "sylveon",
    "nameJa": "ニンフィア",
    "nameEn": "Sylveon",
    "imagePath": "pokemon-icons/sylveon.png",
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 65,
      "defense": 65,
      "specialAttack": 110,
      "specialDefense": 130,
      "speed": 60,
      "total": 525
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 701,
    "slug": "hawlucha",
    "speciesKey": "hawlucha",
    "nameJa": "ルチャブル",
    "nameEn": "Hawlucha",
    "imagePath": "pokemon-icons/hawlucha.png",
    "types": [
      "fighting",
      "flying"
    ],
    "baseStats": {
      "hp": 78,
      "attack": 92,
      "defense": 75,
      "specialAttack": 74,
      "specialDefense": 63,
      "speed": 118,
      "total": 500
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 10300,
    "slug": "hawlucha-mega",
    "speciesKey": "hawlucha",
    "nameJa": "メガルチャブル",
    "nameEn": "Mega Hawlucha",
    "imagePath": "pokemon-icons/hawlucha-mega.png",
    "types": [
      "fighting",
      "flying"
    ],
    "baseStats": {
      "hp": 78,
      "attack": 137,
      "defense": 100,
      "specialAttack": 74,
      "specialDefense": 93,
      "speed": 118,
      "total": 600
    },
    "generation": 6,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 702,
    "slug": "dedenne",
    "speciesKey": "dedenne",
    "nameJa": "デデンネ",
    "nameEn": "Dedenne",
    "imagePath": "pokemon-icons/dedenne.png",
    "types": [
      "electric",
      "fairy"
    ],
    "baseStats": {
      "hp": 67,
      "attack": 58,
      "defense": 57,
      "specialAttack": 81,
      "specialDefense": 67,
      "speed": 101,
      "total": 431
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 703,
    "slug": "carbink",
    "speciesKey": "carbink",
    "nameJa": "メレシー",
    "nameEn": "Carbink",
    "imagePath": "pokemon-icons/carbink.png",
    "types": [
      "rock",
      "fairy"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 50,
      "defense": 150,
      "specialAttack": 50,
      "specialDefense": 150,
      "speed": 50,
      "total": 500
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 704,
    "slug": "goomy",
    "speciesKey": "goomy",
    "nameJa": "ヌメラ",
    "nameEn": "Goomy",
    "imagePath": "pokemon-icons/goomy.png",
    "types": [
      "dragon"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 50,
      "defense": 35,
      "specialAttack": 55,
      "specialDefense": 75,
      "speed": 40,
      "total": 300
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 705,
    "slug": "sliggoo",
    "speciesKey": "sliggoo",
    "nameJa": "ヌメイル",
    "nameEn": "Sliggoo",
    "imagePath": "pokemon-icons/sliggoo.png",
    "types": [
      "dragon"
    ],
    "baseStats": {
      "hp": 68,
      "attack": 75,
      "defense": 53,
      "specialAttack": 83,
      "specialDefense": 113,
      "speed": 60,
      "total": 452
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 10241,
    "slug": "sliggoo-hisui",
    "speciesKey": "sliggoo",
    "nameJa": "ヌメイル（ヒスイのすがた）",
    "nameEn": "Hisuian Sliggoo",
    "imagePath": "pokemon-icons/sliggoo-hisui.png",
    "types": [
      "steel",
      "dragon"
    ],
    "baseStats": {
      "hp": 58,
      "attack": 75,
      "defense": 83,
      "specialAttack": 83,
      "specialDefense": 113,
      "speed": 40,
      "total": 452
    },
    "generation": 6,
    "debutTitle": "Pokemon LEGENDS アルセウス",
    "isDefault": false
  },
  {
    "id": 706,
    "slug": "goodra",
    "speciesKey": "goodra",
    "nameJa": "ヌメルゴン",
    "nameEn": "Goodra",
    "imagePath": "pokemon-icons/goodra.png",
    "types": [
      "dragon"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 100,
      "defense": 70,
      "specialAttack": 110,
      "specialDefense": 150,
      "speed": 80,
      "total": 600
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 10242,
    "slug": "goodra-hisui",
    "speciesKey": "goodra",
    "nameJa": "ヌメルゴン（ヒスイのすがた）",
    "nameEn": "Hisuian Goodra",
    "imagePath": "pokemon-icons/goodra-hisui.png",
    "types": [
      "steel",
      "dragon"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 100,
      "defense": 100,
      "specialAttack": 110,
      "specialDefense": 150,
      "speed": 60,
      "total": 600
    },
    "generation": 6,
    "debutTitle": "Pokemon LEGENDS アルセウス",
    "isDefault": false
  },
  {
    "id": 707,
    "slug": "klefki",
    "speciesKey": "klefki",
    "nameJa": "クレッフィ",
    "nameEn": "Klefki",
    "imagePath": "pokemon-icons/klefki.png",
    "types": [
      "steel",
      "fairy"
    ],
    "baseStats": {
      "hp": 57,
      "attack": 80,
      "defense": 91,
      "specialAttack": 80,
      "specialDefense": 87,
      "speed": 75,
      "total": 470
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 708,
    "slug": "phantump",
    "speciesKey": "phantump",
    "nameJa": "ボクレー",
    "nameEn": "Phantump",
    "imagePath": "pokemon-icons/phantump.png",
    "types": [
      "ghost",
      "grass"
    ],
    "baseStats": {
      "hp": 43,
      "attack": 70,
      "defense": 48,
      "specialAttack": 50,
      "specialDefense": 60,
      "speed": 38,
      "total": 309
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 709,
    "slug": "trevenant",
    "speciesKey": "trevenant",
    "nameJa": "オーロット",
    "nameEn": "Trevenant",
    "imagePath": "pokemon-icons/trevenant.png",
    "types": [
      "ghost",
      "grass"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 110,
      "defense": 76,
      "specialAttack": 65,
      "specialDefense": 82,
      "speed": 56,
      "total": 474
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 710,
    "slug": "pumpkaboo-average",
    "speciesKey": "pumpkaboo",
    "nameJa": "バケッチャ（ふつうのサイズ）",
    "nameEn": "Average Pumpkaboo",
    "imagePath": "pokemon-icons/pumpkaboo-average.png",
    "types": [
      "ghost",
      "grass"
    ],
    "baseStats": {
      "hp": 49,
      "attack": 66,
      "defense": 70,
      "specialAttack": 44,
      "specialDefense": 55,
      "speed": 51,
      "total": 335
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 10027,
    "slug": "pumpkaboo-small",
    "speciesKey": "pumpkaboo",
    "nameJa": "バケッチャ（ちいさいサイズ）",
    "nameEn": "Small Pumpkaboo",
    "imagePath": "pokemon-icons/pumpkaboo-small.png",
    "types": [
      "ghost",
      "grass"
    ],
    "baseStats": {
      "hp": 44,
      "attack": 66,
      "defense": 70,
      "specialAttack": 44,
      "specialDefense": 55,
      "speed": 56,
      "total": 335
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": false
  },
  {
    "id": 10028,
    "slug": "pumpkaboo-large",
    "speciesKey": "pumpkaboo",
    "nameJa": "バケッチャ（おおきいサイズ）",
    "nameEn": "Large Pumpkaboo",
    "imagePath": "pokemon-icons/pumpkaboo-large.png",
    "types": [
      "ghost",
      "grass"
    ],
    "baseStats": {
      "hp": 54,
      "attack": 66,
      "defense": 70,
      "specialAttack": 44,
      "specialDefense": 55,
      "speed": 46,
      "total": 335
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": false
  },
  {
    "id": 10029,
    "slug": "pumpkaboo-super",
    "speciesKey": "pumpkaboo",
    "nameJa": "バケッチャ（とくだいサイズ）",
    "nameEn": "Super Pumpkaboo",
    "imagePath": "pokemon-icons/pumpkaboo-super.png",
    "types": [
      "ghost",
      "grass"
    ],
    "baseStats": {
      "hp": 59,
      "attack": 66,
      "defense": 70,
      "specialAttack": 44,
      "specialDefense": 55,
      "speed": 41,
      "total": 335
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": false
  },
  {
    "id": 711,
    "slug": "gourgeist-average",
    "speciesKey": "gourgeist",
    "nameJa": "パンプジン（ふつうのサイズ）",
    "nameEn": "Average Gourgeist",
    "imagePath": "pokemon-icons/gourgeist-average.png",
    "types": [
      "ghost",
      "grass"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 90,
      "defense": 122,
      "specialAttack": 58,
      "specialDefense": 75,
      "speed": 84,
      "total": 494
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 10030,
    "slug": "gourgeist-small",
    "speciesKey": "gourgeist",
    "nameJa": "パンプジン（ちいさいサイズ）",
    "nameEn": "Small Gourgeist",
    "imagePath": "pokemon-icons/gourgeist-small.png",
    "types": [
      "ghost",
      "grass"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 85,
      "defense": 122,
      "specialAttack": 58,
      "specialDefense": 75,
      "speed": 99,
      "total": 494
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": false
  },
  {
    "id": 10031,
    "slug": "gourgeist-large",
    "speciesKey": "gourgeist",
    "nameJa": "パンプジン（おおきいサイズ）",
    "nameEn": "Large Gourgeist",
    "imagePath": "pokemon-icons/gourgeist-large.png",
    "types": [
      "ghost",
      "grass"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 95,
      "defense": 122,
      "specialAttack": 58,
      "specialDefense": 75,
      "speed": 69,
      "total": 494
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": false
  },
  {
    "id": 10032,
    "slug": "gourgeist-super",
    "speciesKey": "gourgeist",
    "nameJa": "パンプジン（とくだいサイズ）",
    "nameEn": "Super Gourgeist",
    "imagePath": "pokemon-icons/gourgeist-super.png",
    "types": [
      "ghost",
      "grass"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 100,
      "defense": 122,
      "specialAttack": 58,
      "specialDefense": 75,
      "speed": 54,
      "total": 494
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": false
  },
  {
    "id": 712,
    "slug": "bergmite",
    "speciesKey": "bergmite",
    "nameJa": "カチコール",
    "nameEn": "Bergmite",
    "imagePath": "pokemon-icons/bergmite.png",
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 69,
      "defense": 85,
      "specialAttack": 32,
      "specialDefense": 35,
      "speed": 28,
      "total": 304
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 713,
    "slug": "avalugg",
    "speciesKey": "avalugg",
    "nameJa": "クレベース",
    "nameEn": "Avalugg",
    "imagePath": "pokemon-icons/avalugg.png",
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 117,
      "defense": 184,
      "specialAttack": 44,
      "specialDefense": 46,
      "speed": 28,
      "total": 514
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 10243,
    "slug": "avalugg-hisui",
    "speciesKey": "avalugg",
    "nameJa": "クレベース（ヒスイのすがた）",
    "nameEn": "Hisuian Avalugg",
    "imagePath": "pokemon-icons/avalugg-hisui.png",
    "types": [
      "ice",
      "rock"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 127,
      "defense": 184,
      "specialAttack": 34,
      "specialDefense": 36,
      "speed": 38,
      "total": 514
    },
    "generation": 6,
    "debutTitle": "Pokemon LEGENDS アルセウス",
    "isDefault": false
  },
  {
    "id": 714,
    "slug": "noibat",
    "speciesKey": "noibat",
    "nameJa": "オンバット",
    "nameEn": "Noibat",
    "imagePath": "pokemon-icons/noibat.png",
    "types": [
      "flying",
      "dragon"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 30,
      "defense": 35,
      "specialAttack": 45,
      "specialDefense": 40,
      "speed": 55,
      "total": 245
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 715,
    "slug": "noivern",
    "speciesKey": "noivern",
    "nameJa": "オンバーン",
    "nameEn": "Noivern",
    "imagePath": "pokemon-icons/noivern.png",
    "types": [
      "flying",
      "dragon"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 70,
      "defense": 80,
      "specialAttack": 97,
      "specialDefense": 80,
      "speed": 123,
      "total": 535
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 716,
    "slug": "xerneas",
    "speciesKey": "xerneas",
    "nameJa": "ゼルネアス（アクティブモード）",
    "nameEn": "Active Xerneas",
    "imagePath": "pokemon-icons/xerneas.png",
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 126,
      "attack": 131,
      "defense": 95,
      "specialAttack": 131,
      "specialDefense": 98,
      "speed": 99,
      "total": 680
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 717,
    "slug": "yveltal",
    "speciesKey": "yveltal",
    "nameJa": "イベルタル",
    "nameEn": "Yveltal",
    "imagePath": "pokemon-icons/yveltal.png",
    "types": [
      "dark",
      "flying"
    ],
    "baseStats": {
      "hp": 126,
      "attack": 131,
      "defense": 95,
      "specialAttack": 131,
      "specialDefense": 98,
      "speed": 99,
      "total": 680
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 718,
    "slug": "zygarde-50",
    "speciesKey": "zygarde",
    "nameJa": "ジガルデ（５０％フォルム）",
    "nameEn": "Zygarde (50% Forme)",
    "imagePath": "pokemon-icons/zygarde-50.png",
    "types": [
      "dragon",
      "ground"
    ],
    "baseStats": {
      "hp": 108,
      "attack": 100,
      "defense": 121,
      "specialAttack": 81,
      "specialDefense": 95,
      "speed": 95,
      "total": 600
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 10118,
    "slug": "zygarde-10-power-construct",
    "speciesKey": "zygarde",
    "nameJa": "ジガルデ（１０％フォルム）",
    "nameEn": "10% Zygarde",
    "imagePath": "pokemon-icons/zygarde-10-power-construct.png",
    "types": [
      "dragon",
      "ground"
    ],
    "baseStats": {
      "hp": 54,
      "attack": 100,
      "defense": 71,
      "specialAttack": 61,
      "specialDefense": 85,
      "speed": 115,
      "total": 486
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 10119,
    "slug": "zygarde-50-power-construct",
    "speciesKey": "zygarde",
    "nameJa": "ジガルデ（５０％フォルム）",
    "nameEn": "50% Zygarde",
    "imagePath": "pokemon-icons/zygarde-50-power-construct.png",
    "types": [
      "dragon",
      "ground"
    ],
    "baseStats": {
      "hp": 108,
      "attack": 100,
      "defense": 121,
      "specialAttack": 81,
      "specialDefense": 95,
      "speed": 95,
      "total": 600
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 10120,
    "slug": "zygarde-complete",
    "speciesKey": "zygarde",
    "nameJa": "ジガルデ（パーフェクトフォルム）",
    "nameEn": "Complete Zygarde",
    "imagePath": "pokemon-icons/zygarde-complete.png",
    "types": [
      "dragon",
      "ground"
    ],
    "baseStats": {
      "hp": 216,
      "attack": 100,
      "defense": 121,
      "specialAttack": 91,
      "specialDefense": 95,
      "speed": 85,
      "total": 708
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 10181,
    "slug": "zygarde-10",
    "speciesKey": "zygarde",
    "nameJa": "ジガルデ（１０％フォルム）",
    "nameEn": "10% Zygarde",
    "imagePath": "pokemon-icons/zygarde-10.png",
    "types": [
      "dragon",
      "ground"
    ],
    "baseStats": {
      "hp": 54,
      "attack": 100,
      "defense": 71,
      "specialAttack": 61,
      "specialDefense": 85,
      "speed": 115,
      "total": 486
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 10301,
    "slug": "zygarde-mega",
    "speciesKey": "zygarde",
    "nameJa": "メガジガルデ",
    "nameEn": "Mega Zygarde",
    "imagePath": "pokemon-icons/zygarde-mega.png",
    "types": [
      "dragon",
      "ground"
    ],
    "baseStats": {
      "hp": 216,
      "attack": 70,
      "defense": 91,
      "specialAttack": 216,
      "specialDefense": 85,
      "speed": 100,
      "total": 778
    },
    "generation": 6,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 719,
    "slug": "diancie",
    "speciesKey": "diancie",
    "nameJa": "ディアンシー",
    "nameEn": "Diancie",
    "imagePath": "pokemon-icons/diancie.png",
    "types": [
      "rock",
      "fairy"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 100,
      "defense": 150,
      "specialAttack": 100,
      "specialDefense": 150,
      "speed": 50,
      "total": 600
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 10075,
    "slug": "diancie-mega",
    "speciesKey": "diancie",
    "nameJa": "メガディアンシー",
    "nameEn": "Mega Diancie",
    "imagePath": "pokemon-icons/diancie-mega.png",
    "types": [
      "rock",
      "fairy"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 160,
      "defense": 110,
      "specialAttack": 160,
      "specialDefense": 110,
      "speed": 110,
      "total": 700
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター オメガルビー・アルファサファイア",
    "isDefault": false
  },
  {
    "id": 720,
    "slug": "hoopa",
    "speciesKey": "hoopa",
    "nameJa": "フーパ",
    "nameEn": "Hoopa",
    "imagePath": "pokemon-icons/hoopa.png",
    "types": [
      "psychic",
      "ghost"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 110,
      "defense": 60,
      "specialAttack": 150,
      "specialDefense": 130,
      "speed": 70,
      "total": 600
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 10086,
    "slug": "hoopa-unbound",
    "speciesKey": "hoopa",
    "nameJa": "ときはなたれしフーパ",
    "nameEn": "Hoopa Unbound",
    "imagePath": "pokemon-icons/hoopa-unbound.png",
    "types": [
      "psychic",
      "dark"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 160,
      "defense": 60,
      "specialAttack": 170,
      "specialDefense": 130,
      "speed": 80,
      "total": 680
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター オメガルビー・アルファサファイア",
    "isDefault": false
  },
  {
    "id": 721,
    "slug": "volcanion",
    "speciesKey": "volcanion",
    "nameJa": "ボルケニオン",
    "nameEn": "Volcanion",
    "imagePath": "pokemon-icons/volcanion.png",
    "types": [
      "fire",
      "water"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 110,
      "defense": 120,
      "specialAttack": 130,
      "specialDefense": 90,
      "speed": 70,
      "total": 600
    },
    "generation": 6,
    "debutTitle": "ポケットモンスター X・Y",
    "isDefault": true
  },
  {
    "id": 722,
    "slug": "rowlet",
    "speciesKey": "rowlet",
    "nameJa": "モクロー",
    "nameEn": "Rowlet",
    "imagePath": "pokemon-icons/rowlet.png",
    "types": [
      "grass",
      "flying"
    ],
    "baseStats": {
      "hp": 68,
      "attack": 55,
      "defense": 55,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 42,
      "total": 320
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 723,
    "slug": "dartrix",
    "speciesKey": "dartrix",
    "nameJa": "フクスロー",
    "nameEn": "Dartrix",
    "imagePath": "pokemon-icons/dartrix.png",
    "types": [
      "grass",
      "flying"
    ],
    "baseStats": {
      "hp": 78,
      "attack": 75,
      "defense": 75,
      "specialAttack": 70,
      "specialDefense": 70,
      "speed": 52,
      "total": 420
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 724,
    "slug": "decidueye",
    "speciesKey": "decidueye",
    "nameJa": "ジュナイパー",
    "nameEn": "Decidueye",
    "imagePath": "pokemon-icons/decidueye.png",
    "types": [
      "grass",
      "ghost"
    ],
    "baseStats": {
      "hp": 78,
      "attack": 107,
      "defense": 75,
      "specialAttack": 100,
      "specialDefense": 100,
      "speed": 70,
      "total": 530
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 10244,
    "slug": "decidueye-hisui",
    "speciesKey": "decidueye",
    "nameJa": "ジュナイパー（ヒスイのすがた）",
    "nameEn": "Hisuian Decidueye",
    "imagePath": "pokemon-icons/decidueye-hisui.png",
    "types": [
      "grass",
      "fighting"
    ],
    "baseStats": {
      "hp": 88,
      "attack": 112,
      "defense": 80,
      "specialAttack": 95,
      "specialDefense": 95,
      "speed": 60,
      "total": 530
    },
    "generation": 7,
    "debutTitle": "Pokemon LEGENDS アルセウス",
    "isDefault": false
  },
  {
    "id": 725,
    "slug": "litten",
    "speciesKey": "litten",
    "nameJa": "ニャビー",
    "nameEn": "Litten",
    "imagePath": "pokemon-icons/litten.png",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 65,
      "defense": 40,
      "specialAttack": 60,
      "specialDefense": 40,
      "speed": 70,
      "total": 320
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 726,
    "slug": "torracat",
    "speciesKey": "torracat",
    "nameJa": "ニャヒート",
    "nameEn": "Torracat",
    "imagePath": "pokemon-icons/torracat.png",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 85,
      "defense": 50,
      "specialAttack": 80,
      "specialDefense": 50,
      "speed": 90,
      "total": 420
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 727,
    "slug": "incineroar",
    "speciesKey": "incineroar",
    "nameJa": "ガオガエン",
    "nameEn": "Incineroar",
    "imagePath": "pokemon-icons/incineroar.png",
    "types": [
      "fire",
      "dark"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 115,
      "defense": 90,
      "specialAttack": 80,
      "specialDefense": 90,
      "speed": 60,
      "total": 530
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 728,
    "slug": "popplio",
    "speciesKey": "popplio",
    "nameJa": "アシマリ",
    "nameEn": "Popplio",
    "imagePath": "pokemon-icons/popplio.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 54,
      "defense": 54,
      "specialAttack": 66,
      "specialDefense": 56,
      "speed": 40,
      "total": 320
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 729,
    "slug": "brionne",
    "speciesKey": "brionne",
    "nameJa": "オシャマリ",
    "nameEn": "Brionne",
    "imagePath": "pokemon-icons/brionne.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 69,
      "defense": 69,
      "specialAttack": 91,
      "specialDefense": 81,
      "speed": 50,
      "total": 420
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 730,
    "slug": "primarina",
    "speciesKey": "primarina",
    "nameJa": "アシレーヌ",
    "nameEn": "Primarina",
    "imagePath": "pokemon-icons/primarina.png",
    "types": [
      "water",
      "fairy"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 74,
      "defense": 74,
      "specialAttack": 126,
      "specialDefense": 116,
      "speed": 60,
      "total": 530
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 731,
    "slug": "pikipek",
    "speciesKey": "pikipek",
    "nameJa": "ツツケラ",
    "nameEn": "Pikipek",
    "imagePath": "pokemon-icons/pikipek.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 75,
      "defense": 30,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 65,
      "total": 265
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 732,
    "slug": "trumbeak",
    "speciesKey": "trumbeak",
    "nameJa": "ケララッパ",
    "nameEn": "Trumbeak",
    "imagePath": "pokemon-icons/trumbeak.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 85,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 75,
      "total": 355
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 733,
    "slug": "toucannon",
    "speciesKey": "toucannon",
    "nameJa": "ドデカバシ",
    "nameEn": "Toucannon",
    "imagePath": "pokemon-icons/toucannon.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 120,
      "defense": 75,
      "specialAttack": 75,
      "specialDefense": 75,
      "speed": 60,
      "total": 485
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 734,
    "slug": "yungoos",
    "speciesKey": "yungoos",
    "nameJa": "ヤングース",
    "nameEn": "Yungoos",
    "imagePath": "pokemon-icons/yungoos.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 48,
      "attack": 70,
      "defense": 30,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 45,
      "total": 253
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 735,
    "slug": "gumshoos",
    "speciesKey": "gumshoos",
    "nameJa": "デカグース",
    "nameEn": "Gumshoos",
    "imagePath": "pokemon-icons/gumshoos.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 88,
      "attack": 110,
      "defense": 60,
      "specialAttack": 55,
      "specialDefense": 60,
      "speed": 45,
      "total": 418
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 10121,
    "slug": "gumshoos-totem",
    "speciesKey": "gumshoos",
    "nameJa": "デカグース",
    "nameEn": "Totem Gumshoos",
    "imagePath": "pokemon-icons/gumshoos-totem.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 88,
      "attack": 110,
      "defense": 60,
      "specialAttack": 55,
      "specialDefense": 60,
      "speed": 45,
      "total": 418
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 736,
    "slug": "grubbin",
    "speciesKey": "grubbin",
    "nameJa": "アゴジムシ",
    "nameEn": "Grubbin",
    "imagePath": "pokemon-icons/grubbin.png",
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 47,
      "attack": 62,
      "defense": 45,
      "specialAttack": 55,
      "specialDefense": 45,
      "speed": 46,
      "total": 300
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 737,
    "slug": "charjabug",
    "speciesKey": "charjabug",
    "nameJa": "デンヂムシ",
    "nameEn": "Charjabug",
    "imagePath": "pokemon-icons/charjabug.png",
    "types": [
      "bug",
      "electric"
    ],
    "baseStats": {
      "hp": 57,
      "attack": 82,
      "defense": 95,
      "specialAttack": 55,
      "specialDefense": 75,
      "speed": 36,
      "total": 400
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 738,
    "slug": "vikavolt",
    "speciesKey": "vikavolt",
    "nameJa": "クワガノン",
    "nameEn": "Vikavolt",
    "imagePath": "pokemon-icons/vikavolt.png",
    "types": [
      "bug",
      "electric"
    ],
    "baseStats": {
      "hp": 77,
      "attack": 70,
      "defense": 90,
      "specialAttack": 145,
      "specialDefense": 75,
      "speed": 43,
      "total": 500
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 10122,
    "slug": "vikavolt-totem",
    "speciesKey": "vikavolt",
    "nameJa": "クワガノン",
    "nameEn": "Totem Vikavolt",
    "imagePath": "pokemon-icons/vikavolt-totem.png",
    "types": [
      "bug",
      "electric"
    ],
    "baseStats": {
      "hp": 77,
      "attack": 70,
      "defense": 90,
      "specialAttack": 145,
      "specialDefense": 75,
      "speed": 43,
      "total": 500
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 739,
    "slug": "crabrawler",
    "speciesKey": "crabrawler",
    "nameJa": "マケンカニ",
    "nameEn": "Crabrawler",
    "imagePath": "pokemon-icons/crabrawler.png",
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 47,
      "attack": 82,
      "defense": 57,
      "specialAttack": 42,
      "specialDefense": 47,
      "speed": 63,
      "total": 338
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 740,
    "slug": "crabominable",
    "speciesKey": "crabominable",
    "nameJa": "ケケンカニ",
    "nameEn": "Crabominable",
    "imagePath": "pokemon-icons/crabominable.png",
    "types": [
      "fighting",
      "ice"
    ],
    "baseStats": {
      "hp": 97,
      "attack": 132,
      "defense": 77,
      "specialAttack": 62,
      "specialDefense": 67,
      "speed": 43,
      "total": 478
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 10315,
    "slug": "crabominable-mega",
    "speciesKey": "crabominable",
    "nameJa": "メガケケンカニ",
    "nameEn": "Mega Crabominable",
    "imagePath": "pokemon-icons/crabominable-mega.png",
    "types": [
      "fighting",
      "ice"
    ],
    "baseStats": {
      "hp": 97,
      "attack": 157,
      "defense": 122,
      "specialAttack": 62,
      "specialDefense": 107,
      "speed": 33,
      "total": 578
    },
    "generation": 7,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 741,
    "slug": "oricorio-baile",
    "speciesKey": "oricorio",
    "nameJa": "オドリドリ（めらめらスタイル）",
    "nameEn": "Baile Oricorio",
    "imagePath": "pokemon-icons/oricorio-baile.png",
    "types": [
      "fire",
      "flying"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 70,
      "defense": 70,
      "specialAttack": 98,
      "specialDefense": 70,
      "speed": 93,
      "total": 476
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 10123,
    "slug": "oricorio-pom-pom",
    "speciesKey": "oricorio",
    "nameJa": "オドリドリ（ぱちぱちスタイル）",
    "nameEn": "Pom-pom Oricorio",
    "imagePath": "pokemon-icons/oricorio-pom-pom.png",
    "types": [
      "electric",
      "flying"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 70,
      "defense": 70,
      "specialAttack": 98,
      "specialDefense": 70,
      "speed": 93,
      "total": 476
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 10124,
    "slug": "oricorio-pau",
    "speciesKey": "oricorio",
    "nameJa": "オドリドリ（ふらふらスタイル）",
    "nameEn": "Pa’u Oricorio",
    "imagePath": "pokemon-icons/oricorio-pau.png",
    "types": [
      "psychic",
      "flying"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 70,
      "defense": 70,
      "specialAttack": 98,
      "specialDefense": 70,
      "speed": 93,
      "total": 476
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 10125,
    "slug": "oricorio-sensu",
    "speciesKey": "oricorio",
    "nameJa": "オドリドリ（まいまいスタイル）",
    "nameEn": "Sensu Oricorio",
    "imagePath": "pokemon-icons/oricorio-sensu.png",
    "types": [
      "ghost",
      "flying"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 70,
      "defense": 70,
      "specialAttack": 98,
      "specialDefense": 70,
      "speed": 93,
      "total": 476
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 742,
    "slug": "cutiefly",
    "speciesKey": "cutiefly",
    "nameJa": "アブリー",
    "nameEn": "Cutiefly",
    "imagePath": "pokemon-icons/cutiefly.png",
    "types": [
      "bug",
      "fairy"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 45,
      "defense": 40,
      "specialAttack": 55,
      "specialDefense": 40,
      "speed": 84,
      "total": 304
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 743,
    "slug": "ribombee",
    "speciesKey": "ribombee",
    "nameJa": "アブリボン",
    "nameEn": "Ribombee",
    "imagePath": "pokemon-icons/ribombee.png",
    "types": [
      "bug",
      "fairy"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 55,
      "defense": 60,
      "specialAttack": 95,
      "specialDefense": 70,
      "speed": 124,
      "total": 464
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 10150,
    "slug": "ribombee-totem",
    "speciesKey": "ribombee",
    "nameJa": "アブリボン",
    "nameEn": "Totem Ribombee",
    "imagePath": "pokemon-icons/ribombee-totem.png",
    "types": [
      "bug",
      "fairy"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 55,
      "defense": 60,
      "specialAttack": 95,
      "specialDefense": 70,
      "speed": 124,
      "total": 464
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター ウルトラサン・ウルトラムーン",
    "isDefault": false
  },
  {
    "id": 744,
    "slug": "rockruff",
    "speciesKey": "rockruff",
    "nameJa": "イワンコ",
    "nameEn": "Rockruff",
    "imagePath": "pokemon-icons/rockruff.png",
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 65,
      "defense": 40,
      "specialAttack": 30,
      "specialDefense": 40,
      "speed": 60,
      "total": 280
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 10151,
    "slug": "rockruff-own-tempo",
    "speciesKey": "rockruff",
    "nameJa": "イワンコ（マイペース）",
    "nameEn": "Own Tempo Rockruff",
    "imagePath": "pokemon-icons/rockruff-own-tempo.png",
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 65,
      "defense": 40,
      "specialAttack": 30,
      "specialDefense": 40,
      "speed": 60,
      "total": 280
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター ウルトラサン・ウルトラムーン",
    "isDefault": false
  },
  {
    "id": 745,
    "slug": "lycanroc-midday",
    "speciesKey": "lycanroc",
    "nameJa": "ルガルガン（まひるのすがた）",
    "nameEn": "Midday Lycanroc",
    "imagePath": "pokemon-icons/lycanroc-midday.png",
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 115,
      "defense": 65,
      "specialAttack": 55,
      "specialDefense": 65,
      "speed": 112,
      "total": 487
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 10126,
    "slug": "lycanroc-midnight",
    "speciesKey": "lycanroc",
    "nameJa": "ルガルガン（まよなかのすがた）",
    "nameEn": "Midnight Lycanroc",
    "imagePath": "pokemon-icons/lycanroc-midnight.png",
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 115,
      "defense": 75,
      "specialAttack": 55,
      "specialDefense": 75,
      "speed": 82,
      "total": 487
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 10152,
    "slug": "lycanroc-dusk",
    "speciesKey": "lycanroc",
    "nameJa": "ルガルガン（たそがれのすがた）",
    "nameEn": "Dusk Lycanroc",
    "imagePath": "pokemon-icons/lycanroc-dusk.png",
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 117,
      "defense": 65,
      "specialAttack": 55,
      "specialDefense": 65,
      "speed": 110,
      "total": 487
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター ウルトラサン・ウルトラムーン",
    "isDefault": false
  },
  {
    "id": 746,
    "slug": "wishiwashi-solo",
    "speciesKey": "wishiwashi",
    "nameJa": "ヨワシ（たんどくのすがた）",
    "nameEn": "Solo Wishiwashi",
    "imagePath": "pokemon-icons/wishiwashi-solo.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 20,
      "defense": 20,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 40,
      "total": 175
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 10127,
    "slug": "wishiwashi-school",
    "speciesKey": "wishiwashi",
    "nameJa": "ヨワシ（むれたすがた）",
    "nameEn": "School Wishiwashi",
    "imagePath": "pokemon-icons/wishiwashi-school.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 140,
      "defense": 130,
      "specialAttack": 140,
      "specialDefense": 135,
      "speed": 30,
      "total": 620
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 747,
    "slug": "mareanie",
    "speciesKey": "mareanie",
    "nameJa": "ヒドイデ",
    "nameEn": "Mareanie",
    "imagePath": "pokemon-icons/mareanie.png",
    "types": [
      "poison",
      "water"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 53,
      "defense": 62,
      "specialAttack": 43,
      "specialDefense": 52,
      "speed": 45,
      "total": 305
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 748,
    "slug": "toxapex",
    "speciesKey": "toxapex",
    "nameJa": "ドヒドイデ",
    "nameEn": "Toxapex",
    "imagePath": "pokemon-icons/toxapex.png",
    "types": [
      "poison",
      "water"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 63,
      "defense": 152,
      "specialAttack": 53,
      "specialDefense": 142,
      "speed": 35,
      "total": 495
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 749,
    "slug": "mudbray",
    "speciesKey": "mudbray",
    "nameJa": "ドロバンコ",
    "nameEn": "Mudbray",
    "imagePath": "pokemon-icons/mudbray.png",
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 100,
      "defense": 70,
      "specialAttack": 45,
      "specialDefense": 55,
      "speed": 45,
      "total": 385
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 750,
    "slug": "mudsdale",
    "speciesKey": "mudsdale",
    "nameJa": "バンバドロ",
    "nameEn": "Mudsdale",
    "imagePath": "pokemon-icons/mudsdale.png",
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 125,
      "defense": 100,
      "specialAttack": 55,
      "specialDefense": 85,
      "speed": 35,
      "total": 500
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 751,
    "slug": "dewpider",
    "speciesKey": "dewpider",
    "nameJa": "シズクモ",
    "nameEn": "Dewpider",
    "imagePath": "pokemon-icons/dewpider.png",
    "types": [
      "water",
      "bug"
    ],
    "baseStats": {
      "hp": 38,
      "attack": 40,
      "defense": 52,
      "specialAttack": 40,
      "specialDefense": 72,
      "speed": 27,
      "total": 269
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 752,
    "slug": "araquanid",
    "speciesKey": "araquanid",
    "nameJa": "オニシズクモ",
    "nameEn": "Araquanid",
    "imagePath": "pokemon-icons/araquanid.png",
    "types": [
      "water",
      "bug"
    ],
    "baseStats": {
      "hp": 68,
      "attack": 70,
      "defense": 92,
      "specialAttack": 50,
      "specialDefense": 132,
      "speed": 42,
      "total": 454
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 10153,
    "slug": "araquanid-totem",
    "speciesKey": "araquanid",
    "nameJa": "オニシズクモ",
    "nameEn": "Totem Araquanid",
    "imagePath": "pokemon-icons/araquanid-totem.png",
    "types": [
      "water",
      "bug"
    ],
    "baseStats": {
      "hp": 68,
      "attack": 70,
      "defense": 92,
      "specialAttack": 50,
      "specialDefense": 132,
      "speed": 42,
      "total": 454
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター ウルトラサン・ウルトラムーン",
    "isDefault": false
  },
  {
    "id": 753,
    "slug": "fomantis",
    "speciesKey": "fomantis",
    "nameJa": "カリキリ",
    "nameEn": "Fomantis",
    "imagePath": "pokemon-icons/fomantis.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 55,
      "defense": 35,
      "specialAttack": 50,
      "specialDefense": 35,
      "speed": 35,
      "total": 250
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 754,
    "slug": "lurantis",
    "speciesKey": "lurantis",
    "nameJa": "ラランテス",
    "nameEn": "Lurantis",
    "imagePath": "pokemon-icons/lurantis.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 105,
      "defense": 90,
      "specialAttack": 80,
      "specialDefense": 90,
      "speed": 45,
      "total": 480
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 10128,
    "slug": "lurantis-totem",
    "speciesKey": "lurantis",
    "nameJa": "ラランテス",
    "nameEn": "Totem Lurantis",
    "imagePath": "pokemon-icons/lurantis-totem.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 105,
      "defense": 90,
      "specialAttack": 80,
      "specialDefense": 90,
      "speed": 45,
      "total": 480
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 755,
    "slug": "morelull",
    "speciesKey": "morelull",
    "nameJa": "ネマシュ",
    "nameEn": "Morelull",
    "imagePath": "pokemon-icons/morelull.png",
    "types": [
      "grass",
      "fairy"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 35,
      "defense": 55,
      "specialAttack": 65,
      "specialDefense": 75,
      "speed": 15,
      "total": 285
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 756,
    "slug": "shiinotic",
    "speciesKey": "shiinotic",
    "nameJa": "マシェード",
    "nameEn": "Shiinotic",
    "imagePath": "pokemon-icons/shiinotic.png",
    "types": [
      "grass",
      "fairy"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 45,
      "defense": 80,
      "specialAttack": 90,
      "specialDefense": 100,
      "speed": 30,
      "total": 405
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 757,
    "slug": "salandit",
    "speciesKey": "salandit",
    "nameJa": "ヤトウモリ",
    "nameEn": "Salandit",
    "imagePath": "pokemon-icons/salandit.png",
    "types": [
      "poison",
      "fire"
    ],
    "baseStats": {
      "hp": 48,
      "attack": 44,
      "defense": 40,
      "specialAttack": 71,
      "specialDefense": 40,
      "speed": 77,
      "total": 320
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 758,
    "slug": "salazzle",
    "speciesKey": "salazzle",
    "nameJa": "エンニュート",
    "nameEn": "Salazzle",
    "imagePath": "pokemon-icons/salazzle.png",
    "types": [
      "poison",
      "fire"
    ],
    "baseStats": {
      "hp": 68,
      "attack": 64,
      "defense": 60,
      "specialAttack": 111,
      "specialDefense": 60,
      "speed": 117,
      "total": 480
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 10129,
    "slug": "salazzle-totem",
    "speciesKey": "salazzle",
    "nameJa": "エンニュート",
    "nameEn": "Totem Salazzle",
    "imagePath": "pokemon-icons/salazzle-totem.png",
    "types": [
      "poison",
      "fire"
    ],
    "baseStats": {
      "hp": 68,
      "attack": 64,
      "defense": 60,
      "specialAttack": 111,
      "specialDefense": 60,
      "speed": 117,
      "total": 480
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 759,
    "slug": "stufful",
    "speciesKey": "stufful",
    "nameJa": "ヌイコグマ",
    "nameEn": "Stufful",
    "imagePath": "pokemon-icons/stufful.png",
    "types": [
      "normal",
      "fighting"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 75,
      "defense": 50,
      "specialAttack": 45,
      "specialDefense": 50,
      "speed": 50,
      "total": 340
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 760,
    "slug": "bewear",
    "speciesKey": "bewear",
    "nameJa": "キテルグマ",
    "nameEn": "Bewear",
    "imagePath": "pokemon-icons/bewear.png",
    "types": [
      "normal",
      "fighting"
    ],
    "baseStats": {
      "hp": 120,
      "attack": 125,
      "defense": 80,
      "specialAttack": 55,
      "specialDefense": 60,
      "speed": 60,
      "total": 500
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 761,
    "slug": "bounsweet",
    "speciesKey": "bounsweet",
    "nameJa": "アマカジ",
    "nameEn": "Bounsweet",
    "imagePath": "pokemon-icons/bounsweet.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 42,
      "attack": 30,
      "defense": 38,
      "specialAttack": 30,
      "specialDefense": 38,
      "speed": 32,
      "total": 210
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 762,
    "slug": "steenee",
    "speciesKey": "steenee",
    "nameJa": "アママイコ",
    "nameEn": "Steenee",
    "imagePath": "pokemon-icons/steenee.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 52,
      "attack": 40,
      "defense": 48,
      "specialAttack": 40,
      "specialDefense": 48,
      "speed": 62,
      "total": 290
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 763,
    "slug": "tsareena",
    "speciesKey": "tsareena",
    "nameJa": "アマージョ",
    "nameEn": "Tsareena",
    "imagePath": "pokemon-icons/tsareena.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 72,
      "attack": 120,
      "defense": 98,
      "specialAttack": 50,
      "specialDefense": 98,
      "speed": 72,
      "total": 510
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 764,
    "slug": "comfey",
    "speciesKey": "comfey",
    "nameJa": "キュワワー",
    "nameEn": "Comfey",
    "imagePath": "pokemon-icons/comfey.png",
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 51,
      "attack": 52,
      "defense": 90,
      "specialAttack": 82,
      "specialDefense": 110,
      "speed": 100,
      "total": 485
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 765,
    "slug": "oranguru",
    "speciesKey": "oranguru",
    "nameJa": "ヤレユータン",
    "nameEn": "Oranguru",
    "imagePath": "pokemon-icons/oranguru.png",
    "types": [
      "normal",
      "psychic"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 60,
      "defense": 80,
      "specialAttack": 90,
      "specialDefense": 110,
      "speed": 60,
      "total": 490
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 766,
    "slug": "passimian",
    "speciesKey": "passimian",
    "nameJa": "ナゲツケサル",
    "nameEn": "Passimian",
    "imagePath": "pokemon-icons/passimian.png",
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 120,
      "defense": 90,
      "specialAttack": 40,
      "specialDefense": 60,
      "speed": 80,
      "total": 490
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 767,
    "slug": "wimpod",
    "speciesKey": "wimpod",
    "nameJa": "コソクムシ",
    "nameEn": "Wimpod",
    "imagePath": "pokemon-icons/wimpod.png",
    "types": [
      "bug",
      "water"
    ],
    "baseStats": {
      "hp": 25,
      "attack": 35,
      "defense": 40,
      "specialAttack": 20,
      "specialDefense": 30,
      "speed": 80,
      "total": 230
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 768,
    "slug": "golisopod",
    "speciesKey": "golisopod",
    "nameJa": "グソクムシャ",
    "nameEn": "Golisopod",
    "imagePath": "pokemon-icons/golisopod.png",
    "types": [
      "bug",
      "water"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 125,
      "defense": 140,
      "specialAttack": 60,
      "specialDefense": 90,
      "speed": 40,
      "total": 530
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 10316,
    "slug": "golisopod-mega",
    "speciesKey": "golisopod",
    "nameJa": "メガグソクムシャ",
    "nameEn": "Mega Golisopod",
    "imagePath": "pokemon-icons/golisopod-mega.png",
    "types": [
      "bug",
      "steel"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 150,
      "defense": 175,
      "specialAttack": 70,
      "specialDefense": 120,
      "speed": 40,
      "total": 630
    },
    "generation": 7,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 769,
    "slug": "sandygast",
    "speciesKey": "sandygast",
    "nameJa": "スナバァ",
    "nameEn": "Sandygast",
    "imagePath": "pokemon-icons/sandygast.png",
    "types": [
      "ghost",
      "ground"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 55,
      "defense": 80,
      "specialAttack": 70,
      "specialDefense": 45,
      "speed": 15,
      "total": 320
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 770,
    "slug": "palossand",
    "speciesKey": "palossand",
    "nameJa": "シロデスナ",
    "nameEn": "Palossand",
    "imagePath": "pokemon-icons/palossand.png",
    "types": [
      "ghost",
      "ground"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 75,
      "defense": 110,
      "specialAttack": 100,
      "specialDefense": 75,
      "speed": 35,
      "total": 480
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 771,
    "slug": "pyukumuku",
    "speciesKey": "pyukumuku",
    "nameJa": "ナマコブシ",
    "nameEn": "Pyukumuku",
    "imagePath": "pokemon-icons/pyukumuku.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 60,
      "defense": 130,
      "specialAttack": 30,
      "specialDefense": 130,
      "speed": 5,
      "total": 410
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 772,
    "slug": "type-null",
    "speciesKey": "type-null",
    "nameJa": "タイプ：ヌル",
    "nameEn": "Type: Null",
    "imagePath": "pokemon-icons/type-null.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 95,
      "defense": 95,
      "specialAttack": 95,
      "specialDefense": 95,
      "speed": 59,
      "total": 534
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 773,
    "slug": "silvally",
    "speciesKey": "silvally",
    "nameJa": "シルヴァディ（タイプ：ノーマル）",
    "nameEn": "Silvally (Type: Normal)",
    "imagePath": "pokemon-icons/silvally.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 95,
      "defense": 95,
      "specialAttack": 95,
      "specialDefense": 95,
      "speed": 95,
      "total": 570
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 774,
    "slug": "minior-red-meteor",
    "speciesKey": "minior",
    "nameJa": "メテノ（りゅうせいのすがた）",
    "nameEn": "Red Meteor Minior",
    "imagePath": "pokemon-icons/minior-red-meteor.png",
    "types": [
      "rock",
      "flying"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 60,
      "defense": 100,
      "specialAttack": 60,
      "specialDefense": 100,
      "speed": 60,
      "total": 440
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 10130,
    "slug": "minior-orange-meteor",
    "speciesKey": "minior",
    "nameJa": "メテノ（りゅうせいのすがた）",
    "nameEn": "Orange Meteor Minior",
    "imagePath": "pokemon-icons/minior-orange-meteor.png",
    "types": [
      "rock",
      "flying"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 60,
      "defense": 100,
      "specialAttack": 60,
      "specialDefense": 100,
      "speed": 60,
      "total": 440
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 10131,
    "slug": "minior-yellow-meteor",
    "speciesKey": "minior",
    "nameJa": "メテノ（りゅうせいのすがた）",
    "nameEn": "Yellow Meteor Minior",
    "imagePath": "pokemon-icons/minior-yellow-meteor.png",
    "types": [
      "rock",
      "flying"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 60,
      "defense": 100,
      "specialAttack": 60,
      "specialDefense": 100,
      "speed": 60,
      "total": 440
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 10132,
    "slug": "minior-green-meteor",
    "speciesKey": "minior",
    "nameJa": "メテノ（りゅうせいのすがた）",
    "nameEn": "Green Meteor Minior",
    "imagePath": "pokemon-icons/minior-green-meteor.png",
    "types": [
      "rock",
      "flying"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 60,
      "defense": 100,
      "specialAttack": 60,
      "specialDefense": 100,
      "speed": 60,
      "total": 440
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 10133,
    "slug": "minior-blue-meteor",
    "speciesKey": "minior",
    "nameJa": "メテノ（りゅうせいのすがた）",
    "nameEn": "Blue Meteor Minior",
    "imagePath": "pokemon-icons/minior-blue-meteor.png",
    "types": [
      "rock",
      "flying"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 60,
      "defense": 100,
      "specialAttack": 60,
      "specialDefense": 100,
      "speed": 60,
      "total": 440
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 10134,
    "slug": "minior-indigo-meteor",
    "speciesKey": "minior",
    "nameJa": "メテノ（りゅうせいのすがた）",
    "nameEn": "Indigo Meteor Minior",
    "imagePath": "pokemon-icons/minior-indigo-meteor.png",
    "types": [
      "rock",
      "flying"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 60,
      "defense": 100,
      "specialAttack": 60,
      "specialDefense": 100,
      "speed": 60,
      "total": 440
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 10135,
    "slug": "minior-violet-meteor",
    "speciesKey": "minior",
    "nameJa": "メテノ（りゅうせいのすがた）",
    "nameEn": "Violet Meteor Minior",
    "imagePath": "pokemon-icons/minior-violet-meteor.png",
    "types": [
      "rock",
      "flying"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 60,
      "defense": 100,
      "specialAttack": 60,
      "specialDefense": 100,
      "speed": 60,
      "total": 440
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 10136,
    "slug": "minior-red",
    "speciesKey": "minior",
    "nameJa": "メテノ（あかいろのコア）",
    "nameEn": "Red Core Minior",
    "imagePath": "pokemon-icons/minior-red.png",
    "types": [
      "rock",
      "flying"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 100,
      "defense": 60,
      "specialAttack": 100,
      "specialDefense": 60,
      "speed": 120,
      "total": 500
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 10137,
    "slug": "minior-orange",
    "speciesKey": "minior",
    "nameJa": "メテノ（だいだいいろのコア）",
    "nameEn": "Orange Core Minior",
    "imagePath": "pokemon-icons/minior-orange.png",
    "types": [
      "rock",
      "flying"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 100,
      "defense": 60,
      "specialAttack": 100,
      "specialDefense": 60,
      "speed": 120,
      "total": 500
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 10138,
    "slug": "minior-yellow",
    "speciesKey": "minior",
    "nameJa": "メテノ（きいろのコア）",
    "nameEn": "Yellow Core Minior",
    "imagePath": "pokemon-icons/minior-yellow.png",
    "types": [
      "rock",
      "flying"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 100,
      "defense": 60,
      "specialAttack": 100,
      "specialDefense": 60,
      "speed": 120,
      "total": 500
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 10139,
    "slug": "minior-green",
    "speciesKey": "minior",
    "nameJa": "メテノ（みどりいろのコア）",
    "nameEn": "Green Core Minior",
    "imagePath": "pokemon-icons/minior-green.png",
    "types": [
      "rock",
      "flying"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 100,
      "defense": 60,
      "specialAttack": 100,
      "specialDefense": 60,
      "speed": 120,
      "total": 500
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 10140,
    "slug": "minior-blue",
    "speciesKey": "minior",
    "nameJa": "メテノ（みずいろのコア）",
    "nameEn": "Blue Core Minior",
    "imagePath": "pokemon-icons/minior-blue.png",
    "types": [
      "rock",
      "flying"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 100,
      "defense": 60,
      "specialAttack": 100,
      "specialDefense": 60,
      "speed": 120,
      "total": 500
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 10141,
    "slug": "minior-indigo",
    "speciesKey": "minior",
    "nameJa": "メテノ（あおいろのコア）",
    "nameEn": "Indigo Core Minior",
    "imagePath": "pokemon-icons/minior-indigo.png",
    "types": [
      "rock",
      "flying"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 100,
      "defense": 60,
      "specialAttack": 100,
      "specialDefense": 60,
      "speed": 120,
      "total": 500
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 10142,
    "slug": "minior-violet",
    "speciesKey": "minior",
    "nameJa": "メテノ（むらさきいろのコア）",
    "nameEn": "Violet Core Minior",
    "imagePath": "pokemon-icons/minior-violet.png",
    "types": [
      "rock",
      "flying"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 100,
      "defense": 60,
      "specialAttack": 100,
      "specialDefense": 60,
      "speed": 120,
      "total": 500
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 775,
    "slug": "komala",
    "speciesKey": "komala",
    "nameJa": "ネッコアラ",
    "nameEn": "Komala",
    "imagePath": "pokemon-icons/komala.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 115,
      "defense": 65,
      "specialAttack": 75,
      "specialDefense": 95,
      "speed": 65,
      "total": 480
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 776,
    "slug": "turtonator",
    "speciesKey": "turtonator",
    "nameJa": "バクガメス",
    "nameEn": "Turtonator",
    "imagePath": "pokemon-icons/turtonator.png",
    "types": [
      "fire",
      "dragon"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 78,
      "defense": 135,
      "specialAttack": 91,
      "specialDefense": 85,
      "speed": 36,
      "total": 485
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 777,
    "slug": "togedemaru",
    "speciesKey": "togedemaru",
    "nameJa": "トゲデマル",
    "nameEn": "Togedemaru",
    "imagePath": "pokemon-icons/togedemaru.png",
    "types": [
      "electric",
      "steel"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 98,
      "defense": 63,
      "specialAttack": 40,
      "specialDefense": 73,
      "speed": 96,
      "total": 435
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 10154,
    "slug": "togedemaru-totem",
    "speciesKey": "togedemaru",
    "nameJa": "トゲデマル",
    "nameEn": "Totem Togedemaru",
    "imagePath": "pokemon-icons/togedemaru-totem.png",
    "types": [
      "electric",
      "steel"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 98,
      "defense": 63,
      "specialAttack": 40,
      "specialDefense": 73,
      "speed": 96,
      "total": 435
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター ウルトラサン・ウルトラムーン",
    "isDefault": false
  },
  {
    "id": 778,
    "slug": "mimikyu-disguised",
    "speciesKey": "mimikyu",
    "nameJa": "ミミッキュ（ばけたすがた）",
    "nameEn": "Disguised Mimikyu",
    "imagePath": "pokemon-icons/mimikyu-disguised.png",
    "types": [
      "ghost",
      "fairy"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 90,
      "defense": 80,
      "specialAttack": 50,
      "specialDefense": 105,
      "speed": 96,
      "total": 476
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 10143,
    "slug": "mimikyu-busted",
    "speciesKey": "mimikyu",
    "nameJa": "ミミッキュ（ばれたすがた）",
    "nameEn": "Busted Mimikyu",
    "imagePath": "pokemon-icons/mimikyu-busted.png",
    "types": [
      "ghost",
      "fairy"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 90,
      "defense": 80,
      "specialAttack": 50,
      "specialDefense": 105,
      "speed": 96,
      "total": 476
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 10144,
    "slug": "mimikyu-totem-disguised",
    "speciesKey": "mimikyu",
    "nameJa": "ミミッキュ",
    "nameEn": "Totem Disguised Mimikyu",
    "imagePath": "pokemon-icons/mimikyu-totem-disguised.png",
    "types": [
      "ghost",
      "fairy"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 90,
      "defense": 80,
      "specialAttack": 50,
      "specialDefense": 105,
      "speed": 96,
      "total": 476
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 10145,
    "slug": "mimikyu-totem-busted",
    "speciesKey": "mimikyu",
    "nameJa": "ミミッキュ",
    "nameEn": "Totem Busted Mimikyu",
    "imagePath": "pokemon-icons/mimikyu-totem-busted.png",
    "types": [
      "ghost",
      "fairy"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 90,
      "defense": 80,
      "specialAttack": 50,
      "specialDefense": 105,
      "speed": 96,
      "total": 476
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 779,
    "slug": "bruxish",
    "speciesKey": "bruxish",
    "nameJa": "ハギギシリ",
    "nameEn": "Bruxish",
    "imagePath": "pokemon-icons/bruxish.png",
    "types": [
      "water",
      "psychic"
    ],
    "baseStats": {
      "hp": 68,
      "attack": 105,
      "defense": 70,
      "specialAttack": 70,
      "specialDefense": 70,
      "speed": 92,
      "total": 475
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 780,
    "slug": "drampa",
    "speciesKey": "drampa",
    "nameJa": "ジジーロン",
    "nameEn": "Drampa",
    "imagePath": "pokemon-icons/drampa.png",
    "types": [
      "normal",
      "dragon"
    ],
    "baseStats": {
      "hp": 78,
      "attack": 60,
      "defense": 85,
      "specialAttack": 135,
      "specialDefense": 91,
      "speed": 36,
      "total": 485
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 10302,
    "slug": "drampa-mega",
    "speciesKey": "drampa",
    "nameJa": "メガジジーロン",
    "nameEn": "Mega Drampa",
    "imagePath": "pokemon-icons/drampa-mega.png",
    "types": [
      "normal",
      "dragon"
    ],
    "baseStats": {
      "hp": 78,
      "attack": 85,
      "defense": 110,
      "specialAttack": 160,
      "specialDefense": 116,
      "speed": 36,
      "total": 585
    },
    "generation": 7,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 781,
    "slug": "dhelmise",
    "speciesKey": "dhelmise",
    "nameJa": "ダダリン",
    "nameEn": "Dhelmise",
    "imagePath": "pokemon-icons/dhelmise.png",
    "types": [
      "ghost",
      "grass"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 131,
      "defense": 100,
      "specialAttack": 86,
      "specialDefense": 90,
      "speed": 40,
      "total": 517
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 782,
    "slug": "jangmo-o",
    "speciesKey": "jangmo-o",
    "nameJa": "ジャラコ",
    "nameEn": "Jangmo-o",
    "imagePath": "pokemon-icons/jangmo-o.png",
    "types": [
      "dragon"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 55,
      "defense": 65,
      "specialAttack": 45,
      "specialDefense": 45,
      "speed": 45,
      "total": 300
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 783,
    "slug": "hakamo-o",
    "speciesKey": "hakamo-o",
    "nameJa": "ジャランゴ",
    "nameEn": "Hakamo-o",
    "imagePath": "pokemon-icons/hakamo-o.png",
    "types": [
      "dragon",
      "fighting"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 75,
      "defense": 90,
      "specialAttack": 65,
      "specialDefense": 70,
      "speed": 65,
      "total": 420
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 784,
    "slug": "kommo-o",
    "speciesKey": "kommo-o",
    "nameJa": "ジャラランガ",
    "nameEn": "Kommo-o",
    "imagePath": "pokemon-icons/kommo-o.png",
    "types": [
      "dragon",
      "fighting"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 110,
      "defense": 125,
      "specialAttack": 100,
      "specialDefense": 105,
      "speed": 85,
      "total": 600
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 10146,
    "slug": "kommo-o-totem",
    "speciesKey": "kommo-o",
    "nameJa": "ジャラランガ",
    "nameEn": "Totem Kommo-o",
    "imagePath": "pokemon-icons/kommo-o-totem.png",
    "types": [
      "dragon",
      "fighting"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 110,
      "defense": 125,
      "specialAttack": 100,
      "specialDefense": 105,
      "speed": 85,
      "total": 600
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 785,
    "slug": "tapu-koko",
    "speciesKey": "tapu-koko",
    "nameJa": "カプ・コケコ",
    "nameEn": "Tapu Koko",
    "imagePath": "pokemon-icons/tapu-koko.png",
    "types": [
      "electric",
      "fairy"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 115,
      "defense": 85,
      "specialAttack": 95,
      "specialDefense": 75,
      "speed": 130,
      "total": 570
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 786,
    "slug": "tapu-lele",
    "speciesKey": "tapu-lele",
    "nameJa": "カプ・テテフ",
    "nameEn": "Tapu Lele",
    "imagePath": "pokemon-icons/tapu-lele.png",
    "types": [
      "psychic",
      "fairy"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 85,
      "defense": 75,
      "specialAttack": 130,
      "specialDefense": 115,
      "speed": 95,
      "total": 570
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 787,
    "slug": "tapu-bulu",
    "speciesKey": "tapu-bulu",
    "nameJa": "カプ・ブルル",
    "nameEn": "Tapu Bulu",
    "imagePath": "pokemon-icons/tapu-bulu.png",
    "types": [
      "grass",
      "fairy"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 130,
      "defense": 115,
      "specialAttack": 85,
      "specialDefense": 95,
      "speed": 75,
      "total": 570
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 788,
    "slug": "tapu-fini",
    "speciesKey": "tapu-fini",
    "nameJa": "カプ・レヒレ",
    "nameEn": "Tapu Fini",
    "imagePath": "pokemon-icons/tapu-fini.png",
    "types": [
      "water",
      "fairy"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 75,
      "defense": 115,
      "specialAttack": 95,
      "specialDefense": 130,
      "speed": 85,
      "total": 570
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 789,
    "slug": "cosmog",
    "speciesKey": "cosmog",
    "nameJa": "コスモッグ",
    "nameEn": "Cosmog",
    "imagePath": "pokemon-icons/cosmog.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 43,
      "attack": 29,
      "defense": 31,
      "specialAttack": 29,
      "specialDefense": 31,
      "speed": 37,
      "total": 200
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 790,
    "slug": "cosmoem",
    "speciesKey": "cosmoem",
    "nameJa": "コスモウム",
    "nameEn": "Cosmoem",
    "imagePath": "pokemon-icons/cosmoem.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 43,
      "attack": 29,
      "defense": 131,
      "specialAttack": 29,
      "specialDefense": 131,
      "speed": 37,
      "total": 400
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 791,
    "slug": "solgaleo",
    "speciesKey": "solgaleo",
    "nameJa": "ソルガレオ",
    "nameEn": "Solgaleo",
    "imagePath": "pokemon-icons/solgaleo.png",
    "types": [
      "psychic",
      "steel"
    ],
    "baseStats": {
      "hp": 137,
      "attack": 137,
      "defense": 107,
      "specialAttack": 113,
      "specialDefense": 89,
      "speed": 97,
      "total": 680
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 792,
    "slug": "lunala",
    "speciesKey": "lunala",
    "nameJa": "ルナアーラ",
    "nameEn": "Lunala",
    "imagePath": "pokemon-icons/lunala.png",
    "types": [
      "psychic",
      "ghost"
    ],
    "baseStats": {
      "hp": 137,
      "attack": 113,
      "defense": 89,
      "specialAttack": 137,
      "specialDefense": 107,
      "speed": 97,
      "total": 680
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 793,
    "slug": "nihilego",
    "speciesKey": "nihilego",
    "nameJa": "ウツロイド",
    "nameEn": "Nihilego",
    "imagePath": "pokemon-icons/nihilego.png",
    "types": [
      "rock",
      "poison"
    ],
    "baseStats": {
      "hp": 109,
      "attack": 53,
      "defense": 47,
      "specialAttack": 127,
      "specialDefense": 131,
      "speed": 103,
      "total": 570
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 794,
    "slug": "buzzwole",
    "speciesKey": "buzzwole",
    "nameJa": "マッシブーン",
    "nameEn": "Buzzwole",
    "imagePath": "pokemon-icons/buzzwole.png",
    "types": [
      "bug",
      "fighting"
    ],
    "baseStats": {
      "hp": 107,
      "attack": 139,
      "defense": 139,
      "specialAttack": 53,
      "specialDefense": 53,
      "speed": 79,
      "total": 570
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 795,
    "slug": "pheromosa",
    "speciesKey": "pheromosa",
    "nameJa": "フェローチェ",
    "nameEn": "Pheromosa",
    "imagePath": "pokemon-icons/pheromosa.png",
    "types": [
      "bug",
      "fighting"
    ],
    "baseStats": {
      "hp": 71,
      "attack": 137,
      "defense": 37,
      "specialAttack": 137,
      "specialDefense": 37,
      "speed": 151,
      "total": 570
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 796,
    "slug": "xurkitree",
    "speciesKey": "xurkitree",
    "nameJa": "デンジュモク",
    "nameEn": "Xurkitree",
    "imagePath": "pokemon-icons/xurkitree.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 83,
      "attack": 89,
      "defense": 71,
      "specialAttack": 173,
      "specialDefense": 71,
      "speed": 83,
      "total": 570
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 797,
    "slug": "celesteela",
    "speciesKey": "celesteela",
    "nameJa": "テッカグヤ",
    "nameEn": "Celesteela",
    "imagePath": "pokemon-icons/celesteela.png",
    "types": [
      "steel",
      "flying"
    ],
    "baseStats": {
      "hp": 97,
      "attack": 101,
      "defense": 103,
      "specialAttack": 107,
      "specialDefense": 101,
      "speed": 61,
      "total": 570
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 798,
    "slug": "kartana",
    "speciesKey": "kartana",
    "nameJa": "カミツルギ",
    "nameEn": "Kartana",
    "imagePath": "pokemon-icons/kartana.png",
    "types": [
      "grass",
      "steel"
    ],
    "baseStats": {
      "hp": 59,
      "attack": 181,
      "defense": 131,
      "specialAttack": 59,
      "specialDefense": 31,
      "speed": 109,
      "total": 570
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 799,
    "slug": "guzzlord",
    "speciesKey": "guzzlord",
    "nameJa": "アクジキング",
    "nameEn": "Guzzlord",
    "imagePath": "pokemon-icons/guzzlord.png",
    "types": [
      "dark",
      "dragon"
    ],
    "baseStats": {
      "hp": 223,
      "attack": 101,
      "defense": 53,
      "specialAttack": 97,
      "specialDefense": 53,
      "speed": 43,
      "total": 570
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 800,
    "slug": "necrozma",
    "speciesKey": "necrozma",
    "nameJa": "ネクロズマ",
    "nameEn": "Necrozma",
    "imagePath": "pokemon-icons/necrozma.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 97,
      "attack": 107,
      "defense": 101,
      "specialAttack": 127,
      "specialDefense": 89,
      "speed": 79,
      "total": 600
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 10155,
    "slug": "necrozma-dusk",
    "speciesKey": "necrozma",
    "nameJa": "ネクロズマ（たそがれのたてがみ）",
    "nameEn": "Dusk Necrozma",
    "imagePath": "pokemon-icons/necrozma-dusk.png",
    "types": [
      "psychic",
      "steel"
    ],
    "baseStats": {
      "hp": 97,
      "attack": 157,
      "defense": 127,
      "specialAttack": 113,
      "specialDefense": 109,
      "speed": 77,
      "total": 680
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター ウルトラサン・ウルトラムーン",
    "isDefault": false
  },
  {
    "id": 10156,
    "slug": "necrozma-dawn",
    "speciesKey": "necrozma",
    "nameJa": "ネクロズマ（あかつきのつばさ）",
    "nameEn": "Dawn Necrozma",
    "imagePath": "pokemon-icons/necrozma-dawn.png",
    "types": [
      "psychic",
      "ghost"
    ],
    "baseStats": {
      "hp": 97,
      "attack": 113,
      "defense": 109,
      "specialAttack": 157,
      "specialDefense": 127,
      "speed": 77,
      "total": 680
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター ウルトラサン・ウルトラムーン",
    "isDefault": false
  },
  {
    "id": 10157,
    "slug": "necrozma-ultra",
    "speciesKey": "necrozma",
    "nameJa": "ウルトラネクロズマ",
    "nameEn": "Ultra Necrozma",
    "imagePath": "pokemon-icons/necrozma-ultra.png",
    "types": [
      "psychic",
      "dragon"
    ],
    "baseStats": {
      "hp": 97,
      "attack": 167,
      "defense": 97,
      "specialAttack": 167,
      "specialDefense": 97,
      "speed": 129,
      "total": 754
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター ウルトラサン・ウルトラムーン",
    "isDefault": false
  },
  {
    "id": 801,
    "slug": "magearna",
    "speciesKey": "magearna",
    "nameJa": "マギアナ",
    "nameEn": "Magearna",
    "imagePath": "pokemon-icons/magearna.png",
    "types": [
      "steel",
      "fairy"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 95,
      "defense": 115,
      "specialAttack": 130,
      "specialDefense": 115,
      "speed": 65,
      "total": 600
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 10147,
    "slug": "magearna-original",
    "speciesKey": "magearna",
    "nameJa": "マギアナ（５００ねんまえのいろ）",
    "nameEn": "Original Magearna",
    "imagePath": "pokemon-icons/magearna-original.png",
    "types": [
      "steel",
      "fairy"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 95,
      "defense": 115,
      "specialAttack": 130,
      "specialDefense": 115,
      "speed": 65,
      "total": 600
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": false
  },
  {
    "id": 10317,
    "slug": "magearna-mega",
    "speciesKey": "magearna",
    "nameJa": "メガマギアナ",
    "nameEn": "Mega Magearna",
    "imagePath": "pokemon-icons/magearna-mega.png",
    "types": [
      "steel",
      "fairy"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 125,
      "defense": 115,
      "specialAttack": 170,
      "specialDefense": 115,
      "speed": 95,
      "total": 700
    },
    "generation": 7,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 10318,
    "slug": "magearna-original-mega",
    "speciesKey": "magearna",
    "nameJa": "メガマギアナ",
    "nameEn": "Mega Original Magearna",
    "imagePath": "pokemon-icons/magearna-original-mega.png",
    "types": [
      "steel",
      "fairy"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 125,
      "defense": 115,
      "specialAttack": 170,
      "specialDefense": 115,
      "speed": 95,
      "total": 700
    },
    "generation": 7,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 802,
    "slug": "marshadow",
    "speciesKey": "marshadow",
    "nameJa": "マーシャドー",
    "nameEn": "Marshadow",
    "imagePath": "pokemon-icons/marshadow.png",
    "types": [
      "fighting",
      "ghost"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 125,
      "defense": 80,
      "specialAttack": 90,
      "specialDefense": 90,
      "speed": 125,
      "total": 600
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 803,
    "slug": "poipole",
    "speciesKey": "poipole",
    "nameJa": "ベベノム",
    "nameEn": "Poipole",
    "imagePath": "pokemon-icons/poipole.png",
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 67,
      "attack": 73,
      "defense": 67,
      "specialAttack": 73,
      "specialDefense": 67,
      "speed": 73,
      "total": 420
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 804,
    "slug": "naganadel",
    "speciesKey": "naganadel",
    "nameJa": "アーゴヨン",
    "nameEn": "Naganadel",
    "imagePath": "pokemon-icons/naganadel.png",
    "types": [
      "poison",
      "dragon"
    ],
    "baseStats": {
      "hp": 73,
      "attack": 73,
      "defense": 73,
      "specialAttack": 127,
      "specialDefense": 73,
      "speed": 121,
      "total": 540
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 805,
    "slug": "stakataka",
    "speciesKey": "stakataka",
    "nameJa": "ツンデツンデ",
    "nameEn": "Stakataka",
    "imagePath": "pokemon-icons/stakataka.png",
    "types": [
      "rock",
      "steel"
    ],
    "baseStats": {
      "hp": 61,
      "attack": 131,
      "defense": 211,
      "specialAttack": 53,
      "specialDefense": 101,
      "speed": 13,
      "total": 570
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 806,
    "slug": "blacephalon",
    "speciesKey": "blacephalon",
    "nameJa": "ズガドーン",
    "nameEn": "Blacephalon",
    "imagePath": "pokemon-icons/blacephalon.png",
    "types": [
      "fire",
      "ghost"
    ],
    "baseStats": {
      "hp": 53,
      "attack": 127,
      "defense": 53,
      "specialAttack": 151,
      "specialDefense": 79,
      "speed": 107,
      "total": 570
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 807,
    "slug": "zeraora",
    "speciesKey": "zeraora",
    "nameJa": "ゼラオラ",
    "nameEn": "Zeraora",
    "imagePath": "pokemon-icons/zeraora.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 88,
      "attack": 112,
      "defense": 75,
      "specialAttack": 102,
      "specialDefense": 80,
      "speed": 143,
      "total": 600
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 10319,
    "slug": "zeraora-mega",
    "speciesKey": "zeraora",
    "nameJa": "メガゼラオラ",
    "nameEn": "Mega Zeraora",
    "imagePath": "pokemon-icons/zeraora-mega.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 88,
      "attack": 157,
      "defense": 75,
      "specialAttack": 147,
      "specialDefense": 80,
      "speed": 153,
      "total": 700
    },
    "generation": 7,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 808,
    "slug": "meltan",
    "speciesKey": "meltan",
    "nameJa": "メルタン",
    "nameEn": "Meltan",
    "imagePath": "pokemon-icons/meltan.png",
    "types": [
      "steel"
    ],
    "baseStats": {
      "hp": 46,
      "attack": 65,
      "defense": 65,
      "specialAttack": 55,
      "specialDefense": 35,
      "speed": 34,
      "total": 300
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 809,
    "slug": "melmetal",
    "speciesKey": "melmetal",
    "nameJa": "メルメタル",
    "nameEn": "Melmetal",
    "imagePath": "pokemon-icons/melmetal.png",
    "types": [
      "steel"
    ],
    "baseStats": {
      "hp": 135,
      "attack": 143,
      "defense": 143,
      "specialAttack": 80,
      "specialDefense": 65,
      "speed": 34,
      "total": 600
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター サン・ムーン",
    "isDefault": true
  },
  {
    "id": 10208,
    "slug": "melmetal-gmax",
    "speciesKey": "melmetal",
    "nameJa": "メルメタル（キョダイマックスのすがた）",
    "nameEn": "Gigantamax Melmetal",
    "imagePath": "pokemon-icons/melmetal-gmax.png",
    "types": [
      "steel"
    ],
    "baseStats": {
      "hp": 135,
      "attack": 143,
      "defense": 143,
      "specialAttack": 80,
      "specialDefense": 65,
      "speed": 34,
      "total": 600
    },
    "generation": 7,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 810,
    "slug": "grookey",
    "speciesKey": "grookey",
    "nameJa": "サルノリ",
    "nameEn": "Grookey",
    "imagePath": "pokemon-icons/grookey.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 65,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 65,
      "total": 310
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 811,
    "slug": "thwackey",
    "speciesKey": "thwackey",
    "nameJa": "バチンキー",
    "nameEn": "Thwackey",
    "imagePath": "pokemon-icons/thwackey.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 85,
      "defense": 70,
      "specialAttack": 55,
      "specialDefense": 60,
      "speed": 80,
      "total": 420
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 812,
    "slug": "rillaboom",
    "speciesKey": "rillaboom",
    "nameJa": "ゴリランダー",
    "nameEn": "Rillaboom",
    "imagePath": "pokemon-icons/rillaboom.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 125,
      "defense": 90,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 85,
      "total": 530
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 10209,
    "slug": "rillaboom-gmax",
    "speciesKey": "rillaboom",
    "nameJa": "ゴリランダー（キョダイマックスのすがた）",
    "nameEn": "Gigantamax Rillaboom",
    "imagePath": "pokemon-icons/rillaboom-gmax.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 125,
      "defense": 90,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 85,
      "total": 530
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 813,
    "slug": "scorbunny",
    "speciesKey": "scorbunny",
    "nameJa": "ヒバニー",
    "nameEn": "Scorbunny",
    "imagePath": "pokemon-icons/scorbunny.png",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 71,
      "defense": 40,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 69,
      "total": 310
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 814,
    "slug": "raboot",
    "speciesKey": "raboot",
    "nameJa": "ラビフット",
    "nameEn": "Raboot",
    "imagePath": "pokemon-icons/raboot.png",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 86,
      "defense": 60,
      "specialAttack": 55,
      "specialDefense": 60,
      "speed": 94,
      "total": 420
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 815,
    "slug": "cinderace",
    "speciesKey": "cinderace",
    "nameJa": "エースバーン",
    "nameEn": "Cinderace",
    "imagePath": "pokemon-icons/cinderace.png",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 116,
      "defense": 75,
      "specialAttack": 65,
      "specialDefense": 75,
      "speed": 119,
      "total": 530
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 10210,
    "slug": "cinderace-gmax",
    "speciesKey": "cinderace",
    "nameJa": "エースバーン（キョダイマックスのすがた）",
    "nameEn": "Gigantamax Cinderace",
    "imagePath": "pokemon-icons/cinderace-gmax.png",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 116,
      "defense": 75,
      "specialAttack": 65,
      "specialDefense": 75,
      "speed": 119,
      "total": 530
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 816,
    "slug": "sobble",
    "speciesKey": "sobble",
    "nameJa": "メッソン",
    "nameEn": "Sobble",
    "imagePath": "pokemon-icons/sobble.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 40,
      "defense": 40,
      "specialAttack": 70,
      "specialDefense": 40,
      "speed": 70,
      "total": 310
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 817,
    "slug": "drizzile",
    "speciesKey": "drizzile",
    "nameJa": "ジメレオン",
    "nameEn": "Drizzile",
    "imagePath": "pokemon-icons/drizzile.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 60,
      "defense": 55,
      "specialAttack": 95,
      "specialDefense": 55,
      "speed": 90,
      "total": 420
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 818,
    "slug": "inteleon",
    "speciesKey": "inteleon",
    "nameJa": "インテレオン",
    "nameEn": "Inteleon",
    "imagePath": "pokemon-icons/inteleon.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 85,
      "defense": 65,
      "specialAttack": 125,
      "specialDefense": 65,
      "speed": 120,
      "total": 530
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 10211,
    "slug": "inteleon-gmax",
    "speciesKey": "inteleon",
    "nameJa": "インテレオン（キョダイマックスのすがた）",
    "nameEn": "Gigantamax Inteleon",
    "imagePath": "pokemon-icons/inteleon-gmax.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 85,
      "defense": 65,
      "specialAttack": 125,
      "specialDefense": 65,
      "speed": 120,
      "total": 530
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 819,
    "slug": "skwovet",
    "speciesKey": "skwovet",
    "nameJa": "ホシガリス",
    "nameEn": "Skwovet",
    "imagePath": "pokemon-icons/skwovet.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 55,
      "defense": 55,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 25,
      "total": 275
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 820,
    "slug": "greedent",
    "speciesKey": "greedent",
    "nameJa": "ヨクバリス",
    "nameEn": "Greedent",
    "imagePath": "pokemon-icons/greedent.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 120,
      "attack": 95,
      "defense": 95,
      "specialAttack": 55,
      "specialDefense": 75,
      "speed": 20,
      "total": 460
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 821,
    "slug": "rookidee",
    "speciesKey": "rookidee",
    "nameJa": "ココガラ",
    "nameEn": "Rookidee",
    "imagePath": "pokemon-icons/rookidee.png",
    "types": [
      "flying"
    ],
    "baseStats": {
      "hp": 38,
      "attack": 47,
      "defense": 35,
      "specialAttack": 33,
      "specialDefense": 35,
      "speed": 57,
      "total": 245
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 822,
    "slug": "corvisquire",
    "speciesKey": "corvisquire",
    "nameJa": "アオガラス",
    "nameEn": "Corvisquire",
    "imagePath": "pokemon-icons/corvisquire.png",
    "types": [
      "flying"
    ],
    "baseStats": {
      "hp": 68,
      "attack": 67,
      "defense": 55,
      "specialAttack": 43,
      "specialDefense": 55,
      "speed": 77,
      "total": 365
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 823,
    "slug": "corviknight",
    "speciesKey": "corviknight",
    "nameJa": "アーマーガア",
    "nameEn": "Corviknight",
    "imagePath": "pokemon-icons/corviknight.png",
    "types": [
      "flying",
      "steel"
    ],
    "baseStats": {
      "hp": 98,
      "attack": 87,
      "defense": 105,
      "specialAttack": 53,
      "specialDefense": 85,
      "speed": 67,
      "total": 495
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 10212,
    "slug": "corviknight-gmax",
    "speciesKey": "corviknight",
    "nameJa": "アーマーガア（キョダイマックスのすがた）",
    "nameEn": "Gigantamax Corviknight",
    "imagePath": "pokemon-icons/corviknight-gmax.png",
    "types": [
      "flying",
      "steel"
    ],
    "baseStats": {
      "hp": 98,
      "attack": 87,
      "defense": 105,
      "specialAttack": 53,
      "specialDefense": 85,
      "speed": 67,
      "total": 495
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 824,
    "slug": "blipbug",
    "speciesKey": "blipbug",
    "nameJa": "サッチムシ",
    "nameEn": "Blipbug",
    "imagePath": "pokemon-icons/blipbug.png",
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 25,
      "attack": 20,
      "defense": 20,
      "specialAttack": 25,
      "specialDefense": 45,
      "speed": 45,
      "total": 180
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 825,
    "slug": "dottler",
    "speciesKey": "dottler",
    "nameJa": "レドームシ",
    "nameEn": "Dottler",
    "imagePath": "pokemon-icons/dottler.png",
    "types": [
      "bug",
      "psychic"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 35,
      "defense": 80,
      "specialAttack": 50,
      "specialDefense": 90,
      "speed": 30,
      "total": 335
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 826,
    "slug": "orbeetle",
    "speciesKey": "orbeetle",
    "nameJa": "イオルブ",
    "nameEn": "Orbeetle",
    "imagePath": "pokemon-icons/orbeetle.png",
    "types": [
      "bug",
      "psychic"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 45,
      "defense": 110,
      "specialAttack": 80,
      "specialDefense": 120,
      "speed": 90,
      "total": 505
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 10213,
    "slug": "orbeetle-gmax",
    "speciesKey": "orbeetle",
    "nameJa": "イオルブ（キョダイマックスのすがた）",
    "nameEn": "Gigantamax Orbeetle",
    "imagePath": "pokemon-icons/orbeetle-gmax.png",
    "types": [
      "bug",
      "psychic"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 45,
      "defense": 110,
      "specialAttack": 80,
      "specialDefense": 120,
      "speed": 90,
      "total": 505
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 827,
    "slug": "nickit",
    "speciesKey": "nickit",
    "nameJa": "クスネ",
    "nameEn": "Nickit",
    "imagePath": "pokemon-icons/nickit.png",
    "types": [
      "dark"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 28,
      "defense": 28,
      "specialAttack": 47,
      "specialDefense": 52,
      "speed": 50,
      "total": 245
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 828,
    "slug": "thievul",
    "speciesKey": "thievul",
    "nameJa": "フォクスライ",
    "nameEn": "Thievul",
    "imagePath": "pokemon-icons/thievul.png",
    "types": [
      "dark"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 58,
      "defense": 58,
      "specialAttack": 87,
      "specialDefense": 92,
      "speed": 90,
      "total": 455
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 829,
    "slug": "gossifleur",
    "speciesKey": "gossifleur",
    "nameJa": "ヒメンカ",
    "nameEn": "Gossifleur",
    "imagePath": "pokemon-icons/gossifleur.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 40,
      "defense": 60,
      "specialAttack": 40,
      "specialDefense": 60,
      "speed": 10,
      "total": 250
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 830,
    "slug": "eldegoss",
    "speciesKey": "eldegoss",
    "nameJa": "ワタシラガ",
    "nameEn": "Eldegoss",
    "imagePath": "pokemon-icons/eldegoss.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 50,
      "defense": 90,
      "specialAttack": 80,
      "specialDefense": 120,
      "speed": 60,
      "total": 460
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 831,
    "slug": "wooloo",
    "speciesKey": "wooloo",
    "nameJa": "ウールー",
    "nameEn": "Wooloo",
    "imagePath": "pokemon-icons/wooloo.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 42,
      "attack": 40,
      "defense": 55,
      "specialAttack": 40,
      "specialDefense": 45,
      "speed": 48,
      "total": 270
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 832,
    "slug": "dubwool",
    "speciesKey": "dubwool",
    "nameJa": "バイウールー",
    "nameEn": "Dubwool",
    "imagePath": "pokemon-icons/dubwool.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 72,
      "attack": 80,
      "defense": 100,
      "specialAttack": 60,
      "specialDefense": 90,
      "speed": 88,
      "total": 490
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 833,
    "slug": "chewtle",
    "speciesKey": "chewtle",
    "nameJa": "カムカメ",
    "nameEn": "Chewtle",
    "imagePath": "pokemon-icons/chewtle.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 64,
      "defense": 50,
      "specialAttack": 38,
      "specialDefense": 38,
      "speed": 44,
      "total": 284
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 834,
    "slug": "drednaw",
    "speciesKey": "drednaw",
    "nameJa": "カジリガメ",
    "nameEn": "Drednaw",
    "imagePath": "pokemon-icons/drednaw.png",
    "types": [
      "water",
      "rock"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 115,
      "defense": 90,
      "specialAttack": 48,
      "specialDefense": 68,
      "speed": 74,
      "total": 485
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 10214,
    "slug": "drednaw-gmax",
    "speciesKey": "drednaw",
    "nameJa": "カジリガメ（キョダイマックスのすがた）",
    "nameEn": "Gigantamax Drednaw",
    "imagePath": "pokemon-icons/drednaw-gmax.png",
    "types": [
      "water",
      "rock"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 115,
      "defense": 90,
      "specialAttack": 48,
      "specialDefense": 68,
      "speed": 74,
      "total": 485
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 835,
    "slug": "yamper",
    "speciesKey": "yamper",
    "nameJa": "ワンパチ",
    "nameEn": "Yamper",
    "imagePath": "pokemon-icons/yamper.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 59,
      "attack": 45,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 26,
      "total": 270
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 836,
    "slug": "boltund",
    "speciesKey": "boltund",
    "nameJa": "パルスワン",
    "nameEn": "Boltund",
    "imagePath": "pokemon-icons/boltund.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 69,
      "attack": 90,
      "defense": 60,
      "specialAttack": 90,
      "specialDefense": 60,
      "speed": 121,
      "total": 490
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 837,
    "slug": "rolycoly",
    "speciesKey": "rolycoly",
    "nameJa": "タンドン",
    "nameEn": "Rolycoly",
    "imagePath": "pokemon-icons/rolycoly.png",
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 30,
      "attack": 40,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 30,
      "total": 240
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 838,
    "slug": "carkol",
    "speciesKey": "carkol",
    "nameJa": "トロッゴン",
    "nameEn": "Carkol",
    "imagePath": "pokemon-icons/carkol.png",
    "types": [
      "rock",
      "fire"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 60,
      "defense": 90,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 50,
      "total": 410
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 839,
    "slug": "coalossal",
    "speciesKey": "coalossal",
    "nameJa": "セキタンザン",
    "nameEn": "Coalossal",
    "imagePath": "pokemon-icons/coalossal.png",
    "types": [
      "rock",
      "fire"
    ],
    "baseStats": {
      "hp": 110,
      "attack": 80,
      "defense": 120,
      "specialAttack": 80,
      "specialDefense": 90,
      "speed": 30,
      "total": 510
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 10215,
    "slug": "coalossal-gmax",
    "speciesKey": "coalossal",
    "nameJa": "セキタンザン（キョダイマックスのすがた）",
    "nameEn": "Gigantamax Coalossal",
    "imagePath": "pokemon-icons/coalossal-gmax.png",
    "types": [
      "rock",
      "fire"
    ],
    "baseStats": {
      "hp": 110,
      "attack": 80,
      "defense": 120,
      "specialAttack": 80,
      "specialDefense": 90,
      "speed": 30,
      "total": 510
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 840,
    "slug": "applin",
    "speciesKey": "applin",
    "nameJa": "カジッチュ",
    "nameEn": "Applin",
    "imagePath": "pokemon-icons/applin.png",
    "types": [
      "grass",
      "dragon"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 40,
      "defense": 80,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 20,
      "total": 260
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 841,
    "slug": "flapple",
    "speciesKey": "flapple",
    "nameJa": "アップリュー",
    "nameEn": "Flapple",
    "imagePath": "pokemon-icons/flapple.png",
    "types": [
      "grass",
      "dragon"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 110,
      "defense": 80,
      "specialAttack": 95,
      "specialDefense": 60,
      "speed": 70,
      "total": 485
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 10216,
    "slug": "flapple-gmax",
    "speciesKey": "flapple",
    "nameJa": "アップリュー（キョダイマックスのすがた）",
    "nameEn": "Gigantamax Flapple",
    "imagePath": "pokemon-icons/flapple-gmax.png",
    "types": [
      "grass",
      "dragon"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 110,
      "defense": 80,
      "specialAttack": 95,
      "specialDefense": 60,
      "speed": 70,
      "total": 485
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 842,
    "slug": "appletun",
    "speciesKey": "appletun",
    "nameJa": "タルップル",
    "nameEn": "Appletun",
    "imagePath": "pokemon-icons/appletun.png",
    "types": [
      "grass",
      "dragon"
    ],
    "baseStats": {
      "hp": 110,
      "attack": 85,
      "defense": 80,
      "specialAttack": 100,
      "specialDefense": 80,
      "speed": 30,
      "total": 485
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 10217,
    "slug": "appletun-gmax",
    "speciesKey": "appletun",
    "nameJa": "タルップル（キョダイマックスのすがた）",
    "nameEn": "Gigantamax Appletun",
    "imagePath": "pokemon-icons/appletun-gmax.png",
    "types": [
      "grass",
      "dragon"
    ],
    "baseStats": {
      "hp": 110,
      "attack": 85,
      "defense": 80,
      "specialAttack": 100,
      "specialDefense": 80,
      "speed": 30,
      "total": 485
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 843,
    "slug": "silicobra",
    "speciesKey": "silicobra",
    "nameJa": "スナヘビ",
    "nameEn": "Silicobra",
    "imagePath": "pokemon-icons/silicobra.png",
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 52,
      "attack": 57,
      "defense": 75,
      "specialAttack": 35,
      "specialDefense": 50,
      "speed": 46,
      "total": 315
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 844,
    "slug": "sandaconda",
    "speciesKey": "sandaconda",
    "nameJa": "サダイジャ",
    "nameEn": "Sandaconda",
    "imagePath": "pokemon-icons/sandaconda.png",
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 72,
      "attack": 107,
      "defense": 125,
      "specialAttack": 65,
      "specialDefense": 70,
      "speed": 71,
      "total": 510
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 10218,
    "slug": "sandaconda-gmax",
    "speciesKey": "sandaconda",
    "nameJa": "サダイジャ（キョダイマックスのすがた）",
    "nameEn": "Gigantamax Sandaconda",
    "imagePath": "pokemon-icons/sandaconda-gmax.png",
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 72,
      "attack": 107,
      "defense": 125,
      "specialAttack": 65,
      "specialDefense": 70,
      "speed": 71,
      "total": 510
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 845,
    "slug": "cramorant",
    "speciesKey": "cramorant",
    "nameJa": "ウッウ",
    "nameEn": "Cramorant",
    "imagePath": "pokemon-icons/cramorant.png",
    "types": [
      "flying",
      "water"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 85,
      "defense": 55,
      "specialAttack": 85,
      "specialDefense": 95,
      "speed": 85,
      "total": 475
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 10182,
    "slug": "cramorant-gulping",
    "speciesKey": "cramorant",
    "nameJa": "ウッウ（うのみのすがた）",
    "nameEn": "Gulping Cramorant",
    "imagePath": "pokemon-icons/cramorant-gulping.png",
    "types": [
      "flying",
      "water"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 85,
      "defense": 55,
      "specialAttack": 85,
      "specialDefense": 95,
      "speed": 85,
      "total": 475
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 10183,
    "slug": "cramorant-gorging",
    "speciesKey": "cramorant",
    "nameJa": "ウッウ（まるのみのすがた）",
    "nameEn": "Gorging Cramorant",
    "imagePath": "pokemon-icons/cramorant-gorging.png",
    "types": [
      "flying",
      "water"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 85,
      "defense": 55,
      "specialAttack": 85,
      "specialDefense": 95,
      "speed": 85,
      "total": 475
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 846,
    "slug": "arrokuda",
    "speciesKey": "arrokuda",
    "nameJa": "サシカマス",
    "nameEn": "Arrokuda",
    "imagePath": "pokemon-icons/arrokuda.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 41,
      "attack": 63,
      "defense": 40,
      "specialAttack": 40,
      "specialDefense": 30,
      "speed": 66,
      "total": 280
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 847,
    "slug": "barraskewda",
    "speciesKey": "barraskewda",
    "nameJa": "カマスジョー",
    "nameEn": "Barraskewda",
    "imagePath": "pokemon-icons/barraskewda.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 61,
      "attack": 123,
      "defense": 60,
      "specialAttack": 60,
      "specialDefense": 50,
      "speed": 136,
      "total": 490
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 848,
    "slug": "toxel",
    "speciesKey": "toxel",
    "nameJa": "エレズン",
    "nameEn": "Toxel",
    "imagePath": "pokemon-icons/toxel.png",
    "types": [
      "electric",
      "poison"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 38,
      "defense": 35,
      "specialAttack": 54,
      "specialDefense": 35,
      "speed": 40,
      "total": 242
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 849,
    "slug": "toxtricity-amped",
    "speciesKey": "toxtricity",
    "nameJa": "ストリンダー（ハイなすがた）",
    "nameEn": "Amped Toxtricity",
    "imagePath": "pokemon-icons/toxtricity-amped.png",
    "types": [
      "electric",
      "poison"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 98,
      "defense": 70,
      "specialAttack": 114,
      "specialDefense": 70,
      "speed": 75,
      "total": 502
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 10184,
    "slug": "toxtricity-low-key",
    "speciesKey": "toxtricity",
    "nameJa": "ストリンダー（ローなすがた）",
    "nameEn": "Low Key Toxtricity",
    "imagePath": "pokemon-icons/toxtricity-low-key.png",
    "types": [
      "electric",
      "poison"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 98,
      "defense": 70,
      "specialAttack": 114,
      "specialDefense": 70,
      "speed": 75,
      "total": 502
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 10219,
    "slug": "toxtricity-amped-gmax",
    "speciesKey": "toxtricity",
    "nameJa": "ストリンダー（ハイなすがた・キョダイマックスのすがた）",
    "nameEn": "Gigantamax Amped Toxtricity",
    "imagePath": "pokemon-icons/toxtricity-amped-gmax.png",
    "types": [
      "electric",
      "poison"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 98,
      "defense": 70,
      "specialAttack": 114,
      "specialDefense": 70,
      "speed": 75,
      "total": 502
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 10228,
    "slug": "toxtricity-low-key-gmax",
    "speciesKey": "toxtricity",
    "nameJa": "ストリンダー（ローなすがた・キョダイマックスのすがた）",
    "nameEn": "Gigantamax Low Key Toxtricity",
    "imagePath": "pokemon-icons/toxtricity-low-key-gmax.png",
    "types": [
      "electric",
      "poison"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 98,
      "defense": 70,
      "specialAttack": 114,
      "specialDefense": 70,
      "speed": 75,
      "total": 502
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 850,
    "slug": "sizzlipede",
    "speciesKey": "sizzlipede",
    "nameJa": "ヤクデ",
    "nameEn": "Sizzlipede",
    "imagePath": "pokemon-icons/sizzlipede.png",
    "types": [
      "fire",
      "bug"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 65,
      "defense": 45,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 45,
      "total": 305
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 851,
    "slug": "centiskorch",
    "speciesKey": "centiskorch",
    "nameJa": "マルヤクデ",
    "nameEn": "Centiskorch",
    "imagePath": "pokemon-icons/centiskorch.png",
    "types": [
      "fire",
      "bug"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 115,
      "defense": 65,
      "specialAttack": 90,
      "specialDefense": 90,
      "speed": 65,
      "total": 525
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 10220,
    "slug": "centiskorch-gmax",
    "speciesKey": "centiskorch",
    "nameJa": "マルヤクデ（キョダイマックスのすがた）",
    "nameEn": "Gigantamax Centiskorch",
    "imagePath": "pokemon-icons/centiskorch-gmax.png",
    "types": [
      "fire",
      "bug"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 115,
      "defense": 65,
      "specialAttack": 90,
      "specialDefense": 90,
      "speed": 65,
      "total": 525
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 852,
    "slug": "clobbopus",
    "speciesKey": "clobbopus",
    "nameJa": "タタッコ",
    "nameEn": "Clobbopus",
    "imagePath": "pokemon-icons/clobbopus.png",
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 68,
      "defense": 60,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 32,
      "total": 310
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 853,
    "slug": "grapploct",
    "speciesKey": "grapploct",
    "nameJa": "オトスパス",
    "nameEn": "Grapploct",
    "imagePath": "pokemon-icons/grapploct.png",
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 118,
      "defense": 90,
      "specialAttack": 70,
      "specialDefense": 80,
      "speed": 42,
      "total": 480
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 854,
    "slug": "sinistea",
    "speciesKey": "sinistea",
    "nameJa": "ヤバチャ（がんさくフォルム）",
    "nameEn": "Phony Sinistea",
    "imagePath": "pokemon-icons/sinistea.png",
    "types": [
      "ghost"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 45,
      "defense": 45,
      "specialAttack": 74,
      "specialDefense": 54,
      "speed": 50,
      "total": 308
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 855,
    "slug": "polteageist",
    "speciesKey": "polteageist",
    "nameJa": "ポットデス（がんさくフォルム）",
    "nameEn": "Phony Polteageist",
    "imagePath": "pokemon-icons/polteageist.png",
    "types": [
      "ghost"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 65,
      "defense": 65,
      "specialAttack": 134,
      "specialDefense": 114,
      "speed": 70,
      "total": 508
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 856,
    "slug": "hatenna",
    "speciesKey": "hatenna",
    "nameJa": "ミブリム",
    "nameEn": "Hatenna",
    "imagePath": "pokemon-icons/hatenna.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 42,
      "attack": 30,
      "defense": 45,
      "specialAttack": 56,
      "specialDefense": 53,
      "speed": 39,
      "total": 265
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 857,
    "slug": "hattrem",
    "speciesKey": "hattrem",
    "nameJa": "テブリム",
    "nameEn": "Hattrem",
    "imagePath": "pokemon-icons/hattrem.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 57,
      "attack": 40,
      "defense": 65,
      "specialAttack": 86,
      "specialDefense": 73,
      "speed": 49,
      "total": 370
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 858,
    "slug": "hatterene",
    "speciesKey": "hatterene",
    "nameJa": "ブリムオン",
    "nameEn": "Hatterene",
    "imagePath": "pokemon-icons/hatterene.png",
    "types": [
      "psychic",
      "fairy"
    ],
    "baseStats": {
      "hp": 57,
      "attack": 90,
      "defense": 95,
      "specialAttack": 136,
      "specialDefense": 103,
      "speed": 29,
      "total": 510
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 10221,
    "slug": "hatterene-gmax",
    "speciesKey": "hatterene",
    "nameJa": "ブリムオン（キョダイマックスのすがた）",
    "nameEn": "Gigantamax Hatterene",
    "imagePath": "pokemon-icons/hatterene-gmax.png",
    "types": [
      "psychic",
      "fairy"
    ],
    "baseStats": {
      "hp": 57,
      "attack": 90,
      "defense": 95,
      "specialAttack": 136,
      "specialDefense": 103,
      "speed": 29,
      "total": 510
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 859,
    "slug": "impidimp",
    "speciesKey": "impidimp",
    "nameJa": "ベロバー",
    "nameEn": "Impidimp",
    "imagePath": "pokemon-icons/impidimp.png",
    "types": [
      "dark",
      "fairy"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 45,
      "defense": 30,
      "specialAttack": 55,
      "specialDefense": 40,
      "speed": 50,
      "total": 265
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 860,
    "slug": "morgrem",
    "speciesKey": "morgrem",
    "nameJa": "ギモー",
    "nameEn": "Morgrem",
    "imagePath": "pokemon-icons/morgrem.png",
    "types": [
      "dark",
      "fairy"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 60,
      "defense": 45,
      "specialAttack": 75,
      "specialDefense": 55,
      "speed": 70,
      "total": 370
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 861,
    "slug": "grimmsnarl",
    "speciesKey": "grimmsnarl",
    "nameJa": "オーロンゲ",
    "nameEn": "Grimmsnarl",
    "imagePath": "pokemon-icons/grimmsnarl.png",
    "types": [
      "dark",
      "fairy"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 120,
      "defense": 65,
      "specialAttack": 95,
      "specialDefense": 75,
      "speed": 60,
      "total": 510
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 10222,
    "slug": "grimmsnarl-gmax",
    "speciesKey": "grimmsnarl",
    "nameJa": "オーロンゲ（キョダイマックスのすがた）",
    "nameEn": "Gigantamax Grimmsnarl",
    "imagePath": "pokemon-icons/grimmsnarl-gmax.png",
    "types": [
      "dark",
      "fairy"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 120,
      "defense": 65,
      "specialAttack": 95,
      "specialDefense": 75,
      "speed": 60,
      "total": 510
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 862,
    "slug": "obstagoon",
    "speciesKey": "obstagoon",
    "nameJa": "タチフサグマ",
    "nameEn": "Obstagoon",
    "imagePath": "pokemon-icons/obstagoon.png",
    "types": [
      "dark",
      "normal"
    ],
    "baseStats": {
      "hp": 93,
      "attack": 90,
      "defense": 101,
      "specialAttack": 60,
      "specialDefense": 81,
      "speed": 95,
      "total": 520
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 863,
    "slug": "perrserker",
    "speciesKey": "perrserker",
    "nameJa": "ニャイキング",
    "nameEn": "Perrserker",
    "imagePath": "pokemon-icons/perrserker.png",
    "types": [
      "steel"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 110,
      "defense": 100,
      "specialAttack": 50,
      "specialDefense": 60,
      "speed": 50,
      "total": 440
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 864,
    "slug": "cursola",
    "speciesKey": "cursola",
    "nameJa": "サニゴーン",
    "nameEn": "Cursola",
    "imagePath": "pokemon-icons/cursola.png",
    "types": [
      "ghost"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 95,
      "defense": 50,
      "specialAttack": 145,
      "specialDefense": 130,
      "speed": 30,
      "total": 510
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 865,
    "slug": "sirfetchd",
    "speciesKey": "sirfetchd",
    "nameJa": "ネギガナイト",
    "nameEn": "Sirfetch’d",
    "imagePath": "pokemon-icons/sirfetchd.png",
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 62,
      "attack": 135,
      "defense": 95,
      "specialAttack": 68,
      "specialDefense": 82,
      "speed": 65,
      "total": 507
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 866,
    "slug": "mr-rime",
    "speciesKey": "mr-rime",
    "nameJa": "バリコオル",
    "nameEn": "Mr. Rime",
    "imagePath": "pokemon-icons/mr-rime.png",
    "types": [
      "ice",
      "psychic"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 85,
      "defense": 75,
      "specialAttack": 110,
      "specialDefense": 100,
      "speed": 70,
      "total": 520
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 867,
    "slug": "runerigus",
    "speciesKey": "runerigus",
    "nameJa": "デスバーン",
    "nameEn": "Runerigus",
    "imagePath": "pokemon-icons/runerigus.png",
    "types": [
      "ground",
      "ghost"
    ],
    "baseStats": {
      "hp": 58,
      "attack": 95,
      "defense": 145,
      "specialAttack": 50,
      "specialDefense": 105,
      "speed": 30,
      "total": 483
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 868,
    "slug": "milcery",
    "speciesKey": "milcery",
    "nameJa": "マホミル",
    "nameEn": "Milcery",
    "imagePath": "pokemon-icons/milcery.png",
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 40,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 61,
      "speed": 34,
      "total": 270
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 869,
    "slug": "alcremie",
    "speciesKey": "alcremie",
    "nameJa": "マホイップ（ミルキィバニラ）",
    "nameEn": "Vanilla Cream Strawberry Sweet Alcremie",
    "imagePath": "pokemon-icons/alcremie.png",
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 60,
      "defense": 75,
      "specialAttack": 110,
      "specialDefense": 121,
      "speed": 64,
      "total": 495
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 10223,
    "slug": "alcremie-gmax",
    "speciesKey": "alcremie",
    "nameJa": "マホイップ（キョダイマックスのすがた）",
    "nameEn": "Gigantamax Alcremie",
    "imagePath": "pokemon-icons/alcremie-gmax.png",
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 60,
      "defense": 75,
      "specialAttack": 110,
      "specialDefense": 121,
      "speed": 64,
      "total": 495
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 870,
    "slug": "falinks",
    "speciesKey": "falinks",
    "nameJa": "タイレーツ",
    "nameEn": "Falinks",
    "imagePath": "pokemon-icons/falinks.png",
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 100,
      "defense": 100,
      "specialAttack": 70,
      "specialDefense": 60,
      "speed": 75,
      "total": 470
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 10303,
    "slug": "falinks-mega",
    "speciesKey": "falinks",
    "nameJa": "メガタイレーツ",
    "nameEn": "Mega Falinks",
    "imagePath": "pokemon-icons/falinks-mega.png",
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 135,
      "defense": 135,
      "specialAttack": 70,
      "specialDefense": 65,
      "speed": 100,
      "total": 570
    },
    "generation": 8,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 871,
    "slug": "pincurchin",
    "speciesKey": "pincurchin",
    "nameJa": "バチンウニ",
    "nameEn": "Pincurchin",
    "imagePath": "pokemon-icons/pincurchin.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 48,
      "attack": 101,
      "defense": 95,
      "specialAttack": 91,
      "specialDefense": 85,
      "speed": 15,
      "total": 435
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 872,
    "slug": "snom",
    "speciesKey": "snom",
    "nameJa": "ユキハミ",
    "nameEn": "Snom",
    "imagePath": "pokemon-icons/snom.png",
    "types": [
      "ice",
      "bug"
    ],
    "baseStats": {
      "hp": 30,
      "attack": 25,
      "defense": 35,
      "specialAttack": 45,
      "specialDefense": 30,
      "speed": 20,
      "total": 185
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 873,
    "slug": "frosmoth",
    "speciesKey": "frosmoth",
    "nameJa": "モスノウ",
    "nameEn": "Frosmoth",
    "imagePath": "pokemon-icons/frosmoth.png",
    "types": [
      "ice",
      "bug"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 65,
      "defense": 60,
      "specialAttack": 125,
      "specialDefense": 90,
      "speed": 65,
      "total": 475
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 874,
    "slug": "stonjourner",
    "speciesKey": "stonjourner",
    "nameJa": "イシヘンジン",
    "nameEn": "Stonjourner",
    "imagePath": "pokemon-icons/stonjourner.png",
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 125,
      "defense": 135,
      "specialAttack": 20,
      "specialDefense": 20,
      "speed": 70,
      "total": 470
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 875,
    "slug": "eiscue-ice",
    "speciesKey": "eiscue",
    "nameJa": "コオリッポ（アイスフェイス）",
    "nameEn": "Ice Eiscue",
    "imagePath": "pokemon-icons/eiscue-ice.png",
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 80,
      "defense": 110,
      "specialAttack": 65,
      "specialDefense": 90,
      "speed": 50,
      "total": 470
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 10185,
    "slug": "eiscue-noice",
    "speciesKey": "eiscue",
    "nameJa": "コオリッポ（ナイスフェイス）",
    "nameEn": "Noice Eiscue",
    "imagePath": "pokemon-icons/eiscue-noice.png",
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 80,
      "defense": 70,
      "specialAttack": 65,
      "specialDefense": 50,
      "speed": 130,
      "total": 470
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 876,
    "slug": "indeedee-male",
    "speciesKey": "indeedee",
    "nameJa": "イエッサン（オスのすがた）",
    "nameEn": "Male Indeedee",
    "imagePath": "pokemon-icons/indeedee-male.png",
    "types": [
      "psychic",
      "normal"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 65,
      "defense": 55,
      "specialAttack": 105,
      "specialDefense": 95,
      "speed": 95,
      "total": 475
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 10186,
    "slug": "indeedee-female",
    "speciesKey": "indeedee",
    "nameJa": "イエッサン（メスのすがた）",
    "nameEn": "Female Indeedee",
    "imagePath": "pokemon-icons/indeedee-female.png",
    "types": [
      "psychic",
      "normal"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 55,
      "defense": 65,
      "specialAttack": 95,
      "specialDefense": 105,
      "speed": 85,
      "total": 475
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 877,
    "slug": "morpeko-full-belly",
    "speciesKey": "morpeko",
    "nameJa": "モルペコ（まんぷくもよう）",
    "nameEn": "Full Belly Morpeko",
    "imagePath": "pokemon-icons/morpeko-full-belly.png",
    "types": [
      "electric",
      "dark"
    ],
    "baseStats": {
      "hp": 58,
      "attack": 95,
      "defense": 58,
      "specialAttack": 70,
      "specialDefense": 58,
      "speed": 97,
      "total": 436
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 10187,
    "slug": "morpeko-hangry",
    "speciesKey": "morpeko",
    "nameJa": "モルペコ（はらぺこもよう）",
    "nameEn": "Hangry Morpeko",
    "imagePath": "pokemon-icons/morpeko-hangry.png",
    "types": [
      "electric",
      "dark"
    ],
    "baseStats": {
      "hp": 58,
      "attack": 95,
      "defense": 58,
      "specialAttack": 70,
      "specialDefense": 58,
      "speed": 97,
      "total": 436
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 878,
    "slug": "cufant",
    "speciesKey": "cufant",
    "nameJa": "ゾウドウ",
    "nameEn": "Cufant",
    "imagePath": "pokemon-icons/cufant.png",
    "types": [
      "steel"
    ],
    "baseStats": {
      "hp": 72,
      "attack": 80,
      "defense": 49,
      "specialAttack": 40,
      "specialDefense": 49,
      "speed": 40,
      "total": 330
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 879,
    "slug": "copperajah",
    "speciesKey": "copperajah",
    "nameJa": "ダイオウドウ",
    "nameEn": "Copperajah",
    "imagePath": "pokemon-icons/copperajah.png",
    "types": [
      "steel"
    ],
    "baseStats": {
      "hp": 122,
      "attack": 130,
      "defense": 69,
      "specialAttack": 80,
      "specialDefense": 69,
      "speed": 30,
      "total": 500
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 10224,
    "slug": "copperajah-gmax",
    "speciesKey": "copperajah",
    "nameJa": "ダイオウドウ（キョダイマックスのすがた）",
    "nameEn": "Gigantamax Copperajah",
    "imagePath": "pokemon-icons/copperajah-gmax.png",
    "types": [
      "steel"
    ],
    "baseStats": {
      "hp": 122,
      "attack": 130,
      "defense": 69,
      "specialAttack": 80,
      "specialDefense": 69,
      "speed": 30,
      "total": 500
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 880,
    "slug": "dracozolt",
    "speciesKey": "dracozolt",
    "nameJa": "パッチラゴン",
    "nameEn": "Dracozolt",
    "imagePath": "pokemon-icons/dracozolt.png",
    "types": [
      "electric",
      "dragon"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 100,
      "defense": 90,
      "specialAttack": 80,
      "specialDefense": 70,
      "speed": 75,
      "total": 505
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 881,
    "slug": "arctozolt",
    "speciesKey": "arctozolt",
    "nameJa": "パッチルドン",
    "nameEn": "Arctozolt",
    "imagePath": "pokemon-icons/arctozolt.png",
    "types": [
      "electric",
      "ice"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 100,
      "defense": 90,
      "specialAttack": 90,
      "specialDefense": 80,
      "speed": 55,
      "total": 505
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 882,
    "slug": "dracovish",
    "speciesKey": "dracovish",
    "nameJa": "ウオノラゴン",
    "nameEn": "Dracovish",
    "imagePath": "pokemon-icons/dracovish.png",
    "types": [
      "water",
      "dragon"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 90,
      "defense": 100,
      "specialAttack": 70,
      "specialDefense": 80,
      "speed": 75,
      "total": 505
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 883,
    "slug": "arctovish",
    "speciesKey": "arctovish",
    "nameJa": "ウオチルドン",
    "nameEn": "Arctovish",
    "imagePath": "pokemon-icons/arctovish.png",
    "types": [
      "water",
      "ice"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 90,
      "defense": 100,
      "specialAttack": 80,
      "specialDefense": 90,
      "speed": 55,
      "total": 505
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 884,
    "slug": "duraludon",
    "speciesKey": "duraludon",
    "nameJa": "ジュラルドン",
    "nameEn": "Duraludon",
    "imagePath": "pokemon-icons/duraludon.png",
    "types": [
      "steel",
      "dragon"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 95,
      "defense": 115,
      "specialAttack": 120,
      "specialDefense": 50,
      "speed": 85,
      "total": 535
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 10225,
    "slug": "duraludon-gmax",
    "speciesKey": "duraludon",
    "nameJa": "ジュラルドン（キョダイマックスのすがた）",
    "nameEn": "Gigantamax Duraludon",
    "imagePath": "pokemon-icons/duraludon-gmax.png",
    "types": [
      "steel",
      "dragon"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 95,
      "defense": 115,
      "specialAttack": 120,
      "specialDefense": 50,
      "speed": 85,
      "total": 535
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 885,
    "slug": "dreepy",
    "speciesKey": "dreepy",
    "nameJa": "ドラメシヤ",
    "nameEn": "Dreepy",
    "imagePath": "pokemon-icons/dreepy.png",
    "types": [
      "dragon",
      "ghost"
    ],
    "baseStats": {
      "hp": 28,
      "attack": 60,
      "defense": 30,
      "specialAttack": 40,
      "specialDefense": 30,
      "speed": 82,
      "total": 270
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 886,
    "slug": "drakloak",
    "speciesKey": "drakloak",
    "nameJa": "ドロンチ",
    "nameEn": "Drakloak",
    "imagePath": "pokemon-icons/drakloak.png",
    "types": [
      "dragon",
      "ghost"
    ],
    "baseStats": {
      "hp": 68,
      "attack": 80,
      "defense": 50,
      "specialAttack": 60,
      "specialDefense": 50,
      "speed": 102,
      "total": 410
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 887,
    "slug": "dragapult",
    "speciesKey": "dragapult",
    "nameJa": "ドラパルト",
    "nameEn": "Dragapult",
    "imagePath": "pokemon-icons/dragapult.png",
    "types": [
      "dragon",
      "ghost"
    ],
    "baseStats": {
      "hp": 88,
      "attack": 120,
      "defense": 75,
      "specialAttack": 100,
      "specialDefense": 75,
      "speed": 142,
      "total": 600
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 888,
    "slug": "zacian",
    "speciesKey": "zacian",
    "nameJa": "ザシアン",
    "nameEn": "Zacian",
    "imagePath": "pokemon-icons/zacian.png",
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 92,
      "attack": 120,
      "defense": 115,
      "specialAttack": 80,
      "specialDefense": 115,
      "speed": 138,
      "total": 660
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 10188,
    "slug": "zacian-crowned",
    "speciesKey": "zacian",
    "nameJa": "ザシアン（けんのおう）",
    "nameEn": "Crowned Zacian",
    "imagePath": "pokemon-icons/zacian-crowned.png",
    "types": [
      "fairy",
      "steel"
    ],
    "baseStats": {
      "hp": 92,
      "attack": 150,
      "defense": 115,
      "specialAttack": 80,
      "specialDefense": 115,
      "speed": 148,
      "total": 700
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 889,
    "slug": "zamazenta",
    "speciesKey": "zamazenta",
    "nameJa": "ザマゼンタ",
    "nameEn": "Zamazenta",
    "imagePath": "pokemon-icons/zamazenta.png",
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 92,
      "attack": 120,
      "defense": 115,
      "specialAttack": 80,
      "specialDefense": 115,
      "speed": 138,
      "total": 660
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 10189,
    "slug": "zamazenta-crowned",
    "speciesKey": "zamazenta",
    "nameJa": "ザマゼンタ（たてのおう）",
    "nameEn": "Crowned Zamazenta",
    "imagePath": "pokemon-icons/zamazenta-crowned.png",
    "types": [
      "fighting",
      "steel"
    ],
    "baseStats": {
      "hp": 92,
      "attack": 120,
      "defense": 140,
      "specialAttack": 80,
      "specialDefense": 140,
      "speed": 128,
      "total": 700
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 890,
    "slug": "eternatus",
    "speciesKey": "eternatus",
    "nameJa": "ムゲンダイナ",
    "nameEn": "Eternatus",
    "imagePath": "pokemon-icons/eternatus.png",
    "types": [
      "poison",
      "dragon"
    ],
    "baseStats": {
      "hp": 140,
      "attack": 85,
      "defense": 95,
      "specialAttack": 145,
      "specialDefense": 95,
      "speed": 130,
      "total": 690
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 10190,
    "slug": "eternatus-eternamax",
    "speciesKey": "eternatus",
    "nameJa": "ムゲンダイナ（ムゲンダイマックス）",
    "nameEn": "Eternamax Eternatus",
    "imagePath": "pokemon-icons/eternatus-eternamax.png",
    "types": [
      "poison",
      "dragon"
    ],
    "baseStats": {
      "hp": 255,
      "attack": 115,
      "defense": 250,
      "specialAttack": 125,
      "specialDefense": 250,
      "speed": 130,
      "total": 1125
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 891,
    "slug": "kubfu",
    "speciesKey": "kubfu",
    "nameJa": "ダクマ",
    "nameEn": "Kubfu",
    "imagePath": "pokemon-icons/kubfu.png",
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 90,
      "defense": 60,
      "specialAttack": 53,
      "specialDefense": 50,
      "speed": 72,
      "total": 385
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 892,
    "slug": "urshifu-single-strike",
    "speciesKey": "urshifu",
    "nameJa": "ウーラオス（いちげきのかた）",
    "nameEn": "Single Strike Urshifu",
    "imagePath": "pokemon-icons/urshifu-single-strike.png",
    "types": [
      "fighting",
      "dark"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 130,
      "defense": 100,
      "specialAttack": 63,
      "specialDefense": 60,
      "speed": 97,
      "total": 550
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 10191,
    "slug": "urshifu-rapid-strike",
    "speciesKey": "urshifu",
    "nameJa": "ウーラオス（れんげきのかた）",
    "nameEn": "Rapid Strike Urshifu",
    "imagePath": "pokemon-icons/urshifu-rapid-strike.png",
    "types": [
      "fighting",
      "water"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 130,
      "defense": 100,
      "specialAttack": 63,
      "specialDefense": 60,
      "speed": 97,
      "total": 550
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 10226,
    "slug": "urshifu-single-strike-gmax",
    "speciesKey": "urshifu",
    "nameJa": "ウーラオス（いちげきのかた・キョダイマックスのすがた）",
    "nameEn": "Gigantamax Single Strike Urshifu",
    "imagePath": "pokemon-icons/urshifu-single-strike-gmax.png",
    "types": [
      "fighting",
      "dark"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 130,
      "defense": 100,
      "specialAttack": 63,
      "specialDefense": 60,
      "speed": 97,
      "total": 550
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 10227,
    "slug": "urshifu-rapid-strike-gmax",
    "speciesKey": "urshifu",
    "nameJa": "ウーラオス（れんげきのかた・キョダイマックスのすがた）",
    "nameEn": "Gigantamax Rapid Strike Urshifu",
    "imagePath": "pokemon-icons/urshifu-rapid-strike-gmax.png",
    "types": [
      "fighting",
      "water"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 130,
      "defense": 100,
      "specialAttack": 63,
      "specialDefense": 60,
      "speed": 97,
      "total": 550
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 893,
    "slug": "zarude",
    "speciesKey": "zarude",
    "nameJa": "ザルード",
    "nameEn": "Zarude",
    "imagePath": "pokemon-icons/zarude.png",
    "types": [
      "dark",
      "grass"
    ],
    "baseStats": {
      "hp": 105,
      "attack": 120,
      "defense": 105,
      "specialAttack": 70,
      "specialDefense": 95,
      "speed": 105,
      "total": 600
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 10192,
    "slug": "zarude-dada",
    "speciesKey": "zarude",
    "nameJa": "ザルード（とうちゃん）",
    "nameEn": "Dada Zarude",
    "imagePath": "pokemon-icons/zarude-dada.png",
    "types": [
      "dark",
      "grass"
    ],
    "baseStats": {
      "hp": 105,
      "attack": 120,
      "defense": 105,
      "specialAttack": 70,
      "specialDefense": 95,
      "speed": 105,
      "total": 600
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 894,
    "slug": "regieleki",
    "speciesKey": "regieleki",
    "nameJa": "レジエレキ",
    "nameEn": "Regieleki",
    "imagePath": "pokemon-icons/regieleki.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 100,
      "defense": 50,
      "specialAttack": 100,
      "specialDefense": 50,
      "speed": 200,
      "total": 580
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 895,
    "slug": "regidrago",
    "speciesKey": "regidrago",
    "nameJa": "レジドラゴ",
    "nameEn": "Regidrago",
    "imagePath": "pokemon-icons/regidrago.png",
    "types": [
      "dragon"
    ],
    "baseStats": {
      "hp": 200,
      "attack": 100,
      "defense": 50,
      "specialAttack": 100,
      "specialDefense": 50,
      "speed": 80,
      "total": 580
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 896,
    "slug": "glastrier",
    "speciesKey": "glastrier",
    "nameJa": "ブリザポス",
    "nameEn": "Glastrier",
    "imagePath": "pokemon-icons/glastrier.png",
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 145,
      "defense": 130,
      "specialAttack": 65,
      "specialDefense": 110,
      "speed": 30,
      "total": 580
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 897,
    "slug": "spectrier",
    "speciesKey": "spectrier",
    "nameJa": "レイスポス",
    "nameEn": "Spectrier",
    "imagePath": "pokemon-icons/spectrier.png",
    "types": [
      "ghost"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 65,
      "defense": 60,
      "specialAttack": 145,
      "specialDefense": 80,
      "speed": 130,
      "total": 580
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 898,
    "slug": "calyrex",
    "speciesKey": "calyrex",
    "nameJa": "バドレックス",
    "nameEn": "Calyrex",
    "imagePath": "pokemon-icons/calyrex.png",
    "types": [
      "psychic",
      "grass"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 80,
      "defense": 80,
      "specialAttack": 80,
      "specialDefense": 80,
      "speed": 80,
      "total": 500
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 10193,
    "slug": "calyrex-ice",
    "speciesKey": "calyrex",
    "nameJa": "バドレックス（はくばじょうのすがた）",
    "nameEn": "Ice Calyrex",
    "imagePath": "pokemon-icons/calyrex-ice.png",
    "types": [
      "psychic",
      "ice"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 165,
      "defense": 150,
      "specialAttack": 85,
      "specialDefense": 130,
      "speed": 50,
      "total": 680
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 10194,
    "slug": "calyrex-shadow",
    "speciesKey": "calyrex",
    "nameJa": "バドレックス（こくばじょうのすがた）",
    "nameEn": "Shadow Calyrex",
    "imagePath": "pokemon-icons/calyrex-shadow.png",
    "types": [
      "psychic",
      "ghost"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 85,
      "defense": 80,
      "specialAttack": 165,
      "specialDefense": 100,
      "speed": 150,
      "total": 680
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": false
  },
  {
    "id": 899,
    "slug": "wyrdeer",
    "speciesKey": "wyrdeer",
    "nameJa": "アヤシシ",
    "nameEn": "Wyrdeer",
    "imagePath": "pokemon-icons/wyrdeer.png",
    "types": [
      "normal",
      "psychic"
    ],
    "baseStats": {
      "hp": 103,
      "attack": 105,
      "defense": 72,
      "specialAttack": 105,
      "specialDefense": 75,
      "speed": 65,
      "total": 525
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 900,
    "slug": "kleavor",
    "speciesKey": "kleavor",
    "nameJa": "バサギリ",
    "nameEn": "Kleavor",
    "imagePath": "pokemon-icons/kleavor.png",
    "types": [
      "bug",
      "rock"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 135,
      "defense": 95,
      "specialAttack": 45,
      "specialDefense": 70,
      "speed": 85,
      "total": 500
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 901,
    "slug": "ursaluna",
    "speciesKey": "ursaluna",
    "nameJa": "ガチグマ",
    "nameEn": "Ursaluna",
    "imagePath": "pokemon-icons/ursaluna.png",
    "types": [
      "ground",
      "normal"
    ],
    "baseStats": {
      "hp": 130,
      "attack": 140,
      "defense": 105,
      "specialAttack": 45,
      "specialDefense": 80,
      "speed": 50,
      "total": 550
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 10272,
    "slug": "ursaluna-bloodmoon",
    "speciesKey": "ursaluna",
    "nameJa": "ガチグマ（アカツキ）",
    "nameEn": "Bloodmoon Ursaluna",
    "imagePath": "pokemon-icons/ursaluna-bloodmoon.png",
    "types": [
      "ground",
      "normal"
    ],
    "baseStats": {
      "hp": 113,
      "attack": 70,
      "defense": 120,
      "specialAttack": 135,
      "specialDefense": 65,
      "speed": 52,
      "total": 555
    },
    "generation": 8,
    "debutTitle": "The Teal Mask",
    "isDefault": false
  },
  {
    "id": 902,
    "slug": "basculegion-male",
    "speciesKey": "basculegion",
    "nameJa": "イダイトウ（オスのすがた）",
    "nameEn": "Male Basculegion",
    "imagePath": "pokemon-icons/basculegion-male.png",
    "types": [
      "water",
      "ghost"
    ],
    "baseStats": {
      "hp": 120,
      "attack": 112,
      "defense": 65,
      "specialAttack": 80,
      "specialDefense": 75,
      "speed": 78,
      "total": 530
    },
    "generation": 8,
    "debutTitle": "Pokemon LEGENDS アルセウス",
    "isDefault": true
  },
  {
    "id": 10248,
    "slug": "basculegion-female",
    "speciesKey": "basculegion",
    "nameJa": "イダイトウ（メスのすがた）",
    "nameEn": "Female Basculegion",
    "imagePath": "pokemon-icons/basculegion-female.png",
    "types": [
      "water",
      "ghost"
    ],
    "baseStats": {
      "hp": 120,
      "attack": 92,
      "defense": 65,
      "specialAttack": 100,
      "specialDefense": 75,
      "speed": 78,
      "total": 530
    },
    "generation": 8,
    "debutTitle": "Pokemon LEGENDS アルセウス",
    "isDefault": false
  },
  {
    "id": 903,
    "slug": "sneasler",
    "speciesKey": "sneasler",
    "nameJa": "オオニューラ",
    "nameEn": "Sneasler",
    "imagePath": "pokemon-icons/sneasler.png",
    "types": [
      "fighting",
      "poison"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 130,
      "defense": 60,
      "specialAttack": 40,
      "specialDefense": 80,
      "speed": 120,
      "total": 510
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 904,
    "slug": "overqwil",
    "speciesKey": "overqwil",
    "nameJa": "ハリーマン",
    "nameEn": "Overqwil",
    "imagePath": "pokemon-icons/overqwil.png",
    "types": [
      "dark",
      "poison"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 115,
      "defense": 95,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 85,
      "total": 510
    },
    "generation": 8,
    "debutTitle": "ポケットモンスター ソード・シールド",
    "isDefault": true
  },
  {
    "id": 905,
    "slug": "enamorus-incarnate",
    "speciesKey": "enamorus",
    "nameJa": "ラブトロス（けしんフォルム）",
    "nameEn": "Incarnate Enamorus",
    "imagePath": "pokemon-icons/enamorus-incarnate.png",
    "types": [
      "fairy",
      "flying"
    ],
    "baseStats": {
      "hp": 74,
      "attack": 115,
      "defense": 70,
      "specialAttack": 135,
      "specialDefense": 80,
      "speed": 106,
      "total": 580
    },
    "generation": 8,
    "debutTitle": "Pokemon LEGENDS アルセウス",
    "isDefault": true
  },
  {
    "id": 10249,
    "slug": "enamorus-therian",
    "speciesKey": "enamorus",
    "nameJa": "ラブトロス（れいじゅうフォルム）",
    "nameEn": "Therian Enamorus",
    "imagePath": "pokemon-icons/enamorus-therian.png",
    "types": [
      "fairy",
      "flying"
    ],
    "baseStats": {
      "hp": 74,
      "attack": 115,
      "defense": 110,
      "specialAttack": 135,
      "specialDefense": 100,
      "speed": 46,
      "total": 580
    },
    "generation": 8,
    "debutTitle": "Pokemon LEGENDS アルセウス",
    "isDefault": false
  },
  {
    "id": 906,
    "slug": "sprigatito",
    "speciesKey": "sprigatito",
    "nameJa": "ニャオハ",
    "nameEn": "Sprigatito",
    "imagePath": "pokemon-icons/sprigatito.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 61,
      "defense": 54,
      "specialAttack": 45,
      "specialDefense": 45,
      "speed": 65,
      "total": 310
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 907,
    "slug": "floragato",
    "speciesKey": "floragato",
    "nameJa": "ニャローテ",
    "nameEn": "Floragato",
    "imagePath": "pokemon-icons/floragato.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 61,
      "attack": 80,
      "defense": 63,
      "specialAttack": 60,
      "specialDefense": 63,
      "speed": 83,
      "total": 410
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 908,
    "slug": "meowscarada",
    "speciesKey": "meowscarada",
    "nameJa": "マスカーニャ",
    "nameEn": "Meowscarada",
    "imagePath": "pokemon-icons/meowscarada.png",
    "types": [
      "grass",
      "dark"
    ],
    "baseStats": {
      "hp": 76,
      "attack": 110,
      "defense": 70,
      "specialAttack": 81,
      "specialDefense": 70,
      "speed": 123,
      "total": 530
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 909,
    "slug": "fuecoco",
    "speciesKey": "fuecoco",
    "nameJa": "ホゲータ",
    "nameEn": "Fuecoco",
    "imagePath": "pokemon-icons/fuecoco.png",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 67,
      "attack": 45,
      "defense": 59,
      "specialAttack": 63,
      "specialDefense": 40,
      "speed": 36,
      "total": 310
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 910,
    "slug": "crocalor",
    "speciesKey": "crocalor",
    "nameJa": "アチゲータ",
    "nameEn": "Crocalor",
    "imagePath": "pokemon-icons/crocalor.png",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 81,
      "attack": 55,
      "defense": 78,
      "specialAttack": 90,
      "specialDefense": 58,
      "speed": 49,
      "total": 411
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 911,
    "slug": "skeledirge",
    "speciesKey": "skeledirge",
    "nameJa": "ラウドボーン",
    "nameEn": "Skeledirge",
    "imagePath": "pokemon-icons/skeledirge.png",
    "types": [
      "fire",
      "ghost"
    ],
    "baseStats": {
      "hp": 104,
      "attack": 75,
      "defense": 100,
      "specialAttack": 110,
      "specialDefense": 75,
      "speed": 66,
      "total": 530
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 912,
    "slug": "quaxly",
    "speciesKey": "quaxly",
    "nameJa": "クワッス",
    "nameEn": "Quaxly",
    "imagePath": "pokemon-icons/quaxly.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 65,
      "defense": 45,
      "specialAttack": 50,
      "specialDefense": 45,
      "speed": 50,
      "total": 310
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 913,
    "slug": "quaxwell",
    "speciesKey": "quaxwell",
    "nameJa": "ウェルカモ",
    "nameEn": "Quaxwell",
    "imagePath": "pokemon-icons/quaxwell.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 85,
      "defense": 65,
      "specialAttack": 65,
      "specialDefense": 60,
      "speed": 65,
      "total": 410
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 914,
    "slug": "quaquaval",
    "speciesKey": "quaquaval",
    "nameJa": "ウェーニバル",
    "nameEn": "Quaquaval",
    "imagePath": "pokemon-icons/quaquaval.png",
    "types": [
      "water",
      "fighting"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 120,
      "defense": 80,
      "specialAttack": 85,
      "specialDefense": 75,
      "speed": 85,
      "total": 530
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 915,
    "slug": "lechonk",
    "speciesKey": "lechonk",
    "nameJa": "グルトン",
    "nameEn": "Lechonk",
    "imagePath": "pokemon-icons/lechonk.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 54,
      "attack": 45,
      "defense": 40,
      "specialAttack": 35,
      "specialDefense": 45,
      "speed": 35,
      "total": 254
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 916,
    "slug": "oinkologne-male",
    "speciesKey": "oinkologne",
    "nameJa": "パフュートン（オスのすがた）",
    "nameEn": "Male Oinkologne",
    "imagePath": "pokemon-icons/oinkologne-male.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 110,
      "attack": 100,
      "defense": 75,
      "specialAttack": 59,
      "specialDefense": 80,
      "speed": 65,
      "total": 489
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 10254,
    "slug": "oinkologne-female",
    "speciesKey": "oinkologne",
    "nameJa": "パフュートン（メスのすがた）",
    "nameEn": "Female Oinkologne",
    "imagePath": "pokemon-icons/oinkologne-female.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 115,
      "attack": 90,
      "defense": 70,
      "specialAttack": 59,
      "specialDefense": 90,
      "speed": 65,
      "total": 489
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": false
  },
  {
    "id": 917,
    "slug": "tarountula",
    "speciesKey": "tarountula",
    "nameJa": "タマンチュラ",
    "nameEn": "Tarountula",
    "imagePath": "pokemon-icons/tarountula.png",
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 41,
      "defense": 45,
      "specialAttack": 29,
      "specialDefense": 40,
      "speed": 20,
      "total": 210
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 918,
    "slug": "spidops",
    "speciesKey": "spidops",
    "nameJa": "ワナイダー",
    "nameEn": "Spidops",
    "imagePath": "pokemon-icons/spidops.png",
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 79,
      "defense": 92,
      "specialAttack": 52,
      "specialDefense": 86,
      "speed": 35,
      "total": 404
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 919,
    "slug": "nymble",
    "speciesKey": "nymble",
    "nameJa": "マメバッタ",
    "nameEn": "Nymble",
    "imagePath": "pokemon-icons/nymble.png",
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 33,
      "attack": 46,
      "defense": 40,
      "specialAttack": 21,
      "specialDefense": 25,
      "speed": 45,
      "total": 210
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 920,
    "slug": "lokix",
    "speciesKey": "lokix",
    "nameJa": "エクスレッグ",
    "nameEn": "Lokix",
    "imagePath": "pokemon-icons/lokix.png",
    "types": [
      "bug",
      "dark"
    ],
    "baseStats": {
      "hp": 71,
      "attack": 102,
      "defense": 78,
      "specialAttack": 52,
      "specialDefense": 55,
      "speed": 92,
      "total": 450
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 921,
    "slug": "pawmi",
    "speciesKey": "pawmi",
    "nameJa": "パモ",
    "nameEn": "Pawmi",
    "imagePath": "pokemon-icons/pawmi.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 50,
      "defense": 20,
      "specialAttack": 40,
      "specialDefense": 25,
      "speed": 60,
      "total": 240
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 922,
    "slug": "pawmo",
    "speciesKey": "pawmo",
    "nameJa": "パモット",
    "nameEn": "Pawmo",
    "imagePath": "pokemon-icons/pawmo.png",
    "types": [
      "electric",
      "fighting"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 75,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 40,
      "speed": 85,
      "total": 350
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 923,
    "slug": "pawmot",
    "speciesKey": "pawmot",
    "nameJa": "パーモット",
    "nameEn": "Pawmot",
    "imagePath": "pokemon-icons/pawmot.png",
    "types": [
      "electric",
      "fighting"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 115,
      "defense": 70,
      "specialAttack": 70,
      "specialDefense": 60,
      "speed": 105,
      "total": 490
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 924,
    "slug": "tandemaus",
    "speciesKey": "tandemaus",
    "nameJa": "ワッカネズミ",
    "nameEn": "Tandemaus",
    "imagePath": "pokemon-icons/tandemaus.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 50,
      "defense": 45,
      "specialAttack": 40,
      "specialDefense": 45,
      "speed": 75,
      "total": 305
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 925,
    "slug": "maushold-family-of-four",
    "speciesKey": "maushold",
    "nameJa": "イッカネズミ（４ひきかぞく）",
    "nameEn": "Maushold (Family of Four)",
    "imagePath": "pokemon-icons/maushold-family-of-four.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 74,
      "attack": 75,
      "defense": 70,
      "specialAttack": 65,
      "specialDefense": 75,
      "speed": 111,
      "total": 470
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 10257,
    "slug": "maushold-family-of-three",
    "speciesKey": "maushold",
    "nameJa": "イッカネズミ（３びきかぞく）",
    "nameEn": "Maushold (Family of Three)",
    "imagePath": "pokemon-icons/maushold-family-of-three.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 74,
      "attack": 75,
      "defense": 70,
      "specialAttack": 65,
      "specialDefense": 75,
      "speed": 111,
      "total": 470
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": false
  },
  {
    "id": 926,
    "slug": "fidough",
    "speciesKey": "fidough",
    "nameJa": "パピモッチ",
    "nameEn": "Fidough",
    "imagePath": "pokemon-icons/fidough.png",
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 37,
      "attack": 55,
      "defense": 70,
      "specialAttack": 30,
      "specialDefense": 55,
      "speed": 65,
      "total": 312
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 927,
    "slug": "dachsbun",
    "speciesKey": "dachsbun",
    "nameJa": "バウッツェル",
    "nameEn": "Dachsbun",
    "imagePath": "pokemon-icons/dachsbun.png",
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 57,
      "attack": 80,
      "defense": 115,
      "specialAttack": 50,
      "specialDefense": 80,
      "speed": 95,
      "total": 477
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 928,
    "slug": "smoliv",
    "speciesKey": "smoliv",
    "nameJa": "ミニーブ",
    "nameEn": "Smoliv",
    "imagePath": "pokemon-icons/smoliv.png",
    "types": [
      "grass",
      "normal"
    ],
    "baseStats": {
      "hp": 41,
      "attack": 35,
      "defense": 45,
      "specialAttack": 58,
      "specialDefense": 51,
      "speed": 30,
      "total": 260
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 929,
    "slug": "dolliv",
    "speciesKey": "dolliv",
    "nameJa": "オリーニョ",
    "nameEn": "Dolliv",
    "imagePath": "pokemon-icons/dolliv.png",
    "types": [
      "grass",
      "normal"
    ],
    "baseStats": {
      "hp": 52,
      "attack": 53,
      "defense": 60,
      "specialAttack": 78,
      "specialDefense": 78,
      "speed": 33,
      "total": 354
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 930,
    "slug": "arboliva",
    "speciesKey": "arboliva",
    "nameJa": "オリーヴァ",
    "nameEn": "Arboliva",
    "imagePath": "pokemon-icons/arboliva.png",
    "types": [
      "grass",
      "normal"
    ],
    "baseStats": {
      "hp": 78,
      "attack": 69,
      "defense": 90,
      "specialAttack": 125,
      "specialDefense": 109,
      "speed": 39,
      "total": 510
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 931,
    "slug": "squawkabilly-green-plumage",
    "speciesKey": "squawkabilly",
    "nameJa": "イキリンコ（グリーンフェザー）",
    "nameEn": "Green Plumage Squawkabilly",
    "imagePath": "pokemon-icons/squawkabilly-green-plumage.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 82,
      "attack": 96,
      "defense": 51,
      "specialAttack": 45,
      "specialDefense": 51,
      "speed": 92,
      "total": 417
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 10261,
    "slug": "squawkabilly-yellow-plumage",
    "speciesKey": "squawkabilly",
    "nameJa": "イキリンコ（イエローフェザー）",
    "nameEn": "Yellow Plumage Squawkabilly",
    "imagePath": "pokemon-icons/squawkabilly-yellow-plumage.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 82,
      "attack": 96,
      "defense": 51,
      "specialAttack": 45,
      "specialDefense": 51,
      "speed": 92,
      "total": 417
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": false
  },
  {
    "id": 10262,
    "slug": "squawkabilly-white-plumage",
    "speciesKey": "squawkabilly",
    "nameJa": "イキリンコ（ホワイトフェザー）",
    "nameEn": "White Plumage Squawkabilly",
    "imagePath": "pokemon-icons/squawkabilly-white-plumage.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 82,
      "attack": 96,
      "defense": 51,
      "specialAttack": 45,
      "specialDefense": 51,
      "speed": 92,
      "total": 417
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": false
  },
  {
    "id": 932,
    "slug": "nacli",
    "speciesKey": "nacli",
    "nameJa": "コジオ",
    "nameEn": "Nacli",
    "imagePath": "pokemon-icons/nacli.png",
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 55,
      "defense": 75,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 25,
      "total": 280
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 933,
    "slug": "naclstack",
    "speciesKey": "naclstack",
    "nameJa": "ジオヅム",
    "nameEn": "Naclstack",
    "imagePath": "pokemon-icons/naclstack.png",
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 60,
      "defense": 100,
      "specialAttack": 35,
      "specialDefense": 65,
      "speed": 35,
      "total": 355
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 934,
    "slug": "garganacl",
    "speciesKey": "garganacl",
    "nameJa": "キョジオーン",
    "nameEn": "Garganacl",
    "imagePath": "pokemon-icons/garganacl.png",
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 100,
      "defense": 130,
      "specialAttack": 45,
      "specialDefense": 90,
      "speed": 35,
      "total": 500
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 935,
    "slug": "charcadet",
    "speciesKey": "charcadet",
    "nameJa": "カルボウ",
    "nameEn": "Charcadet",
    "imagePath": "pokemon-icons/charcadet.png",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 50,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 40,
      "speed": 35,
      "total": 255
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 936,
    "slug": "armarouge",
    "speciesKey": "armarouge",
    "nameJa": "グレンアルマ",
    "nameEn": "Armarouge",
    "imagePath": "pokemon-icons/armarouge.png",
    "types": [
      "fire",
      "psychic"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 60,
      "defense": 100,
      "specialAttack": 125,
      "specialDefense": 80,
      "speed": 75,
      "total": 525
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 937,
    "slug": "ceruledge",
    "speciesKey": "ceruledge",
    "nameJa": "ソウブレイズ",
    "nameEn": "Ceruledge",
    "imagePath": "pokemon-icons/ceruledge.png",
    "types": [
      "fire",
      "ghost"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 125,
      "defense": 80,
      "specialAttack": 60,
      "specialDefense": 100,
      "speed": 85,
      "total": 525
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 938,
    "slug": "tadbulb",
    "speciesKey": "tadbulb",
    "nameJa": "ズピカ",
    "nameEn": "Tadbulb",
    "imagePath": "pokemon-icons/tadbulb.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 61,
      "attack": 31,
      "defense": 41,
      "specialAttack": 59,
      "specialDefense": 35,
      "speed": 45,
      "total": 272
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 939,
    "slug": "bellibolt",
    "speciesKey": "bellibolt",
    "nameJa": "ハラバリー",
    "nameEn": "Bellibolt",
    "imagePath": "pokemon-icons/bellibolt.png",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 109,
      "attack": 64,
      "defense": 91,
      "specialAttack": 103,
      "specialDefense": 83,
      "speed": 45,
      "total": 495
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 940,
    "slug": "wattrel",
    "speciesKey": "wattrel",
    "nameJa": "カイデン",
    "nameEn": "Wattrel",
    "imagePath": "pokemon-icons/wattrel.png",
    "types": [
      "electric",
      "flying"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 40,
      "defense": 35,
      "specialAttack": 55,
      "specialDefense": 40,
      "speed": 70,
      "total": 280
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 941,
    "slug": "kilowattrel",
    "speciesKey": "kilowattrel",
    "nameJa": "タイカイデン",
    "nameEn": "Kilowattrel",
    "imagePath": "pokemon-icons/kilowattrel.png",
    "types": [
      "electric",
      "flying"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 70,
      "defense": 60,
      "specialAttack": 105,
      "specialDefense": 60,
      "speed": 125,
      "total": 490
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 942,
    "slug": "maschiff",
    "speciesKey": "maschiff",
    "nameJa": "オラチフ",
    "nameEn": "Maschiff",
    "imagePath": "pokemon-icons/maschiff.png",
    "types": [
      "dark"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 78,
      "defense": 60,
      "specialAttack": 40,
      "specialDefense": 51,
      "speed": 51,
      "total": 340
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 943,
    "slug": "mabosstiff",
    "speciesKey": "mabosstiff",
    "nameJa": "マフィティフ",
    "nameEn": "Mabosstiff",
    "imagePath": "pokemon-icons/mabosstiff.png",
    "types": [
      "dark"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 120,
      "defense": 90,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 85,
      "total": 505
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 944,
    "slug": "shroodle",
    "speciesKey": "shroodle",
    "nameJa": "シルシュルー",
    "nameEn": "Shroodle",
    "imagePath": "pokemon-icons/shroodle.png",
    "types": [
      "poison",
      "normal"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 65,
      "defense": 35,
      "specialAttack": 40,
      "specialDefense": 35,
      "speed": 75,
      "total": 290
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 945,
    "slug": "grafaiai",
    "speciesKey": "grafaiai",
    "nameJa": "タギングル",
    "nameEn": "Grafaiai",
    "imagePath": "pokemon-icons/grafaiai.png",
    "types": [
      "poison",
      "normal"
    ],
    "baseStats": {
      "hp": 63,
      "attack": 95,
      "defense": 65,
      "specialAttack": 80,
      "specialDefense": 72,
      "speed": 110,
      "total": 485
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 946,
    "slug": "bramblin",
    "speciesKey": "bramblin",
    "nameJa": "アノクサ",
    "nameEn": "Bramblin",
    "imagePath": "pokemon-icons/bramblin.png",
    "types": [
      "grass",
      "ghost"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 65,
      "defense": 30,
      "specialAttack": 45,
      "specialDefense": 35,
      "speed": 60,
      "total": 275
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 947,
    "slug": "brambleghast",
    "speciesKey": "brambleghast",
    "nameJa": "アノホラグサ",
    "nameEn": "Brambleghast",
    "imagePath": "pokemon-icons/brambleghast.png",
    "types": [
      "grass",
      "ghost"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 115,
      "defense": 70,
      "specialAttack": 80,
      "specialDefense": 70,
      "speed": 90,
      "total": 480
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 948,
    "slug": "toedscool",
    "speciesKey": "toedscool",
    "nameJa": "ノノクラゲ",
    "nameEn": "Toedscool",
    "imagePath": "pokemon-icons/toedscool.png",
    "types": [
      "ground",
      "grass"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 40,
      "defense": 35,
      "specialAttack": 50,
      "specialDefense": 100,
      "speed": 70,
      "total": 335
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 949,
    "slug": "toedscruel",
    "speciesKey": "toedscruel",
    "nameJa": "リククラゲ",
    "nameEn": "Toedscruel",
    "imagePath": "pokemon-icons/toedscruel.png",
    "types": [
      "ground",
      "grass"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 70,
      "defense": 65,
      "specialAttack": 80,
      "specialDefense": 120,
      "speed": 100,
      "total": 515
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 950,
    "slug": "klawf",
    "speciesKey": "klawf",
    "nameJa": "ガケガニ",
    "nameEn": "Klawf",
    "imagePath": "pokemon-icons/klawf.png",
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 100,
      "defense": 115,
      "specialAttack": 35,
      "specialDefense": 55,
      "speed": 75,
      "total": 450
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 951,
    "slug": "capsakid",
    "speciesKey": "capsakid",
    "nameJa": "カプサイジ",
    "nameEn": "Capsakid",
    "imagePath": "pokemon-icons/capsakid.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 62,
      "defense": 40,
      "specialAttack": 62,
      "specialDefense": 40,
      "speed": 50,
      "total": 304
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 952,
    "slug": "scovillain",
    "speciesKey": "scovillain",
    "nameJa": "スコヴィラン",
    "nameEn": "Scovillain",
    "imagePath": "pokemon-icons/scovillain.png",
    "types": [
      "grass",
      "fire"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 108,
      "defense": 65,
      "specialAttack": 108,
      "specialDefense": 65,
      "speed": 75,
      "total": 486
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 10320,
    "slug": "scovillain-mega",
    "speciesKey": "scovillain",
    "nameJa": "メガスコヴィラン",
    "nameEn": "Mega Scovillain",
    "imagePath": "pokemon-icons/scovillain-mega.png",
    "types": [
      "grass",
      "fire"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 138,
      "defense": 85,
      "specialAttack": 138,
      "specialDefense": 85,
      "speed": 75,
      "total": 586
    },
    "generation": 9,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 953,
    "slug": "rellor",
    "speciesKey": "rellor",
    "nameJa": "シガロコ",
    "nameEn": "Rellor",
    "imagePath": "pokemon-icons/rellor.png",
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 41,
      "attack": 50,
      "defense": 60,
      "specialAttack": 31,
      "specialDefense": 58,
      "speed": 30,
      "total": 270
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 954,
    "slug": "rabsca",
    "speciesKey": "rabsca",
    "nameJa": "ベラカス",
    "nameEn": "Rabsca",
    "imagePath": "pokemon-icons/rabsca.png",
    "types": [
      "bug",
      "psychic"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 50,
      "defense": 85,
      "specialAttack": 115,
      "specialDefense": 100,
      "speed": 45,
      "total": 470
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 955,
    "slug": "flittle",
    "speciesKey": "flittle",
    "nameJa": "ヒラヒナ",
    "nameEn": "Flittle",
    "imagePath": "pokemon-icons/flittle.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 30,
      "attack": 35,
      "defense": 30,
      "specialAttack": 55,
      "specialDefense": 30,
      "speed": 75,
      "total": 255
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 956,
    "slug": "espathra",
    "speciesKey": "espathra",
    "nameJa": "クエスパトラ",
    "nameEn": "Espathra",
    "imagePath": "pokemon-icons/espathra.png",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 60,
      "defense": 60,
      "specialAttack": 101,
      "specialDefense": 60,
      "speed": 105,
      "total": 481
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 957,
    "slug": "tinkatink",
    "speciesKey": "tinkatink",
    "nameJa": "カヌチャン",
    "nameEn": "Tinkatink",
    "imagePath": "pokemon-icons/tinkatink.png",
    "types": [
      "fairy",
      "steel"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 45,
      "defense": 45,
      "specialAttack": 35,
      "specialDefense": 64,
      "speed": 58,
      "total": 297
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 958,
    "slug": "tinkatuff",
    "speciesKey": "tinkatuff",
    "nameJa": "ナカヌチャン",
    "nameEn": "Tinkatuff",
    "imagePath": "pokemon-icons/tinkatuff.png",
    "types": [
      "fairy",
      "steel"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 55,
      "defense": 55,
      "specialAttack": 45,
      "specialDefense": 82,
      "speed": 78,
      "total": 380
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 959,
    "slug": "tinkaton",
    "speciesKey": "tinkaton",
    "nameJa": "デカヌチャン",
    "nameEn": "Tinkaton",
    "imagePath": "pokemon-icons/tinkaton.png",
    "types": [
      "fairy",
      "steel"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 75,
      "defense": 77,
      "specialAttack": 70,
      "specialDefense": 105,
      "speed": 94,
      "total": 506
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 960,
    "slug": "wiglett",
    "speciesKey": "wiglett",
    "nameJa": "ウミディグダ",
    "nameEn": "Wiglett",
    "imagePath": "pokemon-icons/wiglett.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 10,
      "attack": 55,
      "defense": 25,
      "specialAttack": 35,
      "specialDefense": 25,
      "speed": 95,
      "total": 245
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 961,
    "slug": "wugtrio",
    "speciesKey": "wugtrio",
    "nameJa": "ウミトリオ",
    "nameEn": "Wugtrio",
    "imagePath": "pokemon-icons/wugtrio.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 100,
      "defense": 50,
      "specialAttack": 50,
      "specialDefense": 70,
      "speed": 120,
      "total": 425
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 962,
    "slug": "bombirdier",
    "speciesKey": "bombirdier",
    "nameJa": "オトシドリ",
    "nameEn": "Bombirdier",
    "imagePath": "pokemon-icons/bombirdier.png",
    "types": [
      "flying",
      "dark"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 103,
      "defense": 85,
      "specialAttack": 60,
      "specialDefense": 85,
      "speed": 82,
      "total": 485
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 963,
    "slug": "finizen",
    "speciesKey": "finizen",
    "nameJa": "ナミイルカ",
    "nameEn": "Finizen",
    "imagePath": "pokemon-icons/finizen.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 45,
      "defense": 40,
      "specialAttack": 45,
      "specialDefense": 40,
      "speed": 75,
      "total": 315
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 964,
    "slug": "palafin-zero",
    "speciesKey": "palafin",
    "nameJa": "イルカマン（ナイーブフォルム）",
    "nameEn": "Zero Form Palafin",
    "imagePath": "pokemon-icons/palafin-zero.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 70,
      "defense": 72,
      "specialAttack": 53,
      "specialDefense": 62,
      "speed": 100,
      "total": 457
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 10256,
    "slug": "palafin-hero",
    "speciesKey": "palafin",
    "nameJa": "イルカマン（マイティフォルム）",
    "nameEn": "Hero Form Palafin",
    "imagePath": "pokemon-icons/palafin-hero.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 160,
      "defense": 97,
      "specialAttack": 106,
      "specialDefense": 87,
      "speed": 100,
      "total": 650
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": false
  },
  {
    "id": 965,
    "slug": "varoom",
    "speciesKey": "varoom",
    "nameJa": "ブロロン",
    "nameEn": "Varoom",
    "imagePath": "pokemon-icons/varoom.png",
    "types": [
      "steel",
      "poison"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 70,
      "defense": 63,
      "specialAttack": 30,
      "specialDefense": 45,
      "speed": 47,
      "total": 300
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 966,
    "slug": "revavroom",
    "speciesKey": "revavroom",
    "nameJa": "ブロロローム",
    "nameEn": "Revavroom",
    "imagePath": "pokemon-icons/revavroom.png",
    "types": [
      "steel",
      "poison"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 119,
      "defense": 90,
      "specialAttack": 54,
      "specialDefense": 67,
      "speed": 90,
      "total": 500
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 967,
    "slug": "cyclizar",
    "speciesKey": "cyclizar",
    "nameJa": "モトトカゲ",
    "nameEn": "Cyclizar",
    "imagePath": "pokemon-icons/cyclizar.png",
    "types": [
      "dragon",
      "normal"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 95,
      "defense": 65,
      "specialAttack": 85,
      "specialDefense": 65,
      "speed": 121,
      "total": 501
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 968,
    "slug": "orthworm",
    "speciesKey": "orthworm",
    "nameJa": "ミミズズ",
    "nameEn": "Orthworm",
    "imagePath": "pokemon-icons/orthworm.png",
    "types": [
      "steel"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 85,
      "defense": 145,
      "specialAttack": 60,
      "specialDefense": 55,
      "speed": 65,
      "total": 480
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 969,
    "slug": "glimmet",
    "speciesKey": "glimmet",
    "nameJa": "キラーメ",
    "nameEn": "Glimmet",
    "imagePath": "pokemon-icons/glimmet.png",
    "types": [
      "rock",
      "poison"
    ],
    "baseStats": {
      "hp": 48,
      "attack": 35,
      "defense": 42,
      "specialAttack": 105,
      "specialDefense": 60,
      "speed": 60,
      "total": 350
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 970,
    "slug": "glimmora",
    "speciesKey": "glimmora",
    "nameJa": "キラフロル",
    "nameEn": "Glimmora",
    "imagePath": "pokemon-icons/glimmora.png",
    "types": [
      "rock",
      "poison"
    ],
    "baseStats": {
      "hp": 83,
      "attack": 55,
      "defense": 90,
      "specialAttack": 130,
      "specialDefense": 81,
      "speed": 86,
      "total": 525
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 10321,
    "slug": "glimmora-mega",
    "speciesKey": "glimmora",
    "nameJa": "メガキラフロル",
    "nameEn": "Mega Glimmora",
    "imagePath": "pokemon-icons/glimmora-mega.png",
    "types": [
      "rock",
      "poison"
    ],
    "baseStats": {
      "hp": 83,
      "attack": 90,
      "defense": 105,
      "specialAttack": 150,
      "specialDefense": 96,
      "speed": 101,
      "total": 625
    },
    "generation": 9,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 971,
    "slug": "greavard",
    "speciesKey": "greavard",
    "nameJa": "ボチ",
    "nameEn": "Greavard",
    "imagePath": "pokemon-icons/greavard.png",
    "types": [
      "ghost"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 61,
      "defense": 60,
      "specialAttack": 30,
      "specialDefense": 55,
      "speed": 34,
      "total": 290
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 972,
    "slug": "houndstone",
    "speciesKey": "houndstone",
    "nameJa": "ハカドッグ",
    "nameEn": "Houndstone",
    "imagePath": "pokemon-icons/houndstone.png",
    "types": [
      "ghost"
    ],
    "baseStats": {
      "hp": 72,
      "attack": 101,
      "defense": 100,
      "specialAttack": 50,
      "specialDefense": 97,
      "speed": 68,
      "total": 488
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 973,
    "slug": "flamigo",
    "speciesKey": "flamigo",
    "nameJa": "カラミンゴ",
    "nameEn": "Flamigo",
    "imagePath": "pokemon-icons/flamigo.png",
    "types": [
      "flying",
      "fighting"
    ],
    "baseStats": {
      "hp": 82,
      "attack": 115,
      "defense": 74,
      "specialAttack": 75,
      "specialDefense": 64,
      "speed": 90,
      "total": 500
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 974,
    "slug": "cetoddle",
    "speciesKey": "cetoddle",
    "nameJa": "アルクジラ",
    "nameEn": "Cetoddle",
    "imagePath": "pokemon-icons/cetoddle.png",
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 108,
      "attack": 68,
      "defense": 45,
      "specialAttack": 30,
      "specialDefense": 40,
      "speed": 43,
      "total": 334
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 975,
    "slug": "cetitan",
    "speciesKey": "cetitan",
    "nameJa": "ハルクジラ",
    "nameEn": "Cetitan",
    "imagePath": "pokemon-icons/cetitan.png",
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 170,
      "attack": 113,
      "defense": 65,
      "specialAttack": 45,
      "specialDefense": 55,
      "speed": 73,
      "total": 521
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 976,
    "slug": "veluza",
    "speciesKey": "veluza",
    "nameJa": "ミガルーサ",
    "nameEn": "Veluza",
    "imagePath": "pokemon-icons/veluza.png",
    "types": [
      "water",
      "psychic"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 102,
      "defense": 73,
      "specialAttack": 78,
      "specialDefense": 65,
      "speed": 70,
      "total": 478
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 977,
    "slug": "dondozo",
    "speciesKey": "dondozo",
    "nameJa": "ヘイラッシャ",
    "nameEn": "Dondozo",
    "imagePath": "pokemon-icons/dondozo.png",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 150,
      "attack": 100,
      "defense": 115,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 35,
      "total": 530
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 978,
    "slug": "tatsugiri-curly",
    "speciesKey": "tatsugiri",
    "nameJa": "シャリタツ（そったすがた）",
    "nameEn": "Curly Form Tatsugiri",
    "imagePath": "pokemon-icons/tatsugiri-curly.png",
    "types": [
      "dragon",
      "water"
    ],
    "baseStats": {
      "hp": 68,
      "attack": 50,
      "defense": 60,
      "specialAttack": 120,
      "specialDefense": 95,
      "speed": 82,
      "total": 475
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 10258,
    "slug": "tatsugiri-droopy",
    "speciesKey": "tatsugiri",
    "nameJa": "シャリタツ（たれたすがた）",
    "nameEn": "Droopy Form Tatsugiri",
    "imagePath": "pokemon-icons/tatsugiri-droopy.png",
    "types": [
      "dragon",
      "water"
    ],
    "baseStats": {
      "hp": 68,
      "attack": 50,
      "defense": 60,
      "specialAttack": 120,
      "specialDefense": 95,
      "speed": 82,
      "total": 475
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": false
  },
  {
    "id": 10259,
    "slug": "tatsugiri-stretchy",
    "speciesKey": "tatsugiri",
    "nameJa": "シャリタツ（のびたすがた）",
    "nameEn": "Stretchy Form Tatsugiri",
    "imagePath": "pokemon-icons/tatsugiri-stretchy.png",
    "types": [
      "dragon",
      "water"
    ],
    "baseStats": {
      "hp": 68,
      "attack": 50,
      "defense": 60,
      "specialAttack": 120,
      "specialDefense": 95,
      "speed": 82,
      "total": 475
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": false
  },
  {
    "id": 10322,
    "slug": "tatsugiri-curly-mega",
    "speciesKey": "tatsugiri",
    "nameJa": "メガシャリタツ",
    "nameEn": "Mega Curly Tatsugiri",
    "imagePath": "pokemon-icons/tatsugiri-curly-mega.png",
    "types": [
      "dragon",
      "water"
    ],
    "baseStats": {
      "hp": 68,
      "attack": 65,
      "defense": 90,
      "specialAttack": 135,
      "specialDefense": 125,
      "speed": 92,
      "total": 575
    },
    "generation": 9,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 10323,
    "slug": "tatsugiri-droopy-mega",
    "speciesKey": "tatsugiri",
    "nameJa": "メガシャリタツ",
    "nameEn": "Mega Droopy Tatsugiri",
    "imagePath": "pokemon-icons/tatsugiri-droopy-mega.png",
    "types": [
      "dragon",
      "water"
    ],
    "baseStats": {
      "hp": 68,
      "attack": 65,
      "defense": 90,
      "specialAttack": 135,
      "specialDefense": 125,
      "speed": 92,
      "total": 575
    },
    "generation": 9,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 10324,
    "slug": "tatsugiri-stretchy-mega",
    "speciesKey": "tatsugiri",
    "nameJa": "メガシャリタツ",
    "nameEn": "Mega Stretchy Tatsugiri",
    "imagePath": "pokemon-icons/tatsugiri-stretchy-mega.png",
    "types": [
      "dragon",
      "water"
    ],
    "baseStats": {
      "hp": 68,
      "attack": 65,
      "defense": 90,
      "specialAttack": 135,
      "specialDefense": 125,
      "speed": 92,
      "total": 575
    },
    "generation": 9,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 979,
    "slug": "annihilape",
    "speciesKey": "annihilape",
    "nameJa": "コノヨザル",
    "nameEn": "Annihilape",
    "imagePath": "pokemon-icons/annihilape.png",
    "types": [
      "fighting",
      "ghost"
    ],
    "baseStats": {
      "hp": 110,
      "attack": 115,
      "defense": 80,
      "specialAttack": 50,
      "specialDefense": 90,
      "speed": 90,
      "total": 535
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 980,
    "slug": "clodsire",
    "speciesKey": "clodsire",
    "nameJa": "ドオー",
    "nameEn": "Clodsire",
    "imagePath": "pokemon-icons/clodsire.png",
    "types": [
      "poison",
      "ground"
    ],
    "baseStats": {
      "hp": 130,
      "attack": 75,
      "defense": 60,
      "specialAttack": 45,
      "specialDefense": 100,
      "speed": 20,
      "total": 430
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 981,
    "slug": "farigiraf",
    "speciesKey": "farigiraf",
    "nameJa": "リキキリン",
    "nameEn": "Farigiraf",
    "imagePath": "pokemon-icons/farigiraf.png",
    "types": [
      "normal",
      "psychic"
    ],
    "baseStats": {
      "hp": 120,
      "attack": 90,
      "defense": 70,
      "specialAttack": 110,
      "specialDefense": 70,
      "speed": 60,
      "total": 520
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 982,
    "slug": "dudunsparce-two-segment",
    "speciesKey": "dudunsparce",
    "nameJa": "ノココッチ（ふたふしフォルム）",
    "nameEn": "Two-Segment Form Dudunsparce",
    "imagePath": "pokemon-icons/dudunsparce-two-segment.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 125,
      "attack": 100,
      "defense": 80,
      "specialAttack": 85,
      "specialDefense": 75,
      "speed": 55,
      "total": 520
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 10255,
    "slug": "dudunsparce-three-segment",
    "speciesKey": "dudunsparce",
    "nameJa": "ノココッチ（みつふしフォルム）",
    "nameEn": "Three-Segment Form Dudunsparce",
    "imagePath": "pokemon-icons/dudunsparce-three-segment.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 125,
      "attack": 100,
      "defense": 80,
      "specialAttack": 85,
      "specialDefense": 75,
      "speed": 55,
      "total": 520
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": false
  },
  {
    "id": 983,
    "slug": "kingambit",
    "speciesKey": "kingambit",
    "nameJa": "ドドゲザン",
    "nameEn": "Kingambit",
    "imagePath": "pokemon-icons/kingambit.png",
    "types": [
      "dark",
      "steel"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 135,
      "defense": 120,
      "specialAttack": 60,
      "specialDefense": 85,
      "speed": 50,
      "total": 550
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 984,
    "slug": "great-tusk",
    "speciesKey": "great-tusk",
    "nameJa": "イダイナキバ",
    "nameEn": "Great Tusk",
    "imagePath": "pokemon-icons/great-tusk.png",
    "types": [
      "ground",
      "fighting"
    ],
    "baseStats": {
      "hp": 115,
      "attack": 131,
      "defense": 131,
      "specialAttack": 53,
      "specialDefense": 53,
      "speed": 87,
      "total": 570
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 985,
    "slug": "scream-tail",
    "speciesKey": "scream-tail",
    "nameJa": "サケブシッポ",
    "nameEn": "Scream Tail",
    "imagePath": "pokemon-icons/scream-tail.png",
    "types": [
      "fairy",
      "psychic"
    ],
    "baseStats": {
      "hp": 115,
      "attack": 65,
      "defense": 99,
      "specialAttack": 65,
      "specialDefense": 115,
      "speed": 111,
      "total": 570
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 986,
    "slug": "brute-bonnet",
    "speciesKey": "brute-bonnet",
    "nameJa": "アラブルタケ",
    "nameEn": "Brute Bonnet",
    "imagePath": "pokemon-icons/brute-bonnet.png",
    "types": [
      "grass",
      "dark"
    ],
    "baseStats": {
      "hp": 111,
      "attack": 127,
      "defense": 99,
      "specialAttack": 79,
      "specialDefense": 99,
      "speed": 55,
      "total": 570
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 987,
    "slug": "flutter-mane",
    "speciesKey": "flutter-mane",
    "nameJa": "ハバタクカミ",
    "nameEn": "Flutter Mane",
    "imagePath": "pokemon-icons/flutter-mane.png",
    "types": [
      "ghost",
      "fairy"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 55,
      "defense": 55,
      "specialAttack": 135,
      "specialDefense": 135,
      "speed": 135,
      "total": 570
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 988,
    "slug": "slither-wing",
    "speciesKey": "slither-wing",
    "nameJa": "チヲハウハネ",
    "nameEn": "Slither Wing",
    "imagePath": "pokemon-icons/slither-wing.png",
    "types": [
      "bug",
      "fighting"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 135,
      "defense": 79,
      "specialAttack": 85,
      "specialDefense": 105,
      "speed": 81,
      "total": 570
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 989,
    "slug": "sandy-shocks",
    "speciesKey": "sandy-shocks",
    "nameJa": "スナノケガワ",
    "nameEn": "Sandy Shocks",
    "imagePath": "pokemon-icons/sandy-shocks.png",
    "types": [
      "electric",
      "ground"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 81,
      "defense": 97,
      "specialAttack": 121,
      "specialDefense": 85,
      "speed": 101,
      "total": 570
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 990,
    "slug": "iron-treads",
    "speciesKey": "iron-treads",
    "nameJa": "テツノワダチ",
    "nameEn": "Iron Treads",
    "imagePath": "pokemon-icons/iron-treads.png",
    "types": [
      "ground",
      "steel"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 112,
      "defense": 120,
      "specialAttack": 72,
      "specialDefense": 70,
      "speed": 106,
      "total": 570
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 991,
    "slug": "iron-bundle",
    "speciesKey": "iron-bundle",
    "nameJa": "テツノツツミ",
    "nameEn": "Iron Bundle",
    "imagePath": "pokemon-icons/iron-bundle.png",
    "types": [
      "ice",
      "water"
    ],
    "baseStats": {
      "hp": 56,
      "attack": 80,
      "defense": 114,
      "specialAttack": 124,
      "specialDefense": 60,
      "speed": 136,
      "total": 570
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 992,
    "slug": "iron-hands",
    "speciesKey": "iron-hands",
    "nameJa": "テツノカイナ",
    "nameEn": "Iron Hands",
    "imagePath": "pokemon-icons/iron-hands.png",
    "types": [
      "fighting",
      "electric"
    ],
    "baseStats": {
      "hp": 154,
      "attack": 140,
      "defense": 108,
      "specialAttack": 50,
      "specialDefense": 68,
      "speed": 50,
      "total": 570
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 993,
    "slug": "iron-jugulis",
    "speciesKey": "iron-jugulis",
    "nameJa": "テツノコウベ",
    "nameEn": "Iron Jugulis",
    "imagePath": "pokemon-icons/iron-jugulis.png",
    "types": [
      "dark",
      "flying"
    ],
    "baseStats": {
      "hp": 94,
      "attack": 80,
      "defense": 86,
      "specialAttack": 122,
      "specialDefense": 80,
      "speed": 108,
      "total": 570
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 994,
    "slug": "iron-moth",
    "speciesKey": "iron-moth",
    "nameJa": "テツノドクガ",
    "nameEn": "Iron Moth",
    "imagePath": "pokemon-icons/iron-moth.png",
    "types": [
      "fire",
      "poison"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 70,
      "defense": 60,
      "specialAttack": 140,
      "specialDefense": 110,
      "speed": 110,
      "total": 570
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 995,
    "slug": "iron-thorns",
    "speciesKey": "iron-thorns",
    "nameJa": "テツノイバラ",
    "nameEn": "Iron Thorns",
    "imagePath": "pokemon-icons/iron-thorns.png",
    "types": [
      "rock",
      "electric"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 134,
      "defense": 110,
      "specialAttack": 70,
      "specialDefense": 84,
      "speed": 72,
      "total": 570
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 996,
    "slug": "frigibax",
    "speciesKey": "frigibax",
    "nameJa": "セビエ",
    "nameEn": "Frigibax",
    "imagePath": "pokemon-icons/frigibax.png",
    "types": [
      "dragon",
      "ice"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 75,
      "defense": 45,
      "specialAttack": 35,
      "specialDefense": 45,
      "speed": 55,
      "total": 320
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 997,
    "slug": "arctibax",
    "speciesKey": "arctibax",
    "nameJa": "セゴール",
    "nameEn": "Arctibax",
    "imagePath": "pokemon-icons/arctibax.png",
    "types": [
      "dragon",
      "ice"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 95,
      "defense": 66,
      "specialAttack": 45,
      "specialDefense": 65,
      "speed": 62,
      "total": 423
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 998,
    "slug": "baxcalibur",
    "speciesKey": "baxcalibur",
    "nameJa": "セグレイブ",
    "nameEn": "Baxcalibur",
    "imagePath": "pokemon-icons/baxcalibur.png",
    "types": [
      "dragon",
      "ice"
    ],
    "baseStats": {
      "hp": 115,
      "attack": 145,
      "defense": 92,
      "specialAttack": 75,
      "specialDefense": 86,
      "speed": 87,
      "total": 600
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 10325,
    "slug": "baxcalibur-mega",
    "speciesKey": "baxcalibur",
    "nameJa": "メガセグレイブ",
    "nameEn": "Mega Baxcalibur",
    "imagePath": "pokemon-icons/baxcalibur-mega.png",
    "types": [
      "dragon",
      "ice"
    ],
    "baseStats": {
      "hp": 115,
      "attack": 175,
      "defense": 117,
      "specialAttack": 105,
      "specialDefense": 101,
      "speed": 87,
      "total": 700
    },
    "generation": 9,
    "debutTitle": "Mega Dimension",
    "isDefault": false
  },
  {
    "id": 999,
    "slug": "gimmighoul",
    "speciesKey": "gimmighoul",
    "nameJa": "コレクレー（はこフォルム）",
    "nameEn": "Chest Form Gimmighoul",
    "imagePath": "pokemon-icons/gimmighoul.png",
    "types": [
      "ghost"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 30,
      "defense": 70,
      "specialAttack": 75,
      "specialDefense": 70,
      "speed": 10,
      "total": 300
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 10263,
    "slug": "gimmighoul-roaming",
    "speciesKey": "gimmighoul",
    "nameJa": "コレクレー（とほフォルム）",
    "nameEn": "Roaming Form Gimmighoul",
    "imagePath": "pokemon-icons/gimmighoul-roaming.png",
    "types": [
      "ghost"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 30,
      "defense": 25,
      "specialAttack": 75,
      "specialDefense": 45,
      "speed": 80,
      "total": 300
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": false
  },
  {
    "id": 1000,
    "slug": "gholdengo",
    "speciesKey": "gholdengo",
    "nameJa": "サーフゴー",
    "nameEn": "Gholdengo",
    "imagePath": "pokemon-icons/gholdengo.png",
    "types": [
      "steel",
      "ghost"
    ],
    "baseStats": {
      "hp": 87,
      "attack": 60,
      "defense": 95,
      "specialAttack": 133,
      "specialDefense": 91,
      "speed": 84,
      "total": 550
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 1001,
    "slug": "wo-chien",
    "speciesKey": "wo-chien",
    "nameJa": "チオンジェン",
    "nameEn": "Wo-Chien",
    "imagePath": "pokemon-icons/wo-chien.png",
    "types": [
      "dark",
      "grass"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 85,
      "defense": 100,
      "specialAttack": 95,
      "specialDefense": 135,
      "speed": 70,
      "total": 570
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 1002,
    "slug": "chien-pao",
    "speciesKey": "chien-pao",
    "nameJa": "パオジアン",
    "nameEn": "Chien-Pao",
    "imagePath": "pokemon-icons/chien-pao.png",
    "types": [
      "dark",
      "ice"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 120,
      "defense": 80,
      "specialAttack": 90,
      "specialDefense": 65,
      "speed": 135,
      "total": 570
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 1003,
    "slug": "ting-lu",
    "speciesKey": "ting-lu",
    "nameJa": "ディンルー",
    "nameEn": "Ting-Lu",
    "imagePath": "pokemon-icons/ting-lu.png",
    "types": [
      "dark",
      "ground"
    ],
    "baseStats": {
      "hp": 155,
      "attack": 110,
      "defense": 125,
      "specialAttack": 55,
      "specialDefense": 80,
      "speed": 45,
      "total": 570
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 1004,
    "slug": "chi-yu",
    "speciesKey": "chi-yu",
    "nameJa": "イーユイ",
    "nameEn": "Chi-Yu",
    "imagePath": "pokemon-icons/chi-yu.png",
    "types": [
      "dark",
      "fire"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 80,
      "defense": 80,
      "specialAttack": 135,
      "specialDefense": 120,
      "speed": 100,
      "total": 570
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 1005,
    "slug": "roaring-moon",
    "speciesKey": "roaring-moon",
    "nameJa": "トドロクツキ",
    "nameEn": "Roaring Moon",
    "imagePath": "pokemon-icons/roaring-moon.png",
    "types": [
      "dragon",
      "dark"
    ],
    "baseStats": {
      "hp": 105,
      "attack": 139,
      "defense": 71,
      "specialAttack": 55,
      "specialDefense": 101,
      "speed": 119,
      "total": 590
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 1006,
    "slug": "iron-valiant",
    "speciesKey": "iron-valiant",
    "nameJa": "テツノブジン",
    "nameEn": "Iron Valiant",
    "imagePath": "pokemon-icons/iron-valiant.png",
    "types": [
      "fairy",
      "fighting"
    ],
    "baseStats": {
      "hp": 74,
      "attack": 130,
      "defense": 90,
      "specialAttack": 120,
      "specialDefense": 60,
      "speed": 116,
      "total": 590
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 1007,
    "slug": "koraidon",
    "speciesKey": "koraidon",
    "nameJa": "コライドン（かんぜんけいたい）",
    "nameEn": "Koraidon (Apex Build)",
    "imagePath": "pokemon-icons/koraidon.png",
    "types": [
      "fighting",
      "dragon"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 135,
      "defense": 115,
      "specialAttack": 85,
      "specialDefense": 100,
      "speed": 135,
      "total": 670
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 1008,
    "slug": "miraidon",
    "speciesKey": "miraidon",
    "nameJa": "ミライドン（コンプリートモード）",
    "nameEn": "Miraidon (Ultimate Mode)",
    "imagePath": "pokemon-icons/miraidon.png",
    "types": [
      "electric",
      "dragon"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 85,
      "defense": 100,
      "specialAttack": 135,
      "specialDefense": 115,
      "speed": 135,
      "total": 670
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 1009,
    "slug": "walking-wake",
    "speciesKey": "walking-wake",
    "nameJa": "ウネルミナモ",
    "nameEn": "Walking Wake",
    "imagePath": "pokemon-icons/walking-wake.png",
    "types": [
      "water",
      "dragon"
    ],
    "baseStats": {
      "hp": 99,
      "attack": 83,
      "defense": 91,
      "specialAttack": 125,
      "specialDefense": 83,
      "speed": 109,
      "total": 590
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 1010,
    "slug": "iron-leaves",
    "speciesKey": "iron-leaves",
    "nameJa": "テツノイサハ",
    "nameEn": "Iron Leaves",
    "imagePath": "pokemon-icons/iron-leaves.png",
    "types": [
      "grass",
      "psychic"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 130,
      "defense": 88,
      "specialAttack": 70,
      "specialDefense": 108,
      "speed": 104,
      "total": 590
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 1011,
    "slug": "dipplin",
    "speciesKey": "dipplin",
    "nameJa": "カミッチュ",
    "nameEn": "Dipplin",
    "imagePath": "pokemon-icons/dipplin.png",
    "types": [
      "grass",
      "dragon"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 80,
      "defense": 110,
      "specialAttack": 95,
      "specialDefense": 80,
      "speed": 40,
      "total": 485
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 1012,
    "slug": "poltchageist",
    "speciesKey": "poltchageist",
    "nameJa": "チャデス（マガイモノのすがた）",
    "nameEn": "Counterfeit Form Poltchageist",
    "imagePath": "pokemon-icons/poltchageist.png",
    "types": [
      "grass",
      "ghost"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 45,
      "defense": 45,
      "specialAttack": 74,
      "specialDefense": 54,
      "speed": 50,
      "total": 308
    },
    "generation": 9,
    "debutTitle": "The Teal Mask",
    "isDefault": true
  },
  {
    "id": 1013,
    "slug": "sinistcha",
    "speciesKey": "sinistcha",
    "nameJa": "ヤバソチャ（ボンサクのすがた）",
    "nameEn": "Unremarkable Form Sinistcha",
    "imagePath": "pokemon-icons/sinistcha.png",
    "types": [
      "grass",
      "ghost"
    ],
    "baseStats": {
      "hp": 71,
      "attack": 60,
      "defense": 106,
      "specialAttack": 121,
      "specialDefense": 80,
      "speed": 70,
      "total": 508
    },
    "generation": 9,
    "debutTitle": "The Teal Mask",
    "isDefault": true
  },
  {
    "id": 1014,
    "slug": "okidogi",
    "speciesKey": "okidogi",
    "nameJa": "イイネイヌ",
    "nameEn": "Okidogi",
    "imagePath": "pokemon-icons/okidogi.png",
    "types": [
      "poison",
      "fighting"
    ],
    "baseStats": {
      "hp": 88,
      "attack": 128,
      "defense": 115,
      "specialAttack": 58,
      "specialDefense": 86,
      "speed": 80,
      "total": 555
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 1015,
    "slug": "munkidori",
    "speciesKey": "munkidori",
    "nameJa": "マシマシラ",
    "nameEn": "Munkidori",
    "imagePath": "pokemon-icons/munkidori.png",
    "types": [
      "poison",
      "psychic"
    ],
    "baseStats": {
      "hp": 88,
      "attack": 75,
      "defense": 66,
      "specialAttack": 130,
      "specialDefense": 90,
      "speed": 106,
      "total": 555
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 1016,
    "slug": "fezandipiti",
    "speciesKey": "fezandipiti",
    "nameJa": "キチキギス",
    "nameEn": "Fezandipiti",
    "imagePath": "pokemon-icons/fezandipiti.png",
    "types": [
      "poison",
      "fairy"
    ],
    "baseStats": {
      "hp": 88,
      "attack": 91,
      "defense": 82,
      "specialAttack": 70,
      "specialDefense": 125,
      "speed": 99,
      "total": 555
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 1017,
    "slug": "ogerpon",
    "speciesKey": "ogerpon",
    "nameJa": "オーガポン",
    "nameEn": "Ogerpon",
    "imagePath": "pokemon-icons/ogerpon.png",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 120,
      "defense": 84,
      "specialAttack": 60,
      "specialDefense": 96,
      "speed": 110,
      "total": 550
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 10273,
    "slug": "ogerpon-wellspring-mask",
    "speciesKey": "ogerpon",
    "nameJa": "オーガポン（いどのめん）",
    "nameEn": "Wellspring Mask Ogerpon",
    "imagePath": "pokemon-icons/ogerpon-wellspring-mask.png",
    "types": [
      "grass",
      "water"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 120,
      "defense": 84,
      "specialAttack": 60,
      "specialDefense": 96,
      "speed": 110,
      "total": 550
    },
    "generation": 9,
    "debutTitle": "The Teal Mask",
    "isDefault": false
  },
  {
    "id": 10274,
    "slug": "ogerpon-hearthflame-mask",
    "speciesKey": "ogerpon",
    "nameJa": "オーガポン（かまどのめん）",
    "nameEn": "Hearthflame Mask Ogerpon",
    "imagePath": "pokemon-icons/ogerpon-hearthflame-mask.png",
    "types": [
      "grass",
      "fire"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 120,
      "defense": 84,
      "specialAttack": 60,
      "specialDefense": 96,
      "speed": 110,
      "total": 550
    },
    "generation": 9,
    "debutTitle": "The Teal Mask",
    "isDefault": false
  },
  {
    "id": 10275,
    "slug": "ogerpon-cornerstone-mask",
    "speciesKey": "ogerpon",
    "nameJa": "オーガポン（いしずえのめん）",
    "nameEn": "Cornerstone Mask Ogerpon",
    "imagePath": "pokemon-icons/ogerpon-cornerstone-mask.png",
    "types": [
      "grass",
      "rock"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 120,
      "defense": 84,
      "specialAttack": 60,
      "specialDefense": 96,
      "speed": 110,
      "total": 550
    },
    "generation": 9,
    "debutTitle": "The Teal Mask",
    "isDefault": false
  },
  {
    "id": 1018,
    "slug": "archaludon",
    "speciesKey": "archaludon",
    "nameJa": "ブリジュラス",
    "nameEn": "Archaludon",
    "imagePath": "pokemon-icons/archaludon.png",
    "types": [
      "steel",
      "dragon"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 105,
      "defense": 130,
      "specialAttack": 125,
      "specialDefense": 65,
      "speed": 85,
      "total": 600
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 1019,
    "slug": "hydrapple",
    "speciesKey": "hydrapple",
    "nameJa": "カミツオロチ",
    "nameEn": "Hydrapple",
    "imagePath": "pokemon-icons/hydrapple.png",
    "types": [
      "grass",
      "dragon"
    ],
    "baseStats": {
      "hp": 106,
      "attack": 80,
      "defense": 110,
      "specialAttack": 120,
      "specialDefense": 80,
      "speed": 44,
      "total": 540
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 1020,
    "slug": "gouging-fire",
    "speciesKey": "gouging-fire",
    "nameJa": "ウガツホムラ",
    "nameEn": "Gouging Fire",
    "imagePath": "pokemon-icons/gouging-fire.png",
    "types": [
      "fire",
      "dragon"
    ],
    "baseStats": {
      "hp": 105,
      "attack": 115,
      "defense": 121,
      "specialAttack": 65,
      "specialDefense": 93,
      "speed": 91,
      "total": 590
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 1021,
    "slug": "raging-bolt",
    "speciesKey": "raging-bolt",
    "nameJa": "タケルライコ",
    "nameEn": "Raging Bolt",
    "imagePath": "pokemon-icons/raging-bolt.png",
    "types": [
      "electric",
      "dragon"
    ],
    "baseStats": {
      "hp": 125,
      "attack": 73,
      "defense": 91,
      "specialAttack": 137,
      "specialDefense": 89,
      "speed": 75,
      "total": 590
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 1022,
    "slug": "iron-boulder",
    "speciesKey": "iron-boulder",
    "nameJa": "テツノイワオ",
    "nameEn": "Iron Boulder",
    "imagePath": "pokemon-icons/iron-boulder.png",
    "types": [
      "rock",
      "psychic"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 120,
      "defense": 80,
      "specialAttack": 68,
      "specialDefense": 108,
      "speed": 124,
      "total": 590
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 1023,
    "slug": "iron-crown",
    "speciesKey": "iron-crown",
    "nameJa": "テツノカシラ",
    "nameEn": "Iron Crown",
    "imagePath": "pokemon-icons/iron-crown.png",
    "types": [
      "steel",
      "psychic"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 72,
      "defense": 100,
      "specialAttack": 122,
      "specialDefense": 108,
      "speed": 98,
      "total": 590
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 1024,
    "slug": "terapagos",
    "speciesKey": "terapagos",
    "nameJa": "テラパゴス",
    "nameEn": "Terapagos",
    "imagePath": "pokemon-icons/terapagos.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 65,
      "defense": 85,
      "specialAttack": 65,
      "specialDefense": 85,
      "speed": 60,
      "total": 450
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  },
  {
    "id": 10276,
    "slug": "terapagos-terastal",
    "speciesKey": "terapagos",
    "nameJa": "テラパゴス（テラスタルフォルム）",
    "nameEn": "Terastal Form Terapagos",
    "imagePath": "pokemon-icons/terapagos-terastal.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 95,
      "defense": 110,
      "specialAttack": 105,
      "specialDefense": 110,
      "speed": 85,
      "total": 600
    },
    "generation": 9,
    "debutTitle": "The Indigo Disk",
    "isDefault": false
  },
  {
    "id": 10277,
    "slug": "terapagos-stellar",
    "speciesKey": "terapagos",
    "nameJa": "テラパゴス（ステラフォルム）",
    "nameEn": "Stellar Form Terapagos",
    "imagePath": "pokemon-icons/terapagos-stellar.png",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 160,
      "attack": 105,
      "defense": 110,
      "specialAttack": 130,
      "specialDefense": 110,
      "speed": 85,
      "total": 700
    },
    "generation": 9,
    "debutTitle": "The Indigo Disk",
    "isDefault": false
  },
  {
    "id": 1025,
    "slug": "pecharunt",
    "speciesKey": "pecharunt",
    "nameJa": "モモワロウ",
    "nameEn": "Pecharunt",
    "imagePath": "pokemon-icons/pecharunt.png",
    "types": [
      "poison",
      "ghost"
    ],
    "baseStats": {
      "hp": 88,
      "attack": 88,
      "defense": 160,
      "specialAttack": 88,
      "specialDefense": 88,
      "speed": 88,
      "total": 600
    },
    "generation": 9,
    "debutTitle": "ポケットモンスター スカーレット・バイオレット",
    "isDefault": true
  }
] satisfies readonly PokemonEntry[]

export const POKEMON_DATA_GENERATED_AT = "2026-04-26T17:33:31.635Z"
