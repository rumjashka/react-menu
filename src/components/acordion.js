import React from "react"
import AccordionItem from "./acordion-item"

class Accordion extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      menuItems: props.menuItems,
      openedItems: [],
    }

    this.handleTabClick = this.handleTabClick.bind(this)
    this.updateOpenedItems = this.updateOpenedItems.bind(this)
  }

  updateOpenedItems(id) {
    return this.state.openedItems.map((opened, index) => {
      if (index === id) {
        opened = !opened
      } else {
        opened = false
      }
      return opened
    })
  }

  handleTabClick(id) {
    this.setState({ openedItems: this.updateOpenedItems(id) })
  }

  render() {
    let items = []

    for (let i = 0; i < this.state.menuItems.length; i++) {
      let item = this.state.menuItems[i]
      let title = Object.keys(item)[0]
      this.state.openedItems.push(false)

      items.push(
        <AccordionItem
          id={i}
          key={i}
          handleclick={this.handleTabClick}
          title={title}
          link={typeof item[title] === "string" ? item[title] : undefined}
          content={Array.isArray(item[title]) ? item[title] : undefined}
          active={this.state.openedItems[i]}
        />
      )
    }

    return (
      <div>
        <div id="accordion">{items}</div>
      </div>
    )
  }
}

export default Accordion
