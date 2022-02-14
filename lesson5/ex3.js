const startCounting = () => {
  let count = 1;
  return setInterval(() => {
    console.log(count);
    count += 1;
  }, 1000);
};

const stopCounting = (counterId) => {
  clearInterval(counterId);
};

let counterId = startCounting();

stopCounting(counterId);
