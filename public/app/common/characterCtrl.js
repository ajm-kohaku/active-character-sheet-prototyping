/**
 * Created by Niertis on 3/14/2016.
 */

angular.module('app').factory('mvCharacterCtrl', function() {
//calculates the Ability Score or Skill Total
  exports.getStatTotal = function(obj) {
    var scores = obj;
    var sum = 0;
    $.map(scores, function (value, index) {
      sum += value.value;
    });
    return sum;
  };

  exports.getBaseAttack = function() {
    var classes = character.generalInfo.characterClasses;
    var sum = 0;
    $.map(classes, function (value, index) {
      sum += value.baseAttack;
    });
    return sum;
  };

  exports.getAbilityMod = function() {
    var score = arguments[0];
    var mod = 0;
    if (!isNaN(score)) {
      mod = Math.floor((score - 10) / 2);
    }
    return mod;
  };

  exports.getAC = function() {
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
  };

  exports.getTouchAC = function() {
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
  };

  exports.getFlatFootedAC = function() {
    var ac = getAC();
    $.map(character.armorClass, function (value, index) {
      if (value.type === "dodge") {
        ac -= value.value;
      }
    });
    return ac - getAbilityMod(dexterity);
  };

  exports.getFortSave = function() {
    return getStatTotal(character.defenseStats.fortitude) + getAbilityMod(constitution);
  };

  exports.getReflexSave = function() {
    return getStatTotal(character.defenseStats.reflex) + getAbilityMod(dexterity);
  };

  exports.getWillSave = function() {
    return getStatTotal(character.defenseStats.will) + getAbilityMod(wisdom);
  };

  exports.getSizeMod = function() {
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
  };

  exports.getCmb = function() {
    var cmb = getBaseAttack() + getAbilityMod(strength) + getSizeMod();
    return cmb;
  };

  exports.getCmd = function() {
    var sum = 10 + getBaseAttack() + getAbilityMod(strength) + getAbilityMod(dexterity) + getSizeMod();
    $.map(character.generalInfo.characterClasses, function (value, index) {
      if (value.className === "Sacred Fist" || value.className === "Monk") {
        sum += getAbilityMod(wisdom)+Math.floor(value.value/4);
      }
    });
    return sum;
  };

  exports.getAbilityList = function(obj) {
    var parts = [];
    $.map(obj, function(value, index){
      parts.push(value.name);
    });
    return parts.join(", ");
  };

//todo: continue creating this function.
  exports.getSkillList = function() {
    var parts = {};
    $.map(character.skills, function(value, key) {
      parts.push(key);
    })
  };

  exports.splitAndCamelcase = function(str) {
    str.replace(/^./, function(str){ return str.toUpperCase(); });
    str.replace(/([A-Z])/g, ' $1');
    return str;
  };


});
