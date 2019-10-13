/* generate html start */
function generateTag(text, tag, id, html_class, onclick) {
    return `<${tag} id="${id}" class="${html_class}" onclick="${onclick}">${text}</${tag}>`;
}

function generateLink(text, link) {
    return `<a href="${link}">${text}</a>`;
}

function generateCheckBox(name, value, text) {
    return `<input type="checkbox" id="${name}" name="${text}" value="${value}">${text}<br>`;
}

function generateButton(html_class, on_click, text) {
    return `<button class="${html_class}" onclick="${on_click}">${text}</button>`;
}

function generateImg(id, src, alt, height, width) {
    return `<img id="${id}" src="${src}" alt="${alt}" height="${height}" width="${width}"></img>`;
}

function generateCard(data) {
    var card_content = generateTag(data.bill_number, "p", "", "card_id", "") +
        generateTag("Short Description:", "p", "", "card_header", "") +
        generateTag(data.bill_description, "p", "", "card_description", "") +
        generateTag("Latest Action:", "p", "", "card_header", "") +
        generateTag(data.last_action, "p", "", "", "");

    return generateTag(card_content, "div", "", "card_container", `cardClicked(${data.bill_id})`);
}

function generatePane(data) {
    var pane_content = generateTag(data.bill_number, "p", "pane_bill_number", "", "") +
        generateTag("What is this bill about?", "p", "", "pane_header", "") +
        generateTag(data.bill_description, "p", "", "", "") +
        data.bill_url +
        generateTag("Where is this bill?", "p", "", "pane_header", "") +
        generateTag(data.pending_committee_name, "p", "", "", "") +
        generateTag(data.bill_action, "p", "", "", "") +
        generateTag("Who is signed onto the bill?", "p", "", "pane_header", "") +
        generateTag(data.bill_sponsors, "p", "", "", "");

    return generateTag(pane_content, "div", "pane_content", "", "");
}

function generateLatestAction(committee_name) {
    return `This bill is awaiting approval from ${committee_name}.`
}
/* generate html end */