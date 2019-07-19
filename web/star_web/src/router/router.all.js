import Layout from '@/components/Layout'
import work from '@/views/home/work'
import top from '@/views/home/top'
import index from '@/views/deviceManagement/index'
import deviceList from '@/views/deviceManagement/deviceList'

export default [{
  path: '/',
  component: Layout,
  meta: {
    label: '首页'
  },
  children: [{
    path: '/work',
    component: work,
    meta: {
      label: '工作台',
      path: '/work'
    }
  }, {
    path: '/top',
    component: top,
    meta: {
      label: '拓扑图',
      path: '/top'
    }
  }]
}, {
  path: '/deviceManagement',
  meta: {
    label: '设备管理'
  },
  children: [{
    path: '/ttu',
    component: index,
    meta: {
      label: 'TTU(网关)',
      path: '/ttu'
    }
  }, {
    path: '/device',
    component: deviceList,
    meta: {
      label: '设备',
      path: '/device'
    }
  }
  ]
}
]
