const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("dis-mean");
const sound = document.getElementById("sound");
const btn = document.getElementById("dict-btn");
btn.addEventListener("click", () => {
    let inputWord = document.getElementById("ser-word").value;//to get the word ...if value not used the whole element will be returned
    fetch(`${url}${inputWord}`).then((response) => {
        console.log(`${url}${inputWord}`);
       return response.json();

    }).then((response2) => {
        console.log(response2);
        result.innerHTML = `<div id="word">
        <h3>${inputWord}</h3>
        <button id="audio"><i class="fa-solid fa-volume-high"></i></button>
    </div>
    <div id="details">
        <p>${response2[0].meanings[0].partOfSpeech}</p>
        <p>${response2[0].phonetics[1].text}</p>
    </div>

    <p id="word-meaning"><span class="subheadings">meaning:<br></span>${response2[0].meanings[0].definitions[0].definition}
    </p>
    <p id="word-example">
        ${response2[0].meanings[0].definitions[0].example||""}
    </p>
</div>`;
sound.setAttribute("src",``)
    })
})