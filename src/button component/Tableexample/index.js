import React from "react";
import "./table.scss";
import Buttons from "../Button";
import heart from "./heart.svg";
const Table = () => {
  return (
    <div>
      <div className="head">
        Global Component Button Using Pure Html and Css
      </div>
      <div className="table-center">
        <table>
          <tr>
            <th>Type</th>
            <th>Primary Button</th>
            <th>Secondary Button</th>
            <th>Link Button</th>
          </tr>
          <tr>
            <td> Button With No Icon</td>
            <td>
              <div
                style={{
                  width: "100%",
                  heigth: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Buttons
                  {...{
                    btnType: "primary",
                  }}
                >
                  ok
                </Buttons>
              </div>
            </td>
            <td>
              {" "}
              <div
                style={{
                  width: "100%",
                  heigth: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Buttons
                  {...{
                    btnType: "secondary",
                  }}
                >
                  ok
                </Buttons>
              </div>
            </td>
            <td>
              <div
                style={{
                  width: "100%",
                  heigth: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Buttons
                  {...{
                    btnType: "link",
                  }}
                >
                  ok
                </Buttons>
              </div>
            </td>
          </tr>
          <tr>
            <td> Button With Left Icon</td>
            <td>
              {" "}
              <div
                style={{
                  width: "100%",
                  heigth: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Buttons
                  {...{
                    btnType: "primary",
                    leftIcon: <img className="lefticon" src={heart} />,
                  }}
                >
                  ok
                </Buttons>
              </div>
            </td>
            <td>
              <div
                style={{
                  width: "100%",
                  heigth: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Buttons
                  {...{
                    btnType: "secondary",
                    leftIcon: <img className="lefticon" src={heart} />,
                  }}
                >
                  ok
                </Buttons>
              </div>
            </td>
            <td>
              <div
                style={{
                  width: "100%",
                  heigth: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Buttons
                  {...{
                    btnType: "link",
                    leftIcon: <img className="lefticon" src={heart} />,
                  }}
                >
                  ok
                </Buttons>
              </div>
            </td>
          </tr>
          <tr>
            <td> Button With right Icon</td>
            <td>
              {" "}
              <div
                style={{
                  width: "100%",
                  heigth: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Buttons
                  {...{
                    btnType: "primary",
                    rightIcon: <img className="righticon" src={heart} />,
                  }}
                >
                  ok
                </Buttons>
              </div>
            </td>
            <td>
              <div
                style={{
                  width: "100%",
                  heigth: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Buttons
                  {...{
                    btnType: "secondary",
                    rightIcon: <img className="righticon" src={heart} />,
                  }}
                >
                  ok
                </Buttons>
              </div>
            </td>
            <td>
              {" "}
              <div
                style={{
                  width: "100%",
                  heigth: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Buttons
                  {...{
                    btnType: "link",
                    rightIcon: <img className="righticon" src={heart} />,
                  }}
                >
                  ok
                </Buttons>
              </div>
            </td>
          </tr>
          <tr>
            <td>Button With right Icon & left icon</td>
            <td>
              <div
                style={{
                  width: "100%",
                  heigth: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Buttons
                  {...{
                    btnType: "primary",
                    rightIcon: <img className="righticon" src={heart} />,
                    leftIcon: <img className="lefticon" src={heart} />,
                  }}
                >
                  ok
                </Buttons>
              </div>
            </td>
            <td>
              {" "}
              <div
                style={{
                  width: "100%",
                  heigth: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Buttons
                  {...{
                    btnType: "secondary",
                    rightIcon: <img className="righticon" src={heart} />,
                    leftIcon: <img className="lefticon" src={heart} />,
                  }}
                >
                  ok
                </Buttons>
              </div>
            </td>
            <td>
              <div
                style={{
                  width: "100%",
                  heigth: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Buttons
                  {...{
                    btnType: "link",
                    rightIcon: <img className="righticon" src={heart} />,
                    leftIcon: <img className="lefticon" src={heart} />,
                  }}
                >
                  ok
                </Buttons>
              </div>
            </td>
          </tr>
          <tr>
            <td> button with no text</td>
            <td>
              <div
                style={{
                  width: "100%",
                  heigth: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Buttons
                  {...{
                    btnType: "primary",
                    leftIcon: <img src={heart} />,
                  }}
                ></Buttons>
              </div>
            </td>
            <td>
              <div
                style={{
                  width: "100%",
                  heigth: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Buttons
                  {...{
                    btnType: "secondary",
                    leftIcon: <img src={heart} />,
                  }}
                ></Buttons>
              </div>
            </td>
            <td>
              <div
                style={{
                  width: "100%",
                  heigth: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Buttons
                  {...{
                    btnType: "link  ",
                    leftIcon: <img src={heart} />,
                  }}
                ></Buttons>
              </div>
            </td>
          </tr>
          <tr>
            <td>disabled Button With No Icon</td>
            <td>
              <div
                style={{
                  width: "100%",
                  heigth: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Buttons
                  {...{
                    btnType: "primary",
                    // leftIcon: <ImageComponent className="lefticon" src={images.imgupload} />,
                    disabled: true,
                  }}
                >
                  ok
                </Buttons>
              </div>
            </td>
            <td>
              <div
                style={{
                  width: "100%",
                  heigth: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Buttons
                  {...{
                    btnType: "secondary",
                    // leftIcon: <ImageComponent className="lefticon" src={images.imgupload} />,
                    disabled: true,
                  }}
                >
                  ok
                </Buttons>
              </div>
            </td>
          </tr>
          <tr>
            <td> disabled Button With Left Icon</td>
            <td>
              <div
                style={{
                  width: "100%",
                  heigth: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Buttons
                  {...{
                    btnType: "primary",
                    leftIcon: <img className="lefticon" src={heart} />,
                    disabled: true,
                  }}
                >
                  ok
                </Buttons>
              </div>
            </td>
            <td>
              <div
                style={{
                  width: "100%",
                  heigth: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Buttons
                  {...{
                    btnType: "secondary",
                    leftIcon: <img className="lefticon" src={heart} />,
                    disabled: true,
                  }}
                >
                  ok
                </Buttons>
              </div>
            </td>
          </tr>
          <tr>
            <td> disabled Button With right Icon</td>
            <td>
              <div
                style={{
                  width: "100%",
                  heigth: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Buttons
                  {...{
                    btnType: "primary",
                    rightIcon: <img className="righticon" src={heart} />,
                    disabled: true,
                  }}
                >
                  ok
                </Buttons>
              </div>
            </td>
            <td>
              <div
                style={{
                  width: "100%",
                  heigth: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Buttons
                  {...{
                    btnType: "secondary",
                    rightIcon: <img className="righticon" src={heart} />,
                    disabled: true,
                  }}
                >
                  ok
                </Buttons>
              </div>
            </td>
          </tr>
          <tr>
            <td> disabledButton With right Icon & left icon</td>
            <td>
              <div
                style={{
                  width: "100%",
                  heigth: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Buttons
                  {...{
                    btnType: "primary",
                    rightIcon: <img className="righticon" src={heart} />,
                    leftIcon: <img className="lefticon" src={heart} />,
                    disabled: true,
                  }}
                >
                  ok
                </Buttons>
              </div>
            </td>
            <td>
              <div
                style={{
                  width: "100%",
                  heigth: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Buttons
                  {...{
                    btnType: "secondary",
                    rightIcon: <img className="righticon" src={heart} />,
                    leftIcon: <img className="lefticon" src={heart} />,
                    disabled: true,
                  }}
                >
                  ok
                </Buttons>
              </div>
            </td>
          </tr>
          <tr>
            <td> disabled Primary button with no icon</td>
            <td>
              <div
                style={{
                  width: "100%",
                  heigth: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Buttons
                  {...{
                    btnType: "primary",
                    leftIcon: <img src={heart} />,
                    disabled: true,
                  }}
                ></Buttons>
              </div>
            </td>
            <td>
              <div
                style={{
                  width: "100%",
                  heigth: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Buttons
                  {...{
                    btnType: "secondary",
                    leftIcon: <img src={heart} />,
                    disabled: true,
                  }}
                ></Buttons>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Table;
