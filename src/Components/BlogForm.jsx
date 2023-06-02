import { Button, Flex, FormControl, FormLabel, Heading, Input, Spinner, Textarea, VStack } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { ToastMessage } from '../Utils/ToastMessage'
import { useNavigate } from 'react-router-dom'
import BlogValidation from '../Utils/BlogValidation'
import { v4 as uuid } from 'uuid';
import { storage } from '../Config/FireBase'
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { setBlogs } from '../Redux/Actions'

const BlogForm = ({ isEdit, blogData }) => {

  const [blog, setBlog] = useState({
    id: "",
    title: "",
    textBody: "",
    date: "",
    category: "",
    image: "",
    username: ""
  })
  const [imguploaded, setImguploaded] = useState(false)
  const fileref = useRef(0)
  const dispatch = useDispatch()

  const navigate = useNavigate();

  const { toastMessage } = ToastMessage();

  const submitHandler = async (e) => {

    e.preventDefault();

    let message = BlogValidation({ blog })

    if (message.status === 200) {

      let date = moment(new Date()).format('DD-MMM-YYYY');

      let allBlogs = JSON.parse(localStorage.getItem('allBlogs')) || [];

      if (isEdit) {
        let editedList = allBlogs.map((element) => {
          if (element.id === blogData.id) {
            return { ...blog }
          }
          return element
        })

        localStorage.setItem('allBlogs', JSON.stringify(editedList))

        dispatch({
          type: setBlogs,
          payload: editedList
        })
        navigate('/')
      }
      else {
        allBlogs = [...allBlogs, { ...blog, id: uuid(), date: date }]
        localStorage.setItem('allBlogs', JSON.stringify(allBlogs))
        dispatch({
          type: setBlogs,
          payload: allBlogs
        })
      }

      setBlog({
        id: "",
        title: "",
        textBody: "",
        date: "",
        category: "",
        image: "",
        username: ""
      })
      fileref.current.value = '';
      navigate('/')
    }

    toastMessage(message);

  }
  const uploadImg = (e) => {
    if (e.target.value) {
      setImguploaded(true)
      const file = e.target.files[0];
      const storageRef = ref(storage, `files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on("state_changed",
        (snapshot) => {
          
            Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

        },
        (error) => {
          alert(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setBlog({ ...blog, image: downloadURL })
            setImguploaded(false)
          });
        }
      )
    }else{
      setBlog({ ...blog, image: '' })
    }
  }

  useEffect(() => {

    if (isEdit) {
      setBlog(blogData)
    } else {
      setBlog({
        id: "",
        title: "",
        textBody: "",
        date: "",
        category: "",
        image: "",
        username: ""
      })
    }
  }, [blogData, isEdit])

  return (
    <VStack
      h={'80vh'}
      width={'80vw'}
      border={'1px red'}
      margin={'auto'}
    >
      <Flex flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'start'}
      >
        <Heading
          mt={'5px'}
        >
          Create Blog</Heading>
        <FormControl >
          <FormLabel>Title</FormLabel>
          <Input
            type='text' w={'100%'}
            border={'2px solid #7A6BB0 '}
            placeholder='Title' mb={'10px'}
            value={blog.title}
            onChange={(e) => setBlog({ ...blog, title: e.target.value })}
          />
          <FormLabel>Category</FormLabel>
          <Input
            type='text' w={'100%'}
            border={'2px solid #7A6BB0 '}
            placeholder='Category' mb={'10px'}
            value={blog.category}
            onChange={(e) => setBlog({ ...blog, category: e.target.value })}
          />
          <FormLabel>UserName</FormLabel>
          <Input
            type='text' w={'100%'}
            border={'2px solid #7A6BB0 '}
            placeholder='UserName' mb={'10px'}
            value={blog.username}
            onChange={(e) => setBlog({ ...blog, username: e.target.value })}
          />
          <FormLabel>TextBody</FormLabel>
          <Textarea
            placeholder='Write your blog here'
            w={'80vw'} border={'2px solid #7A6BB0 '}
            h={'30vh'}
            mb={'10px'}
            value={blog.textBody}
            onChange={(e) => setBlog({ ...blog, textBody: e.target.value })}
          />
          <FormLabel>Picture</FormLabel>
          <Input
            type='file' w={'100%'}
            border={'2px solid #7A6BB0 '}
            placeholder='Picture' mb={'10px'}
            onChange={uploadImg}
            ref={fileref}
          />
          {
            imguploaded
          }
        </FormControl>
        {
          imguploaded ?
            <Button
              bg={'#7A6BB0'}
              borderRadius="8px"
              py="4"
              px="16"
              lineHeight="1"
              size="md"
              color={'white'}
              onClick={submitHandler}
              className='btn'
              marginBottom={'2rem'}
            >
              <Spinner size="sm" color="white" />
            </Button>
            :
            <Button
              bg={'#7A6BB0'}
              borderRadius="8px"
              py="4"
              px="16"
              lineHeight="1"
              size="md"
              color={'white'}
              onClick={submitHandler}
              className='btn'
              marginBottom={'2rem'}
            >
              {
                isEdit ? "Update Blog" : "Post Blog"
              }
            </Button>
        }
      </Flex>
    </VStack>
  )
}

export default BlogForm