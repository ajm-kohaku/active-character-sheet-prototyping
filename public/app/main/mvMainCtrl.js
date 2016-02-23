/**
 * Created by Niertis on 2/21/2016.
 */
angular.module('app').controller('mvMainCtrl', function ($scope) {
    $scope.generalInfo = {
        characterName: "Syn",
        alignment: "CN",
        playerName: "Amber",
        characterClasses: [
            {
                className: "Sacred Fist",
                classLevel: "16"
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
    };

    var abilityScores = {
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
    };

    var mythicInfo = {
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

    };
    var initMods = [
        {
            type: "trait",
            value: 2,
            description: "Reactionary Trait"
        }
    ];

    var senses = [
        {
            type: "Low-Light Vision",
            description: ""
        },
        {
            type: "Darkvision 60'",
            description: ""
        }
    ];

    var skills = {
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
    };

    var armorClass = [
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
    ];
    var strength = getStatTotal(abilityScores.strength);
    var dexterity = getStatTotal(abilityScores.dexterity);
    var constitution = getStatTotal(abilityScores.constitution);
    var intelligence = getStatTotal(abilityScores.intelligence);
    var wisdom = getStatTotal(abilityScores.wisdom);
    var charisma = getStatTotal(abilityScores.charisma);

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
        $.map(armorClass, function(value,index){
            if(value.type === "wisdom"){
                ac += getAbilityMod(wisdom);
            } else {
                ac +=value.value;
            }
        });
        return ac + 10;
    }

    function getTouchAC() {
       var ac = getAC();
        $.map(armorClass, function(value, index){
           if(value.type === "armor") {
               ac -=value.value;
           }
            if(value.type === "shield") {
                ac -=value.value;
            }
            if(value.type === "natural") {
                ac -=value.value;
            }
        });
        return ac;
    }

    function  getFlatFootedAC() {
        var ac = getAC();
        $.map(armorClass, function(value, index){
            if(value.type === "dodge") {
                ac -=value.value;
            }
        });
        return ac-getAbilityMod(dexterity);
    }

    $scope.init = function () {
        var initModSum = 0;
        $.map(initMods, function (value, index) {
            initModSum += value.value;
        });

        if (mythicInfo.level >= 2) {
            return getAbilityMod(dexterity) + initModSum + mythicInfo.level;
        }
        return getAbilityMod(dexterity) + initModSum;
    };

    $scope.sensesString = function() {
        var parts = [];
        $.map(senses,function(value,index){
            parts.push(value.type);
        });
        var combinedString =parts.join(", ");
        return combinedString.substr(0,combinedString.length - 1);
    };

    $scope.perception = function() {
        return getAbilityMod(wisdom)+getStatTotal(skills.perception);
    };

    $scope.ac = function() {
        return getAC();
    };

    $scope.touchAC = function(){
        return getTouchAC();
    };

    $scope.flatFootedAC = function(){
        return getFlatFootedAC();
    };

});