const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/nitanjana');
  return response.json();
};

export default githubInfoLoader;
