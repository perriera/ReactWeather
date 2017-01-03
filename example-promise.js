function addPromise(a,b) {
    return new Promise(function (resolve,reject) {
        if ( typeof a === 'number' && typeof b === 'number')
            resolve( a + b );
        else
            reject( 'invalid parameters');
    })
}

addPromise(5,3).then(function(sum){
    console.log('the answer is ',sum);
}, function (err) {
    console.log('the error is ',err);
})

addPromise('5','3').then(function(sum){
    console.log('the answer is ',sum);
}, function (err) {
    console.log('the error is ',err);
})

