var url = 'http://localhost:9081/users';

// get
axios.get(url)
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
