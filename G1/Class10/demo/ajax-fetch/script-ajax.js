let baseUrl = 'https://jsonplaceholder.typicode.com/';

let postsUrl = 'https://jsonplaceholder.typicode.com/posts';

$('#btn').on('click', function() {
    $.ajax({
        url: postsUrl,
        method: 'get',
        success: function(serverOutput) {
            console.log(serverOutput);
            let html = '';
            for(let post of serverOutput) {
                html += `
                    <li id=${post.id}>
                        ${post.body}
                    </li>`
            }
            $('#posts').html(html);
        },
        error: function(error) {
            console.log(error);
        }
    });
});

$('#posts').on('click', function (e) {
    console.log(e.target.id);
    $.ajax({
        url: postsUrl + '/asd' + e.target.id,
        method: 'get',
        success: function(post) {
            console.log(post);
        },
        error: function(error) {
            console.log(error);
        }
    })
});