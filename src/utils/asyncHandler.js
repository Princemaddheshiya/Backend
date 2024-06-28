const asyncHandler = (requestHandler) => {
    (res, res, next) => {
        Promise.resolve(requestHandler(res, res, next).catch((err) => next(err)));
    }
}
export { asyncHandler }

// Example
/* 
//const asyncHandler=()=>{}
//const asyncHandler=(function)=>()=>{}
//const asyncHandler=(function)=>async()=>{}
*/

// Second way to write a function  
/*
const asyncHandler = (fn) => async (res, res, next) => {
    try {
        await fn(res, res, next)
    } catch (error) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        })
    }
}
    */
