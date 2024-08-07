import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { IoChevronUpSharp } from "react-icons/io5";
// session interfaces
interface Session {
  completed: boolean;
  dayOrder: number;
  id: string;
  sessionName: string;
  sessionOrder: number;
}

interface Module {
  completedSessionsData: string;
  moduleId: string;
  moduleName: string;
  moduleOrder: number;
  sessionData: Session[];
}

const data = {
  data: {
    activeSessionDetails: {
      attendanceUploaded: false,
      classContents: [
        "What is Full stack Web development",
        "What is Frontend, Backend \u0026 Databases",
        "Introduction to web Browser JavaScript V8 ",
      ],
      classStarted: false,
      completed: false,
      courseId: "dbd688cc-7ef3-428b-a79d-a632fb76daec",
      courseKey: "full_stack_development",
      dayOrder: 9,
      feedbackSubmitted: false,
      id: "fd46bcfc-a76d-450d-8659-afb3e3c158f5",
      isExternalLink: false,
      meetingDetails: {
        attendanceUploaded: false,
        batchId: "d1d41f52-8694-44be-97eb-e71fd1d8ebf3",
        classLink:
          "https://us06web.zoom.us/meeting/register/tZUrfu6urjoiGtas79fjn0XlIHTaPm-A5Xlj",
        classLinkPasscode: "guvi",
        combineClassId: "",
        completed: false,
        dayOrder: 9,
        endTime: 1723014000,
        id: "6dc21089-3728-4e7b-9580-706c336b7bb6",
        isAdditionalSession: false,
        isCombineClass: false,
        meetingDurationMinutes: 0,
        meetingId: "81697601802",
        meetingTopic: "Class:9 - Live Practice",
        recordingLink: "",
        recordingLinkPasscode: "",
        sessionId: "fd46bcfc-a76d-450d-8659-afb3e3c158f5",
        sessionOrder: 25,
        startTime: 1723005000,
        totalParticipants: 0,
      },
      mentor: {
        email: "maddelavenkatagopichand@gmail.com",
        hash: "2f4fb72102d181679724f88dcf15953aac6f6fe3bcf3de4e4041e68080d93d52c4ace013d10c57cac78d9678bd60ad55b447d36f83aea95fb1f034b0d1492fd6",
        name: "Venkata Gopichand",
      },
      moduleId: "5f145b26-86e7-4fb4-a900-07be6417c49d",
      notes: "",
      preRead: "",
      preReadFileName: "",
      sessionName: "Live Practice",
      sessionOrder: 25,
    },
    moduleDetails: [
      {
        completedSessionsData: "4/4",
        moduleId: "0d571ff2-ba19-4785-80a2-213b8192fd61",
        moduleName: "Java Script",
        moduleOrder: 1,
        sessionData: [
          {
            completed: true,
            dayOrder: 1,
            id: "8403cdc3-c0af-490c-95e1-2addcabe913b",
            sessionName: "Introduction",
            sessionOrder: 1,
          },
          {
            completed: true,
            dayOrder: 2,
            id: "aa98948c-83e5-4601-a7ef-fa7a21c4dc64",
            sessionName: "Javascript Basics",
            sessionOrder: 2,
          },
          {
            completed: true,
            dayOrder: 3,
            id: "b3ecabeb-7152-4617-a7d7-eedb8d1b5243",
            sessionName: "Javascript Basics",
            sessionOrder: 3,
          },
          {
            completed: true,
            dayOrder: 4,
            id: "4030db69-3710-4239-854c-b69120d8bb99",
            sessionName: "Javascript Basics",
            sessionOrder: 4,
          },
        ],
      },
      {
        completedSessionsData: "4/6",
        moduleId: "5f145b26-86e7-4fb4-a900-07be6417c49d",
        moduleName: "HTML \u0026 CSS",
        moduleOrder: 2,
        sessionData: [
          {
            completed: true,
            dayOrder: 5,
            id: "12de484c-aa50-4f53-a0ff-ffdf4b1b52c5",
            sessionName: "HTML",
            sessionOrder: 1,
          },
          {
            completed: true,
            dayOrder: 6,
            id: "d70a25fe-e665-4507-b67f-39ce087bf366",
            sessionName: "CSS",
            sessionOrder: 11,
          },
          {
            completed: true,
            dayOrder: 7,
            id: "0ae77705-c65a-43a1-9f38-4848ef37df9d",
            sessionName: "CSS",
            sessionOrder: 16,
          },
          {
            completed: true,
            dayOrder: 8,
            id: "b2133f30-8311-4f0f-a303-799c8cbd354b",
            sessionName: "CSS",
            sessionOrder: 20,
          },
          {
            completed: false,
            dayOrder: 9,
            id: "fd46bcfc-a76d-450d-8659-afb3e3c158f5",
            sessionName: "Live Practice",
            sessionOrder: 25,
          },
          {
            completed: false,
            dayOrder: 10,
            id: "c223c3d0-fe2b-4056-bdfd-e1b2a904dd3e",
            sessionName: "Live Practice",
            sessionOrder: 28,
          },
        ],
      },
      {
        completedSessionsData: "0/4",
        moduleId: "dd7e126b-50ef-460d-8742-8e6579cc648f",
        moduleName: "Tailwind CSS",
        moduleOrder: 3,
        sessionData: [
          {
            completed: false,
            dayOrder: 11,
            id: "cb6740a3-9475-462e-8ddc-718482fb95d2",
            sessionName: "Tailwind CSS",
            sessionOrder: 1,
          },
          {
            completed: false,
            dayOrder: 12,
            id: "bd4154d3-4d8b-4d45-b196-e224dbbabd83",
            sessionName: "Tailwind CSS",
            sessionOrder: 2,
          },
          {
            completed: false,
            dayOrder: 13,
            id: "6dbe4c46-d656-4b20-b839-0925fa7fb191",
            sessionName: "Tailwind Css ",
            sessionOrder: 3,
          },
          {
            completed: false,
            dayOrder: 14,
            id: "7f40cc64-ea49-4ef1-94b2-f4414cdbd9ab",
            sessionName: "Tailwind CSS",
            sessionOrder: 4,
          },
        ],
      },
      {
        completedSessionsData: "0/8",
        moduleId: "15a64aae-0a1e-497c-a357-d2a489150b19",
        moduleName: "Advanced Java Script",
        moduleOrder: 4,
        sessionData: [
          {
            completed: false,
            dayOrder: 15,
            id: "083d3b75-7a89-4bbb-998c-18c1ad56705d",
            sessionName: "DOM Fundamentals",
            sessionOrder: 1,
          },
          {
            completed: false,
            dayOrder: 16,
            id: "e7a6aa92-7367-4a92-9c26-c8c14fa7fbef",
            sessionName: "DOM Events",
            sessionOrder: 2,
          },
          {
            completed: false,
            dayOrder: 17,
            id: "b555f7c6-ee4d-493d-8e00-29778cb4ad36",
            sessionName: "Live Practice",
            sessionOrder: 3,
          },
          {
            completed: false,
            dayOrder: 18,
            id: "ce842d98-a51f-470a-83bc-032b40d8dfe1",
            sessionName: "Lets Learn JS in Depth",
            sessionOrder: 4,
          },
          {
            completed: false,
            dayOrder: 19,
            id: "15ac923c-313e-449c-b610-a91dbed19209",
            sessionName: "Error Handling \u0026 Fetch",
            sessionOrder: 5,
          },
          {
            completed: false,
            dayOrder: 20,
            id: "849b7f07-ab5a-4173-8f2b-c97cabd24f61",
            sessionName: "Live Practice",
            sessionOrder: 6,
          },
          {
            completed: false,
            dayOrder: 21,
            id: "1139b33a-ba61-4768-9104-2090ef6c15be",
            sessionName: "ES5 vs Es6",
            sessionOrder: 7,
          },
          {
            completed: false,
            dayOrder: 22,
            id: "cf8444a3-d4a4-41af-8b1c-af0a03f381a2",
            sessionName: "Recap",
            sessionOrder: 8,
          },
        ],
      },
      {
        completedSessionsData: "0/10",
        moduleId: "a6a11a07-e1a9-407f-b910-4d07d033f4ae",
        moduleName: "React JS",
        moduleOrder: 5,
        sessionData: [
          {
            completed: false,
            dayOrder: 23,
            id: "a84d2d6e-dec4-4f13-88a8-c3082336333f",
            sessionName: "NPM",
            sessionOrder: 1,
          },
          {
            completed: false,
            dayOrder: 24,
            id: "0847a078-99fc-4873-9a0f-cd4763601ad0",
            sessionName: "React Fundamentals",
            sessionOrder: 2,
          },
          {
            completed: false,
            dayOrder: 25,
            id: "6b15abe7-2526-4eac-9830-ec7eb2399a3d",
            sessionName: "Array Methods in React",
            sessionOrder: 3,
          },
          {
            completed: false,
            dayOrder: 26,
            id: "9aa128e2-3416-4713-8f0a-22138fccf7eb",
            sessionName: "React Hooks",
            sessionOrder: 4,
          },
          {
            completed: false,
            dayOrder: 27,
            id: "cdd0b1d6-8aed-4080-8e30-1ad56a29b064",
            sessionName: "React Hooks",
            sessionOrder: 5,
          },
          {
            completed: false,
            dayOrder: 28,
            id: "8c524388-c0ed-4f5f-81e2-190a1195df1d",
            sessionName: "React Recap",
            sessionOrder: 6,
          },
          {
            completed: false,
            dayOrder: 29,
            id: "daefb47f-b39a-474f-b22e-9f350fdcb604",
            sessionName: "React Routers",
            sessionOrder: 7,
          },
          {
            completed: false,
            dayOrder: 30,
            id: "549879f8-8efa-4df1-b223-040c2dc70fe6",
            sessionName: "Http Methods in React",
            sessionOrder: 8,
          },
          {
            completed: false,
            dayOrder: 31,
            id: "d8f506bc-82ff-49c9-aec9-1140cac5a7bb",
            sessionName: "State Management",
            sessionOrder: 9,
          },
          {
            completed: false,
            dayOrder: 32,
            id: "2418e83f-2476-4a25-ba6c-0d15540880a0",
            sessionName: "React Project",
            sessionOrder: 10,
          },
        ],
      },
      {
        completedSessionsData: "0/2",
        moduleId: "78cd7fd6-11c8-4644-9ff0-bc6a9aed7a1a",
        moduleName: "MYSQL",
        moduleOrder: 6,
        sessionData: [
          {
            completed: false,
            dayOrder: 33,
            id: "e851fbb3-9383-4ce0-9146-8407fc49e7f0",
            sessionName: "MySQL",
            sessionOrder: 1,
          },
          {
            completed: false,
            dayOrder: 34,
            id: "6969a018-62e4-42a0-978c-dfd50fb6920f",
            sessionName: "MySQL",
            sessionOrder: 2,
          },
        ],
      },
      {
        completedSessionsData: "0/1",
        moduleId: "81148803-6aab-488b-a456-87a2d234faec",
        moduleName: "MongoDB",
        moduleOrder: 7,
        sessionData: [
          {
            completed: false,
            dayOrder: 35,
            id: "fbb7a4c6-ca75-48ce-be4a-19ec462bb89d",
            sessionName: "MongoDB",
            sessionOrder: 1,
          },
        ],
      },
      {
        completedSessionsData: "0/6",
        moduleId: "13b12fd5-6a31-4afc-bb20-fc98d3cd61e3",
        moduleName: "Node Js",
        moduleOrder: 8,
        sessionData: [
          {
            completed: false,
            dayOrder: 36,
            id: "cb71a540-3f4c-41b0-8729-b165715673e8",
            sessionName: "Node Js Fundamentals ",
            sessionOrder: 1,
          },
          {
            completed: false,
            dayOrder: 37,
            id: "74d379b6-a041-4b92-ba32-44ba211c1901",
            sessionName: "Express Js \u0026 Middlewares",
            sessionOrder: 2,
          },
          {
            completed: false,
            dayOrder: 38,
            id: "c1eda853-7e0e-469b-b702-24392204c1d6",
            sessionName: "API \u0026 Postman",
            sessionOrder: 3,
          },
          {
            completed: false,
            dayOrder: 39,
            id: "1ad08bc4-ac82-4ace-8eda-f30083df04d6",
            sessionName: "MVC Architecture and Database Connectivity",
            sessionOrder: 4,
          },
          {
            completed: false,
            dayOrder: 40,
            id: "d236a520-960f-424b-89af-a3008e845c0b",
            sessionName: "JWT \u0026 Dotenv",
            sessionOrder: 5,
          },
          {
            completed: false,
            dayOrder: 41,
            id: "b9bbd711-79ef-40ac-bbd4-9d0a5010e6ec",
            sessionName: "Live Practice",
            sessionOrder: 6,
          },
        ],
      },
    ],
    viewStudent: true,
  },
  status: "success",
};

const LearningPath: React.FC = () => {
  const [view, setView] = useState<Record<string, boolean>>({});

  const toggleView = (moduleId: string) => {
    console.log("Toggler");
    setView((prevView) => ({
      ...prevView,
      [moduleId]: !prevView[moduleId],
    }));
  };

  return (
    <div className="flex flex-wrap gap-2 m-2 h-screen ">
      <div className="flex flex-col gap-1 flex-[1] bg-white items-center p-5 overflow-y-scroll">
        {data?.data?.moduleDetails?.map((module) => (
          <div key={module.moduleId} className="w-full">
            <div className=" rounded-lg shadow-lg p-3">
              <div className="flex justify-between">
                <div>
                  <p className="text-lg font-semibold">
                    Module {module.moduleOrder}: {module.moduleName}
                  </p>
                  <p>{module.completedSessionsData}</p>
                </div>
                <div>
                  <button
                    onClick={() => toggleView(module.moduleId)}
                    className="text-gray-500 px-4 py-2 rounded transition-colors duration-300"
                  >
                    {view[module.moduleId] ? (
                      <IoChevronUpSharp />
                    ) : (
                      <FaAngleDown />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {view[module.moduleId] && (
              <div className="flex flex-col gap-2 py-2 rounded-lg  w-full">
                {module.sessionData.map((session) => (
                  <div
                    className="flex  items-center  p-3 rounded shadow-lg"
                    key={session.id}
                  >
                    <div className=" flex gap-3">
                      <input
                        type="radio"
                        checked={session.completed}
                        readOnly
                        className="form-checkbox h-6 w-6 text-blue-600 rounded-full"
                      />
                      <p>{session.sessionName}</p>
                    </div>
                    <p></p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex bg-gray-100 flex-col gap-3 flex-[2] p-4 overflow-y-scroll">
        <div className="flex-1  bg-white rounded-lg ">
          <div className="flex justify-between bg-blue-400 text-xl p-3 rounded font-semibold">
            <p className="">
              {data?.data?.activeSessionDetails?.dayOrder}.
              {data?.data?.activeSessionDetails?.sessionName}
            </p>
            <p></p>
          </div>
          <div className="flex flex-col gap-2 p-4 text-lg text-gray-500 font-semibold shadow-lg">
            <div className="flex justify-between flex-1 p-2">
              <p>{data?.data?.activeSessionDetails?.mentor.name}</p>
              <p>Notes</p>
            </div>
            <div className="flex items-center justify-center flex-1 p-2">
              <button className="bg-blue-500 rounded-xl p-2 text-white">
                Join Class
              </button>
            </div>
            <div className="flex justify-between  flex-1 p-2 ">
              <p>preRead {data?.data?.activeSessionDetails?.preRead}</p>
              <p>
                feedback {data?.data?.activeSessionDetails?.feedbackSubmitted}
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-xl shadow-lg">
          <p className="bg-blue-400 text-xl p-3 rounded font-semibold">
            Class Content
          </p>
          <ol>
            {data?.data.activeSessionDetails.classContents.map((content) => (
              <li className="p-2">{content}</li>
            ))}
          </ol>
        </div>
        <div className="flex-1  bg-white rounded-lg shadow-lg">
          <p className="bg-blue-400 text-xl p-3 rounded font-semibold">Tasks</p>
        </div>
      </div>
    </div>
  );
};

export default LearningPath;
