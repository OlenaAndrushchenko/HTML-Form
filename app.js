const form = document.getElementById('form')

form.addEventListener('submit', function(event) {
    event.preventDefault()

    const name = document.getElementById('name').value
    console.log('name:', name);
    
    const email = document.getElementById('email').value
    console.log('email:', email);
    
    const age = document.getElementById('age').value
    console.log('age:', age);

    const description = document.getElementById('description').value
    console.log('description:', description);

    const recommend = document.querySelector('input[name="recommend"]:checked')
    console.log('recommend:', recommend.value);

    const languages = []
    document.querySelectorAll('input[name="languages"]:checked').forEach(checkbox => {
        languages.push(checkbox.value)
    })
    console.log('languages:', languages.join(', '));

    const comments = document.getElementById('comments')
    console.log('comment:', comments.value);
})
