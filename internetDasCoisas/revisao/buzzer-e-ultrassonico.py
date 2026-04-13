from utime import sleep, ticks_us, ticks_diff
from machine import Pin, PWM

trig = Pin(2, Pin.OUT)
echo = Pin(3, Pin.IN)

buzzer = PWM(Pin(15))
#buzzer = Pin(15, Pin.OUT) - ATIVO
buzzer.freq(1000)

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
    
    if distancia >= 0 and distancia < 20:
        buzzer.duty_u16(62000)
        
    else:
        buzzer.duty_u16(0)
    
    sleep(1)