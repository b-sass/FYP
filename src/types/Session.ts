type Task = {
  name: string,
  priority: string,
  completed: boolean,
}

type Session = {
  _id: string,
  name: string,
  target: string,
  tasks?: Task[],
  startDate: string,
  endDate: string,
}

export type { Task, Session };