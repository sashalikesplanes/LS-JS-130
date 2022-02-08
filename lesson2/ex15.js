(function countdown(start) {
  if (start < 0) return;
  console.log(start);
  countdown(start - 1);
})(7);
