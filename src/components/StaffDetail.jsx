import React,{Component} from 'react'


export default class StaffDetail extends Component {
    render(){
        return(
            <div className="overLay">
                <h4 style={{'text-align':'center'}}>点击'完成'保存修改,点击'关闭'放弃未保存修改并退出.</h4>
                <hr/>
                <table ref="editTabel">
                    <tbody>
                        <tr>
                            <th>姓名</th>
                            <td><input id='staffEditName' type="text"></input></td>
                        </tr>
                        <tr>
                            <th>年龄</th>
                            <td><input id='staffEditAge' type="text"></input></td>
                        </tr>
                        <tr>
                            <th>性别</th>
                            <td>
                                <select id='staffEditSex'>
                                    <option value="男">男</option>
                                    <option value="女">女</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>身份</th>
                            <td>
                                <select id='staffEditId'>
                                    <option value="主任">主任</option>
                                    <option value="老师">老师</option>
                                    <option value="学生">学生</option>
                                    <option value="实习">实习</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>个人描述</th>
                            <td><textarea id='staffEditDescrip' type="text" ></textarea></td>
                        </tr>
                    </tbody>
                </table>
                <p className='tips'>修改成功</p>
                <p className='tips'>请录入完整的人员信息</p>
                <p  className='tips'>请录入正确的年龄</p>
                <button>完成</button>
                <button>关闭</button>
            </div>
        )
    }
}