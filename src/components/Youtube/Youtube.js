import React from 'react';


class Youtube extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      file: null
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }
  onSubmit(e){
    e.preventDefault();
    console.log('submit', this.state.file);

    var invocation = new XMLHttpRequest();
    invocation.open('POST', "https://www.googleapis.com/upload/youtube/v3/videos?part=snippet", true);
    invocation.setRequestHeader('Authorization', 'Bearer ' + this.props.API);
    invocation.send(this.state.file);

  }

  onChange(e){
     const file = e.target.files[0];

     this.setState({
       file: file
     });


  }
  render(){
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="file" name="files[]" onChange={this.onChange} />
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

export default Youtube;
