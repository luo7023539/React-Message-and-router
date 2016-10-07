/**
 * Created by apple on 16/10/7.
 */
import React from 'react';
import {Link} from 'react-router'
export default class extends React.Component{
    render(){
        return(
            <ul className="list-group">
                <li><Link to="/user/detail/1">张三</Link></li>
                <li><Link to="/user/detail/2">李四</Link></li>
            </ul>
        )
    }
}