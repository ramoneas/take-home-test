type CommitRequest = {
  id: string;
  message: string;
  commit_author: string;
  changes_url: string;
  avatar_url: string;
};

const ContentList = ({ content }) => {
  return (
    <ul>
      {content.map((item: CommitRequest) => (
        <li key={item.id}>
          <div>
            <h4>{item.id}</h4>
            <p>
              <img src={item.avatar_url}></img>
            </p>
            <p>message: {item.message}</p>
            <p>Author: {item.commit_author}</p>
            <p>
              <a href={item.changes_url}>view changes</a>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default ContentList;
