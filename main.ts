input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 100; index++) {
        cuteBot.turnleft()
    }
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
cuteBot.moveTime(cuteBot.Direction.forward, 100, 60)
basic.forever(function () {
    music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
})
