from machine import Pin, PWM
from utime import sleep

button = Pin(17, Pin.IN)
led = PWM(Pin(16))
led.freq(1000)

ultimo_estado = 1

while True:
    estado_botao = button.value()
     
    if estado_botao == 1 and ultimo_estado == 1:
        ultimo_estado = ultimo_estado + 1
        print("2 - Botão pressionado! (SUBINDO)")
        for i in range(0, 65535, 4000):
            led.duty_u16(i)
            sleep(0.2)
        
    elif estado_botao == 1 and ultimo_estado == 2:
        ultimo_estado == 1
        print ("1 - Botão não pressionado! (DESCENDO)")
        for j in range(65535, 0, -4000):
            led.duty_u16(j)
            sleep(0.2)
            
    sleep(0.2)