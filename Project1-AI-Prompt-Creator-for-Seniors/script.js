function generatePrompt() {
  // 1. Get values from the UI
  const role = document.getElementById("role").value;
  const task = document.getElementById("task").value;
  const context = document.getElementById("context").value;

  // 2. Wrap in the RTF-C Logic
  const finalPrompt = `Act as a ${role}. Your task is to ${task}. The context is: ${context}. Please provide the output in a clear, professional format.`;

  // 3. Output to the result box
  document.getElementById("result").value = finalPrompt;
}

function copyPrompt() {
  const copyText = document.getElementById("result");
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
  alert("Prompt copied to clipboard!");
}
