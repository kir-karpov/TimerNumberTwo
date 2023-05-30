document.addEventListener("DOMContentLoaded", function() {
  const currentDayElement = document.getElementById("current-day");
  const currentTimeElement = document.getElementById("current-time");
  const daysToNewYearElement = document.getElementById("days-to-new-year");

  // Получение текущей даты и времени
   const currentDate = new Date();
  const currentDay = currentDate.toLocaleDateString("en", { weekday: 'long' });
  const currentTime = currentDate.toLocaleTimeString("en", { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });

  // Определение времени суток
  let greeting;
  const currentHour = currentDate.getHours();
  if (currentHour >= 6 && currentHour < 12) {
    greeting = "Доброе утро";
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Добрый день";
  } else if (currentHour >= 18 && currentHour < 24) {
    greeting = "Добрый вечер";
  } else {
    greeting = "Доброй ночи";
  }

  // Расчет количества дней до Нового года
  const newYear = new Date(currentDate.getFullYear() + 1, 0, 1);
  const daysToNewYear = Math.floor((newYear - currentDate) / (1000 * 60 * 60 * 24));

  // Вывод данных на страницу
  currentDayElement.textContent = `Сегодня: ${currentDay}`;
  currentTimeElement.textContent = `Текущее время: ${currentTime}`;
  daysToNewYearElement.textContent = `До нового года осталось ${daysToNewYear} дней`;
});
