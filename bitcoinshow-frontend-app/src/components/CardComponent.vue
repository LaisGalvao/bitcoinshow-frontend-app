<template>
    <div class="py-6">
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" :src="coinImgSrc" :alt="coinImgAlt">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{{ coinName }}</div>
                <p class="text-zinc-300 text-base">
                    {{ coinDesc }}
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span
                    class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{
                            currentValue
                    }}</span>
                <span
                    class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{
                            historyValue
                    }}</span>
            </div>
        </div>
    </div>

</template>

<script setup>
defineProps({
    coinName: {
        type: String,
        required: true,
    },
    coinDesc: {
        type: String,
        required: false,
        default: "Information will be here"
    },
    coinImgSrc: {
        type: String,
        required: false
    },
    coinImgAlt: {
        type: String,
        required: false
    },
    currentValue: {
        type: Number,
        required: true,
        default: "Choose a coin for show"
    },
    historyValue: {
        type: Number,
        required: false,
        default: "Choose a date for show"
    }
})
</script>

<style>
</style>