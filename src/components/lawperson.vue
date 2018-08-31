<template>
    <div class="frzt">
      <div class="fa-top">
          <i-form :model="formTop" label-position="top" >
            <div class="one-line">
              <Form-item label="标题">
                <i-input :value.sync="formTop.input1" ></i-input>
              </Form-item>
              <Form-item label="标题名称">
                <i-input :value.sync="formTop.input2" ></i-input>
              </Form-item>
              <Form-item label="标题名称对齐">
                <i-input :value.sync="formTop.input3"></i-input>
              </Form-item>
            </div>
            <div class="one-line" >
              <Form-item label="城市" prop="city">
                <i-select :model.sync="formTop.city" placeholder="请选择所在地">
                  <i-option value="beijing">北京市</i-option>
                  <i-option value="shanghai">上海市</i-option>
                  <i-option value="shenzhen">深圳市</i-option>
                </i-select>
              </Form-item>
              <Form-item label="城市" prop="city">
                <i-select :model.sync="formTop.city" placeholder="请选择所在地">
                  <i-option value="beijing">北京市</i-option>
                  <i-option value="shanghai">上海市</i-option>
                  <i-option value="shenzhen">深圳市</i-option>
                </i-select>
              </Form-item>
              <Form-item label="城市" prop="city">
                <i-select :model.sync="formTop.city" placeholder="请选择所在地">
                  <i-option value="beijing">北京市</i-option>
                  <i-option value="shanghai">上海市</i-option>
                  <i-option value="shenzhen">深圳市</i-option>
                </i-select>
              </Form-item>
            </div>
            <div class="one-line">
              <Form-item label="城市" prop="city" >
                <i-select :model.sync="formTop.city" placeholder="请选择所在地">
                  <i-option value="beijing">北京市</i-option>
                  <i-option value="shanghai">上海市</i-option>
                  <i-option value="shenzhen">深圳市</i-option>
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

      </div>
    </div>
</template>

<script>
    export default {
        name: "lawperson",
        data:function () {
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
          }
        },
        methods: {
          handleSubmit() {

          },
          handleReset() {

          }
        }
    }
</script>

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
  }
  .fa-tom{
    height: 754px;
    margin-top: 12px;
    background: #ffffff;
    box-shadow: 0 2px 4px 0;
    border-radius: 4px;
  }
  .fa-top , .fa-tom {
    /*display: flex;*/
  }
  .one-line {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }


</style>
