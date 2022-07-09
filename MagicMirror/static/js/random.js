var quote = ["Hello", "Hi", "Good day"];
var flag = 0;
counter = 0;
if (flag == 0){
    flag =1;
    document.getElementById("main").innerHTML = quote[counter];
}
else{
    setInterval(() => {
            document.getElementById("main").innerHTML = quote[counter];
            counter = counter + 1;
        if (counter>2) {
            counter = 0;
        }
    }, 10000);
}