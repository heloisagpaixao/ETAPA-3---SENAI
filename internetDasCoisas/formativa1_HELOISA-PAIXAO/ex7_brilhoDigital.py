from machine import Pin, PWM
from utime import sleep

botao_up = Pin(14, Pin.IN, Pin.PULL_DOWN)
botao_down = Pin(15, Pin.IN, Pin.PULL_DOWN)

led = PWM(Pin(16))
led.freq(1000)

brilho = 0
passo = 6553  # ~10%

while True:
    if botao_up.value() == 1:
        brilho += passo
        if brilho > 65535:
            brilho = 65535
        sleep(0.2)

    if botao_down.value() == 1:
        brilho -= passo
        if brilho < 0:
            brilho = 0
        sleep(0.2)

    led.duty_u16(brilho)