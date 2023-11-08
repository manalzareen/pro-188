AFRAME.registerComponent('drive', {
    init: function () {

    },
    isVelocityActive: function () {

    },

    driveCar: function () {
        var multiply = 10
        var wheelRotation = 0

        window.addEventListener("key-down", function (e) {
            var wheel = document.querySelector("#control-wheel")
            if (e.code == "ArrowRight" && wheelRotation > -40) {
                wheelRotation -= 5
                wheel.setAttribute("rotation", { x: 0, y: 0, z: wheelRotation })
            }

            if (e.code == "ArrowLeft" && wheelRotation < 40) {
                wheelRotation += 5
                wheel.setAttribute("rotation", { x: 0, y: 0, z: wheelRotation })
            }

            var cameraDir = document.querySelector("#camera-rig")
            var cameraPos = cameraDir.getAttribute("position")
            var cameraRot = cameraDir.getAttribute("rotation")
            var cameramove = cameraDir.getAttribute("movement-controls")
            cameraDir.setAttribute("movement-controls", { "speed": cameramove.speed + 0.005 })


            if (e.code == "ArrowRight") {
                cameraRot.y -= 5
                cameraDir.setAttribute("rotation", { x: 0, y: cameraRot.y, z: 0 })                
                cameraDir.setAttribute("movement-controls", {"speed": cameramove.speed + 0.005})

            }
            if (e.code == "ArrowLeft") {
                cameraRot.y += 5
                cameraDir.setAttribute("rotation", { x: 0, y: cameraRot.y, z: 0 })                
                cameraDir.setAttribute("movement-controls", {"speed": cameramove.speed - 0.005})
            }
            if (e.code == "ArrowUp") {
                multiply +=0.5
                if (multiply <= 100 && cameraPos.z > -500) {                  
                    cameraDir.setAttribute("movement-controls", {"speed": cameramove.speed + 0.005})
                   
                    var accelerateCar = document.querySelector("#control-acce")
                    accelerateCar.setAttribute("material", "color", "green")
                   
                    var carSpeed = document.querySelector("#speed")
                    carSpeed.setAttribute("text", { value: multiply });
                }
            
            }

            
        })

    }

});