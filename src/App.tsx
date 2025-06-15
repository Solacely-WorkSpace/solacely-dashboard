import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./auth/provider/AuthProvider";
import router from "./routes";
import { ThemeProvider } from "./theme/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
