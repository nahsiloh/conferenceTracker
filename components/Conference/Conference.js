const ScheduleForADay = require("../ScheduleForADay/ScheduleForADay");
const CONFERENCE_START_TIME = "09.00AM";

class Conference {
  constructor(talksByDuration) {
    this.talksByDuration = talksByDuration;
    this.updatedTalksByDuration = JSON.parse(JSON.stringify(talksByDuration));
    this.talkDurations = Object.keys(this.updatedTalksByDuration)
      .map(Number)
      .sort((a, b) => b - a);
    this.conferenceSchedule = [];
  }

  getOneTrack() {
    const scheduleForADay = new ScheduleForADay(
      this.updatedTalksByDuration,
      CONFERENCE_START_TIME
    );
    scheduleForADay.getTimetable();
    const oneTrack = scheduleForADay.assignTimingsToTalks();
    return oneTrack;
  }

  checkForUnassignedTalks() {
    return this.talkDurations.some(
      duration => this.updatedTalksByDuration[duration].length > 0
    );
  }

  generateTracks() {
    if (this.checkForUnassignedTalks()) {
      this.conferenceSchedule.push(this.getOneTrack());
      this.generateTracks();
    }
    return this.conferenceSchedule;
  }

  printSchedule() {
    return this.conferenceSchedule.reduce((schedule, cur, index) => {
      const string = cur.toString().replace(/,/gm, "\n");
      return schedule.concat(`Track ${index + 1}:\n${string}\n`);
    }, "");
  }
}

module.exports = Conference;
