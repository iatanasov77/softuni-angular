import { Component, Input, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AlphaTabApi } from '@coderline/alphatab';

declare var $: any;

@Component({
    selector: 'tracks-item',
    templateUrl: './tracks-item.component.html',
    styleUrls: ['../player-controls.component.scss']
})
export class TracksItemComponent implements OnInit
{
    @Input() player?: AlphaTabApi;
    
    scoreTracks: Array<any>    = [];
    
    soloTracks: Array<any>    = [];
    muteTracks: Array<any>    = [];
    
    constructor( @Inject(DOCUMENT) private document: Document )
    {
        
    }
    
    ngOnInit(): void
    {
        if ( this.player && this.player.score ) {
            this.setTracks( this.player.score.tracks );
        }
    }
    
    ngAfterViewInit(): void
    {
        /** 
         * Setup First Track
         */
        let firstTrack  = $( '#trackList' ).children().first();
        firstTrack.find( '.showHide' ).removeClass( 'fa-eye-slash' ).addClass( 'fa-eye' );
    }
    
    setTracks( tracks: any ): void
    {
        this.scoreTracks    = tracks;
    }

    resetElements(): void
    {
        if ( this.document ) {
            let trlElement  = this.document.getElementById( "trackList" );
            if ( trlElement ) {
                Array.from( trlElement.childNodes ).forEach( function( item )
                {
                    $( item ).find( '.showHide' ).removeClass( 'fa-eye-slash' ).removeClass( 'fa-eye' ).addClass( 'fa-eye-slash' );
                    
                });
            }
        }
    }
    
    clickTrackTitleHandler( track: any, event: any ): void
    {
        event.preventDefault();
        
        if ( this.player && this.player.score ) {
            this.player.renderTracks( [track] );
            
            this.resetElements();
            if ( $( event.target ).html().length ) {
                var showElement = $( event.target ).find( '.showHide' );
            } else {
                var showElement = $( event.target ).parent().find( '.showHide' );
            } 
            showElement.removeClass( 'fa-eye-slash' ).addClass( 'fa-eye' );
        }
    }
    
    clickTrackSoloMuteHandler( action: any, track: any, event: any ): void
    {
        var previousState   = Boolean( $( event.target ).data( 'waschecked' ) );
        $( event.target ).data( 'waschecked', ! previousState );
        $( event.target ).prop( "checked", ! previousState );

        this.soloTracks = this.soloTracks.filter( el => el.index !== track.index );
        this.muteTracks = this.muteTracks.filter( el => el.index !== track.index );
        
        if ( this.player && this.player.score ) {
            if ( action == 'solo' ) {
                if ( $( event.target ).prop( "checked" ) ) {
                    this.soloTracks.push( this.player.score.tracks[track.index] );
                } else {
                    this.player.changeTrackSolo( [this.player.score.tracks[track.ndex]], false );
                }
                
                this.player.changeTrackSolo( this.soloTracks, true );
                this.player.changeTrackMute( this.soloTracks, false );
            } else if ( action == 'mute' ) {
                if ( $( event.target ).prop( "checked" ) ) {
                    this.muteTracks.push( this.player.score.tracks[track.index] );
                } else {
                    this.player.changeTrackMute( [this.player.score.tracks[track.index]], false );
                }
                
                this.player.changeTrackMute( this.muteTracks, true );
                this.player.changeTrackSolo( this.muteTracks, false );
            }
        }
    }
    
    changeTrackVolumeHandler( track: any, event: any ): void
    {    
        //alert( 'Track Index: ' + trackIndex + '<br>Volume Value: ' + event.target.value );
        if ( this.player && this.player.score ) {
            this.scoreTracks[track.index].playbackInfo.volume   = event.target.value;
            this.player.changeTrackVolume(
                [ track ],
                event.target.value / track.playbackInfo.volume
            );
        }
    }
}