
import './App.css';
import SearchBar from './components/SearchBar';
import youtube from './apis/youtube';
import React, { Component } from 'react';
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'
class App extends Component {
  state={videos:[],selectedVideo:null}
  componentDidMount(){
    this.onSubmitForm('top gun')
  }
  onVideoSelect=(obj)=>{
    this.setState({selectedVideo:obj})
  }

  onSubmitForm=async(term)=>{
    //?youtube is the file with axios.create
    //!this must be async
    const response= await youtube.get('/search',{
      params:{
        q:term
      }
    })
    this.setState({
      videos:response.data.items,
      selectedVideo:response.data.items[0]
    })
    
  }
  render() {
   
    return (
      <div className='ui container'>
        <SearchBar onSubmit={this.onSubmitForm}/>
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo}/>
            </div>
            <div className='five wide column'>
              <VideoList onVideoSelect={this.onVideoSelect} data={this.state.videos}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;