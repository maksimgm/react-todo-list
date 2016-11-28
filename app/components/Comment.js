var Board = require('./Board');
var React = require('react');
var ReactDOM = require('react-dom');

var Comment = React.createClass({
    getInitialState: function(){
        return{editing: false};
    },
    
    edit: function(){
        this.setState({editing: true});
    },
    
    remove: function(){
        console.log('removing comment');
        this.props.deleteFromBoard(this.props.index);
    },
    
    save: function(){
        this.setState({editing: false});
        this.props.updateCommentText(this.refs.newText.value, this.props.index);
    },

    renderNormal: function(){
        return(
            <div className="commentContainer">
                <div className="commentText">{this.props.children}</div>
                <button onClick={this.edit} className="button-primary">Edit</button>
                <button onClick={this.remove} className="button-danger">Remove</button>
            </div>
        );
    },

    renderForm: function(){
        return(
            <div className="commentContainer">
                <textarea ref="newText" defaultValue={this.props.children}></textarea>
                <button onClick={this.save} className="button-danger">Save</button>
            </div>
        );
    },

    render: function(){
        if(this.state.editing){
            return this.renderForm();
        }else{
            return this.renderNormal();
        }
    },
});

module.exports = Comment;