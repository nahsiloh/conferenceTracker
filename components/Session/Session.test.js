const Session = require("./Session");
const { talks } = require("../../data/testData");

const talksInValid = {
  "240": [{ title: "Rails for Python Developers", duration: 240 }]
};

describe("Assign talks for one session", () => {
  beforeEach(() => {
    const cloneDeep = data => {
      return JSON.parse(JSON.stringify(data));
    };
    return (talksClone = cloneDeep(talks));
  });

  it("should return no talks if there are no available sessions", () => {
    session = new Session(talksClone);
    expect(session.assignTalksToSession(0)).toStrictEqual([]);
  });

  it("should throw error if unable to assign talk to session", () => {
    session = new Session(talksInValid);
    expect(() => {
      session.assignTalksToSession(60);
    }).toThrow("No Available Talks To Be Assigned");
  });

  it("should return 1 talk for a 60min session", () => {
    session = new Session(talksClone);
    expect(session.assignTalksToSession(60)).toStrictEqual([
      {
        title: "Writing Fast Tests Against Enterprise Rails 60min",
        duration: 60
      }
    ]);
  });

  it("should return 2 talks for a 120min session", () => {
    session = new Session(talksClone);
    expect(session.assignTalksToSession(120)).toStrictEqual([
      {
        title: "Writing Fast Tests Against Enterprise Rails 60min",
        duration: 60
      },
      { title: "Communicating Over Distance 60min", duration: 60 }
    ]);
  });

  it("should return 4 talks for a 180min session", () => {
    session = new Session(talksClone);
    expect(session.assignTalksToSession(180)).toStrictEqual([
      {
        title: "Writing Fast Tests Against Enterprise Rails 60min",
        duration: 60
      },
      { title: "Communicating Over Distance 60min", duration: 60 },
      { title: "Lua for the Masses 30min", duration: 30 },
      { title: "Woah 30min", duration: 30 }
    ]);
  });

  describe("Get talk durations", () => {
    it("should return an array of talk durations", () => {
      expect(session.getArrayOfTalkDurations()).toStrictEqual([60, 45, 30, 5]);
    });
  });
});
