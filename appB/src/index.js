const button = import('appA/Button');

button.then(res => {
    console.log('button', res.name)
})