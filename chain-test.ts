function chain(data) {
  return {
    then: (fn) => {
      const fnData = fn(data);
      const mergedData = { ...data, ...fnData };

      return chain(mergedData);
    },
  };
}
chain({ a: 1 })
  .then(() => ({ x: 42 }))
  .then(async () => ({ y: 43 }))
  .then(({ a, x, y }) => console.log({ a, x, y }));
