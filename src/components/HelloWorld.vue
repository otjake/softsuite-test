<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#"><img src="../assets/logo.svg" class="logo vue" alt="logo" /></a>
    <div class="d-flex justify-content-between align-items-center ms-5 w-100">
      <div class="d-flex justify-content-between align-items-center">
        <div style="background: #F6F7F9;width: auto; height: 57px" class="d-flex justify-content-between align-items-center rounded p-2" >
          <img src="../assets/Hom.svg" width="15" alt="home logo"/>
          <div class="d-flex flex-column p-2" style="font-size: 14px">
            <span>Change Organisation</span>
            <span class="fw-bold">PaperSoft Limited</span>
          </div>
        </div>
        <div class="ms-5">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
            <span class="input-group-text" style="background: #4BAA79;" id="basic-addon2"><img src="../assets/search.svg" width="15" alt="search logo"/></span>
          </div>
        </div>
      </div>
      <div>
        <ul class="navbar-nav">
          <li class="nav-item dropdown" style="float: right">
            <div style="width: auto; height: 57px" class="d-flex justify-content-between align-items-center rounded p-2" >
              <img src="https://avatar-management&#45;&#45;avatars.us-west-2.prod.public.atl-paas.net/603d15bcee117700704a93b3/7008a304-83b9-48cf-907b-b4a26512a1c7/48" alt="Profile Image" class="rounded-circle" width="30"/>
              <div class="d-flex flex-column p-2" style="font-size: 14px">
                <span class="fw-medium">Henry Okoro</span>
                <span class="fw-light">Payroll Manager</span>
              </div>
            </div>
<!--            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownProfileLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">-->
<!--              <img src="https://avatar-management&#45;&#45;avatars.us-west-2.prod.public.atl-paas.net/603d15bcee117700704a93b3/7008a304-83b9-48cf-907b-b4a26512a1c7/48" alt="Profile Image" class="rounded-circle" width="30"> Henry Okoro-->
<!--            </a>-->
<!--            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownProfileLink">-->
<!--              <a class="dropdown-item" href="#">Profile</a>-->
<!--              <a class="dropdown-item" href="#">Settings</a>-->
<!--              <div class="dropdown-divider"></div>-->
<!--              <a class="dropdown-item" href="#">Logout</a>-->
<!--            </div>-->
          </li>
        </ul>
      </div>
<!--      <ul class="navbar-nav">-->
<!--        tess-->
<!--      </ul>-->
<!--      <form class="form-inline">-->
<!--        <input class="form-control mr-sm-2" type="search" placeholder="Search for anything..." aria-label="Search">-->
<!--        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>-->
<!--      </form>-->
<!--      <ul class="navbar-nav">-->
<!--        <li class="nav-item dropdown" style="float: right">-->
<!--          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownProfileLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">-->
<!--            <img src="https://avatar-management&#45;&#45;avatars.us-west-2.prod.public.atl-paas.net/603d15bcee117700704a93b3/7008a304-83b9-48cf-907b-b4a26512a1c7/48" alt="Profile Image" class="rounded-circle" width="30"> Henry Okoro-->
<!--          </a>-->
<!--          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownProfileLink">-->
<!--            <a class="dropdown-item" href="#">Profile</a>-->
<!--            <a class="dropdown-item" href="#">Settings</a>-->
<!--            <div class="dropdown-divider"></div>-->
<!--            <a class="dropdown-item" href="#">Logout</a>-->
<!--          </div>-->
<!--        </li>-->
<!--      </ul>-->
    </div>
  </nav>
</template>

<style scoped>
/*.read-the-docs {*/
/*  color: #888;*/
/*}*/
/*.navbar {*/
/*  padding: 0.5rem 1rem;*/
/*}*/

/*.navbar-brand {*/
/*  font-weight: bold;*/
/*  font-size: 1.5rem;*/
/*}*/

/*.form-inline .form-control {*/
/*  border-radius: 20px;*/
/*}*/

/*!*.navbar .dropdown-menu {*!*/
/*!*  right: 0;*!*/
/*!*  left: auto;*!*/
/*!*}*!*/

/*.nav-link.dropdown-toggle::after {*/
/*  display: none;*/
/*}*/

.rounded-circle {
  border: 2px solid #fff; /* Adjust color as needed */
  padding: 2px;
}

/* Add more custom styles as needed */

</style>
