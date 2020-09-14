var getDate = () => {
    var dateTime = new Date();
    var date = dateTime.getDate();
    var month = dateTime.getMonth();
    var year = dateTime.getFullYear();
 	
 	date = (date < 10)? "0" + date : date;
 	year = year.toString().slice(2);
 	switch(month){
 		case 1:
 			month = "Jan";
 			break;
 		case 2:
 			month = "Feb";
 			break;	
 		case 3:
 			month = "Mar";
 			break;	
 		case 4:
 			month = "Apr";
 			break;	
 		case 5:
 			month = "May";
 			break;
 		case 6:
 			month = "Jun";
 			break;	
 		case 7:
 			month = "Jul";
 			break;
 		case 8:
 			month = "Aug";
 			break;
		case 9:
 			month = "Sep";
 			break;
 		case 10:
 			month = "Oct";
 			break;
 		case 11:
 			month = "Nov";
 			break;
 		case 12:
 			month = "Dec";
 			break;			 				
 	}

    return `${date}-${month}-${year}`
}

setInterval(() => {
    document.querySelector("#date").innerText = getDate();
}, 250);