class Session {
  constructor(updatedTalksByDuration, sessionDuration) {
    this.updatedTalksByDuration = updatedTalksByDuration;
    this.remainingTime = sessionDuration;
    this.assignedTalks = [];
    this.talkDurations = Object.keys(this.updatedTalksByDuration)
      .map(Number)
      .sort((a, b) => b - a);
  }

  getAvailableTalkWithDurationDivisibleBySession() {
    return this.talkDurations.find(
      duration =>
        this.remainingTime % duration === 0 &&
        this.updatedTalksByDuration[duration].length > 0
    );
  }

  getAvailableTalkWithLongestDuration() {
    return this.talkDurations.find(
      duration => this.updatedTalksByDuration[duration].length > 0
    );
  }

  assignTalks() {
    if (this.remainingTime === 0) {
      return this.assignedTalks;
    }

    let durationOfTalkToBeAssigned = this.getAvailableTalkWithDurationDivisibleBySession();
    if (durationOfTalkToBeAssigned === undefined) {
      durationOfTalkToBeAssigned = this.getAvailableTalkWithLongestDuration();
    }

    if (durationOfTalkToBeAssigned === undefined) {
      return this.assignedTalks;
    }

    this.assignedTalks.push(
      this.updatedTalksByDuration[durationOfTalkToBeAssigned].shift()
    );
    this.remainingTime -= durationOfTalkToBeAssigned;

    if (this.remainingTime > 0) {
      this.assignTalks();
    }

    return this.assignedTalks;
  }
}

module.exports = Session;
