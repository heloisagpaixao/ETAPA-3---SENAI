from machine import Pin, ADC, PWM
from utime import sleep

ldr = ADC(26)

led_red = Pin(15, Pin.OUT)
led_green = Pin(16, Pin.OUT)
led_blue = Pin(17, Pin.OUT)

while True:
    leitura_luz = ldr.read_u16()
    print(leitura_luz)
    
    if leitura_luz <= 21845:
        led_red.value(1)
        led_green.value(0)
        led_blue.value(0)
    
    elif leitura_luz >= 43690:
        led_green.value(1)
        led_red.value(0)
        led_blue.value(0)
        
    else:
        led_green.value(0)
        led_red.value(0)
        led_blue.value(1)
        
    sleep(0.3)