from machine import Pin
from utime import sleep

button_pull_down = Pin(2, Pin.IN)
led = Pin (4, Pin.OUT)
 
while True:
     #Variável que armazenará o estado do botão
    estado_botao = button_pull_down.value()
     
    if estado_botao == 0:
        led.value(1)
        print("0 - Botão pressionado! (LOW)")
        sleep(0.5)


    else:
        led.value(0)
        print("1 - Botão não pressionado! (HIGH)")
        sleep(0.2)