import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../services/api.service';
import { environment } from '../../environments/environment';

declare var $: any;
declare global {
    interface Window {
        alphaTab: any;
    }
}

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit, OnDestroy
{
    private sub: any;
    
    alphatabApi: any;
    element: any;
    songDetails: any;
    
    tabId: number = 0;
    scoreLoaded: boolean = false;
    
    constructor( private route: ActivatedRoute )
    {
        
    }
    
    ngOnInit(): void
    {
        // Change <body> styling
        document.body.classList.add( 'tablature-player' );
        
        this.sub = this.route.params.subscribe(params => {
            this.tabId    = +params['id']; // (+) converts string 'id' to a number
            
            this.element        = $( "#alphaTab" ).get( 0 );
            this.songDetails    = document.querySelector( '#song-details' );
            
            this.alphatabInit();
        });
    }
    
    ngOnDestroy()
    {
        // Change <body> styling
        document.body.classList.remove( 'tablature-player' );
        
        this.sub.unsubscribe();
    }
    
    alphatabInit(): void
    {
        this.alphatabApi    = new window.alphaTab.AlphaTabApi( this.element, {
        
            file: `${environment.backendURL}/tablatures/${this.tabId}/read`,
            
            core: {
                logLevel: 'debug',
                engine: 'html5',
                tracks: 0,
                fontDirectory: '/assets/alphatab/font/'
            },
            display: {
                layoutMode: 'page',
                staveProfile: 'scoretab'
            },
            notation: {
                rhythmMode: 'showwithbars',
                elements: {
                    scoreTitle: false,
                    scoreSubTitle: false,
                    scoreArtist: false,
                    scoreAlbum: false,
                    scoreWords: false,
                    scoreMusic: false,
                    scoreWordsAndMusic: false,
                    scoreCopyright: false,
                    guitarTuning: true
                }
            },
            player: {
                enablePlayer: true,
                enableUserInteraction: true,
                enableCursor: true,
                soundFont: '/assets/alphatab/soundfont/sonivox.sf2'
            },
            logging: 'debug',
        });
        
        this.alphatabApi.soundFontLoad.on( (e: any) => {
            console.log( 'soundFont Loading: Loaded(' + e.loaded + '), Total(' + e.total + ')' );
        });
        
        this.alphatabApi.soundFontLoaded.on( () => {
            console.log( 'SoundFont Loaded !!!' );
            //setLoaded( true );
        });
        
        this.alphatabApi.scoreLoaded.on( ( score: any ) => {
            console.log( 'Score Loaded !!!' );
            this.scoreLoaded    = true;
            
            this.songDetails.querySelector( '.artist' ).innerText    = score.artist;
            this.songDetails.querySelector( '.title' ).innerText     = score.title;
            this.songDetails.querySelector( '.album' ).innerText     = score.album;
        });
        
        /**
         * This event is fired when all required data for playback is loaded and ready. The player is ready for playback when 
         * all background workers are started, the audio output is initialized, a soundfont is loaded, and a song was loaded into the player as midi file.
         */
        this.alphatabApi.playerReady.on( () => {
            console.log( 'Player Ready !!!' );
        });
    }
}
