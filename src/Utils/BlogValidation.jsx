

const BlogValidation = ({ blog }) => {
    if (!(blog.title && blog.textBody && blog.category && blog.username && blog.image)) {
        return {
            status: 404,
            message: "All fields are required"
        }
    }
    if (blog.title.length > 100) {
        return {
            status: 404,
            message: "Title length should be upto 100"
        }
    }
    if (blog.textBody.length > 10000) {
        return {
            status: 404,
            message: "TextBody length should be upto 10000"
        }
    }
    if (blog.textBody.length < 100) {
        return {
            status: 404,
            message: "TextBody length should be greater than 10000"
        }
    }
    return {
        status: 200,
        message: 'Created Successfuly'
    }
}

export default BlogValidation