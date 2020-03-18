var urlUser4 = 'http://localhost:9081/users/4';
var url = 'http://localhost:9081/users';

axios.delete(urlUser4)
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