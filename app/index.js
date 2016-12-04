var USER_DATA = {
    name: 'Kirill Kubryakov',
    username: 'kirillku',
    image: 'https://avatars2.githubusercontent.com/u/3331461?v=3&s=460'
}

var React = require('react');
var ReactDOM = require('react-dom');

var UserImage = React.createClass({
    render: function () {
        return (
            <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
        )
    }
})

var UserLink = React.createClass({
    render: function () {
        return (
            <a href={'https://github.com/' + this.props.username} >
                {this.props.username}
            </a>
        )
    }
})

var UserName = React.createClass({
    render: function () {
        return (
            <p> {this.props.name} </p>
        )
    }
})

var UserInfo = React.createClass({
    render: function () {
        return (
            <div>
                <UserImage imageUrl={this.props.user.image} />
                <UserName name={this.props.user.name} />
                <UserLink username={this.props.user.username} />
            </div>
        )
    }
})

ReactDOM.render(
    <UserInfo user={USER_DATA} />,
    document.getElementById('app')
)
