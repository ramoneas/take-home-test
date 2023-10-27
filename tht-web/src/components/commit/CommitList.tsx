import CodeIcon from "@mui/icons-material/Code";

type CommitRequest = {
  id: string;
  message: string;
  commit_author: string;
  changes_url: string;
  avatar_url: string;
  date: string;
};

type CommitListProps = { commit: CommitRequest[] };

const CommitList = ({ commit }: CommitListProps) => {
  return (
    <ul>
      {commit.map((item) => (
        <li key={item.id} className="px-3 py-1 rounded border border-gray-600">
          <div className="text-sm font-bold">
            <h4 className="text-1xl "> {item.message}</h4>
            <div className=""></div>
            <div className="flex justify-between items-center py-1">
              <div className="flex items-center space-x-2">
                <img
                  className="rounded-full w-10 h-10"
                  src={item.avatar_url}
                ></img>
                <p>
                  {item.commit_author == "web-flow"
                    ? "from GitHub"
                    : item.commit_author}
                </p>
                <p className="text-gray-600 ">committed {item.date} ago</p>
              </div>
              <a
                className="hover:text-blue-700 rounded bg-slate-700 px-3 py-1 text-gray-300"
                href={item.changes_url}
              >
                <CodeIcon /> {item.id}
              </a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default CommitList;
