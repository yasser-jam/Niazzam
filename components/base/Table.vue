<template>
  <div class="card shadow-md bg-white rounded-md relative">
    <div class="card-body px-4">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>
  
        <tbody>
          <!-- row 1 -->
          <tr>
            <td>
              <div class="flex items-center gap-3">
                <div class="avatar bg-primary p-2 rounded-full">
                  <Icon
                    name="heroicons:academic-cap"
                    class="text-white"
                    size="1.75rem"
                  ></Icon>
                </div>
                <div>
                  <div class="font-bold">Payment - 1</div>
                </div>
              </div>
            </td>
  
            <td>
              <div class="badge badge-success text-white p-4 text-lg rounded-lg">
                  1/1/2003
              </div>
            </td>
  
            <td>
              <div class="badge badge-warning p-4 text-lg rounded-lg">
                  Accessories
              </div>
            </td>
  
            <td>
              <div class="p-4 text-primary text-2xl font-bold rounded-lg">
                  100$
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  bulk: {
    type: Boolean,
  },
});
</script>
