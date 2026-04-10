from machine import Pin, PWM
from utime import sleep
from dht import DHT22

sensor_temp = DHT22(Pin(16))
led = PWM(Pin(14))

led.freq(1000)  # Corrigido aqui

while True:
    sensor_temp.measure()
    temperatura = sensor_temp.temperature()
    
    if temperatura < 20:
        led.duty_u16(int(65535 * 0.1))  # 10%
        print(f'FRIO: {temperatura} °C - brilho fraco')
    
    elif 20 <= temperatura <= 30:
        led.duty_u16(int(65535 * 0.5))  # 50%
        print(f'NORMAL: {temperatura} °C - brilho médio')
        
    else:
        led.duty_u16(65535)  # 100%
        print(f'ALERTA: {temperatura} °C - brilho máximo')
    
    sleep(2)