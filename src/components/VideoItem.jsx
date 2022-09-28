import React,{ Component } from "react"
import './VideoItem.css'
// class VideoItem extends Component{

//   render(){
//     return(
//       <div 
//       onClick={()=>this.props.onVideoSelect(this.props.title)}
//       className='item videoItem'>
//         <img  className="thumbnail" src={this.props.image} alt="" />
//         <div className="content">
//           <div className="header">{this.props.title}</div>
//         </div>
//       </div>
//     )
//   }
// }
// export default VideoItem


const VideoItem = ({onVideoSelect, title, image,video}) => {
  const onClicktest=()=>{
    onVideoSelect(video)
  }
  return (
    <div 
      onClick={onClicktest}
      className='item videoItem ui container'>
        <img  className="thumbnail" src={image} alt="" />
        <div className="content titleContainer">
          <div className="header">{title}</div>
        </div>
      </div>
  );
};

export default VideoItem;