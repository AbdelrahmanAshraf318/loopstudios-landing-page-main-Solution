$(document).ready(function() {

    $(".btn").on("click", function() {
        $("#anotherContent").toggle();
    });

    $(function() {
        $(".btn").click(function() {
            $(this).text(function(i, text) {
                return text === "SEEALL" ? "SEELESS" : "SEEALL";
            })
        });
    })
});