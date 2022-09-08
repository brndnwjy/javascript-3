const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let months = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ];

    if (!error) {
      callback(null, months);
    } else {
      callback(new Error("Sorry, Data Not Found"), []);
    }
  }, 4000);
};

const printMonth = (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    data.map((item) => {
        console.log(item)
    });
  }
};

getMonth(printMonth);
