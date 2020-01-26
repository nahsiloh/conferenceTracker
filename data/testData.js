const talksByDuration = {
  "5": [{ title: "Rails for Python Developers lightning", duration: 5 }],
  "30": [
    { title: "Lua for the Masses 30min", duration: 30 },
    { title: "Woah 30min", duration: 30 }
  ],
  "45": [
    { title: "Overdoing it in Python 45min", duration: 45 },
    {
      title: "Ruby Errors from Mismatched Gem Versions 45min",
      duration: 45
    }
  ],
  "60": [
    {
      title: "Writing Fast Tests Against Enterprise Rails 60min",
      duration: 60
    },
    { title: "Communicating Over Distance 60min", duration: 60 }
  ]
};

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

const scheduleForConference = [
  [
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
  ],
  [
    "09:00AM Common Ruby Errors 45min",
    "09:45AM Accounting-Driven Development 45min",
    "10:30AM Pair Programming vs Noise 45min",
    "11:15AM Clojure Ate Scala (on my project) 45min",
    "12:00PM Lunch",
    "01:00PM Woah 30min",
    "01:30PM Sit Down and Write 30min",
    "02:00PM Programming in the Boondocks of Seattle 30min",
    "02:30PM Ruby vs. Clojure for Back-End Development 30min",
    "03:00PM A World Without HackerNews 30min",
    "03:30PM User Interface CSS in Rails Apps 30min",
    "04:00PM Rails for Python Developers lightning",
    "04:05PM Networking Event"
  ]
];

const printedSchedule =
  "Track 1:\n" +
  "09:00AM Writing Fast Tests Against Enterprise Rails 60min\n" +
  "10:00AM Communicating Over Distance 60min\n" +
  "11:00AM Rails Magic 60min\n" +
  "12:00PM Lunch\n" +
  "01:00PM Ruby on Rails: Why We Should Move On 60min\n" +
  "02:00PM Ruby on Rails Legacy App Maintenance 60min\n" +
  "03:00PM Lua for the Masses 30min\n" +
  "03:30PM Overdoing it in Python 45min\n" +
  "04:15PM Ruby Errors from Mismatched Gem Versions 45min\n" +
  "05:00PM Networking Event\n" +
  "Track 2:\n" +
  "09:00AM Common Ruby Errors 45min\n" +
  "09:45AM Accounting-Driven Development 45min\n" +
  "10:30AM Pair Programming vs Noise 45min\n" +
  "11:15AM Clojure Ate Scala (on my project) 45min\n" +
  "12:00PM Lunch\n" +
  "01:00PM Woah 30min\n" +
  "01:30PM Sit Down and Write 30min\n" +
  "02:00PM Programming in the Boondocks of Seattle 30min\n" +
  "02:30PM Ruby vs. Clojure for Back-End Development 30min\n" +
  "03:00PM A World Without HackerNews 30min\n" +
  "03:30PM User Interface CSS in Rails Apps 30min\n" +
  "04:00PM Rails for Python Developers lightning\n" +
  "04:05PM Networking Event\n";

module.exports = {
  talksByDuration,
  scheduleForADay,
  scheduleForConference,
  printedSchedule
};
