const boom = document.getElementById("boom");
const clap = document.getElementById("clap");
const hihat = document.getElementById("hihat");
const kick = document.getElementById("kick");
const openhat = document.getElementById("openhat");
const ride = document.getElementById("ride");
const snare = document.getElementById("snare");
const tink = document.getElementById("tink");
const tom = document.getElementById("tom");

const A = document.getElementById("A");
const S = document.getElementById("S");
const D = document.getElementById("D");
const F = document.getElementById("F");
const G = document.getElementById("G");
const H = document.getElementById("H");
const J = document.getElementById("J");
const K = document.getElementById("K");
const L = document.getElementById("L");

const img = document.getElementById ("img");
const metronome = document.getElementById ("metronome");


img.addEventListener ("click", () => {
    metronome.play ();

})
 

document.addEventListener("keypress", (e) => {
    if (e.key === "a")  {
        boom.pause();
        boom.currentTime = 0
        boom.play();
        A.style.backgroundColor = "transparent";
        img.style.transform = "scale(2.2)";
        onkeyup = () => {
        A.style.backgroundColor = "";
        img.style.transform = "scale(1.1)";
    }
    

    } else if (e.key === "s") {
        clap.currentTime = 0
        clap.play();
        S.style.backgroundColor = "transparent";
        img.style.transform = "scale(1.5)";
        onkeyup = () => {
        S.style.backgroundColor = "";
        img.style.transform = "scale(1.1)";
    }


    } else if (e.key === "d")  {
        boom.pause();
        boom.currentTime = 0
        boom.play();
        D.style.backgroundColor = "transparent";
        img.style.transform = "scale(2.2)";
        onkeyup = () => {
        D.style.backgroundColor = "";
        img.style.transform = "scale(1.1)";
    }


    } else if (e.key === "f") {
        kick.currentTime = 0
        kick.play();
        F.style.backgroundColor = "transparent";
        img.style.transform = "scale(1.5)";
        onkeyup = () => {
        F.style.backgroundColor = "";
        img.style.transform = "scale(1.1)";
    }


    } else if (e.key === "g") {
        openhat.currentTime = 0
        openhat.play();
        G.style.backgroundColor = "transparent";
        img.style.transform = "scale(2.2)";
        onkeyup = () => {
        G.style.backgroundColor = "";
        img.style.transform = "scale(1.1)";
    }


    } else if (e.key === "h") {
        ride.currentTime = 0
        ride.play();
        H.style.backgroundColor = "transparent";
        img.style.transform = "scale(1.5)";
        onkeyup = () => {
        H.style.backgroundColor = "";
        img.style.transform = "scale(1.1)";
    }

    } else if (e.key === "j") {
        snare.currentTime = 0
        snare.play();
        J.style.backgroundColor = "transparent";
        img.style.transform = "scale(2.2)";
        onkeyup = () => {
        J.style.backgroundColor = "";
        img.style.transform = "scale(1.1)";
    }

    } else if (e.key === "k"){
        tink.currentTime = 0
        tink.play();
        K.style.backgroundColor = "transparent";
        img.style.transform = "scale(1.5)";
        onkeyup = () => {
        K.style.backgroundColor = "";
        img.style.transform = "scale(1.1)";
    }

    } else if (e.key === "l") {
        tom.currentTime = 0
        tom.play();
        L.style.backgroundColor = "transparent";
        img.style.transform = "scale(2.2)";
        onkeyup = () => {
        L.style.backgroundColor = "";
        img.style.transform = "scale(1.1)";
    }
    }
  })
