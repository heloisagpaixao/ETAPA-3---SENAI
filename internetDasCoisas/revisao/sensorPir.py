from machine import Pin
from utime import sleep

pir = Pin(16, Pin.IN)

sleep(10)

while True:
    leitura = pir.value()
    
    if leitura == 1:
        print('Presença detectada!')
    else:
        print('Nada detectado.')

    sleep(0.5)