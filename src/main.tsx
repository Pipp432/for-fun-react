import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { SwipeContextProvider } from "./Components/SwiperContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<SwipeContextProvider>
		<App />
	</SwipeContextProvider>
);
