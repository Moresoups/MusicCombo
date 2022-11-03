//rolling stones search


const options1 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ed0b354182msha048388c855c2fbp1f3ee1jsnebb54d352b31',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

// fetch info goes here
fetch('https://spotify23.p.rapidapi.com/search/?q=the%20rolling%20stones&type=albums&offset=0&limit=2&numberOfTopResults=2', options1)
	.then(res => res.json())
	.then(data => console.log(data))
	.catch(err => console.error(err));

// Combine elements:

let Water= false;
let Earth= false;
let Wind= false;
let Fire= false;
let Dark= false;
let Light= false;

function water() {
    Water = !Water;
    console.log("confirmed");
}

function earth() {
    Earth = !Earth;
    console.log("confirmed");
}

function wind() {
    Wind = !Wind
    console.log("confirmed");
}

function fire() {
    Fire = !Fire
    console.log("confirmed");
}

function dark() {
    Dark = !Dark
    console.log("confirmed");
}

function light() {
    Light = !Light
    console.log("confirmed");
}

function combine() {
if ((Wind == true) && (Earth == true) && (Water == false) && (Fire == false) && (Dark == false) && (Light == false))
fetch('https://spotify23.p.rapidapi.com/search/?q=the%20rolling%20stones&type=albums&offset=0&limit=2&numberOfTopResults=2', options1)
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));

else if ((Wind == true) && (Earth == false) && (Water == true) && (Fire == false) && (Dark == false) && (Light == false))
fetch('https://spotify23.p.rapidapi.com/search/?q=Deepsky&type=albums&offset=0&limit=2&numberOfTopResults=2', options1)
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));

else if ((Wind == true) && (Earth == false) && (Water == false) && (Fire == true) && (Dark == false) && (Light == false))
fetch('https://spotify23.p.rapidapi.com/search/?q=red%20hot%20chili%20peppers&type=albums&offset=0&limit=2&numberOfTopResults=2', options1)
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));

else if ((Wind == true) && (Earth == false) && (Water == false) && (Fire == false) && (Dark == true) && (Light == false))
fetch('https://spotify23.p.rapidapi.com/search/?q=TOBACCO&type=albums&offset=0&limit=2&numberOfTopResults=2', options1)
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));

else if ((Wind == true) && (Earth == false) && (Water == false) && (Fire == false) && (Dark == false) && (Light == true))
fetch('https://spotify23.p.rapidapi.com/search/?q=the%20white%20stripes&type=albums&offset=0&limit=2&numberOfTopResults=2', options1)
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));

else if ((Wind == false) && (Earth == true) && (Water == true) && (Fire == false) && (Dark == false) && (Light == false))
console.log("The Heavy");

else if ((Wind == false) && (Earth == true) && (Water == false) && (Fire == true) && (Dark == false) && (Light == false))
fetch('https://spotify23.p.rapidapi.com/search/?q=The%20Heavy&type=albums&offset=0&limit=2&numberOfTopResults=2', options1)
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));

else if ((Wind == false) && (Earth == true) && (Water == false) && (Fire == false) && (Dark == true) && (Light == false))
fetch('https://spotify23.p.rapidapi.com/search/?q=mf%20doom&type=albums&offset=0&limit=2&numberOfTopResults=2', options1)
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));

else if ((Wind == false) && (Earth == true) && (Water == false) && (Fire == false) && (Dark == false) && (Light == true))
fetch('https://spotify23.p.rapidapi.com/search/?q=Planet%20Waves&type=albums&offset=0&limit=2&numberOfTopResults=2', options1)
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));


//silvia
else if ((Wind == false) && (Earth == false) && (Water == true) && (Fire == true) && (Dark == false) && (Light == false))
console.log("TBD");

else if ((Wind == false) && (Earth == false) && (Water == true) && (Fire == false) && (Dark == true) && (Light == false))
console.log("TBD");

else if ((Wind == false) && (Earth == false) && (Water == true) && (Fire == false) && (Dark == false) && (Light == true))
console.log("TBD");



//connor
else if ((Wind == false) && (Earth == false) && (Water == false) && (Fire == true) && (Dark == true) && (Light == false))
fetch('https://spotify23.p.rapidapi.com/search/?q=cigarettes%20after%20sex&type=multi&offset=0&limit=10&numberOfTopResults=5', options1)
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));
console.log("Cigarettes After Sex");

else if ((Wind == false) && (Earth == false) && (Water == false) && (Fire == true) && (Dark == false) && (Light == true))
fetch('https://spotify23.p.rapidapi.com/search/?q=empire%20of%20the%20sun&type=multi&offset=0&limit=10&numberOfTopResults=5', options1)
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));
console.log("Empire of the Sun");

else if ((Wind == false) && (Earth == false) && (Water == false) && (Fire == false) && (Dark == true) && (Light == true))
fetch('https://spotify23.p.rapidapi.com/search/?q=the%20midnight&type=multi&offset=0&limit=10&numberOfTopResults=5', options1)
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));
console.log("The Midnight");

else
console.log("invalid selection")
}

//songs with fetch info


//The Heavy

'https://spotify23.p.rapidapi.com/search/?q=The%20Heavy&type=albums&offset=0&limit=2&numberOfTopResults=2'


//red hot chili peppers

'https://spotify23.p.rapidapi.com/search/?q=red%20hot%20chili%20peppers&type=albums&offset=0&limit=2&numberOfTopResults=2'

//the white stripes

'https://spotify23.p.rapidapi.com/search/?q=the%20white%20stripes&type=albums&offset=0&limit=2&numberOfTopResults=2'


//deepsky

'https://spotify23.p.rapidapi.com/search/?q=Deepsky&type=albums&offset=0&limit=2&numberOfTopResults=2'
		

//tobacco

'https://spotify23.p.rapidapi.com/search/?q=TOBACCO&type=albums&offset=0&limit=2&numberOfTopResults=2'
			

// MF DOOM

'https://spotify23.p.rapidapi.com/search/?q=mf%20doom&type=albums&offset=0&limit=2&numberOfTopResults=2'


// Planet Waves

'https://spotify23.p.rapidapi.com/search/?q=Planet%20Waves&type=albums&offset=0&limit=2&numberOfTopResults=2'


// The comet is coming 

'https://spotify23.p.rapidapi.com/search/?q=The%20Comet%20is%20Coming&type=albums&offset=0&limit=2&numberOfTopResults=2'

// The Midnight (Dark/Light)

'https://spotify23.p.rapidapi.com/search/?q=the%20midnight&type=multi&offset=0&limit=10&numberOfTopResults=5'

// Cigarettes After Sex (Fire/Dark)

'https://spotify23.p.rapidapi.com/search/?q=cigarettes%20after%20sex&type=multi&offset=0&limit=10&numberOfTopResults=5'

// Empire of the Sun (Fire/Light)

'https://spotify23.p.rapidapi.com/search/?q=empire%20of%20the%20sun&type=multi&offset=0&limit=10&numberOfTopResults=5'
