const selectElement = (element) => document.querySelector(element);

selectElement('.mobile-menu').addEventListener('click', () => {
       selectElement('header').classList.toggle('active');
});
////////////////////////////////////////

let events = {};

function addEvent() {
  const eventDate = document.getElementById("eventDate").value;
  const eventName = document.getElementById("eventName").value;
  if (eventDate && eventName) {
    if (!events[eventDate]) {
      events[eventDate] = [];
    }
    events[eventDate].push(eventName);

    
    document.getElementById("eventDate").value = "";
    document.getElementById("eventName").value = "";
    
    updateCalendar();
  }
}

function updateCalendar() {
  const calendarDiv = document.getElementById("calendar");
  calendarDiv.innerHTML = "";
  
  for (const date in events) {
    const eventList = document.createElement("ul");
    
    const dateHeader = document.createElement("h3");
    dateHeader.textContent = date;
    dateHeader.style.fontSize = "15px";
    
    for (const event of events[date]) {
      const eventItem = document.createElement("li");
      eventItem.textContent = event;
      eventItem.style.fontSize = "15px";
      eventList.appendChild(eventItem);
    }
    
    const dateContainer = document.createElement("div");
    dateContainer.classList.add("date-container");
    dateContainer.appendChild(dateHeader);
    dateContainer.appendChild(eventList);
    
    calendarDiv.appendChild(dateContainer);
  }
}

updateCalendar();


/////////////////////////////////////////////////////////////////

const daysContainer = document.querySelector(".days");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const todayBtn = document.querySelector(".today");
const month = document.querySelector(".month");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const date = new Date();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();

const renderCalendar = () => {
  date.setDate(1);
  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  const lastDayIndex = lastDay.getDay();
  const lastDayDate = lastDay.getDate();
  const prevLastDay = new Date(currentYear, currentMonth, 0);
  const prevLastDayDate = prevLastDay.getDate();
  const nextDays = 7 - lastDayIndex - 1;

  month.innerHTML = `${months[currentMonth]} ${currentYear}`;

  let days = "";

  for (let x = firstDay.getDay(); x > 0; x--) {
    days += `<div class="day prev">${prevLastDayDate - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDayDate; i++) {
    if (
      i === new Date().getDate() &&
      currentMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear()
    ) {
      days += `<div class="day today">${i}</div>`;
    } else {
      days += `<div class="day">${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="day next">${j}</div>`;
  }

  daysContainer.innerHTML = days;
  hideTodayBtn();
};

nextBtn.addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar();
});

prevBtn.addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar();
});

todayBtn.addEventListener("click", () => {
  currentMonth = date.getMonth();
  currentYear = date.getFullYear();
  renderCalendar();
});

function hideTodayBtn() {
  if (
    currentMonth === new Date().getMonth() &&
    currentYear === new Date().getFullYear()
  ) {
    todayBtn.style.display = "none";
  } else {
    todayBtn.style.display = "flex";
  }
}

renderCalendar();
