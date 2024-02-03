<template>
    <div class="card shadow-md bg-white rounded-md relative">
        <div class="card-body">
            <div class="card-title text-2xl text-primary">Units</div>
            
            <div class="c-avatar bg-primary rounded-xl p-3">
                <Icon name="heroicons:academic-cap" class="text-white" size="1.75rem"></Icon>        
            </div>
            
            <div class="text-md text-slate-400">This is the way we need to resolve issues</div>
    
            <div class="flex justify-center items-center gap-x-12 mt-4">
                <div class="text-3xl text-primary font-bold">$110.000</div>

                <div class="radial-progress text-info text-xl" style="--value:70;" role="progressbar">70%</div>
            </div>

        </div>
        <div class="card-actions justify-center mb-4">
            <base-btn>Details</base-btn>
        </div>
    </div>
</template>


<style scoped>
.c-avatar {
    position: absolute;
    right: -.5rem;
    top: -.5rem
}
</style>