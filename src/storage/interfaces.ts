// Статус задачи
export enum TaskStatus {
    NotStarted = 0, // Задача не выполнена
    InProgress = 1, // Задача в процессе выполнения
    Completed = 2,  // Задача выполнена
}

// Интерфейс для задачи
export interface Task {
  task_id: number,
  task_name: string;
  date_task: string;
  description_task: string;
  task_step: number;
}

// Интерфейс для доски
export interface Board {
  id: number;
  board_name: string;
  date_of_board: string;
  tasks: Task[];
}


