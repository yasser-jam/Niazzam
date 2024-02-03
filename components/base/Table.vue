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
          <tr v-for="row in rows">
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
                  <div class="font-bold">{{ row.title }}</div>
                </div>
              </div>
            </td>
  
            <td>
              <div class="badge badge-info text-white p-4 text-lg rounded-lg">
                  {{ row.date }}
              </div>
            </td>
  
            <td>
              <div v-for="cat in row.categories" class="badge badge-warning p-4 text-lg rounded-lg">
                  {{ cat.name }}
              </div>
            </td>
  
            <td>
              <div class="text-primary text-2xl font-bold rounded-lg">
                  ${{ row.amount }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  bulk: {
    type: Boolean,
  },
});

const rows = ref([
  {
    title: 'Units',
    date: '1/1/2024',
    categories: [
      { name: 'Others' }
    ],
    amount: 100,
  },
  {
    title: 'Units',
    date: '1/1/2024',
    categories: [
      { name: 'Others' }
    ],
    amount: 100,
  },
  {
    title: 'Units',
    date: '1/1/2024',
    categories: [
      { name: 'Others' }
    ],
    amount: 100,
  },
  {
    title: 'Units',
    date: '1/1/2024',
    categories: [
      { name: 'Others' }
    ],
    amount: 100,
  },
])
</script>
