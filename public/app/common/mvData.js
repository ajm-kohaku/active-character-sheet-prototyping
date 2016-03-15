/**
 * Created by Niertis on 3/14/2016.
 */
//todo: make this return from mongoDb
angular.module('app').factory('mvData', function(){
  var myCharacter = {
    generalInfo: {
      characterName: "Syn",
      alignment: "CN",
      playerName: "Amber",
      characterClasses: [
        {
          className: "Sacred Fist",
          value: 16,
          spellList: "cleric",
          baseAttack: 12
        }
      ],
      deity: "Irori",
      homeland: "Somewhere",
      race: "Dhampire",
      creatureType: "humanoid (Dhampir)",
      size: "Medium",
      age: "73",
      gender: "Male",
      height: "5'9\"",
      weight: "157 lbs",
      hair: "Dark blue",
      eyes: "Red"
    },
    abilityScores: {
      strength: [
        {
          type: "baseScore",
          value: 14,
          comment: "none"
        },
        {
          type: "equipment",
          value: 6,
          comment: "from Sacred Fist belt of physical perfection +6"
        }
      ],
      dexterity: [
        {
          type: "baseScore",
          value: 14,
          comment: "none"
        },
        {
          type: "race",
          value: 2,
          comment: "Dhampir racial bonus"
        }
      ],
      constitution: [
        {
          type: "baseScore",
          value: 14,
          comment: "none"
        },
        {
          type: "race",
          value: -2,
          comment: "Dhampir racial bonus (penalty)"
        },
        {
          type: "equipment",
          value: 6,
          comment: "from Sacred Fist belt of physical perfection +6"
        }
      ],
      intelligence: [
        {
          type: "baseScore",
          value: 12,
          comment: "none"
        }
      ],
      wisdom: [
        {
          type: "baseScore",
          value: 16,
          comment: "none"
        },
        {
          type: "level",
          value: 3,
          comment: "added 3 times as level"
        },
        {
          type: "mythic",
          value: 2,
          comment: "1st ability score bump from mythic 2"
        },
        {
          type: "equipment",
          value: 6,
          comment: "from Sacred Fist headband of inspired wisdom +6"
        },
        {
          type: "questionMark",
          value: 1,
          comment: "gm fiat?"
        }
      ],
      charisma: [
        {
          type: "baseScore",
          value: 8,
          comment: "none"
        },
        {
          type: "race",
          value: 2,
          comment: "Dhampir racial bonus"
        }
      ]
    },
    initMods: [
      {
        type: "trait",
        value: 2,
        description: "Reactionary Trait"
      }
    ],
    senses: [
      {
        type: "Low-Light Vision",
        description: ""
      },
      {
        type: "Darkvision 60'",
        description: ""
      }
    ],
    skills: {
      perception: [
        {
          type: "ranks",
          value: 16,
          comment: ""
        },
        {
          type: "race",
          value: 2,
          comment: ""
        },
        {
          type: "classSkill",
          value: 3,
          comment: ""
        }
      ],
      senseMotive: [
        {
          type: "ranks",
          value: 16,
          comment: ""
        },
        {
          type: "trait",
          value: 1,
          comment: ""
        }
      ]
    },
    armorClass: [
      {
        type: "armor",
        value: 8
      },
      {
        type: "natural",
        value: 5
      },
      {
        type: "deflection",
        value: 5
      }
    ],
    defenseStats: {
      hitPoints: 131,
      hitDieType: "d8",
      fortitude: [
        {
          type: "base",
          value: 10,
          comment: ""
        }
      ],
      reflex: [
        {
          type: "base",
          value: 5,
          comment: ""
        }
      ],
      will: [
        {
          type: "base",
          value: 10,
          comment: ""
        }
      ]
    },
    feats: [
      {
        type: "racial",
        name: "Blood Drinker (Dhampir)",
        description: "Choose one humanoid subtype. Whenever you drink fresh blood from the chosen type, gain 5 temporary hit points and +1 bonus on checks and saves based on Constitution. The effects last 1 hour. If you feed multiple times, you can continue to gain hit points to a max of 5 temporary hit points for every 3 HD you have, but the +1 to Con-based skill checks and saves does not stack.\nCan drink as part of a bite attack; drinking blood deals 2 points of Con damage to the creature you feed on. Feeding from unwilling intelligent creatures is an evil act."
      },
      {
        type: "combat",
        name: "Improved Unarmed Strike",
        description: "You are considered to be armed even when unarmed—you do not provoke attacks of opportunity when you attack foes while unarmed. Your unarmed strikes can deal lethal or nonlethal damage, at your choice."
      },
      {
        type: "general",
        name: "Combat Casting",
        description: "You get a +4 bonus on concentration checks made to cast a spell or use a spell-like ability when casting on the defensive or while grappled."
      },
      {
        type: "style",
        name: "Pummeling Style",
        description: "Whenever you use a full-attack action or flurry of blows to make multiple attacks against a single opponent with unarmed strikes, total the damage from all hits before applying damage reduction. This ability works only with unarmed strikes, no matter what other abilities you might possess."
      }
    ],
    traits: [
      {
        type: "combat",
        name: "Reactionary",
        description: "You gain a +2 trait bonus on initiative checks."
      },
      {
        type: "drawback",
        name: "Tainted Spirit",
        description: "At the end of any combat, you must attempt a Fortitude saving throw. The DC is 10 + the number of rounds you acted in combat. If you fail this save, you become fatigued for 10 minutes per round you acted during that encounter."
      },
      {
        type: "religious",
        name: "Desperate Resolve",
        description: "You gain a +1 trait bonus on concentration checks. This trait bonus increases to + 4 when you are grappled, pinned, in violent weather, or entangled."
      },
      {
        type: "campaign",
        name: "Outlander (Missionary)",
        description: "You gain a +1 trait bonus on Knowledge (religion) checks, and Knowledge (religion) is a class skill for you. If you cast divine spells, pick three spells on your spell list. You are particularly adept at casting these spells, so they function at +1 caster level when you cast them, and their save DCs (if any) gain a +1 bonus."
      },
      {
        type: "religious",
        name: "Calistrian Prostitute",
        description: "explaining how a prostitute can help you in social situations"
      }
    ],
    mythicInfo: {
      level: 3,
      mythicPath: "Champion",
      mythicAbilities: [
        {
          abilityName: "Hard to Kill",
          description: ""
        },
        {
          abilityName: "Surge +1d8",
          description: ""
        },
        {
          abilityName: "Amazing Initiative",
          description: ""
        },
        {
          abilityName: "Mythic Power",
          description: ""
        },
        {
          abilityName: "Recuperation",
          description: ""
        }
      ],
      mythicSignatureAbilities: [
        {
          abilityName: "Sudden Attack",
          description: ""
        },
        {
          abilityName: "Inspired Spell",
          description: ""
        }
      ]
    }
  };

  return myCharacter;
});
