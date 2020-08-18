const sleep = (time = 500) =>
  new Promise((resolve) => {
    process.env.NODE_ENV === "development" && setTimeout(resolve, time);
  });

export default sleep;
