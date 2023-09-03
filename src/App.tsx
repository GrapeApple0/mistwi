import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { getBucket } from "@extend-chrome/storage";

interface TwmidsSettings {
	miApiKey: string;
	miSrv: string;
	miVisibility: string;
}

function App() {
	const bucket = getBucket<TwmidsSettings>("twmids-settings");
	const [miApiKey, setMiApiKey] = useState("");
	const [miSrv, setMiSrv] = useState("");
	const [miVisibility, setMiVisibility] = useState("");

	const saveSettings = (
		newMiApiKey = "",
		newMiSrv = "",
		newMiVisibility = ""
	) => {
		if (newMiApiKey == "") {
			newMiApiKey = miApiKey;
		}
		if (newMiSrv == "") {
			newMiSrv = miSrv;
		}
		if (miVisibility == "") {
			newMiVisibility = miVisibility;
		}
		bucket.set({
			miApiKey: newMiApiKey,
			miSrv: newMiSrv,
			miVisibility: newMiVisibility,
		});
	};
	useEffect(() => {
		(async () => {
			const value = await bucket.get();
			if (value.miApiKey) {
				setMiApiKey(value.miApiKey);
			}
			if (value.miSrv) {
				setMiSrv(value.miSrv);
			}
			if (value.miVisibility) {
				setMiVisibility(value.miVisibility);
				const visibilitySelectEle = document.getElementById(
					"visibility"
				) as HTMLSelectElement;
				if (visibilitySelectEle) {
					for (
						let index = 0;
						index < visibilitySelectEle?.children.length;
						index++
					) {
						if (
							visibilitySelectEle?.options[index].value == value.miVisibility
						) {
              visibilitySelectEle!.options[index].selected = true;
							break;
						}
					}
				}
			}
		})();
	}, []);

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<input
					type="text"
					placeholder="MisskeyのAPIキー"
					value={miApiKey}
					onChange={(event) => {
						setMiApiKey(event.target.value);
						saveSettings(event.target.value);
					}}
				></input>
				<input
					type="text"
					placeholder="投稿するMisskeyサーバー"
					value={miSrv}
					onChange={(event) => {
						setMiSrv(event.target.value);
						saveSettings("", event.target.value);
					}}
				></input>
				<select
					id="visibility"
					onChange={(event) => {
						setMiVisibility(event.target.value);
						saveSettings("", "", event.target.value);
					}}
				>
					<option value="public">公開</option>
					<option value="home">ホーム</option>
					<option value="followers">フォロワーのみ</option>
        </select>
        <p style={{visibility:"hidden"}}>{miVisibility}</p>
			</div>
		</>
	);
}

export default App;
