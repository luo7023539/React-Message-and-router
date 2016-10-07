import React from 'react';
import {Link} from 'react-router'
export default class extends React.Component{
    render(){
        return (
            <div className="row">
                <div className="col-xs-3">
                    <ul className="list-group">
                        <li className="list-group-item"><Link to="/user/add">新增用户</Link></li>
                        <li className="list-group-item"><Link to="/user/list">用户列表</Link></li>
                    </ul>
                </div>
                <div className="col-xs-9">
                    {
                        this.props.children
                    }
                </div>
            </div>
        )
    }
}