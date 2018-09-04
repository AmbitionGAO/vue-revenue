<template>
  <div>
  <div style="padding: 30px 50px;box-shadow: 0 2px 4px 0 rgba(0,0,0,0.5);margin-left: 22px" >
      <Form :model="formTop" label-position="top">
        <div class="table-one-line" >
          <FormItem label="会计期间类型" >
            <Input v-model="formTop.input1" placeholder="请输入会计期间类型"></Input>
          </FormItem>
          <FormItem label="期间说明" >
            <Input v-model="formTop.input2" placeholder="请输入期间说明"></Input>
          </FormItem>
            <FormItem label="年度期间树">
              <Select v-model="formTop.select" placeholder="请选择年度期间数">
                <Option value="a">a</Option>
                <Option value="b">b</Option>
                <Option value="c">c</Option>
              </Select>
            </FormItem>
        </div>
        <div class="table-one-line" >
          <FormItem label="期间类型">
            <Select v-model="formTop.select" placeholder="请选择期间类型">
              <Option value="one">1</Option>
              <Option value="two">2</Option>
              <Option value="three">3</Option>
            </Select>
          </FormItem>
          <FormItem label="启用">
            <Select v-model="formTop.select" placeholder="选择启用状态">
              <Option value="yes">是</Option>
              <Option value="no">否</Option>
            </Select>
          </FormItem>
          <FormItem label=" " style="text-align: right">
            <Button type="primary">查询</Button>
            <Button style="margin-left: 8px">重置</Button>
          </FormItem>
        </div>
      </Form>

    </div>
  <div class="bis" style="margin-top: 12px" >
      dwqjxjkjkjj
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
          }
        }
      }
    }
</script>

<style scoped>
.table-one-line{
  display: flex;
  justify-content:space-between;
}
.table-one-line > .ivu-form-item  {
  display: inline-block;
  width: 28%;
}
</style>
