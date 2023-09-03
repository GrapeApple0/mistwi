let oldUrl = "";
setInterval(() => {
	addNoteButton();
	if (oldUrl != window.location.href) {
		console.log("url changed:" + window.location.href);
	}
	oldUrl = window.location.href;
}, 100);

function addNoteButton() {
	const noteButton = document.createElement("div");
	if (window.location.href == "https://twitter.com/compose/tweet") {
		setTimeout(() => {
			noteButton.innerHTML = `
			<div id="noteButton" lc="compose" role="button" tabindex="-1" class="css-18t94o4 css-1dbjc4n r-42olwf r-sdzlij r-1phboty r-rs99b7 r-19u6a5r r-2yi16 r-1qi8awa r-1ny4l3l r-ymttw5 r-o7ynqc r-6416eg r-lrvibr" style="background-color: #3D9990;">
			<div dir="ltr" class="css-901oao r-1awozwy r-jwli3a r-6koalj r-18u37iz r-16y2uox r-37j5jr r-a023e6 r-b88u0q r-1777fci r-rjixqe r-bcqeeo r-q4m81j r-qvutc0">
			<span class="css-901oao css-16my406 css-1hf3ou5 r-poiln3 r-a023e6 r-rjixqe r-bcqeeo r-qvutc0">
			<span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">投稿<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg></span>
			</span>
			</div>`
			noteButton.addEventListener("click", post);
			const postTab = document.getElementsByClassName("css-1dbjc4n r-1awozwy r-18u37iz r-1s2bzr4")[1];
			if (postTab && (document.querySelector('[lc="compose"]') == null) && window.location.href == "https://twitter.com/compose/tweet") {
				postTab.appendChild(noteButton);
				console.log("Append note button in compose");
			}
		}, 1000);
	} else {
		setTimeout(() => {
			noteButton.innerHTML = `
			<div id="noteButton" lc="default" role="button" tabindex="-1" class="css-18t94o4 css-1dbjc4n r-42olwf r-sdzlij r-1phboty r-rs99b7 r-19u6a5r r-2yi16 r-1qi8awa r-1ny4l3l r-ymttw5 r-o7ynqc r-6416eg r-lrvibr" style="background-color: #3D9990;">
			<div dir="ltr" class="css-901oao r-1awozwy r-jwli3a r-6koalj r-18u37iz r-16y2uox r-37j5jr r-a023e6 r-b88u0q r-1777fci r-rjixqe r-bcqeeo r-q4m81j r-qvutc0">
			<span class="css-901oao css-16my406 css-1hf3ou5 r-poiln3 r-a023e6 r-rjixqe r-bcqeeo r-qvutc0">
			<span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">投稿<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg></span>
			</span>
			</div>`
			noteButton.addEventListener("click", post);
			const postTab = document.getElementsByClassName("css-1dbjc4n r-1awozwy r-18u37iz r-1s2bzr4")[1];
			if (postTab && (document.querySelector('[lc="default"]') == null)) {
				postTab.appendChild(noteButton);
				console.log("Append note button in default");
			}
		}, 1000);
	}
}

setInterval(() => {
	const elements = document.getElementsByClassName("public-DraftStyleDefault-block public-DraftStyleDefault-ltr");
	const noteButton = document.getElementById("noteButton");
	let text = "";
	for (let i = 0; i < elements.length; i++) {
		if (elements[i].children[0].children[0]) {
			text += elements[i].children[0].children[0].innerHTML + "\n";
		}
	}
	text = text.substring(0, text.length - 1);
	if (noteButton) {
		if (text.length == 0) {
			noteButton.className = "css-1dbjc4n r-l5o3uw r-42olwf r-sdzlij r-1phboty r-rs99b7 r-19u6a5r r-2yi16 r-1qi8awa r-icoktb r-1ny4l3l r-ymttw5 r-o7ynqc r-6416eg r-lrvibr";
		} else {
			noteButton.className = "css-18t94o4 css-1dbjc4n r-42olwf r-sdzlij r-1phboty r-rs99b7 r-19u6a5r r-2yi16 r-1qi8awa r-1ny4l3l r-ymttw5 r-o7ynqc r-6416eg r-lrvibr";
		}
	}
}, 1000);

function post() {
	let text = "";
	const elements = document.getElementsByClassName("public-DraftStyleDefault-block public-DraftStyleDefault-ltr");
	for (let i = 0; i < elements.length; i++) {
		text += elements[i].children[0].children[0].innerHTML + "\n";
	}
	text = text.substring(0, text.length - 1);
	console.log(text);
	if (text.length == 0) return;

	chrome.runtime.sendMessage({ type: "mipost", text }, function (response) {
		if (response) {
			// const parentEle = document.querySelector('[data-text="true"]')?.parentElement;
			// if (parentEle) {
			// 	parentEle.click();
			// 	parentEle.innerHTML = "";
			// 	parentEle.dispatchEvent(new Event("input", { bubbles: true, cancelable: true }));
			// }
			const tweetButtonEle = document.querySelector('[data-testid="tweetButtonInline"]') as HTMLDivElement;
			if (tweetButtonEle) {
				tweetButtonEle.click();
			}
			if (document.location.href == "https://twitter.com/compose/tweet") {
				document.getElementsByClassName("css-18t94o4 css-1dbjc4n r-1niwhzg r-42olwf r-sdzlij r-1phboty r-rs99b7 r-2yi16 r-1qi8awa r-1ny4l3l r-o7ynqc r-6416eg r-lrvibr")[0].click();
			}
		}
	});
}