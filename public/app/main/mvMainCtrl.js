/**
 * Created by Niertis on 2/21/2016.
 */
angular.module('app').controller('mvMainCtrl', function ($scope) {
    var character = {
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

    $scope.character = character;
    var strength = getStatTotal(character.abilityScores.strength);
    var dexterity = getStatTotal(character.abilityScores.dexterity);
    var constitution = getStatTotal(character.abilityScores.constitution);
    var intelligence = getStatTotal(character.abilityScores.intelligence);
    var wisdom = getStatTotal(character.abilityScores.wisdom);
    var charisma = getStatTotal(character.abilityScores.charisma);

    //calculates the Ability Score or Skill Total
    function getStatTotal(obj) {
        var scores = obj;
        var sum = 0;
        $.map(scores, function (value, index) {
            sum += value.value;
        });
        return sum;
    }

    function getBaseAttack() {
        var classes = character.generalInfo.characterClasses;
        var sum = 0;
        $.map(classes, function (value, index) {
            sum += value.baseAttack;
        });
        return sum;
    }

    function getAbilityMod() {
        var score = arguments[0];
        var mod = 0;
        if (!isNaN(score)) {
            mod = Math.floor((score - 10) / 2);
        }
        return mod;
    }

    function getAC() {
        var ac = getAbilityMod(dexterity);
        $.map(character.armorClass, function (value, index) {
            ac += value.value;
        });
        $.map(character.generalInfo.characterClasses, function (value, index) {
            if (value.className === "Sacred Fist" || "Monk") {
                // 1/4 Monk/Fist level + Wis Mod
                ac += Math.floor(value.value/4) + getAbilityMod(wisdom);
            }
        });
        var size = getSizeMod();
        return ac + size + 10;
    }

    function getTouchAC() {
        var ac = getAC();
        $.map(character.armorClass, function (value, index) {
            if (value.type === "armor") {
                ac -= value.value;
            }
            if (value.type === "shield") {
                ac -= value.value;
            }
            if (value.type === "natural") {
                ac -= value.value;
            }
        });
        return ac;
    }

    function getFlatFootedAC() {
        var ac = getAC();
        $.map(character.armorClass, function (value, index) {
            if (value.type === "dodge") {
                ac -= value.value;
            }
        });
        return ac - getAbilityMod(dexterity);
    }

    function getFortSave() {
        return getStatTotal(character.defenseStats.fortitude) + getAbilityMod(constitution);
    }

    function getReflexSave() {
        return getStatTotal(character.defenseStats.reflex) + getAbilityMod(dexterity);
    }

    function getWillSave() {
        return getStatTotal(character.defenseStats.will) + getAbilityMod(wisdom);
    }

    function getSizeMod() {
        var size = character.generalInfo.size;
        if (size === "Medium") {
            return 0;
        } else if (size === "Large") {
            return -1;
        } else if (size === "Small") {
            return 1;
        } else {
            return 0;
        }
    }

    function getCmb() {
        var cmb = getBaseAttack() + getAbilityMod(strength) + getSizeMod();
        return cmb;
    }

    function getCmd() {
        var sum = 10 + getBaseAttack() + getAbilityMod(strength) + getAbilityMod(dexterity) + getSizeMod();
        $.map(character.generalInfo.characterClasses, function (value, index) {
            if (value.className === "Sacred Fist" || value.className === "Monk") {
                sum += getAbilityMod(wisdom)+Math.floor(value.value/4);
            }
        });
        return sum;
    }

    function getAbilityList(obj) {
        var parts = [];
        $.map(obj, function(value, index){
            parts.push(value.name);
        });
        return parts.join(", ");
    }

    function getSkillList() {
        var parts = {};
        $.map(character.skills, function(value, index) {
            parts.push(value);
        })
    }

    function splitAndCamelcase(str) {
        str.replace(/^./, function(str){ return str.toUpperCase(); });
        str.replace(/([A-Z])/g, ' $1');
        return str;
    }

    $scope.init = function () {
        var initModSum = 0;
        $.map(character.initMods, function (value, index) {
            initModSum += value.value;
        });

        if (character.mythicInfo.level >= 2) {
            return getAbilityMod(dexterity) + initModSum + character.mythicInfo.level;
        }
        return getAbilityMod(dexterity) + initModSum;
    };

    $scope.sensesString = function () {
        var parts = [];
        $.map(character.senses, function (value, index) {
            parts.push(value.type);
        });
        return parts.join(", ");
    };

    $scope.perception = function () {
        return getAbilityMod(wisdom) + getStatTotal(character.skills.perception);
    };

    $scope.ac = function () {
        return getAC();
    };

    $scope.touchAC = function () {
        return getTouchAC();
    };

    $scope.flatFootedAC = function () {
        return getFlatFootedAC();
    };
    $scope.fortSave = function () {
        return getFortSave();
    };
    $scope.refSave = function () {
        return getReflexSave();
    };
    $scope.willSave = function () {
        return getWillSave();
    };

    $scope.hitDie = function () {
        var generalInfo = this.character.generalInfo;
        var extraPoints = getStatTotal(generalInfo.characterClasses) * getAbilityMod(constitution);
        return character.defenseStats.hitPoints + " (" + getStatTotal(generalInfo.characterClasses) + character.defenseStats.hitDieType + "+" + extraPoints + ")";
    };

    $scope.strength = strength;
    $scope.strMod = function () {
        return getAbilityMod(strength);
    };
    $scope.dexterity = dexterity;
    $scope.dexMod = function () {
        return getAbilityMod(dexterity);
    };
    $scope.constitution = constitution;
    $scope.conMod = function () {
        return getAbilityMod(constitution);
    };
    $scope.intelligence = intelligence;
    $scope.intMod = function () {
        return getAbilityMod(intelligence);
    };
    $scope.wisdom = wisdom;
    $scope.wisMod = function () {
        return getAbilityMod(wisdom);
    };
    $scope.charisma = charisma;
    $scope.chaMod = function () {
        return getAbilityMod(charisma);
    };

    $scope.bab = function () {
        return getBaseAttack();
    };

    $scope.cmb = function () {
        return getCmb();
    };

    $scope.cmd = function () {
        return getCmd();
    };

    $scope.feats = function() {
      return getAbilityList(character.feats)
    };
    $scope.traits = function() {
        return getAbilityList(character.traits)
    };
    $scope.skills = function() {
        return getAbilityList(character.skills)
    }
});