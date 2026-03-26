from machine import Pin, PWM
from utime import sleep

led = PWM(Pin(4))
led.freq(1000) # Frequência de 1kHz

while True:
    # Fade In (Aumenta o brilho)
    for brilho in range(0, 65535, 500):
        led.duty_u16(brilho)
        sleep(0.01)
    # Fade Out (Diminui o brilho)
    for brilho in range(65535, 0, -500):
        led.duty_u16(brilho)
        sleep(0.01)