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

// const options2 = {
//     method: 'GET',
//     headers:{
//         'Y-API-Key':'AIzaSyBvSlOj7atT9SC5BVN1Er896lGzME6Y6B0',
//         'Y-API-Host':'https://developers.google.com/youtube/v3'
//     }
// };

const options3 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ed0b354182msha048388c855c2fbp1f3ee1jsnebb54d352b31',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
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
//s
function combine() {
if ((Wind == true) && (Earth == true) && (Water == false) && (Fire == false) && (Dark == false) && (Light == false))

fetch('https://spotify23.p.rapidapi.com/search/?q=the%20rolling%20stones&type=albums&offset=0&limit=2&numberOfTopResults=2',options1)
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));


fetch('https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCB_Z6rBg3WW3NL4-QimhC2A&maxResults=1&key=AIzaSyBvSlOj7atT9SC5BVN1Er896lGzME6Y6B0')
    .then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

if ((Wind == true) && (Earth == false) && (Water == true) && (Fire == false) && (Dark == false) && (Light == false))

fetch('https://spotify23.p.rapidapi.com/search/?q=Deepsky&type=albums&offset=0&limit=2&numberOfTopResults=2', options1)
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));

fetch('https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCo-3ThNQmPmQSQL_L6Lx1_w&maxResults=1&key=AIzaSyBvSlOj7atT9SC5BVN1Er896lGzME6Y6B0')
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));


if ((Wind == true) && (Earth == false) && (Water == false) && (Fire == true) && (Dark == false) && (Light == false))
fetch('https://spotify23.p.rapidapi.com/search/?q=red%20hot%20chili%20peppers&type=albums&offset=0&limit=2&numberOfTopResults=2', options1)
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));
fetch('https://youtube.googleapis.com/youtube/v3/playlists?channelId=UCEuOwB9vSL1oPKGNdONB4ig&maxResults=1&key=AIzaSyBvSlOj7atT9SC5BVN1Er896lGzME6Y6B0')
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));

 if ((Wind == true) && (Earth == false) && (Water == false) && (Fire == false) && (Dark == true) && (Light == false))
fetch('https://spotify23.p.rapidapi.com/search/?q=TOBACCO&type=albums&offset=0&limit=2&numberOfTopResults=2', options1)
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));
fetch ('https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC1IJxltUbLLbjTPrkHQxnrg&maxResults=1&key=AIzaSyBvSlOj7atT9SC5BVN1Er896lGzME6Y6B0')
.then(data => console.log(data))
.catch(err => console.error(err));

 if ((Wind == true) && (Earth == false) && (Water == false) && (Fire == false) && (Dark == false) && (Light == true))
fetch('https://spotify23.p.rapidapi.com/search/?q=the%20white%20stripes&type=albums&offset=0&limit=2&numberOfTopResults=2', options1)
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));
fetch('https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC0sQemK7pgX5fYy0k1MFsHg&maxResults=1&key=AIzaSyBvSlOj7atT9SC5BVN1Er896lGzME6Y6B0')
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));


if ((Wind == false) && (Earth == true) && (Water == false) && (Fire == true) && (Dark == false) && (Light == false))
fetch('https://spotify23.p.rapidapi.com/search/?q=The%20Heavy&type=albums&offset=0&limit=2&numberOfTopResults=2', options1)
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));
fetch('https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCYDD7WruLEgEBfjxeor48aw&maxResults=1&key=AIzaSyBvSlOj7atT9SC5BVN1Er896lGzME6Y6B0')
.then(data => console.log(data))
.catch(err => console.error(err));
if ((Wind == false) && (Earth == true) && (Water == false) && (Fire == false) && (Dark == true) && (Light == false))
fetch('https://spotify23.p.rapidapi.com/search/?q=mf%20doom&type=albums&offset=0&limit=2&numberOfTopResults=2', options1)
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));
fetch('https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC6Y8dX3XdGsp2akU-SKfreA&maxResults=1&key=AIzaSyBvSlOj7atT9SC5BVN1Er896lGzME6Y6B0')
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));

if ((Wind == false) && (Earth == true) && (Water == false) && (Fire == false) && (Dark == false) && (Light == true))
fetch('https://spotify23.p.rapidapi.com/search/?q=Planet%20Waves&type=albums&offset=0&limit=2&numberOfTopResults=2', options1)
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));
fetch('https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCfZ5OqdpjhtD0OvR8P_nsGg&maxResults=1&key=AIzaSyBvSlOj7atT9SC5BVN1Er896lGzME6Y6B0')
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));
//Band Hillsong United
//music - Another in the Water
if ((Wind == false) && (Earth == false) && (Water == true) && (Fire == true) && (Dark == false) && (Light == false))
fetch('https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC4q12NoPNySbVqwpw4iO5Vg&maxResults=1&key=AIzaSyBvSlOj7atT9SC5BVN1Er896lGzME6Y6B0')
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));


//Agent Fresco
//music - Dark Water

if ((Wind == false) && (Earth == false) && (Water == true) && (Fire == false) && (Dark == true) && (Light == false))
fetch('https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC-PCZ7ffFGuaLc1xndULydw&maxResults=1&key=AIzaSyBvSlOj7atT9SC5BVN1Er896lGzME6Y6B0')
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));

if ((Wind == false) && (Earth == false) && (Water == true) && (Fire == false) && (Dark == false) && (Light == true))

//creedence clearwater revival

fetch('https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC69yJGpLNIMk6_ECLwxBZwA&maxResults=1&key=AIzaSyBvSlOj7atT9SC5BVN1Er896lGzME6Y6B0')
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));

//connor
 if ((Wind == false) && (Earth == false) && (Water == false) && (Fire == true) && (Dark == true) && (Light == false))
	fetch('https://spotify23.p.rapidapi.com/search/?q=cigarettes%20after%20sex&type=albums&offset=0&limit=2&numberOfTopResults=2', options1)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
 fetch('https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCqNxhPZoLJ81i5QaK4nqn8A&maxResults=1&key=AIzaSyBvSlOj7atT9SC5BVN1Er896lGzME6Y6B0')
.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));	
 if ((Wind == false) && (Earth == false) && (Water == false) && (Fire == true) && (Dark == false) && (Light == true))
	fetch('https://spotify23.p.rapidapi.com/search/?q=Empire%20of%20the%20Sun&type=albums&offset=0&limit=2&numberOfTopResults=2', options1)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
    fetch ('https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCyacMWc-JhzX6iq2PCF-4jw&maxResults=1&key=AIzaSyBvSlOj7atT9SC5BVN1Er896lGzME6Y6B0')
    .then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
if ((Wind == false) && (Earth == false) && (Water == false) && (Fire == false) && (Dark == true) && (Light == true))
	fetch('https://spotify23.p.rapidapi.com/search/?q=The%20Midnight&type=albums&offset=0&limit=2&numberOfTopResults=2', options1)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
fetch('https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC-sM_PLqzgktdUcW2LEKKkQ&maxResults=1&key=AIzaSyBvSlOj7atT9SC5BVN1Er896lGzME6Y6B0')
	
.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

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

'https://spotify23.p.rapidapi.com/search/?q=The%20Midnight&type=albums&offset=0&limit=2&numberOfTopResults=2'

'https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC-sM_PLqzgktdUcW2LEKKkQ&maxResults=1&key=AIzaSyBvSlOj7atT9SC5BVN1Er896lGzME6Y6B0'

// Cigarettes After Sex (Fire/Dark)

'https://spotify23.p.rapidapi.com/search/?q=cigarettes%20after%20sex&type=albums&offset=0&limit=2&numberOfTopResults=2'

'https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCqNxhPZoLJ81i5QaK4nqn8A&maxResults=1&key=AIzaSyBvSlOj7atT9SC5BVN1Er896lGzME6Y6B0'

// Empire of the Sun (Fire/Light)

'https://spotify23.p.rapidapi.com/search/?q=Empire%20of%20the%20Sun&type=albums&offset=0&limit=2&numberOfTopResults=2'

'https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCyacMWc-JhzX6iq2PCF-4jw&maxResults=1&key=AIzaSyBvSlOj7atT9SC5BVN1Er896lGzME6Y6B0'
