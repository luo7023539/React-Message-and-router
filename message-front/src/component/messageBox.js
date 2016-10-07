
import React from 'react';
import MessageList from './messageList.js'
import MessageForm from './messageForm'
var $ = require('jquery/dist/jquery.js');
//js类库框架可以直接引用模块
//引用css框架需要指定路径
/*
*
*
*
* */

/*
* 添加数据
* 为form绑定提交时间onSubmit处理函数
* 在处理函数中收集姓名和内容,封装成一个对象调用增加消息的接口
* 在调用成功的回调中把保存之后的文档对象添加到messages数组当中
*
* */

export default class MessageBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {messages:[]};
        this.init()
    }
    init(){
        $.ajax({
            url:'http://localhost:9090/messages',
            method:'GET',
            dataType:'json',
            context:this,
            cache:true,
            success:function (data) {
                if(data.length != 0){
                    this.setState({messages:data})
                }
            }
        })
    }
    add(message){
        // console.log(this);
        $.post('http://localhost:9090/messages',message).then((doc)=>{this.state.messages.push(doc);
            this.setState({messages:this.state.messages})
        })
    }
    reduce(_id){
                $.ajax({
                    url:'http://localhost:9090/messages/'+_id,
                    method:'DELETE',
                }).then(()=>{
                    this.state.messages = this.state.messages.filter(function (item) {
                        return item._id !=_id
                    });
                    this.setState({messages:this.state.messages})
                })
    }
    render(){
        return(
            <div className="container">
                 <h3 style={{textAlign:'center'}}>珠峰留言板</h3>
                <div className="row">
                    <div className="col-xs-12">
                        <MessageList messages={this.state.messages} reduce={this.reduce.bind(this)}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <MessageForm add={this.add.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }
}