export function myDebounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export const queryOptions = { method: "POST", headers: myHeaders };
