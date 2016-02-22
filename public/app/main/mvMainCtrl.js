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
                classLevel: "15"
            },
            {
                className: "Some Other Class",
                classLevel: "5"
            }
        ],
        deity: "Irori",
        homeland: "Somewhere",
        race: "Dhampire",
        creatureType: "humanoid (Dhampir)",
        size: "Medium",
        age: "22",
        gender: "Male",
        height: "5'9\"",
        weight: "157 lbs",
        hair: "Dark blue",
        eyes: "Red"
    };

    var abilityScores = {
        "strength": [
            {
                "type": "baseScore",
                "value": "14",
                "comment": "none"
            },
            {
                "type": "equipment",
                "value": "6",
                "comment": "from Sacred Fist belt of physical perfection +6"
            }
        ],
        "dexterity": [
            {
                "type": "baseScore",
                "value": 14,
                "comment": "none"
            },
            {
                "type": "race",
                "value": 2,
                "comment": "Dhampir racial bonus"
            }
        ],
        "constitution": [
            {
                "type": "baseScore",
                "value": "14",
                "comment": "none"
            },
            {
                "type": "race",
                "value": "-2",
                "comment": "Dhampir racial bonus (penalty)"
            },
            {
                "type": "equipment",
                "value": "6",
                "comment": "from Sacred Fist belt of physical perfection +6"
            }
        ],
        "intelligence": [
            {
                "type": "baseScore",
                "value": "12",
                "comment": "none"
            }
        ],
        "wisdom": [
            {
                "type": "baseScore",
                "value": "16",
                "comment": "none"
            },
            {
                "type": "level",
                "value": "3",
                "comment": "added 3 times as level"
            },
            {
                "type": "mythic",
                "value": "2",
                "comment": "1st ability score bump from mythic 2"
            },
            {
                "type": "equipment",
                "value": "6",
                "comment": "from Sacred Fist headband of inspired wisdom +6"
            },
            {
                "type": "questionMark",
                "value": "1",
                "comment": "gm fiat?"
            }
        ],
        "charisma": [
            {
                "type": "baseScore",
                "value": "8",
                "comment": "none"
            },
            {
                "type": "race",
                "value": "2",
                "comment": "Dhampir racial bonus"
            }
        ]
    };

    var data = abilityScores.dexterity;
    function getDexScore() {
        dex = data;
        var val = 0;
        console.log('dex array size: '+dex.length);
        for (var i = 0; i < dex.length; i++) {
            console.log('dex value at ['+i+'] is: '+dex[i].value);
            val += dex[i].value;

        }
        return val;
    }
    $scope.dex = function() {
        dex = data;
        var val = 0;
        console.log('dex array size: '+dex.length);
        for (var i = 0; i < dex.length; i++) {
            console.log('dex value at ['+i+'] is: '+dex[i].value);
            val += dex[i].value;

        }
        return val;
    };

    console.log('My dex score is: '+ getDexScore());

    //var myArray = [];
    //var score = 0;
    //function getAbilityScore(myArray) {
    //    for (var i = 0; i < myArray.length; i++) {
    //        if (myArray[i].name === "value") {
    //            return myArray[i];
    //        }
    //        score += myArray[i];
    //    }
    //    console.log('Getting ability score value from array ' + myArray);
    //    return score;
    //}
    //
    //function abilityMod(score) {
    //    return Math.floor((score - 10) / 2);
    //}
    //getAbilityScore(myArray);
    //abilityMod(score);
    //var dexMod = function() {
    //    console.log(this.abilityScores.dexterity)
    //    return abilityMod(getAbilityScore(this.abilityScores.dexterity));
    //}

});