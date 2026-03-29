from machine import Pin, ADC, PWM
from utime import sleep

# Botões
botao_cor = Pin(14, Pin.IN, Pin.PULL_DOWN)
botao_modo = Pin(15, Pin.IN, Pin.PULL_DOWN)

# Potenciômetro
pot = ADC(Pin(28))

# LED RGB
led_r = PWM(Pin(16))
led_g = PWM(Pin(17))
led_b = PWM(Pin(18))

for led in (led_r, led_g, led_b):
    led.freq(1000)

cor = 0   # 0=R, 1=G, 2=B
modo = 0  # 0=fixo, 1=piscando, 2=respiração

def set_cor(valor):
    led_r.duty_u16(0)
    led_g.duty_u16(0)
    led_b.duty_u16(0)

    if cor == 0:
        led_r.duty_u16(valor)
    elif cor == 1:
        led_g.duty_u16(valor)
    else:
        led_b.duty_u16(valor)

while True:
    if botao_cor.value():
        cor = (cor + 1) % 3
        sleep(0.3)

    if botao_modo.value():
        modo = (modo + 1) % 3
        sleep(0.3)

    brilho = pot.read_u16()

    # MODO 1 - FIXO
    if modo == 0:
        set_cor(brilho)

    # MODO 2 - PISCANDO
    elif modo == 1:
        set_cor(brilho)
        sleep(0.3)
        set_cor(0)
        sleep(0.3)

    # MODO 3 - RESPIRAÇÃO
    else:
        for i in range(0, brilho, 1000):
            set_cor(i)
            sleep(0.01)
        for i in range(brilho, 0, -1000):
            set_cor(i)
            sleep(0.01)