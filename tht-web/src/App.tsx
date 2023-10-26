import { useEffect, useState } from "react";
import ContentList from "./components/content/ContentList";
import apiService from "./services/apiService";
import Title from "./components/Title";

function App() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    apiService.fetchAllCommits().then((data) => setContent(data));
  }, []);

  return (
    <>
      <Title />
      <ContentList content={content} />
    </>
  );
}

export default App;
