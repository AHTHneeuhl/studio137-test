import { AppWrapper } from "./App.styles";
import Layout from "./Layout";
import AppProvider from "./AppProvider";

const App = () => {
  return (
    <AppProvider>
      <AppWrapper>
        <Layout />
      </AppWrapper>
    </AppProvider>
  );
};

export default App;
