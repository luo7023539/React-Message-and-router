/**
 * Created by apple on 16/10/7.
 */
import React from 'react'
import $ from 'jquery';

export default class extends React.Component{
    handle(event){
        event.preventDefault();
        var name = this.refs.name.value,
            content = this.refs.content.value;
        this.refs.name.value ='';
        this.refs.content.value='';
        var obj = {name,content};
        this.props.add(obj)
    }
    test(){
        console.log(this)
    }
    render(){
        return(
            <form className="form-horizontal" role="form" onSubmit={this.handle.bind(this)}>
                <div className="form-group">
                    <label htmlFor="name" className="col-sm-1 control-label">姓名</label>
                    <div className="col-sm-11">
                        <input ref="name" name="name" className="form-control" id="name" placeholder="姓名"/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="content" className="col-sm-1 control-label">内容</label>
                    <div className="col-sm-11">
                        <input ref="content" name="content" className="form-control" id="content" placeholder="内容"/>
                    </div>
                </div>
                <div className="form-group">
                    <button className="btn btn-default" type="submit" onClick={this.test}>提交</button>
                </div>
            </form>
    )
    }
}


/*
* method="POST" action="http://localhost:9090/messages"
* 取消本身表单提交
* */