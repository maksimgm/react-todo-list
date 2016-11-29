(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Board = require('./components/Board.js');

// Filterable CheatSheet Component
ReactDOM.render(React.createElement(Board, null), document.getElementById('app'));

},{"./components/Board.js":2,"react":"react","react-dom":"react-dom"}],2:[function(require,module,exports){
'use strict';

var Comment = require('./Comment');
var React = require('react');
var ReactDOM = require('react-dom');

var Board = React.createClass({
    displayName: 'Board',


    getInitialState: function getInitialState() {
        return {
            comments: []
        };
    },

    add: function add(text) {
        var arr = this.state.comments;
        arr.push(text);
        this.setState({ comments: arr });
    },

    removeComment: function removeComment(i) {
        var arr = this.state.comments;
        arr.splice(i, 1);
        this.setState({ comments: arr });
    },

    updateComment: function updateComment(newText, i) {
        console.log('updating comment');
        var arr = this.state.comments;
        arr[i] = newText;
        this.setState({ comments: arr });
    },

    eachComment: function eachComment(text, i) {
        return React.createElement(
            Comment,
            { key: i, index: i, updateCommentText: this.updateComment,
                deleteFromBoard: this.removeComment },
            text
        );
    },

    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement('textarea', { ref: 'newText' }),
            React.createElement(
                'button',
                { onClick: this.add.bind(null, 'Default Text'), className: 'button-info create' },
                'Add new'
            ),
            React.createElement(
                'div',
                { className: 'board' },
                this.state.comments.map(this.eachComment)
            )
        );
    }
});

module.exports = Board;

},{"./Comment":3,"react":"react","react-dom":"react-dom"}],3:[function(require,module,exports){
'use strict';

var Board = require('./Board');
var React = require('react');
var ReactDOM = require('react-dom');

var Comment = React.createClass({
    displayName: 'Comment',

    getInitialState: function getInitialState() {
        return { editing: false };
    },

    edit: function edit() {
        this.setState({ editing: true });
    },

    remove: function remove() {
        console.log('removing comment');
        this.props.deleteFromBoard(this.props.index);
    },

    save: function save() {
        this.setState({ editing: false });
        this.props.updateCommentText(this.refs.newText.value, this.props.index);
    },

    renderNormal: function renderNormal() {
        return React.createElement(
            'div',
            { className: 'commentContainer' },
            React.createElement(
                'div',
                { className: 'commentText' },
                this.props.children
            ),
            React.createElement(
                'button',
                { onClick: this.edit, className: 'button-primary' },
                'Edit'
            ),
            React.createElement(
                'button',
                { onClick: this.remove, className: 'button-danger' },
                'Remove'
            )
        );
    },

    renderForm: function renderForm() {
        return React.createElement(
            'div',
            { className: 'commentContainer' },
            React.createElement('textarea', { ref: 'newText', defaultValue: this.props.children }),
            React.createElement(
                'button',
                { onClick: this.save, className: 'button-danger' },
                'Save'
            )
        );
    },

    render: function render() {
        if (this.state.editing) {
            return this.renderForm();
        } else {
            return this.renderNormal();
        }
    }
});

module.exports = Comment;

},{"./Board":2,"react":"react","react-dom":"react-dom"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIiwiYXBwL2NvbXBvbmVudHMvQm9hcmQuanMiLCJhcHAvY29tcG9uZW50cy9Db21tZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNDQSxJQUFJLFFBQVEsUUFBUSxPQUFSLENBQVo7QUFDQSxJQUFJLFdBQVcsUUFBUSxXQUFSLENBQWY7QUFDQSxJQUFJLFFBQVEsUUFBUSx1QkFBUixDQUFaOztBQUVBO0FBQ0EsU0FBUyxNQUFULENBQWlCLG9CQUFDLEtBQUQsT0FBakIsRUFDa0IsU0FBUyxjQUFULENBQXdCLEtBQXhCLENBRGxCOzs7OztBQ05BLElBQUksVUFBVSxRQUFRLFdBQVIsQ0FBZDtBQUNBLElBQUksUUFBUSxRQUFRLE9BQVIsQ0FBWjtBQUNBLElBQUksV0FBVyxRQUFRLFdBQVIsQ0FBZjs7QUFFQSxJQUFJLFFBQVEsTUFBTSxXQUFOLENBQWtCO0FBQUE7OztBQUUxQixxQkFBaUIsMkJBQVU7QUFDdkIsZUFBTztBQUNILHNCQUFVO0FBRFAsU0FBUDtBQUdILEtBTnlCOztBQVExQixTQUFLLGFBQVMsSUFBVCxFQUFjO0FBQ2YsWUFBSSxNQUFNLEtBQUssS0FBTCxDQUFXLFFBQXJCO0FBQ0EsWUFBSSxJQUFKLENBQVMsSUFBVDtBQUNBLGFBQUssUUFBTCxDQUFjLEVBQUMsVUFBVSxHQUFYLEVBQWQ7QUFDSCxLQVp5Qjs7QUFjMUIsbUJBQWUsdUJBQVMsQ0FBVCxFQUFXO0FBQ3RCLFlBQUksTUFBTSxLQUFLLEtBQUwsQ0FBVyxRQUFyQjtBQUNBLFlBQUksTUFBSixDQUFXLENBQVgsRUFBYyxDQUFkO0FBQ0EsYUFBSyxRQUFMLENBQWMsRUFBQyxVQUFVLEdBQVgsRUFBZDtBQUNILEtBbEJ5Qjs7QUFvQjFCLG1CQUFlLHVCQUFTLE9BQVQsRUFBa0IsQ0FBbEIsRUFBb0I7QUFDL0IsZ0JBQVEsR0FBUixDQUFZLGtCQUFaO0FBQ0EsWUFBSSxN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Z2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG52YXIgQm9hcmQgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvQm9hcmQuanMnKTtcbiBcbi8vIEZpbHRlcmFibGUgQ2hlYXRTaGVldCBDb21wb25lbnRcblJlYWN0RE9NLnJlbmRlciggPEJvYXJkLz4sXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykgXG4gICAgICAgICAgICAgICAgKTsiLCJ2YXIgQ29tbWVudCA9IHJlcXVpcmUoJy4vQ29tbWVudCcpO1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgQm9hcmQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29tbWVudHM6IFtdXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgYWRkOiBmdW5jdGlvbih0ZXh0KXtcbiAgICAgICAgdmFyIGFyciA9IHRoaXMuc3RhdGUuY29tbWVudHM7XG4gICAgICAgIGFyci5wdXNoKHRleHQpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtjb21tZW50czogYXJyfSk7XG4gICAgfSxcblxuICAgIHJlbW92ZUNvbW1lbnQ6IGZ1bmN0aW9uKGkpe1xuICAgICAgICB2YXIgYXJyID0gdGhpcy5zdGF0ZS5jb21tZW50cztcbiAgICAgICAgYXJyLnNwbGljZShpLCAxKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y29tbWVudHM6IGFycn0pO1xuICAgIH0sXG5cbiAgICB1cGRhdGVDb21tZW50OiBmdW5jdGlvbihuZXdUZXh0LCBpKXtcbiAgICAgICAgY29uc29sZS5sb2coJ3VwZGF0aW5nIGNvbW1lbnQnKTtcbiAgICAgICAgdmFyIGFyciA9IHRoaXMuc3RhdGUuY29tbWVudHM7XG4gICAgICAgIGFycltpXT0gbmV3VGV4dDtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y29tbWVudHM6IGFycn0pO1xuICAgIH0sXG4gICAgXG4gICAgZWFjaENvbW1lbnQ6IGZ1bmN0aW9uKHRleHQsIGkpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8Q29tbWVudCBrZXk9e2l9IGluZGV4PXtpfSB1cGRhdGVDb21tZW50VGV4dD17dGhpcy51cGRhdGVDb21tZW50fSBcbiAgICAgICAgICAgIGRlbGV0ZUZyb21Cb2FyZCA9IHt0aGlzLnJlbW92ZUNvbW1lbnR9ID5cbiAgICAgICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICAgIDwvQ29tbWVudD5cbiAgICAgICAgKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSByZWY9XCJuZXdUZXh0XCIgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFkZC5iaW5kKG51bGwsICdEZWZhdWx0IFRleHQnKX0gY2xhc3NOYW1lPVwiYnV0dG9uLWluZm8gY3JlYXRlXCI+QWRkIG5ldzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9hcmRcIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb21tZW50cy5tYXAodGhpcy5lYWNoQ29tbWVudClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQm9hcmQ7IiwidmFyIEJvYXJkID0gcmVxdWlyZSgnLi9Cb2FyZCcpO1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgQ29tbWVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybntlZGl0aW5nOiBmYWxzZX07XG4gICAgfSxcbiAgICBcbiAgICBlZGl0OiBmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtlZGl0aW5nOiB0cnVlfSk7XG4gICAgfSxcbiAgICBcbiAgICByZW1vdmU6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZW1vdmluZyBjb21tZW50Jyk7XG4gICAgICAgIHRoaXMucHJvcHMuZGVsZXRlRnJvbUJvYXJkKHRoaXMucHJvcHMuaW5kZXgpO1xuICAgIH0sXG4gICAgXG4gICAgc2F2ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZWRpdGluZzogZmFsc2V9KTtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVDb21tZW50VGV4dCh0aGlzLnJlZnMubmV3VGV4dC52YWx1ZSwgdGhpcy5wcm9wcy5pbmRleCk7XG4gICAgfSxcblxuICAgIHJlbmRlck5vcm1hbDogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50Q29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50VGV4dFwiPnt0aGlzLnByb3BzLmNoaWxkcmVufTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuZWRpdH0gY2xhc3NOYW1lPVwiYnV0dG9uLXByaW1hcnlcIj5FZGl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnJlbW92ZX0gY2xhc3NOYW1lPVwiYnV0dG9uLWRhbmdlclwiPlJlbW92ZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfSxcblxuICAgIHJlbmRlckZvcm06IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudENvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSByZWY9XCJuZXdUZXh0XCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLmNoaWxkcmVufT48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zYXZlfSBjbGFzc05hbWU9XCJidXR0b24tZGFuZ2VyXCI+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5lZGl0aW5nKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckZvcm0oKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJOb3JtYWwoKTtcbiAgICAgICAgfVxuICAgIH0sXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb21tZW50OyJdfQ==
