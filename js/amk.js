var _0x4853=["sf_form","form","sf","isEmpty","","sf_default_mailing_list","default_mailing_list","user_email","user_ml_optin","ml_optins_collection","ts_collection","user_retargeting_consent","ae","ae_brand_id","brand_id","ae_segment_id","segment_id","ae_activities","activities","am_dev_token","dev_token","am","am_save_mode","save_mode","library","am_playlists","playlists","resources","isArray","am_custom_playlist_name","custom_playlist_name","am_albums","albums","mk_instance","smf_subs_url","subs_url","smf","https://subs.sonymusicfans.com/submit","apple_url","https://apple.sonymusicfans.com/save/","smf_api_url","api_url","https://forms.sonymusicfans.com/wp-json/smf-api/v1/","smf_campaign_id","campaign_id","smf_campaign_key","campaign_key","loaded","new_apple_presave","undefined","length","music","includes","key","push","removeItem","log","catch","configureMusicKit","getDevToken","https://cdn.smehost.net/formssonymusicfanscom-appirioprod/wp-content/uploads/2019/07/sony_music_logo.png","Sony Music Entertainment","configure","reject","Content-Type","application/json","campaign_token/?campaign_id=","&campaign_key=","&format=json","GET","request","token","amk_jwt/?campaign_id=","&campaign_token=","jwt","error","Missing dev token credentials","resolve","getInstance","Missing dev token","isAuthorized","Unauthorized","success","then","libraryPresave","in doAction catch err: ","playlistSave","playlist","librarySave","authorize","self.loaded = false","Loading is not yet complete. Please wait a few seconds and try again.","state","formSubmission","addTracksToPlaylist","createPlaylist","addToLibrary","api","/me/library/playlists","POST","makeAPICall","id","data","Custom playlist name is empty.","songs","map","/me/library/playlists/","/tracks","Playlist ID is empty","canEdit","Authorization","Bearer ","developerToken","music-user-token","musicUserToken","url","application/x-www-form-urlencoded; charset=UTF-8","Apple","mailing-list-id[","]","each","triggered_sends[","retargeting_consent","&","join","=","keys","Email address is empty","presave","mailing_list_ids",",","triggered_sends","open","header","value","setRequestHeader","responseType","json","onload","status","response","statusText","onerror","PUT","stringify","send"];class SMEAppleMusic{constructor(_0x818fx2){const _0x818fx3=this;this[_0x4853[0]]=  !this[_0x4853[3]](_0x818fx2[_0x4853[2]][_0x4853[1]])?_0x818fx2[_0x4853[2]][_0x4853[1]]:_0x4853[4];this[_0x4853[5]]=  !this[_0x4853[3]](_0x818fx2[_0x4853[2]][_0x4853[6]])?_0x818fx2[_0x4853[2]][_0x4853[6]]:_0x4853[4];this[_0x4853[7]]= _0x4853[4];this[_0x4853[8]]= false;this[_0x4853[9]]= [];this[_0x4853[10]]= [];this[_0x4853[11]]= false;this[_0x4853[12]]=  !this[_0x4853[3]](_0x818fx2[_0x4853[12]][_0x4853[12]])?_0x818fx2[_0x4853[12]][_0x4853[12]]:_0x4853[4];this[_0x4853[13]]=  !this[_0x4853[3]](_0x818fx2[_0x4853[12]][_0x4853[14]])?_0x818fx2[_0x4853[12]][_0x4853[14]]:_0x4853[4];this[_0x4853[15]]=  !this[_0x4853[3]](_0x818fx2[_0x4853[12]][_0x4853[16]])?_0x818fx2[_0x4853[12]][_0x4853[16]]:_0x4853[4];this[_0x4853[17]]=  !this[_0x4853[3]](_0x818fx2[_0x4853[12]][_0x4853[18]])?_0x818fx2[_0x4853[12]][_0x4853[18]]:_0x4853[4];this[_0x4853[19]]=  !this[_0x4853[3]](_0x818fx2[_0x4853[21]][_0x4853[20]])?_0x818fx2[_0x4853[21]][_0x4853[20]]:_0x4853[4];this[_0x4853[22]]=  !this[_0x4853[3]](_0x818fx2[_0x4853[21]][_0x4853[23]])?_0x818fx2[_0x4853[21]][_0x4853[23]]:_0x4853[24];this[_0x4853[25]]= !this[_0x4853[3]](_0x818fx2[_0x4853[21]][_0x4853[27]][_0x4853[26]])&& Array[_0x4853[28]](_0x818fx2[_0x4853[21]][_0x4853[27]][_0x4853[26]])?_0x818fx2[_0x4853[21]][_0x4853[27]][_0x4853[26]]:[];this[_0x4853[29]]=  !this[_0x4853[3]](_0x818fx2[_0x4853[21]][_0x4853[30]])?_0x818fx2[_0x4853[21]][_0x4853[30]]:_0x4853[4];this[_0x4853[31]]= !this[_0x4853[3]](_0x818fx2[_0x4853[21]][_0x4853[27]][_0x4853[32]])&& Array[_0x4853[28]](_0x818fx2[_0x4853[21]][_0x4853[27]][_0x4853[32]])?_0x818fx2[_0x4853[21]][_0x4853[27]][_0x4853[32]]:[];this[_0x4853[33]]= null;this[_0x4853[34]]=  !this[_0x4853[3]](_0x818fx2[_0x4853[36]][_0x4853[35]])?_0x818fx2[_0x4853[36]][_0x4853[35]]:_0x4853[37];this[_0x4853[38]]=  !this[_0x4853[3]](_0x818fx2[_0x4853[36]][_0x4853[38]])?_0x818fx2[_0x4853[36]][_0x4853[38]]:_0x4853[39];this[_0x4853[40]]=  !this[_0x4853[3]](_0x818fx2[_0x4853[36]][_0x4853[41]])?_0x818fx2[_0x4853[36]][_0x4853[41]]:_0x4853[42];this[_0x4853[43]]=  !this[_0x4853[3]](_0x818fx2[_0x4853[36]][_0x4853[44]])?_0x818fx2[_0x4853[36]][_0x4853[44]]:_0x4853[4];this[_0x4853[45]]=  !this[_0x4853[3]](_0x818fx2[_0x4853[36]][_0x4853[46]])?_0x818fx2[_0x4853[36]][_0x4853[46]]:_0x4853[4];this[_0x4853[47]]= false;this[_0x4853[48]]= _0x818fx2[_0x4853[21]][_0x4853[48]];if( typeof localStorage!== _0x4853[49]){const _0x818fx4=[];for(let _0x818fx5=0;_0x818fx5< localStorage[_0x4853[50]];_0x818fx5++){if(localStorage[_0x4853[53]](_0x818fx5)[_0x4853[52]](_0x4853[51])){_0x818fx4[_0x4853[54]](localStorage[_0x4853[53]](_0x818fx5))}};for(let _0x818fx6=0;_0x818fx6< _0x818fx4[_0x4853[50]];_0x818fx6++){localStorage[_0x4853[55]](_0x818fx4[_0x818fx6])}};_0x818fx3[_0x4853[58]]()[_0x4853[57]]((_0x818fx7)=>{console[_0x4853[56]](_0x818fx7)})}isEmpty(_0x818fx9){return !!( typeof _0x818fx9=== _0x4853[49]|| _0x818fx9=== _0x4853[4]|| _0x818fx9=== []|| _0x818fx9=== null|| _0x818fx9[_0x4853[50]]=== 0)}async configureMusicKit(){const _0x818fx3=this;try{ await _0x818fx3[_0x4853[59]]();MusicKit[_0x4853[62]]({developerToken:_0x818fx3[_0x4853[19]],app:{icon:_0x4853[60],name:_0x4853[61]}});_0x818fx3[_0x4853[47]]= true;return true}catch(err){console[_0x4853[56]](err);return Promise[_0x4853[63]](err)}}async getDevToken(){const _0x818fx3=this;if(_0x818fx3[_0x4853[3]](_0x818fx3[_0x4853[19]])){if(!_0x818fx3[_0x4853[3]](_0x818fx3[_0x4853[43]])&&  !_0x818fx3[_0x4853[3]](_0x818fx3[_0x4853[45]])){const _0x818fxc=[{header:_0x4853[64],value:_0x4853[65]}];const _0x818fxd=(_0x4853[4]+ (_0x818fx3[_0x4853[40]])+ _0x4853[66]+ (_0x818fx3[_0x4853[43]])+ _0x4853[67]+ (_0x818fx3[_0x4853[45]])+ _0x4853[68]);try{const _0x818fxe= await _0x818fx3[_0x4853[70]](_0x818fxd,_0x4853[69],_0x818fxc);const _0x818fxf=_0x818fxe[_0x4853[71]];const _0x818fx10=(_0x4853[4]+ (_0x818fx3[_0x4853[40]])+ _0x4853[72]+ (_0x818fx3[_0x4853[43]])+ _0x4853[67]+ (_0x818fx3[_0x4853[45]])+ _0x4853[73]+ _0x818fxf+ _0x4853[68]);try{const _0x818fx11= await _0x818fx3[_0x4853[70]](_0x818fx10,_0x4853[69],_0x818fxc);_0x818fx3[_0x4853[19]]= _0x818fx11[_0x4853[74]];return _0x818fx3[_0x4853[19]]}catch(err){return Promise[_0x4853[63]](err)}}catch(err_1){return Promise[_0x4853[63]](err_1)}}else {return Promise[_0x4853[63]]({state:_0x4853[75],error:_0x4853[76]})}}else {return Promise[_0x4853[77]](true)}}doActions(_0x818fx13,_0x818fx14,_0x818fx15,_0x818fx16,_0x818fx17){const _0x818fx3=this;if(_0x818fx3[_0x4853[47]]=== true){_0x818fx3[_0x4853[7]]=  !_0x818fx3[_0x4853[3]](_0x818fx13)?_0x818fx13:_0x4853[4];_0x818fx3[_0x4853[8]]= _0x818fx14=== true;_0x818fx3[_0x4853[9]]= _0x818fx15;_0x818fx3[_0x4853[10]]= _0x818fx17;_0x818fx3[_0x4853[11]]= _0x818fx16=== true;_0x818fx3[_0x4853[33]]= MusicKit[_0x4853[78]]();if(_0x818fx3[_0x4853[3]](_0x818fx3[_0x4853[19]])){return Promise[_0x4853[63]]({state:_0x4853[75],error:_0x4853[79]})};return _0x818fx3[_0x4853[33]][_0x4853[89]]()[_0x4853[83]](()=>{if(!_0x818fx3[_0x4853[33]][_0x4853[80]]){return Promise[_0x4853[63]]({state:_0x4853[75],error:_0x4853[81]})};if(_0x818fx3[_0x4853[48]]&& _0x818fx3[_0x4853[22]]=== _0x4853[24]&& _0x818fx3[_0x4853[25]][_0x4853[50]]=== 0){return _0x818fx3[_0x4853[84]]()[_0x4853[83]](()=>({state:_0x4853[82]}))[_0x4853[57]]((_0x818fx7)=>Promise[_0x4853[63]](_0x818fx7))}else {switch(_0x818fx3[_0x4853[22]]){case _0x4853[87]:return _0x818fx3[_0x4853[86]]()[_0x4853[83]](()=>({state:_0x4853[82]}))[_0x4853[57]]((_0x818fx7)=>{console[_0x4853[56]](_0x4853[85],_0x818fx7);Promise[_0x4853[63]](_0x818fx7)});case _0x4853[24]:;default:return _0x818fx3[_0x4853[88]]()[_0x4853[83]](()=>({state:_0x4853[82]}))[_0x4853[57]]((_0x818fx7)=>{console[_0x4853[56]](_0x818fx7);Promise[_0x4853[63]](_0x818fx7)})}}})[_0x4853[57]]((_0x818fx7)=>({state:_0x4853[75],error:_0x818fx7}))}else {console[_0x4853[56]](_0x4853[90])};return Promise[_0x4853[63]]({state:_0x4853[75],error:_0x4853[91]})}playlistSave(){const _0x818fx3=this;return _0x818fx3[_0x4853[33]][_0x4853[97]][_0x4853[96]]({playlists:_0x818fx3[_0x4853[25]],albums:_0x818fx3[_0x4853[31]]})[_0x4853[83]](()=>_0x818fx3[_0x4853[95]]())[_0x4853[83]]((_0x818fx19)=>_0x818fx3[_0x4853[94]](_0x818fx19))[_0x4853[83]](()=>_0x818fx3[_0x4853[93]]())[_0x4853[83]](()=>({state:_0x4853[82]}))[_0x4853[57]]((_0x818fx7)=> typeof _0x818fx7[_0x4853[92]]!== _0x4853[49]?Promise[_0x4853[63]](_0x818fx7):Promise[_0x4853[63]]({state:_0x4853[75],error:_0x818fx7}))}librarySave(){const _0x818fx3=this;return _0x818fx3[_0x4853[33]][_0x4853[97]][_0x4853[96]]({playlists:_0x818fx3[_0x4853[25]],albums:_0x818fx3[_0x4853[31]]})[_0x4853[83]](()=>_0x818fx3[_0x4853[93]]())[_0x4853[83]](()=>({state:_0x4853[82]}))[_0x4853[57]]((_0x818fx7)=>{console[_0x4853[56]](_0x818fx7);Promise[_0x4853[63]]({state:_0x4853[75],error:_0x818fx7})})}async createPlaylist(){const _0x818fx3=this;if(!_0x818fx3[_0x4853[3]](_0x818fx3[_0x4853[29]])){try{const _0x818fxe= await _0x818fx3[_0x4853[100]](_0x4853[98],_0x4853[99],{attributes:{name:_0x818fx3[_0x4853[29]],description:_0x4853[4]}});return _0x818fxe[_0x4853[102]][0][_0x4853[101]]}catch(err){return Promise[_0x4853[63]]({state:_0x4853[75],error:err})}}else {return Promise[_0x4853[63]]({state:_0x4853[75],error:_0x4853[103]})}}async addTracksToPlaylist(_0x818fx19){const _0x818fx3=this;if(!_0x818fx3[_0x4853[3]](_0x818fx19)){const _0x818fx1d=_0x818fx3[_0x4853[31]][_0x4853[105]]((_0x818fx1e)=>({id:_0x818fx1e,type:_0x4853[104]}));try{ await _0x818fx3[_0x4853[100]]((_0x4853[106]+ _0x818fx19+ _0x4853[107]),_0x4853[99],{data});return true}catch(err){return Promise[_0x4853[63]]({state:_0x4853[75],error:err})}}else {return Promise[_0x4853[63]]({state:_0x4853[75],error:_0x4853[108]})}}getLibraryPlaylists(){const _0x818fx3=this;return _0x818fx3[_0x4853[33]][_0x4853[97]][_0x4853[24]][_0x4853[26]](null,{limit:100})[_0x4853[83]]((_0x818fx20)=>{const _0x818fx21=[];for(let _0x818fx22=0;_0x818fx22< _0x818fx20[_0x4853[50]];_0x818fx22++){if(_0x818fx20[_0x818fx22][_0x4853[109]]){_0x818fx21[_0x4853[54]](_0x818fx20[_0x818fx22])}};return _0x818fx21})[_0x4853[57]]((_0x818fx7)=>Promise[_0x4853[63]]({state:_0x4853[75],error:_0x818fx7}))}async makeAPICall(_0x818fx24,_0x818fx25,_0x818fx1d){const _0x818fx3=this;const _0x818fxc=[{header:_0x4853[110],value:(_0x4853[111]+ (_0x818fx3[_0x4853[33]][_0x4853[112]])+ _0x4853[4])},{header:_0x4853[113],value:_0x818fx3[_0x4853[33]][_0x4853[114]]},{header:_0x4853[64],value:_0x4853[65]}];try{const _0x818fxe= await _0x818fx3[_0x4853[70]](_0x818fx3[_0x4853[33]][_0x4853[97]][_0x4853[115]]+ _0x818fx24,_0x818fx25,_0x818fxc,_0x818fx1d,true);return _0x818fxe}catch(err){return Promise[_0x4853[63]](err)}}async formSubmission(){const _0x818fx3=this;if(!_0x818fx3[_0x4853[3]](_0x818fx3[_0x4853[7]])){const _0x818fxc=[{header:_0x4853[64],value:_0x4853[116]}];const _0x818fx1d={field_email_address:_0x818fx3[_0x4853[7]],form:_0x818fx3[_0x4853[0]],ae:_0x818fx3[_0x4853[12]],ae_brand_id:_0x818fx3[_0x4853[13]],ae_segment_id:_0x818fx3[_0x4853[15]],ae_activities:_0x818fx3[_0x4853[17]],am_music_user_token:_0x818fx3[_0x4853[33]][_0x4853[114]],source_channel:_0x4853[117]};if(_0x818fx3[_0x4853[8]]=== true){_0x818fx1d[_0x4853[6]]= _0x818fx3[_0x4853[5]]};if(_0x818fx3[_0x4853[9]]!== undefined&& _0x818fx3[_0x4853[9]][_0x4853[50]]> 0){$[_0x4853[120]](_0x818fx3[_0x4853[9]],function(_0x818fx27,_0x818fx9){_0x818fx1d[(_0x4853[118]+ _0x818fx27+ _0x4853[119])]= _0x818fx9})};if(_0x818fx3[_0x4853[10]]!== undefined&& _0x818fx3[_0x4853[10]][_0x4853[50]]> 0){$[_0x4853[120]](_0x818fx3[_0x4853[10]],function(_0x818fx27,_0x818fx9){_0x818fx1d[(_0x4853[121]+ _0x818fx27+ _0x4853[119])]= _0x818fx9})};if(_0x818fx3[_0x4853[11]]=== true){_0x818fx1d[_0x4853[122]]= _0x818fx3[_0x4853[11]]};const _0x818fx28=Object[_0x4853[126]](_0x818fx1d)[_0x4853[105]]((_0x818fx27)=>(_0x4853[4]+ (encodeURIComponent(_0x818fx27))+ _0x4853[125]+ (encodeURIComponent(_0x818fx1d[_0x818fx27]))+ _0x4853[4]))[_0x4853[124]](_0x4853[123]);try{const _0x818fxe= await _0x818fx3[_0x4853[70]](_0x818fx3[_0x4853[34]],_0x4853[99],_0x818fxc,_0x818fx28,false);return _0x818fxe}catch(err){return Promise[_0x4853[63]](err)}}else {return Promise[_0x4853[63]](_0x4853[127])}}libraryPresave(){const _0x818fx3=this;return _0x818fx3[_0x4853[128]]()[_0x4853[83]](()=>({state:_0x4853[82]}))[_0x4853[57]]((_0x818fx7)=>{Promise[_0x4853[63]]({state:_0x4853[75],error:_0x818fx7})})}async presave(){const _0x818fx3=this;if(!_0x818fx3[_0x4853[3]](_0x818fx3[_0x4853[7]])){const _0x818fxc=[{header:_0x4853[64],value:_0x4853[116]}];const _0x818fx1d={field_email_address:_0x818fx3[_0x4853[7]],form:_0x818fx3[_0x4853[0]],ae:_0x818fx3[_0x4853[12]],ae_brand_id:_0x818fx3[_0x4853[13]],ae_segment_id:_0x818fx3[_0x4853[15]],ae_activities:_0x818fx3[_0x4853[17]],am_music_user_token:_0x818fx3[_0x4853[33]][_0x4853[114]],source_channel:_0x4853[117]};if(_0x818fx3[_0x4853[8]]=== true){_0x818fx1d[_0x4853[6]]= _0x818fx3[_0x4853[5]]};if(_0x818fx3[_0x4853[9]]!== undefined&& _0x818fx3[_0x4853[9]][_0x4853[50]]> 0){_0x818fx1d[_0x4853[129]]= _0x818fx3[_0x4853[9]][_0x4853[124]](_0x4853[130])};if(_0x818fx3[_0x4853[10]]!== undefined&& _0x818fx3[_0x4853[10]][_0x4853[50]]> 0){_0x818fx1d[_0x4853[131]]= _0x818fx3[_0x4853[10]][_0x4853[124]](_0x4853[130])};if(_0x818fx3[_0x4853[11]]=== true){_0x818fx1d[_0x4853[122]]= _0x818fx3[_0x4853[11]]};const _0x818fx28=Object[_0x4853[126]](_0x818fx1d)[_0x4853[105]]((_0x818fx27)=>(_0x4853[4]+ (encodeURIComponent(_0x818fx27))+ _0x4853[125]+ (encodeURIComponent(_0x818fx1d[_0x818fx27]))+ _0x4853[4]))[_0x4853[124]](_0x4853[123]);try{const _0x818fxe= await _0x818fx3[_0x4853[70]](_0x818fx3[_0x4853[38]],_0x4853[99],_0x818fxc,_0x818fx28,false);return _0x818fxe}catch(err){console[_0x4853[56]](err);return Promise[_0x4853[63]](err)}}else {return Promise[_0x4853[63]](_0x4853[127])}}request(_0x818fx2c,_0x818fx25,_0x818fxc,_0x818fx1d,_0x818fx2d){const _0x818fx3=this;return  new Promise((_0x818fx2e,_0x818fx2f)=>{const _0x818fx30= new XMLHttpRequest();_0x818fx30[_0x4853[132]](_0x818fx25,_0x818fx2c);if(!_0x818fx3[_0x4853[3]](_0x818fxc)){for(let _0x818fx31=0;_0x818fx31< _0x818fxc[_0x4853[50]];_0x818fx31++){_0x818fx30[_0x4853[135]](_0x818fxc[_0x818fx31][_0x4853[133]],_0x818fxc[_0x818fx31][_0x4853[134]])}};_0x818fx30[_0x4853[136]]= _0x4853[137];_0x818fx30[_0x4853[138]]= function(){if(this[_0x4853[139]]>= 200&& this[_0x4853[139]]< 300){_0x818fx2e(_0x818fx30[_0x4853[140]])}else {_0x818fx2f({state:_0x4853[75],status:this[_0x4853[139]],statusText:_0x818fx30[_0x4853[141]]})}};_0x818fx30[_0x4853[142]]= function(){_0x818fx2f({state:_0x4853[75],status:this[_0x4853[139]],statusText:_0x818fx30[_0x4853[141]]})};if(_0x818fx25=== _0x4853[99]|| _0x818fx25=== _0x4853[143]){_0x818fx30[_0x4853[145]](_0x818fx2d=== true?JSON[_0x4853[144]](_0x818fx1d):_0x818fx1d)}else {_0x818fx30[_0x4853[145]]()}})}}