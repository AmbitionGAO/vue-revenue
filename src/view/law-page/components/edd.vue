<template>
  <div style="padding: 0.1rem 10px;box-shadow: 0 0.02rem 0.04rem 0 rgba(0,0,0,0.5);" >
    <Button type="primary">汇率新增</Button>
    <hr style="margin-top: 0.1rem;margin-bottom: 0.3rem" />

      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
        <div class="table-one-line">
          <FormItem label="汇率类型" prop="hlType">
            <Select v-model="formValidate.hlType" placeholder="数据字典">
              <Option value="a">a</Option>
              <Option value="b">b</Option>
              <Option value="c">c</Option>
            </Select>
          </FormItem>
          <FormItem label="原币种" prop="ybz">
            <Select v-model="formValidate.ybz" placeholder="数据字典">
              <Option value="a">a</Option>
              <Option value="b">b</Option>
              <Option value="c">c</Option>
            </Select>
          </FormItem>
          <FormItem label="原币种名称" prop="name">
            <Input v-model="formValidate.name" disabled="disabled"  ></Input>
          </FormItem>
          <FormItem label="目标币种" prop="mbBz">
            <Select v-model="formValidate.mbBz" placeholder="数据字典">
              <Option value="a">a</Option>
              <Option value="b">b</Option>
              <Option value="c">c</Option>
            </Select>
          </FormItem>

        </div>
        <div class="table-one-line">
          <FormItem label="目标币种名称" prop="mbzName">
            <Input v-model="formValidate.mbzName" disabled="disabled" ></Input>
          </FormItem>
          <FormItem label="汇率日期" prop="hlDate">
            <Select v-model="formValidate.hlDate" placeholder="数据字典">
              <Option value="a">a</Option>
              <Option value="b">b</Option>
              <Option value="c">c</Option>
            </Select>
          </FormItem>
          <FormItem label="汇率" prop="hl">
            <Input v-model="formValidate.hl" ></Input>
          </FormItem>
          <FormItem label="逆汇率" prop="nhl">
            <Input v-model="formValidate.nhl" disabled="disabled"></Input>
          </FormItem>
        </div>
        <div class="table-one-line">

          <FormItem label="启用" prop="qy">
            <Select v-model="formValidate.qy" placeholder="数据字典">
              <Option value="a">a</Option>
              <Option value="b">b</Option>
              <Option value="c">c</Option>
            </Select>
          </FormItem>
          <FormItem label="说明" prop="intro">
            <Input v-model="formValidate.intro" ></Input>
          </FormItem>
          <FormItem label="来源" prop="source" disabled="disabled">
            <Select v-model="formValidate.source" placeholder="数据字典" disabled="disabled" >
              <Option value="a">a</Option>
              <Option value="b">b</Option>
              <Option value="c">c</Option>
            </Select>
          </FormItem>
          <FormItem label=" " prop=" ">
            <Button type="primary" @click="handleSave('formValidate')">保存</Button>
            <Button type="primary" @click="handleCancle('formValidate')">取消</Button>
          </FormItem>
        </div>
      </Form>



  </div>
</template>

<script>
    export default {
      name: "exchangeAdd",
      data() {
        return {
          formValidate: {
            hlType: '',
            ybz:'',
            ybzM:'',
            name:'',
            mbBz:'',
            mbzName:'',
            hlDate:'',
            hl:'',
            nhu:'',
            qy:'',
            intro:'',
            source:''


          },
          ruleValidate: {
            hlType: [
              { required: true, message: '不能为空',  }
            ],
            ybz:[
              { required: true, message: '不能为空', trigger: 'change' }
            ],
            ybzM:[
              { required: true, message: '不能为空', trigger: 'change' }
            ],
            name:[
              { required: true, message: '不能为空', trigger: 'change' }
            ],
            mbBz:[
              { required: true, message: '不能为空', trigger: 'change' }
            ],
            mbzName:[
              { required: true, message: '不能为空', trigger: 'change' }
            ],
            hlDate:[
              { required: true, message: '不能为空', trigger: 'change' }
            ],
            hl:[
              { required: true, trigger: 'change' }
            ],
            nhl:[
              { required: true, message:'不能为空', trigger: 'change' }
            ],
            qy: [
              { required: true, message: '不能为空', trigger: 'change' }
            ],
            intro: [
              { required: false, trigger: 'change' }
            ],
            source: [
              { required: true, message: '不能为空', trigger: 'change' }
            ],
          }
        }
      },
      methods:{
        handleSave(hlType){
          this.$refs[hlType].validate((valid) => {
            if (valid) {
              this.$Message.success('保存成功!');
            } else {
              this.$Message.error('保存失败!');
            }
          })
        },
        handleSave(ybz){
          this.$refs[ybz].validate((valid) => {
            if (valid) {
              this.$Message.success('保存成功!');
            } else {
              this.$Message.error('保存失败!');
            }
          })
        },
        handleCancle(){

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
    width: 20%;
  }

</style>
