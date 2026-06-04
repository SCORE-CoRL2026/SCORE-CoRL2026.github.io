(function(){
    var _ms = 'credit_card';

    // bump when sim-compare video files are replaced, to bust browser cache
    var CACHE_BUST = '20260604a';

    var V = 'static/videos/sim_compare/';

    function mkVideo(src){
        var fig = document.createElement('figure'); fig.className = 'ms-cell';
        var v = document.createElement('video');
        v.src = src + '?v=' + CACHE_BUST; v.autoplay = true; v.loop = true; v.muted = true;
        v.setAttribute('playsinline','');
        fig.appendChild(v); return fig;
    }

    function render(){
        var bg = document.getElementById('ms-base');
        var sg = document.getElementById('ms-score');
        bg.innerHTML = ''; sg.innerHTML = '';
        bg.appendChild(mkVideo(V + _ms + '/base.mp4'));
        sg.appendChild(mkVideo(V + _ms + '/score.mp4'));
    }

    window.msSetTab = function(btn){
        document.querySelectorAll('.ms-tab').forEach(function(b){ b.classList.remove('active'); });
        btn.classList.add('active');
        _ms = btn.dataset.ms; render();
    };

    render();
}());
