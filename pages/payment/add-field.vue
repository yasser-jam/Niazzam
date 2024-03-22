<template>
  <base-dialog :model-value="true" @close="goBack" @save="submit">
  
    <template #title>Add Payment field</template>

    <template #body>

        <div class="gird grid-cols-1">

            <div class="s">
                <base-label>Title</base-label>

                <base-text-input v-model="field.title"></base-text-input>
            </div>

            <div class="mt-4">
                <base-label>Icon</base-label>

                <base-text-input v-model="field.icon"></base-text-input>
            </div>

        </div>

    </template>

  </base-dialog>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { usePaymentFieldStore } from '~/stores/payment_field';

const paymentFieldStore = usePaymentFieldStore()

const { field } = storeToRefs(paymentFieldStore)

const router = useRouter()

const loading = ref<boolean>(false)

// reset
paymentFieldStore.reset()

const goBack = () => {
    router.push('/payment')
}

const submit = async () => {

    loading.value = true

    try {
        await paymentFieldStore.create()
    } finally {
        loading.value = false
    }
}

</script>