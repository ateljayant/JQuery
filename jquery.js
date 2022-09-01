//Q1 Que----

function seen () {
    $("#para").show();
}

function unseen () {
    $("#para").hide();
}

//Q2  Que---
function jqueryAjax(){

    $.ajax({
        url: "jsonplaceholder.typicode.com/todos/15",
        type: "GET",
        success:function(data){
            console.log(data);
        },
        erroe:function(err){
            console.log(err);
        }
    })
};
$("#button").click(function(){
    jqueryAjax();
}).