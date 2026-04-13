from utime import sleep
from machine import Pin, PWM

buzzer = PWM(Pin(15))
#buzzer = Pin(15, Pin.OUT) - ATIVO
buzzer.freq(1000)

while True:
    buzzer.duty_u16(62000)
    # buzzer.on()
    sleep(0.5)
    
    buzzer.duty_u16(100)
    #buzzer.off()
    sleep(0.5)