import React,{Component} from 'react'

import '../css/style.css'
import StaffItem from './StaffItem'
export default class StaffItemPanel extends Component {
    render(){
        let items=[];
        if (this.props.items.length==0){
            items.push(<tr><th colSpan="5" className="tempEmpty">暂无用户</th></tr>)
        }else{
            this.props.items.forEach(item=>{
                items.push(<StaffItem key={item.key} item={item}/>)
            })
        }
        return(
            <table style={{'border':'2px solid green','width':'600px'}}>
                <thead>
                    <th className='itemTd'>姓名</th>
                    <th className='itemTd'>年龄</th>
                    <th className='itemTd'>身份</th>
                    <th className='itemTd'>性别</th>
                    <th className='itemTd'>操作</th>
                </thead>
                <tbody>
                {items}
                </tbody>
            </table>
        )
    }
}