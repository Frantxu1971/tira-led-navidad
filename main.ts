function Color (núm: number) {
    indice = núm
    while (indice < long_tira) {
        tira_led.setPixelColor(indice, randint(255, 16581375))
        indice += 2
    }
    return 1
}
input.onButtonPressed(Button.A, function () {
    estado = 1
})
input.onButtonPressed(Button.AB, function () {
    estado = 3
})
input.onButtonPressed(Button.B, function () {
    estado = 2
})
let indice = 0
let estado = 0
let long_tira = 0
let tira_led: neopixel.Strip = null
tira_led = neopixel.create(DigitalPin.P2, 50, NeoPixelMode.RGB)
long_tira = tira_led.length() - 1
estado = 0
basic.forever(function () {
    if (estado == 0) {
        tira_led.clear()
    } else if (estado == 1) {
        Color(1)
    } else if (estado == 2) {
        Color(0)
    } else {
        Color(1)
        Color(0)
    }
    tira_led.show()
    basic.pause(500)
    tira_led.clear()
    tira_led.show()
    basic.pause(500)
})
