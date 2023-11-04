// promise 

// const promiseWifeBringTiket = new Promise( (res, rej) => {
//     setTimeout( () => {
//         res("ticket");
//     }, 1000)
// })

// const getPopcorn = promiseWifeBringTiket.then( (msg) => {
//     console.log("Husband: We should go in");
//     console.log("Wife: No, I am hungry")
//     return new Promise( (res, rej) => {
//         res(`now they have :- ${msg}, popcorn`);
//     })
// })


// const getButter = getPopcorn.then( (msg) => {
//     console.log("Heyyy...this is your popcorn")
//     console.log("Husband: We should go in");
//     console.log("Wife: Noooo, I need butter on my popcorn");

//     return new Promise( (res, rej) => {
//         res( `${msg}, butter`);
//     })
// });

// const getColdDrinks = getButter.then( (msg) => {
//     console.log("Hey ..this is your butter...");
//     console.log("Husband : - Now We should go in");
//     console.log("Wift:- Nooo, I need a cold drink...");
//     return new Promise( (res, rej) => {
//         res(`${msg}, cold drink`);
//     })
// })

// getColdDrinks.then( (msg) => console.log(msg));


//by using asynch and await

const promiseWifeBringTiket = new Promise( (res, rej) => {
    setTimeout( () => {
        res("ticket");
    }, 1000)
})

const getPopcorn =  new Promise( (res, rej) => {
        res(`popcorn`);
    });


const getButter =  new Promise( (res, rej) => {
        res( `butter`);
    });

const getColdDrinks =  new Promise( (res, rej) => {
        res(` cold drink`);
    })



async function movieShow(){

     await promiseWifeBringTiket;
    console.log("Husband: We should go in");
    console.log("Wife: No, I am hungry");

     await getPopcorn;
    console.log("Heyyy...this is your popcorn")
    console.log("Husband: We should go in");
    console.log("Wife: Noooo, I need butter on my popcorn");

     await getButter;
    console.log("Hey ..this is your butter...");
    console.log("Husband : - Now We should go in");
    console.log("Wift:- Nooo, I need a cold drink...");

    await getColdDrinks;
    // console.log(`now They have:- ${ticket}, ${popcornget}, ${butterget}, ${colddrinkget}`)

    let [ticket, popcorn, butter, colddrink] = await Promise.all([promiseWifeBringTiket, getPopcorn, getButter, getColdDrinks]);
    console.log("now they have:- ")
    console.log(ticket, popcorn, butter,colddrink)
}

movieShow();