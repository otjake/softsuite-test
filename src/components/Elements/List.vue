<template>
  <div>
    <BreadCrumbs :levels="breadcrumbLevels" />

    <div class="container mt-5 content-section">
      <!-- Elements Heading -->
      <h5 class="fw-bold py-3">Elements</h5>

      <!-- Search and Create Element Section -->
      <div class="d-flex justify-content-between align-items-center" style="background: #F4F6F8; height: 72px">
        <div>
          <div class="input-group  ms-3">
            <input type="text" class="form-control" placeholder="Search for anything" aria-label="Search for anything" aria-describedby="basic-addon2">
            <span class="input-group-text" style="background: #4BAA79;" id="basic-addon2"><img src="../../assets/search.svg" width="15" alt="search logo"/></span>
          </div>
        </div>
        <div class="col-md-4 d-flex justify-content-end me-3">
          <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Create Element +</button>
        </div>
      </div>

      <!-- Table Section -->
      <div class="with-content">
        <div class="table-responsive pb-4">
          <table class="table">
            <thead>
            <tr style="color: white">
              <th  class="fw-light table-headers">Name <img src="../../assets/sort.svg" alt="sort Image"/></th>
              <th  class="fw-light table-headers">Element Category <img src="../../assets/sort.svg" alt="sort Image"/></th>
              <th  class="fw-light table-headers">Element Classification <img src="../../assets/sort.svg" alt="sort Image"/></th>
              <th  class="fw-light table-headers">Status <img src="../../assets/sort.svg" alt="sort Image"/></th>
              <th  class="fw-light table-headers">Date & Time Modified <img src="../../assets/sort.svg" alt="sort Image"/></th>
              <th  class="fw-light table-headers">Modified By <img src="../../assets/sort.svg" alt="sort Image"/></th>
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
                  <img src="../../assets/ellipse.svg" alt="ellipse Image" id="elementEllipse" data-bs-toggle="dropdown"/>
                  <ul class="dropdown-menu" aria-labelledby="elementEllipse">
                    <li><a class="dropdown-item" href="#"><img src="../../assets/view.svg" alt="view Image"/> View Element Links</a></li>
                    <li><a class="dropdown-item" href="#"><img src="../../assets/edit.svg" alt="edit Image"/> Edit Element</a></li>
                    <li><a class="dropdown-item text-danger" href="#"><img src="../../assets/delete.svg" alt="delete Image"/> Delete Element</a></li>
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
          <img src="../../assets/noCon.svg" alt="No content Image" class="rounded-circle"/>
          <span><img src="../../assets/danger.svg" alt="danger Image"/> There are no elements to display</span>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div class="modal fade modal-lg" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Create Element</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Understood</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BreadCrumbs from '../Utilities/BreadCrumbs.vue'
// Define the breadcrumb levels
const breadcrumbLevels = [
  { label: 'Payroll Management' },
  { label: 'Element Setup' },
  { label: 'Elements', href: '/elements'},
  { label: 'Elements lust', active: true}
];
</script>
<style scoped>
.table-headers {
  background: #2D416F !important;
  color: white !important;
  height: 50px;
  font-size: 15px;
}
</style>
