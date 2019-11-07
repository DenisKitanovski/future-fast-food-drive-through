/**
 * Created by Denis on 08.09.2017.
 */
$(document).ready(function() {
    $('.sauce').on({
        'click': function () {
            var src = $(".default", this).attr('src');
            console.log(src);
            if (src == 'img/icon/default.jpg') {
                $(".default", this).attr("src", "img/icon/selected.png");
            }
            else if (src == 'img/icon/selected.png') {
                $(".default", this).attr("src", "img/icon/default.jpg");
            }
        }
    });

    $(document).on('mouseenter', '.food-list', function () {
        $(this).find(":button").show();
    }).on('mouseleave', '.food-list', function () {
        $(this).find(":button").hide();
    });
});
function cancel(){
    $("#req1").hide();
    $("#cardNum").css("border", "1px solid grey");
    $("#req2").hide();
    $("#code").css("border", "1px solid grey");
}
function pay(){

    var pole1=document.getElementById("cardNum");
    var pole2=document.getElementById("code");


    if (!pole1.value.match(/\S/) || !pole2.value.match(/\S/) ) {
        if (!pole1.value.match(/\S/)) {
            $("#req1").show();
            $("#cardNum").css("border", "1px solid red");
        }


        else{
            $("#req1").hide();
            $("#cardNum").css("border", "1px solid grey");
        }
        if (!pole2.value.match(/\S/)) {
            $("#req2").show();
            $("#code").css("border", "1px solid red");
        }
        else{

            $("#req2").hide();
            $("#code").css("border", "1px solid grey");

        }
    }
    else {
        $("#payCard").hide();
        $("#finishCard").show();
        $("#payButtons").hide();
        $("#finishButton").show();
        $("#payHeader").hide();
        document.getElementById("orderID").innerHTML = Math.random();
        console.log($("#orderID").text());
    }



}
