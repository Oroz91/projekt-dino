import Button from "./components/button";
import Checkbox from "./components/checkbox";
import Header from "./components/header";
import Navigation from "./components/navigation";
import FormField from "./formfield";
import "./styles/styles.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Button />
      <Checkbox />
      <FormField />
      <div className="container"></div>
    </div>
  );
};
export default App;
