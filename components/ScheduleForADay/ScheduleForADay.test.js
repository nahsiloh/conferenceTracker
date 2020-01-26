const ScheduleForADay = require("./ScheduleForADay");
const talksByDuration = require("../../index");

const CONFERENCE_START_TIME = "09.00AM";

const talksForADay = [
  { title: "Writing Fast Tests Against Enterprise Rails 60min", duration: 60 },
  { title: "Communicating Over Distance 60min", duration: 60 },
  { title: "Rails Magic 60min", duration: 60 },
  { title: "Lunch", duration: 60 },
  { title: "Ruby on Rails: Why We Should Move On 60min", duration: 60 },
  { title: "Ruby on Rails Legacy App Maintenance 60min", duration: 60 },
  { title: "Lua for the Masses 30min", duration: 30 },
  { title: "Overdoing it in Python 45min", duration: 45 },
  { title: "Ruby Errors from Mismatched Gem Versions 45min", duration: 45 },
  { title: "Networking Event", duration: 0 }
];

const scheduleForADay = [
  "09:00AM Writing Fast Tests Against Enterprise Rails 60min",
  "10:00AM Communicating Over Distance 60min",
  "11:00AM Rails Magic 60min",
  "12:00PM Lunch",
  "01:00PM Ruby on Rails: Why We Should Move On 60min",
  "02:00PM Ruby on Rails Legacy App Maintenance 60min",
  "03:00PM Lua for the Masses 30min",
  "03:30PM Overdoing it in Python 45min",
  "04:15PM Ruby Errors from Mismatched Gem Versions 45min",
  "05:00PM Networking Event"
];

describe.only("Schedule for a day", () => {
  beforeEach(() => {
    return (updatedTalksByDuration = JSON.parse(
      JSON.stringify(talksByDuration)
    ));
  });

  it("should return an array of talks for the day", () => {
    const track1 = new ScheduleForADay(
      updatedTalksByDuration,
      CONFERENCE_START_TIME
    );
    expect(track1.getTimetable()).toStrictEqual(talksForADay);
  });

  it("should assign timing to the list of talks for a day", () => {
    const track1 = new ScheduleForADay(
      updatedTalksByDuration,
      CONFERENCE_START_TIME
    );
    track1.getTimetable();
    expect(track1.assignTimingsToTalks()).toStrictEqual(scheduleForADay);
  });
});
