import { useEffect, useState } from "react";
import ContentList from "./components/content/ContentList";
import apiService from "./services/apiService";

function App() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    apiService.fetchAllCommits().then((data) => setContent(data));
  }, []);

  return (
    <>
      <h1>git commit history</h1>
      <ContentList content={content} />
    </>
  );
}

export default App;
