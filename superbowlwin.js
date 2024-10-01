// superbowlWin.js 
function superbowlWin(record) {
    const win = record.find((game) => game.team === "Denver Broncos" && game.result === "W");
    return win ? win.year : undefined;
  }
  
  // Export the function so it can be imported in the test
  module.exports = superbowlWin;
  