//codemafiaboss-positive Vs only
export const Data = {
  Mon: {
    "7am-10am": "AMM 101 - F1.1",
    "10am-1pm": "SCS 300 - F2.1",
    "1pm-4pm": "",
    "4pm-7pm": "SIT 202 - F4.1",
  },
  Tue: {
    "7am-10am": "",
    "10am-1pm": "",
    "1pm-4pm": "SCS 301 - F4.1",
    "4pm-7pm": "",
  },
  Wed: {
    "7am-10am": "AMM 201 - F2.4",
    "10am-1pm": "",
    "1pm-4pm": "",
    "4pm-7pm": "SCS 202: G3",
  },
  Thur: {
    "7am-10am": "",
    "10am-1pm": "SIT 301 - F4.1",
    "1pm-4pm": "SIT 204 - F3.3",
    "4pm-7pm": "",
  },
  Fri: {
    "7am-10am": "SCS 404 - F1.3",
    "10am-1pm": "SCS 200 - F4",
    "1pm-4pm": "",
    "4pm-7pm": "",
  },
};

export function getDaysOfTheWeek() {
  const days = [];
  for (const day in Data) {
    days.push(day);
    // console.log("Business Logic Layer: ", day);
  }
  return days;
}
export function getTimeIntervals() {
  const times = [];

  for (const time in Data.Mon) {
    times.push(time);
    // console.log("Business Logic Layer: ", time);
  }
  return times;
}

export function getClassesAt(startsAt) {
  //startsAt is a single digit of the starting time
  //we ukieka invalid startAt times ni shauri zako
  const sessions = [];
  for (const day in Data) {
    //here we have the indv. day object
    //so we are monitoring time in pm and am
    //azin 11pm for instance
    const daysData = Data[day];
    for (const session in daysData) {
      if (session.slice(0, 4).includes(startsAt))
        sessions.push(daysData[session]);
      // console.log("Business Logic Layer: ", session);
    }
  }
  return sessions;
}

//The Functions handling the next class and the current class
//so no need for params to reduce coupling with other modules
//so you just call and you get back the current item or the next class

export function getCurrentClass() {
  const classStartTimes = ["07am", "10am", "01pm", "04pm"];
  // const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  let classDuration = 3;
  const lastCLassTimeHrs = 19;
  const earliestCLassTimeHrs = 7;
  const time = new Date();
  const today = time.getDay();
  let currentHour = time.getHours();

  if (currentHour < lastCLassTimeHrs && currentHour >= earliestCLassTimeHrs) {
    if (currentHour < 12) {
      classStartTimes.forEach((element) => {
        let selectedTime = Number(element.slice(0, 2));
        let endTime = selectedTime + classDuration;

        if (currentHour < endTime && currentHour >= selectedTime) {
          let sessions = getClassesAt(selectedTime);
          let current = sessions[today] ? sessions[today] : "No Class";
          // console.log("Business Layer :current class", current);

          return current;
        }
      });
    } else {
      currentHour -= 12;
      classStartTimes.forEach((element) => {
        let selectedTime = Number(element.slice(0, 2));
        let endTime = selectedTime + classDuration;

        if (currentHour < endTime && currentHour >= selectedTime) {
          let sessions = getClassesAt(selectedTime);
          let current = sessions[today] ? sessions[today] : "No Class";
          // console.log("Business Layer :current class", current);

          return current;
        }
      });
    }
  } else {
    return "You probably don't have a class now";
  }
}
export function getNextClass() {
  const classStartTimes = ["07am", "10am", "01pm", "04pm"];
  // const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  let classDuration = 3;
  const lastCLassTimeHrs = 19;
  const earliestCLassTimeHrs = 7;
  const time = new Date();
  const today = time.getDay();
  const skipToNext = 3;
  let currentHour = time.getHours() + skipToNext;

  if (currentHour < lastCLassTimeHrs && currentHour > earliestCLassTimeHrs) {
    if (currentHour < 12) {
      classStartTimes.forEach((element) => {
        let selectedTime = Number(element.slice(0, 2));
        let endTime = selectedTime + classDuration;

        if (currentHour < endTime && currentHour >= selectedTime) {
          let sessions = getClassesAt(selectedTime);
          let current = sessions[today] ? sessions[today] : "No Class";
          // console.log("Business Layer :current class", current);

          return current;
        }
      });
    } else {
      currentHour -= 12;
      classStartTimes.forEach((element) => {
        let selectedTime = Number(element.slice(0, 2));
        let endTime = selectedTime + classDuration;

        if (currentHour < endTime && currentHour >= selectedTime) {
          let sessions = getClassesAt(selectedTime);
          let current = sessions[today] ? sessions[today] : "No Class";
          // console.log("Business Layer :current class", current);

          return current;
        }
      });
    }
  } else {
    return "You probably don't have a class now";
  }
}

export function getTable() {
  //not my job
  //this part you fetch data from the server(builder)
}
