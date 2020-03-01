import React from "react"
import containerStyles from "./container.module.css"
import Accordion from "./acordion"
class Menu extends React.Component {
  menuItems() {
    return [
      { "ALL SOCKS": "https://www.stoxenergy.com/nl/shop/" },
      { DAILY: "https://www.stoxenergy.com/nl/dagelijks/" },
      {
        SPORT: [
          { RUNNING: "https://www.stoxenergy.com/nl/hardloopsokken/" },
          { "TO WALK": "https://www.stoxenergy.com/nl/wandelsokken/" },
          { "TO SKI": "https://www.stoxenergy.com/nl/skisokken/" },
          { HOCKEY: "https://www.stoxenergy.com/nl/hockeysokken/" },
          { FITNESS: "https://www.stoxenergy.com/nl/fitness-sokken/" },
          { TENNIS: "https://www.stoxenergy.com/nl/tennissokken/" },
          {
            CYCLING:
              "https://www.stoxenergy.com/nl/compressiekousen-wielrennen/",
          },
          { FOOTBAL: "https://www.stoxenergy.com/nl/voetbalsokken/" },
          { GOLF: "https://www.stoxenergy.com/nl/golfsokken/" },
          { "OTHER SPORT": "https://www.stoxenergy.com/nl/sportsokken/" },
        ],
      },
      { "TO TRAVEL": "https://www.stoxenergy.com/nl/reissokken/" },
      {
        MEDICAL: [
          { "MEDICAL CONDITIONS": "https://www.stoxenergy.com/nl/medical/" },
          {
            "SWOLLEN FEET":
              "https://www.stoxenergy.com/nl/dikke-voeten-sokken/",
          },
          {
            "SWOLLEN ANKLES":
              "https://www.stoxenergy.com/nl/dikke-enkels-sokken/",
          },
          { "TIRED LEGS": "https://www.stoxenergy.com/nl/vermoeide-benen/" },
          { PREGNANCY: "https://www.stoxenergy.com/nl/zwangerschap-sokken/" },
        ],
      },
    ]
  }
  render() {
    return (
      <div>
        <div className={containerStyles.img_container}>
          <div className={containerStyles.block_container}>
            <a href="https://www.stoxenergy.com/nl/dagelijks/">
              <img
                className={containerStyles.img_item}
                src={"/daily.jpg"}
                alt="Daily"
              />
              <div className={containerStyles.img_text}>Daily</div>
            </a>
          </div>
          <div className={containerStyles.block_container}>
            <a href="https://www.stoxenergy.com/nl/reissokken/">
              <img
                className={containerStyles.img_item}
                src={"/travel.jpg"}
                alt="Travel"
              />
              <div className={containerStyles.img_text}>Travel</div>
            </a>
          </div>
          <div className={containerStyles.block_container}>
            <a href="https://www.stoxenergy.com/nl/sportsokken/">
              <img
                className={containerStyles.img_item}
                src={"/sport.jpg"}
                alt="Sport"
              />
              <div className={containerStyles.img_text}>Sport</div>
            </a>
          </div>
          <div className={containerStyles.block_container}>
            <a href="https://www.stoxenergy.com/nl/medische-sokken/">
              <img
                className={containerStyles.img_item}
                src={"/medical.jpg"}
                alt="Medical"
              />
              <div className={containerStyles.img_text}>Medical</div>
            </a>
          </div>
        </div>

        <Accordion menuItems={this.menuItems()} />
      </div>
    )
  }
}
export default Menu
