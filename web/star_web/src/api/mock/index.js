import Mock from 'mockjs'
import { restUrl } from '@/config'

let menu = [
  {
    id: '1',
    isRoot: true,
    raw: {
      name: '首页',
      value: '/'
    }
  // }, {
  //   id: '2',
  //   isRoot: false,
  //   raw: {
  //     name: '设备管理'
  //   },
  //   children: [{
  //     id: '2-1',
  //     isRoot: false,
  //     raw: {
  //       name: 'TTU(网关)',
  //       value: '/ttuGateway'
  //     }
  //   }, {
  //     id: '2-2',
  //     isRoot: false,
  //     raw: {
  //       name: '设备',
  //       value: '/deviceList'
  //     }
  //   }
  //   ]
  // }, {
  //   id: '3',
  //   isRoot: false,
  //   raw: {
  //     name: '设备发现'
  //   },
  //   children: [{
  //     id: '3-1',
  //     isRoot: false,
  //     raw: {
  //       name: 'TTU(认证)',
  //       value: '/ttuAuth'
  //     }
  //   }, {
  //     id: '3-2',
  //     isRoot: false,
  //     raw: {
  //       name: '设备识别',
  //       value: '/deviceIdentity'
  //     }
  //   }]
  // }, {
  //   id: '4',
  //   isRoot: true,
  //   raw: {
  //     name: '电力物模型',
  //     value: '/powerModel'
  //   }
  // }, {
  //   id: '5',
  //   isRoot: false,
  //   raw: {
  //     name: '监控'
  //   },
  //   children: [{
  //     id: '5-1',
  //     isRoot: false,
  //     raw: {
  //       name: '实时监控',
  //       value: '/realMonitor'
  //     }
  //   }, {
  //     id: '5-2',
  //     isRoot: false,
  //     raw: {
  //       name: '在线调试',
  //       value: '/onlineTest'
  //     }
  //   }, {
  //     id: '5-3',
  //     isRoot: false,
  //     raw: {
  //       name: '日志服务',
  //       value: '/logService'
  //     }
  //   }, {
  //     id: '5-4',
  //     isRoot: false,
  //     raw: {
  //       name: '设备升级',
  //       value: '/equipmentUpgrade'
  //     }
  //   }, {
  //     id: '5-5',
  //     isRoot: false,
  //     raw: {
  //       name: '远程配置',
  //       value: '/remoteConfig'
  //     }
  //   }]
  // }, {
  //   id: '6',
  //   isRoot: false,
  //   raw: {
  //     name: '用户权限'
  //   },
  //   children: [{
  //     id: '6-1',
  //     isRoot: false,
  //     raw: {
  //       name: '角色',
  //       value: '/role'
  //     }
  //   }, {
  //     id: '6-2',
  //     isRoot: false,
  //     raw: {
  //       name: '授权',
  //       value: '/authorization'
  //     }
  //   }]
  // }, {
  //   id: '7',
  //   isRoot: false,
  //   raw: {
  //     name: '容器管理'
  //   },
  //   children: [{
  //     id: '7-1',
  //     isRoot: false,
  //     raw: {
  //       name: '系统容器',
  //       value: '/systemContainer'
  //     }
  //   }, {
  //     id: '7-2',
  //     isRoot: false,
  //     raw: {
  //       name: '业务容器',
  //       value: '/businessContainer'
  //     }
  //   }]
  // }, {
  //   id: '8',
  //   isRoot: true,
  //   raw: {
  //     name: '规则引擎',
  //     value: '/ruleEngine'
  //   }
  // }, {
  //   id: '9',
  //   isRoot: true,
  //   raw: {
  //     name: '数据引擎',
  //     value: '/dataEngine'
  //   }
  // }, {
  //   id: '10',
  //   isRoot: true,
  //   raw: {
  //     name: '数据分析',
  //     value: '/dataAnalysis'
  //   }
  // }, {
  //   id: '11',
  //   isRoot: true,
  //   raw: {
  //     name: '系统文档',
  //     value: '/sysDoc'
  //   }
  }]

let tableData = []

let randomString = len => {
  len = len || 32;
  var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
  var maxPos = $chars.length;
  var pwd = '';
  let isExist = false
  for (let i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  for(let index in tableData){
    if(tableData[index].id == pwd){
      isExist = true
    }else{
      continue
    }
  }
  if(!isExist){
    return pwd
  }else{
    testFunc()
  }
}

const getTableData = option => {
  let param = JSON.parse(option.body), dataList = [], currentPage = param.currentPage, pageSize = param.pageSize
  for(let i = (currentPage - 1) * pageSize; i < currentPage * pageSize; i++){
    if(tableData[i]){
      dataList.push(tableData[i])
    }
  }
  return {
    list: dataList,
    total: tableData.length
  }
}

const newTableData = option => {
  let param = JSON.parse(option.body)
  if(!param.id){
    param.id = randomString(32)
    tableData.unshift(param)
    return {
      status: 'success',
      message: '新增了一条数据'
    }
  }else{
    for(let index in tableData){
      if(tableData[index].id == param.id) {
        tableData.splice(index, 1, param)
        return {
          status: 'success',
          message: '修改数据成功'
        }
      }
    }
  }
}

const deleteTableData = option => {
  let param = JSON.parse(option.body)
  for(let index in tableData){
    if(tableData[index].id == param.id) {
      tableData.splice(index, 1)
      return 'success'
    }
  }
}

Mock.mock(restUrl + '/getMenu', 'post', menu)

Mock.mock(restUrl + '/getTableData', 'post', getTableData)

Mock.mock(restUrl + '/newTableData', 'post', newTableData)

Mock.mock(restUrl + '/deleteTableData', 'post', deleteTableData)
