// console.log("1")

// setTimeout(function(){
//     console.log("2")
// },2000)

// console.log("3")

// function doFirst(){
//     console.log("สั่งสินค้า")
// }
// function doSecond(){
//     console.log("ชำระเงิน")
// }
// function doThird(){
//     console.log("รับสินค้า")
// }

// doFirst()
// doSecond()
// doThird()

let dbResult
function doFirst() {
    setTimeout(()=>{
        console.log("สั่งสินค้า")
        dbResult = 'username is john'
        console.log(dbResult)
    },3000)
}

function doSecond(){
    console.log(dbResult)
    console.log('ชำระเงิน')
}

function doThird(){
    console.log('รับสินค้า')
}

doFirst(dbResult)
doThird()