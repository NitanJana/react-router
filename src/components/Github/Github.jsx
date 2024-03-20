import { useLoaderData } from 'react-router-dom';

const Github = () => {
  const { name, avatar_url } = useLoaderData();
  return (
    <div className="m-4 flex flex-col items-center justify-center gap-4  p-4 text-3xl text-gray-600">
      {name}
      <img src={avatar_url} alt="Git picture" width={300} className="w-72 rounded-full" />
    </div>
  );
};

export default Github;
