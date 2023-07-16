function saturdayFun (activity = "roller-skate") {
return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (task = "go to the office") {
    return `This Monday, I will ${task}.`;
  };

function wrapAdjective(flair = "*") {
    return function (adjective = "beautiful") {
        return `You are ${flair}${adjective}${flair}!`;
    }
}
