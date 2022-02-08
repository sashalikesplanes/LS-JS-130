"use strict";

function makeCounterLogger(startNum) {
  return (endNum) => {
    let current = startNum;
    if (startNum < endNum) {
      for (; current <= endNum; current++) console.log(current);
    } else {
      for (; current >= endNum; current--) console.log(current);
    }
  };
}

let countlog = makeCounterLogger(5);

countlog(8);
countlog(2);
