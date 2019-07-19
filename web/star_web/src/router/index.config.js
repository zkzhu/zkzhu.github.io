import Err401 from '@/views/common/401'
import Err403 from '@/views/common/403'
import Err404 from '@/views/common/404'
import Err500 from '@/views/common/500'
import index from '@/views/home/index'
import Layout from '@/components/leftRightLayout'

export default [
  {path: '/',
    component: Layout,
    children: [{
      path: '/',
      component: index}]},
    // {path: '/top', component: top},
    // {path: '/ttuGateway', component: ttuGateway},
    // {path: '/ttuDetail', component: ttuDetail},
    // {path: '/deviceList', component: deviceList},
    // {path: '/ttuAuth', component: ttuAuth},
    // {path: '/deviceIdentity', component: deviceIdentity},
    // {path: '/powerModel', component: power},
    // {path: '/realMonitor', component: realMonitor},
    // {path: '/onlineTest', component: onlineTest},
    // {path: '/logService', component: logService},
    // {path: '/equipmentUpgrade', component: equipmentUpgrade},
    // {path: '/remoteConfig', component: remoteConfig},
    // {path: '/role', component: role},
    // {path: '/authorization', component: authorization},
    // {path: '/systemContainer', component: systemContainer},
    // {path: '/businessContainer', component: businessContainer},
    // {path: '/ruleEngine', component: ruleEngine},
    // {path: '/dataEngine', component: dataEngine},
    // {path: '/dataAnalysis', component: dataAnalysis},
    // {path: '/sysDoc', component: sysDoc}]},
  {path: '/Err401', name: 'Err401', component: Err401},
  {path: '/Err403', name: 'Err403', component: Err403},
  {path: '/Err404', name: 'Err404', component: Err404},
  {path: '/Err500', name: 'Err500', component: Err500}]
