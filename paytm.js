$(document).ready(() => {
    $("#blankCheckbox").on("click", () => {
        if (($("#main").text()) === "Primary") {
            $("#main").text("Changed")
        } else {
            $("#main").text("Primary")
        }
        //    for hide and show in text field
        // $( ".gg" ).autocomplete({
        //     source: [ "c++", "java", "php", "coldfusion", "javascript", "asp", "ruby" ]
        //   });
        // })

    });


let a = () => {
    $.ajax({
        type: "GET",
        dataType: "json",
        URL: "",
        success: (data) => {

        },
        error: (data) => {

        },
        timeout: 1000,
        beforeSend: () => {

        },
        Complete: () => {

        }
    })
}





