from machine import Pin
from utime import sleep

# button_pull_down = Pin(15, Pin.IN)
# 
# while True:
#     #Variável que armazenará o estado do botão
#     estado_botao = button_pull_down.value()
#     
#     if estado_botao == 1:
#         print("1 - Botão pressionado! (HIGH)")
#     else:
#         print("0 - Botão não pressionado! (LOW)")
# 
#     sleep(0.2)
    
###--------------------------------------------------###

button_pull_up = Pin(15, Pin.IN)

while True:
    #Variável que armazenará o estado do botão
    estado_botao = button_pull_up.value()
    
    if estado_botao == 0:
        print("0 - Botão pressionado! (LOW)")
    else:
        print("1 - Botão não pressionado! (HIGH)")

    sleep(0.2)