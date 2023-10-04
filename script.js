var today = dayjs();

$(function() {
    $("#currentDay").text(today.format("MMM DD, YYYY [at] hh:mm:ss a"));

    setInterval(function() {
        today = dayjs();
        $("#currentDay").text(today.format("MMM DD, YYYY [at] hh:mm:ss a"));
    }, 1000)
})