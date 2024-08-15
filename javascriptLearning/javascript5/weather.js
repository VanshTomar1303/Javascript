async function fetchData() {
    try {
        const city = document.getElementById("cityName").value.toLowerCase();
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=a9e0b48aae9d41bb8ef142853241603&q=${city}`);
        if (!response.ok) {
            throw new Error("Couldn't find");
        }
        
        const data = await response.json(); // Convert response to JSON
        const temperature = data.current.temp_c; // Extract temperature from response JSON
        const humidity = data.current.humidity;

        const cityName=document.getElementById("city");
        cityName.textContent=city;

        const tempElement = document.getElementById("temperature");
        tempElement.textContent += `${temperature}°C`;

        const humidElement = document.getElementById("humidity");
        humidElement.textContent += `${humidity}`;

    } catch (error) {
        console.error(error);
    }
}