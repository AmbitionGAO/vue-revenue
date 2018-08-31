<template>
  <Row>
    <Col span="5">
      <DatePicker type="date" :options="startTimeOptions" @on-change="startTimeChange" placeholder="开始时间"
                  v-model="starttime"></DatePicker>
    </Col>
    <Col span="5">
      <DatePicker type="date" :options="endTimeOptions" @on-change="endTimeChange" placeholder="结束时间"
                  v-model="endtime"></DatePicker>
    </Col>
  </Row>
</template>

<script>
    export default {
        name: "test",
      data() {
        return {
          startTimeOptions: {}, //开始日期设置
          endTimeOptions: {}, //结束日期设置
          starttime: '2018, 6, 14', //开始日期model
          endtime: '2018, 8, 29',//结束日期model
        }
      },
      methods: {
        startTimeChange: function(e) { //设置开始时间
          this.starttime = e;
          this.endTimeOptions = {
            disabledDate: date => {
              let startTime = this.starttime ? new Date(this.starttime).valueOf() : '';
              return date && (date.valueOf() < startTime);
            }
          }
        },
        endTimeChange: function(e) { //设置结束时间
          this.endtime = e;
          let endTime = this.endtime ? new Date(this.endtime).valueOf() - 1 * 24 * 60 * 60 * 1000 : '';
          this.startTimeOptions = {
            disabledDate(date) {
              return date && date.valueOf() > endTime;
            }
          }
        },
      }
    }
</script>

<style scoped>

</style>
