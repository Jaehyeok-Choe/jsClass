var app = new Vue({
    el: '#app',
    data: {
        mode: 'list',
        memo:{
            id: null,
            content: null,
            regDate: null
        },
        memos: []
    },
    methods:{
        renew: function(val){
            return JSON.parse(JSON.stringify(val));
        },
        open: function(id){
            for(var i in this.memos){
                if(this.memos[i].id === id){
                    this.memo = this.renew(this.memos[i]);
                    break;
                }
            }
            this.mode = 'edit';
        },
        write: function(){
            this.mode = 'write';
        },
        save: function(){
            var id = this.memos.length + 1;

            this.memos.push({
                id: id,
                content: this.memo.content,
                regDate: new Date()
            });
            this.memo.content = null;
            this.mode = 'list';

            localStorage.setItem('memos', JSON.stringify(this.memos));
        },
        cancel: function(){
            this.mode = 'list';
        }
    },
    created: function(){
        var memos = localStorage.getItem('memos');
        if(memos){
            this.memos = JSON.parse(memos);
        }
    }
})