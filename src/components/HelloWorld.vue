<script setup lang="ts">
import { ref } from 'vue'

// Define props using defineProps
// defineProps<{ msg: string }>()

// Define reactive properties
const count = ref(0)
const isClicked = ref(false)

// Define methods
const handleClick = () => {
  console.log("test");
  isClicked.value = !isClicked.value
  count.value++
}
</script>

<template>
  <div>
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
            <input type="text" class="form-control" placeholder="Search for anything" aria-label="Search for anything" aria-describedby="basic-addon2">
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
          </li>
        </ul>
      </div>
    </div>
  </nav>
    <!-- Sidebar -->
    <div class="d-flex" style="overflow: hidden;background: #F4F6F8;">
      <nav class="d-md-block bg-light sidebar" style="width: 260px; height: 100vh">
        <div class="sidebar-sticky" style="font-size: 14px;">
          <ul class="nav flex-column">
            <li class="nav-item">
              <div class="d-flex align-items-center rounded nav-link nav-row" data-bs-toggle="collapse" href="#collapseExample">
                <img src="../assets/Groupswitch.svg" width="24" alt="home logo" class="rounded p-1" style="background: #2D416F;"/>
                <div class="d-flex flex-column p-1 ms-3" style="color:#2D416F;">
                  <span>Switch Module</span>
                  <span class="fw-bold">Payment Manager</span>
                </div>
                <span class="p-1 ms-3"> <img src="../assets/down-caret.svg" width="24" alt="caret down" class="rounded p-1"/></span>
              </div>
              <ul class="collapse disableds" id="collapseExample" style="list-style-type: none;">
                  <li class="my-3 border-bottom"><a class="dropdown-item" href="#">System Administrator</a></li>
                  <li class="my-3 border-bottom"><a class="dropdown-item" href="#">People Management</a></li>
                  <li class="my-3 border-bottom"><a class="dropdown-item" href="#">Payroll Management</a></li>
                  <li class="my-3 border-bottom"><a class="dropdown-item" href="#">Self Service</a></li>
              </ul>
            </li>

            <li class="nav-item">
              <div class="d-flex align-items-center rounded nav-link nav-row">
                <img src="../assets/Dicon.svg" width="20" alt="home logo"/>
                <div class="p-2 ms-3 disableds">
                  Dashboard
                </div>
              </div>
            </li>

            <li class="nav-item">
              <div class="d-flex align-items-center rounded nav-link nav-row" data-bs-toggle="collapse" href="#payrollActivities">
                <img src="../assets/pRoll.svg" width="20" alt="home logo"/>
                <div class="disableds p-1 ms-3">
                  Payroll Activities
                </div>
                <span> <img src="../assets/down-caret.svg" width="24" alt="caret down" class="rounded p-1 ms-5"/></span>
              </div>
              <ul class="collapse disableds" id="payrollActivities" style="list-style-type: none;">
                <li class="my-3 border-bottom"><a class="dropdown-item" href="#">Payroll Run</a></li>
                <li class="my-3 border-bottom"><a class="dropdown-item" href="#">Payroll Reversal</a></li>
                <li class="my-3 border-bottom"><a class="dropdown-item" href="#">Payroll History</a></li>
                <li class="my-3 border-bottom"><a class="dropdown-item" href="#">Payroll Lock</a></li>
                <li class="my-3 border-bottom"><a class="dropdown-item" href="#">Enable Payslip</a></li>
                <li class="my-3 border-bottom"><a class="dropdown-item" href="#">Payroll Log</a></li>
                <li class="my-3 border-bottom"><a class="dropdown-item" href="#">Payroll Approval</a></li>
              </ul>
            </li>

            <li class="nav-item">
              <div class="d-flex  align-items-center rounded nav-link nav-row">
                <img src="../assets/sStructure.svg" width="20" alt="home logo"/>
                <div class="p-2 ms-3 disableds">
                  Salary Structure
                </div>
              </div>
            </li>

            <li class="nav-item">
              <div :class="{ 'nav-row': true, 'clicked': isClicked }" @click="handleClick" class="d-flex align-items-center rounded nav-link nav-row" data-bs-toggle="collapse" href="#elementSetup">
                <img src="../assets/eSetup.svg" width="20" alt="home logo"/>
                <div class="p-2 ms-3 disableds">
                  Element Setup
                </div>
                <span> <img src="../assets/down-caret.svg" width="24" alt="caret down" class="rounded p-1 ms-5"/></span>
              </div>
              <ul class="collapse disableds" id="elementSetup" style="list-style-type: none;">
                <li class="my-3 border-bottom"><router-link class="dropdown-item" to="/elements">Elements</router-link></li>
                <li class="my-3 border-bottom"><a class="dropdown-item" href="#">balances</a></li>
              </ul>
            </li>

            <li class="nav-item border-bottom mb-3">
              <div class="d-flex  align-items-center rounded nav-link nav-row">
                <img src="../assets/emp.svg" width="20" alt="home logo"/>
                <div class="p-2 ms-3 disableds">
                  Employees
                </div>
              </div>
            </li>

            <li class="nav-item mt-3">
              <div class="d-flex align-items-center rounded nav-link nav-row" data-bs-toggle="collapse" href="#payrollSettings">
                <img src="../assets/eSetup.svg" width="20" alt="home logo"/>
                <div class="p-2 ms-3 disableds">
                  Payroll Settings
                </div>
                <span> <img src="../assets/down-caret.svg" width="24" alt="caret down" class="rounded p-1 ms-5"/></span>
              </div>
              <ul class="collapse disableds" id="payrollSettings" style="list-style-type: none;">
                <li class="my-3 border-bottom"><a class="dropdown-item" href="#">Payroll Options</a></li>
                <li class="my-3 border-bottom"><a class="dropdown-item" href="#">Deduction Account Setup</a></li>
                <li class="my-3 border-bottom"><a class="dropdown-item" href="#">Variation Portal Period</a></li>
                <li class="my-3 border-bottom"><a class="dropdown-item" href="#">Paygroup Setup</a></li>
                <li class="my-3 border-bottom"><a class="dropdown-item" href="#">Tax Setup</a></li>
              </ul>
            </li>

            <li class="nav-item">
              <div class="d-flex  align-items-center rounded nav-link nav-row">
                <img src="../assets/user.svg" width="20" alt="home logo"/>
                <div class="p-2 ms-3 disableds">
                  My Account
                </div>
              </div>
            </li>

            <li class="nav-item">
              <div class="d-flex  align-items-center rounded nav-link nav-row">
                <img src="../assets/logout.svg" width="20" alt="home logo"/>
                <div class="p-2 ms-3 disableds">
                  Logout
                </div>
              </div>
            </li>

          </ul>
        </div>
      </nav>
      <div class="mx-5">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>
.rounded-circle {
  border: 2px solid #fff; /* Adjust color as needed */
  padding: 2px;
}

.nav-row{
  background: #F6F7F9;
  width: auto;
  height: 57px;
  transition: background-color 0.3s; /* Smooth transition */
}

.nav-row:hover {
  background-color: #E1E1E1;
}

.clicked {
  background-color: lightgreen;
}
</style>
