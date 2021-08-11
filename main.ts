input.calibrateCompass()
basic.forever(function () {
    serial.writeValue("x", input.compassHeading())
    if (input.compassHeading() > 180) {
        Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_SpinLeft, 75, 75)
    } else if (input.compassHeading() < 160) {
        Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_SpinRight, 75, 75)
    } else {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    }
})
