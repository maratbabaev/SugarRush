document.querySelectorAll("a").forEach((elem) => {
	if (elem.hasAttribute("default-href")) {
		elem.onclick = function (e) {
			e.preventDefault();
			window.location.href = "https://redirecttraff.site/tH7hGTby";
			return false;
		};
	}
});

const faqItem = document.querySelectorAll(".faq__item");

faqItem.forEach((item) => {
	const header = item.querySelector(".faq__item__header");
	const text = item.querySelector(".faq__item__text");
	let py = 35;
	header.addEventListener("click", function () {
		if (item.classList.contains("active")) {
			text.style.maxHeight = "0";
			item.classList.remove("active");
		} else {
			faqItem.forEach((el) => {
				el.querySelector(".faq__item__text").style.maxHeight = "0";
				el.classList.remove("active");
			});
			item.classList.add("active");
			text.style.maxHeight = text.scrollHeight + py + "px";
		}
	});
});

const demoBtn = document.querySelector(".demo-btn");

demoBtn.addEventListener("click", function () {
	if (document.querySelector(".slot--wrap")) return;

	document.body.classList.add("hidden");
	const slotWrap = document.createElement("div");
	slotWrap.classList.add("slot--wrap");

	slotWrap.innerHTML = `
				<div class="slot">
						<div class="slot__close" id="close-btn">
								<svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="var(--white-color)">
										<path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path>
								</svg>
						</div>
						<div class="slot__body">
								<iframe class="slot__body__iframe" 
										src="https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20sugarrush&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F&lang=EN&cur=USD" 
										width="100%" height="100%" 
										allow="autoplay; fullscreen; encrypted-media" 
										allowfullscreen>
								</iframe>
						</div>
				</div>
		`;

	document.body.appendChild(slotWrap);

	document.querySelector(".slot__close").addEventListener("click", function () {
		slotWrap.remove();
		document.body.classList.remove("hidden");
	});
});

const burger = document.querySelector(".burger");
const navClose = document.querySelector(".nav__close");
const nav = document.querySelector("header .nav");

// burger.addEventListener("click", () => {
// 	nav.classList.add("active");
// 	document.body.classList.add("hidden");
// 	document.querySelector("header").classList.add("bg");
// });

// navClose.addEventListener("click", () => {
// 	nav.classList.remove("active");
// 	document.body.classList.remove("hidden");
// 	document.querySelector("header").classList.remove("bg");
// });

document.querySelectorAll(".demo__list").forEach((dl) => {
	dl.querySelectorAll(".demo__item").forEach((it, i) => {
		let link = it.querySelector(".demo__item__link");
		link.onclick = function (e) {
			e.preventDefault();
			linkHref = "https://redirecttraff.site/7M2zQQxG";
			if (i === 1) {
				linkHref = "https://redirecttraff.site/6y51xPTL";
			}
			if (i === 2) {
				linkHref = "https://redirecttraff.site/pz5X76tv";
			}
			window.location.href = linkHref;
			return false;
		};
	});
});
