test('testing the objects', ()=>{
    const data = {
        one:1
    }
    data.two = 2

    expect(data).toEqual({"one":1, "two":2 })
})


function fetchData(callback){
    setTimeout(()=>{
        callback("testing callback")
    }, 5000)
}

test('test callback', (done) =>{
    function callback(data){
        try{
            expect(data).toBe('testing callback')
            done()
        }catch(err){
            done(err)
        }
    }
})
function testPromise(){
    return Promise.resolve(4)
}

test('test promise', ()=>{
    testPromise().then((data)=>{
        expect(data).toBe(4)
    }).catch(err => {
        expect(err).toBe('hey I am error')
    })
})