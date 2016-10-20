$( window )
    .scroll( function() {
        if ( $( this )
            .scrollTop() > 80 ) {
            $( 'header' )
                .addClass( 'header--small' );
            $( '#mediaImg, #authorTitle' )
                .addClass( 'hidden' );
            $( '#mediaTitle' )
                .addClass( 'media__title--small' );
            $( '#media' )
                .addClass( 'media--small' );
            $( '#mediaContent' )
                .addClass( 'media__content--small' );
        } else {
            $( 'header' )
                .removeClass( 'header--small' );
            $( '#mediaImg, #authorTitle' )
                .removeClass( 'hidden' );
            $( '#mediaTitle' )
                .removeClass( 'media__title--small' );
            $( '#media' )
                .removeClass( 'media--small' );
            $( '#mediaContent' )
                .removeClass( 'media__content--small' );
        }
    } );
