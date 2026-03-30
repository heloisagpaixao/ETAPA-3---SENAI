from machine import Pin, PWM, ADC
from utime import sleep

red = PWM(Pin(13))
green = PWM(Pin(14))
blue = PWM(Pin(15))

# Declaração explícita de frequência e duty cycle inicial
red.freq(1000)
red.duty_u16(0)

green.freq(1000)
green.duty_u16(0)

blue.freq(1000)
blue.duty_u16(0)

potenciometro = ADC(28)
btn = Pin(17, Pin.IN, Pin.PULL_DOWN)

cor_ativa = 0
estado_ant = 0

while True:
    estado_atual = btn.value()
    # Verifica clique (transição de 0 para 1)
    
    if estado_atual == 1 and estado_ant == 0:
        cor_ativa += 1

        if cor_ativa > 2:
            cor_ativa = 0
    
    estado_ant = estado_atual
    
    brilho = potenciometro.read_u16()

    if cor_ativa == 0:
        red.duty_u16(brilho)
        green.duty_u16(0)
        blue.duty_u16(0)

    elif cor_ativa == 1:
        red.duty_u16(0)
        green.duty_u16(brilho)
        blue.duty_u16(0)

    elif cor_ativa == 2:
        red.duty_u16(0)
        green.duty_u16(0)
        blue.duty_u16(brilho)

    sleep(0.05)