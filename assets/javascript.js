//rollingstones youtbechannel
//channelId :UCB_Z6rBg3WW3NL4-QimhC2A
//APIkey:AIzaSyBvSlOj7atT9SC5BVN1Er896lGzME6Y6B0
//fetch('https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCB_Z6rBg3WW3NL4-QimhC2A&maxResults=1&key=AIzaSyBvSlOj7atT9SC5BVN1Er896lGzME6Y6B0')
//	.then(data => data.json())
//	.then(list => console.log(list));

//rolling stones search

// Searches local storage for combinations previously attempted
const combinationHistory = JSON.parse(localStorage.getItem("combinationsUsed")) || []
const combinationList = document.getElementById("combinationList");

function loadLocalStorage() {
	localStorage.getItem(combinationHistory)
	console.log("combinationHistory", combinationHistory)
	for (let i = 0; i < combinationHistory.length; i++) {
		const listItem = document.createElement("li")
		listItem.innerHTML = combinationHistory[i];
		combinationList.appendChild(listItem);
	}
}

loadLocalStorage();


const options1 = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "ed0b354182msha048388c855c2fbp1f3ee1jsnebb54d352b31",
		"X-RapidAPI-Host": "spotify23.p.rapidapi.com",
	},
};

// const options2 = {
//     method: 'GET',
//     headers:{
//         'Y-API-Key':'AIzaSyBvSlOj7atT9SC5BVN1Er896lGzME6Y6B0',
//         'Y-API-Host':'https://developers.google.com/youtube/v3'
//     }
// };

const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "ed0b354182msha048388c855c2fbp1f3ee1jsnebb54d352b31",
		"X-RapidAPI-Host": "ytstream-download-youtube-videos.p.rapidapi.com",
	},
};

//hide button when clicked

const allBtns = document.getElementsByClassName("btn");
const combineBtn = document.getElementById("combine");


for (let i = 0; i < allBtns.length; i++) {
	const currentBtn = allBtns[i]
	currentBtn.addEventListener("click", () => {
		currentBtn.style.display = "none";
	});
}
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
	if (Wind == true ||
		Earth == true ||
		Light == true ||
		Fire == true ||
		Dark == true) {
		btn6.style.display = "none";
		btn5.style.display = "none";
		btn4.style.display = "none";
		btn3.style.display = "none";
		btn2.style.display = "none";
		btn1.style.display = "none";
	}
}

function earth() {
	Earth = !Earth;
	console.log("confirmed");
	btn1.style.display = "none";
	if (Wind == true ||
		Light == true ||
		Water == true ||
		Fire == true ||
		Dark == true) {
		btn6.style.display = "none";
		btn5.style.display = "none";
		btn4.style.display = "none";
		btn3.style.display = "none";
		btn2.style.display = "none";

	}
}

function wind() {
	Wind = !Wind;
	console.log("confirmed");
	btn3.style.display = "none";
	if (Light == true ||
		Earth == true ||
		Water == true ||
		Fire == true ||
		Dark == true) {
		btn6.style.display = "none";
		btn5.style.display = "none";
		btn4.style.display = "none";
		btn2.style.display = "none";
		btn1.style.display = "none";
	}
}

function fire() {
	Fire = !Fire;
	console.log("confirmed");
	btn2.style.display = "none";
	if (Wind == true ||
		Earth == true ||
		Water == true ||
		Light == true ||
		Dark == true) {
		btn6.style.display = "none";
		btn5.style.display = "none";
		btn4.style.display = "none";
		btn3.style.display = "none";
		btn1.style.display = "none";
	}
}

function dark() {
	Dark = !Dark;
	console.log("confirmed");
	btn5.style.display = "none";
	if (Wind == true ||
		Earth == true ||
		Water == true ||
		Fire == true ||
		Light == true) {
		btn6.style.display = "none";
		btn4.style.display = "none";
		btn3.style.display = "none";
		btn2.style.display = "none";
		btn1.style.display = "none";
	}
}

function light() {
	Light = !Light;
	console.log("confirmed");
	btn6.style.display = "none";
	if (Wind == true ||
		Earth == true ||
		Water == true ||
		Fire == true ||
		Dark == true) {
		btn5.style.display = "none";
		btn4.style.display = "none";
		btn3.style.display = "none";
		btn2.style.display = "none";
		btn1.style.display = "none";
	}
}


//rolling stones
function combine() {
	btn6.style.display = "none";
	btn5.style.display = "none";
	btn4.style.display = "none";
	btn3.style.display = "none";
	btn2.style.display = "none";
	btn1.style.display = "none";
	Combine.style.display = "none";

	document.getElementById('FindMore').style.display = "";
	document.getElementById('Refresh').style.display = "";


	if (
		Wind == true &&
		Earth == true &&
		Water == false &&
		Fire == false &&
		Dark == false &&
		Light == false
	) {


		fetch(
			"https://spotify23.p.rapidapi.com/search/?q=rolling%20stones&type=artists&offset=0&limit=2&numberOfTopResults=2",
			options1
		)
			.then((response) => response.json())
			.then((response) => {
				console.log("response", response);
				const combination = "Wind & Earth - The Rolling Stones"

				// for (var i = 0; i < combinationHistory.length; i++) {
				// combinationHistory.push(combination)

				const listItem = document.createElement("li")
				listItem.innerHTML = combination;
				combinationList.appendChild(listItem);

				localStorage.setItem("combinationsUsed", JSON.stringify(combinationHistory))
				// }
				const spotify = document.getElementById("spotify");
				const { profile, url, visuals } = response.artists.items[0].data;
				spotify.innerHTML = `
					<font size="+3">${profile.name}</font>
					<div>
					<font size="+3">Wind and Earth</font>
					</div>
					<img src="${visuals.avatarImage.sources[0].url}" style="width:500px;height:600px;"/>
					<div>
          <font size="+2">This combo is often misconstrued as a tragic one. The certainty of the earth is relentlessly carved away by the persistent motion of the wind. all things fade, but there is liberation in finality. This is the music of true perspective and enlightenment.</font>
				</div>`;
			})
			.catch((err) => console.error(err));

		fetch(
			"https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=GgnClrx8N2k",
			options
		)
			.then((response2) => response2.json())
			.then((response2) => {
				console.log("response2", response2);
				const youtube = document.getElementById("youtube");
				const { url: youtubeLink } = response2.adaptiveFormats[1];
				youtube.innerHTML = `<iframe
            src="${youtubeLink}"  width="640" height="360"
        frameborder="0"
        style="border: solid 4px #37474F"
          allow='autoplay'></iframe>`;
			})
			.catch((err) => console.error(err));
	}

	//Deepsky
	//Deepsky
	else if (
		Wind == true &&
		Earth == false &&
		Water == true &&
		Fire == false &&
		Dark == false &&
		Light == false
	) {
		fetch(
			"https://spotify23.p.rapidapi.com/search/?q=Deepsky&type=artists&offset=0&limit=2&numberOfTopResults=2",
			options1
		)
			.then((response) => response.json())
			.then((response) => {
				console.log("response", response);
				const combination = "Wind & Water - Deepsky"

				const listItem = document.createElement("li")
				listItem.innerHTML = combination;
				combinationList.appendChild(listItem);

				localStorage.setItem("combinationsUsed", JSON.stringify(combinationHistory))

				const spotify = document.getElementById("spotify");
				const { profile, uri, visuals } = response.artists.items[0].data;
				spotify.innerHTML = `
					<font size="+2">${profile.name}</font>
					<div>
					<font size="+2">Wind and Water</font>
					</div>
					<img src="${visuals.avatarImage.sources[0].url}" style="width:500px;height:600px;" />
					<div>
          <font size="+2">This combo is the music of change, especially social change. This combination is aware of the circular nature of change and is comfortable with constant shifting, unaware of why not everyone else is. This combo is also aware of the way things tend to come back. They are aware that history is tomorrow. Its is music that escapes time itself</font>
			</div>	`;
			})
			.catch((err) => console.error(err));

		fetch(
			"https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=Y6p2Q0ajmlc",
			options
		)
			.then((response2) => response2.json())
			.then((response2) => {
				console.log("response2", response2);
				const youtube = document.getElementById("youtube");
				const { url: youtubeLink } = response2.adaptiveFormats[1];
				youtube.innerHTML = `<iframe
            src="${youtubeLink}" width="640" height="360"
        frameborder="0"
        style="border: solid 4px #37474F" 
          allow='autoplay' </iframe>`;
			})
			.catch((err) => console.error(err));
	}
	//red hot chili peppers
	else if (
		Wind == true &&
		Earth == false &&
		Water == false &&
		Fire == true &&
		Dark == false &&
		Light == false
	) {
		fetch(
			"https://spotify23.p.rapidapi.com/search/?q=red%20hot%20chili%20peppers%20&type=artists&offset=0&limit=2&numberOfTopResults=2",
			options1
		)
			.then((response) => response.json())
			.then((response) => {
				console.log("response", response);
				const combination = "Wind & Fire - Red Hot Chili Peppers"
				combinationHistory.push(combination)
				localStorage.setItem("combinationsUsed", JSON.stringify(combinationHistory))
				const listItem = document.createElement("li")
				listItem.innerHTML = combinationHistory;
				combinationList.appendChild(listItem);
				const spotify = document.getElementById("spotify");
				const { profile, uri, visuals } = response.artists.items[0].data;
				spotify.innerHTML = `
					<font size="+2">${profile.name}</font>
					<div>
					<font size="+2">Wind and Water</font>
					</div>
					<img src="${visuals.avatarImage.sources[0].url}" style="width:500px;height:600px;" />
					<div>
          <font size="+2">This is an abstract combination, an ideological rampage. It is the witch hunt, death camps, and the incited revolution. It’s mass fervor and rage. It’s the music of a great, big horde of people all getting to describe something the same way, with the same slogans and words, and going out to do something about their sense of frustration.</font>
				</div>`;
			})
			.catch((err) => console.error(err));
		fetch(
			"https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=Mr_uHJPUlO8",
			options
		)
			.then((response2) => response2.json())
			.then((response2) => {
				console.log("response2", response2);
				const youtube = document.getElementById("youtube");
				const { url: youtubeLink } = response2.adaptiveFormats[1];
				youtube.innerHTML = `<iframe
            src="${youtubeLink}" width="640" height="360"
        frameborder="0"
        style="border: solid 4px #37474F"></iframe>`;
			})
			.catch((err) => console.error(err));
	}
	//tobacco
	else if (
		Wind == true &&
		Earth == false &&
		Water == false &&
		Fire == false &&
		Dark == true &&
		Light == false
	) {
		fetch(
			"https://spotify23.p.rapidapi.com/search/?q=tobacco&type=artists&offset=0&limit=10&numberOfTopResults=5",
			options1
		)
			.then((response) => response.json())
			.then((response) => {
				console.log("response", response);
				const combination = "Wind & Dark - TOBACCO"

				const listItem = document.createElement("li")
				listItem.innerHTML = combination;
				combinationList.appendChild(listItem);

				localStorage.setItem("combinationsUsed", JSON.stringify(combinationHistory))

				const spotify = document.getElementById("spotify");
				const { profile, uri, visuals } = response.artists.items[0].data;
				spotify.innerHTML = `
					<font size="+2">${profile.name}</font>
					<div>
					<font size="+2">Wind and Dark</font>
					</div>
					<img src="${visuals.avatarImage.sources[0].url}" style="width:500px;height:600px;" />
					<div>
          <font size="+3>This is a warped combo, the music of an atelectatic lung in a great machine world whose design and purpose is so beyond our understanding it is supernatural. Fear and confusion are all that awaits you. But, that is still better than feeling nothing at all</font>
				</div>`;
			})
			.catch((err) => console.error(err));
		fetch(
			"https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=GgcHlZsOgQo",
			options
		)
			.then((response2) => response2.json())
			.then((response2) => {
				console.log("response2", response2);
				const youtube = document.getElementById("youtube");
				const { url: youtubeLink } = response2.adaptiveFormats[1];
				youtube.innerHTML = `<iframe
            src="${youtubeLink}"width = "640" height = "360"
				frameborder = "0"
				style = "border: solid 4px #37474F"
         allow='autoplay' ></iframe>`;
			})
			.catch((err) => console.error(err));
	}
	//the white stripes need quote
	else if (
		Wind == true &&
		Earth == false &&
		Water == false &&
		Fire == false &&
		Dark == false &&
		Light == true
	) {
		fetch(
			"https://spotify23.p.rapidapi.com/search/?q=the%20white%20stripes&type=artists&offset=0&limit=2&numberOfTopResults=2",
			options1
		)
			.then((response) => response.json())
			.then((response) => {
				console.log("response", response);
				const combination = "Wind & Light - The White Stripes"

				const listItem = document.createElement("li")
				listItem.innerHTML = combination;
				combinationList.appendChild(listItem);

				localStorage.setItem("combinationsUsed", JSON.stringify(combinationHistory))

				const spotify = document.getElementById("spotify");
				const { profile, uri, visuals } = response.artists.items[0].data;
				spotify.innerHTML = `
			<font size="+2">${profile.name}</font>
					<div>
					<font size="+2">Wind and Light</font>
					</div>
					<img src="${visuals.avatarImage.sources[0].url}" style="width:500px;height:600px;" />
					<div>
          <font size="+3">The combo of freedom. Where you are flying through a clear bright sky where anything is possible. This is the music of dreams. Reality has no power in such a combination.</font>
				</div>`;
			})
			.catch((err) => console.error(err));
		fetch(
			"https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=1OjTspCqvk8",
			options
		)
			.then((response2) => response2.json())
			.then((response2) => {
				console.log("response2", response2);
				const youtube = document.getElementById("youtube");
				const { url: youtubeLink } = response2.adaptiveFormats[1];
				youtube.innerHTML = `<iframe
            src="${youtubeLink}" width = "640" height = "360"
				frameborder = "0"
				style = "border: solid 4px #37474F"
         allow='autoplay' </iframe>`;
			})
			.catch((err) => console.error(err));
	}
	//the comet is coming
	else if (
		Wind == false &&
		Earth == true &&
		Water == false &&
		Fire == true &&
		Dark == false &&
		Light == false
	) {
		fetch(
			"https://spotify23.p.rapidapi.com/search/?q=the%20comet%20is%20coming&type=artists&offset=0&limit=10&numberOfTopResults=2",
			options1
		)
			.then((response) => response.json())
			.then((response) => {
				console.log("response", response);
				const combination = "Earth & Fire - The Comet is Coming"

				const listItem = document.createElement("li")
				listItem.innerHTML = combination;
				combinationList.appendChild(listItem);

				localStorage.setItem("combinationsUsed", JSON.stringify(combinationHistory))

				const spotify = document.getElementById("spotify");
				const { profile, uri, visuals } = response.artists.items[0].data;
				spotify.innerHTML = `
<font size="+2">${profile.name}</font>
					<div>
					<font size="+2">Earth and Fire</font>
					</div>
					<img src="${visuals.avatarImage.sources[0].url}" style="width:500px;height:600px;" />
					<div>
          <font size="+3">The combo of creation, the titanic power and scale of the universe in which we are mere specks. What is the meaning of such life in the face of titanic forces? This is the music of Existentialism</font>
				</div>`;
			})
			.catch((err) => console.error(err));

		fetch(
			"https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=G55GspnNkBo",
			options
		)
			.then((response2) => response2.json())
			.then((response2) => {
				console.log("response2", response2);
				const youtube = document.getElementById("youtube");
				const { url: youtubeLink } = response2.adaptiveFormats[1];
				youtube.innerHTML = `<iframe
            src="${youtubeLink}" width="640" height="360"
        frameborder="0"
        style="border: solid 4px #37474F"
          allow='autoplay'></iframe>`;
			})
			.catch((err) => console.error(err));
	}

	//the heavy
	else if (
		Wind == false &&
		Earth == true &&
		Water == true &&
		Fire == false &&
		Dark == false &&
		Light == false
	) {
		fetch(
			"https://spotify23.p.rapidapi.com/search/?q=the%20heavy&type=artists&offset=0&limit=2&numberOfTopResults=2",
			options1
		)
			.then((response) => response.json())
			.then((response) => {
				console.log("response", response);
				const combination = "Earth & Water - The Heavy"

				const listItem = document.createElement("li")
				listItem.innerHTML = combination;
				combinationList.appendChild(listItem);

				localStorage.setItem("combinationsUsed", JSON.stringify(combinationHistory))

				const spotify = document.getElementById("spotify");
				const { profile, uri, visuals } = response.artists.items[0].data;
				spotify.innerHTML = `
<font size="+2">${profile.name}</font>
					<div>
					<font size="+2">Earth and Water</font>
					</div>
					<img src="${visuals.avatarImage.sources[0].url}" style="width:500px;height:600px;" />
					<div>
          <font size="+3">This combo is the sound of silence, peace and solitude in a world that insists you engage with it. In our times, women have always been left out of heady topics such as revolution and nationalism. Queers and people of color are anti-nationalist simply by existing. The people of earth and water are just here and that act does not need to be revolutionary to be just.</font>
				</div>`;
			})
			.catch((err) => console.error(err));
		fetch(
			"https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=08h0IVs4RKQ",
			options
		)
			.then((response2) => response2.json())
			.then((response2) => {
				console.log("response2", response2);
				const youtube = document.getElementById("youtube");
				const { url: youtubeLink } = response2.adaptiveFormats[1];
				youtube.innerHTML = `<iframe
            src="${youtubeLink}" width="640" height="360"
        frameborder="0"
        style="border: solid 4px #37474F"
         allow='autoplay' ></iframe>`;
			})
			.catch((err) => console.error(err));
	}
	//mf doom
	else if (
		Wind == false &&
		Earth == true &&
		Water == false &&
		Fire == false &&
		Dark == true &&
		Light == false
	) {
		fetch(
			"https://spotify23.p.rapidapi.com/search/?q=MF%20DOOM&type=artists&offset=0&limit=2&numberOfTopResults=2",
			options1
		)
			.then((response) => response.json())
			.then((response) => {
				console.log("response", response);
				const combination = "Earth & Dark - MF Doom"

				const listItem = document.createElement("li")
				listItem.innerHTML = combination;
				combinationList.appendChild(listItem);

				localStorage.setItem("combinationsUsed", JSON.stringify(combinationHistory))

				const spotify = document.getElementById("spotify");
				const { profile, uri, visuals } = response.artists.items[0].data;
				spotify.innerHTML = `
<font size="+2">${profile.name}</font>
					<div>
					<font size="+2">Earth and Dark</font>
					</div>
					<img src="${visuals.avatarImage.sources[0].url}" style="width:500px;height:600px;" />
					<div>
          <font size="+3">The combo of reality. Earth and Dark is the here and now, the struggle of all life and the beauty of the mundane. The music of community and the collective experience of society both good and bad</font>
			</div>	`;
			})
			.catch((err) => console.error(err));

		fetch(
			"https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=gSJeHDlhYls",
			options
		)
			.then((response2) => response2.json())
			.then((response2) => {
				console.log("response2", response2);
				const youtube = document.getElementById("youtube");
				const { url: youtubeLink } = response2.adaptiveFormats[1];
				youtube.innerHTML = `<iframe
            src="${youtubeLink}" width="640" height="360"
        frameborder="0"
        style="border: solid 4px #37474F"
          allow='autoplay'></iframe>`;
			})
			.catch((err) => console.error(err));
	}

	//planet waves need quote
	else if (
		Wind == false &&
		Earth == true &&
		Water == false &&
		Fire == false &&
		Dark == false &&
		Light == true
	) {
		fetch(
			"https://spotify23.p.rapidapi.com/search/?q=planet%20waves&type=artists&offset=0&limit=2&numberOfTopResults=2",
			options1
		)
			.then((response) => response.json())
			.then((response) => {
				console.log("response", response);
				const combination = "Earth & Light - Planet Waves"

				const listItem = document.createElement("li")
				listItem.innerHTML = combination;
				combinationList.appendChild(listItem);

				localStorage.setItem("combinationsUsed", JSON.stringify(combinationHistory))

				const spotify = document.getElementById("spotify");
				const { profile, uri, visuals } = response.artists.items[0].data;
				spotify.innerHTML = `
<font size="+2">${profile.name}</font>
					<div>
					<font size="+2">Earth and Light</font>
					</div>
					<img src="${visuals.avatarImage.sources[0].url}" style="width:500px;height:600px;" />
					<div>
          <font size="+3">The combo of revelations, the light cracks the stone and all things kept underground are brought to light. This is the music of those that seek truths and the agony they often bring upon themselves.</font>
			</div>	`;
			})
			.catch((err) => console.error(err));

		fetch(
			"https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=Frj2CLGldC4",
			options
		)
			.then((response2) => response2.json())
			.then((response2) => {
				console.log("response2", response2);
				const youtube = document.getElementById("youtube");
				const { url: youtubeLink } = response2.adaptiveFormats[1];
				youtube.innerHTML = `<iframe
            src="${youtubeLink}" width="640" height="360"
        frameborder="0"
        style="border: solid 4px #37474F"
          allow='autoplay'></iframe>`;
			})
			.catch((err) => console.error(err));
	}
	//Band Hillsong United
	//music - Another in the Water
	else if (
		Wind == false &&
		Earth == false &&
		Water == true &&
		Fire == true &&
		Dark == false &&
		Light == false
	) {
		fetch(
			"https://spotify23.p.rapidapi.com/search/?q=Hillsong%20United&type=artists&offset=0&limit=2&numberOfTopResults=2",
			options1
		)
			.then((response) => response.json())
			.then((response) => {
				console.log("response", response);
				const combination = "Water & Fire - Hillsong United"

				const listItem = document.createElement("li")
				listItem.innerHTML = combination;
				combinationList.appendChild(listItem);

				localStorage.setItem("combinationsUsed", JSON.stringify(combinationHistory))

				const spotify = document.getElementById("spotify");
				const { profile, uri, visuals } = response.artists.items[0].data;
				spotify.innerHTML = `
<font size="+2">${profile.name}</font>
					<div>
					<font size="+2">Water and Fire</font>
					</div>
					<img src="${visuals.avatarImage.sources[0].url}" style="width:500px;height:600px;" />
					<div>
          <font size="+3">This is a combo of instant reaction, of gut feeling, of always moving and always decision making. It is a combo of always burning yourself out because water drowns fire and fire evaporates water. The music of Fire and Water is never still. It writhes under the skin and rings in the ears. chaos is its natural state.</font>
				</div>`;
			})
			.catch((err) => console.error(err));

		fetch(
			"https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=ScK3v5gcBK0",
			options
		)
			.then((response2) => response2.json())
			.then((response2) => {
				console.log("YouTube", response2);
				const youtube = document.getElementById("youtube");
				const { url: youtubeLink } = response2.adaptiveFormats[1];
				youtube.innerHTML = `<iframe
            src="${youtubeLink}" width="640" height="360"
        frameborder="0"
        style="border: solid 4px #37474F"
         allow='autoplay'> </iframe>`;
			})
			.catch((err) => console.error(err));
	}

	//Agent Fresco
	//music - Dark Water
	else if (
		Wind == false &&
		Earth == false &&
		Water == true &&
		Fire == false &&
		Dark == true &&
		Light == false
	) {
		fetch(
			"https://spotify23.p.rapidapi.com/search/?q=Agent%20Fresco&type=artists&offset=0&limit=2&numberOfTopResults=2",
			options1
		)
			.then((response) => response.json())
			.then((response) => {
				console.log("response", response);
				const combination = "Water & Dark - Agent Fresco"

				const listItem = document.createElement("li")
				listItem.innerHTML = combination;
				combinationList.appendChild(listItem);

				localStorage.setItem("combinationsUsed", JSON.stringify(combinationHistory))

				const spotify = document.getElementById("spotify");
				const { profile, uri, visuals } = response.artists.items[0].data;
				spotify.innerHTML = `
<font size="+2">${profile.name}</font>
					<div>
					<font size="+2">Water and Dark</font>
					</div>
					<img src="${visuals.avatarImage.sources[0].url}" style="width:500px;height:600px;" />
					<div>
          <h3>The combo of peace. Dark has many negative connotations, but it can also be deep, safe and very gentle energy. The deep dark water returns us to the place we were before we were. The infinite amount of time where we did not exist.  It is the music of a great deep sea that welcomes all.</h3>
				</div>`;
			})
			.catch((err) => console.error(err));

		fetch(
			"https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=1VmNTl6JvDY",
			options
		)
			.then((response2) => response2.json())
			.then((response2) => {
				console.log("response2", response2);
				const youtube = document.getElementById("youtube");
				const { url: youtubeLink } = response2.adaptiveFormats[1];
				youtube.innerHTML = `<iframe width="640" height="360"
        frameborder="0"
        style="border: solid 4px #37474F"
            src="${youtubeLink}"
          allow='autoplay'></iframe>`;
			})
			.catch((err) => console.error(err));
	} else if (
		Wind == false &&
		Earth == false &&
		Water == true &&
		Fire == false &&
		Dark == false &&
		Light == true
	) {
		//creedence clearwater revival
		fetch(
			"https://spotify23.p.rapidapi.com/search/?q=creedence%20clearwater&type=artists&offset=0&limit=2&numberOfTopResults=2",
			options1
		)
			.then((response) => response.json())
			.then((response) => {
				console.log("response", response);
				const combination = "Water & Light - Creedence Clearwater Revival"

				const listItem = document.createElement("li")
				listItem.innerHTML = combination;
				combinationList.appendChild(listItem);

				localStorage.setItem("combinationsUsed", JSON.stringify(combinationHistory))

				const spotify = document.getElementById("spotify");
				const { profile, uri, visuals } = response.artists.items[0].data;
				spotify.innerHTML = `
<font size="+2">${profile.name}</font>
					<div>
					<font size="+2">Water and Light</font>
					</div>
					<img src="${visuals.avatarImage.sources[0].url}" style="width:500px;height:600px;" />
					<div>
          <font size="+3">The combo of life. Water and light is a divine convergence where all things become balanced and all truths are made clear. The music of negative energy being washed away</font>
				</div>`;
			})
			.catch((err) => console.error(err));

		fetch(
			"https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=u1V8YRJnr4Q",
			options
		)
			.then((response2) => response2.json())
			.then((response2) => {
				console.log("response2", response2);
				const youtube = document.getElementById("youtube");
				const { url: youtubeLink } = response2.adaptiveFormats[1];
				youtube.innerHTML = `<iframe
            src="${youtubeLink}" width="640" height="360"
        frameborder="0"
        style="border: solid 4px #37474F"
          allow='autoplay'></iframe>`;
			})
			.catch((err) => console.error(err));
	}

	//cigarettes after sex
	else if (
		Wind == false &&
		Earth == false &&
		Water == false &&
		Fire == true &&
		Dark == true &&
		Light == false
	) {
		fetch(
			"https://spotify23.p.rapidapi.com/search/?q=cigarettes%20after%20sex&type=artists&offset=0&limit=2&numberOfTopResults=2",
			options1
		)
			.then((response) => response.json())
			.then((response) => {
				console.log("response", response);
				const combination = "Fire & Dark - Cigarettes After Sex"

				const listItem = document.createElement("li")
				listItem.innerHTML = combination;
				combinationList.appendChild(listItem);

				localStorage.setItem("combinationsUsed", JSON.stringify(combinationHistory))

				const spotify = document.getElementById("spotify");
				const { profile, uri, visuals } = response.artists.items[0].data;
				spotify.innerHTML = `
<font size="+2">${profile.name}</font>
					<div>
					<font size="+2">Fire and Dark</font>
					</div>
					<img src="${visuals.avatarImage.sources[0].url}" style="width:500px;height:600px;" />
					<div>
          <font size="+3">A fire that produces no heat and casts no shadow. This combination is the opposite of existence, an endless void. This is the music of nothing, the heat death of the universe where all energy is spent and nothing can ever exist again.</font>
				</div>`;
			})
			.catch((err) => console.error(err));

		fetch(
			"https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=sElE_BfQ67s",
			options
		)
			.then((response2) => response2.json())
			.then((response2) => {
				console.log("response2", response2);
				const youtube = document.getElementById("youtube");
				const { url: youtubeLink } = response2.adaptiveFormats[1];
				youtube.innerHTML = `<iframe width="640" height="360"
        frameborder="0"
        style="border: solid 4px #37474F"
            src="${youtubeLink}"
          allow='autoplay'></iframe>`;
			})
			.catch((err) => console.error(err));
	}
	// empire of the sun
	else if (
		Wind == false &&
		Earth == false &&
		Water == false &&
		Fire == true &&
		Dark == false &&
		Light == true
	) {
		fetch(
			"https://spotify23.p.rapidapi.com/search/?q=empire%20of%20the%20sun&type=artists&offset=0&limit=2&numberOfTopResults=2",
			options1
		)
			.then((response) => response.json())
			.then((response) => {
				console.log("response", response);
				const combination = "Fire & Light - Empire of the Sun"

				const listItem = document.createElement("li")
				listItem.innerHTML = combination;
				combinationList.appendChild(listItem);

				localStorage.setItem("combinationsUsed", JSON.stringify(combinationHistory))

				const spotify = document.getElementById("spotify");
				const { profile, uri, visuals } = response.artists.items[0].data;
				spotify.innerHTML = `
<font size="+2">${profile.name}</font>
					<div>
					<font size="+2">Fire and Light</font>
					</div>
					<img src="${visuals.avatarImage.sources[0].url}" style="width:500px;height:600px;" />
					<div>
          <font size="+3">A powerful combo that is as bright and brilliant as the sun. It burns bright and fades instantly. This is the music of miracles.</font>
				</div>`;
			})
			.catch((err) => console.error(err));

		fetch(
			"https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=epWP7_LCokI",
			options
		)
			.then((response2) => response2.json())
			.then((response2) => {
				console.log("response2", response2);
				const youtube = document.getElementById("youtube");
				const { url: youtubeLink } = response2.adaptiveFormats[1];
				youtube.innerHTML = `<iframe
            src="${youtubeLink}" width="640" height="360"
        frameborder="0"
        style="border: solid 4px #37474F"
          allow='autoplay'></iframe>`;
			})
			.catch((err) => console.error(err));
	}
	// the midnight
	else if (
		Wind == false &&
		Earth == false &&
		Water == false &&
		Fire == false &&
		Dark == true &&
		Light == true
	) {
		fetch(
			"https://spotify23.p.rapidapi.com/search/?q=the%20midnight=artists&offset=0&limit=10&numberOfTopResults=10",
			options1
		)
			.then((response) => response.json())
			.then((response) => {
				console.log("response", response);

				const listItem = document.createElement("li")
				listItem.innerHTML = combination;
				combinationList.appendChild(listItem);

				localStorage.setItem("combinationsUsed", JSON.stringify(combinationHistory))

				const spotify = document.getElementById("spotify");
				const { profile, uri, visuals } = response.artists.items[0].data;
				spotify.innerHTML = `
<font size="+2">${profile.name}</font>
					<div>
					<font size="+2">Light and Dark</font>
					</div>
					<img src="${visuals.avatarImage.sources[0].url}" style="width:500px;height:600px;" />
					<div>
          <font size="3">A perfectly balanced combination, the brightest of lights cast the darkest of shadows. This is the music of nuance and morality.</h3>
			</div>	`;
			})
			.catch((err) => console.error(err));

		fetch(
			"https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=_pUL7u-mYqA",
			options
		)
			.then((response2) => response2.json())
			.then((response2) => {
				console.log("response2", response2);
				const youtube = document.getElementById("youtube");
				const { url: youtubeLink } = response2.adaptiveFormats[1];
				youtube.innerHTML = `<iframe
            src="${youtubeLink}" width="640" height="360"
        frameborder="0"
        style="border: solid 4px #37474F"
          allow='autoplay'></iframe>`;
			})
			.catch((err) => console.error(err));
	} else if (
		Wind == false &&
		Earth == false &&
		Water == false &&
		Fire == false &&
		Dark == false &&
		Light == false
	) {
		console.log("no selection");
	} else {
		console.log("error");
	}

}


//search function
//Sys.setenv((SPOTIFY_CLIENT_ID = "96dc2bc1c09645d8af8883911f9c6ae7"));
//Sys.setenv((SPOTIFY_CLIENT_SECRET = "d6b103e15d1e41758ae6fefc9cfdec8d"));


const form = document.querySelector('#inputForm');
form.addEventListener("submit", e => {
	e.preventDefault();
	const input = document.querySelector("#searchText");
	let inputVal = input.value;

	//ajax here
	const url = `https://spotify23.p.rapidapi.com/search/?q=${inputVal}&type=multi&offset=0&limit=10&numberOfTopResults=5`;

	fetch(url, options)
		.then((response) => response.json())
		.then((response) => {
			console.log("response", response);

		})
		.catch((err) => console.error(err));
})

