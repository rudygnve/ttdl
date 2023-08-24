import axios from "axios";

export function getRandomBanner(arr) {
  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const item = arr[randomIndex];

  return item;
}

export const sendMessage = async (data) => {
  axios("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "applcation/json",
      Accept: "applcation/json",
    },
  });
};
