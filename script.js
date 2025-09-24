document.addEventListener("DOMContentLoaded", function () {
  // Set the end time for the countdown
  // IMPORTANT: Replace this with your actual target date and time.
  // Format: "Month Day, Year HH:MM:SS" (e.g., "Oct 27, 2024 10:00:00")
  // Or, you can set it relative to "now":
  // For example, 2 hours from now: const endTime = new Date().getTime() + (2 * 60 * 60 * 1000);
  const endTime = new Date("Nov 15, 2024 18:30:00").getTime();

  const timerHours = document.getElementById("timerHours");
  const timerMinutes = document.getElementById("timerMinutes");
  const timerSeconds = document.getElementById("timerSeconds");

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = endTime - now;

    // Calculate time
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    timerHours.textContent = String(hours).padStart(2, "0");
    timerMinutes.textContent = String(minutes).padStart(2, "0");
    timerSeconds.textContent = String(seconds).padStart(2, "0");

    // If the countdown is over, stop the timer and display "EXPIRED" or similar
    if (distance < 0) {
      clearInterval(countdownInterval);
      timerHours.textContent = "00";
      timerMinutes.textContent = "00";
      timerSeconds.textContent = "00";
      // You might want to hide the timer or display a message here
      // e.g., document.getElementById('countdownTimer').innerHTML = "EXPIRED";
      // Also, you could disable or change the CTA button
    }
  }

  // Update the countdown every 1 second
  const countdownInterval = setInterval(updateCountdown, 1000);

  // Initial call to display the timer immediately
  updateCountdown();
});

document.addEventListener("DOMContentLoaded", function () {
  // Set the end time for the countdown
  // IMPORTANT: Replace this with your actual target date and time.
  // Format: "Month Day, Year HH:MM:SS" (e.g., "Oct 27, 2024 10:00:00")
  // Or, you can set it relative to "now":
  // For example, 2 hours from now: const endTime = new Date().getTime() + (2 * 60 * 60 * 1000);
  const endTime = new Date("Nov 15, 2024 18:30:00").getTime();

  // Get all countdown timers on the page
  const countdownContainers = document.querySelectorAll(".countdown-timer");

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = endTime - now;

    // Calculate time
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update each countdown timer found on the page
    countdownContainers.forEach((container) => {
      const timerHours = container.querySelector(".timer-value:nth-child(1)"); // Assumes order
      const timerMinutes = container.querySelector(".timer-value:nth-child(2)");
      const timerSeconds = container.querySelector(".timer-value:nth-child(3)");

      if (timerHours && timerMinutes && timerSeconds) {
        timerHours.textContent = String(hours).padStart(2, "0");
        timerMinutes.textContent = String(minutes).padStart(2, "0");
        timerSeconds.textContent = String(seconds).padStart(2, "0");
      }
    });

    // If the countdown is over
    if (distance < 0) {
      clearInterval(countdownInterval);
      countdownContainers.forEach((container) => {
        const timerHours = container.querySelector(".timer-value:nth-child(1)");
        const timerMinutes = container.querySelector(
          ".timer-value:nth-child(2)"
        );
        const timerSeconds = container.querySelector(
          ".timer-value:nth-child(3)"
        );
        if (timerHours && timerMinutes && timerSeconds) {
          timerHours.textContent = "00";
          timerMinutes.textContent = "00";
          timerSeconds.textContent = "00";
        }
      });
      // You might want to hide the timers or display a message here
      // e.g., document.querySelectorAll('.countdown-timer').forEach(el => el.innerHTML = "EXPIRED");
      // Also, you could disable or change the CTA buttons
    }
  }

  // Update the countdown every 1 second
  const countdownInterval = setInterval(updateCountdown, 1000);

  // Initial call to display the timer immediately
  updateCountdown();
});

// --- FAQ Accordion Logic ---
document.querySelectorAll(".faq-item").forEach((item) => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");
  const icon = item.querySelector(".faq-question .icon"); // Get the icon

  question.addEventListener("click", () => {
    // Toggle the 'active' class on the faq-item
    item.classList.toggle("active");

    // Toggle 'active' class on the answer for styling (padding/max-height)
    answer.classList.toggle("active");

    // Change icon based on active state
    if (item.classList.contains("active")) {
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-times"); // Change to 'x' icon or 'fa-minus'
    } else {
      icon.classList.remove("fa-times"); // Or 'fa-minus'
      icon.classList.add("fa-plus");
    }

    // Optional: Close other open FAQs when one is opened
    document.querySelectorAll(".faq-item").forEach((otherItem) => {
      if (otherItem !== item && otherItem.classList.contains("active")) {
        otherItem.classList.remove("active");
        otherItem.querySelector(".faq-answer").classList.remove("active");
        otherItem
          .querySelector(".faq-question .icon")
          .classList.remove("fa-times"); // Or 'fa-minus'
        otherItem.querySelector(".faq-question .icon").classList.add("fa-plus");
      }
    });
  });
});



 

