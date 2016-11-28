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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIiwiYXBwL2NvbXBvbmVudHMvQm9hcmQuanMiLCJhcHAvY29tcG9uZW50cy9Db21tZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNDQSxJQUFJLFFBQVEsUUFBUSxPQUFSLENBQVo7QUFDQSxJQUFJLFdBQVcsUUFBUSxXQUFSLENBQWY7QUFDQSxJQUFJLFFBQVEsUUFBUSx1QkFBUixDQUFaOztBQUVBO0FBQ0EsU0FBUyxNQUFULENBQWlCLG9CQUFDLEtBQUQsT0FBakIsRUFDa0IsU0FBUyxjQUFULENBQXdCLEtBQXhCLENBRGxCOzs7OztBQ05BLElBQUksVUFBVSxRQUFRLFdBQVIsQ0FBZDtBQUNBLElBQUksUUFBUSxRQUFRLE9BQVIsQ0FBWjtBQUNBLElBQUksV0FBVyxRQUFRLFdBQVIsQ0FBZjs7QUFFQSxJQUFJLFFBQVEsTUFBTSxXQUFOLENBQWtCO0FBQUE7OztBQUUxQixxQkFBaUIsMkJBQVU7QUFDdkIsZUFBTztBQUNILHNCQUFVO0FBRFAsU0FBUDtBQUdILEtBTnlCOztBQVExQixTQUFLLGFBQVMsSUFBVCxFQUFjO0FBQ2YsWUFBSSxNQUFNLEtBQUssS0FBTCxDQUFXLFFBQXJCO0FBQ0EsWUFBSSxJQUFKLENBQVMsSUFBVDtBQUNBLGFBQUssUUFBTCxDQUFjLEVBQUMsVUFBVSxHQUFYLEVBQWQ7QUFDSCxLQVp5Qjs7QUFjMUIsbUJBQWUsdUJBQVMsQ0FBVCxFQUFXO0FBQ3RCLFlBQUksTUFBTSxLQUFLLEtBQUwsQ0FBVyxRQUFyQjtBQUNBLFlBQUksTUFBSixDQUFXLENBQVgsRUFBYyxDQUFkO0FBQ0EsYUFBSyxRQUFMLENBQWMsRUFBQyxVQUFVLEdBQVgsRUFBZDtBQUNILEtBbEJ5Qjs7QUFvQjFCLG1CQUFlLHVCQUFTLE9BQVQsRUFBa0IsQ0FBbEIsRUFBb0I7QUFDL0IsZ0JBQVEsR0FBUixDQUFZLGtCQUFaO0FBQ0EsWUFBSSxN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OiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xudmFyIEJvYXJkID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL0JvYXJkLmpzJyk7XG4gXG4vLyBGaWx0ZXJhYmxlIENoZWF0U2hlZXQgQ29tcG9uZW50XG5SZWFjdERPTS5yZW5kZXIoIDxCb2FyZC8+LFxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpIFxuICAgICAgICAgICAgICAgICk7IiwidmFyIENvbW1lbnQgPSByZXF1aXJlKCcuL0NvbW1lbnQnKTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIEJvYXJkID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIFxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbW1lbnRzOiBbXVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGFkZDogZnVuY3Rpb24odGV4dCl7XG4gICAgICAgIHZhciBhcnIgPSB0aGlzLnN0YXRlLmNvbW1lbnRzO1xuICAgICAgICBhcnIucHVzaCh0ZXh0KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y29tbWVudHM6IGFycn0pO1xuICAgIH0sXG5cbiAgICByZW1vdmVDb21tZW50OiBmdW5jdGlvbihpKXtcbiAgICAgICAgdmFyIGFyciA9IHRoaXMuc3RhdGUuY29tbWVudHM7XG4gICAgICAgIGFyci5zcGxpY2UoaSwgMSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2NvbW1lbnRzOiBhcnJ9KTtcbiAgICB9LFxuXG4gICAgdXBkYXRlQ29tbWVudDogZnVuY3Rpb24obmV3VGV4dCwgaSl7XG4gICAgICAgIGNvbnNvbGUubG9nKCd1cGRhdGluZyBjb21tZW50Jyk7XG4gICAgICAgIHZhciBhcnIgPSB0aGlzLnN0YXRlLmNvbW1lbnRzO1xuICAgICAgICBhcnJbaV09IG5ld1RleHQ7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2NvbW1lbnRzOiBhcnJ9KTtcbiAgICB9LFxuICAgIFxuICAgIGVhY2hDb21tZW50OiBmdW5jdGlvbih0ZXh0LCBpKXtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPENvbW1lbnQga2V5PXtpfSBpbmRleD17aX0gdXBkYXRlQ29tbWVudFRleHQ9e3RoaXMudXBkYXRlQ29tbWVudH0gXG4gICAgICAgICAgICBkZWxldGVGcm9tQm9hcmQgPSB7dGhpcy5yZW1vdmVDb21tZW50fSA+XG4gICAgICAgICAgICAgICAge3RleHR9XG4gICAgICAgICAgICA8L0NvbW1lbnQ+XG4gICAgICAgICk7XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuYWRkLmJpbmQobnVsbCwgJ0RlZmF1bHQgVGV4dCcpfSBjbGFzc05hbWU9XCJidXR0b24taW5mbyBjcmVhdGVcIj5BZGQgbmV3PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbW1lbnRzLm1hcCh0aGlzLmVhY2hDb21tZW50KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCb2FyZDsiLCJ2YXIgQm9hcmQgPSByZXF1aXJlKCcuL0JvYXJkJyk7XG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBDb21tZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJue2VkaXRpbmc6IGZhbHNlfTtcbiAgICB9LFxuICAgIFxuICAgIGVkaXQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2VkaXRpbmc6IHRydWV9KTtcbiAgICB9LFxuICAgIFxuICAgIHJlbW92ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlbW92aW5nIGNvbW1lbnQnKTtcbiAgICAgICAgdGhpcy5wcm9wcy5kZWxldGVGcm9tQm9hcmQodGhpcy5wcm9wcy5pbmRleCk7XG4gICAgfSxcbiAgICBcbiAgICBzYXZlOiBmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtlZGl0aW5nOiBmYWxzZX0pO1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZUNvbW1lbnRUZXh0KHRoaXMucmVmcy5uZXdUZXh0LnZhbHVlLCB0aGlzLnByb3BzLmluZGV4KTtcbiAgICB9LFxuXG4gICAgcmVuZGVyTm9ybWFsOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRUZXh0XCI+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmVkaXR9IGNsYXNzTmFtZT1cImJ1dHRvbi1wcmltYXJ5XCI+RWRpdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5yZW1vdmV9IGNsYXNzTmFtZT1cImJ1dHRvbi1kYW5nZXJcIj5SZW1vdmU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0sXG5cbiAgICByZW5kZXJGb3JtOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcmVmPVwibmV3VGV4dFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5jaGlsZHJlbn0+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc2F2ZX0gY2xhc3NOYW1lPVwiYnV0dG9uLWRhbmdlclwiPlNhdmU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKHRoaXMuc3RhdGUuZWRpdGluZyl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJGb3JtKCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyTm9ybWFsKCk7XG4gICAgICAgIH1cbiAgICB9LFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tbWVudDsiXX0=
