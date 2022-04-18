import Navbar from '../ui/Navbar'
import {Calendar,momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import { IEvents } from '../../interfaces/calendarInterfaces'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)
const events:IEvents[] = [{
  title:'cumpleanios del jefe',
  start: moment().toDate(),
  end: moment().add(2,'hours').toDate(),
  bgColor:'#fafafa',
  notes:'comprar pan'
}]

const CalendarScreen = () => {

const eventStyleGetter = (event:IEvents,start:Date,end:Date,isSelected:boolean) => {

    const style = {
      backgroundColor:'#367CF7',
      borderRadius:'0%',
      opacity:'0.8',
      display:'block',
      color:'white'
    }
    return {
      style
    }
}

  return (
    <div className='calendar-screen'>
        <Navbar />
 
        <Calendar
          localizer={localizer}
          events = {events}
          startAccessor={'start'}
          endAccessor={'end'}
          eventPropGetter={eventStyleGetter}
        />

    </div>
  )
}

export default CalendarScreen