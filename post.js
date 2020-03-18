// post
var url = 'http://localhost:9081/users';

var newUser = {
    id: 4,
    name: 'long'
};

axios.post(url, newUser)
.then(function(res) {
   return axios.get(url);
})
.then(function(res) {
    var data = res.data;
    render(data);
})
.catch(function(err) {
    console.log(err);
});

var users = document.getElementById('users');

function render(data) {
   var content = data.map(function(item) {
       return '<tr><td>' + item.name + '</td></tr>';
   })
   users.innerHTML = content.join('');
}
