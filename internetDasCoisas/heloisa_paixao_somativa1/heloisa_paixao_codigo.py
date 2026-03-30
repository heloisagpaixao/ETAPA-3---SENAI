# from machine import Pin, PWM
# from utime import sleep
# 
# # declaração dos BOTÕES
# bt_down = Pin(17, Pin.IN)
# bt_up = Pin(16, Pin.IN)
# 
# # declaração dos LEDS
# led_red = Pin (15, Pin.OUT)
# led_green = Pin (14, Pin.OUT)
# 
# # garantindo que os LEDS começarão DESLIGADOS
# led_red.value(0)
# led_green.value(0)
# 
# while True:
#   # criando variáveis para armazenar o valor dos botões
#   est_down = bt_down.value()
#   est_up = bt_up.value()
# 
#   if est_down == 1:
#     led_red.value(0)
#     led_green.value(1)
#     print("MÁQUINA A OPERAR!")
# 
#   elif est_up == 0 and est_down == 0:
#     led_red.toggle()
#     led_green.value(0)
#     print("ALERTA: EMERGÊNCIA ACIONADA, MÁQUINA PARADA.")
# 
#   elif est_up == 0 and est_down == 1:
#     led_red.toggle()
#     led_green.value(0)
#     print("ALERTA: EMERGÊNCIA ACIONADA, MÁQUINA PARADA.")
#   
#   sleep(0.35)
  
#############################################################################
  
from machine import Pin, PWM
from utime import sleep

# declaração dos BOTÕES
bt_down = Pin(17, Pin.IN)
bt_up = Pin(16, Pin.IN)

# declaração dos LEDS
led_red = Pin (15, Pin.OUT)
led_green = Pin (14, Pin.OUT)

# garantindo que os LEDS começarão DESLIGADOS
led_red.value(0)
led_green.value(0)

# variáveis para gravar o ÚLTIMO ESTADO dos BOTÕES
ultimo_estado_operar = 0
ultimo_estado_emergencia = 0

while True:
  # criando variáveis para armazenar o valor dos botões
  estado_operar = bt_down.value()
  estado_emergencia = bt_up.value()

  if estado_emergencia == 1 and ultimo_estado_emergencia == 0:
    led_red.toggle()
    led_green.value(0)
    print("ALERTA: EMERGÊNCIA ACIONADA, MÁQUINA PARADA.")

  if estado_operar == 1 and ultimo_estado_operar == 0:
    led_red.value(0)
    led_green.value(1)
    print("MÁQUINA A OPERAR!")

  elif estado_emergencia == 0:
    led_red.toggle()
    led_green.value(0)
    print("ALERTA: EMERGÊNCIA ACIONADA, MÁQUINA PARADA.")

  ultimo_estado_operar = estado_operar
  ultimo_estado_emergencia = estado_emergencia

  sleep(0.35)