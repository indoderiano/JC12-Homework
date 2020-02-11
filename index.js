class Test{
    constructor(nama,harga,stok){
        this.nama=nama,
        this.harga=harga,
        this.stok=stok
    }
}

var arr=[
    new Test('test1',1000,10),
    new Test('test2',2000,10),
    new Test('test3',3000,10)
]

console.log(arr)

class Moretest extends Test{
    constructor(nama,harga,stok,newkategori){
        super(nama,harga,stok),
        this.newkategori=newkategori
    }
}

var arrmore=[
    new Moretest('test1',1000,10,'more'),
    new Moretest('test2',2000,10,'more'),
    new Moretest('test3',3000,10,'more')
]

console.log(arrmore)