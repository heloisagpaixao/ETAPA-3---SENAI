from utime import sleep, ticks_us, ticks_diff
from machine import Pin, PWM

led_vermelho = Pin(13, Pin.OUT)
led_verde = Pin(12, Pin.OUT)

trig = Pin(2, Pin.OUT)
echo = Pin(3, Pin.IN)

while True:
    trig.low()
    sleep(0.002)
    
    trig.high()
    sleep(0.00001)
    trig.low()

    while echo.value() == 0:
        start = ticks_us()

    while echo.value() == 1:
        end = ticks_us()

    duracao = ticks_diff(end, start)
    distancia = (duracao * 0.0343) / 2

    print(f"Distância: {distancia:.2f} cm")
    
    if distancia >= 30:
        led_vermelho.off()
        led_verde.on()
        
    else if distancia < 30 and distancia >= 0:
        led_vermelho.on()
        led_verde.off()
    
    sleep(0.5)