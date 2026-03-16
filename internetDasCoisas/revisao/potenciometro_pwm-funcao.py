from machine import Pin, ADC, PWM
from utime import sleep

potenciometro = ADC(28)
led = PWM(Pin(14))
led.freq(1000)

while True:
    valor = potenciometro.read_u16()
    porcentagem = int((valor * 100) / 65535)
   
    led.duty_u16(valor)
   
    print(f"{porcentagem}%")
    sleep(0.5)