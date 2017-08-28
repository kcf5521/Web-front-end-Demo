import React, { Component } from 'react';


class CommentInput extends Component {
    // static propTypes={
    //     onSubmit:propTypes.func
    // }
    constructor() {
        super()
        this.state = {
            username: '',
            content: ''
        }
    }
    //组件预挂载，加载用户名
    componentWillMount(){
        this._loadUsername()
    }
    _loadUsername(){
        const username=localStorage.getItem('username')
        if(username){
            this.setState({username})
        }
    }
    //组件挂载完成后自动聚焦
    componentDidMount() {
        this.textarea.focus()
    }
    //用户名输入框失去焦点时保存用户名
    handleUsernameBlur(e) {
        this._saveUsername(e.target.value)
    }

    _saveUsername(username){
        localStorage.setItem('username',username)
    }

    handleUsernameChange(e) {
        this.setState({
            username: e.target.value
        })


    }
    handleContentChange(e) {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit() {
        if (this.props.onSubmit) {
            this.props.onSubmit({
                username:this.state.username,
                content:this.state.content,
                createdTime:+new Date()
            })
        }
        this.setState({ content: '' })
    }
    render() {
        return (
            <div className="comment-input">
                <div className="comment-field">
                    <span className="comment-field-name">用户名：</span>
                    <div className="comment-field-input">
                        <input value={this.state.username}
                            onBlur={this.handleUsernameBlur.bind(this)}
                            onChange={this.handleUsernameChange.bind(this)} />
                    </div>
                </div>
                <div className="comment-field">
                    <span className="comment-field-name">评论内容：</span>
                    <div className="comment-field-input">
                        <textarea ref={(textarea) => this.textarea = textarea}
                            value={this.state.content}
                            onChange={this.handleContentChange.bind(this)} />
                    </div>
                </div>
                <div className="comment-field-button">
                    <button
                        onClick={this.handleSubmit.bind(this)}>
                        发布
                    </button>
                </div>
            </div>

        );
    }
}

export default CommentInput
