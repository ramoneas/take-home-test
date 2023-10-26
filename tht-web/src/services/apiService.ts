const fetchAllCommits = async () => {
  return fetch(`${import.meta.env.VITE_API_URL}/api/commits`).then((res) =>
    res.json()
  );
};

export default {
  fetchAllCommits,
};
