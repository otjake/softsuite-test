<template>
    <div>
      <BreadCrumbs :levels="breadcrumbLevels" />

      <div class="container mt-3 py-3 content-section">

        <h5 class="fw-bold">
          <router-link to="/elements"><img src="../../assets/prev-page.svg" width="20" alt="prev-page logo"/></router-link>
        </h5>
        <h5 class="fw-bold">Element Details</h5>

        <div style="min-width: 1000px" class="mx-2">
         <div class="row">
           <div class="col detail-borders d-flex flex-column p-3">
             <span style="font-size: 11px" class="text-uppercase">Element Name</span>
             <span style="font-size: 14px">13th Month Allowance</span>
           </div>
           <div class="col detail-borders d-flex flex-column p-3">
             <span style="font-size: 11px" class="text-uppercase">Element Classification</span>
             <span style="font-size: 14px">Deduction</span>
           </div>
         </div>
         <div class="row">
           <div class="col detail-borders d-flex flex-column p-3">
             <span style="font-size: 11px" class="text-uppercase">Element Category</span>
             <span style="font-size: 14px">13th Month Allowance</span>
           </div>
           <div class="col detail-borders d-flex flex-column p-3">
             <span style="font-size: 11px" class="text-uppercase">Payrun</span>
             <span style="font-size: 14px">13th Month Allowance</span>
           </div>
         </div>
         <div class="row">
           <div class="col detail-borders d-flex flex-column p-3">
             <span style="font-size: 11px" class="text-uppercase">Description</span>
             <span style="font-size: 14px">13th Month Allowance</span>
           </div>
           <div class="col detail-borders d-flex flex-column p-3">
             <span style="font-size: 11px" class="text-uppercase">Reporting Name</span>
             <span style="font-size: 14px">13th Month Allowance</span>
           </div>
         </div>
         <div class="row">
           <div class="col detail-borders d-flex flex-column p-3">
             <span style="font-size: 11px" class="text-uppercase">Effective Start Date</span>
             <span style="font-size: 14px">13-09-2021</span>
           </div>
           <div class="col detail-borders d-flex flex-column p-3">
             <span style="font-size: 11px" class="text-uppercase">Effective End Date</span>
             <span style="font-size: 14px">13-09-2021</span>
           </div>
         </div>
         <div class="row">
           <div class="col detail-borders d-flex flex-column p-3">
             <span style="font-size: 11px" class="text-uppercase">Processing Type</span>
             <span style="font-size: 14px">Open</span>
           </div>
           <div class="col detail-borders d-flex flex-column p-3">
             <span style="font-size: 11px" class="text-uppercase">Pay Frequency</span>
             <span style="font-size: 14px">Selected Months</span>
           </div>
         </div>
         <div class="row">
           <div class="col detail-borders d-flex flex-column p-3">
             <span style="font-size: 11px" class="text-uppercase">Pay Months</span>
             <span style="font-size: 14px">January, February, March</span>
           </div>
           <div class="col detail-borders d-flex flex-column p-3">
             <span style="font-size: 11px" class="text-uppercase">Prorate</span>
             <span style="font-size: 14px">Yes</span>
           </div>
         </div>
         <div class="row">
           <div class="col detail-borders d-flex flex-column p-3">
             <span style="font-size: 11px" class="text-uppercase">Status</span>
             <span style="font-size: 14px">Active</span>
           </div>
         </div>
        </div>

        <div class="element-links mt-5">
          <list></list>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import BreadCrumbs from '../Utilities/BreadCrumbs.vue'
import List from './Links/List.vue'
const breadcrumbLevels = [
  { label: 'Payroll Management' },
  { label: 'Element Setup' },
  { label: 'Elements', href: '/elements'},
  { label: 'Element Links', active: true}
];
</script>

<style scoped>
.detail-borders{
  border: 1px solid #D4D8E2;
}
</style>