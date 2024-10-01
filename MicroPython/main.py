"""
Created by: Peter Zerbinos
Created on: Oct 2024
This module is a Micro:bit MicroPython program
"""

from microbit import *


display.clear()
display.show(Image.HAPPY)
sleep(400)
cookieNumber = 0

#Click cookie
display.clear
while True:
    if button_a.was_pressed():
        cookieNumber = cookieNumber + 1
        display.show(cookieNumber)

#Clear cookie
display.clear
while True:
    if button_b.was_pressed():
        cookieNumber = 0
        display.show(cookieNumber)