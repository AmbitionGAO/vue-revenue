<template>
<div style="padding: 0 0.22rem">
    <div style="padding: 0.1rem 10px;box-shadow: 0 0.02rem 0.04rem 0 rgba(0,0,0,0.5);" >
      <Button type="primary">汇率</Button>
      <hr style="margin-top: 0.1rem;margin-bottom: 0.3rem" />
      <Form :model="formTop" label-position="top">
        <div class="table-one-line" >
          <FormItem label="汇率类型">
            <Select v-model="formTop.select" placeholder="值列表关键字查询">
              <Option value="one">1</Option>
              <Option value="two">2</Option>
              <Option value="three">3</Option>
            </Select>
          </FormItem>
          <FormItem label="原币种">
            <Select v-model="formTop.select" placeholder="日期控件">
              <Option value="day1">1</Option>
              <Option value="day2">2</Option>
            </Select>
          </FormItem>

          <FormItem label="目标币种">
            <Select v-model="formTop.select" placeholder="日期控件">
              <Option value="a">a</Option>
              <Option value="b">b</Option>
              <Option value="c">c</Option>
            </Select>
          </FormItem>
        </div>
        <div class="table-one-line" >
          <FormItem label="启用">
            <Select v-model="formTop.select" placeholder="数据字典">
              <Option value="a">a-1</Option>
              <Option value="b">b-1</Option>
              <Option value="c">c-2</Option>
            </Select>
          </FormItem>

          <FormItem label=" " style="text-align: right">
            <Button type="primary">重置</Button>
            <Button type="primary">查询</Button>
          </FormItem>
        </div>
      </Form>
    </div>
  <div style="margin-top:0.12rem;box-shadow: 0 2px 4px 0 rgba(0,0,0,0.5);">

    <div class="hl" style="border-bottom: 1px solid #000000">
      <Button type="primary">汇率</Button>
      <span @click="add">新增<Icon type="md-add" color="green"/></span>
      <span @click="led">导入</span>
      <span>导出</span>
      <span>手工异步</span>
    </div>
    <div class="fulal" >
      <div>
        <Table ref="selection" :columns="columns4" :data="data1"></Table>
        <div style="line-height:0.54rem">
          <Icon type="ios-arrow-back" color="#f8f8f9" size="30px"/><Icon type="ios-arrow-back" />&nbsp;&nbsp; &nbsp; &nbsp;<Icon type="ios-arrow-back" />
            第<span style="margin: 0.1rem">0</span>页，共<span style="margin: 0.1rem">0</span>页
          <Icon type="ios-arrow-forward" />&nbsp;&nbsp; &nbsp; &nbsp;<Icon type="ios-arrow-forward" /><Icon type="ios-arrow-forward" />
          <Icon type="ios-refresh" />每页显示条数：&nbsp;&nbsp; &nbsp; &nbsp;重置
        </div>
      </div>

    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: "business-period",
    data () {
      return {
        formTop: {
          input1: '',
          input2: '',
          input3: '',
          select:''
        },
        columns4: [
          {
            type: 'selection',
            align: 'center',
          },
          {
            title: '操作',
            key: 'caoZuo',
            render: (h, params) => {
              return h('div', [

                h('a', {
                  on: {
                    click: () => {
                      this.$router.push('./edit')
                    }
                  }
                }, '编辑')
              ]);
            }
          },
          {
            title: '汇率类型',
            key: 'hType'
          },
          {
            title: '原币种',
            key: 'ybz'
          },
          {
            title: '原币种名称',
            key: 'ybzMc'
          },
          {
            title: '目标币种',
            key: 'mbBz'
          },
          {
            title: '目标币种名称',
            key: 'mbzMc'
          },
          {
            title: '汇率日期',
            key: 'hlRq'
          },
          {
            title: '汇率',
            key: 'hl'
          },
          {
            title: '逆汇率',
            key: 'nhl'
          },
          {
            title: '启用',
            key: 'qy'
          },
          {
            title: '说明',
            key: 'intro'
          },
          {
            title: '来源',
            key: 'source'
          }

        ],
        data1: [
          {
            // caoZuo:'编辑',
            hType:'CORPORATE RATE',
            ybz:'CNY',
            ybzMc:'人民币',
            mbBz:'USD',
            mbzMc:'美元',
            hlRq:'2018-01-01',
            hl:'6.5',
            nhl:'0.798898',
          },
          {
            // caoZuo:'编辑',
            hType:'CORPORATE RATE',
            ybz:'CNY',
            ybzMc:'人民币',
            mbBz:'USD',
            mbzMc:'美元',
            hlRq:'2018-01-01',
            hl:'6.5',
            nhl:'0.798898',
          },
          {
            // caoZuo:'编辑',
            hType:'CORPORATE RATE',
            ybz:'CNY',
            ybzMc:'人民币',
            mbBz:'USD',
            mbzMc:'美元',
            hlRq:'2018-01-01',
            hl:'6.5',
            nhl:'0.798898',
          },
          {
            // caoZuo:'编辑',
            hType:'CORPORATE RATE',
            ybz:'CNY',
            ybzMc:'人民币',
            mbBz:'USD',
            mbzMc:'美元',
            hlRq:'2018-01-01',
            hl:'6.5',
            nhl:'0.798898',
          },
          {
            // caoZuo:'编辑',
            hType:'CORPORATE RATE',
            ybz:'CNY',
            ybzMc:'人民币',
            mbBz:'USD',
            mbzMc:'美元',
            hlRq:'2018-01-01',
            hl:'6.5',
            nhl:'0.798898',
          },
        ]
      }
    },
    methods:{
      add(){
        this.$router.push('./edd')
      },
      led(){
        //弹框

      },
      gotoAddress (path) {
        this.$router.push(path)
      }
    }
  }
</script>
<style>

</style>
<style scoped>
  .table-one-line{
    display: flex;
    justify-content:space-between;
  }
  .table-one-line > .ivu-form-item  {
    display: inline-block;
    width: 28%;
  }
  .hl span{
    font-weight: bolder;
    margin-left: 0.2rem;
    cursor: pointer;
  }
  .table table{
  table-layout: auto;
    /*width: 100% !important;*/
  }

</style>
