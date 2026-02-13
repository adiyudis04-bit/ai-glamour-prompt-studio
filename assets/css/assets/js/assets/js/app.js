document.getElementById("generateBtn").addEventListener("click", () => {
    const prompt = generatePrompt();
    document.getElementById("output").value = prompt;
});

document.getElementById("copyBtn").addEventListener("click", () => {
    const textarea = document.getElementById("output");
    textarea.select();
    document.execCommand("copy");
    alert("Prompt copied!");
});
