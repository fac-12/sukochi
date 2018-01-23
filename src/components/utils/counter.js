export const counter = (count, time) => {
  const start = Date.now();
  setTimeOut(() => {
    const timePassed = Date.now() - start;
    return count - timePassed;
  }, time);
};
