const countdown = document.getElementById('countdown');
countdown.innerText = "Ładowanie..."

let completeDate = new Date();
completeDate.setHours(21, 37, 00)


let colours = [];
for (let i = 0; i < 100; i++) {
	colours.push("hsl(" + (360 * i / 100) + ",80%,50%)");
}

var _int1 = setInterval(function() {
	const currentDate = new Date()
	var remaining = completeDate - currentDate;
	if(remaining < 0) {
		remaining = completeDate - currentDate.setDate(currentDate.getDate()-1);
	}
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

