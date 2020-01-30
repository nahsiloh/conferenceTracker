const Track = require("./Track");
const {
  talksData,
  trackResult,
  scheduleResult
} = require("../../data/testData");

describe("Get talks for one track", () => {
  beforeEach(() => {
    const cloneDeep = data => {
      return JSON.parse(JSON.stringify(data));
    };
    return (talksClone = cloneDeep(talksData));
  });

  it("should return talks for one track", () => {
    const track = new Track(talksClone);
    expect(track.getOneTrack()).toStrictEqual(trackResult);
  });

  it("should assign timings to talks", () => {
    const track = new Track(talksClone);
    track.getOneTrack();
    expect(track.assignTiming("09:00AM")).toStrictEqual(scheduleResult);
  });
});
