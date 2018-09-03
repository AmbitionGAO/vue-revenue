<template>
    <div class="add-wrapper">
      <div style="padding: 68px">
        <Form ref="formValidate" label-position="top" :model="formValidate" :rules="ruleValidate" >
          <div class="one-line-select">
            <FormItem label="来源：" prop="ly">
              <Select v-model="formValidate.ly" placeholder="请选择来源">
                <Option value="beijing">1</Option>
                <Option value="shanghai">2</Option>
                <Option value="shenzhen">3</Option>
              </Select>
            </FormItem>
            <FormItem label="主数据编码：" prop="bm">
              <Input v-model="formValidate.bm" placeholder="请输入你的编码"></Input>
            </FormItem>
            <FormItem label="交易方式编码：" prop="jybm">
              <Input v-model="formValidate.jybm" placeholder="请输入交易方式编码"></Input>
            </FormItem>
          </div>
          <div class="one-line-select">
            <FormItem label="财务系统编码：" prop="city">
              <Input v-model="formValidate.city" placeholder="请输入财务系统编码"></Input>
            </FormItem>
            <FormItem label="公司简称" prop="name">
              <Input v-model="formValidate.name" placeholder="公司简称"></Input>
            </FormItem>
            <FormItem label="公司全称：" prop="qc" >
              <Input v-model="formValidate.qc" placeholder="请输入公司全称"></Input>
            </FormItem>
          </div>
          <div class="one-line-select">
            <FormItem label="国家：" prop="country">
              <Input v-model="formValidate.country" placeholder="请输入国家"></Input>
            </FormItem>
            <FormItem label="地区" prop="aire">
              <Input v-model="formValidate.aire" placeholder="请输入地区"></Input>
            </FormItem>
            <FormItem label="记账本位币：" prop="mo" >
              <Input v-model="formValidate.mo" placeholder="请输入记账本位币"></Input>
            </FormItem>
          </div>
          <div class="one-line-select">
            <FormItem label="记账本位币说明" prop="info">
              <Input v-model="formValidate.name" placeholder="请输入"></Input>
            </FormItem>

            <FormItem label="启用" prop="ts">
              <Select v-model="formValidate.ts" placeholder="请选择启用状态">
                <Option value="yes">是</Option>
                <Option value="no">否</Option>
              </Select>
            </FormItem>
            <FormItem label="记账本位币说明" prop="info" v-show="isShow" class="dis">
              <Input v-model="formValidate.name" placeholder="请输入"></Input>
            </FormItem>

          </div>
        </Form>

        <div style="text-align: right" class="fot">
          <template>
            <Icon type="ios-alert" />
            <Button type="primary" style="background: #ffffff;color: #000000 ;border: 1px solid #d9d9d9">取消</Button>
            <Button type="primary"  @click="renderFunc">保存</Button>
          </template>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
      name: "add-law-person",
      data () {
        return {
          modal5: false,
          formValidate: {
            name: '',
            mail: '',
            city: '',
            gender: '',
            interest: [],
            date: '',
            time: '',
            desc: '',
            wayCode: '',
          },
          ruleValidate: {
            city: [
              { required: true, message: 'Please select the city', trigger: 'change' }
            ],
            mail: [
              { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
              { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
            ],
          },
          isShow:true

        }
      },
      methods: {
        del () {
          this.modal_loading = true;
          setTimeout(() => {
            this.modal_loading = false;
            this.modal2 = false;
            this.$Message.success('Successfully delete');
          }, 2000);
        },
        renderFunc () {
          this.$Message.info({
            render: h => {
              return h('span', [
                '请选择合同类型 ',
                h('a', 'render'),
                ' function'
              ])
            }
          });
        }
      }
    }
</script>

<style scoped>
  .add-wrapper {
  }
  .title-cont {
    border-bottom:2px solid #3c8cff;
    font-size: 18px;
    vertical-align: baseline;
    padding-bottom:5px;
  }
  .one-line-select {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .one-line-select > .ivu-form-item {
    width: 29%;
    margin-left: 0.58rem;
  }
  .dis{
    display: none;
  }
  .ivu-btn-primary {
    width: 86px;
    height: 34px;
  }
  .ivu-btn-primary span{
    font-size: 16px;
    line-height: 22px;


  }
  .fot{
    margin-top: 1.36rem;
  }
</style>
