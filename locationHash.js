/* Library of Updating the location Hash of URL
/ By - Narendra Sisodiya

(c) 2012, Narendra Sisodiya, narendra@narendrasisodiya.com

Project Hosting - 

// License - MIT License

*/
var LocationHash = (function(){
	
	function getParam(key){
		
		var hash = window.location.hash;
		if(hash != ""){
			var hashUrlVars = hash.slice( 1 ).split("&");
			var l = hashUrlVars.length;
		
			var hashUrlObj = {}
			for (var i=0; i< l ; i++){
				var SS = hashUrlVars[i].split("=");
				hashUrlObj[SS[0]] = SS[1];
			}
	
			if(hashUrlObj[key]){
		
				return hashUrlObj[key];
			}else{
				return null;
		
			};	//What if there is no property found
	
			
		
		}else{
			//length is Zero -
			return null;
		}
		
		
	};
	
	function setParam(key , val){
		var hash = window.location.hash;
		if(hash != ""){
			var hashUrlVars = hash.slice( 1 ).split("&");
			var l = hashUrlVars.length;
		
			var hashUrlObj = {}
			for (var i=0; i< l ; i++){
				var SS = hashUrlVars[i].split("=");
				hashUrlObj[SS[0]] = SS[1];
			}
	
			hashUrlObj[key] = val;
			
			
		
		}else{
			//length is Zero -
			var hashUrlObj = {}
			
			hashUrlObj[key] = val;
			
		}
		
		
		var str = [];
		for (var prop in hashUrlObj){
			if (hashUrlObj.hasOwnProperty(prop)) {
				str.push( prop + "=" + hashUrlObj[prop] ) ;
			}
		}
		var finalhash = "#" + str.join("&");
		window.location.hash =finalhash;
		
		
	};
	
	function deleteParam(key){
		var hash = window.location.hash;
		if(hash != ""){
			var hashUrlVars = hash.slice( 1 ).split("&");
			var l = hashUrlVars.length;
		
			var hashUrlObj = {}
			for (var i=0; i< l ; i++){
				var SS = hashUrlVars[i].split("=");
				hashUrlObj[SS[0]] = SS[1];
			}
	
			delete hashUrlObj[key];
		
		}else{
			return ; //Noting to do
			
		}
		
		
		var str = [];
		for (var prop in hashUrlObj){
			if (hashUrlObj.hasOwnProperty(prop)) {
				str.push( prop + "=" + hashUrlObj[prop] ) ;
			}
		}
		var finalhash = "#" + str.join("&");
		window.location.hash =finalhash;
		
		
	};
	
	return {
		getParam:getParam,
		setParam:setParam,
		deleteParam:deleteParam
	}
})();
