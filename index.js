let sessionName = sessionStorage.getItem("name");

if (sessionName === null){
    document.querySelector("div#content").innerHTML = "Sorry, you don't seem to have created a session."
}
else{
    document.querySelector("div#content").innerHTML = "<a href=\"./index.html\"><p>Back to index.html</p></a>"
}