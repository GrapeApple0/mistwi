import { getBucket } from "@extend-chrome/storage";
import ky from 'ky';
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
	if (message.type === "mipost") {
		let conf = {
			miServer: "none",
			miApiKey: "none",
			miVisibility: "none"
		};
		(async () => {
			interface TwmidsSettings {
				miApiKey: string;
				miSrv: string;
				miVisibility: string;
			}
			const bucket = getBucket<TwmidsSettings>("twmids-settings");
			const value = await bucket.get();
			conf = {
				miServer: value.miSrv,
				miApiKey: value.miApiKey,
				miVisibility: value.miVisibility
			}
			const res = await ky.post(`https://${conf.miServer}/api/notes/create`, {
				headers: {
					'Content-Type': 'application/json'
				},
				json: {
					'text': message.text,
					'i': `${conf.miApiKey}`,
					'visibility': conf.miVisibility
				}
			}); 
			const data = await res.json();
			sendResponse(data);
		})();
	}
	return true;
});