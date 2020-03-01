import React from "react"
import containerStyles from "./container.module.css"

class AccordionItem extends React.Component {
  render() {
    const items = []
    if (this.props.content !== undefined) {
      for (const [index, value] of this.props.content.entries()) {
        let subItemTitle = Object.keys(value)[0]
        let subItemLink = Object.values(value)
        items.push(
          <a href={subItemLink}>
            <li key={index}>{subItemTitle}</li>
          </a>
        )
      }
    }
    return (
      <div className="tab">
        <div
          className="tab_style"
          onClick={() => {
            if (this.props.id !== undefined) {
              this.props.handleclick(this.props.id)
            }
          }}
        >
          <a href={this.props.link}>
            <span>{this.props.title}</span>
          </a>
          {this.props.content && (
            <i
              className={
                this.props.active ? "fa fa-chevron-up" : "fa fa-chevron-down"
              }
            ></i>
          )}
        </div>
        {this.props.content && (
          <div className={this.props.active ? "show" : "hide"}>
            <ul className={containerStyles.menu} style={{ listStyle: `none` }}>
              {items}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default AccordionItem
