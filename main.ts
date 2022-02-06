JoyCar.light(ToggleSwitch.On)
basic.forever(function () {
    if (JoyCar.obstacleavoidance(SensorLRSelection.Right) || JoyCar.obstacleavoidance(SensorLRSelection.Left)) {
        JoyCar.stop(StopIntensity.Soft)
        JoyCar.brakelight(ToggleSwitch.On)
        JoyCar.turn(
        FRDirection.Reverse,
        LRDirection.Left,
        100,
        5
        )
    } else if (false) {
    	
    } else {
        JoyCar.drive(FRDirection.Forward, 100)
    }
})
