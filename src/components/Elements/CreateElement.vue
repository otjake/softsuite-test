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
                  <select class="form-select" v-model="formData.classification" @change="getCategory"  :class="{ 'form-control-invalid': formTab1Validated && !formData.classification}" required>
                    <option selected disabled value="">Choose...</option>
                    <option v-for="classification in classifications" :key="classification.id" :value="classification">{{classification.name}}</option>
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
                <v-select multiple :options="options" v-model="selected_payment_months" @change="retrieveValue" @input="retrieveValue"></v-select>
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

<script lang="ts">
import {defineComponent} from "vue";
import Month from "../../types/Month";
import ElementService from "../../services/ElementService";

export default defineComponent({
  name: "CreateElement",
  data() {
    return{
      formTab1Validated : false,
      formTab2Validated : false,
      formTab2: false as boolean,
      formTab1: true,
      options : <Month[]>[
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' }
      ],
      selected_payment_months : [],
      formData : {
        classification: "",
        category: "",
        description: "",
        name: "",
        payrun: {
          id: null,
          name: null
        },
        reportingName: "",
        effective_start_date: "",
        effective_end_date: "",
        process_type: "",
        pay_frequency: "",
        payment_months: [] as string[],
        pro_rate: null,
        action: null,
        status: false
      },
      categories : [],
      classifications : [
        {
          id : '' as number|string,
          name : '' as string
        }
      ],
    }
  },
  async created() {
    await this.fetchLookUps()
  },
  watch:{
    selected_payment_months: function () {
      this.retrieveValue();
    }
  },
  methods: {
    // Define submitForm as a function
    validateFirstForm  () {
      this.formTab1Validated = this.checkForm1Validity();
      if(!this.formTab1Validated){
        this.formTab1 = false;
        this.formTab2 = true;
      }
    },

    backOneStep(){
      this.formTab2 = false;
      this.formTab1 = true;
    },

    fetchLookUps() {
      return ElementService.lookups()
          .then(lookupResponse => {
            const { data: elementsData } = lookupResponse;
            console.log("element data", elementsData)
            let elementClassifications = this.filterLookUpByName(elementsData.data, "Element Classification")
            if(!elementClassifications){
              return Promise.reject("Issue fetching Classification");
            }
            // Use the result of the first request to make another request
            return Promise.all([
              elementsData.data, // First request result
              ElementService.getLookupChildren(elementClassifications.id)
               // Another request using data from the first request
              // Add more asynchronous operations as needed
            ]);
          })
          .then(([lookups, lookupChildren]) => {
            // elementsContent: Result of the first request
            // someDataResponse: Response of the second request

            // Process the data as needed
            console.log('lookups:', lookups);
            console.log('lookupChildren:', lookupChildren);
            this.classifications = lookupChildren.data;
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            // Handle errors as needed
          });
    },

    getCategory(){
        console.log("selected classification", this.formData.classification.name);
    },

    filterLookUpByName(data: { name: string, id: number }[], name: string): { name: string, id: number  } | null {
      const filteredLookUp = data.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));
      return filteredLookUp.length > 0 ? filteredLookUp[0] : null;
    },


    resetData(){
      this.backOneStep()
    },

    submit(){
      // let data = {
      //   "name": this.formData.name,
      //   "description": this.formData.description,
      //   "payRunId": this.formData.payrun.id,
      //   "payRunValueId": this.formData.payrun.name,
      //   "classificationId": number,
      //   "classificationValueId": number,
      //   "categoryId": number,
      //   "categoryValueId": number,
      //   "reportingName": string,
      //   "processingType": string,
      //   "status": string,
      //   "prorate": string,
      //   "effectiveStartDate": string,
      //   "effectiveEndDate": string,
      //   "selectedMonths": [string],
      //   "payFrequency": string,
      // }

      console.log("submitting")
    },

    checkForm1Validity () {
      return !(this.formData.classification && this.formData.name && this.formData.category && this.formData.description && this.formData.payrun && this.formData.reportingName)
    },

    retrieveValue() {
      if (this.selected_payment_months !== null && this.selected_payment_months !== undefined) {
        const extractedValues = this.selected_payment_months.reduce((acc : string[], month: Month) => {
          acc.push(month.value);
          return acc;
        }, [] as string[]);

        this.formData.payment_months = extractedValues;

        console.log("Retrieved", this.formData.payment_months);
      }
    }

  }
})
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