const DURATION_FOR_MORNING_SESSION = 180;
const DURATION_FOR_AFTERNOON_SESSION = 240;
const LUNCH = { title: "Lunch", duration: 60 };
const NETWORKING_EVENT = { title: "Networking Event", duration: 0 };

const Session = require("../Session/Session");

class ScheduleForADay {
  constructor(updatedTalksByDuration, startTime) {
    this.updatedTalksByDuration = updatedTalksByDuration;

    const convertStartTime = startTime => {
      const timeArray = startTime.match(/\d+/gm).map(Number);
      const hour = timeArray[0];
      const mins = timeArray[1];
      return hour * 60 + mins;
    };
    this.currentTime = convertStartTime(startTime);

    const createSession = (updatedTalksByDuration, sessionDuration) => {
      return new Session(updatedTalksByDuration, sessionDuration).assignTalks();
    };

    this.morningSession = createSession(
      this.updatedTalksByDuration,
      DURATION_FOR_MORNING_SESSION
    );

    this.afternoonSession = createSession(
      this.updatedTalksByDuration,
      DURATION_FOR_AFTERNOON_SESSION
    );

    this.timetable = [];
  }

  addLunchAfterMorningSession() {
    this.morningSession.push(LUNCH);
  }

  addNetworkingEventAfterAfternoonSession() {
    this.afternoonSession.push(NETWORKING_EVENT);
  }

  getTimetable() {
    this.addLunchAfterMorningSession();
    this.addNetworkingEventAfterAfternoonSession();
    this.timetable = this.morningSession.concat(this.afternoonSession);
    return this.timetable;
  }

  checkMeridian(time) {
    if (time < 12) {
      return "AM";
    } else {
      return "PM";
    }
  }

  formatHour(time) {
    let standardTime = Math.floor(time);
    if (standardTime > 12) {
      standardTime = standardTime - 12;
    }
    const checkLength = standardTime.toString().length;
    if (checkLength === 1) {
      return `0${standardTime}`;
    }
    return standardTime;
  }

  formatMins(time) {
    const mins = Math.round((time - Math.floor(time)) * 60);
    if (mins.toString().length === 1) {
      return `0${mins}`;
    }
    return mins;
  }

  formatTime(time) {
    let formatedTime = "";
    const convertTime = time / 60;

    const meridian = this.checkMeridian(convertTime);
    const convertedHour = this.formatHour(convertTime);
    const convertedMins = this.formatMins(convertTime);

    formatedTime = `${convertedHour}:${convertedMins}${meridian}`;
    return formatedTime;
  }

  assignTimingsToTalks() {
    return this.timetable.reduce((schedule, talk) => {
      const currentTime = this.formatTime(this.currentTime);

      const talkWithTime = currentTime.concat(" ", talk.title);
      schedule.push(talkWithTime);
      this.currentTime += talk.duration;
      return schedule;
    }, []);
  }
}

module.exports = ScheduleForADay;
