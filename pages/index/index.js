// index.js
// 获取应用实例
const app = getApp()

Component({
  data: {
    items: [{
        name: 'sea',
        value: '海运',
        checked: 'true'
      },
      {
        name: 'air',
        value: '空运',
      },
      {
        name: 'express',
        value: '快递'
      }
    ],
    transport: ["海运", "空运", "快递"],
    transportIndex: 0,
    weight: ["按重量算", "按体积重算"],
    weightIndex: 0,
    needCost: 0,
    profit: 0,
    showOneButtonDialog: false,
    oneButton: [{text: '确定'}],
    formData: {

    },
    rules: [
    ]
  },
  methods: {
    bindTransportChange: function (e) {
      console.log('picker transport 发生选择改变，携带值为', e.detail.value);
      this.setData({
        transportIndex: e.detail.value
      })
    },
    bindWeightChange: function (e) {
      console.log('picker weight 发生选择改变，携带值为', e.detail.value);
      this.setData({
        weightIndex: e.detail.value
      })
    },
    submit: function(e){
      console.log(e.detail.value);
      console.log(e.detail.value.cost);
      console.log(this.data.weightIndex);
      if(this.data.weightIndex == 0){
        if(this.data.transportIndex == 0){
          this.setData({
            needCost : e.detail.value.cost*e.detail.value.quantity+e.detail.value.quantity*10*e.detail.value.fit,
            profit : e.detail.value.price*e.detail.value.quantity*e.detail.value.rate - (e.detail.value.cost*e.detail.value.quantity+e.detail.value.quantity*10*e.detail.value.fit) - e.detail.value.rate*3.7,
          });
        }
        if(this.data.transportIndex == 1){
          this.setData({
            needCost : e.detail.value.cost*e.detail.value.quantity+e.detail.value.quantity*45*e.detail.value.fit,
            profit : e.detail.value.price*e.detail.value.quantity*e.detail.value.rate - (e.detail.value.cost*e.detail.value.quantity+e.detail.value.quantity*45*e.detail.value.fit) - e.detail.value.rate*3.7,
          });
        }
        if(this.data.transportIndex == 2){
          this.setData({
            needCost : e.detail.value.cost*e.detail.value.quantity+e.detail.value.quantity*55*e.detail.value.fit,
            profit : e.detail.value.price*e.detail.value.quantity*e.detail.value.rate - (e.detail.value.cost*e.detail.value.quantity+e.detail.value.quantity*55*e.detail.value.fit) - e.detail.value.rate*3.7,
          });
        }
      }else{
        if(this.data.transportIndex == 0){
          this.setData({
            needCost : e.detail.value.cost*e.detail.value.quantity+e.detail.value.quantity*10*((e.detail.value.long*e.detail.value.width*e.detail.value.height)/6000),
            profit : e.detail.value.price*e.detail.value.quantity*e.detail.value.rate - e.detail.value.cost*e.detail.value.quantity+e.detail.value.quantity*10*((e.detail.value.long*e.detail.value.width*e.detail.value.height)/6000) - e.detail.value.rate*3.7,
          });
        }
        if(this.data.transportIndex == 1){
          this.setData({
            needCost : e.detail.value.cost*e.detail.value.quantity+e.detail.value.quantity*45*((e.detail.value.long*e.detail.value.width*e.detail.value.height)/6000),
            profit : e.detail.value.price*e.detail.value.quantity*e.detail.value.rate - e.detail.value.cost*e.detail.value.quantity+e.detail.value.quantity*45*((e.detail.value.long*e.detail.value.width*e.detail.value.height)/6000) - e.detail.value.rate*3.7,
          });
        }
        if(this.data.transportIndex == 2){
          this.setData({
            needCost : e.detail.value.cost*e.detail.value.quantity+e.detail.value.quantity*55*((e.detail.value.long*e.detail.value.width*e.detail.value.height)/5000),
            profit : e.detail.value.price*e.detail.value.quantity*e.detail.value.rate - e.detail.value.cost*e.detail.value.quantity+e.detail.value.quantity*55*((e.detail.value.long*e.detail.value.width*e.detail.value.height)/5000) - e.detail.value.rate*3.7,
          });
        }
      }
      this.setData({
        showOneButtonDialog: true
      });
    },
    reset: function(e){
      console.log("数据已经被重置了");
    },
    tapDialogButton(e) {
      this.setData({
          showOneButtonDialog: false
      })
    },
    /**
* 用户点击右上角分享（index.js）
*/
    onShareAppMessage: function (ops) {
      if (ops.from === 'button') {
        // 来自页面内转发按钮
        console.log(ops.target)
      }
      return {
        title: '亚马逊计算器',
        path: 'pages/index/index',  // 路径，传递参数到指定页面。
        success: function (res) {
          // 转发成功
          console.log("转发成功:" + JSON.stringify(res));
        },
        fail: function (res) {
          // 转发失败
          console.log("转发失败:" + JSON.stringify(res));
        }
      }

    }
  }
});
