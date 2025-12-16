document.getElementById("submit").addEventListener("click", async () => {
  const content = document.getElementById("feedback").value;

  if (!content) {
    alert("Please enter feedback");
    return;
  }

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  await fetch("http://localhost:4000/feedback", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content,
      url: tab.url,
      pageTitle: tab.title
    })
  });

  document.getElementById("feedback").value = "";
  alert("Feedback sent!");
});
