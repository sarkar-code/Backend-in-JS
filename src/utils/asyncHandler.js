// This is PROMISE way/
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next )).catch((err) => next(err))
    }
}


export {asyncHandler}


//this is the step by step process
// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {() => {}}
// const asyncHandler = (func) => async () => () => {}

    
// This is the TRY CATCH way
// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }