import { demo } from "../demoData";


// initializing state with some sample data if localStorage is empty
localStorage.setItem('allBlogs',JSON.stringify(demo))
const blogState = JSON.parse(localStorage.getItem('allBlogs')) ? JSON.parse(localStorage.getItem('allBlogs'))
    : [];

export const BlogReducer = (state = blogState, action) => {
    switch (action.type) {
        case "SETBLOGS": return [  ...action.payload]
          
        
        default: return [
            ...state
        ]
    }
}
