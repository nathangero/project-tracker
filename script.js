var today = dayjs();

$(function() {
    $("#currentDay").text(today.format("MMM DD, YYYY [at] hh:mm:ss a"));

    $("#btn-add-project").on("click", saveProject);

    setInterval(function() {
        today = dayjs();
        $("#currentDay").text(today.format("MMM DD, YYYY [at] hh:mm:ss a"));
    }, 1000)
})

function saveProject(event) {
    
}