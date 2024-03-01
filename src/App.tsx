import { useRoutes } from "react-router-dom";
import { Auth } from "./components/auth";
import Signin from "./pages/login";
import Checkout from "./pages/checkout";
import { AutoLogin } from "./components/autologin";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Auth />,
      children: [
        {
          path: "checkout",
          element: <Checkout />,
        },
      ],
    },
    {
      path: "/login",
      element: <AutoLogin />,
      children: [
        {
          path: "",
          element: <Signin />,
        },
      ],
    },
  ]);

  return element;
}

export default App;
