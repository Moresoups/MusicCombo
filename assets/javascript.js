//rolling stones search

// Searches local storage for combinations previously attempted
const combinationHistory = JSON.parse(localStorage.getItem("combinationHistory")) || []
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


const allBtns = document.getElementsByClassName("btn");
const combineBtn = document.getElementById("combine");


for (let i = 0; i < allBtns.length; i++) {
	const currentBtn = allBtns[i]
	currentBtn.addEventListener("click", () => {
		currentBtn.style.display = "none";
	});
}








const options1 = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "ed0b354182msha048388c855c2fbp1f3ee1jsnebb54d352b31",
		"X-RapidAPI-Host": "spotify23.p.rapidapi.com",
	},
};

const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "ed0b354182msha048388c855c2fbp1f3ee1jsnebb54d352b31",
		"X-RapidAPI-Host": "ytstream-download-youtube-videos.p.rapidapi.com",
	},
};



//hide button when clicked


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
let key =""

function water() {
	Water = !Water;
	key+="water-"
	console.log("confirmed");
	btn4.style.display = "none";
	if ((Wind) || (Earth) || (Light) || (Fire) || (Dark)) {
		btn6.style.display = "none";
		btn5.style.display = "none";
		btn3.style.display = "none";
		btn2.style.display = "none";
		btn1.style.display = "none";
	}
}

function earth() {
	Earth = !Earth;
	console.log("confirmed");
	btn1.style.display = "none";
	if ((Wind) || (Light) || (Water) || (Fire) || (Dark)) {
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
	if ((Fire) || (Earth) || (Water) || (Light) || (Dark)) {
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
	if ((Wind) || (Earth) || (Water) || (Light) || (Dark)) {
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
	if ((Wind) || (Earth) || (Water) || (Fire) || (Light)) {
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
	if ((Wind) || (Earth) || (Water) || (Fire) ||(Dark)) {
		btn5.style.display = "none";
		btn4.style.display = "none";
		btn3.style.display = "none";
		btn2.style.display = "none";
		btn1.style.display = "none";
	}
}



function combine() {
	btn6.style.display = "none";
	btn5.style.display = "none";
	btn4.style.display = "none";
	btn3.style.display = "none";
	btn2.style.display = "none";
	btn1.style.display = "none";
	Combine.style.display = "none";


	document.getElementById('Refresh').style.display = "";



	// refresh.style.display = "block";
	if ((Wind) && (Earth) && (!Water) && (!Fire) && (!Dark) && (!Light)) {
		console.log(Wind, "wind")
		fetch(
			"https://spotify23.p.rapidapi.com/search/?q=rolling%20stones&type=artists&offset=0&limit=2&numberOfTopResults=2",
			options1
		)
			.then((response) => response.json())
			.then((response) => {
				console.log("response", response);
				const uriNew = response.artists.items[0].data.uri
				console.log(uriNew);
				const num = uriNew.split(':')[2]
				const combination = "Wind & Earth - The Rolling Stones"

				if (combinationHistory.indexOf(combination) === -1) {

					combinationHistory.push(combination)
					localStorage.setItem("combinationHistory", JSON.stringify(combinationHistory))
					const listItem = document.createElement("li")
					listItem.innerHTML = combination;
					combinationList.appendChild(listItem);
				}

				const spotify = document.getElementById("spotify");
				const { profile, url, visuals } = response.artists.items[0].data;
				spotify.innerHTML = `
					<a href="https://open.spotify.com/artist/${num}" size="+3">${profile.name}</a>
					<div>
					<font size="+4">Wind and Earth</font>
					</div>
					<img src="${visuals.avatarImage.sources[0].url}" style="width:500px;height:600px;"/>
					<div>
          <font size="+2">This combo is often misconstrued as a tragic one. The certainty of the earth is relentlessly carved away by the persistent motion of the wind. all things fade, but there is liberation in finality. This is the music of true perspective and enlightenment.</font>
				</div>`;
			})
			.catch((err) => console.error(err));

		fetch(
			"https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=lOf-0Mur7t4",
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
        style="border: solid 4px #37474F" allow="autoplay;"
          ></iframe>`;
			})
			.catch((err) => console.error(err));
	}

	//Deepsky
	else if ((Wind) && (!Earth) && (Water) && (!Fire) && (!Dark) && (!Light)) {
		fetch(
			"https://spotify23.p.rapidapi.com/search/?q=Deepsky&type=artists&offset=0&limit=2&numberOfTopResults=2",
			options1
		)
			.then((response) => response.json())
			.then((response) => {
				console.log("response", response);
				const uriNew = response.artists.items[0].data.uri
				console.log(uriNew);
				const num = uriNew.split(':')[2]
				const combination = "Wind & Water - Deepsky"

				if (combinationHistory.indexOf(combination) === -1) {

					combinationHistory.push(combination)
					localStorage.setItem("combinationHistory", JSON.stringify(combinationHistory))
					const listItem = document.createElement("li")
					listItem.innerHTML = combination;
					combinationList.appendChild(listItem);
				}

				const spotify = document.getElementById("spotify");
				const { profile, uri, visuals } = response.artists.items[0].data;
				spotify.innerHTML = `
					<a href="https://open.spotify.com/artist/${num}">${profile.name}</a>
					<div>
					<font size="+4">Wind and Water</font>
					</div>
					<img src="${visuals.avatarImage.sources[0].url}" style="width:500px;height:600px;" />
					<div>
          <font size="+2">This combo is the music of change, especially social change. This combination is aware of the circular nature of change and is comfortable with constant shifting, unaware of why not everyone else is. This combo is also aware of the way things tend to come back. They are aware that history is tomorrow. Its is music that escapes time itself</font>
				</div>`;
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
        style="border: solid 4px #37474F" allow="autoplay;"
          ></iframe>`;
			})
			.catch((err) => console.error(err));
	}
	//red hot chili peppers
	else if ((Wind) && (!Earth) && (!Water) && (Fire) && (!Dark) && (!Light)) {
		fetch(
			"https://spotify23.p.rapidapi.com/search/?q=red%20hot%20chili%20peppers%20&type=artists&offset=0&limit=2&numberOfTopResults=2",
			options1
		)
			.then((response) => response.json())
			.then((response) => {
				console.log("response", response);
				const uriNew = response.artists.items[0].data.uri
				console.log(uriNew);
				const num = uriNew.split(':')[2]
				const combination = "Wind & Fire - Red Hot Chili Peppers"

				if (combinationHistory.indexOf(combination) === -1) {

					combinationHistory.push(combination)
					localStorage.setItem("combinationHistory", JSON.stringify(combinationHistory))
					const listItem = document.createElement("li")
					listItem.innerHTML = combination;
					combinationList.appendChild(listItem);
				}
				const spotify = document.getElementById("spotify");
				const { profile, uri, visuals } = response.artists.items[0].data;
				spotify.innerHTML = `
					<a href="https://open.spotify.com/artist/${num}">${profile.name}</a>
					<div>
					<font size="+3">Wind and Fire</font>
					</div>
					<img src="${visuals.avatarImage.sources[0].url}" style="width:500px;height:600px;"/>
					<div>
          <font size="+2">This is an abstract combination, an ideological rampage. It is the witch hunt, death camps, and the incited revolution. It’s mass fervor and rage. It’s the music of a great, big horde of people all getting to describe something the same way, with the same slogans and words, and going out to do something about their sense of frustration.</font>
			</div>	`;
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
        style="border: solid 4px #37474F"
          allow="autoplay;" ></iframe>`;
			})
			.catch((err) => console.error(err));
	}
	//tobacco
	else if ((Wind) && (!Earth) && (!Water) && (!Fire) && (Dark) && (!Light)) {
		fetch(
			"https://spotify23.p.rapidapi.com/search/?q=tobacco&type=artists&offset=0&limit=10&numberOfTopResults=5",
			options1
		)
			.then((response) => response.json())
			.then((response) => {
				console.log("response", response);
				const uriNew = response.artists.items[0].data.uri
				console.log(uriNew);
				const num = uriNew.split(':')[2]
				const combination = "Wind & Dark - TOBACCO"

				if (combinationHistory.indexOf(combination) === -1) {

					combinationHistory.push(combination)
					localStorage.setItem("combinationHistory", JSON.stringify(combinationHistory))
					const listItem = document.createElement("li")
					listItem.innerHTML = combination;
					combinationList.appendChild(listItem);
				}

				const spotify = document.getElementById("spotify");
				const { profile, uri, visuals } = response.artists.items[0].data;
				spotify.innerHTML = `
					<a href="https://open.spotify.com/artist/${num}">${profile.name}</a>
					<h3>Wind and Dark</h3>
					<img src="${visuals.avatarImage.sources[0].url}" style="width:500px;height:600px;"/>
          <h3>This is a warped combo, the music of an atelectatic lung in a great machine world whose design and purpose is so beyond our understanding it is supernatural. Fear and confusion are all that awaits you. But, that is still better than feeling nothing at all</h3>
				`;
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
				style = "border: solid 4px #37474F" allow="autoplay;"
          ></iframe>`;
			})
			.catch((err) => console.error(err));
	}
	//the white stripes need quote
	else if ((Wind) && (!Earth) && (!Water) && (!Fire) && (!Dark) && (Light)) {
		fetch(
			"https://spotify23.p.rapidapi.com/search/?q=the%20white%20stripes&type=artists&offset=0&limit=2&numberOfTopResults=2",
			options1
		)
			.then((response) => response.json())
			.then((response) => {
				console.log("response", response);
				const uriNew = response.artists.items[0].data.uri
				console.log(uriNew);
				const num = uriNew.split(':')[2]
				const combination = "Wind & Light - The White Stripes"

				if (combinationHistory.indexOf(combination) === -1) {

					combinationHistory.push(combination)
					localStorage.setItem("combinationHistory", JSON.stringify(combinationHistory))
					const listItem = document.createElement("li")
					listItem.innerHTML = combination;
					combinationList.appendChild(listItem);
				}

				const spotify = document.getElementById("spotify");
				const { profile, uri, visuals } = response.artists.items[0].data;
				spotify.innerHTML = `
					<a href="https://open.spotify.com/artist/${num}">${profile.name}</a>
					<h3>Wind and Light</h3>
					<img src="${visuals.avatarImage.sources[0].url}" style="width:500px;height:600px;"/>
          <h3>The combo of freedom. Where you are flying through a clear bright sky where anything is possible. This is the music of dreams. Reality has no power in such a combination.</h3>
				`;
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
            src="${youtubeLink}"width = "640" height = "360"
				frameborder = "0"
				style = "border: solid 4px #37474F" allow="autoplay;"
          ></iframe>`;
			})
			.catch((err) => console.error(err));
	}
	//the comet is coming
	else if ((!Wind) && (Earth) && (!Water) && (Fire) && (!Dark) && (!Light)) {
		fetch(
			"https://spotify23.p.rapidapi.com/search/?q=the%20comet%20is%20coming&type=artists&offset=0&limit=10&numberOfTopResults=2",
			options1
		)
			.then((response) => response.json())
			.then((response) => {
				console.log("response", response);
				const uriNew = response.artists.items[0].data.uri
				console.log(uriNew);
				const num = uriNew.split(':')[2]
				const combination = "Earth & Fire - The Comet is Coming"

				if (combinationHistory.indexOf(combination) === -1) {

					combinationHistory.push(combination)
					localStorage.setItem("combinationHistory", JSON.stringify(combinationHistory))
					const listItem = document.createElement("li")
					listItem.innerHTML = combination;
					combinationList.appendChild(listItem);
				}

				const spotify = document.getElementById("spotify");
				const { profile, uri, visuals } = response.artists.items[0].data;
				spotify.innerHTML = `
					<a href="https://open.spotify.com/artist/${num}">${profile.name}</a>
					<h3>Earth and Fire</h3>
					<img src="${visuals.avatarImage.sources[0].url}" style="width:500px;height:600px;"/>
          <h3>The combo of creation, the titanic power and scale of the universe in which we are mere specks. What is the meaning of such life in the face of titanic forces? This is the music of Existentialism</h3>
				`;
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
        style="border: solid 4px #37474F" allow="autoplay;"
          ></iframe>`;
			})
			.catch((err) => console.error(err));
	}

	//the heavy
	else if ((!Wind) && (Earth) && (Water) && (!Fire) && (!Dark) && (!Light)) {
		fetch(
			"https://spotify23.p.rapidapi.com/search/?q=the%20heavy&type=artists&offset=0&limit=2&numberOfTopResults=2",
			options1
		)
			.then((response) => response.json())
			.then((response) => {
				console.log("response", response);
				const uriNew = response.artists.items[0].data.uri
				console.log(uriNew);
				const num = uriNew.split(':')[2]
				const combination = "Earth & Water - The Heavy"

				if (combinationHistory.indexOf(combination) === -1) {

					combinationHistory.push(combination)
					localStorage.setItem("combinationHistory", JSON.stringify(combinationHistory))
					const listItem = document.createElement("li")
					listItem.innerHTML = combination;
					combinationList.appendChild(listItem);
				}

				const spotify = document.getElementById("spotify");
				const { profile, uri, visuals } = response.artists.items[0].data;
				spotify.innerHTML = `
					<a href="https://open.spotify.com/artist/${num}">${profile.name}</a>
					<h3>Earth and Water</h3>
					<img src="${visuals.avatarImage.sources[0].url}" style="width:500px;height:600px;"/>
          <h3>This combo is the sound of silence, peace and solitude in a world that insists you engage with it. In our times, women have always been left out of heady topics such as revolution and nationalism. Queers and people of color are anti-nationalist simply by existing. The people of earth and water are just here and that act does not need to be revolutionary to be just.</h3>
				`;
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
        style="border: solid 4px #37474F" allow="autoplay;"
          ></iframe>`;
			})
			.catch((err) => console.error(err));
	}
	//mf doom
	else if ((!Wind) && (Earth) && (!Water) && (!Fire) && (Dark) && (!Light)) {
		fetch(
			"https://spotify23.p.rapidapi.com/search/?q=MF%20DOOM&type=artists&offset=0&limit=2&numberOfTopResults=2",
			options1
		)
			.then((response) => response.json())
			.then((response) => {
				console.log("response", response);
				const uriNew = response.artists.items[0].data.uri
				console.log(uriNew);
				const num = uriNew.split(':')[2]
				const combination = "Earth & Dark - MF Doom"

				if (combinationHistory.indexOf(combination) === -1) {

					combinationHistory.push(combination)
					localStorage.setItem("combinationHistory", JSON.stringify(combinationHistory))
					const listItem = document.createElement("li")
					listItem.innerHTML = combination;
					combinationList.appendChild(listItem);
				}

				const spotify = document.getElementById("spotify");
				const { profile, uri, visuals } = response.artists.items[0].data;
				spotify.innerHTML = `
					<a href="https://open.spotify.com/artist/${num}">${profile.name}</a>
					<h3>Earth and Dark</h3>
					<img src="${visuals.avatarImage.sources[0].url}" style="width:500px;height:600px;"/>
          <h3>The combo of reality. Earth and Dark is the here and now, the struggle of all life and the beauty of the mundane. The music of community and the collective experience of society both good and bad</h3>
				`;
			})
			.catch((err) => console.error(err));

		fetch(
			"https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=3IQ6HwJp2OM",
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
        style="border: solid 4px #37474F" allow="autoplay;"
          ></iframe>`;
			})
			.catch((err) => console.error(err));
	}

	//planet waves need quote
	else if ((!Wind) && (Earth) && (!Water) && (!Fire) && (!Dark) && (Light)) {
		fetch(
			"https://spotify23.p.rapidapi.com/search/?q=planet%20waves&type=artists&offset=0&limit=2&numberOfTopResults=2",
			options1
		)
			.then((response) => response.json())
			.then((response) => {
				console.log("response", response);
				const uriNew = response.artists.items[0].data.uri
				console.log(uriNew);
				const num = uriNew.split(':')[2]
				const combination = "Earth & Light - Planet Waves"

				if (combinationHistory.indexOf(combination) === -1) {

					combinationHistory.push(combination)
					localStorage.setItem("combinationHistory", JSON.stringify(combinationHistory))
					const listItem = document.createElement("li")
					listItem.innerHTML = combination;
					combinationList.appendChild(listItem);
				}

				const spotify = document.getElementById("spotify");
				const { profile, uri, visuals } = response.artists.items[0].data;
				spotify.innerHTML = `
					<a href="https://open.spotify.com/artist/${num}">${profile.name}</a>
					<h3>Earth and Light</h3>
					<img src="${visuals.avatarImage.sources[0].url}" style="width:500px;height:600px;"/>
          <h3>The combo of revelations, the light cracks the stone and all things kept underground are brought to light. This is the music of those that seek truths and the agony they often bring upon themselves.</h3>
				`;
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
        style="border: solid 4px #37474F" allow="autoplay;"
          ></iframe>`;
			})
			.catch((err) => console.error(err));
	}
	//Band Hillsong United
	//music - Another in the Water
	else if ((!Wind) && (!Earth) && (Water) && (Fire) && (!Dark) && (!Light)) {
		fetch(
			"https://spotify23.p.rapidapi.com/search/?q=Hillsong%20United&type=artists&offset=0&limit=2&numberOfTopResults=2",
			options1
		)
			.then((response) => response.json())
			.then((response) => {
				console.log("response", response);
				const uriNew = response.artists.items[0].data.uri
				console.log(uriNew);
				const num = uriNew.split(':')[2]
				const combination = "Water & Fire - Hillsong United"

				if (combinationHistory.indexOf(combination) === -1) {

					combinationHistory.push(combination)
					localStorage.setItem("combinationHistory", JSON.stringify(combinationHistory))
					const listItem = document.createElement("li")
					listItem.innerHTML = combination;
					combinationList.appendChild(listItem);
				}

				const spotify = document.getElementById("spotify");
				const { profile, uri, visuals } = response.artists.items[0].data;
				spotify.innerHTML = `
					<a href="https://open.spotify.com/artist/${num}">${profile.name}</a>
					<h3>Water and Fire</h3>
					<img src="${visuals.avatarImage.sources[0].url}" style="width:500px;height:600px;"/>
          <h3>This is a combo of instant reaction, of gut feeling, of always moving and always decision making. It is a combo of always burning yourself out because water drowns fire and fire evaporates water. The music of Fire and Water is never still. It writhes under the skin and rings in the ears. chaos is its natural state.</h3>
				`;
			})
			.catch((err) => console.error(err));

		fetch(
			"https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=MtPjEuhdXg0",
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
        style="border: solid 4px #37474F" allow="autoplay;"
          ></iframe>`;
			})
			.catch((err) => console.error(err));
	}

	//Agent Fresco
	//music - Dark Water
	else if ((!Wind) && (!Earth) && (Water) && (!Fire) && (Dark) && (!Light)) {
		fetch(
			"https://spotify23.p.rapidapi.com/search/?q=Agent%20Fresco&type=artists&offset=0&limit=2&numberOfTopResults=2",
			options1
		)
			.then((response) => response.json())
			.then((response) => {
				console.log("response", response);
				const uriNew = response.artists.items[0].data.uri
				console.log(uriNew);
				const num = uriNew.split(':')[2]
				const combination = "Water & Dark - Agent Fresco"

				if (combinationHistory.indexOf(combination) === -1) {

					combinationHistory.push(combination)
					localStorage.setItem("combinationHistory", JSON.stringify(combinationHistory))
					const listItem = document.createElement("li")
					listItem.innerHTML = combination;
					combinationList.appendChild(listItem);
				}

				const spotify = document.getElementById("spotify");
				const { profile, uri, visuals } = response.artists.items[0].data;
				spotify.innerHTML = `
					<a href="https://open.spotify.com/artist/${num}">${profile.name}</a>
					<h3>Water and Dark</h3>
					<img src="${visuals.avatarImage.sources[0].url}" style="width:500px;height:600px;"/>
          <h3>The combo of peace. Dark has many negative connotations, but it can also be deep, safe and very gentle energy. The deep dark water returns us to the place we were before we were. The infinite amount of time where we did not exist.  It is the music of a great deep sea that welcomes all.</h3>
				`;
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
            src="${youtubeLink}" allow="autoplay;"
          ></iframe>`;
			})
			.catch((err) => console.error(err));
	} else if ((!Wind) && (!Earth) && (Water) && (!Fire) && (!Dark) && (Light)) {
		//creedence clearwater revival
		fetch(
			"https://spotify23.p.rapidapi.com/search/?q=creedence%20clearwater&type=artists&offset=0&limit=2&numberOfTopResults=2",
			options1
		)
			.then((response) => response.json())
			.then((response) => {
				console.log("response", response);
				const uriNew = response.artists.items[0].data.uri
				console.log(uriNew);
				const num = uriNew.split(':')[2]
				const combination = "Water & Light - Creedence Clearwater Revival"

				if (combinationHistory.indexOf(combination) === -1) {

					combinationHistory.push(combination)
					localStorage.setItem("combinationHistory", JSON.stringify(combinationHistory))
					const listItem = document.createElement("li")
					listItem.innerHTML = combination;
					combinationList.appendChild(listItem);
				}

				const spotify = document.getElementById("spotify");
				const { profile, uri, visuals } = response.artists.items[0].data;
				spotify.innerHTML = `
					<a href="https://open.spotify.com/artist/${num}">${profile.name}</a>
					<h3>Water and Light</h3>
					<img src="${visuals.avatarImage.sources[0].url}" style="width:500px;height:600px;"/>
          <h3>The combo of life. Water and light is a divine convergence where all things become balanced and all truths are made clear. The music of negative energy being washed away</h3>
				`;
			})
			.catch((err) => console.error(err));

		fetch(
			"https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=ZWijx_AgPiA",
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
        style="border: solid 4px #37474F" allow="autoplay;"
          ></iframe>`;
			})
			.catch((err) => console.error(err));
	}

	//cigarettes after sex
	else if ((!Wind) && (!Earth) && (!Water) && (Fire) && (Dark) && (!Light)) {
		fetch(
			"https://spotify23.p.rapidapi.com/search/?q=cigarettes%20after%20sex&type=artists&offset=0&limit=2&numberOfTopResults=2",
			options1
		)
			.then((response) => response.json())
			.then((response) => {
				console.log("response", response);
				const uriNew = response.artists.items[0].data.uri
				console.log(uriNew);
				const num = uriNew.split(':')[2]
				const combination = "Fire & Dark - Cigarettes After Sex"

				if (combinationHistory.indexOf(combination) === -1) {

					combinationHistory.push(combination)
					localStorage.setItem("combinationHistory", JSON.stringify(combinationHistory))
					const listItem = document.createElement("li")
					listItem.innerHTML = combination;
					combinationList.appendChild(listItem);
				}

				const spotify = document.getElementById("spotify");
				const { profile, uri, visuals } = response.artists.items[0].data;
				spotify.innerHTML = `
					<a href="https://open.spotify.com/artist/${num}">${profile.name}</a>
					<h3>Fire and Dark</h3>
					<img src="${visuals.avatarImage.sources[0].url}" style="width:500px;height:600px;"/>
          <h3>A fire that produces no heat and casts no shadow. This combination is the opposite of existence, an endless void. This is the music of nothing, the heat death of the universe where all energy is spent and nothing can ever exist again.</h3>
				`;
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
            src="${youtubeLink}" allow="autoplay;"
          ></iframe>`;
			})
			.catch((err) => console.error(err));
	}
	// empire of the sun
	else if ((!Wind) && (!Earth) && (!Water) && (Fire) && (!Dark) && (Light)) {
		fetch(
			"https://spotify23.p.rapidapi.com/search/?q=empire%20of%20the%20sun&type=artists&offset=0&limit=2&numberOfTopResults=2",
			options1
		)
			.then((response) => response.json())
			.then((response) => {
				console.log("response", response);
				const uriNew = response.artists.items[0].data.uri
				console.log(uriNew);
				const num = uriNew.split(':')[2]
				const combination = "Fire & Light - Empire of the Sun"

				if (combinationHistory.indexOf(combination) === -1) {

					combinationHistory.push(combination)
					localStorage.setItem("combinationHistory", JSON.stringify(combinationHistory))
					const listItem = document.createElement("li")
					listItem.innerHTML = combination;
					combinationList.appendChild(listItem);
				}

				const spotify = document.getElementById("spotify");
				const { profile, uri, visuals } = response.artists.items[0].data;
				spotify.innerHTML = `
					<a href="https://open.spotify.com/artist/${num}">${profile.name}</a>
					<h3>Fire and Light</h3>
					<img src="${visuals.avatarImage.sources[0].url}" style="width:500px;height:600px;"/>
          <h3>A powerful combo that is as bright and brilliant as the sun. It burns bright and fades instantly. This is the music of miracles.</h3>
				`;
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
          ></iframe>`;
			})
			.catch((err) => console.error(err));
	}
	// the midnight
	else if ((!Wind) && (!Earth) && (!Water) && (!Fire) && (Dark) && (Light)) {
		fetch(
			"https://spotify23.p.rapidapi.com/search/?q=the%20midnight&type=artists&offset=0&limit=10&numberOfTopResults=10",
			options1
		)
			.then((response) => response.json())
			.then((response) => {
				console.log("response", response);
				const uriNew = response.artists.items[0].data.uri
				console.log(uriNew);
				const num = uriNew.split(':')[2]
				const combination = "Dark & Light - The Midnight"

				if (combinationHistory.indexOf(combination) === -1) {

					combinationHistory.push(combination)
					localStorage.setItem("combinationHistory", JSON.stringify(combinationHistory))
					const listItem = document.createElement("li")
					listItem.innerHTML = combination;
					combinationList.appendChild(listItem);
				}

				const spotify = document.getElementById("spotify");
				const { profile, uri, visuals } = response.artists.items[0].data;
				spotify.innerHTML = `
					<a href="https://open.spotify.com/artist/${num}">${profile.name}</a>
					<h3>Dark and Light</h3>
					<img src="${visuals.avatarImage.sources[0].url}" style="width:400px;height:400px;"/>
          <h3>A perfectly balanced combination, the brightest of lights cast the darkest of shadows. This is the music of nuance and morality.</h3>
				`;
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
          ></iframe>`;
			})
			.catch((err) => console.error(err));
	} else if (
		(!Wind) && (!Earth) && (!Water) && (!Fire) && (!Dark) && (!Light)) {
		console.log("no selection");
	} else {
		console.log("error");
	}
}


