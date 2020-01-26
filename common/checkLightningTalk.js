const durationRegex = /\d+/g;
const DURATION_OF_LIGHTING_TALK = "5";

function checkDuration(talk) {
  const durationArray = talk.match(durationRegex);
  const isLightingTalk = durationArray === null;

  let durationOfOneTalk;
  isLightingTalk
    ? (durationOfOneTalk = DURATION_OF_LIGHTING_TALK)
    : (durationOfOneTalk = durationArray[0]);

  return Number(durationOfOneTalk);
}

module.exports = checkDuration;
