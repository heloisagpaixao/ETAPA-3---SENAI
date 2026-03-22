from machine import Pin, PWM, ADC

led = PWM(Pin(4))
led.freq(1000)
potenciometro = ADC(Pin(26)) # Pino ADC0

while True:
    valor = potenciometro.read_u16() # Lê de 0 a 65535
    led.duty_u16(valor) # Aplica diretamente ao brilho