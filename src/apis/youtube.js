import axios from 'axios'
const KEY='AIzaSyCOVlzEjxWDzwJgSwdYFKt6uPfYpNrkkQQ'
//?create a template to be call on the app component
export default axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  params:{
    part:'snippet',
    type:'video',
    maxResult:5,
    key:KEY
  }
})