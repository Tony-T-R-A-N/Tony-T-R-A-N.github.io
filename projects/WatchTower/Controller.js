/* inbox start */
function searchButtonClicked() {
    var search_text = getIdValue("search_text_input");
    var url = `https://api.legiscan.com/?key=81ad4ffd98930c69211f6f4be8e2124a&op=search&state=MN&query=${search_text}`;

    if (search_text != "") {
        requestWithQuery(url, parseInboxResponse, `<b>${search_text}</b>`);
    }
}

function parseInboxResponse(response, query) {
    var result_size = response.searchresult.summary.count;
    var result_limit = 15;
    var result_shown_size = 0;
    var description_limit = 135;

    if (result_size === 0) {
        showNoResults();
    } else {
        var result = "";

        for (i = 0; i < result_size && i < result_limit; i++) {
            var search_result = response.searchresult[i];
            var search_result_description = search_result.title;

            if (search_result.title.length >= description_limit) {
                search_result_description = `${search_result.title.substring(0, description_limit)}...`;
            }

            result += generateCard({
                bill_id: response.searchresult[i].bill_id,
                bill_number: search_result.bill_number,
                bill_description: search_result_description,
                last_action: search_result.last_action
            });
            result_shown_size++;
        }
        showInbox(result);
    }
    showSearchResultHeader(result_shown_size, result_size, query);
}
/* inbox end */

/* pane start */
function cardClicked(bill_id) {
    var url = `https://api.legiscan.com/?key=81ad4ffd98930c69211f6f4be8e2124a&op=getBill&state=MN&id=${bill_id}`;

    if (bill_id != "") {
        request(url, showPane);
    }
}
/* pane end */

/* filter start */
function topicFilterButtonClicked() {
    hideId("overlay");
    showFilterOverlay();
}

function filterButtonClicked() {
    hideId("overlay");
    showUnderConstruction();
}

function closeOverlay() {
    displayId("overlay");
}

function filterSearch() {
    var search_text = getIdValue("search_text_input");
    var query_text = `<b>${search_text}</b> and `;
    var topic_filter_size = 19;

    for (i = 1; i < topic_filter_size; i++) {
        var id = `option${i}`;

        if (getIdChecked(id) === true) {
            search_text += ` ${getIdValue(id)}`;
            query_text += `<b>${getIdName(id)}</b>, `;
        }
    }

    query_text = query_text.substring(0, query_text.length - 2)

    var url = `https://api.legiscan.com/?key=81ad4ffd98930c69211f6f4be8e2124a&op=search&state=MN&query=${search_text}`;

    requestWithQuery(url, parseInboxResponse, query_text);
    closeOverlay();
}
/* filter end */