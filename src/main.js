import "./style.css";

const customEventButton = document.querySelector(".custom-event");

customEventButton.addEventListener("click", () => {
  console.log("custom event");
  window.gtag("event", "custom_event", {
    event_category: "engagement",
    event_label: "button_click",
    value: "2",
  });
});
