
var aldo={
    harum:test=()=>{
        return [{atian: 'berhasil'}]
    }
}
// console.log(aldo.harum()[0]['atian'])




var arr=['aldo','dian','putri','sekar']

var arrkeluarga=arr.map((val)=>{
    return `uzumaki ${val}`
})

// var arrkeluarga=[]
// for(var i=0;i>arr.length;i++){
//     arrkeluarga.push(`uzumaki `$arr[i])
// }

const mapalala=(arr,cb)=>{
    var arrout=[]
    arr.forEach((val,index)=>{
        arrout.push(cb(val,index))
    })
    return arrout
}

console.log(mapalala(arr,(val,index)=>{
    return `${index+1}. uzumaki ${val}`
}))