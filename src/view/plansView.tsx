import React, { PureComponent, ReactNode } from "react";
import { Plan } from "../model/plansModel";
import { Box, Checkbox, Container, Typography } from "@mui/material";
import PlanController, { IController } from "../controller/planController";
import { getColor } from "../utils/utils";

interface Props {}
interface State {
  plans: Plan[];
}

class PlansView extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  static contextType = PlanController;
  context!: React.ContextType<typeof PlanController>;

  showPlans() {
    return (
      <div className="chooseType">
        {this.context.plans.map((x, y) => {
          return (
            <div
              key={y}
              id="box"
              className={x.isSelected ? "choosed" : "choose"}
              onClick={() => {
                this.context.onClick(y);
              }}
            >
              <Checkbox checked={x.isSelected} />
              <p>{x.name}</p>
            </div>
          );
        })}
      </div>
    );
  }

  showPipelines() {
    let index = this.context.plans.findIndex((x) => x.isSelected);

    if (index === -1) return;

    return (
      <div className="pipeGroup">
        {this.context.plans[index].boards.map((x, y) => {
          let color = getColor(y);

          return (
            <div
              className="line"
              key={y}
              style={{
                backgroundColor: color.main,
              }}
            >
              <p>{x.name.toUpperCase()}</p>
              <div
                className="switch"
                style={{
                  backgroundColor: color.second,
                }}
              >
                <div
                  className="switchSlider"
                  style={{
                    backgroundColor: color.third,
                  }}
                ></div>
              </div>
              <div
                className="lineBox"
                style={{
                  border: `1px solid ${color.third}`,
                }}
              ></div>
              <div className="gradientEnd"></div>
            </div>
          );
        })}
      </div>
    );
  }

  render(): ReactNode {
    return (
      <div className="planBox">
        <Box sx={{ my: 2 }}>
          <p className="headerText">
            Please select the type of sales pipelines that best fits to you
            company
          </p>
        </Box>
        <Box>{this.showPlans()}</Box>
        <Box
          sx={{
            my: 4,
          }}
        >
          {this.showPipelines()}
        </Box>
      </div>
    );
  }
}

export default PlansView;
