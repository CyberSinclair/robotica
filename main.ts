let sonar2 = 0
basic.showIcon(IconNames.Happy)
cuteBot.forward()
basic.forever(function () {
    sonar2 = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (sonar2 > 2 && sonar2 < 15) {
        cuteBot.motors(0, 0)
        for (let index = 0; index < 4; index++) {
            music.play(music.tonePlayable(587, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
            basic.pause(2000)
            cuteBot.motors(randint(-50, -100), -100)
            basic.pause(500)
        }
    } else {
        cuteBot.forward()
    }
})
