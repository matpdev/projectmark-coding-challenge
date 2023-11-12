import React, { PureComponent, ReactNode } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Card, Checkbox } from "@mui/material";
import { Plan } from "./model/plansModel";
import PlansView from "./view/plansView";

interface Props {}
interface State {
  plans: Plan[];
}

class App extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render(): ReactNode {
    return (
      <div className="cardBox">
        <PlansView></PlansView>
      </div>
    );
  }
}

export default App;
