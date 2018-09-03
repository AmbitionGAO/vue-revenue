<template>
  <div class="xq">
    <Table border ref="selection" :columns="columns4" :data="data1"></Table>
    <template>
      <Page :total="100" show-sizer show-elevator/>
    </template>
  </div>
</template>

<script>
    export default {
        name: "kpsqcx",
      data () {
        return {
          columns4: [
            {
              type: 'selection',
              width: 60,
              align: 'center'
            },
            {
              title: '操作',
              key: 'czo'
            },
            {
              title: '源数据开票ID',
              key: 'kpd'
            },
            {
              title: '开票公司',
              key: 'kpgs'
            },
            {
              title: '开票申请编号',
              key: 'kpbh'
            },
            {
              title: '合同编号',
              key: 'htbh'
            },
            {
              title: '订单号',
              key: 'ddh'
            },
            {
              title: '项目号',
              key: 'xmh'
            },
            {
              title: '业务线',
              key: 'ywx'
            },
            {
              title: '收入类型',
              key: 'srLx'
            }


          ],
          data1: [
            {
              name: 'John Brown',
              kpd: 18,
              title:123456,
              kpgs: '北京巨量引擎',
              kpbh: '20161003',
              htbh:'CDN2189898989',
              ddh:'CDN2189898989',
              xmh:'SAD988877776',
              ywx:'抖音',
              srLx:'开户费'
            },
            {
              name: 'John Brown',
              kpd: 18,
              title:123456,
              kpgs: '北京巨量引擎',
              kpbh: '20161003',
              htbh:'CDN2189898989',
              ddh:'CDN2189898989',
              xmh:'SAD988877776',
              ywx:'抖音',
              srLx:'开户费'
            },
            {
              name: 'John Brown',
              kpd: 18,
              title:123456,
              kpgs: '北京巨量引擎',
              kpbh: '20161003',
              htbh:'CDN2189898989',
              ddh:'CDN2189898989',
              xmh:'SAD988877776',
              ywx:'抖音',
              srLx:'开户费'
            },
            {
              name: 'John Brown',
              kpd: 18,
              title:123456,
              kpgs: '北京巨量引擎',
              kpbh: '20161003',
              htbh:'CDN2189898989',
              ddh:'CDN2189898989',
              xmh:'SAD988877776',
              ywx:'抖音',
              srLx:'开户费'
            },
          ]
        }
      },
      methods: {
        handleSelectAll (status) {
          this.$refs.selection.selectAll(status);
        }
      }
    }
</script>

<style scoped>
.xq{
  padding: 0.3rem;
}
</style>
