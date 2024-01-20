// popup.js
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('fillButton').addEventListener('click', function() {
    // Send a message to the content script to manipulate the content
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.scripting.executeScript(
        {
          target: { tabId: tabs[0].id },
          function: manipulateContent
        },
        function(results) {
          if (!chrome.runtime.lastError) {
            window.close();
          } else {
            alert('Failed to manipulate content in the active tab.');
          }
        }
      );
    });
  });
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function manipulateContent() {
  const buttons = document.getElementsByClassName("cvl-btn--blue chevron");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].click();
    //sleep(100)
  }
}
