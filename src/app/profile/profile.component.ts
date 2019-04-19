import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { faDraftingCompass, faVideo, faFutbol, faGamepad, faUserTie, faMapMarkerAlt, faMobile, faEnvelope, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

const Highcharts = require('highcharts');

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
        
    draftingCompass:IconDefinition = faDraftingCompass
    video:IconDefinition = faVideo
    futbol:IconDefinition = faFutbol
    gamepad:IconDefinition = faGamepad
    user:IconDefinition = faUserTie
    map:IconDefinition = faMapMarkerAlt
    mobile:IconDefinition = faMobile
    envelope:IconDefinition = faEnvelope
    //URL:string = "/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US"
    URL:string = "https://cors.io/?https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US"
    IMG:SafeStyle; 
    isBingWallpaper:boolean
    constructor(private _sanitizer: DomSanitizer, private http:HttpClient) {
        this.IMG = this._sanitizer.bypassSecurityTrustStyle(`url('./assets/img/madrid.jpg')`);
        this.http.get(this.URL).subscribe((res:any) => {
            //console.log(res.images)
            this.IMG = this._sanitizer.bypassSecurityTrustStyle(`url('${"https://www.bing.com/"+res.images[0].url}')`);
            this.isBingWallpaper = true;
        });
    }

    ngOnInit() {
        var optionsNet = CopyObject(HighChartsOptionsCircle)
        var optionsAndroid = CopyObject(HighChartsOptionsCircle)
        var optionsAql = CopyObject(HighChartsOptionsCircle)
        var optionsHtml5 = CopyObject(HighChartsOptionsCircle)
        var optionsJs = CopyObject(HighChartsOptionsCircle)
        var optionsCss = CopyObject(HighChartsOptionsCircle)

        optionsNet.series = [{
            type: 'pie',
            name: '.NET',
            innerSize: '80%',
            cursor: 'pointer',
            data: [
                {
                    y: 10,
                    dataLabels: {
                        enabled: false
                    },
                    color: '#fafafa'
                },
                {
                    y: 90,
                    dataLabels: {
                        enabled: false
                    },
                    color: '#f5593d'
                }

            ]
        }]
        Highcharts.chart('net', optionsNet);

        optionsAndroid.series = [{
            type: 'pie',
            name: '.NET',
            innerSize: '80%',
            cursor: 'pointer',
            data: [
                {
                    y: 25,
                    dataLabels: {
                        enabled: false
                    },
                    color: '#fafafa'
                },
                {
                    y: 75,
                    dataLabels: {
                        enabled: false
                    },
                    color: '#f5593d'
                }
            ]
        }]
        Highcharts.chart('android', optionsAndroid);

        optionsAql.series = [{
            type: 'pie',
            name: '.NET',
            innerSize: '80%',
            cursor: 'pointer',
            data: [
                {
                    y: 5,
                    dataLabels: {
                        enabled: false
                    },
                    color: '#fafafa'
                }, {
                    y: 95,
                    dataLabels: {
                        enabled: false
                    },
                    color: '#f5593d'
                }
            ]
        }]
        Highcharts.chart('aql', optionsAql);

        optionsHtml5.series = [{
            type: 'pie',
            name: '.NET',
            innerSize: '80%',
            cursor: 'pointer',
            data: [
                {
                    y: 0,
                    dataLabels: {
                        enabled: false
                    },
                    color: '#fafafa'
                },
                {
                    name: '',
                    y: 100,
                    dataLabels: {
                        enabled: false
                    },
                    color: '#f5593d'
                }

            ]
        }]
        Highcharts.chart('html5', optionsHtml5);

        optionsJs.series = [{
            type: 'pie',
            name: '.NET',
            innerSize: '80%',
            cursor: 'pointer',
            data: [{
                y: 0,
                dataLabels: {
                    enabled: false
                },
                color: '#fafafa'
            },
            {
                name: '',
                y: 100,
                dataLabels: {
                    enabled: false
                },
                color: '#f5593d'
            }
            ]
        }]
        Highcharts.chart('js', optionsJs);

        optionsCss.series = [{
            type: 'pie',
            name: '.NET',
            innerSize: '80%',
            cursor: 'pointer',
            data: [{
                name: '',
                y: 15,
                dataLabels: {
                    enabled: false
                },
                color: '#fafafa'
            },
            {
                name: '',
                y: 85,
                dataLabels: {
                    enabled: false
                },
                color: '#f5593d'
            }
            ]
        }]
        Highcharts.chart('css', optionsCss);
    }

    handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			// A client-side or network error occurred. Handle it accordingly.
			console.error('An error occurred:', error.error.message);
		} else {
			// The backend returned an unsuccessful response code.
			// The response body may contain clues as to what went wrong,
			console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
		}
		// return an ErrorObservable with a user-facing error message
		console.error('Something bad happened; please try again later.');
		return throwError(error);
	};
}

export function CopyObject(objectToCopy: any) {
    return JSON.parse(JSON.stringify(objectToCopy));
}

export var HighChartsOptionsCircle = {
    exporting: {
        enabled: false,
        allowHTML: true,
    },
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: 160,
    },
    title: {
        text: ' '
    },
    tooltip: {
        enabled: false,
        headerFormat: '<span style="font-size: 10px">{series.name}</span><br/>',
        pointFormat: '<b>{point.percentage:.1f}%</b>'
    },

    credits: {
        enabled: false
    },
}
