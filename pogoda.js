function getWeatherData() {
    fetch('api.openweathermap.org/data/2.5/weather?q=Minsk&appid=8fc25e7b735b6f38262fac8db5a7f3ad') // Замените URL на URL вашего API погоды
      .then(response => response.json())
      .then(data => {
        // Обновляем данные в виджете
        document.getElementById('location').textContent = data.location;
        document.getElementById('temperature').textContent = data.temperature;
        document.getElementById('description').textContent = data.description;
      })
      .catch(error => {
        console.log('Ошибка при получении данных о погоде:', error);
      });
  }
  
  // Обновляем данные о погоде каждые 10 секунд
  setInterval(getWeatherData, 10000);