<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%" @selection-change="selectItem">
        <el-table-column
      type="selection"
      width="55">
    </el-table-column>
        <el-table-column
      type="index"
      label="#"
      width="55">
        </el-table-column>
        <el-table-column
      type="expand"
      width="55">
        </el-table-column>
      <el-table-column prop="username" label="用户名">
          <template v-slot="{row}">
              <strong>{{row.username}}</strong>
          </template>
      </el-table-column>
      <el-table-column prop="regtime" label="注册时间" v-slot="{row}">
          {{formatDate(row.regtime)}}
      </el-table-column>
      <el-table-column label="操作" v-slot="{row}">
          <el-button type="primary" size="small" @click="editItem(row._id)" v-pomission:edit>编辑</el-button>
          <el-button type="danger" size="small" @click="removeItem(row._id)" v-pomission:delete>删除</el-button>
      </el-table-column>
    </el-table>
    <el-pagination
      :page-size="size"
      layout="total, prev, pager, next,sizes"
      :total="total"
    @current-change="pageChange"
    @size-change="sizeChange"
      >
    </el-pagination>
  </div>
</template>
<script>
export default {
  name: "UserList",
  data(){
      return {
          tableData:[],
        total:0,
        size:20,
        page:1,
      }
  },
  created() {
      console.log('List.created')
      this.getData();
  },
  destroyed(){
      console.log('List.destroyed')
  },
  activated(){
      console.log('List.activated')
  },
  deactivated(){
      console.log('List.deactivated')

  },
  methods: {
    async getData() {
      const {data} = await this.$request.get("/user",{
          params:{
              page:this.page,
              size:this.size
          }
      });
        this.tableData = data.data.result;
        this.total = data.data.total
    },
    formatDate(date){
        return new Date(date).toLocaleDateString();
    },
    removeItem(){

    },
    editItem(id){
        // this.$router.push('/manage/user/edit/'+id)
        this.$router.push({
            name:'UserEdit',
            params:{id}
        })
    },
    selectItem(selection){
        console.log('selection',selection)
    },
    pageChange(pageNum){
        this.page = pageNum;

        this.getData();
    },
    sizeChange(size){
        this.size = size;

        this.getData();
    }
  },
};
</script>