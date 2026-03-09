from machine import Pin
from utime import sleep

led_red = Pin(16, Pin.OUT)
led_green = Pin(17, Pin.OUT)
led_blue = Pin(18, Pin.OUT)

# led=[led_red,led_green,led_blue]
# while True:
#     for i in led: #alternar entre os LEDs (na lista) ligando um a um
#         i.toggle()
#         sleep(0.5) #Mantém o LED ligado por MEIO segundo
        
while True:
    print("Vermelho")
    led_red.value(1)
    led_green.value(0)
    led_blue.value(0)
    sleep(1)
    
    print("Azul Claro")
    led_red.value(0)
    led_green.value(1)
    led_blue.value(1)
    sleep(1)
    
    print("Rosa/Roxo")
    led_red.value(1)
    led_green.value(0)
    led_blue.value(1)
    sleep(1)