// Al agitar incrementar el valor de la variable en 1
input.onGesture(Gesture.Shake, function () {
    Contador_Pasos += 1
    basic.showNumber(Contador_Pasos)
})
input.onButtonPressed(Button.AB, function () {
    Contador_Pasos = 0
    basic.clearScreen()
})
input.onGesture(Gesture.ThreeG, function () {
    basic.showIcon(IconNames.Heart)
})
// Valor inicial de la variable
// 
let Contador_Pasos = 0
Contador_Pasos = 0
basic.forever(function () {
	
})
