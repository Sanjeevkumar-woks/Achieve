import { Tabs } from "antd";
import LearningPath from "./LearningPath";

const tabs = [
  {
    label: "Learning Path",
    key: "Learning Path",
    children: (
      <div>
        <LearningPath />
      </div>
    ),
  },
  {
    label: "Additional Class",
    key: "Additional Class",
    children: (
      <div>
        <p>Additional Classes</p>
      </div>
    ),
  },
];

const ClassComponent: React.FC = () => {
  return (
    <div className="">
      <h1 className="font-semibold text-2xl px-4">Class</h1>
      <Tabs defaultActiveKey="1" centered size="large" items={tabs} />
    </div>
  );
};

export default ClassComponent;
