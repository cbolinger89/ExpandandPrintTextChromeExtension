//When you click the print button on the popup print the page
document.getElementById('printButton').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: () => {
        window.print();
      }
    });
  });
})