'use strict';

document.getElementById("android-btn").addEventListener('click', android);

function android() {

    document.getElementById("image").src = "images/Android-Logo.jpg"
    document.getElementById("exp").innerHTML = "Android Home"
    document.getElementById("exp").style.backgroundColor = "#a4c93b"
    document.getElementById("exp").href = "https://www.android.com/"
    document.getElementById("bo").style.backgroundColor = "#a4c93b"

}

document.getElementById("apple-btn").addEventListener('click', apple);

function apple() {

    document.getElementById("image").src = "images/Apple-Logo.jpg"
    document.getElementById("exp").innerHTML = "Apple Home"
    document.getElementById("exp").style.backgroundColor = "#b6bcca"
    document.getElementById("exp").href = "https://www.apple.com/"
    document.getElementById("bo").style.backgroundColor = "#b6bcca"
}