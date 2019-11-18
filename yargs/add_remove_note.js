const yargs=require('yargs');

//customize yarg version
yargs.version('1.1.0')

yargs.command({
    command:'add',
    describe:'Add a new notes',
    handler:function(){
        console.log('Add new note')
    }
})

yargs.command({
    command:'remove',
    describe:'Remove a new notes',
    handler:function(){
        console.log('Remove a note')
    }
})



console.log(yargs.argv)