var changeFlag = 0;
function change(){
    if(changeFlag==0){
        $('#changer').text('다시 바꾸기');
        changeFlag = 1;
    }else{
        $('#changer').text('체인져');
        changeFlag = 0;
    }
}

function short(){
    $('#short').text('hello');
}