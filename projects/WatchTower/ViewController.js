/* inner html start */
function showNoResults() {
    var no_result = generateTag(
        "NO RESULTS. TRY ADJUSTING SEARCH AND FILTERS.",
        "h1",
        "",
        "",
        ""
    );

    document.getElementById("inbox").innerHTML = generateTag(
        no_result,
        "div",
        "",
        "card_inbox_container",
        ""
    );
}

function showInitCard() {
    var init_card = generateCard({
            bill_id: "",
            bill_number:"The bill number is the bill's name.",
            bill_description:"Each bill has a short description.",
            last_action:"Here you will see the most recent update."
        });

    document.getElementById("inbox").innerHTML = generateTag(
        init_card,
        "div",
        "",
        "card_inbox_container",
        ""
    );
}

function showInitPane() {
    var init_pane = generatePane({
            bill_number:"The bill number is the bill's name.",
            bill_description: "Each bill has a short description.",
            bill_sponsors: "Each bill has sponsor(s).",
            bill_action: "Each bill has action(s).",
            pending_committee_name: "",
            bill_url: generateLink("", "")
        });

    document.getElementById("pane").innerHTML = init_pane;
}

function showFilterOverlay() {
    document.getElementById("overlay_content").innerHTML = 
        generateCheckBox("option1", "cities towns", "Cities and Towns") +
        generateCheckBox("option2", "bonds", "Bonds") +
        generateCheckBox("option3", "health department", "Health and Health Department") +
        generateCheckBox("option4", "education department", "Education and Education Department") +
        generateCheckBox("option5", "human server department", "Human Services and Human Services Department") +
        generateCheckBox("option6", "public safety department", "Public Safety Department") +
        generateCheckBox("option7", "taxation", "Taxation") +
        generateCheckBox("option8", "k 12", "Education-K-12") +
        generateCheckBox("option9", "governmental operations state", "Governmental Operations-State") +
        generateCheckBox("option10", "employment economic development department", "Employment and Economic Development Department") +
        generateCheckBox("option11", "transportation department", "Transportation and Transportation Department") +
        generateCheckBox("option12", "natural resources department", "Natural Resources Department") +
        generateCheckBox("option13", "agriculture department", "Agriculture and Agriculture Department") +
        generateCheckBox("option14", "insurance health", "Insurance-Health") +
        generateCheckBox("option15", "counties specific", "Counties-Specific") +
        generateCheckBox("option16", "data practices privacy", "Data Practices and Privacy") +
        generateCheckBox("option17", "drugs medicine", "Drugs and Medicine") +
        generateCheckBox("option18", "highways roads bridges", "Highways, Roads, and Bridges") +
        generateButton("", "filterSearch()", "Submit");
}

function showUnderConstruction() {
    document.getElementById("overlay_content").innerHTML = 
        generateTag("UNDER CONSTRUCTION", "h1", "", "", "") +
        generateButton("", "closeOverlay()", "Return");
}

function showInbox(result) {
    document.getElementById("inbox").innerHTML = generateTag(
        result,
        "div",
        "",
        "card_inbox_container",
        ""
    );
}

function showPane(result) {
    var sponsors = "";
    var sponsors_size = result.bill.sponsors.length;
    var latest_action = result.bill.history[result.bill.history.length-1];
    var latest_text = result.bill.texts[result.bill.texts.length-1].state_link;

    for (i = 0; i < sponsors_size; i++) {
        var sponsor = result.bill.sponsors[i];
        var party = ""

        switch(sponsor.party) {
            case "D":
                party = "DFL"
                break;
            case "R":
                party = "R"
                break;
            default:
                party = "None"
        }

        sponsors += `${sponsor.last_name} (${party}), `;
    }

    sponsors = sponsors.substring(0, sponsors.length-2);

    document.getElementById("pane").innerHTML = generatePane(
        {
            bill_number: result.bill.bill_number,
            bill_description: result.bill.description,
            bill_sponsors: sponsors,
            bill_action: `${latest_action.action}, ${latest_action.date}`,
            pending_committee_name: generateLatestAction(result.bill.committee.name),
            bill_url: generateLink("Read the Bill", latest_text)
        }
    );
}

function showSearchResultHeader(shownCount, total, query) {
    document.getElementById("card_results").innerHTML = 
    generateTag(
        generateImg("card_results_header", "./search_result.svg", "Search Result", 50, 50), 
        "p", 
        "", 
        "",
        ""
    ) +
    generateTag(
        `${shownCount} of ${total} results for ${query}`,
        "p",
        "card_results_description",
        "",
        ""
    );
}
/* inner html end */

/* id properties start */
function getElement(id) {
    return document.getElementById(id);
}

function getIdValue(id) {
    return document.getElementById(id).value;
}

function getIdName(id) {
    return document.getElementById(id).name;
}

function getIdChecked(id) {
    return document.getElementById(id).checked;
}

function displayId(id) {
    document.getElementById(id).style.display = "none";
}

function hideId(id) {
    document.getElementById(id).style.display = "block";
}
/* id properties end */