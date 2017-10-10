
//https://merx-pbx-gateway-event-manager.herokuapp.com/socket.io/1/?t=1469063837897
import io from 'socket.io-client';
import React from 'react';
import BuildViewFromMeta from '../util/BuildViewFromMeta';

class SugarConnection extends React.Component {
	constructor(props) {
		super(props);
		this.access_token = '';
		this.refresh_token = '';
	} 
	_getLastTenCalls(){
		return true;
	}

	_getContacts(search){
		return true;
	}
	_tokenSugarCRM (userData, callback){
		fetch(userData.url+'/oauth2/token', {
			method: 'POST',
			headers: {
		    	'Accept': 'application/json',
		    	'Content-Type': 'application/json',
			},
			body: JSON.stringify({
		    	"grant_type":"password",
				"client_id":"sugar",
		   		"client_secret":"",
		   		"username":userData.user,
		   		"password":userData.pwd,
		   		"platform":"base"
		  	})
		})
		.then((response) => {
	        return callback(response);
	    })
	    .catch((error) => {
	    	console.error("Error -- get token CRM ++++ ",error);
	    });
	}
	_loginSugarCRM(userData,callback){
		var self = this;
		this._tokenSugarCRM(userData,function(response){
			self.access_token = response.access_token;
			self.refresh_token = response.refresh_token;
			// rest/v10/me/preferences/merx/cti
			fetch(userData.url+'rest/v10/me/preferences/merx/cti', {
				method: 'POST',
				headers: {
			    	'Accept': 'application/json',
			    	'Content-Type': 'application/json',
			    	'OAuth-Token': self.access_token
				},
			})
			.then((response) => {
		        return callback(response);
		    })
		    .catch((error) => {
		    	console.error("Error -- get token CRM ++++ ",error);
		    });
		})
	}
	_getHtmlForm(module,callback){
		// TODO obtener el html de la instancia sugar
		console.log(' Uitil SC Preparando formulario contactos ------- ');
		let html='';
		//document.cookie += "sessionid=jv66n00parjh8x235mp0kng5rjszxrvv; ";
		//document.cookie += "csrftoken=zwr1oSKc7TBg5SgGKgdo63T78xQkptRF;";
		//document.cookie += "__wzd81ce1a2ed05a2b9dc89c=1471284975|bcc95c1bbde7";
		//document.cookie += "djdt=hide;";
		//debugger;
		let options = { method: 'GET', mode: 'no-cors',credentials: 'same-origin',crossDomain:true,headers: new Headers({'Accept': 'application/json','Content-Type': 'application/json','X-CSRFToken':'uqMJtONPbMCX7rLHZzgZjUtvs1NBlbCo'})};
		fetch('http://localhost:8000/api/getmetadata/?module='+module, options)
		.then(function(meta) {
			debugger;
			console.log(meta.headers.get('Content-Type'))
  			console.log(meta.headers.get('Date'))
  			console.log(meta.status)
  			console.log(meta.statusText)
		   	console.log(meta); 
		   	if(meta.ok)
				return meta.json();
			else
				return meta;
		})
		.then(function(metaJson) {
	    	debugger;
		   	console.log(metaJson); 
		   	/*BuildViewFromMeta.setViewMeta(metaJson);
			html = BuildViewFromMeta.getHtml();
			if(callback){
				return callback(html);
			}
			else
				return html;*/
			return '';
	   	})
	    .catch(function(error) {
	    	debugger;
	    	console.error(error);
	    })
	    /*return fetch('http://facebook.github.io/react-native/movies.json')
	    	.then((response) => response.json())
	      	.then((responseJson) => {
	      		debugger;
	        	return responseJson.movies;
	      	})
	      	.catch((error) => {
	        	console.error(error);
	      	});*/
	    /*$.ajax({ // create an AJAX call...
	        data: {'module':module}, // get the form data
	        type: 'GET', // GET or POST
	        url: 'http://actioapp.dev:8000/api/getmetadata/', // the file to call
	        headers: {'Access-Control-Allow-Origin': '*','Content-Type': 'application/json','X-CSRFToken':'uqMJtONPbMCX7rLHZzgZjUtvs1NBlbCo','Access-Control-Allow-Credentials' : true},
	        crossDomain: true,
	        success: function(response) { 
	        	debugger;
	        },
	        error: function(err){
	        	debugger;
	        }
	    });*/
	}
	_saveRecord(data){
		// data.module -- modulo
		// data.record -- datos
		return '';
	}

}
const CRMConnection = new SugarConnection;

export default CRMConnection;