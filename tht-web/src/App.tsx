import { useEffect, useState } from "react";
import CommitList from "./components/commit/CommitList";
import apiService from "./services/apiService";
import Title from "./components/Title";

function App() {
  const [commit, setCommit] = useState([]);

  useEffect(() => {
    apiService.fetchAllCommits().then((data) => setCommit(data));
  }, []);

  return (
    <>
      <main className="bg-zinc-900  text-white min-h-screen p-10">
        <div className=" container mx-auto p-5 rounded-lg">
          <Title />
          <CommitList commit={commit} />
        </div>
      </main>
    </>
  );
}

export default App;
