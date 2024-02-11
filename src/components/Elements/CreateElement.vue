<template>
  <div class="modal fade modal-lg" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Create Element</h5>
          <button type="button" class="btn-close" @click="resetData" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row">
              <div class="col text-end p-0 m-0">
                Element Details
                <div :class="{ 'element-progress-success': formTab2}" class="element-progress mt-4"></div>
                <div class="step-one d-flex align-items-center justify-content-center" :class="{ 'element-progress-success': formTab2}">
                  <span v-if="formTab1">1</span>
                  <span v-else><img src="../../assets/check.svg" alt="check-mark"></span>
                </div>
              </div>
              <div class="col text-center p-0 m-0">
                <div :class="{ 'element-progress-success': formTab2}" style="margin-top: 48px" class="element-progress"></div>
              </div>
              <div class="col text-start p-0 m-0">
                Additional details
                <div class="mt-4 element-progress"></div>
                <div class="step-two d-flex align-items-center justify-content-center">2</div>
              </div>
            </div>
          </div>
          <div class="row">
            <form @submit.prevent="validateFirstForm" class="row g-3" ref="form" v-if="formTab1" novalidate>
              <div class="row">
                <div class="col">
                  <label for="name" class="form-label">First name</label>
                  <input v-model="formData.name" :class="{ 'form-control-invalid': formTab1Validated && !formData.name}" type="text" class="form-control" id="firstName" required>
                  <small class="text-danger" v-if="formTab1Validated && !formData.name">Please provide a name.</small>
                </div>
                <div class="col">
                  <label for="element-classification" class="form-label">Element Classification</label>
                  <select class="form-select" v-model="formData.classification"  :class="{ 'form-control-invalid': formTab1Validated && !formData.classification}" required>
                    <option selected disabled value="">Choose...</option>
                    <option>...</option>
                  </select>
                  <small class="text-danger" v-if="formTab1Validated && !formData.classification">Please select an element classification.</small>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col">
                  <label for="element-category" class="form-label">Element Category</label>
                  <select class="form-select" v-model="formData.category" :class="{ 'form-control-invalid': formTab1Validated && !formData.category}" required>
                    <option selected disabled value="">Select Category</option>
                    <option>...</option>
                  </select>
                  <small class="text-danger" v-if="formTab1Validated && !formData.category">
                    Please select an element category.
                  </small>
                </div>
                <div class="col">
                  <label for="payrun" class="form-label">Payrun</label>
                  <select :class="{ 'form-control-invalid': formTab1Validated && !formData.payrun}" class="form-select" id="validationDefault04" v-model="formData.payrun" required>
                    <option selected disabled value="">Select Payrun</option>
                    <option>...</option>
                  </select>
                  <small class="text-danger" v-if="formTab1Validated && !formData.payrun">
                    Please select an element payrun.
                  </small>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col">
                  <label for="description" class="form-label">Description</label>
                  <textarea v-model="formData.description" :class="{ 'form-control-invalid': formTab1Validated && !formData.description}" class="form-control" placeholder="Input Description" id="floatingTextarea"></textarea>
                  <small class="text-danger" v-if="formTab1Validated && !formData.description">
                    Please input a description.
                  </small>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col">
                  <label for="reportingName" class="form-label">Reporting Name</label>
                  <textarea v-model="formData.reportingName" :class="{ 'form-control-invalid': formTab1Validated && !formData.reportingName}" class="form-control" placeholder="Input Reporting Name" id="floatingTextarea"></textarea>
                  <small class="text-danger form-danger-bg" v-if="formTab1Validated && !formData.reportingName">
                    Please enter reporting name.
                  </small>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col">
                  <button type="button" class="btn btn-outline-success element-buttons" @click="resetData" data-bs-dismiss="modal">Cancel</button>
                </div>
                <div class="col">
                  <button type="submit" class="btn btn-success" style="width: 100%;height:52px">Next</button>
                </div>
              </div>
            </form>
            <form @submit.prevent="submit" class="row g-3" ref="form" v-if="formTab2" novalidate>
              <div class="row">
                <div class="col">
                  <label for="effectiveStartDate" class="form-label">Effective Start Date</label>
                  <input v-model="formData.effective_start_date" :class="{ 'form-control-invalid': formTab2Validated && !formData.effective_start_date}" type="date" class="form-control" id="date" required>
                  <small class="text-danger" v-if="formTab2Validated && !formData.effective_start_date">
                    Please provide an Effective Start Date.
                  </small>
                </div>
                <div class="col">
                  <label for="effectiveEndDate" class="form-label">Effective End Date</label>
                  <input v-model="formData.effective_end_date" :class="{ 'form-control-invalid': formTab2Validated && !formData.effective_end_date}" type="date" class="form-control" id="date" required>
                  <small class="text-danger" v-if="formTab2Validated && !formData.effective_end_date">
                    Please provide an Effective End Date.
                  </small>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col">
                  <label for="processType" class="form-label">Process Type</label>
                  <div class="form-control d-flex align-items-center" style="border: 1px solid #DADADA">
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" v-model="formData.process_type" type="radio" id="inlineCheckbox1" value="open">
                      <label class="form-check-label" for="inlineCheckbox1"> Open </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" v-model="formData.process_type" type="radio" id="inlineCheckbox2" value="closed">
                      <label class="form-check-label" for="inlineCheckbox2"> Closed</label>
                    </div>
                  </div>
                  <small class="text-danger" v-if="formTab2Validated && !formData.process_type">
                    Please provide a process type.
                  </small>
                </div>
                <div class="col">
                  <label for="processType" class="form-label">Pay Frequency</label>
                  <div class="form-control d-flex align-items-center" style="border: 1px solid #DADADA">
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" v-model="formData.pay_frequency" type="radio" id="payFrequency1" value="monthly">
                      <label class="form-check-label" for="inlineCheckbox1"> Monthly </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" v-model="formData.pay_frequency" type="radio" id="payFrequency1" value="selected_month">
                      <label class="form-check-label" for="inlineCheckbox2"> Selected Month </label>
                    </div>
                  </div>
                  <small class="text-danger" v-if="formTab2Validated && !formData.pay_frequency">
                    Please provide a pay frequency.
                  </small>
                </div>
              </div>
              <div class="row mt-3">
                <label for="paymentMonths" class="form-label">Select Payment Months</label>
                <v-select multiple :options="options" v-model="formData.payment_months" :reduce="country => country.value"></v-select>
                <small class="text-danger" v-if="formTab1Validated && !formData.payrun">
                  Please select payment months.
                </small>
              </div>
              <div class="row mt-3">

                <div class="col">
                  <label for="processType" class="form-label">Pro Rate</label>
                  <div class="form-control d-flex align-items-center" style="border: 1px solid #DADADA">
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" v-model="formData.pro_rate" type="radio" id="payFrequency1" value="yes">
                      <label class="form-check-label" for="inlineCheckbox1"> Yes </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" v-model="formData.pro_rate" type="radio" id="payFrequency1" value="no">
                      <label class="form-check-label" for="inlineCheckbox2"> No </label>
                    </div>
                  </div>
                  <small class="text-danger" v-if="formTab2Validated && !formData.pro_rate">
                    Please provide a pro rate option.
                  </small>
                </div>
                <div class="col">
                  <label for="processType" class="form-label">Status</label>
                  <div class="form-control d-flex align-items-center" style="border: 1px solid #DADADA">
                    <div class="form-check form-switch">
                      {{formData.status}}
                      <input class="form-check-input" type="checkbox" v-model="formData.status" id="flexSwitchCheckChecked" checked>
                      <label class="form-check-label" for="flexSwitchCheckChecked">Active</label>
                    </div>
                  </div>
                  <small class="text-danger" v-if="formTab2Validated && !formData.status">
                    Please provide a status.
                  </small>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col">
                  <button type="button" class="btn btn-outline-success element-buttons" @click="backOneStep">Back</button>
                </div>
                <div class="col">
                  <button type="submit" class="btn btn-success" style="width: 100%;height:52px">Create New Element</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {reactive, Ref, ref, UnwrapRef} from "vue";

const formTab1Validated = ref(false);
const formTab2Validated = ref(false);
const formTab1 = ref(true);
const formTab2 = ref(false);
const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' }
];

// Define formData as a plain TypeScript object
const formData = reactive({
  classification: ref(""),
  category: ref(""),
  description: ref(""),
  name: ref(""),
  payrun: ref(""),
  reportingName: ref(""),
  effective_start_date: ref(""),
  effective_end_date: ref(""),
  process_type: ref(""),
  pay_frequency: ref(""),
  payment_months: ref(null),
  pro_rate: ref(null),
  action: ref(null)
});

// Define submitForm as a function
const validateFirstForm = () => {
  console.log("submit", formTab1Validated.value);
  formTab1Validated.value = checkForm1Validity();
  console.log("testing", formTab1Validated.value)
  if(!formTab1Validated.value){
    formTab1.value = false;
    formTab2.value = true;
  }
}

const backOneStep = () => {
  formTab2.value = false;
  formTab1.value = true;
}

const resetData = () => {
  backOneStep()
}

// Define checkForm1Validity as a function
const checkForm1Validity = () => {
  return !(formData.classification && formData.name && formData.category && formData.description && formData.payrun && formData.reportingName)
}

</script>

<style scoped>
.step-one{
  position: relative;
  top: -18px;
  right: -166px;
  width: 40px;
  height: 40px;
  background: white;
  border: 1px solid #4BAA79;
  border-radius: 50%;
}
.step-two{
  position: relative;
  top: -18px;
  right: -46px;
  width: 40px;
  height: 40px;
  background: white;
  border: 1px solid #4BAA79;
  border-radius: 50%;
}
.element-progress{
  width: 100%;
  height: 3px;
  background: #CDCDCD;
}
.element-buttons{
  width: 100%;
  height:52px
}
.form-control, .form-select{
  height: 56px;
}

.form-control-invalid {
  border-color: #dc3545 !important;
}

.form-danger-bg{
  background: #FDF6F6;
}

.element-progress-success{
  background: #4BAA79;
}

.g-3, .gx-3 {
  --bs-gutter-x: -2rem;
}
</style>