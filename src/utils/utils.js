export function myDebounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export const fetchOptions = { method: "POST", headers: myHeaders };
