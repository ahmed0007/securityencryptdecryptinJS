function runCipher(){
    var plaintext = document.getElementsByName('ei')[0].value;
    var ciphertext='';
    var shift = parseInt(document.getElementsByName('key')[0].value);
    for (var i = 0; i < plaintext.length; i++)
    {
        var c = plaintext.charCodeAt(i);
        var e = c + shift;
        ciphertext += String.fromCharCode(e);
    }
    document.getElementsByName('eo')[0].value= ciphertext;
    

}
function runPlan(){
    var ciphertext = document.getElementsByName('di')[0].value;
    var plaintext='';
    var shift = parseInt(document.getElementsByName('dkey')[0].value);
    for (var i = 0; i < ciphertext.length; i++)
    {
        var c = ciphertext.charCodeAt(i);
        var e = c - shift;
        plaintext += String.fromCharCode(e);
    }
    document.getElementsByName('do')[0].value= plaintext;
    

}