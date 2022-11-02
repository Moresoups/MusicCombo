//rolling stones search


const options1 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ed0b354182msha048388c855c2fbp1f3ee1jsnebb54d352b31',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

fetch('https://spotify23.p.rapidapi.com/search/?q=the%20rolling%20stones&type=albums&offset=0&limit=2&numberOfTopResults=2', options1)
	.then(res => res.json())
	.then(data => console.log(data))
	.catch(err => console.error(err));

//The Heavy

const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ed0b354182msha048388c855c2fbp1f3ee1jsnebb54d352b31',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

fetch('https://spotify23.p.rapidapi.com/search/?q=The%20Heavy&type=albums&offset=0&limit=2&numberOfTopResults=2', options2)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));