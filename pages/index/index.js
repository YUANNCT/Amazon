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
      if(this.weightIndex == 0){
        if(this.transportIndex == 0){
          this.needCost = e.detail.cost*e.detail.quantity+e.detail.quantity*10*e.detail.fit;
          this.profit = e.detail.price*e.detail.quantity*e.detail.rate - (e.detail.cost*e.detail.quantity+e.detail.quantity*10*e.detail.fit) - e.detail.rate*3.7;
        }
        if(this.transportIndex == 1){
          this.needCost = e.detail.cost*e.detail.quantity+e.detail.quantity*45*e.detail.fit;
          this.profit = e.detail.price*e.detail.quantity*e.detail.rate - (e.detail.cost*e.detail.quantity+e.detail.quantity*45*e.detail.fit) - e.detail.rate*3.7;
        }
        if(this.transportIndex == 2){
          this.needCost = e.detail.cost*e.detail.quantity+e.detail.quantity*55*e.detail.fit;
          this.profit = e.detail.price*e.detail.quantity*e.detail.rate - (e.detail.cost*e.detail.quantity+e.detail.quantity*55*e.detail.fit) - e.detail.rate*3.7;
        }
      }else{
        if(this.transportIndex == 0){
          this.needCost = e.detail.cost*e.detail.quantity+e.detail.quantity*10*((e.detail.long*e.detail.width*e.detail.height)/1000);
          this.profit = e.detail.price*e.detail.quantity*e.detail.rate - e.detail.cost*e.detail.quantity+e.detail.quantity*10*((e.detail.long*e.detail.width*e.detail.height)/1000) - e.detail.rate*3.7;
        }
        if(this.transportIndex == 1){
          this.needCost = e.detail.cost*e.detail.quantity+e.detail.quantity*45*((e.detail.long*e.detail.width*e.detail.height)/6000);
          this.profit = e.detail.price*e.detail.quantity*e.detail.rate - e.detail.cost*e.detail.quantity+e.detail.quantity*45*((e.detail.long*e.detail.width*e.detail.height)/6000) - e.detail.rate*3.7;
        }
        if(this.transportIndex == 2){
          this.needCost = e.detail.cost*e.detail.quantity+e.detail.quantity*55*((e.detail.long*e.detail.width*e.detail.height)/5000);
          this.profit = e.detail.price*e.detail.quantity*e.detail.rate - e.detail.cost*e.detail.quantity+e.detail.quantity*55*((e.detail.long*e.detail.width*e.detail.height)/5000) - e.detail.rate*3.7;
        }
      }
      this.setData({
        showOneButtonDialog: true
      });
      console.log('needCost', needCost);
    },
    tapDialogButton(e) {
      this.setData({
          showOneButtonDialog: false
      })
  },
  }
});
