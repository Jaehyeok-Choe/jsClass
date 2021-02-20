var app = new Vue({
    el: '#app',
    data: {
        mode: 'list',
        memo:{
            id: null,
            content: null,
            regDate: null
        },
        memos: [
            {
                id: 1,
                content: 'memo1',
                regDate: new Date()
            },
            {
                id: 2,
                content: 'memo2',
                regDate: new Date()
            },
            {
                id: 3,
                content: 'memo3',
                regDate: new Date()
            },
        ]
    },
    methods:{
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

            this.mode = 'list';
        },
        cancel: function(){
            this.mode = 'list';
        }
    }
})