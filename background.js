chrome.tabs.onCreated.addListener((tab) => {
	chrome.tabs.executeScript(tab.id, {file:'chips-ahoy.js'});
})
