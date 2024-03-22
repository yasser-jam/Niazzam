<template>
    <div class="flex justify-between items-center mb-12">
        <div class="text-primary text-4xl font-bold">
            📘Reading Page
        </div>

            <button class="btn btn-outline btn-primary">Add</button>
    </div>

    <div class="grid grid-cols-3 gap-8">

        <div v-for="i in 9" class="card bg-white shadow-sm">
            <div class="card-body">
                <div class="card-title">

                    <div class="flex flex-col it   ems-start gap-1 text-primary">
                        <div>Book No.{{ i }}</div>
                        <div class="text-gray-400 text-sm italic">by: Yasser jamal</div>
                    </div>

                    <div class="badge badge-neutral text-primary absolute right-4 top-4 rounded-md p-3">in progress</div>
                </div>

                <progress class="progress  w-56 mt-4" color="#0ff" value="40" max="100"></progress>
            </div>
        </div>


    </div>

</template>

<script script lang="ts">
definePageMeta({
    layout: 'test'
})
</script>