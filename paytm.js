$(document).ready(()=>{
    $("#blankCheckbox").click(() => {
        $("#main").text("Changed")
        $("#blankCheckbox").click(() => {
            $("#main").text("Primary")
        })
    });
})

let a = () =>{
    $.ajax({
        type:"GET",
        dataType:"json",
        URL:"",
        success:(data)=>{

        },
        error:(data)=>{

        },
        timeout: 1000,
        beforeSend:()=>{

        },
        Complete:() =>{

        }
    })
}





