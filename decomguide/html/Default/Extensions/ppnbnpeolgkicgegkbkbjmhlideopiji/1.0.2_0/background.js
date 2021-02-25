// Copyright (c) 2017 Microsoft Corporation. All rights reserved.

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        try {
            // Pass the sender into the native host to validate that the page is able to call this method.
            request.sender = sender.url;

            chrome.runtime.sendNativeMessage(
                "com.microsoft.browsercore",
                request,
                function (response) {
                    if (response != null) {
                        if (response.status && response.status == "Fail" && response.code) {
                            sendResponse(response);
                        }
                        else {
                            sendResponse({
                                status: "Success",
                                result: response
                            });
                        }
                    }
                    else {
                        sendResponse({
                            status: "Fail",
                            code: "NoSupport",
                            description: chrome.runtime.lastError.message,
                        });
                    }

                });
        }
        catch (e) {
            sendResponse({
                status: "Fail",
                code: "NoSupport",
                description: e.toString(),
            });
        }

        return true;
    });

chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.create({ url: 'https://www.office.com' });
});
