
let limit=10
let start=1

while(limit){
    limit*=start;
    start++;
    if(start>=10)break;
}
console.log(limit);