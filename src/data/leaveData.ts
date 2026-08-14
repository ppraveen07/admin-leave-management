export interface LeaveSetting {
  leavePlan: string;
  duration: number;
  recall: string;
}

export interface LeaveApplication {
  name: string;
  duration: number;
  startDate: string;
  endDate: string;
  type: string;
  reason: string;
}

export const leaveSettings: LeaveSetting[] = [
  {
    leavePlan: "Maternity",
    duration: 60,
    recall: "No / No",
  },
  {
    leavePlan: "Sick",
    duration: 14,
    recall: "No / Yes",
  },
  {
    leavePlan: "Compassionate",
    duration: 30,
    recall: "No / No",
  },
  {
    leavePlan: "Exam",
    duration: 30,
    recall: "No / No",
  },
  {
    leavePlan: "Paternity",
    duration: 60,
    recall: "No / No",
  },
  {
    leavePlan: "Casual",
    duration: 10,
    recall: "Yes / No",
  },
  {
    leavePlan: "Earn",
    duration: 30,
    recall: "No / No",
  },
];

export const ongoingLeaves: LeaveApplication[] = [
  {
    name: "abebe gemechu",
    duration: 5,
    startDate: "22/04/2022",
    endDate: "28/04/2022",
    type: "Casual",
    reason: "Personal",
  },
  {
    name: "aman bey",
    duration: 7,
    startDate: "22/04/2022",
    endDate: "30/04/2022",
    type: "Casual",
    reason: "Personal",
  },
  {
    name: "feven tesfaye",
    duration: 7,
    startDate: "22/04/2022",
    endDate: "28/06/2022",
    type: "Casual",
    reason: "Personal",
  },
  {
    name: "yanet tesfaye",
    duration: 5,
    startDate: "22/04/2022",
    endDate: "28/04/2022",
    type: "Casual",
    reason: "Personal",
  },
  {
    name: "beti wole",
    duration: 5,
    startDate: "22/04/2022",
    endDate: "28/04/2022",
    type: "Casual",
    reason: "Personal",
  },
  {
    name: "dawit int",
    duration: 5,
    startDate: "22/04/2022",
    endDate: "28/04/2022",
    type: "Casual",
    reason: "Personal",
  },
  {
    name: "gelila oges",
    duration: 5,
    startDate: "22/04/2022",
    endDate: "28/04/2022",
    type: "Casual",
    reason: "Personal",
  },
];

export const leaveHistory: LeaveApplication[] = [
  {
    name: "abebe gemechu",
    duration: 5,
    startDate: "22/04/2022",
    endDate: "28/04/2022",
    type: "Sick",
    reason: "Personal",
  },
  {
    name: "aman bey",
    duration: 7,
    startDate: "22/04/2022",
    endDate: "30/04/2022",
    type: "Exam",
    reason: "Examination",
  },
  {
    name: "feven tesfaye",
    duration: 120,
    startDate: "22/04/2022",
    endDate: "28/06/2022",
    type: "Maternity",
    reason: "Child Care",
  },
  {
    name: "gelila moges",
    duration: 5,
    startDate: "22/04/2022",
    endDate: "28/04/2022",
    type: "Sick",
    reason: "Personal",
  },
  {
    name: "yanet tesfaye",
    duration: 5,
    startDate: "22/04/2022",
    endDate: "28/04/2022",
    type: "Sick",
    reason: "Personal",
  },
  {
    name: "beti wole",
    duration: 5,
    startDate: "22/04/2022",
    endDate: "28/04/2022",
    type: "Sick",
    reason: "Personal",
  },
  {
    name: "dawit int",
    duration: 5,
    startDate: "22/04/2022",
    endDate: "28/04/2022",
    type: "Sick",
    reason: "Personal",
  },
];