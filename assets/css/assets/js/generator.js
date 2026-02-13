function generatePrompt() {

    const artist = document.getElementById("artist").value;
    const pose = document.getElementById("pose").value;
    const outfit = document.getElementById("outfit").value;
    const style = document.getElementById("style").value;

    return `
Ultra detailed glamour portrait of a Japanese woman,
${artist},
${pose},
${outfit},
smooth glowing skin,
seductive yet elegant expression,
${style},
perfect anatomy, no distortion, no extra limbs.
`.trim();
}
