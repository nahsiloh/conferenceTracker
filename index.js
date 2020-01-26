const checkDuration = require("./common/checkLightningTalk");
const fs = require("fs");

const talksDataArray = fs
  .readFileSync("./data/talksData.txt", "utf8")
  .split("\n")
  .map(talk => {
    return {
      title: talk,
      duration: checkDuration(talk)
    };
  });

const groupTalksByDuration = (talksDataArray, duration) => {
  return talksDataArray.reduce((talk, proposal) => {
    let key = proposal[duration];
    if (!talk[key]) {
      talk[key] = [];
    }
    talk[key].push(proposal);
    return talk;
  }, {});
};

const talksByDuration = groupTalksByDuration(talksDataArray, "duration");
module.exports = talksByDuration;
