 function isLatin(char) {
	char = char.charCodeAt();
	return (char >= 65 && char <= 90) || (char >= 97 && char <= 122);
}

function caesar(a,i) {
		  
  i %= 26;

  if(!isLatin(a)) return a;
  a = a.charCodeAt();

  var start = a-(a-65)%32;
  var end = a-(a-65)%32+25;

  return String.fromCharCode(start + ((a+i-start) >= 26 ? (a+i-start)%26 : a+i-start));

} 
		
function vigenere(str, key, dec) {
  str = str.toString();
  key = key.toString();

  var keys = [];
  var diff = 0;
  var result = "";

  for(var i = 0; i < key.length; i++) {
  	diff = 0;
  	if(!isLatin(key.charAt(i))) continue;
  	diff = (key.charCodeAt(i) - 65) % 32;
    keys.push(diff);
  }

   if(keys.length == 0) throw "wrong key format";

   if(dec==1) keys = keys.map(function(num){ return 26 - num });

    var skipped = 0,
        iterator = 0;
    for(i = 0; i < str.length; i++) {
    	if(!isLatin(str.charAt(i))) {
    		skipped++;
    		skipped %= keys.length;
    		result += str.charAt(i);
    		continue;
    	}
    	iterator = i%keys.length-skipped >= 0 ?  i%keys.length-skipped : keys.length-(skipped-i%keys.length);
      result += caesar(str.charAt(i),keys[iterator]);
    }

  return result;
}