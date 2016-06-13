var data = {
    name: "Mahesha",
    sessionDate: "2017-02-07",
    duration: 60
};
var json = JSON.stringify(data);

var url = "/fitness";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader('Content-Type', 'application/json');

    /* code added later in chapter */
    xhr.addEventListener("load", function () {
        var responseData = JSON.parse(xhr.responseText);
        alert(responseData.message);
    });
    /* end */

xhr.send(json);                                                         