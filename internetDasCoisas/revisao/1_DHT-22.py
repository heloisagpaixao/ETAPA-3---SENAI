from machine import Pin
from utime import sleep

from dht import DHT22 # Biblioteca DHT eu vou importar o DHT22!!!

sensor_temp = DHT22(Pin(16))

while True:
    sensor_temp.measure() # Diz ao sensor que ele iniciará/solicitará uma LEITURA
    
    umidade = sensor_temp.humidity() # Leitura da UMIDADE
    temperatura = sensor_temp.temperature() # Leitura da TEMPERATURA
    
    print(f'A umidade é: {umidade}.')
    print(f'A temperatura é: {temperatura} °C.')
    
    sleep(2) # Valor recomendado para uma leitura com MAIOR PRECISÃO (não colocar MENOS!!)