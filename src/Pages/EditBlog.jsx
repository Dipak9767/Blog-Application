
import BlogForm from '../Components/BlogForm'
import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';

const EditBlog = () => {

    const { id } = useParams();// fetching id of selected blog
    
    const [blogData, setBlogData] = useState();// to hold the data of selected blog
    const [isEdit, setIsEdit] = useState(false); // to indicate edit
    let blogs = useSelector((state) => state.blogs) // fetching all blogs 

    const fetchBlog = async () => {
        // finding selected blog using id
       let blog = blogs.find((blog) => blog.id === id)
       setBlogData(blog)
       setIsEdit(true)
    }

    useEffect(() => {
        fetchBlog()
    }, [])
    return (
        <BlogForm blogData={blogData} isEdit={isEdit} />
    )
}

export default EditBlog