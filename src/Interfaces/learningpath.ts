export interface Session {
  completed: boolean;
  dayOrder: number;
  id: string;
  sessionName: string;
  sessionOrder: number;
}

export interface Module {
  completedSessionsData: string;
  moduleId: string;
  moduleName: string;
  moduleOrder: number;
  sessionData: Session[];
}

export const moduleDetails: Module[] = [
  // Your moduleDetails data here
];
