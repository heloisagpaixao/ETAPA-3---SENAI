from machine import Pin, ADC, PWM
from utime import sleep

potenciometro = ADC(Pin(28))
led = Pin(16, Pin.OUT)

while True:
    leitura_pot = potenciometro.read_u16()
    led.toggle()
    sleep(65535 / leitura_pot * 0.2)
    
    print("Valor leitura do potenciômetro:", leitura_pot)
    sleep(0.02)
