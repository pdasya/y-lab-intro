import Main from "@views/Main";
import "./App.scss";
import ErrorBoundary from "@components/ErrorBoundary/ErrorBooundary";

const App = () => {
  return (
    <ErrorBoundary>
      <Main />
    </ErrorBoundary>
  );
};

export default App;
