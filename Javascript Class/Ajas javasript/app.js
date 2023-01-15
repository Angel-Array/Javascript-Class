var httpRequest = new XMLHttpRequest(); 
    function makeRequest () {
        httpRequest.onreadystatechange = writeContent;
        httpRequest.open("GET", "https://codeliber.com/test.php");
        httpRequest.send();

    }

    function writeContent(){
        if(httpRequest.readyState === 4) {
            if(httpRequest.status == 200) {
                document.getElementById("demo").innerHTML = httpRequest.responseText;
            } else{
                alert('there is a problem with the request');
            }
        }
    }

