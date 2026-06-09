const toneButton = document.getElementById('firstButton')
toneButton.addEventListener("click", () => {
    const audioCtx = new AudioContext();

    const oscillator = audioCtx.createOscillator();

    oscillator.type = "sine";
    oscillator.frequency.value = 1000; // Hz

    oscillator.connect(audioCtx.destination);

    oscillator.start();

    setTimeout(() => {
        oscillator.stop();
    }, 1000);
});