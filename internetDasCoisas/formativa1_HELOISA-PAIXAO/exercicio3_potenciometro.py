from machine import Pin, ADC, PWM
from utime import sleep

potenciometro = ADC(Pin(28))
led = PWM(Pin(16))
led.freq(1000)

#Iniciando o LED desligado!
led.duty_u16(0)

while True:
    leitura_pot = potenciometro.read_u16()
    led.duty_u16(leitura_pot)
    
    print("Valor leitura do potenciômetro:", leitura_pot)
    sleep(0.2)