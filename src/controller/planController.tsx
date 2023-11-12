import { Plan } from "../model/plansModel";

import React, {
  Component,
  PropsWithChildren,
  PureComponent,
  ReactNode,
} from "react";

interface Props {
  children: any;
}
export interface IController {
  plans: Plan[];
  onClick: (index: number) => void;
}
interface State {
  plans: Plan[];
}

const PlanController = React.createContext<IController>({
  plans: [],
  onClick: () => {},
});

function PlanProvider({ children }: PropsWithChildren) {
  let [plans, setPlans] = React.useState<Plan[]>([
    new Plan({
      name: "Basic",
      boards: [
        { name: "Lead", tasks: [] },
        { name: "RFP In Progress", tasks: [] },
        { name: "Submitted", tasks: [] },
        { name: "won", tasks: [] },
        { name: "lost", tasks: [] },
        { name: "CLOSED", tasks: [] },
      ],
      isSelected: true,
    }),
    new Plan({
      name: "Advanced",
      boards: [
        { name: "RFP In Progress", tasks: [] },
        { name: "Submitted", tasks: [] },
        { name: "won", tasks: [] },
        { name: "lost", tasks: [] },
        { name: "CLOSED", tasks: [] },
      ],
    }),
    new Plan({
      name: "Expert",
      boards: [
        { name: "RFP In Progress", tasks: [] },
        { name: "won", tasks: [] },
        { name: "lost", tasks: [] },
        { name: "CLOSED", tasks: [] },
      ],
    }),
    new Plan({
      name: "Custom",
      boards: [
        { name: "RFP In Progress", tasks: [] },
        { name: "Submitted", tasks: [] },
        { name: "won", tasks: [] },
        { name: "CLOSED", tasks: [] },
      ],
    }),
  ]);

  function onClick(index: number) {
    let planCopy = plans;
    for (let i = 0; i < planCopy.length; i++) {
      planCopy[i].isSelected = false;
    }
    planCopy[index].isSelected = true;
    setPlans([...planCopy]);
  }

  return (
    <PlanController.Provider
      value={{
        plans,
        onClick,
      }}
    >
      {children}
    </PlanController.Provider>
  );
}

export default PlanController;
export { PlanProvider };
