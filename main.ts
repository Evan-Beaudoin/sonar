// Created By: Evan
// 
// Created on: Oct. 2020
// 
// This program: Uses sonar
let distance = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    basic.showNumber(distance)
    basic.pause(200)
})
