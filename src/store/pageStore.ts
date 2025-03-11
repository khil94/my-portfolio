import {create} from "zustand/react";

interface PageStore{
    currentPage:number;
    setPage: (page:number)=>void;
}

export const usePageStore = create<PageStore>((set)=>{
    return {
        currentPage:0,
        setPage:(page)=>set({currentPage:page})
    }
})