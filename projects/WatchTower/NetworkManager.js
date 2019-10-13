/* network start */
function request(url, parser) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (this.status == 200) {
            var response = JSON.parse(this.responseText);
            return parser(response);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function requestWithQuery(url, parser, query) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (this.status == 200) {
            var response = JSON.parse(this.responseText);
            return parser(response, query);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
/* network end */