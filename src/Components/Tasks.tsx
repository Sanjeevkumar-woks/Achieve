const Tasks = () => {
  return (
    <div className="w-screen h-screen items-center">
      <p className="text-xl font-bold">Tasks</p>

      <div className="flex gap-5 h-screen text-center">
        <div className=" flex-1 p-2">
          <p className="p-4 border-b-4 rounded-md border-blue-500 text-gray-500 font-semibold">
            Active Task
          </p>
        </div>
        <div className=" flex-1 p-2">
          <p className="p-4 border-b-4 rounded-md border-red-500 text-gray-500 font-semibold">
            Pending Task
          </p>
        </div>
        <div className=" flex-1 p-2">
          <p className="p-4 border-b-4 rounded-md border-green-500 text-gray-500 font-semibold">
            Completed Task
          </p>
        </div>
      </div>
    </div>
  );
};
export default Tasks;
