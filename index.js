const countdown = document.getElementById('countdown');
countdown.innerText = "Loading... Please wait."

var completeDate = new Date();
if (completeDate.getHours() > 21 && completeDate.getMinutes > 37) {
		completeDate.setDate(completeDate.getDate()+1)
}
//completeDate.setHours(23, 59, 59);
//completeDate.setMonth(12, 31)
completeDate.setHours(21, 37, 00)


let colours = [];
for (let i = 0; i < 100; i++) {
	colours.push("hsl(" + (360 * i / 100) + ",80%,50%)");
}

/*let i = 10;
countdown.innerText = i;
var _int1 = setInterval(function() {
	i -= 1;
	if (i==0) {
		afterCountdown(i);
		clearInterval(_int1);
	} else {
		countdown.innerText = i;
	}
}, 1000)*/
var _int1 = setInterval(function() {
	const remaining = completeDate - new Date();
	const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(remaining / (1000 * 60 * 60)) % 24;
  const minutes = Math.floor(remaining / (1000 * 60)) % 60;
  const seconds = Math.floor(remaining / 1000) % 60;

	if ( (days+hours+minutes+seconds)<=0 ) {
		afterCountdown();
		clearInterval(_int1);
	} else {
		countdown.innerText = `Zostało ${days!=0 ? days+' days, ' : ""}${hours} Godzin ${minutes} Minut ${seconds} Sekund.`;
	}
}, 1000)

function afterCountdown() {
		countdown.innerText="PAPIEŻOWA!";
		setInterval(() => (confetti()), 1000);
		i = 0;
		setInterval(function() {
			countdown.style.color = colours[i];
			i++
			if(i==101){
				i=0;
			}
	},10)
}

console.log("The page is not real")

