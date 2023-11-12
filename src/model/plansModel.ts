export class Plan {
  constructor(params: IPlanParam) {
    this.name = params.name;
    this.boards = params.boards;
    this.isSelected = params.isSelected ?? false;
  }

  name: string = "";
  boards: IPlanData[] = [];
  isSelected: boolean = false;
}

interface IPlanParam {
  name: string;
  boards: IPlanData[];
  isSelected?: boolean;
}

interface IPlanData {
  name: string;
  tasks: ITask[];
  color?: string | "";
}

interface ITask {
  name: string;
}
