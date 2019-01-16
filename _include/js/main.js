function analyze() {
    let data = [$('#text').val()];
    let text = {
        data: data
    };
    let url = 'http://192.168.88.158:5000'
    textStr = JSON.stringify(text);
    console.log(textStr);
    $.ajax({
        type: "POST",
        url: url,
        data: textStr,
        success: function (data) {
            //let obj = JSON.parse(data);
            let first = (parseFloat(data.substring(2, data.indexOf(' '))) * 100).toFixed(2);
            let second = (parseFloat(data.substring( data.indexOf(' '), data.length - 2)) * 100).toFixed(2);
            $('.negative').animate({
                width: first + '%'
            }, 1000);
            $('.positive').animate({
                width: second + '%'
            }, 1000);
            $('.negaPer').html(first);
            $('.posiPer').html(second);
            console.log('result', data, first, second);
        },
        error: function (a, b, c) {
            // debugger
            console.log(a, b, c);

        },
        contentType: 'application/json',
        dataType: 'json'
    });
    
}

function calculate(){
    let content = $('#text').val();
    let len = content.length;
    $('.already').html(len);
    if(len >= 140){
        $('.count').css({color: '#ef4848'});
    }
    else{
        $('.count').css({color: '#515151'});
    }
}

