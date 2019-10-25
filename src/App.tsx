import React from "react";
import {
  PrimaryButton,
  ComboBox,
  DatePicker,
  ColorPicker,
  ChoiceGroup,
  Checkbox
} from "office-ui-fabric-react";

export class App extends React.Component {
  public render() {
    return (
      <>
        <Checkbox></Checkbox>
        <ChoiceGroup></ChoiceGroup>
        <ColorPicker color={"green"}></ColorPicker>
        <ComboBox></ComboBox>
        <DatePicker></DatePicker>
        <ComboBox></ComboBox>
        <PrimaryButton></PrimaryButton>
      </>
    );
  }
}
