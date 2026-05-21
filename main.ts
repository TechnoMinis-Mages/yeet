input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 100; index++) {
        cuteBot.turnleft()
    }
})
input.onButtonPressed(Button.B, function () {
    cuteBot.moveTime(cuteBot.Direction.forward, 100, 60)
})
led.setBrightness(255)
basic.showString("2+2=1")
basic.showIcon(IconNames.No)
basic.clearScreen()
basic.showString("2+2=2")
basic.showIcon(IconNames.No)
basic.clearScreen()
basic.showString("2+2=3")
basic.showIcon(IconNames.No)
basic.clearScreen()
basic.showString("2+2=4")
basic.showIcon(IconNames.Yes)
basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    music.setVolume(255)
    music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
})
