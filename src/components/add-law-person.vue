<template>
    <div class="add-wrapper">
      <h3>法人主体新增</h3>
      <div style="padding: 50px">
        <Form ref="formValidate" label-position="top" :model="formValidate" :rules="ruleValidate" >
          <div class="one-line-select">
            <FormItem label="来源：" prop="city">
              <Select v-model="formValidate.city" placeholder="Select your city">
                <Option value="beijing">New York</Option>
                <Option value="shanghai">London</Option>
                <Option value="shenzhen">Sydney</Option>
              </Select>
            </FormItem>
            <FormItem label="主数据编码：" prop="mail">
              <Input v-model="formValidate.mail" placeholder="Enter your e-mail"></Input>
            </FormItem>
            <FormItem label="交易方式编码：" >
              <Input v-model="formValidate.wayCode" placeholder="请输入交易方式编码"></Input>
            </FormItem>
          </div>
          <div class="one-line-select">
            <FormItem label="来源：" prop="city">
              <Select v-model="formValidate.city" placeholder="Select your city">
                <Option value="beijing">New York</Option>
                <Option value="shanghai">London</Option>
                <Option value="shenzhen">Sydney</Option>
              </Select>
            </FormItem>
            <FormItem label="主数据编码：" prop="mail">
              <Input v-model="formValidate.mail" placeholder="Enter your e-mail"></Input>
            </FormItem>
            <FormItem label="交易方式编码：" >
              <Input v-model="formValidate.wayCode" placeholder="请输入交易方式编码"></Input>
            </FormItem>
          </div>
          <div class="one-line-select">
            <FormItem label="来源：" prop="city">
              <Select v-model="formValidate.city" placeholder="Select your city">
                <Option value="beijing">New York</Option>
                <Option value="shanghai">London</Option>
                <Option value="shenzhen">Sydney</Option>
              </Select>
            </FormItem>
            <FormItem label="主数据编码：" prop="mail">
              <Input v-model="formValidate.mail" placeholder="Enter your e-mail"></Input>
            </FormItem>
            <FormItem label="交易方式编码：" >
              <Input v-model="formValidate.wayCode" placeholder="请输入交易方式编码"></Input>
            </FormItem>
          </div>
        </Form>


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
          }

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
  }
</style>
