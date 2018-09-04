<template>
  <div class="frzt">
    <div class="fa-top">
      <i-form :model="formTop" label-position="top" >
        <div class="one-line">
          <Form-item label="公司简称">
            <i-input :value.sync="formTop.input1" placeholder="请输入公司名称" ></i-input>
          </Form-item>
          <Form-item label="公司全称">
            <i-input :value.sync="formTop.input2" placeholder="请输入公司全称" ></i-input>
          </Form-item>
          <Form-item label="主数据编码">
            <i-input :value.sync="formTop.input3" placeholder="请输入主数据编码"></i-input>
          </Form-item>
        </div>
        <div class="one-line" >
          <Form-item label="交易方编码" prop="city">
            <i-select :model.sync="formTop.city" placeholder="请输入交易方编码">
              <i-option value="beijing">北京市</i-option>
              <i-option value="shanghai">上海市</i-option>
              <i-option value="shenzhen">深圳市</i-option>
            </i-select>
          </Form-item>
          <Form-item label="来源" prop="city">
            <i-select :model.sync="formTop.city" placeholder="请选择来源">
              <i-option value="beijing">北京市</i-option>
              <i-option value="shanghai">上海市</i-option>
              <i-option value="shenzhen">深圳市</i-option>
            </i-select>
          </Form-item>
          <Form-item label="财务系统编码" prop="city">
            <i-select :model.sync="formTop.city" placeholder="请输入财务系统编码">
              <i-option value="beijing">北京市</i-option>
              <i-option value="shanghai">上海市</i-option>
              <i-option value="shenzhen">深圳市</i-option>
            </i-select>
          </Form-item>
        </div>
        <div class="one-line">
          <Form-item label="启用" prop="city" >
            <i-select :model.sync="formTop.city" placeholder="请选择启用状态">
              <i-option value="yes">是</i-option>
              <i-option value="no">否</i-option>

            </i-select>
          </Form-item>
          <div></div>
          <Form-item>
            <i-button type="primary" @click="handleSubmit('formValidate')">查询</i-button>
            <i-button type="primary" @click="handleReset('formValidate')"  style="margin-left: 8px">重置</i-button>
            <Button-group>
              <i-button icon="checkmark-round" type="primary" >收起
              </i-button>
            </Button-group>


          </Form-item>
        </div>

      </i-form>
    </div>
    <div class="fa-tom">
      <div class="tabel-title">
        <span class="base-cont">基本信息</span>
        <Button type="primary" style="font-size: 18px" @click="xzym">
          <template>
            <Icon type="md-add" />
          </template>
          新增 </Button>
      </div>
      <div>
        <template>
          <Table  border :columns="columns2" :data="data3">
          </Table>
        </template>

      </div>
      <div class="page">
        <template>
          <Page :total="100" show-sizer show-elevator class-name="op" @on-change="changepage"/>
        </template>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    name: "lawperson",
    data() {
      return {
        formTop: {
          input1: '',
          input2: '',
          input3: '',
          city: ''
        },
        cityList: [
          {
            value: 'beijing',
            label: '北京市'
          },
          {
            value: 'shanghai',
            label: '上海市'
          },
          {
            value: 'shenzhen',
            label: '深圳市'
          },
          {
            value: 'hangzhou',
            label: '杭州市'
          },
          {
            value: 'nanjing',
            label: '南京市'
          },
          {
            value: 'chongqing',
            label: '重庆市'
          }
        ],
        columns2: [
          {
            title: '操作',
            key: 'name',
            width: 60,
            fixed: 'left',
            //
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.show(params.index)
                    }
                  }
                }, 'View')

            ]);
            }

          },
          {
            title: '主数据编码',
            key: 'age',
            width: 100
          },
          {
            title: '交易方编码',
            key: 'province',
            width: 100
          },
          {
            title: '财务系统编码',
            key: 'city',
            width: 100
          },
          {
            title: '公司简称',
            key: 'address',
            width: 200
          },
          {
            title: '公司全称',
            key: 'zip',
            width: 100
          },
          {
            title: '记账本位币',
            key: 'zip',
            width: 100
          },
          {
            title: '记账本位币说明',
            key: 'zip',
            width: 100
          },
          {
            title: '国家',
            key: 'zip',
            width: 100
          },
          {
            title: '地区',
            key: 'zip',
            width: 100
          },
          {
            title: '启用',
            key: 'zip',
            width: 100
          },
          {
            title: '来源',
            key: 'zip',
            fixed: 'right',
            width: 100
          },
        ],
        data3: [
          {
            name: '1',
            age: 18,
            type: 'html',
            address: 'New York No. 1 Lake Park',
            province: 'America',
            city: 'New York',
            zip: 100000
          },
          {
            name: '2',
            age: 24,
            address: 'Washington, D.C. No. 1 Lake Park',
            province: 'America',
            city: 'Washington, D.C.',
            zip: 100000
          },
          {
            name: '3',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            province: 'Australian',
            city: 'Sydney',
            zip: 100000
          },
          {
            name: '4',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            province: 'Canada',
            city: 'Ottawa',
            zip: 100000
          }
        ]
      }
    },
    methods: {
      handleSubmit() {

      },
      handleReset() {

      },
      show() {
        console.log('test');
      },
      changepage(){
        alert(1)
      },
      xzym(){
        this.$router.push('/add')
      }


    }
  }
</script>
<style>
  .ivu-page-item-active {
    background: #bfbfbf;
    border: none;
    border-color: #bfbfbf;
  }
</style>
<style scoped>
  .frzt{
    width:100%;
    background:#f8f8f8;
  }
  .fa-top{
    width: 100%;
    height: 262px;
    background: #ffffff;
    box-shadow: 0 2px 4px 0;
    border-radius: 4px;
    padding-top: 27px;
  }
  .fa-tom{
    margin-top: 12px;
    background: #ffffff;
    box-shadow: 0 2px 4px 0;
    border-radius: 4px;
    padding:27px 32px;
    font-size: 18px;

  }
  .tabel-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

  }
  .base-cont {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-size: 18px;
    padding-bottom: 5px;
    color: rgba(0,0,0,.85);
    border-bottom: 2px solid #3c8cff;
  }
  .fa-top , .fa-tom {
    /*display: flex;*/
  }
  .one-line {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .page{
    text-align: right;
  }
  .page > .ivu-page .ivu-page-item:hover {
    background: #ffecec;
  }
  .op{
    font-size: 12px;
  }


</style>
