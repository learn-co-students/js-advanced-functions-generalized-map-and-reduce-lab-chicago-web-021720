// Add your functions here
const reduce = (arr,func,starting) => {
  let r = (!!starting) ? starting : arr[0]
  for (let i = (!!starting) ? 0 : 1; i < arr.length; i++) {
    r = func(arr[i], r)
  }
  return r;
};

const map = (arr,func) => arr.map(el => func(el));
