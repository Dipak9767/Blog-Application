import { demo } from "../demoData";


// initializing state with some sample data if localStorage is empty

const demoData = JSON.parse(localStorage.getItem('allBlogs')) ? JSON.parse(localStorage.getItem('allBlogs'))
    : demo;

localStorage.setItem('allBlogs',JSON.stringify(demoData))

export const BlogReducer = (state = demoData, action) => {
    switch (action.type) {
        case "SETBLOGS": return [  ...action.payload]
          
        
        default: return [
            ...state
        ]
    }
}