document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('checkPage');
    checkPageButton.addEventListener('click', function() {
        chrome.tabs.create({'url': "http://google.com"}, function(tab) {
            setTimeout(
                function(){
                    chrome.tabs.executeScript(tab.id, {
                        code:"setTimeout('document.title = roflmao',100)",
                        runAt: "document_start"
                    });
                }, 500
            );
        });
    }, false);
}, false);