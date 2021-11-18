$(document).ready(function() {
    $("#1info").on("show.bs.modal", function() {
      showCopingSkills("coping-skills-1");

    });
    $("#reset-cs1").on("click", function() {
      resetCopingSkills("coping-skills-1");
      showCopingSkills("coping-skills-1");
    });
    $("#1info").on("hide.bs.modal", function() {
      resetCopingSkills("coping-skills-2");
    });
    $("#2info").on("show.bs.modal", function() {
      showCopingSkills("coping-skills-2");
    });
    $("#reset-cs2").on("click", function() {
      resetCopingSkills("coping-skills-2");
      showCopingSkills("coping-skills-2");
    });
    $("#2info").on("hide.bs.modal", function() {
      resetCopingSkills("coping-skills-2");
    });
    $("#3info").on("show.bs.modal", function() {
      showCopingSkills("coping-skills-3");
    });
    $("#reset-cs3").on("click", function() {
      resetCopingSkills("coping-skills-3");
      showCopingSkills("coping-skills-3");
    });
    $("#3info").on("hide.bs.modal", function() {
      resetCopingSkills("coping-skills-3");
    });
    $("#4info").on("show.bs.modal", function() {
      showCopingSkills("coping-skills-4");
    });
    $("#reset-cs4").on("click", function() {
      resetCopingSkills("coping-skills-4");
      showCopingSkills("coping-skills-4");
    });
    $("#4info").on("hide.bs.modal", function() {
      resetCopingSkills("coping-skills-4");
    });
    $("#5info").on("show.bs.modal", function() {
      showCopingSkills("coping-skills-5");
    });
  });
  
  function showCopingSkills(list) {
    for (x = 0; x < 10; x++) {
      skill = getRandomSkill();
      var li = document.createElement("li");
      li.innerHTML = skill;
      document.getElementById(list).appendChild(li);
    }
  }
  
  function resetCopingSkills(list) {
    $("#" + list).empty();
  }
  
  function getRandomSkill() {
    return copingSkills[Math.floor(Math.random() * copingSkills.length)];
  }