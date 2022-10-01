import * as React from "react";
import { BaseComponent } from "core/component/base";
import Login from "app/view/login";
import LoginModel from "app/controller/login.model";
import { ILoginProps } from "app/view/login";

class LoginPage extends BaseComponent({
  style: {},
  model: new LoginModel(),
})<ILoginProps> {
  baseElement = () => <Login model={this.props.model} />;
}

export default LoginPage;
