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
            },
            {
                type: "class",
                value: 4
            },
            {
                type: "wisdom",
                value: 0
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
            if (value.type === "wisdom") {
                ac += getAbilityMod(wisdom);
            } else {
                ac += value.value;
            }
        });
        return ac + 10;
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
        var combinedString = parts.join(", ");
        return combinedString.substr(0, combinedString.length - 1);
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
        console.log('my extrapoints are: ' + extraPoints);
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
});