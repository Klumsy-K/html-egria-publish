function CompareValues(id1,id2){
const str1 = document.getElementById(id1).value;
const str2 = document.getElementById(id2).value;

if(str1 != ''){
    if(str1.toLowerCase() == str2.toLowerCase()){
    document.getElementById("message").style.color = "green";
    document.getElementById("message").innerHTML = "Great Job!!!";
         }
    else {
    document.getElementById("message").style.color = "red";
    document.getElementById("message").innerHTML = "Almost. Very nice try, don't give up!!! You can do it!!!";
         }
         if(str1.length <5){
         document.getElementById("message").style.color = "red";
         document.getElementById("message").innerHTML = "Na-uh, it has to be 5 characters at least, because reasons.";
         }
    } else {
    document.getElementById("message").style.color = "red";
        document.getElementById("message").innerHTML = "No dude, that's cheating lol. Comeon type something at least";
    }

}