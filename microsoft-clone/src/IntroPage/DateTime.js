import React, {Component} from 'react';
import './IntroPage.css';
class DateTime extends Component {
  constructor() {
    super()
    let d = new Date()
      this.state = {
        day: d.getDay(),
        month: d.getMonth(),
        date: d.getDate(),
        time: d.toLocaleTimeString()
      }
    this.countingSecond = this.countingSecond.bind(this)
  }
  countingSecond() {
    let d = new Date()
    this.setState({
      day: d.getDay(),
      month: d.getMonth(),
      date: d.getDate(),
      time: d.toLocaleTimeString()
    })
  }
  componentWillMount() {
    setInterval(this.countingSecond, 1000)
  }
  render() {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep","Oct", "Nov", "Dec"]
    const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
  return (
      <div>
        <h4 className='timeclock_text'>{this.state.time} {days[this.state.day]}, {months[this.state.month]} {this.state.date}  </h4>
      </div>
    )
  }
}
export default DateTime;