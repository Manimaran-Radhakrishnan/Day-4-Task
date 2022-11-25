
// question-1:

var obj1 = {
    "name" : "Person1",
    "age" : "5"
};
var obj2 = {
    "age" : "5",
    "name" : "Persion1"
};
if(JSON.stringify(obj1) === JSON.stringify(obj2))
{
    console.log(true);
}else{
    console.log(false);
}

// Expected output :  false


// question-2:

var request = new XMLHttpRequest();
        request.open("GET","https://restcountries.com/v3.1/all",true)
        request.send();
        request.onload = function() {
            var data = JSON.parse(this.response);
            console.log(data);
            for(i=0; i<data.length; i++)
            console.log(data[i].name.common,data[i].flags);     
            }


// question-3:

var request = new XMLHttpRequest();
        request.open("GET","https://restcountries.com/v3.1/all",true)
        request.send();
        request.onload = function() {
            var data = JSON.parse(this.response);
            console.log(data);
            for(i=0; i<data.length; i++)
            console.log(data[i].name.common,data[i].region,data[i].subregion,data[i].population);   
            }