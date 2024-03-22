<template>
    <div class="text-[#5885A3] text-4xl font-bold mb-12">
        📘Reading Page
    </div>

    <div class="grid grid-cols-3 gap-8">

        <div v-for="i in 9" class="card bg-white shadow-sm border-warning border bg-warning/35">
            <div class="card-body">
                <div class="card-title">

                    <div class="flex flex-col items-start gap-1 text-primary">
                        <div>Book No.{{ i }}</div>
                        <div class="text-gray-400 text-sm italic">by: Yasser jamal</div>
                    </div>

                    <div class="badge bg-[#CFE6FA] text-[#5885A3] absolute right-4 top-4 rounded-md p-3">in progress</div>
                </div>

                <progress class="progress  w-56 mt-4" color="#0ff" value="40" max="100"></progress>
                <!-- <div class="progress  mt-4" style="--value:40"></div> -->
            </div>
        </div>


    </div>

</template>

<script script lang="ts">
definePageMeta({
    layout: 'test'
})
</script>