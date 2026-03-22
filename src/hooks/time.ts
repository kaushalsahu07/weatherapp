export const currentTime = () => {

const time = new Date().toLocaleTimeString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: true
});

return time;

}
