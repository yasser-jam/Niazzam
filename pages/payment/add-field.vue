<template>
  <base-dialog :model-value="true" @close="goBack">
  
    <template #title>Add Payment field</template>

    <template #body>

        <div class="gird grid-cols-1">

            <div class="">
                <base-label>Title</base-label>

                <da-text-input bordered class="w-full"></da-text-input>
            </div>

        </div>

    </template>

  </base-dialog>
</template>

<script setup lang="ts">

const router = useRouter()

const goBack = () => {
    router.push('/payment')
}

</script>