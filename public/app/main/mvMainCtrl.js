/**
 * Created by Niertis on 2/21/2016.
 */
angular.module('app').controller('mvMainCtrl', function ($scope, mvData) {
  var character = mvData;
  var strength = getStatTotal(character.abilityScores.strength);
  var dexterity = getStatTotal(character.abilityScores.dexterity);
  var constitution = getStatTotal(character.abilityScores.constitution);
  var intelligence = getStatTotal(character.abilityScores.intelligence);
  var wisdom = getStatTotal(character.abilityScores.wisdom);
  var charisma = getStatTotal(character.abilityScores.charisma);

  var alignments = [
    {abbreviation: "LG", name: "Lawful Good"},
    {abbreviation: "LN", name: "Lawful Neutral"},
    {abbreviation: "LE", name: "Lawful Evil"},
    {abbreviation: "NG", name: "Neutral Good"},
    {abbreviation: "N", name: "True Neutral"},
    {abbreviation: "NE", name: "Neutral Good"},
    {abbreviation: "CG", name: "Chaotic Good"},
    {abbreviation: "CN", name: "Chaotic Neutral"},
    {abbreviation: "CE", name: "Chaotic Evil"}
  ];

  var genders = [
    {abbreviation: 'M', name: "Male"},
    {abbreviation: 'F', name: "Female"}
  ];

  var sizes = [
    {abbreviation: 'S', name: "Small"},
    {abbreviation: 'M', name: "Medium"},
    {abbreviation: 'L', name: "Large"}
  ];
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
        ac += Math.floor(value.value / 4) + getAbilityMod(wisdom);
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
        sum += getAbilityMod(wisdom) + Math.floor(value.value / 4);
      }
    });
    return sum;
  }

  function getAbilityList(obj) {
    var parts = [];
    $.map(obj, function (value, index) {
      parts.push(value.name);
    });
    return parts.join(", ");
  }

  //todo: continue creating this function.
  function getSkillList() {
    var parts = {};
    $.map(character.skills, function (value, key) {
      parts.push(key);
    })
  }

  function splitAndCamelcase(str) {
    str.replace(/^./, function (str) {
      return str.toUpperCase();
    });
    str.replace(/([A-Z])/g, ' $1');
    return str;
  }

  $scope.character = character;

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

  $scope.feats = function () {
    return getAbilityList(character.feats)
  };
  $scope.traits = function () {
    return getAbilityList(character.traits)
  };
  $scope.skills = function () {
    return getAbilityList(character.skills)
  };

  //fixMe: refactor this so it uses only one function for selects
  $scope.getAlignments = function () {
    var parts = [];
    $.map(alignments, function (value, index) {
      parts.push(value.abbreviation);
    });
    return parts;
  };

  $scope.getGenders = function () {
    var parts = [];
    $.map(genders, function (value, index) {
      parts.push(value.name);
    });
    return parts;
  };

  $scope.getSizes = function () {
    var parts = [];
    $.map(sizes, function (value, index) {
      parts.push(value.name);
    });
    return parts;
  };

});