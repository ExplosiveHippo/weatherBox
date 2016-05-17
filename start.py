from urllib import urlopen
import json

url = urlopen('http://api.openweathermap.org/data/2.5/weather?id=4930956&appid=bc48a1539dfd9b533a780f3d70d36e89').read()
result = json.loads(url)
wind = result['wind']['speed']
temp = result['main']['temp']
humidity = result['main']['humidity']

print "Current Wind Speed" , wind
print "Current Tempature" , temp
print "Current Humidity" , humidity
