<template>
  <div class="card shadow-md bg-white rounded-md relative overflow-auto">
    <div class="card-body px-4">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th v-for="col in cols">
              {{ col.title }}
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="row in rows">
            <td v-for="col in cols">
              <slot :name="col.key" :item="row" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    bulk: boolean
    rows: any[]
    cols: any[]
  }>(),
  {
    bulk: false,
  }
);
</script>
