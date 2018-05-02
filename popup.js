document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('checkPage');
    checkPageButton.addEventListener('click', function() {
        chrome.tabs.create({'url': "https://www.google.com"}, testing);
    });

    function testing() {
        chrome.tabs.executeScript(tab.id, {file: 'alert.js'});
    }
});