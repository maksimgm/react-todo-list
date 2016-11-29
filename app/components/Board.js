var Comment = require('./Comment');
var React = require('react');
var ReactDOM = require('react-dom');

var Board = React.createClass({
    
    getInitialState: function(){
        return {
            comments: []
        }
    },

    add: function(text){
        var arr = this.state.comments;
        arr.push(text);
        this.setState({comments: arr});
    },

    removeComment: function(i){
        var arr = this.state.comments;
        arr.splice(i, 1);
        this.setState({comments: arr});
    },

    updateComment: function(newText, i){
        console.log('updating comment');
        var arr = this.state.comments;
        arr[i]= newText;
        this.setState({comments: arr});
    },
    
    eachComment: function(text, i){
        return(
            <Comment key={i} index={i} updateCommentText={this.updateComment} 
            deleteFromBoard = {this.removeComment} >
                {text}
            </Comment>
        );
    },

    render: function(){
        return(
            <div>
                <textarea ref="newText" ></textarea>
                <button onClick={this.add.bind(null, 'Default Text')} className="button-info create">Add new</button>
                <div className="board">
                    {
                        this.state.comments.map(this.eachComment)
                    }
                </div>
            </div>
        );
    }
});

module.exports = Board;