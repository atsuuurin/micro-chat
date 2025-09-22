input.onButtonPressed(Button.A, function () {
    radio.sendString("hi abdul")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
