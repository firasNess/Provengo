bthread("must brush", function(){

    // brushTeeth will be terminated while function is executing
    interrupt( Actions.brushTeeth(), function(){
        waitFor( Actions.goOut() );
        bp.ASSERT(false,"Can't leave house without brushing teeth!");
    })
});
