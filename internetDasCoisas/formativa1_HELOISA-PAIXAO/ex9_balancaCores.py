from machine import Pin, ADC, PWM
from utime import sleep

pot = ADC(Pin(28))

led_r = PWM(Pin(16))
led_b = PWM(Pin(18))

led_r.freq(1000)
led_b.freq(1000)

while True:
    valor = pot.read_u16()

    vermelho = 65535 - valor
    azul = valor

    led_r.duty_u16(vermelho)
    led_b.duty_u16(azul)

    sleep(0.05)