import React,{Component} from 'react'

import '../css/style.css'
export default class StaffFooter extends Component {
    render(){
        return(
            <div>
                <h4 style={{'text-align':'center'}}>人员新增</h4>
                <hr/>
                <form className="addForm">
                    <div>
                        <label for="staffAddName" style={{'display': 'block'}}>姓名</label>
                        <input id='staffAddName' type="text" placeholder='Your Name'/>
                    </div>
                    <div>
                        <label for="staffAddAge" style={{'display': 'block'}}>年龄</label>
                        <input id='staffAddAge' type="text" placeholder='Your Age(0-150)'/>
                    </div>
                    <div>
                        <label htmlFor="staffAddSex" style={{'display': 'block'}}>性别</label>
                        <select id="staffAddSex">
                            <option value="男">男</option>
                            <option value="女">女</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="staffAddId" style={{'display': 'block'}}>身份</label>
                        <select id='staffAddId'>
                            <option value='主任'>主任</option>
                            <option value='老师'>老师</option>
                            <option value='学生'>学生</option>
                            <option value='实习'>实习</option>
                        </select>
                    </div>
                    <div>
                        <label for='staffAddDescrip' style={{'display': 'block'}}>个人描述</label>
                        <textarea id='staffAddDescrip' type='text'></textarea>
                    </div>
                    <p className='tips'>提交成功</p>
                    <p className='tips'>请录入完整的人员信息</p>
                    <p className='tips'>请录入正确的年龄</p>
                    <div>
                        <button>提交</button>
                    </div>
                </form>
            </div>
        )
    }
}