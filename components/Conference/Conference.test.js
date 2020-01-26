const Conference = require("./Conference");
const talksByDuration = require("../../index");
const {
  scheduleForADay,
  scheduleForConference,
  printedSchedule
} = require("../../data/testData");

describe("Conference Schedule", () => {
  it("should get the schedule for 1 track", () => {
    const techWeek = new Conference(talksByDuration);
    expect(techWeek.getOneTrack()).toStrictEqual(scheduleForADay);
  });

  it("should get the schedule for the entire conference", () => {
    const techWeek = new Conference(talksByDuration);
    expect(techWeek.generateTracks()).toStrictEqual(scheduleForConference);
  });

  it("should print the schedule for the entire conference", () => {
    const techWeek = new Conference(talksByDuration);
    techWeek.generateTracks();
    expect(techWeek.printSchedule()).toBe(printedSchedule);
  });
});
