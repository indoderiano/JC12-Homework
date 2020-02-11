

var listKategori=['All','Pakaian','Elektronik','Makanan','Buah']

class Produk{
    constructor(id,kategori,nama,harga,stok){
        this.id=id,
        this.kategori=kategori,
        this.nama=nama,
        this.harga=harga,
        this.stok=stok
    }
}

var produkList=[
    new Produk(123,'Elektronik','Laptop',10000000,5),
    new Produk(111,'Pakaian','Celana',40,6),
    new Produk(111,'Pakaian','Baju',20,9),
    new Produk(200,'Makanan','Nasi Padang',28000,100)
]

var indexedit=-1
var indexdelete=-1
const printData=(list)=>{
    // var kategoriinput=document.getElementById('inputKategori').value
    var arrkategoriFilter=listKategori.map((val)=>{
        return `<option value=${val}>${val}</option>`
    })
    var arrkategoriinput=listKategori.map((val)=>{
        if(val!='All'){
            return `<option value=${val}>${val}</option>`
        }else{
            return `<option hidden value=${val}>select category</option>`
        }
    })
    var output=''
    list.forEach((val,index)=>{
        output+=`<tr>
        <td>${val.id}</td>
        <td>${val.kategori}</td>
        <td>${val.nama}</td>
        <td>${val.harga}</td>
        <td>${val.stok}</td>
    </tr>`
    })
    
    document.getElementById('filterKategori').innerHTML=arrkategoriFilter.join('')
    document.getElementById('inputKategori').innerHTML=arrkategoriinput.join('')
    document.getElementById('listProduk').innerHTML=output
}
printData(produkList)

const inputProduk=()=>{
    var id=Math.floor(Math.random()*1000)
    var kategori=document.getElementById('inputKategori').value
    var nama=document.getElementById('inputNama').value
    var harga=document.getElementById('inputHarga').value
    var stok=document.getElementById('inputStok').value
    
    produkList.push(new Produk(id,kategori,nama,harga,stok))

    printData(produkList)
}


const filterData=()=>{

    var nama=document.getElementById('filterNama').value
    // if(nama==undefined){nama=true}
    var harga1=document.getElementById('filterHarga1').value
    // harga1=true
    var harga2=document.getElementById('filterHarga2').value
    // harga2=true
    var kategori=document.getElementById('filterKategori').value

    var filterList=[]

    for(var i=0;i<produkList.length;i++){
        if(nama.toLowerCase()===produkList[i].nama.toLowerCase()){
            filterList.push(produkList[i])
        }
    }


    printData(filterList)
    console.log(filterList)
}

function check(list){
    return list.nama=='Pakaian'
}

// filterData()
// console.log(produkList)
// console.log(filterData())