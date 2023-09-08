<template>
  <el-scrollbar>
    <el-table
      :data="tableData"
      ref="multipleTableRef"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column prop="date" label="Date" width="140" />
      <el-table-column prop="name" label="Name" width="120" />
      <el-table-column prop="address" label="Address" show-overflow-tooltip />
      <el-table-column prop="address" label="Address" show-overflow-tooltip />
      <el-table-column label="Operations" width="140">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
            Edit
          </el-button>
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { ElTable } from 'element-plus'
import { ref } from 'vue'

interface User {
  date: string
  name: string
  address: string
}
const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref<User[]>([])
const tableData = ref(Array.from({ length: 10 }).fill(item))
const handleEdit = (index: number, row: User) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: User) => {
  console.log(index, row)
}

const handleSelectionChange = (val: User[]) => {
  multipleSelection.value = val
}
</script>
<style  scoped></style>
