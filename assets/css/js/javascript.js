//rollingstones youtbechannel
//channelId :UCB_Z6rBg3WW3NL4-QimhC2A 
//APIkey:AIzaSyBvSlOj7atT9SC5BVN1Er896lGzME6Y6B0
fetch('https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCB_Z6rBg3WW3NL4-QimhC2A&maxResults=1&key=AIzaSyBvSlOj7atT9SC5BVN1Er896lGzME6Y6B0')
.then (data => data.json())
.then (list =>console.log (list));

  //rolling stones search


const options1 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ed0b354182msha048388c855c2fbp1f3ee1jsnebb54d352b31',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};


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
console.log("TBD");

else if ((Wind == false) && (Earth == false) && (Water == false) && (Fire == true) && (Dark == false) && (Light == true))
console.log("TBD");

else if ((Wind == false) && (Earth == false) && (Water == false) && (Fire == false) && (Dark == true) && (Light == true))
console.log("TBD");

else
console.log("invalid selection")
}