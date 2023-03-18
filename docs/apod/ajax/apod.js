$(document).ready(
    function () {
        $("#view_button").click(getPicture);
    });

function getPicture() {
    const url = "https://api.nasa.gov/planetary/apod";
    $.ajax({
        url: url,
        type: "GET",
        data: {
            api_key: "vHLdss83caUv5xdY7nt4OxV2TOfAiwnk8VfB4UKb",
            date: $("#date").val()
        },
        dataType: "json",
        "success": loadData,
        "error": noPicture
    });
};

function noPicture(error) {
    alert(error.responseText);
}

function showPicture(data) {
    $("#pic").attr("src", data.url);
};

function showTitle(data) {
    $("#title").append(data.title);
}

function loadData(data) {
    showPicture(data);
    showTitle(data);
}