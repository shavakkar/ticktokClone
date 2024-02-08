import { defineStore } from "pinia";

export const useGeneraltore = defineStore('general',{
    state: () => ({ 
        isLoginOpen: false,
        isEditProfileOpen: false,
        selectedPost: null,
        ids: null,
        isBackUrl: '/',
        posts: null,
        suggested: null,
        following: null,
     }),
    actions: {
        // 
    }
})