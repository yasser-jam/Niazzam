<template>
  <div class="grid grid-cols-3 gap-8">
    <da-card class="bg-white rounded-lg p-4">
      <da-card-title class="mb-2">
        <div class="flex items-center">
          <Icon name="heroicons:clock" class="me-2" />
          <div>Pending</div>
        </div>
      </da-card-title>

      <da-card-body class="p-0 h-[200px] overflow-auto">
        <draggable :list="list" group="todo" item-key="name">
          <template #item="{ element }">
            <div
              class="border-2 bg-gray-100 shadow-sm p-2 my-2 rounded-lg font-medium text-md cursor-pointer"
            >
              {{ element.name }}
            </div>
          </template>
        </draggable>
      </da-card-body>
    </da-card>

    <da-card class="bg-white rounded-lg p-4">
      <da-card-title class="mb-2">
        <div class="flex items-center">
          <Icon name="heroicons:adjustments-vertical" class="me-2" />
          <div>Doing</div>
        </div>
      </da-card-title>

      <da-card-body class="p-0 h-[200px] overflow-auto">
        <draggable :list="list2" group="todo" item-key="name">
          <template #item="{ element }">
            <div
              class="border-2 bg-gray-100 shadow-sm p-2 my-2 rounded-lg font-medium text-md cursor-pointer"
            >
              {{ element.name }}
            </div>
          </template>
        </draggable>
      </da-card-body>
    </da-card>

    <da-card class="bg-white rounded-lg p-4">
      <da-card-title class="mb-2">
        <div class="flex items-center">
          <Icon name="heroicons:check" class="me-2" />
          <div>Done</div>
        </div>
      </da-card-title>

      <da-card-body class="p-0 h-[200px] overflow-auto">
        <draggable :list="list3" group="todo" item-key="name">
          <template #item="{ element }">
            <div
              class="border-2 bg-gray-100 shadow-sm p-2 my-2 rounded-lg font-medium text-md cursor-pointer"
            >
              {{ element.name }}
            </div>
          </template>
        </draggable>
      </da-card-body>
    </da-card>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: {
    draggable,
  },
  data() {
    return {
      list: [
        { name: "John 1", id: 0 },
        { name: "Joao 2", id: 1 },
        { name: "Jean 3", id: 2 },
      ],
      list2: [
        { name: "Jonny 4", id: 3 },
        { name: "Guisepe 5", id: 4 },
      ],
      list3: [
        { name: "Jonny 4", id: 3 },
        { name: "Guisepe 5", id: 4 },
      ],
    };
  },
};
</script>
<style scoped></style>
