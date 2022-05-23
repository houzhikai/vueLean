export default [
  {
    icon: 'el-icon-s-home',
    url: '/home',
    description: '首页',
    code: 'home'
  },
  {
    icon: 'el-icon-loading',
    description: '按钮',
    code: 'page',
    children: [
      {
        url: '/myCopy',
        description: '复制'
      },
      {
        url: '/orderListPart',
        description: '部分订单'
      }
    ]
  },
  {
    icon: 'el-icon-edit',
    description: '我的服务',
    code: 'system',
    children: [
      {
        url: '/address',
        description: '地址信息'
      },
      {
        url: '/awardList',
        description: '中奖记录'
      }
    ]
  }
]
