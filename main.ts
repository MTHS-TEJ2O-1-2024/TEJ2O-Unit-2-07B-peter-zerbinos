/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Peter Zerbinos
 * Created on: Oct 2024
 * This program is cookie clicker
*/

//Start screen
basic.clearScreen()
basic.showIcon(IconNames.Happy)
let cookieNumber = 0

//Click cookie
input.onButtonPressed(Button.A, function() {
    basic.clearScreen()
    cookieNumber = cookieNumber + 1
    basic.showNumber(cookieNumber)
})

//Clear cookie
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    cookieNumber = 0
    basic.showNumber(cookieNumber)
})