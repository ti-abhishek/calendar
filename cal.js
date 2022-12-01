var dt = new Date();

function JustDate() {

dt.setDate(1);
var day = dt.getDay();
var endDate = new Date(dt.getFullYear(),  dt.getMonth() + 1, 0).getDate();

var prevDate = new Date(dt.getFullYear(),  dt.getMonth(), 0).getDate();

var today = new Date();
console.log(today);

var months = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER"
];

document.getElementById("date").innerHTML = dt.toDateString();
document.getElementById("mo").innerHTML = months[dt.getMonth()];

var cells = "";

for(x = day; x > 0; x--) {
    cells += "<div class = 'prev-date'>" + (prevDate -x + 1) + "</div>";
}

for(i =1; i <= endDate; i++){
    if(i == today.getDate() && dt.getMonth() == today.getMonth()){
        cells += "<div class = 'today'>" + i + "</div>";
    }else{
    cells += "<div>" + i + "</div>";
  }
}

document.getElementsByClassName("days")[0].innerHTML = cells;

}

function moveDate(para){
    if(para == 'prev'){
        dt.setMonth(dt.getMonth() - 1);
    }else if(para == 'next') {
        dt.setMonth(dt.getMonth() + 1);
    }
    JustDate();
}



