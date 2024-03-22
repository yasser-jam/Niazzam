<template>
    <div class="overlay flex justify-center items-center h-screen">

        <main class="content rounded-2xl">
            <div class="grid grid-cols-8 h-full">
                <div class="col-span-2 flex flex-col items-center gap-8 py-10 bg-white/90 rounded-2xl">

                    <div class="flex flex-col items-center">
                        <img src="~/assets/images/personal-avatar.jpg" alt="personal" width="100" height="100" class="rounded-full">

                        <div class="text-primary font-semibold text-xl mt-2">Yasser Jamal Al-Deen</div>
                        <div class="text-gray-400 text-sm">Front End</div>
                    </div>
                    <base-navigation></base-navigation>
                </div>

                <div class="col-span-6 p-8 overflow-auto">
                    <div class="container">
                        <slot />
                    </div>
                </div>
            </div>
        </main>

    </div>
</template>

<style>
.overlay {
    background-image: linear-gradient(to bottom right, #87bef8, #9BD1E9)
}

main.content {
    width: 95%;
    height: 90vh;
    background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));
    backdrop-filter: blur(5px);
}
</style>