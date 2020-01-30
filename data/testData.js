const talks = {
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

const talksData = {
  "5": [{ title: "Rails for Python Developers lightning", duration: 5 }],
  "30": [
    { title: "Lua for the Masses 30min", duration: 30 },
    { title: "Woah 30min", duration: 30 },
    { title: "Sit Down and Write 30min", duration: 30 },
    { title: "Programming in the Boondocks of Seattle 30min", duration: 30 },
    { title: "Ruby vs. Clojure for Back-End Development 30min", duration: 30 },
    { title: "A World Without HackerNews 30min", duration: 30 },
    { title: "User Interface CSS in Rails Apps 30min", duration: 30 }
  ],
  "45": [
    { title: "Overdoing it in Python 45min", duration: 45 },
    { title: "Ruby Errors from Mismatched Gem Versions 45min", duration: 45 },
    { title: "Common Ruby Errors 45min", duration: 45 },
    { title: "Accounting-Driven Development 45min", duration: 45 },
    { title: "Pair Programming vs Noise 45min", duration: 45 },
    { title: "Clojure Ate Scala (on my project) 45min", duration: 45 }
  ],
  "60": [
    {
      title: "Writing Fast Tests Against Enterprise Rails 60min",
      duration: 60
    },
    { title: "Communicating Over Distance 60min", duration: 60 },
    { title: "Rails Magic 60min", duration: 60 },
    { title: "Ruby on Rails: Why We Should Move On 60min", duration: 60 },
    { title: "Ruby on Rails Legacy App Maintenance 60min", duration: 60 }
  ]
};

const trackResult = [
  {
    title: "Writing Fast Tests Against Enterprise Rails 60min",
    duration: 60
  },
  { title: "Communicating Over Distance 60min", duration: 60 },
  { title: "Rails Magic 60min", duration: 60 },
  { title: "Lunch", duration: 60 },
  { title: "Ruby on Rails: Why We Should Move On 60min", duration: 60 },
  { title: "Ruby on Rails Legacy App Maintenance 60min", duration: 60 },
  { title: "Lua for the Masses 30min", duration: 30 },
  { title: "Overdoing it in Python 45min", duration: 45 },
  { title: "Ruby Errors from Mismatched Gem Versions 45min", duration: 45 },
  { title: "Networking Event", duration: 60 }
];

const scheduleResult = [
  {
    startTime: "09:00AM",
    title: "Writing Fast Tests Against Enterprise Rails 60min",
    duration: 60
  },
  {
    startTime: "10:00AM",
    title: "Communicating Over Distance 60min",
    duration: 60
  },
  { startTime: "11:00AM", title: "Rails Magic 60min", duration: 60 },
  { startTime: "12:00PM", title: "Lunch", duration: 60 },
  {
    startTime: "01:00PM",
    title: "Ruby on Rails: Why We Should Move On 60min",
    duration: 60
  },
  {
    startTime: "02:00PM",
    title: "Ruby on Rails Legacy App Maintenance 60min",
    duration: 60
  },
  { startTime: "03:00PM", title: "Lua for the Masses 30min", duration: 30 },
  { startTime: "03:30PM", title: "Overdoing it in Python 45min", duration: 45 },
  {
    startTime: "04:15PM",
    title: "Ruby Errors from Mismatched Gem Versions 45min",
    duration: 45
  },
  { startTime: "05:00PM", title: "Networking Event", duration: 60 }
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
  talks,
  talksData,
  trackResult,
  scheduleResult,
  scheduleForConference,
  printedSchedule
};
