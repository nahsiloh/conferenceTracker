const Session = require("./Session");
const { talksByDuration } = require("../../data/testData");

describe("Sessions", () => {
  beforeEach(() => {
    return (updatedTalksByDuration = JSON.parse(
      JSON.stringify(talksByDuration)
    ));
  });

  describe("get array of talks within a session", () => {
    it("it should return an empty array when the session is 0", () => {
      const morningSession = new Session(updatedTalksByDuration, 0);
      expect(morningSession.assignTalks()).toStrictEqual([]);
    });

    it("it should return an array of 1 60min talks when the session is 60", () => {
      const morningSession = new Session(updatedTalksByDuration, 60);
      expect(morningSession.assignTalks()).toStrictEqual([
        {
          title: "Writing Fast Tests Against Enterprise Rails 60min",
          duration: 60
        }
      ]);
    });

    it("it should return an array of 4 talks when the session is 180", () => {
      const morningSession = new Session(updatedTalksByDuration, 180);
      expect(morningSession.assignTalks()).toStrictEqual([
        {
          title: "Writing Fast Tests Against Enterprise Rails 60min",
          duration: 60
        },
        { title: "Communicating Over Distance 60min", duration: 60 },
        { title: "Lua for the Masses 30min", duration: 30 },
        { title: "Woah 30min", duration: 30 }
      ]);
    });

    it("it should return an array of 5 talks when the session is 240", () => {
      const afternoonSession = new Session(updatedTalksByDuration, 240);
      expect(afternoonSession.assignTalks()).toStrictEqual([
        {
          title: "Writing Fast Tests Against Enterprise Rails 60min",
          duration: 60
        },
        { title: "Communicating Over Distance 60min", duration: 60 },
        { title: "Lua for the Masses 30min", duration: 30 },
        { title: "Overdoing it in Python 45min", duration: 45 },
        {
          title: "Ruby Errors from Mismatched Gem Versions 45min",
          duration: 45
        }
      ]);
    });
  });
});
