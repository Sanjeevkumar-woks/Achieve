const Projects = () => {
  const Projects = [];
  return (
    <div className="w-screen h-screen items-center">
      <p className="text-2xl font-bold ml-3 p-2">Projects</p>

      <div className="flex gap-5 h-screen text-center p-2 mt-5">
        <div className=" flex-1 p-2">
          <p className="p-4 border-b-4 rounded-md border-blue-500 text-lg text-gray-500 font-semibold">
            Active Project
          </p>
          {Projects?.length ? (
            <div></div>
          ) : (
            <div className=" flex justify-center items-center w-full h-full text-gray-500 font-semibold">
              <p>No Active Projects</p>
            </div>
          )}
        </div>
        <div className=" flex-1 p-2">
          <p className="p-4 border-b-4 rounded-md border-red-500 text-gray-500 font-semibold ">
            Pending Project
          </p>
          {Projects?.length ? (
            <div></div>
          ) : (
            <div className=" flex justify-center items-center w-full h-full text-gray-500 font-semibold">
              <p>No Pending Projects</p>
            </div>
          )}
        </div>
        <div className=" flex-1 p-2">
          <p className="p-4 border-b-4 rounded-md border-green-500 text-gray-500 font-semibold">
            Completed Project
          </p>
          {Projects?.length ? (
            <div></div>
          ) : (
            <div className=" flex justify-center items-center w-full h-full text-gray-500 font-semibold">
              <p>Yet to Complete</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Projects;
