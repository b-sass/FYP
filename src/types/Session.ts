type Task = {
  name: string,
  priority: string,
  completed: boolean,
}

type Session = {
  id: string,
  name: string,
  tasks?: Task[],
  startDate: string,
  endDate: string,
}

export type { Task, Session };