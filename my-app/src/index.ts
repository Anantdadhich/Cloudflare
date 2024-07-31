
//requestr is a function which defined=s the bodyu part get or pos t
//env is environment varible 
//ctx provides th eececution to the provider of environmet 
//promise is to http client which send to back to a client 

export interface Env{

}
export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		console.log(request.body);
		console.log(request.headers);
		
		if (request.method === "GET") {
			return Response.json({
				message: "you sent a get request"
			});
		} else {
			return Response.json({
				message: "you did not send a get request"
			});
		}
	},
};
