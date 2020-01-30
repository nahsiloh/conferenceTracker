class Session {
  constructor(talks) {
    this.talks = talks;
    this.talkDurations = this.getArrayOfTalkDurations(talks);
    this.session = [];
  }

  getArrayOfTalkDurations() {
    return Object.keys(this.talks)
      .map(Number)
      .sort((a, b) => b - a);
  }

  getDuration(remainingTime) {
    return this.talkDurations.find(
      duration =>
        remainingTime % duration === 0 && this.talks[duration].length > 0
    );
  }

  assignTalksToSession(sessionDuration) {
    let remainingTime = sessionDuration;
    if (sessionDuration === 0) {
      return this.session;
    }

    const duration = this.getDuration(remainingTime);
    if (!duration) {
      throw new Error("No Available Talks To Be Assigned");
    }

    this.session.push(this.talks[duration][0]);
    this.talks[duration].shift();
    remainingTime -= duration;

    if (remainingTime > 0) {
      return this.assignTalksToSession(remainingTime);
    }

    return this.session;
  }
}

module.exports = Session;
