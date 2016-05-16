$(function() {

	$.ajax(
		{
			url: "http://api.openweathermap.org/data/2.5/weather?id=4930956&appid=bc48a1539dfd9b533a780f3d70d36e89",
			success: function(result){
				console.log(result);
				var wind = result.wind.speed;
				var temp = result.main.temp;
				var humidity = result.main.humidity;
        		$(".widget .wind").append(wind);
        		$(".widget .temp").append(temp);
        		$(".widget .humidity").append(humidity);
   		 	}
   		});
});