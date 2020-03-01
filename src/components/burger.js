import React from "react"
import Menu from "../components/menu"
import containerStyles from "./container.module.css"
class Burger extends React.Component {
  state = { showing: false }
  click(x) {
    this.setState({ showing: !this.state.showing })
  }
  render() {
    let btn_class = this.state.showing
      ? containerStyles.burger_menu + " " + containerStyles.change
      : containerStyles.burger_menu
    return (
      <div>
        <div className="header">
          <button onClick={x => this.click(x)}>
            <div
              className={btn_class}
              style={{ listStyle: `none`, float: `left`, marginRight: `15px` }}
            >
              <div className={containerStyles.burger_line1}></div>
              <div className={containerStyles.burger_line2}></div>
              <div className={containerStyles.burger_line3}></div>
            </div>
          </button>
          <img className="logo" src={"/logo.jpg"} />
        </div>
        {this.state.showing ? <Menu /> : null}
      </div>
    )
  }
}
export default Burger
