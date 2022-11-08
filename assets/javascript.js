//rollingstones youtbechannel
//channelId :UCB_Z6rBg3WW3NL4-QimhC2A 
//APIkey:AIzaSyBvSlOj7atT9SC5BVN1Er896lGzME6Y6B0
// fetch('https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCB_Z6rBg3WW3NL4-QimhC2A&maxResults=1&key=AIzaSyBvSlOj7atT9SC5BVN1Er896lGzME6Y6B0')
// .then (data => data.json())
// .then (list =>console.log (list));

//rolling stones search


const options1 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ed0b354182msha048388c855c2fbp1f3ee1jsnebb54d352b31',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

// const options3 = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'ed0b354182msha048388c855c2fbp1f3ee1jsnebb54d352b31',
// 		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
// 	}
// };

// fetch info goes here
fetch('https://spotify23.p.rapidapi.com/search/?q=the%20rolling%20stones&type=albums&offset=0&limit=2&numberOfTopResults=2', options1)
	.then(res => res.json())
	.then(data => console.log(data))
	.catch(err => console.error(err));

// Combine elements:

let Water = false;
let Earth = false;
let Wind = false;
let Fire = false;
let Dark = false;
let Light = false;

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
function generateUrl() {
	let bandName;
	if ((Wind == true) && (Earth == true) && (Water == false) && (Fire == false) && (Dark == false) && (Light == false)){
		bandName = "the%20rolling%20stones"
	}
	if ((Wind == true) && (Earth == false) && (Water == true) && (Fire == false) && (Dark == false) && (Light == false)) {
		bandName = "Deepsky"
	}
	if ((Wind == true) && (Earth == false) && (Water == false) && (Fire == true) && (Dark == false) && (Light == false)) {
		bandName = "red%20hot%20chili%20peppers"
	}
	if ((Wind == true) && (Earth == false) && (Water == false) && (Fire == false) && (Dark == true) && (Light == false)) {
		bandName = "TOBACCO"
	}
	if ((Wind == true) && (Earth == false) && (Water == false) && (Fire == false) && (Dark == false) && (Light == true)) {
		bandName = "the%20white%20stripes"
	}
	if ((Wind == false) && (Earth == true) && (Water == true) && (Fire == false) && (Dark == false) && (Light == false)) {
		bandName = "The%20Heavy"
	}
	if ((Wind == false) && (Earth == true) && (Water == false) && (Fire == true) && (Dark == false) && (Light == false)) {
		bandName = "The%20Comet%20is%20Coming"
	}
	if ((Wind == false) && (Earth == true) && (Water == false) && (Fire == false) && (Dark == true) && (Light == false)) {
		bandName = "mf%20doom"
	}
	if ((Wind == false) && (Earth == true) && (Water == false) && (Fire == false) && (Dark == false) && (Light == true)) {
		bandName = "Planet%20Waves"
	}
	if ((Wind == false) && (Earth == false) && (Water == false) && (Fire == true) && (Dark == true) && (Light == false)) {
		bandName = "cigarettes%20after%20sex"
	}
	if ((Wind == false) && (Earth == false) && (Water == false) && (Fire == true) && (Dark == false) && (Light == true)) {
		bandName = "Empire%20of%20the%20Sun"
	}
	if ((Wind == false) && (Earth == false) && (Water == false) && (Fire == false) && (Dark == true) && (Light == true)) {
		bandName = "The%20Midnight"
	}
	if ((Wind == false) && (Earth == false) && (Water == true) && (Fire == true) && (Dark == false) && (Light == false)) {
		bandName = "Hillsong%20United"
	}
	if ((Wind == false) && (Earth == false) && (Water == true) && (Fire == false) && (Dark == true) && (Light == false)) {
		bandName = "Agent%20Fresco"
	}
	if ((Wind == false) && (Earth == false) && (Water == true) && (Fire == false) && (Dark == false) && (Light == true)) {
		bandName = "creedence%20clearwater%20revival"
	}
	return `https://spotify23.p.rapidapi.com/search/?q=${bandName}&type=albums&offset=0&limit=2&numberOfTopResults=2`

	// if (response === 404) {
	// 	console.log("Invalid Selection")
	// }
}

function generateUrl2() {
	let youtubeName;
	if ((Wind == true) && (Earth == true) && (Water == false) && (Fire == false) && (Dark == false) && (Light == false)){
		youtubeName = 'UCB_Z6rBg3WW3NL4-QimhC2A'
	}
	if ((Wind == true) && (Earth == false) && (Water == true) && (Fire == false) && (Dark == false) && (Light == false)) {
		youtubeName = 'UCo-3ThNQmPmQSQL_L6Lx1_w'
	}
	if ((Wind == true) && (Earth == false) && (Water == false) && (Fire == true) && (Dark == false) && (Light == false)) {
		youtubeName = "UCEuOwB9vSL1oPKGNdONB4ig"
	}
	if ((Wind == true) && (Earth == false) && (Water == false) && (Fire == false) && (Dark == true) && (Light == false)) {
		youtubeName = "UC1IJxltUbLLbjTPrkHQxnrg"
	}
	if ((Wind == true) && (Earth == false) && (Water == false) && (Fire == false) && (Dark == false) && (Light == true)) {
		youtubeName = "UC0sQemK7pgX5fYy0k1MFsHg"
	}
	if ((Wind == false) && (Earth == true) && (Water == true) && (Fire == false) && (Dark == false) && (Light == false)) {
		youtubeName = "UCYDD7WruLEgEBfjxeor48aw"
	}
	if ((Wind == false) && (Earth == true) && (Water == false) && (Fire == true) && (Dark == false) && (Light == false)) {
		youtubeName = "UCAxylzB43zb-5vESDQv9QxQ"
	}
	if ((Wind == false) && (Earth == true) && (Water == false) && (Fire == false) && (Dark == true) && (Light == false)) {
		youtubeName = "UC6Y8dX3XdGsp2akU-SKfreA"
	}
	if ((Wind == false) && (Earth == true) && (Water == false) && (Fire == false) && (Dark == false) && (Light == true)) {
		youtubeName = "UCfZ5OqdpjhtD0OvR8P_nsGg"
	}
	if ((Wind == false) && (Earth == false) && (Water == false) && (Fire == true) && (Dark == true) && (Light == false)) {
		youtubeName = "UCqNxhPZoLJ81i5QaK4nqn8A"
	}
	if ((Wind == false) && (Earth == false) && (Water == false) && (Fire == true) && (Dark == false) && (Light == true)) {
		youtubeName = "UCyacMWc-JhzX6iq2PCF-4jw"
	}
	if ((Wind == false) && (Earth == false) && (Water == false) && (Fire == false) && (Dark == true) && (Light == true)) {
		youtubeName = "UC-sM_PLqzgktdUcW2LEKKkQ"
	}
	if ((Wind == false) && (Earth == false) && (Water == true) && (Fire == true) && (Dark == false) && (Light == false)) {
		youtubeName = "UC4q12NoPNySbVqwpw4iO5Vg"
	}
	if ((Wind == false) && (Earth == false) && (Water == true) && (Fire == false) && (Dark == true) && (Light == false)) {
		youtubeName = "UC-PCZ7ffFGuaLc1xndULydw"
	}
	if ((Wind == false) && (Earth == false) && (Water == true) && (Fire == false) && (Dark == false) && (Light == true)) {
		youtubeName = "UC69yJGpLNIMk6_ECLwxBZwA"
	}
	return 'https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId='+youtubeName+'&maxResults=1&key=AIzaSyBvSlOj7atT9SC5BVN1Er896lGzME6Y6B0'
	
	// if (response === 404) {
	// 	console.log("Invalid Selection")
	// }

}

function combine() {
	const url1 = generateUrl();
		fetch(url1, options1)
			.then(res => res.json())
			.then(data => console.log(data))
			.catch(err => console.error(err));
	const url2 = generateUrl2();
		fetch(url2)
			.then(res => res.json())
			.then(data => console.log(data))
			.catch(err => console.error(err));



	// else
	// 	console.log("invalid selection")
}

//songs with fetch info


// The Rolling Stones
'https://spotify23.p.rapidapi.com/search/?q=the%20rolling%20stones&type=albums&offset=0&limit=2&numberOfTopResults=2'
'https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCB_Z6rBg3WW3NL4-QimhC2A&maxResults=1&key=AIzaSyBvSlOj7atT9SC5BVN1Er896lGzME6Y6B0'

//The Heavy

'https://spotify23.p.rapidapi.com/search/?q=The%20Heavy&type=albums&offset=0&limit=2&numberOfTopResults=2'
'https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCYDD7WruLEgEBfjxeor48aw&maxResults=1&key=AIzaSyBvSlOj7atT9SC5BVN1Er896lGzME6Y6B0'


//red hot chili peppers

'https://spotify23.p.rapidapi.com/search/?q=red%20hot%20chili%20peppers&type=albums&offset=0&limit=2&numberOfTopResults=2'
'https://youtube.googleapis.com/youtube/v3/playlists?channelId=UCEuOwB9vSL1oPKGNdONB4ig&maxResults=1&key=AIzaSyBvSlOj7atT9SC5BVN1Er896lGzME6Y6B0'

//the white stripes

'https://spotify23.p.rapidapi.com/search/?q=the%20white%20stripes&type=albums&offset=0&limit=2&numberOfTopResults=2'
'https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC0sQemK7pgX5fYy0k1MFsHg&maxResults=1&key=AIzaSyBvSlOj7atT9SC5BVN1Er896lGzME6Y6B0'


//deepsky

'https://spotify23.p.rapidapi.com/search/?q=Deepsky&type=albums&offset=0&limit=2&numberOfTopResults=2'
'https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCo-3ThNQmPmQSQL_L6Lx1_w&maxResults=1&key=AIzaSyBvSlOj7atT9SC5BVN1Er896lGzME6Y6B0'


//tobacco

'https://spotify23.p.rapidapi.com/search/?q=TOBACCO&type=albums&offset=0&limit=2&numberOfTopResults=2'
'https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC1IJxltUbLLbjTPrkHQxnrg&maxResults=1&key=AIzaSyBvSlOj7atT9SC5BVN1Er896lGzME6Y6B0'


// MF DOOM

'https://spotify23.p.rapidapi.com/search/?q=mf%20doom&type=albums&offset=0&limit=2&numberOfTopResults=2'
'https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC6Y8dX3XdGsp2akU-SKfreA&maxResults=1&key=AIzaSyBvSlOj7atT9SC5BVN1Er896lGzME6Y6B0'


// Planet Waves

'https://spotify23.p.rapidapi.com/search/?q=Planet%20Waves&type=albums&offset=0&limit=2&numberOfTopResults=2'
'https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCfZ5OqdpjhtD0OvR8P_nsGg&maxResults=1&key=AIzaSyBvSlOj7atT9SC5BVN1Er896lGzME6Y6B0'


// The comet is coming 

'https://spotify23.p.rapidapi.com/search/?q=The%20Comet%20is%20Coming&type=albums&offset=0&limit=2&numberOfTopResults=2'
'https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCAxylzB43zb-5vESDQv9QxQ&maxResults=1&key=AIzaSyBvSlOj7atT9SC5BVN1Er896lGzME6Y6B0'


// The Midnight (Dark/Light)

'https://spotify23.p.rapidapi.com/search/?q=the%20midnight&type=multi&offset=0&limit=10&numberOfTopResults=5'
'https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC-sM_PLqzgktdUcW2LEKKkQ&maxResults=1&key=AIzaSyBvSlOj7atT9SC5BVN1Er896lGzME6Y6B0'

// Cigarettes After Sex (Fire/Dark)

'https://spotify23.p.rapidapi.com/search/?q=cigarettes%20after%20sex&type=multi&offset=0&limit=10&numberOfTopResults=5'
'https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCqNxhPZoLJ81i5QaK4nqn8A&maxResults=1&key=AIzaSyBvSlOj7atT9SC5BVN1Er896lGzME6Y6B0'

// Empire of the Sun (Fire/Light)

'https://spotify23.p.rapidapi.com/search/?q=empire%20of%20the%20sun&type=multi&offset=0&limit=10&numberOfTopResults=5'
'https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCyacMWc-JhzX6iq2PCF-4jw&maxResults=1&key=AIzaSyBvSlOj7atT9SC5BVN1Er896lGzME6Y6B0'

//  Creedance Clearwater Revival

'https://spotify23.p.rapidapi.com/search/?q=creedence%20clearwater&type=artists&offset=0&limit=2&numberOfTopResults=2'
'https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC69yJGpLNIMk6_ECLwxBZwA&maxResults=1&key=AIzaSyBvSlOj7atT9SC5BVN1Er896lGzME6Y6B0'

// Agent Fresco

'https://spotify23.p.rapidapi.com/search/?q=Agent%20Fresco&type=artists&offset=0&limit=2&numberOfTopResults=2'
'https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC-PCZ7ffFGuaLc1xndULydw&maxResults=1&key=AIzaSyBvSlOj7atT9SC5BVN1Er896lGzME6Y6B0'

// Hillsong United

'https://spotify23.p.rapidapi.com/search/?q=Hillsong%20United&type=artists&offset=0&limit=2&numberOfTopResults=2'
'https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC4q12NoPNySbVqwpw4iO5Vg&maxResults=1&key=AIzaSyBvSlOj7atT9SC5BVN1Er896lGzME6Y6B0'