const logger = (message) => console.log(message);
function later(func, arg) {
  return () => func(arg);
}
let logWarning = later(logger, "The system is shutting down!");
logWarning(); // The system is shutting down!
