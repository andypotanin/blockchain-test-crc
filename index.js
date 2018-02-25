// need: 0xbbd1264f = 3151046223

var async = require( 'async' );
var zlib = require( 'zlib' );
var randomstring = require( 'randomstring' );
var CRC32 = require( 'crc-32' );

var _count = 0;

async.forever(
    function(next) {

      _count++;

      var _string = randomstring.generate({
        length: 50,
        charset: 'abc',
        charset: 'alphabetic'
      });

      _crc =  CRC32.str( _string );


      console.log(_count, _string, _crc );

      if( _crc == '3151046223' ) {
        return next( new Error( "Foudn! " + _string ));
      }

      next();


    },
    function(err) {

      if( err ) {
        console.log( err );
      }
        // if next is called with a value in its first parameter, it will appear
        // in here as 'err', and execution will stop.
    }
);
