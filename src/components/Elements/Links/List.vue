<template>
  <div>
    <!-- Search and Create Element Section -->
    <div class="d-flex justify-content-between align-items-center mb-3" style="background: #F4F6F8; height: 72px">
      <div>
        <div class="input-group  ms-3">
          <input type="text" class="form-control" placeholder="Search for anything" aria-label="Search for anything" aria-describedby="basic-addon2">
          <span class="input-group-text" style="background: #4BAA79;" id="basic-addon2"><img src="../../../assets/search.svg" width="15" alt="search logo"/></span>
        </div>
      </div>
      <div class="col-md-4 d-flex justify-content-end me-3">
        <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Create Element Link +</button>
      </div>
    </div>
    <!-- Table Section -->
    <div>
      <div class="with-content">
        <div class="table-responsive pb-4">
          <table class="table">
            <thead>
            <tr style="color: white">
              <th  class="fw-light table-headers">Name <img :src="SortIcon" alt="sort Image"/></th>
              <th  class="fw-light table-headers">Sub-Organisation <img :src="SortIcon" alt="sort Image"/></th>
              <th  class="fw-light table-headers">Department <img :src="SortIcon" alt="sort Image"/></th>
              <th  class="fw-light table-headers">Elementary Category <img :src="SortIcon" alt="sort Image"/></th>
              <th  class="fw-light table-headers">Amount <img :src="SortIcon" alt="sort Image"/></th>
              <th  class="fw-light table-headers">Details <img :src="SortIcon" alt="sort Image"/></th>
              <th  class="fw-light table-headers">Action</th>
            </tr>
            </thead>
            <tbody>
            <!-- Repeat this row for each element in your list -->
            <tr>
              <td>13th Month Allowance</td>
              <td>Deduction</td>
              <td>Pre-Tax Deduction</td>
              <td class="text-success">Active</td>
              <td>14-02-2022 | 09:30 AM</td>
              <td>Samson Ayorinde</td>
              <td>
                <div class="dropdown">
                  <img src="../../../assets/ellipse.svg" alt="ellipse Image" id="elementEllipse" data-bs-toggle="dropdown"/>
                  <ul class="dropdown-menu" aria-labelledby="elementEllipse">
                    <li><span @click="loadDetail(1)" class="dropdown-item"><img src="../../../assets/view.svg" alt="view Image"/> View Details</span></li>
                    <li><a class="dropdown-item" href="#"><img src="../../../assets/edit.svg" alt="edit Image"/> Edit Link</a></li>
                    <li><a class="dropdown-item text-danger" href="#"><img src="../../../assets/delete.svg" alt="delete Image"/> Delete Link</a></li>
                  </ul>
                </div>
              </td>
            </tr>
            <!-- More rows... -->
            </tbody>
          </table>
        </div>

        <!-- Pagination Section -->
        <nav aria-label="Table pagination">
          <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
            <!-- Repeat for each page number -->
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <!-- More page numbers... -->
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>
        </nav>
      </div>
      <div class="noContent d-flex justify-content-center align-items-center">
        <div class="my-4 d-flex flex-column">
          <img src="../../../assets/noCon.svg" alt="No content Image" class="rounded-circle"/>
          <span><img src="../../../assets/danger.svg" alt="danger Image"/> There are no elements to display</span>
        </div>
      </div>
    </div>
    <div class="sidebar" v-if="showSideBar">
      <!-- Sidebar content -->
      <h2>Sidebar</h2>
      <ul class="list-group">
        <li class="list-group-item">Menu Item 1</li>
        <li class="list-group-item">Menu Item 2</li>
        <li class="list-group-item">Menu Item 3</li>
        <li class="list-group-item">Menu Item 4</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import SortIcon from '../../../assets/sort.svg'
import {ref} from "vue";

const showSideBar = ref(false);
const loadDetail = (id : number) => {
  console.log("tests",import.meta.env)
  if(id){
    showSideBar.value = true;
  }
}
</script>
<style scoped>
.table-headers {
  background: #2D416F !important;
  color: white !important;
  height: 50px;
  font-size: 15px;
}
/* Custom styles for sidebar */
.sidebar {
  height: 100%;
  width: 250px;
  position: fixed;
  top: 0;
  right: 0;
  padding-top: 3rem;
  background-color: #f8f9fa;
}
.main-content {
  margin-left: 250px; /* Same width as the sidebar */
  padding: 20px;
}
</style>