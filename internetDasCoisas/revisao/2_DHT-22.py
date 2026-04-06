from machine import Pin, PWM
from utime import sleep
from dht import DHT22 # Biblioteca DHT eu vou importar o DHT22!!!

sensor_temp = DHT22(Pin(16))
led = PWM(Pin(14))

led_pwm.freq(1000)


while True:
    sensor_temp.measure() # Diz ao sensor que ele iniciará/solicitará uma LEITURA
    temperatura = sensor_temp.temperature() # Leitura da TEMPERATURA
    
    if temperatura < 20:
        led.duty_u16(65535 * 10 / 100)
        print(f'ATENÇÃO, {temperatura} °C.')
    
    elif temperatura > 19 and temperatura < 31:
        led.duty_u16(65535 * 50 / 100)
        print(f'REGULAR, {temperatura} °C.')
        
    else:
        led.duty_u16(65535)
        print(f'ALERTURA, {temperatura} °C.')
    
    sleep(2) # Valor recomendado para uma leitura com MAIOR PRECISÃO (não colocar MENOS!!)
