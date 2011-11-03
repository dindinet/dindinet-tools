function drawpostmenugrid( divname, category, columns, cssclass, imgwidth, summarylength, closeout)
{
if(category != ''){ category = '/-/'+category};
//var bloggerUrl = 'http://dkl-simplistic.blogspot.com/feeds/posts/summary'+category+'?alt=json&callback=?';
var bloggerUrl = 'http://'+document.domain +'/feeds/posts/summary'+category+'?alt=json&callback=?';
	$.getJSON(bloggerUrl, function(json) {
	    var html = '';
	    var count = 0;
	    $.each(json.feed.entry, function(i, posts) {
	    
	    if((posts.media$thumbnail == undefined)||(imgwidth == 0)){
				html += '<div class="item-content '+cssclass+'"><a href="'+ posts.link[2].href +'">'
					html += '<div class="item-title">'+ posts.title.$t +'</div>'
            	html += '<div class="item-snippet">'+ posts.summary.$t.substr(0,summarylength) +'</div>'
				html += '</a></div>'
				}
		else
				{
				html += '<div class="item-content '+cssclass+'"><a href="'+ posts.link[2].href +'">'
					html += '<div class="item-thumbnail">'
					html += '<img alt="" src="'+ posts.media$thumbnail.url.replace(/\/s[\d]+-c\//, '/s'+imgwidth+'/') +'">'
					html += '</div>'
					html += '<div class="item-title">'+ posts.title.$t +'</div>'
               html += '<div class="item-snippet">'+ posts.summary.$t.substr(0,summarylength) +'</div>'
				html += '</a></div>'
				}
		  count = count + 1
	     if ((count % columns === 0)&& (closeout==1)){
	     html += "<div style=\"clear:both;\"></div>";}	
	     });
	     $('#'+divname).addClass(divname).html(html);    
	});
}

// AND Obfuscated at http://javascriptobfuscator.com/default.aspx

