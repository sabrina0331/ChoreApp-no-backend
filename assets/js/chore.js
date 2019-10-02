$("ul").on("click","li",function(){
    $(this).toggleClass('completed');
});

//click on x to delete chore 
$("ul").on("click","span",function(event){
    //$(this) refer to span
    $(this).parent().fadeOut(500,function(){
        //$(this) refer to li
        $(this).remove();
    })
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grab text in input
        var choreText = $(this).val();
        $(this).val("");
        //create  a new li 
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+ choreText+ "</li>")
    }
})

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});