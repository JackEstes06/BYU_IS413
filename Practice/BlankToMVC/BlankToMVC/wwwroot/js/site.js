$("#btnSubmit").click(function (event) {
    alert(
        `From: ${$("#textFrom").val()}\n
        Subject ${$("#textSubject").val()}\n
        Message ${$("#textMessage").val()}\n`
    );
    
    $("#imgGanderson").fadeOut('slow')
})