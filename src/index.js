/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

 var src_default = {
	async fetch(request, env, ctx) {
	  if(request.method == "POST") {
			 return new Response('You sent a POST', {
				 headers: {
					 'content-type': 'application/json',
				 },
			 });
		 }
		 else{
			 return new Response('Error!! Please use POST method', {
				 headers: {
					 'content-type': 'application/json',
				 },
			 });
		 }
	}
  };
  export {
	src_default as default
  };
  
  

