const Session = require("../Session/Session");
const MORNING_SESSION_DURATION = 180;
const AFTERNOON_SESSION_DURATION = 240;
const LUNCH = { title: "Lunch", duration: 60 };
const NETWORKING_EVENT = { title: "Networking Event", duration: 60 };

class Track {
  constructor(talks) {
    this.talks = talks;
    this.morningSession = new Session(this.talks).assignTalksToSession(
      MORNING_SESSION_DURATION
    );
    this.afternoonSession = new Session(this.talks).assignTalksToSession(
      AFTERNOON_SESSION_DURATION
    );
    this.track = [];
  }

  getOneTrack() {
    this.morningSession.push(LUNCH);
    this.afternoonSession.push(NETWORKING_EVENT);
    this.track = this.morningSession.concat(this.afternoonSession);
    return this.track;
  }

  assignTiming(startTime) {
    this.track.map(talk => {
      talk["startTime"] = startTime;
    });
    return this.track;
  }
}

module.exports = Track;
