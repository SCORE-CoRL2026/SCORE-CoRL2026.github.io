(function(){
    var _task = 'soccer_push';
    function p3(n){ return String(n).padStart(3,'0'); }
    function mkCell(src){
        var cell = document.createElement('div'); cell.className = 'rollout-cell';
        var v = document.createElement('video'); v.src = src; v.autoplay = true; v.loop = true; v.muted = true; v.setAttribute('playsinline','');
        cell.appendChild(v); return cell;
    }
    function render(){
        var fpo    = document.getElementById('fail-fpo-grid');
        var rialto = document.getElementById('fail-rialto-grid');
        if(!fpo || !rialto) return;
        fpo.innerHTML = ''; rialto.innerHTML = '';
        [0,1,2,3].forEach(function(i){
            fpo.appendChild(mkCell('static/videos/real_world_rollouts/'+_task+'/fpo/ep_'+p3(i)+'.mp4'));
            rialto.appendChild(mkCell('static/videos/real_world_rollouts/'+_task+'/rialto/ep_'+p3(i)+'.mp4'));
        });
    }
    window.failSetTask = function(btn){
        document.querySelectorAll('.fail-tab').forEach(function(b){ b.classList.remove('active'); });
        btn.classList.add('active');
        _task = btn.dataset.task; render();
    };
    render();
}());
