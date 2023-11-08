import { useEffect, useState } from "react";
import CommitList from "./components/Commit/CommitList";
import apiService from "./services/apiService";
import Title from "./components/Title";

function App() {
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    apiService.fetchAllCommits().then((data) => setCommits(data));
  }, []);

  return (
    <main className="bg-zinc-900  text-white min-h-screen p-10">
      <div className=" container mx-auto p-5 rounded-lg">
        <Title />
        <CommitList commits={commits} />
      </div>
    </main>
  );
}

export default App;
