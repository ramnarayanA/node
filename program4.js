var fs=require('fs');
var path=require('path')
var count=0;
fs.readdir(process.argv[2],function(err,data){
	if(err)console.error(err);
	else{
		for(count=0;count<=data.length;count++){
		if(path.extname(data[count])=='.'+process.argv[3]){
			console.log(data[count])
		}
	}
	
	}
})