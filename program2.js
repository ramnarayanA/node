var sum=0;
var data=process.argv;
var count=2;
for(count=2;count<data.length;count++){
sum+=Number(process.argv[count]);
}
console.log(sum);