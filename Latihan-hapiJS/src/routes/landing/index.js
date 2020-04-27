const landing = {
    method:'GET',
    path:'/',
    handler: async (request, res) => {
        return await res.response({
            statusCode: 200,
            message: 'hello bradah',

        });
    }
}
export default landing;