import React from 'react';
var $ = require('jquery/dist/jquery.js');
require('moment/locale/zh-cn.js');
import moment from 'moment';

//使用moment插件 显示距当前的时间
//引入locale 语言包显示中文

export default class extends React.Component {
    remove(_id) {
/*
        $.ajax({
            url: 'http://localhost:9090/messages/' + _id,
            method: 'DELETE',
            success: function (data) {
                window.location.reload()
            }
        });
*/
        this.props.reduce(_id)
    }

    render() {
        return (
            <li className="list-group-item">{this.props.name}:{this.props.content}
                <button onClick={this.remove.bind(this, this.props._id)} className="pull-right">删除</button>
                <span className="pull-right">{moment(this.props.createAt).fromNow()}</span>
            </li>
        )
    }
}