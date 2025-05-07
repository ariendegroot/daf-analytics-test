import "./style.css";

const customEventButton = document.querySelector(".custom-event");

customEventButton.addEventListener("click", () => {
  console.log("custom event 2d");
  window.gtag("event", "request_download", {
    event_category: "download_request",
    event_label: "2d files download",
    number_of_files: 1,
  });
});

const customEventButtonStep = document.querySelector(".custom-event-step");
customEventButtonStep.addEventListener("click", () => {
  console.log("custom event step");
  window.gtag("event", "request_download", {
    event_category: "download_request",
    event_label: "Step files downloads",
    number_of_files: 3,
  });
});
