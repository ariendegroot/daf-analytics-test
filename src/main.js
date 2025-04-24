import "./style.css";

const customEventButton = document.querySelector(".custom-event");

customEventButton.addEventListener("click", () => {
  console.log("custom event");
  window.gtag("event", "download_request", {
    event_category: "Download",
    event_label: "Step Files Download",
    value: "2",
  });
});
