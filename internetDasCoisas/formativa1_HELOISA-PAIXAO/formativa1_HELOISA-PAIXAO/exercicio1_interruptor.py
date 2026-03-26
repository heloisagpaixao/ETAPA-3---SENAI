from machine import Pin
from utime import sleep

button = Pin(17, Pin.IN)
led = Pin (16, Pin.OUT)

while True:
     #Variável que armazenará o estado do botão
    estado_botao = button.value()
     
    if estado_botao == 0:
        led.value(0)
        print("0 - Botão não pressionado! (LOW)")
        sleep(0.5)
    else:
        led.value(1)
        print("1 - Botão pressionado! (HIGH)")
        sleep(0.2)